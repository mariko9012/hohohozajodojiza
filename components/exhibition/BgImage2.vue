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
        dragging: (canDrag[0] || canDrag[1]) && dragStart,
        draggable: canDrag[0] || canDrag[1],
      }"
      :style="{
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        height: height + 'px',
      }"
    />
    <div class="mask" :class="{ on: !isLoaded }"></div>
    <!-- <div
      class="debugtarget"
      :style="{
        left: width * toX + offset[0] + 'px',
        top: height * toY + offset[1] + 'px',
      }"
    ></div> -->
  </div>
</template>

<script>
export default {
  props: {
    image: {},
    x: { default: 0.5 },
    y: { default: 0.5 },
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
      // zoom: 1,
      // isTransitioning: false,
      // transitionTimeout: false,
      // fadeTimeout: null,
      // prevImage: null,
      // isLoaded: false,
      // isSlowSliding: false,
      // slowSlideStart: null,
      // slowSlideTarget: null,
      // isDoubleClickZooming: false,

      src: null,
      prevImage: null,
      isLoaded: false,
      zoomMultiplier: 1.01,

      offset: [0, 0, 1],
      imageSize: [1200, 1200],

      dragStart: null,
      dragVelocity: null,
      dragOffset: [0, 0],
      prevDragOffset: [0, 0],

      repositionStart: null,
      repositionTarget: null,
      repositionDifference: null,
      moveStartTime: null,
      moveTime: 0,
      easingFunctions: {
        inOutQuad: t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
        easeOutQuad: t => t * (2 - t),
        easeOutCubic: t => --t * t * t + 1,
        easeOutQuint: t => 1 + --t * t * t * t * t,
      },
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
      w *= this.offset[2]
      return w
    },
    height() {
      return this.width * (1 / this.imageAspectRatio)
    },

    left() {
      if (!this.canDrag[0]) return this.winSize[0] / 2 - this.width / 2
      // todo should we do percent => pixel number conversion here?
      return this.offset[0]
    },
    top() {
      if (!this.canDrag[1]) return this.winSize[1] / 2 - this.height / 2
      return this.offset[1]
    },

    imageAspectRatio() {
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
      return minZoom === undefined ? 1 : minZoom
    },

    normalizedOffset() {
      const nX = ((this.offset[0] - this.winSize[0] / 2) * -1) / this.width
      const nY = ((this.offset[1] - this.winSize[1] / 2) * -1) / this.height
      const nZ = (this.offset[2] - this.minZoom) / Math.abs(this.minZoom - 1)
      return [nX, nY, nZ]
    },
  },
  watch: {
    winSize() {
      this.reposition()
    },
    index() {
      this.paneChange()
    },
  },
  mounted() {
    this.paneChange()
    window.addEventListener('mousewheel', this.handleScroll)
    window.addEventListener('DOMMouseScroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('mousewheel', this.handleScroll)
    window.removeEventListener('DOMMouseScroll', this.handleScroll)
  },
  methods: {
    normalizedToRealWithinUseableArea([x, y, z]) {
      if (x === undefined) x = this.x === undefined ? 0.5 : this.x
      if (y === undefined) y = this.y === undefined ? 0.5 : this.y
      if (z === undefined) z = this.z === undefined ? 0 : this.z
      // console.log('normalized target:', x, y, z)

      let realZ =
        this.minZoom + (1 - this.minZoom) * (z || this.z) || this.offset[2]
      if (realZ > 1) realZ = 1
      if (realZ < this.minZoom) realZ = this.minZoom

      const sizeAfterZoom = this.imageSize.map(s => s * realZ)
      const xScaleRange = sizeAfterZoom[0] - this.winSize[0]
      const yScaleRange = sizeAfterZoom[1] - this.winSize[1]

      const realX = xScaleRange * x * -1
      const realY = yScaleRange * y * -1
      return [realX, realY, realZ]
    },

    repositionNormalized(
      repositionTargetNormalized,
      moveTime,
      easingFunctionName,
    ) {
      const repositionTarget = this.normalizedToRealWithinUseableArea(
        repositionTargetNormalized || [],
      )
      return this.reposition(repositionTarget, moveTime, easingFunctionName)
    },

    zoom(zoomMultiplier, x, y, moveTime, easingFunctionName) {
      if (x === undefined) x = this.x === undefined ? 0.5 : this.x
      if (y === undefined) y = this.y === undefined ? 0.5 : this.y

      let realZ = this.offset[2] * zoomMultiplier
      if (realZ > 1) realZ = 1
      if (realZ < this.minZoom) realZ = this.minZoom

      const sizeAfterZoom = this.imageSize.map(s => s * realZ)

      const widthChange = sizeAfterZoom[0] - this.width
      const heightChange = sizeAfterZoom[1] - this.height

      const leftChange = widthChange * x
      const topChange = heightChange * y

      const realX = this.offset[0] - leftChange
      const realY = this.offset[1] - topChange

      return this.reposition(
        [realX, realY, realZ],
        moveTime,
        easingFunctionName,
      )
    },

    repositionWithChangeValues(
      repositionTargetChangeValues,
      moveTime,
      easingFunctionName,
    ) {
      const [x, y, z] = this.offset.map(
        (unused, index) =>
          this.offset[index] + (repositionTargetChangeValues[index] || 0),
      )
      return this.reposition([x, y, z], moveTime, easingFunctionName)
    },

    reposition(repositionTarget, moveTime = 0, easingFunctionName) {
      const zoomPercent =
        repositionTarget && repositionTarget[2]
          ? this.offset[2] / repositionTarget[2]
          : 1

      this.repositionTarget = repositionTarget
        ? [
            repositionTarget[0] === undefined ||
            typeof repositionTarget[0] !== 'number'
              ? this.offset[0] * zoomPercent
              : repositionTarget[0],
            repositionTarget[1] === undefined ||
            typeof repositionTarget[0] !== 'number'
              ? this.offset[1] * zoomPercent
              : repositionTarget[1],
            repositionTarget[2] || this.offset[2],
          ]
        : [...this.offset]

      const easingFunction =
        this.easingFunctions[easingFunctionName] ||
        this.easingFunctions['inOutQuad']

      this.moveTime = moveTime

      this.repositionStart = this.offset
      this.repositionDifference = this.repositionStart.map(
        (unused, index) =>
          this.repositionTarget[index] - this.repositionStart[index],
      )
      // console.log('start', this.offset)
      // console.log('target', this.repositionTarget)
      // console.log('diff', this.repositionDifference)

      this.moveStartTime = Date.now()

      return new Promise(resolve => {
        const repositionStep = () => {
          if (!this.repositionTarget) return resolve()

          let animationProgress =
            this.moveTime === 0
              ? 1 // complete in one frame
              : (Date.now() - this.moveStartTime) / this.moveTime
          if (animationProgress > 1) animationProgress = 1
          const stepProgressY = easingFunction(animationProgress)

          const stepTargetValues = this.repositionDifference.map(
            (unused, index) =>
              this.repositionStart[index] +
              this.repositionDifference[index] * stepProgressY,
          )

          this.offset = this.getClosestValidPosition(stepTargetValues)

          const done =
            animationProgress === 1 ||
            this.offset.reduce(
              (allMatch, unused, index) =>
                allMatch && this.offset[index] === this.repositionTarget[index],
              true,
            )
          if (done) {
            this.repositionStart = null
            this.repositionTarget = null
            this.repositionDifference = null
            this.moveStartTime = null
            resolve()
          } else {
            requestAnimationFrame(repositionStep)
          }
        }

        repositionStep()
      })
    },

    paneChange() {
      const sameImage = this.prevImage === this.image
      this.prevImage = this.image
      if (sameImage && this.isLoaded) this.sameImage()
      else this.loadImage()
    },
    async sameImage() {
      await this.repositionNormalized(null, 800)
      if (this.toX || this.toY || this.toZ)
        this.repositionNormalized(
          [this.toX, this.toY, this.toZ],
          this.slideTime,
        )
    },
    loadImage() {
      this.isLoaded = false
      new Image().src = `${this.path}/${this.image}`
      this.fadeTimeout = window.setTimeout(() => {
        const loadedImage = new Image()
        loadedImage.addEventListener('load', async e => {
          if (this.src === `${this.path}/${this.image}`) return this.onImgLoad()
          this.src = `${this.path}/${this.image}`
        })
        loadedImage.src = `${this.path}/${this.image}`
      }, 200)
    },
    onImgLoad(e) {
      const loadedImage = e ? e.target : this.$refs.mainimage
      this.imageSize = [loadedImage.naturalWidth, loadedImage.naturalHeight]
      this.$nextTick(async () => {
        this.isLoaded = true
        await this.resetPositioning()
        if (this.toX || this.toY || this.toZ)
          this.repositionNormalized(
            [this.toX, this.toY, this.toZ],
            this.slideTime,
          )
      })
    },

    doubleClick(e) {
      if (!this.interactable) return
      const doubleClickZoomMultiplier = 2
      const xOnImage = (e.clientX - this.left) / this.width,
        yOnImage = (e.clientY - this.top) / this.height
      this.zoom(doubleClickZoomMultiplier, xOnImage, yOnImage, 400)
    },
    handleScroll(e) {
      if (!this.interactable || e.deltaY === 0) return
      if (e.path.find(el => el.classList && el.classList.contains('sidepanel')))
        return // skip scroll when it's a side panel
      const [x, y] = this.getZoomFocus(e)
      const zoomAmount = 1 + e.deltaY / 400
      if (zoomAmount < 1 && this.offset[2] === this.minZoom) return
      if (zoomAmount > 1 && this.offset[2] === 1) return

      const xOnImage = (e.clientX - this.left) / this.width,
        yOnImage = (e.clientY - this.top) / this.height

      const scaledZoomAmount = this.zoomMultiplier * (zoomAmount - 1) + 1
      this.zoom(scaledZoomAmount, xOnImage, yOnImage)
    },
    resetPositioning() {
      return this.repositionNormalized([this.x, this.y, this.z], 0)
    },
    startDrag(e) {
      if (!this.interactable) return
      this.repositionTarget = null
      this.dragVelocity = [0, 0]
      this.dragStart = [e.clientX - this.offset[0], e.clientY - this.offset[1]]
      e.preventDefault()
    },
    drag(e) {
      e.preventDefault()
      if (!this.dragStart) return
      // todo doesn't exist anymore
      const prevOffset = this.offset
      let dragX = e.clientX - this.dragStart[0],
        dragY = e.clientY - this.dragStart[1]
      if (!this.canDrag[0]) dragX = 0
      if (!this.canDrag[1]) dragY = 0
      // console.log(dragX, dragY, this.canDrag)

      this.reposition([dragX, dragY])

      this.dragVelocity = [
        this.dragVelocity[0] / 2 + (dragX - prevOffset[0]) / 2,
        this.dragVelocity[1] / 2 + (dragY - prevOffset[1]) / 2,
      ]
    },
    endDrag(e) {
      if (!this.dragVelocity) return
      const velocityAmplifier = 50
      this.dragStart = null
      this.dragVelocity = [
        this.dragVelocity[0] * velocityAmplifier,
        this.dragVelocity[1] * velocityAmplifier,
      ]
      const glideDuration =
        Math.round(
          Math.abs(this.dragVelocity[0]) + Math.abs(this.dragVelocity[1]),
        ) *
          0.4 +
        300
      this.repositionWithChangeValues(
        this.dragVelocity,
        glideDuration,
        'easeOutQuint',
      )
      this.dragVelocity = null
      // this.glide()
      e.preventDefault()
    },

    getClosestValidPosition(offset) {
      let [x, y, z] = offset

      if (z < this.minZoom) z = this.minZoom
      if (z > 1) z = 1

      if (this.canDrag[0]) {
        if (x > 0) x = 0
        if (-1 * (x - this.winSize[0]) > this.imageSize[0] * z)
          x = -1 * (this.imageSize[0] * z - this.winSize[0])
      }

      if (this.canDrag[1]) {
        if (y > 0) y = 0
        if (-1 * (y - this.winSize[1]) > this.imageSize[1] * z)
          y = -1 * (this.imageSize[1] * z - this.winSize[1])
      }

      return [x, y, z]
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
