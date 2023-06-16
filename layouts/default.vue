<template>
  <div>
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: { Menu },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: `content-language`,
          'http-equiv': 'content-language',
          content: this.$i18n.locale === 'ja' ? 'ja-JP' : 'en-US',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            this.$i18n.locale === 'ja'
              ? 'レジデンス, アーバニストインレジデンス, アーティストインレジデンス, シェアハウス, 都市, 建築, 京都'
              : 'urbanism, residency, japan, urbanist in residence, artist in residence, sharehouse, kyoto',
        },
        {
          hid: 'description',
          name: 'description',
          content: `A creative residency for urbanists. Open for applications!`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `A creative residency for urbanists. Open for applications!`,
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-112989318-2',
        },
      ],
    }
  },
  mounted() {
    if (this.$nuxt.context.isDev) return
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'UA-112989318-2')
  },
}
</script>

<style lang="sass"></style>
