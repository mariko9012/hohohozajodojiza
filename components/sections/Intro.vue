<template>
  <PageSection class="section" id="top">
    <div class="introtext">
        <h1>ホホホ座浄土寺座</h1>
        <h2 class="ja">
          ホホホ座浄土寺座は、京都・左京区の浄土寺エリアを中心に、地域福祉と場づくりを行う団体です。
        </h2>
    </div>
    <img
      class="bgillustration"
      src="~/assets/img/20230409-IMG_6355.jpeg"
    />
    <img
      v-if="!isMobile"
      class="downarrow"
      src="~/assets/img/down_arrow.svg"
      @click="scrollDown"
    />
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'
import useWindowWidth from '~/components/mixins/useWindowWidth'

export default {
  components: {
    PageSection,
  },

  mixins: [useWindowWidth],

  methods: {
    scrollDown() {
      document.getElementById('about').scrollIntoView(true)
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  background: white;
  width: 100%;
  overflow-x: hidden;
  position: relative;

  // @media (max-width: 768px) {
  //   min-height: 650px;
  // }
}
.introtext {
  width: 580px;
  position: absolute;
  top: 150px;
  left: 5vw;

  @media (max-width: 768px) {
    width: 90vw;
    top: auto;
    bottom: 15px;
  }
}

.ja {
  line-height: 1.5;
}

.bgillustration {
  width: 100%;


  @media (max-width: 768px) {
    width: 180vw;
    max-width: 10000%;
    margin-left: -55vw;
    margin-top: -4vh;
    // todo bigger line weight!!!
  }
}
.downarrow {
  position: absolute;
  top: 80vh;
  left: 85vw;
  transition: all 0.2s;
  background: rgba(white, 0.2);

  &:hover {
    background: rgba(white, 0.5);
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
}
</style>
