export default {
  ssr: false,
  target: 'static',

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', hid: `og:title`, content: 'ホホホ座浄土寺座' },
      {
        property: 'og:description',
        hid: `og:description`,
        content: 'Open Call: An urbanist residency in Kyoto, Japan',
      },
      { hid: `og:type`, property: 'og:type', content: 'website' },
      { hid: `og:site_name`, property: 'og:site_name', content: 'ホホホ座浄土寺座' },
      {
        hid: `og:image`,
        property: 'og:image',
        content: `http://joudojiza.sakura.ne.jp/assets/img/newlogo.png`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~assets/css/global'],

  plugins: ['~/plugins/lazyLoad'],

  modules: [ '@nuxtjs/axios', 'nuxt-i18n'],

  i18n: {
    locales: [
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
      },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
    },
    vuex: {
      syncLocale: true,
    },
  },
}
