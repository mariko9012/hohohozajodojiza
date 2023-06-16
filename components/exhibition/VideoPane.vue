<template>
  <div class="videoholder">
    <video
      :src="`${path}/${displaySrc}`"
      :controls="!!interactive"
      autoplay
      :loop="loop"
      :muted="mute"
      ref="video"
      preload="auto"
      @canplay="onLoad"
      :class="{ on: isLoaded, fillscreen: displayFillScreen }"
      :style="{
        width: displayFillScreen ? `${100 * videoAspectRatio}vh` : 'auto',
        'min-height': displayFillScreen
          ? `${100 * (1 / videoAspectRatio)}vw`
          : 'auto',
      }"
    />
    <!-- mask is only for video-to-video transitions -->
    <div class="mask" :class="{ on: showMask }"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {},
    interactive: { default: true },
    index: {},
    loop: { default: false },
    volume: { default: 1 },
    fillScreen: { default: true },
  },
  data() {
    return {
      isLoaded: false,
      videoSize: [1080, 720],
      displaySrc: null,
      displayFillScreen: true,
      showMask: false,
    }
  },
  computed: {
    path() {
      return this.$store.state.path
    },
    mute() {
      return this.$store.state.mute
    },
    videoAspectRatio() {
      return this.videoSize[0] / this.videoSize[1]
    },
  },
  watch: {
    src() {
      if (!this.src) {
        this.isLoaded = false
      } else {
        this.displaySrc = this.src
      }
    },
    index() {
      if (this.src) {
        this.showMask = true
        setTimeout(() => {
          if (this.displaySrc === this.src) {
            this.$refs.video.currentTime = 0 // also fires onLoad
          }
          this.displaySrc = this.src
        }, 200)
      } else {
        this.isLoaded = false
        this.showMask = false
      }
    },
  },
  mounted() {
    this.displaySrc = this.src
    this.displayFillScreen = this.fillScreen
  },
  methods: {
    onLoad(e) {
      const loadedVideo = e ? e.target : this.$refs.video
      this.videoSize = [loadedVideo.videoWidth, loadedVideo.videoHeight]
      this.$refs.video.volume = this.volume
      this.$nextTick(() => {
        this.isLoaded = true
        this.displayFillScreen = this.fillScreen
        setTimeout(() => {
          loadedVideo.play()
          this.showMask = false
        }, 200)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.videoholder {
  overflow: hidden;
  pointer-events: none;
}

video {
  pointer-events: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 3vh 6vh rgba(0, 0, 0, 0.4);
  transition: opacity 0.4s;

  &.fillscreen {
    height: 100%;
    min-width: 100%;
  }

  &:not(.on) {
    pointer-events: none;
    opacity: 0;
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
</style>
