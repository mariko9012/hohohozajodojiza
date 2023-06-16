<template>
  <a :href="target ? target : '#' " target="_blank" @click="scrollDown" class="button">
    <div :class="{ collapse: isMobile, reverse, }">
      <span v-if="$i18n.locale === 'ja'">{{ labelJa || label }}</span>
      <span v-else>{{ label }}</span>
    </div>
  </a>
</template>

<script>
import useWindowWidth from '~/components/mixins/useWindowWidth'
export default {
  props: {
    reverse: {},
    label: { default: 'Apply' },
    labelJa: {},
    targetElementId: {},
    target: {},
  },
  data() {
    return {}
  },
  mixins: [useWindowWidth],

  methods: {
    scrollDown(e) {
      if (this.targetElementId) {
        e.preventDefault()
        document.getElementById(this.targetElementId).scrollIntoView(true)
      }
    },
  },
}
</script>

<style lang="scss">
</style>
