<template>
  <PageSection class="section" id="insta">
    <template v-if="$i18n.locale === 'ja'"></template>

    <div class="grid">
      <div
        class="img"
        v-lazy:background-image="`/assets/img/insta1.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/assets/img/insta8.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/assets/img/insta6.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <div
        class="img"
        v-lazy:background-image="`/assets/img/insta7.jpg`"
        alt="Photo from the Bridge To Kyoto Instagram"
      ></div>
      <a
        class="button"
        href="https://www.instagram.com/bridgetokyoto/"
        target="_blank"
      >
        <div>More Photos on Instagram →</div>
      </a>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'

export default {
  components: {
    PageSection,
  },
}
</script>

<style lang="scss" scoped>
.section {
  --bg: rgb(255, 255, 255);
  background: var(--bg);
  width: 100%;
  overflow-x: hidden;
}
h2 {
  margin-top: 0;
}

.grid {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr 230px;
  grid-auto-flow: dense;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;

    // & > *:nth-child(2) {
    //   display: none;
    // }

    a {
      grid-column: 1 / -1;
    }
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  background-size: cover;
  background-position: center center;
}

.button {
  height: 100%;
  width: 230px;

  div {
    background: var(--accent);

    &:hover,
    &:active {
      background: var(--accentl1);
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    div {
      padding: 15px 20px;
    }
  }
}
</style>
