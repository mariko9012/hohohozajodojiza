<template>
  <PageSection class="section" id="about">
    <div class="contentcolumn">
      <template v-if="$i18n.locale === 'ja'"></template>

      <template v-else></template>
      <div class="grid">
        <div class="flex text1">
          <div class="textbox left">
            <template v-if="$i18n.locale === 'ja'">
              <h1>About</h1>
              <p>
                建築・都市・まちづくりの実践者が、国境をこえて学び合える場は、まだあまりありません。
                <b>Bridge to Kyoto</b
                >は、世界中からアーバニストやアーティストを受け入れ、国内の建築・都市・まちづくり関係者や市民と交流し、コラボレーションが生まれるきっかけをつくる場所です。
              </p>
            </template>

            <template v-else>
              <h1>About</h1>
              <p>
                <b>"Bridge To Kyoto"</b> is a curatorial
                platform and cultural space for architecture
                and urbanism based in Kyoto, Japan. It is a
                private gallery and library that showcases a
                collection of publications and items in the
                fields of architecture and urbanism.
              </p>
            </template>
          </div>
        </div>

        <div class="illustration ill1">
          <img src="/assets/img/about1.jpg" />
        </div>

        <div class="flex text2">
          <div class="textbox right">
            <template v-if="$i18n.locale === 'ja'">
              <h2>Global Discourse, Local Practice.</h2>
              <p>
                地域の活性化を目的としたアーティスト・イン・レジデンスが注目を集める一方で、より地域の課題解決や長期的なコラボレーションを目的としたアーバニスト・イン・レジデンスの可能性が、近年注目を集め始めています。海外の街づくりの事例をそのままコピーアンドペーストすることは出来なくとも、お互いから学ぶことはできるはず。
                グローバルな目線で、ローカルに活動することで、国境を超えた建築・街づくりプロジェクトが生まれる可能性を追求したいと思っています。海外の街づくりの事例については、
                <a
                  href="https://www.travelingcircusofurbanism.com/"
                  target="_blank"
                  >こちら</a
                >もご参照ください。
              </p>
            </template>

            <template v-else>
              <h2>Global Discourse, Local Practice.</h2>
              <p>
                We can't just copy and paste the best
                practices from other parts of the world to
                our city, but that doesn't mean that we
                can't learn from each other. We believe that
                more urbanists coming from different
                backgrounds &amp; sharing their work helps
                change the discourse and practice of
                urbanism across the globe. By inviting
                urbanists from around the world, we'd like
                to encourage local-scale international
                collaboration within a global frame of mind.
                Check out
                <a
                  href="https://www.travelingcircusofurbanism.com/"
                  target="_blank"
                  >our sister site</a
                >
                for more on global urbanism!
              </p>
            </template>
          </div>
        </div>

        <div class="illustration ill2">
          <img src="/assets/img/about2.jpg" />
        </div>

        <div class="flex text3">
          <div class="textbox left">
            <template v-if="$i18n.locale === 'ja'">
              <h2>Live and Work, Kyoto Style.</h2>
              <p>
                Bridge to
                Kyotoは、建築や街づくりに関わるアーバニストや、都市や公共空間をテーマに活動を行うアーティストが1〜6ヶ月の期間で滞在して活動できるアーバニスト・イン・レジデンスとして機能してきました。2023年3月からは、建築・都市・まちづくり関係の蔵書やアイテムを公開する私設ライブラリーとして、不定期でオープンしています（日程は <a
                  href="https://www.instagram.com/bridgetokyoto/?hl=en"
                  target="_blank"
                  >Instagram</a
                >を参照ください）
              </p>
            </template>

            <template v-else>
              <h2>Live and Work, Kyoto Style.</h2>
              <p>
                Since 2020, Bridge To Kyoto has been serving
                as a residence for urbanists as well as an
                event, workshop, and gallery space. It is
                based in a newly renovated postwar
                Kyoto-style home with a stream in front,
                adjacent to the Philosopher's Path. It has
                hosted many creative-minded people from
                varied backgrounds from around the world
                since its opening, as well as a multitude of
                talks, workshops, performances, and
                exhibitions.
              </p>
            </template>
          </div>
        </div>

        <div class="illustration ill3">
          <img src="/assets/img/about3.jpg" />
        </div>
      </div>
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

.grid {
  display: grid;
  grid-gap: 270px 120px;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;

  @media (max-width: 768px) {
    display: block;
  }
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.textbox {
  background: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 3;

  $top: 30px;
  $inside: 60px;
  $outside: 50px;

  &.left {
    padding: $top $inside $outside 0;
    margin-right: -$inside;
  }
  &.right {
    padding: $top 0px $outside $inside;
    margin-left: -$inside;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
}

h1 {
  margin-bottom: 1em;
}

.text2 {
  grid-column: 2;

  @media (max-width: 768px) {
    grid-column: 1;
  }
}

img {
  max-width: 130%;
}
.illustration {
  width: 150%;
  align-items: center;

  &.ill1 {
    transform: translateX(30px);
    max-width: 125%;
    margin-left: -30%;
  }

  &.ill2 {
    max-width: 115%;
    margin-left: -20%;
    transform: rotate(-7deg);
    grid-column: 1;
  }

  &.ill3 {
    margin-left: -50%;
    grid-column: 2;
  }

  @media (max-width: 768px) {
    margin-left: -15% !important;
    margin-right: 0 !important;
    max-width: 100% !important;
  }
}

a {
  color: var(--primaryd2);
}
</style>
