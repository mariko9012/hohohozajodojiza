<template>
  <nav :class="{ collapsed: isCollapsed }">
    <div class="left">
      <nuxt-link
        :to="localePath('index')"
        exact
        @mouseover.native="logoHover = true"
        @mouseleave.native="logoHover = false"
        @click.native="scrollToTop"
      >
        <Logo
          class="logo"
          :collapse="isCollapsed && !logoHover"
        />
      </nuxt-link>
      <!-- <div class="pagelinks">
        <a href="#about">About</a>
        <a href="#space">Our Space</a>
        <a href="#apply">Apply</a>
        <a href="#faq" v-if="$i18n.locale !== 'ja'">FAQ</a>
        <a href="#contact">Contact</a>
      </div>-->
      <!-- <transition name="fade">
        <ApplyButton targetElementId="apply" v-if="!hideApplyButton" />
      </transition> -->
    </div>
    <LangPicker class="langpicker" />
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LangPicker from '~/components/LangPicker.vue'
import ApplyButton from '~/components/ApplyButton.vue'
import useScrollPosition from '~/components/mixins/useScrollPosition'
import useWindowWidth from '~/components/mixins/useWindowWidth'

export default {
  data() {
    return {
      logoHover: false,
      observer: null,
      hideApplyButton: false,
    }
  },

  components: { Logo, LangPicker, ApplyButton },
  mixins: [useScrollPosition, useWindowWidth],
  watch: {},

  computed: {
    isCollapsed() {
      return true //this.windowScroll > 100 || this.isMobile
    },
  },

  mounted() {
    let toObserve = document.getElementById('apply')
    this.observer = new IntersectionObserver(
      this.intersectEvent,
      {
        threshold: 0.2,
      },
    )
    this.observer.observe(toObserve)
  },
  beforeDestroy() {
    this.observer.disconnect()
    this.observer = null
  },
  methods: {
    intersectEvent(entries, observer) {
      entries.forEach((entry) => {
        if (
          !this.hideApplyButton &&
          entry.intersectionRatio > 0.2
        )
          this.hideApplyButton = true
        else if (
          this.hideApplyButton &&
          entry.intersectionRatio <= 0.2
        )
          this.hideApplyButton = false
      })
    },
    scrollToTop() {
      document.getElementById('top').scrollIntoView(true)
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}

nav {
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0;
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;

  &.collapsed {
    .left {
      height: 90px;

      @media (max-width: 768px) {
        height: 50px;
      }
    }
  }
}

.left {
  height: 180px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  & > * {
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }

  & > *:not(:last-child) {
    margin-right: -0.35em; // stupid fucking space
  }
}

.logo {
  height: 100%;
}

.langpicker {
  margin-top: 25px;
  margin-right: 40px;
  white-space: nowrap;

  @media (max-width: 768px) {
    margin-top: 12px;
    margin-right: 20px;
  }
}

.pagelinks {
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding: 10px 20px;
  // background: white;

  & > * {
    padding: 2px 25px;
    color: inherit;
    text-decoration: none;
    transition: all 0.2s;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.95rem;

    &:hover {
      color: var(--primaryd4);
    }
  }
}
</style>
