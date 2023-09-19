<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: `content-language`,
          "http-equiv": "content-language",
          content: "ja-JP",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "都市, 建築, 京都, 医療福祉, 福祉と建築, 福祉と不動産, 左京区, 浄土寺, まちづくり",
        },
        {
          hid: "description",
          name: "description",
          content: `福祉と建築に取り組む一般社団法人ホホホ座浄土寺座のWebサイト`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `福祉と建築に取り組む一般社団法人ホホホ座浄土寺座のWebサイト`,
        },
        ...i18nSeo.meta,
      ],
      link: [...i18nSeo.link],
      // script: [
      //   {
      //     async: true,
      //     src: "https://www.googletagmanager.com/gtag/js?id=UA-112989318-2",
      //   },
      // ],
    };
  },
  mounted() {
    //   if (this.$nuxt.context.isDev) return;
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag() {
    //     dataLayer.push(arguments);
    //   }
    //   gtag("js", new Date());
    //   gtag("config", "UA-112989318-2");
  },
};
</script>

<style lang="sass"></style>
