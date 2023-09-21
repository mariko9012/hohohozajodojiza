<template>
  <PageSection class="section contentcolumn full" id="residents">
    <div
      v-lazy:background-image="'/assets/img/2023/jodoji2.jpeg'"
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <template v-if="$i18n.locale === 'ja'">
      <h1>MEMBERS</h1>

      <p>一般社団法人ホホホ座浄土寺座の構成員</p>
      <br />

      <div class="row">
        <div class="grid">
          <div
            class="resident"
            v-for="r in upcoming"
            :key="r.id + r.name + $i18n.locale"
          >
            <div
              class="img"
              v-lazy:background-image="`/assets/img/residents/${r.id}.jpg`"
              :alt="`Photo of ${r.name}`"
            ></div>
            <h2 class="name">{{ r.name }}</h2>
            <div class="description">
              {{ r.description }}
              <span class="website" v-if="r.url">
                <a :href="r.url" target="_blank">Website</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageSection>
</template>

<script>
import PageSection from "~/components/PageSection.vue";

export default {
  components: {
    PageSection,
  },
  data() {
    return {
      upcoming: [
        {
          id: "mariko",
          name: "杉田真理子",
          description: `都市デザイナー`,
          url: "https://linktr.ee/MarikoSugita",
        },
        {
          id: "shotaro",
          name: "市橋正太郎",
          description: `写真家、編集者`,
        },
        {
          id: "kanami",
          name: "市橋加奈美",
          description: `料理家`,
        },
        {
          id: "matsumoto",
          name: "松本伸哉",
          description: `屋店主`,
        },
        {
          id: "Ishikawa",
          name: "石川史雄",
          description: `作業運動療法員`,
        },
        {
          id: "maiko",
          name: "いしかわまい子",
          description: "コミュニティーナース",
        },
        {
          id: "deguchi",
          name: "出口賢",
          description: "プログラマー",
        },
        {
          id: "asae",
          name: "伊貝麻恵",
          description: "医療事務",
        },
        {
          id: "miki",
          name: "三木佐和子",
          description: "フリー精神保健福祉士",
        },
        {
          id: "maki",
          name: "岡本まき",
          description: "フリー精神保健福祉士",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  --side-pad: 5%;

  background: white;
  width: 100%;
  overflow-x: hidden;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
}
h1 {
  margin-top: 130px;
}
h1,
p {
  margin-left: var(--side-pad);
}
p {
  max-width: 550px;
}
h2 {
  margin-top: 0;
  margin-bottom: 0.3em;
}
h3 {
  opacity: 0.5;
  margin-bottom: 0.5em;
}

.row {
  padding: 0 var(--side-pad);
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding-bottom: calc(min(var(--side-pad) * 2, 6em));
}

.grid {
  display: flex;
}

.resident {
  width: 250px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: break-word;

  div {
    width: 100%;
  }
}

.img {
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  background-size: cover;
  background-position: center center;
  margin-bottom: 1em;
}

a {
  color: inherit;
}
</style>
