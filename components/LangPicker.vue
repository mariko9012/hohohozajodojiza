<template>
  <span>
    <span v-for="locale in availableLocales" :key="locale.code">
      <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
    </span>
  </span>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}
</style>
