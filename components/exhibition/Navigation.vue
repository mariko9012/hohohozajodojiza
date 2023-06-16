<template>
  <div class="nav">
    <div class="logo">logo</div>
    <h4>{{ title }}</h4>
    <div class="panes">
      <div
        v-for="(pane, index) in panes"
        :key="index"
        class="pane"
        :class="{
          done: currentPaneIndex > index,
          active: currentPaneIndex === index,
        }"
        @click="$emit('navigateToPane', index)"
      ></div>
    </div>
    <div class="controls">
      <div v-if="!$store.state.mobile">
        <img src="/assets/ex/arrowkeys.svg" />
      </div>
      <div
        @click="$store.commit('set', { mute: !$store.state.mute })"
        class="selectable"
      >
        <img
          class="small"
          :src="
            $store.state.mute ? '/assets/ex/mute.svg' : '/assets/ex/volume.svg'
          "
        />
      </div>
      <div class="selectable">
        <img src="/assets/ex/help.svg" />
      </div>
      <div class="selectable" @click="fullscreenToggle">
        <img
          class="small"
          :src="
            $store.state.fullscreen
              ? '/assets/ex/unfullscreen.svg'
              : '/assets/ex/fullscreen.svg'
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    panes: {},
    currentPaneIndex: {},
  },
  data() {
    return {
      fullscreenElement: null,
    }
  },
  computed: {
    fullscreen() {
      return this.$store.state.fullscreen
    },
  },
  watch: {},
  mounted() {
    this.fullscreenElement = document.getElementById('master')
    this.fullscreenElement.addEventListener(
      'fullscreenchange',
      this.handleFullscreenChange,
    )
  },
  methods: {
    fullscreenToggle() {
      const elem = this.fullscreenElement
      const options = { navigationUI: 'hide' }
      if (!this.fullscreen) {
        if (elem.requestFullscreen) elem.requestFullscreen(options)
        else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen(options)
        else if (elem.webkitRequestFullscreen)
          elem.webkitRequestFullscreen(options)
        else if (elem.msRequestFullscreen) elem.msRequestFullscreen(options)
        this.$store.commit('set', { fullscreen: true })
      } else {
        if (document.exitFullscreen) document.exitFullscreen(options)
        else if (document.mozCancelFullScreen)
          document.mozCancelFullScreen(options)
        else if (document.webkitExitFullscreen)
          document.webkitExitFullscreen(options)
        else if (document.msExitFullscreen) document.msExitFullscreen(options)
        this.$store.commit('set', { fullscreen: false })
      }
    },
    handleFullscreenChange(e) {
      this.$store.commit('set', { fullscreen: !!document.fullscreenElement })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5vh;
  min-height: 45px;
  display: flex;
  align-items: stretch;
  // width: 100%;
  z-index: 10;
  background: white;
  box-shadow: 0 -1vh 3vh rgba(0, 0, 0, 0.1);

  & > * {
    padding-top: 20%;
    padding-bottom: 20%;
    flex-grow: 1;
  }

  .logo {
    background: black;
    width: 90px;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  h4 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: bold;
    text-transform: uppercase;
    flex-grow: 0;
    flex-shrink: 1;
    padding: 0 4vw 0 4vw;
  }

  .panes {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
  }

  .pane {
    flex-grow: 1;
    height: 100%;
    position: relative;
    text-align: center;
    cursor: pointer;
    margin-left: 3px;
    max-width: 100px;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 5px;
      transform: translateY(-50%);
      width: 100%;
      transition: all 0.2s;
      background: rgba(0, 0, 0, 0.1);
    }

    &.done {
      &:after {
        background: rgba(0, 0, 0, 0.4);
      }
    }

    &.active {
      &:after {
        background: blue;
      }
    }

    &:hover {
      &:after {
        background: rgba(0, 0, 0, 1);
      }
    }

    &:last-of-type {
      margin-right: 5vw;
    }
  }

  .controls {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    flex-grow: 0;
    padding: 0 20px;
    display: flex;
    height: 100%;
    align-items: stretch;

    & > * {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 70px;

      &.selectable:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.1);
      }
    }

    img {
      height: 45%;

      &.small {
        height: 37%;
      }
    }
  }
}
</style>
