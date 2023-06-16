<template>
  <div class="sound" v-if="src">
    <h4 v-if="title">{{ title }}</h4>
    <audio
      :src="`${path}/${src}`"
      controls
      :autoplay="mute ? false : true"
      ref="sound"
      @keydown="keydown"
    />
  </div>
</template>

<script>
// todo fade in on start
export default {
  props: {
    title: {},
    src: {},
    volume: {},
    loop: { default: false },
  },
  data() {
    return {
      currentVolume: 0,
      targetVolume: this.volume,
    }
  },
  computed: {
    path() {
      return this.$store.state.path
    },
    mute() {
      return this.$store.state.mute
    },
  },
  watch: {
    mute() {
      this.$refs.sound.muted = this.mute
    },
    volume() {
      this.currentVolume = this.$refs.sound.volume
      this.targetVolume = this.volume || (!!this.loop ? 0.5 : 1)
      this.fadeVolume()
    },
    loop() {
      this.$refs.sound.loop = !!this.loop
    },
    src() {
      this.$refs.sound.volume = 0.01
      this.currentVolume = 0.01
      this.targetVolume = this.volume || (!!this.loop ? 0.5 : 1)
      this.fadeVolume()
    },
  },
  mounted() {
    if (!this.src) return
    this.targetVolume = this.volume || (!!this.loop ? 0.5 : 1)
    this.currentVolume = 0.01
    this.$refs.sound.volume = 0.01
    this.$refs.sound.loop = !!this.loop
    this.tryToPlay()
  },
  methods: {
    tryToPlay() {
      if (!this.mute && this.$refs.sound.canplay && !this.$refs.sound.playing) {
        try {
          this.$refs.sound.play()
          this.fadeVolume()
        } catch (e) {
          e.preventDefault()
        }
        setTimeout(this.tryToPlay, 200)
      }
      this.fadeVolume()
    },
    fadeVolume() {
      const volumeStep = () => {
        this.currentVolume = this.currentVolume * 0.9 + this.targetVolume * 0.1
        if (Math.abs(this.currentVolume - this.targetVolume) < 0.02)
          this.currentVolume = this.targetVolume
        if (this.$refs.sound) this.$refs.sound.volume = this.currentVolume
        if (this.currentVolume !== this.targetVolume && this.$refs.sound)
          setTimeout(volumeStep, 100)
      }
      volumeStep()
    },
    playPause() {
      if (this.$refs.sound.playing) this.$refs.sound.pause()
      else this.$refs.sound.play()
    },
    keydown(e) {
      if (
        e.code === 'ArrowRight' ||
        e.code === 'ArrowDown' ||
        e.code === 'ArrowLeft' ||
        e.code === 'ArrowUp'
      ) {
        e.preventDefault()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sound {
  pointer-events: auto;

  audio {
    outline: none;
  }
}
</style>
