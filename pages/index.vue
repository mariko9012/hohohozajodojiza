<template>
  <main>
    <Intro />
    <About />
    <Space />
    <Insta />
    <Apply />
    <Residents />
    <FAQ />
    <TCU />
    <Contact />
  </main>
</template>

<script>
import Intro from '~/components/sections/Intro.vue'
import About from '~/components/sections/About.vue'
import Space from '~/components/sections/Space.vue'
import Apply from '~/components/sections/Apply.vue'
import TCU from '~/components/sections/TCU.vue'
import FAQ from '~/components/sections/FAQ.vue'
import Insta from '~/components/sections/Insta.vue'
import Residents from '~/components/sections/Residents.vue'
import Contact from '~/components/sections/Contact.vue'

export default {
  head() {
    return {
      title: 'Kyoto',
      meta: [
        {
          property: 'og:title',
          hid: `og:title`,
          content: 'Bridge To Kyoto',
        },
        {
          property: 'twitter:title',
          hid: `twitter:title`,
          content: 'Bridge To Kyoto',
        },
        {
          hid: `og:url`,
          property: 'og:url',
          content: `https://www.brdg.to/`,
        },
        {
          hid: `og:site_name`,
          property: 'og:site_name',
          content: 'Bridge To Kyoto',
        },
      ],
    }
  },
  components: {
    Intro,
    About,
    Space,
    Apply,
    TCU,
    FAQ,
    Insta,
    Contact,
    Residents,
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  background: var(--accent);
}

.intro {
  width: 580px;
  position: absolute;
  top: 350px;
  left: 5vw;
}

.headline {
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 15px;
}

.subhead {
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1.2;
}

.bgillustration {
  width: 85vw;
  margin-left: 13vw;
  margin-top: 15vh;
}
</style>
