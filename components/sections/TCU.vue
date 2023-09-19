<template>
  <PageSection class="section" id="tcu">
    <div
      class="bgimage"
      v-lazy:background-image="'/assets/img/monopatarn1-4c.png'"
    ></div>
    <div class="contentcolumn">
      <h1>Blog</h1>
      <p>NOTEにて、浄土寺での日々の活動を不定期更新しています。</p>
      <a class="button" :href="localeLink" target="_blank">
        <div>ブログを読む</div>
      </a>
    </div>
  </PageSection>
</template>

<script>
import PageSection from "~/components/PageSection.vue";

export default {
  components: {
    PageSection,
  },
  computed: {
    localeLink() {
      return this.$i18n.locale === "ja"
        ? "https://note.com/hohohozajodojiza/"
        : "https://note.com/hohohozajodojiza/";
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  --bg: #333;
  background: #333;
  // color: var(--primary);
  color: white;
  overflow: hidden;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
  }
}

.bgimage {
  background-size: cover;
  background-position: center 70%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.3;
}

.contentcolumn {
  position: relative;
  z-index: 2;
  padding-top: 200px;
  padding-bottom: 200px;
}

p {
  padding: 30px 0;
  max-width: 500px;
}

.button {
  max-width: 500px;
}
</style>
