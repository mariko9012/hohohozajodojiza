<template>
  <div class="bgimageholder" :style="{ 'background-color': backgroundColor }">
    <transition name="fade">
      <div
        v-if="!backgroundColor"
        class="blurimage"
        :style="{
          'background-image': `url('${src}')`,
          'background-position': `${x * 100}% ${y * 100}%`,
        }"
      ></div>
    </transition>
    <img ref="mainimage" class="mainimage" :src="src" :alt="alt" />
  </div>
</template>

<script>
const panzoom = require('panzoom')

export default {
  props: {
    path: {},
    image: {},
    x: { default: 0.5 },
    y: { default: 0.5 },
    z: { default: 1 },
    alt: {},
    backgroundColor: {},
    interactable: { default: true },
  },
  data() {
    return {
      winSize: [1200, 1200],
      imageSize: [1200, 1200],
      src: null,
    }
  },
  computed: {
    minZoom() {
      if (!this.src) return null
      let minZoom =
        Math.min(
          this.winSize[0] / this.imageSize[0],
          this.winSize[1] / this.imageSize[1],
        ) * 0.9
      if (minZoom > 1) minZoom = 1
      return minZoom
    },
    defaultZoom() {
      if (!this.src) return null
      let minZoom = Math.max(
        this.winSize[0] / this.imageSize[0],
        this.winSize[1] / this.imageSize[1],
      )
      if (minZoom > 1) minZoom = 1
      return minZoom
    },
  },
  watch: {
    image() {
      this.src = null
      this.loadImage()
    },
    minZoom() {
      if (!this.minZoom) return
      panzoom(this.$refs.mainimage, {
        maxZoom: 1,
        minZoom: this.minZoom,
        bounds: true,
        boundsPadding: 0.7,
      }).zoomAbs(
        // 300, // initial x position
        // 500, // initial y position
        0,
        0,
        this.defaultZoom, // initial zoom
      )
    },
  },
  mounted() {
    this.handleResize()
    this.loadImage()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    loadImage() {
      const loadedImage = new Image()
      loadedImage.addEventListener('load', e => {
        this.$set(this, 'imageSize', [e.target.width, e.target.height])
        this.src = `${this.path}/${this.image}`
      })
      loadedImage.src = `${this.path}/${this.image}`
    },
    handleResize() {
      this.winSize = [parseInt(window.innerWidth), parseInt(window.innerHeight)]
    },
  },
}
</script>

<style lang="scss" scoped>
.bgimageholder {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 1;
  background: #333;
}

.mainimage {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  max-width: initial;
}

.blurimage {
  position: absolute;
  pointer-events: none;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 1;
  width: 130vh;
  height: 130vh;
  min-width: 130vw;
  transform: translate(-15vh, -15vh);
  filter: blur(3vh) brightness(50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
