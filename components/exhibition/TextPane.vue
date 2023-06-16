<template>
  <div class="textholder">
    <transition-group name="slowfade">
      <div :key="title" class="titleonly" v-if="hero && !loading">
        <h1 v-html="title"></h1>
      </div>
      <div
        :key="text"
        class="textbox"
        v-else-if="text && !loading"
        :class="{
          sidepanel: sidePanel,
          top,
          left,
        }"
      >
        <h2 v-if="title" v-html="title"></h2>
        <Sound v-if="audio" :path="path" v-bind="audio" />
        <div v-html="text"></div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import Sound from '~/components/exhibition/Sound'

export default {
  components: { Sound },
  props: {
    title: {},
    hero: {},
    text: {},
    audio: {},
    position: { default: 'bottom right' },
  },
  data() {
    return {
      lengthCutoffForSidePanel: 400,
      loading: true,
      loadingTimeout: null,
      displayTitle: this.title,
      displayText: this.text,
      displayPosition: this.position,
    }
  },
  computed: {
    path() {
      return this.$store.state.path
    },
    sidePanel() {
      return (
        this.displayText.replace(/<[^>]*>/g, '').length >
        this.lengthCutoffForSidePanel
      )
    },
    top() {
      return this.displayPosition.indexOf('top') >= 0
    },
    left() {
      return this.displayPosition.indexOf('left') >= 0
    },
  },
  watch: {
    text() {
      this.loading = true
      window.clearTimeout(this.loadingTimeout)
      this.loadingTimeout = setTimeout(() => {
        this.loading = false
        this.displayTitle = this.title
        this.displayText = this.text
        this.displayPosition = this.position
      }, 200)
    },
  },
  mounted() {
    this.$nextTick(() => (this.loading = false))
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.textholder {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
}
.titleonly {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  h1 {
    text-align: center;
    margin: 0;
    color: white;
    max-width: 70vw;
  }
}

.textbox {
  position: absolute;
  pointer-events: auto;
  bottom: 7vh;
  right: 3vh;
  max-width: 40vh;
  max-height: 100%;
  padding: 2vh 3vh;
  background: rgba(255, 255, 255, 0.95);
  display: inline-block;
  box-shadow: 0 6vh 6vh rgba(0, 0, 0, 0.2), 0 0.3vh 0.6vh rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s transform 0.5s;
  overflow-x: hidden;
  overflow-y: auto;

  &.top {
    bottom: auto;
    top: 3vh;
  }
  &.left {
    right: auto;
    left: 3vh;
  }

  &.sidepanel {
    right: 0vh;
    top: 0vh;
    bottom: 0vh;
    max-width: 35vh;
    min-width: 25vw;
    padding: 4vh;
    padding-bottom: 20vh;

    &.left {
      right: auto;
      left: 0vh;
    }
  }
}

h2 {
  margin-top: 0;
}

.slowfade-enter-active,
.slowfade-leave-active {
  transition: opacity 0.7s;
}
.slowfade-enter,
.slowfade-leave-to {
  opacity: 0;
}
</style>
