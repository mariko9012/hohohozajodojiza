<template>
  <div class="bgimageholder" ref="container" title="">
    <transition name="fade">
      <div v-if="!background" class="blurimageholder">
        <div
          class="blurimage"
          :style="{
            'background-image': `url('${src}')`,
            'background-position': `${x * 100}% ${y * 100}%`,
          }"
        ></div>
      </div>
    </transition>
    <img
      @mousedown="startDrag"
      @mousemove="drag"
      @mouseup="endDrag"
      @mouseleave="endDrag"
      @dblclick="doubleClick"
      @load="onImgLoad"
      :src="src"
      ref="mainimage"
      class="mainimage"
      :class="{
        transitioning: isTransitioning,
        dragging: (canDrag[0] || canDrag[1]) && dragStart,
        draggable: canDrag[0] || canDrag[1],
        gliding:
          !dragStart &&
          (Math.abs(dragVelocity[0]) > 0 || Math.abs(dragVelocity[1]) > 0),
      }"
      :style="{
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        height: height + 'px',
      }"
    />
    <div class="mask" :class="{ on: !isLoaded }"></div>
    <div
      class="debugtarget"
      :style="{
        left: width * toX + dragOffset[0] + 'px',
        top: height * toY + dragOffset[1] + 'px',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    image: {},
    x: { default: 0 },
    y: { default: 0 },
    z: { default: 0 },
    toX: {},
    toY: {},
    toZ: {},
    slideTime: { default: 6000 },
    background: {},
    interactable: { default: true },
    index: {},
  },
  data() {
    return {
      dragStart: null,
      dragOffset: [0, 0],
      prevDragOffset: [0, 0],
      dragVelocity: [0, 0],
      imageSize: [1200, 1200],
      zoom: 1,
      zoomMultiplier: 1.005,
      src: null,
      isTransitioning: false,
      transitionTimeout: false,
      fadeTimeout: null,
      prevImage: null,
      isLoaded: false,
      isSlowSliding: false,
      slowSlideStart: null,
      slowSlideTarget: null,
      isDoubleClickZooming: false,
    }
  },
  computed: {
    winSize() {
      return this.$store.state.winSize
    },
    path() {
      return this.$store.state.path
    },

    width() {
      if (!this.src) return 0
      let w = this.imageSize[0]
      let h = this.imageSize[1]
      // if either dimension is smaller than the window, show it full size
      // todo maybe allow zooming out?
      if (w < this.winSize[0] || h < this.winSize[1]) return w
      // otherwise, allow zoom
      w *= this.zoom
      return w
    },
    height() {
      return this.width * (1 / this.aspectRatio)
    },

    left() {
      if (!this.canDrag[0]) return this.winSize[0] / 2 - this.width / 2
      return this.dragOffset[0]
    },
    top() {
      if (!this.canDrag[1]) return this.winSize[1] / 2 - this.height / 2
      return this.dragOffset[1]
    },

    aspectRatio() {
      return this.imageSize[0] / this.imageSize[1]
    },
    windowAspectRatio() {
      return this.winSize[0] / this.winSize[1]
    },
    canDrag() {
      return [this.width > this.winSize[0], this.height > this.winSize[1]]
    },
    minZoom() {
      let minZoom = Math.max(
        this.winSize[0] / this.imageSize[0],
        this.winSize[1] / this.imageSize[1],
      )
      if (minZoom > 1) minZoom = 1
      return minZoom
    },
  },
  watch: {
    width() {},
    minZoom() {
      this.zoom = this.minZoom + (1 - this.minZoom) * this.z
    },
    zoom() {
      this.fixBounds()
    },
    index() {
      this.paneChange()
    },
    winSize() {
      this.fixBounds()
    },
    isSlowSliding() {
      if (!this.isSlowSliding) {
        this.slowSlideStart = null
        this.slowSlideTarget = null
      } else {
        this.slowSlideStart = [...this.dragOffset, this.zoom]
        const zoomPercent = (this.toZ - this.z || 0) + 1
        this.slowSlideTarget = [
          this.toX
            ? -1 * this.width * zoomPercent * this.toX + this.winSize[0] / 2
            : this.width +
              this.dragOffset[0] -
              (this.width + this.dragOffset[0]) * zoomPercent,
          this.toY
            ? -1 * this.height * zoomPercent * this.toY + this.winSize[1] / 2
            : this.height +
              this.dragOffset[1] -
              (this.height + this.dragOffset[1]) * zoomPercent,
          ,
          this.toZ ? this.minZoom + (1 - this.minZoom) * this.toZ : this.zoom,
        ]
        this.slowSlideTarget = [
          ...this.getClosestValidPosition(this.slowSlideTarget),
          this.slowSlideTarget[2],
        ]
        console.log(
          this.slowSlideStart,
          this.slowSlideTarget,
          zoomPercent,
          this.width + this.dragOffset[0],
          (this.width + this.dragOffset[0]) * zoomPercent,
        )
      }
    },
  },
  mounted() {
    this.paneChange()
    window.addEventListener('mousewheel', this.handleScroll)
    window.addEventListener('DOMMouseScroll', this.handleScroll)
  },
  beforeDestroy() {
    window.clearTimeout(this.transitionTimeout)
    window.removeEventListener('mousewheel', this.handleScroll)
    window.removeEventListener('DOMMouseScroll', this.handleScroll)
  },
  methods: {
    onImgLoad(e) {
      const loadedImage = e ? e.target : this.$refs.mainimage
      this.imageSize = [loadedImage.naturalWidth, loadedImage.naturalHeight]
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoaded = true
          this.resetPositioning()
          this.$nextTick(this.startSlowSlide)
        }, 10)
      })
    },
    paneChange() {
      window.clearTimeout(this.transitionTimeout)
      this.isTransitioning = false
      this.isSlowSliding = false
      this.isDoubleClickZooming = false
      const sameImage = this.prevImage === this.image
      this.prevImage = this.image
      if (sameImage && this.isLoaded) this.transitionImage()
      else this.loadImage()
    },
    transitionImage() {
      this.isTransitioning = true
      this.transitionTimeout = setTimeout(() => {
        this.isTransitioning = false
        this.startSlowSlide()
      }, 1000)
      this.resetPositioning()
    },
    loadImage() {
      this.isLoaded = false
      new Image().src = `${this.path}/${this.image}`
      this.fadeTimeout = window.setTimeout(() => {
        this.isTransitioning = false
        const loadedImage = new Image()
        loadedImage.addEventListener('load', async e => {
          if (this.src === `${this.path}/${this.image}`) return this.onImgLoad()
          this.src = `${this.path}/${this.image}`
        })
        loadedImage.src = `${this.path}/${this.image}`
      }, 200)
    },
    startSlowSlide() {
      if (!this.toX && !this.toY && !this.toZ) return
      this.isSlowSliding = true
      this.isTransitioning = false
      window.clearTimeout(this.transitionTimeout)
      this.$nextTick(() => {
        const slowSlideDiff = this.slowSlideStart.map((value, index) => {
          return this.slowSlideTarget[index] !== undefined
            ? this.slowSlideTarget[index] - value
            : 0
        })
        console.log(
          this.slowSlideStart,
          this.slowSlideTarget,
          slowSlideDiff,
          this.left,
          this.toX,
          this.x,
          this.top,
          this.toY,
          this.y,
        )
        let startTime = Date.now()
        const doubleClickZoom = () => {
          if (!this.isSlowSliding) return
          let done = false
          let stepX = (Date.now() - startTime) / this.slideTime
          // step x and y are on an easing bell curve, not in space on the UI
          if (stepX >= 1) {
            stepX = 1
            done = true
          }
          const stepY = this.easingFunction(stepX)
          const stepTarget = slowSlideDiff.map((value, index) => {
            if (index > 2) return this.slowSlideStart[index] + value * stepY
            else return this.slowSlideStart[index] + value * stepY
          })
          // console.log(
          //   'target',
          //   stepTarget.map(t => t.toFixed(1)),
          // )
          const validPos = this.getClosestValidPosition(stepTarget)
          this.$set(this, 'dragOffset', validPos)
          this.zoom =
            stepTarget[2] < this.minZoom ? this.minZoom : stepTarget[2]
          if (!done) window.requestAnimationFrame(doubleClickZoom)
          else this.isSlowSliding = false
        }
        doubleClickZoom()
      })
    },
    doubleClick(e) {
      const doubleClickZoomMultiplier = 1.25
      const zoomStart = this.zoom
      let zoomTarget = Math.max(doubleClickZoomMultiplier, this.minZoom)
      this.isSlowSliding = false
      this.isTransitioning = false
      this.dragStart = null
      this.dragVelocity = [0, 0]
      const xOnImage = (e.clientX - this.left) / this.width,
        yOnImage = (e.clientY - this.top) / this.height
      console.log(xOnImage, yOnImage)
      this.isDoubleClickZooming = true

      const widthGain = this.width * doubleClickZoomMultiplier - this.width
      const widthGainOnLeftSide = widthGain * xOnImage

      const heightGain = this.height * doubleClickZoomMultiplier - this.height
      const heightGainOnTopSide = heightGain * yOnImage

      const targetDiff = [
        this.dragOffset[0] - widthGainOnLeftSide,
        this.dragOffset[1] - heightGainOnTopSide,
        zoomTarget - this.zoom,
      ]
      const startPosition = [...this.dragOffset, this.zoom]

      let startTime = Date.now()

      const doubleClickStep = () => {
        if (!this.isDoubleClickZooming) return
        let done = false
        let stepX = (Date.now() - startTime) / 500
        // step x and y are on an easing bell curve, not in space on the UI
        if (stepX >= 1) {
          stepX = 1
          done = true
        }
        const stepY = this.easingFunction(stepX)
        // console.log(targetDiff)
        const stepTarget = targetDiff.map((diff, index) => {
          if (index > 2) return startPosition[index] + diff * stepY
          else return startPosition[index] + diff * stepY
        })
        const validPos = this.getClosestValidPosition(stepTarget)
        this.$set(this, 'dragOffset', validPos)
        this.zoom = stepTarget[2] < this.minZoom ? this.minZoom : stepTarget[2]
        if (!done) window.requestAnimationFrame(doubleClickStep)
        else this.isDoubleClickZooming = false
      }
      doubleClickStep()
    },
    handleScroll(e) {
      if (!this.interactable || e.deltaY === 0) return

      this.isSlowSliding = false
      this.isTransitioning = false

      const [xPosAvg, yPosAvg] = this.getZoomFocus(e)

      const zoomAmount = 1 + Math.abs(e.deltaY) / 400
      const zoomIn = e.deltaY < 0
      const prevZoom = this.zoom
      let zoomStepPercentage = 1
      if (zoomIn && this.zoom < 1) {
        this.zoom *= this.zoomMultiplier * zoomAmount
        if (this.zoom > 1) {
          const zoomStep = Math.abs(this.zoom - prevZoom)
          zoomStepPercentage = (1 - prevZoom) / zoomStep
          this.zoom = 1
        }
        const widthGain =
          this.width * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
          this.width * zoomStepPercentage
        const widthGainOnLeftSide = widthGain * xPosAvg
        this.dragOffset[0] -= widthGainOnLeftSide

        const heightGain =
          this.height * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
          this.height * zoomStepPercentage
        const heightGainOnTopSide = heightGain * yPosAvg
        this.dragOffset[1] -= heightGainOnTopSide
      } else if (!zoomIn && this.zoom > this.minZoom) {
        this.zoom /= this.zoomMultiplier * zoomAmount
        if (this.zoom < this.minZoom) {
          const zoomStep = Math.abs(this.zoom - prevZoom)
          zoomStepPercentage = (prevZoom - this.minZoom) / zoomStep
          this.zoom = this.minZoom
        }
        const widthLoss =
          this.width * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
          this.width * zoomStepPercentage
        const widthLossOnLeftSide = widthLoss * xPosAvg
        this.dragOffset[0] += widthLossOnLeftSide

        const heightLoss =
          this.height * this.zoomMultiplier * zoomAmount * zoomStepPercentage -
          this.height * zoomStepPercentage
        const heightLossOnTopSide = heightLoss * yPosAvg
        this.dragOffset[1] += heightLossOnTopSide
      }
    },
    resetPositioning() {
      this.zoom = this.minZoom + (1 - this.minZoom) * this.z
      this.$set(this, 'dragOffset', [
        -1 * this.width * this.x + this.winSize[0] / 2,
        -1 * this.height * this.y + this.winSize[1] / 2,
      ])
      this.fixBounds()
    },
    startDrag(e) {
      if (!this.interactable) return
      this.isSlowSliding = false
      this.isTransitioning = false
      this.dragVelocity = [0, 0]
      this.dragStart = [
        e.clientX - this.dragOffset[0],
        e.clientY - this.dragOffset[1],
      ]
      e.preventDefault()
    },
    drag(e) {
      e.preventDefault()
      if (!this.dragStart) return
      this.prevDragOffset = this.dragOffset
      let dragX = e.clientX - this.dragStart[0],
        dragY = e.clientY - this.dragStart[1]
      if (!this.canDrag[0]) dragX = 0
      if (!this.canDrag[1]) dragY = 0
      this.dragOffset = [dragX, dragY]
      this.fixBounds()
      this.dragVelocity = [
        this.dragVelocity[0] / 2 +
          (this.prevDragOffset[0] - this.dragOffset[0]) / 2,
        this.dragVelocity[1] / 2 +
          (this.prevDragOffset[1] - this.dragOffset[1]) / 2,
      ]
    },
    endDrag(e) {
      this.dragStart = null
      this.dragVelocity = [this.dragVelocity[0] * 3, this.dragVelocity[1] * 3]
      this.glide()
      e.preventDefault()
    },
    glide() {
      if (
        !this.dragVelocity ||
        (this.dragVelocity[0] === 0 && this.dragVelocity[1] === 0)
      )
        return
      if (this.dragStart) return
      this.dragOffset = [
        this.dragOffset[0] - this.dragVelocity[0],
        this.dragOffset[1] - this.dragVelocity[1],
      ]
      this.fixBounds()

      this.dragVelocity[0] = this.dragVelocity[0] * 0.92
      if (Math.abs(this.dragVelocity[0]) < 0.1) this.dragVelocity[0] = 0
      this.dragVelocity[1] = this.dragVelocity[1] * 0.92
      if (Math.abs(this.dragVelocity[1]) < 0.1) this.dragVelocity[1] = 0
      requestAnimationFrame(this.glide)
    },
    fixBounds() {
      this.dragOffset = this.getClosestValidPosition(this.dragOffset)
    },
    getClosestValidPosition(offset) {
      let [x, y] = offset
      if (this.canDrag[0]) {
        if (x > 0) x = 0
        if (-1 * (x - this.winSize[0]) > this.width)
          x = -1 * (this.width - this.winSize[0])
      }
      if (this.canDrag[1]) {
        if (y > 0) y = 0
        if (-1 * (y - this.winSize[1]) > this.height)
          y = -1 * (this.height - this.winSize[1])
      }
      return [x, y]
    },
    getZoomFocus(e) {
      const xOnImage = (e.clientX - this.left) / this.width,
        yOnImage = (e.clientY - this.top) / this.height
      const xOnScreen = e.clientX / this.winSize[0],
        yOnScreen = e.clientY / this.winSize[1]
      const xPosAvg = (xOnImage * 2 + xOnScreen) / 3,
        yPosAvg = (yOnImage * 2 + yOnScreen) / 3
      return [xPosAvg, yPosAvg]
    },
    easingFunction(t) {
      // t from 0 to 1, easeInOutQuad
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
  },
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
</script>

<style lang="scss" scoped>
.bgimageholder {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mainimage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: initial;
  transition: opacity 2s;

  &.draggable {
    cursor: grab;
  }

  &.draggable.dragging {
    cursor: grabbing !important;
  }

  &.gliding {
  }

  &.transitioning {
    transition: width 1s, height 1s, top 1s, left 1s, opacity 2s;
  }
}

.mask {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: black;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.4s;

  &.on {
    transition: opacity 0.2s;
    opacity: 1;
  }
}

.debugtarget {
  position: absolute;
  z-index: 100;
  background: red;
  width: 5px;
  height: 5px;
}

.blurimageholder {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  transition: opacity 3s;
}
.blurimage {
  background-size: cover;
  width: 130vh;
  height: 130vh;
  min-width: 130vw;
  transform: translate(-15vh, -15vh);
  filter: blur(3vh) brightness(70%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
