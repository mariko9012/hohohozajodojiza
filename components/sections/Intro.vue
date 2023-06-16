<template>
  <PageSection class="section" id="top">
    <div class="introtext">
      <template v-if="$i18n.locale === 'ja'">
        <h1></h1>
        <h2 class="ja">
          Bridge to
          Kyotoは、「都市」をテーマにした、建築・街づくり・アートなど都市に関わる実践者のための私設ライブラリー&イベントスペースです。
        </h2>
      </template>
      <template v-else>
        <h1>A place for urbanists.</h1>
        <h2>
          Bridge To Kyoto is an urban library and event
          space for cities.
        </h2>
      </template>
    </div>
    <img
      class="bgillustration"
      src="~/assets/img/bg_illustration.svg"
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
  min-height: 115vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 768px) {
    min-height: 650px;
  }
}
.introtext {
  width: 580px;
  position: absolute;
  top: 300px;
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
  width: 85vw;
  margin-left: 13vw;
  margin-top: 3vh;

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
