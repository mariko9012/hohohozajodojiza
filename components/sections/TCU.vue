<template>
  <PageSection class="section" id="tcu">
    <div
      class="bgimage"
      v-lazy:background-image="'/assets/img/tcu.jpg'"
    ></div>
    <div class="contentcolumn">
      <h1>Blog</h1>
      <template v-if="$i18n.locale === 'ja'">
        <p>
          世界各地の都市から、建築・都市・まちづくりに関わる事例を紹介する
          <a :href="localeLink" target="_blank"
            >Traveling Circus of Urbanism</a
          >を運営しています。
        </p>
        <a
          class="button"
          :href="localeLink"
          target="_blank"
        >
          <div>ブログを読む</div>
        </a>
      </template>
      <template v-else>
        <p>
          We also run a website called
          <a :href="localeLink" target="_blank"
            >Traveling Circus of Urbanism</a
          >, where we cover global and local urban practices
          and ideas.
        </p>
        <a
          class="button"
          :href="localeLink"
          target="_blank"
        >
          <div>Check it out!</div>
        </a>
      </template>
    </div>
  </PageSection>
</template>

<script>
import PageSection from "~/components/PageSection.vue";

export default {
  components: {
    PageSection
  },
  computed: {
    localeLink() {
      return this.$i18n.locale === "ja"
        ? "https://www.travelingcircusofurbanism.com/ja"
        : "https://www.travelingcircusofurbanism.com";
    }
  }
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
