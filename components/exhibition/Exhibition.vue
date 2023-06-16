<template>
  <div
    class="exhibition"
    ref="master"
    id="master"
    @mousemove="showOverlayNav = true"
    @mouseleave="showOverlayNav = false"
  >
    <iframe
      id="preloadautoplay"
      src="/assets/ex/silence.mp3"
      allow="autoplay"
    ></iframe>
    <transition name="fade">
      <div class="soundholder" v-if="currentBgm">
        <Sound :key="currentBgm.src" :loop="true" v-bind="currentBgm" />
      </div>
    </transition>

    <div
      class="paneholder"
      :style="{ 'background-color': pane ? pane.background : '#000' }"
    >
      <Blank v-if="!pane || Object.keys(pane).length === 0" />
      <template v-else>
        <div class="bgcolor" :style="{ background: '#000' }"></div>
        <BgImage
          v-if="pane.image"
          v-bind="{ ...pane, title: '', text: '' }"
          :index="currentPaneIndex"
        />
        <VideoPane v-bind="pane.video" :index="currentPaneIndex" />
        <TextPane v-bind="pane" />
      </template>

      <Navigation
        class="nav"
        :class="{
          hide:
            !showOverlayNav &&
            !forceShowOverlayNav &&
            nextPaneIndex !== null &&
            prevPaneIndex !== null,
        }"
        :title="title"
        :panes="panes"
        :currentPaneIndex="currentPaneIndex"
        @navigateToPane="navigateToPane"
      />
      <transition name="fade">
        <OverlayNav
          v-if="showOverlayNav || forceShowOverlayNav"
          :prevPaneIndex="prevPaneIndex"
          :nextPaneIndex="nextPaneIndex"
          :currentPaneIndex="currentPaneIndex"
          @prev="prev"
          @next="next"
        />
      </transition>
    </div>
  </div>
</template>

<script>
//todo
/*
break out of b2?
intro super fade / start button
custom controller for sounds
fade out on sounds
pinch image 
zoom is a little wonky on holds and such
browser check
mobile
*/

import Blank from '~/components/exhibition/Blank'
import BgImage from '~/components/exhibition/BgImage2'
import TextPane from '~/components/exhibition/TextPane'
import Navigation from '~/components/exhibition/Navigation'
import OverlayNav from '~/components/exhibition/OverlayNav'
import Sound from '~/components/exhibition/Sound'
import VideoPane from '~/components/exhibition/VideoPane'

export default {
  components: {
    Blank,
    BgImage,
    TextPane,
    Sound,
    VideoPane,
    Navigation,
    OverlayNav,
  },
  props: {
    title: {},
    panes: {
      default: () => [],
    },
    pathBase: {},
    slug: {},
    bgm: {},
  },
  data() {
    return {
      currentPaneIndex: null,
      showOverlayNav: false,
      forceShowOverlayNav: false,
      currentBgm: this.bgm,
    }
  },
  computed: {
    pane() {
      return this.panes ? this.panes[this.currentPaneIndex] : {}
    },
    prevPaneIndex() {
      return this.currentPaneIndex !== null && this.currentPaneIndex > 0
        ? this.currentPaneIndex - 1
        : null
    },
    nextPaneIndex() {
      return this.currentPaneIndex !== null &&
        this.panes.length > this.currentPaneIndex + 1
        ? this.currentPaneIndex + 1
        : null
    },
  },
  watch: {
    currentPaneIndex() {
      this.preloadPane(this.nextPaneIndex)
      this.preloadPane(this.prevPaneIndex)
    },
    pane() {
      for (let i = this.currentPaneIndex; i >= 0; i--) {
        if (this.panes[i].bgm) {
          this.currentBgm = this.panes[i].bgm
          return
        }
      }
      // if no bgm found on a previous pane, default to main bgm
      this.currentBgm = this.bgm
    },
  },
  mounted() {
    this.$store.commit('set', { path: this.pathBase + this.slug })
    this.currentPaneIndex = 0
    this.preloadPane(this.currentPaneIndex + 1)
    window.addEventListener('keydown', this.keyDown)
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyDown)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.$store.commit('set', {
        winSize: [
          parseInt(this.$refs.master.offsetWidth),
          parseInt(this.$refs.master.offsetHeight),
        ],
      })
    },
    prev() {
      if (this.prevPaneIndex !== null)
        this.currentPaneIndex = this.prevPaneIndex
    },
    next() {
      if (this.nextPaneIndex !== null)
        this.currentPaneIndex = this.nextPaneIndex
    },
    navigateToPane(index) {
      if (this.panes[index]) this.currentPaneIndex = index
    },
    preloadPane(paneIndex) {
      if (!this.panes || paneIndex > this.panes.length || paneIndex < 0) return
      if (!this.panes[paneIndex]) return
      if (this.panes[paneIndex].image) {
        const loadedImage = new Image()
        loadedImage.addEventListener('load', e => {
          // console.log(
          //   'preloaded',
          //   `${this.pathBase + this.slug}/${this.panes[paneIndex].image}`,
          // )
        })
        loadedImage.src = `${this.pathBase + this.slug}/${
          this.panes[paneIndex].image
        }`
      }
    },
    keyDown(e) {
      if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
        this.$el.focus()
        this.next()
        this.showOverlayNav = false
      }
      if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
        this.$el.focus()
        this.prev()
        this.showOverlayNav = false
      }
      if (e.code === 'KeyM')
        this.$store.commit('set', { mute: !this.$store.state.mute })
    },
  },
}
</script>

<style lang="scss" scoped>
#preloadautoplay {
  width: 1px;
  height: 1px;
  position: fixed;
  opacity: 0;
  pointer-events: none;
}
.exhibition {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.header {
  position: relative;
  z-index: 100;
  user-select: none;
}
.soundholder {
  position: absolute;
  top: 3vh;
  left: 3vh;
  z-index: 5;
  pointer-events: none;
}
.paneholder {
  flex-grow: 1;
  position: relative;
  background: #000;
  transition: background 0.5s;
}
.nav {
  transition: bottom 0.5s;

  &.hide {
    bottom: -5vh;
  }
}
</style>
