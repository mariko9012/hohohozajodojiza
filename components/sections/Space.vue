<template>
  <PageSection class="section" id="space">
    <div
      v-lazy:background-image="
        '/assets/img/2023/1.jpg'
      "
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <div class="contentcolumn">
      <h1>Our Space</h1>
      <div class="leftright">
        <div class="sticky">
          <ConditionalIllustration
            class="house"
            :activeItem="activeItem"
          />
        </div>
        <div class="text">
          <div
            ref="intro"
            label="intro"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'intro',
            }"
          >
            <template v-if="$i18n.locale === 'ja'">
              <p>
                戦後に建てられた京都の古い一軒家。目の前には川が走り、このエリアで唯一という個人用の橋がかかっています。2019年に改装・補強をし、アーバニストのクリエイティブレジデンスおよびコミュニティスペースとしてオープンしました。コンパクトなスペースですが、自分達自身の棲家としながら、イベント・ギャラリー・ワークショップなど多目的に使用しています。
              </p>
              <p>
              </p>
            </template>
            <template v-else>
              <p>
                Bridge To Kyoto is based in an old, postwar,
                Kyoto-style home with a stream flowing in
                front and a bridge (yes, the name isn't only
                metaphorical!) crossing over it to enter.
                After a renovation in 2019, it has found new
                life as a creative residence and community
                space. Though small, it functions fully as a
                residence as well as an event, gallery, and
                workshop space.
              </p>
              <p>
                Having remodeled a large portion of the
                space by hand, we welcome all those with a
                DIY spirit. On top of that, we use renewable
                energy, try to limit plastic and
                one-time-use products as much as possible,
                and do our best to keep our establishment
                zero-waste. We're working to continue to
                shift the conversation around how valuable
                Japan's old and vacant houses are, and how
                possible it is renovate them using materials
                that are good for the environment.
              </p>
            </template>
          </div>

          <div
            ref="residence"
            label="residence"
            class="textsection"
            :class="{
              active:
                isMobile || activeItem === 'residence',
            }"
          >
            <ConditionalIllustration
              v-if="isMobile"
              class="mobilehouse"
              activeItem="residence"
            />
            <h2>Residence</h2>
            <template v-if="$i18n.locale === 'ja'">
              <p>
                Bridge To
                Kyotoには滞在用の寝室が2階に1部屋あります。
              </p>
            </template>
            <template v-else>
              <p>
                We currently don't have a room open for
                residency (we live here!) but while we're
                abroad we rent the whole house to
                creative-minded people who are also
                interested in hosting pop-up exhibitions
                &amp; events in our space during their stay.
                We're also planning to expand to more spaces
                in the same neighborhood in Kyoto, so
                message us if you're looking for a
                residency!
              </p>
            </template>
          </div>

          <div
            ref="workshop"
            label="workshop"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'workshop',
            }"
          >
            <ConditionalIllustration
              v-if="isMobile"
              class="mobilehouse workshop"
              activeItem="workshop"
            />

            <h2>Library</h2>
            <template v-if="$i18n.locale === 'ja'">
            </template>
            <template v-else>
              <p>
                The library is regularly open to the public,
                showcasing our collection of publications
                and items in the fields of architecture and
                urbanism with the intention of creating a
                hub for open research and dialogue.
              </p>
            </template>

            <h2>Event Space</h2>
            <template v-if="$i18n.locale === 'ja'">
              <p>
                1階のリビングダイニングと2階のダイニングルームは、ライブラリーとイベントスペースとして使用できます。世界中から集まった建築・都市・まちづくり関係の本、雑誌、ZINE、ポスター、グッズ、古物などを楽しんで頂けます。
              </p>
              <p>◉ライブラリー利用方法<br>最大収容人数：10名程度<br>利用可能日時: 毎週土曜日（変動あり）<br>利用時間：11:00～17:00<br>利用料金：無料（3月のみ）<br>設備：WIFI・冷暖房・トイレ<br>お申し込み方法：InstagramかfacebookにてDM</p>
              <p>イベント内容と日時は
                <a
                  href="https://www.facebook.com/bridgetokyoto/"
                  target="_blank"
                  >Facebook</a
                >か
                <a
                  href="https://www.instagram.com/bridgetokyoto/"
                  target="_blank"
                  >Instagram</a
                >からご確認ください。</p>
              <p></p>
              <p></p>
　　　　　　　　<p></p>
            </template>
            <template v-else>
              <p>
                Our tatami-floored living &amp; dining
                spaces double as community space for events
                of all kinds, such as exhibitions of your
                work, meetups to engage and collaborate with
                local urbanists, and more. There are also
                regularly scheduled city-related workshops
                and events held in the community space,
                outside of what the residents themselves
                organize. Follow our
                <a
                  href="https://www.facebook.com/bridgetokyoto/"
                  target="_blank"
                  >Facebook</a
                >
                or
                <a
                  href="https://www.instagram.com/bridgetokyoto/"
                  target="_blank"
                  >Instagram</a
                >
                for more information about our events!
              </p>
              <p>
                The space has a capacity of about 10–15
                people.
              </p>
            </template>
          </div>

          <div
            ref="bridge"
            label="bridge"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'bridge',
            }"
          >
            <ConditionalIllustration
              v-if="isMobile"
              class="mobilehouse bridge"
              activeItem="bridge"
            />
            <h2>Bridge &amp; Garden</h2>
            <template v-if="$i18n.locale === 'ja'">
              <p>
                家の前にある個人用の橋の他、コンパクトなガーデンスペースもあり、アーバンガーデニングなど実験的な取り組みが行えます。
              </p>
            </template>
            <template v-else>
              <p>
                There's a stream running in front of our
                space, and we have the area's only private
                bridge. There's also a small garden, and
                anyone interested in urban gardening is
                welcome to participate in its upkeep and
                expansion.
              </p>
            </template>
          </div>
          <div class="spacer" v-if="!isMobile"></div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'
import useWindowWidth from '~/components/mixins/useWindowWidth'
import ConditionalIllustration from '~/components/ConditionalIllustration.vue'

export default {
  components: {
    PageSection,
    ConditionalIllustration,
  },
  mixins: [useWindowWidth],

  data() {
    return {
      observer: null,
      activeItem: 'intro',
    }
  },
  computed: {
    instersectionThreshold() {
      return this.isMobile ? 0.1 : 0.9
    },
  },
  mounted() {
    let toObserve = [
      this.$refs.intro,
      this.$refs.residence,
      this.$refs.workshop,
      this.$refs.bridge,
    ]
    this.observer = new IntersectionObserver(
      this.intersectEvent,
      {
        threshold: this.instersectionThreshold,
      },
    )
    toObserve.forEach((el) => this.observer.observe(el))
  },
  beforeDestroy() {
    this.observer.disconnect()
    this.observer = null
  },
  methods: {
    intersectEvent(entries, observer) {
      entries.forEach((entry) => {
        // console.log(entry.intersectionRatio, entry.target)
        if (
          !this.isMobile &&
          entry.intersectionRatio >
            this.instersectionThreshold
        )
          this.activeItem =
            entry.target.getAttribute('label')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.section {
  --bg: #a2ffc4;
  background: var(--bg);

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
}

.leftright {
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content: space-between;

  & > * {
    width: 45%;
  }

  @media (max-width: 768px) {
    display: block;

    & > * {
      width: 100%;
    }
  }
}

.sticky {
  position: sticky;
  top: 15vh;
  z-index: 3;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
}
.house {
  width: 180%;
  position: relative;
  left: -70%;

  @media (max-width: 768px) {
    width: 145%;
    left: -40%;
    padding: 12vh 0 4vh 0;
    background: var(--bg);
  }
}

.mobilehouse {
  position: relative;
  z-index: 1;
  width: 200%;
  left: -80%;
  margin-bottom: -60%;
  margin-top: -20%;

  &.workshop {
    margin-bottom: -30%;
    margin-top: -20%;
    left: -100%;
  }

  &.bridge {
    width: 120%;
    margin-bottom: -5%;
    margin-top: -25%;
    left: -20%;
  }
}

h1 {
  padding-top: 30px;
  margin-bottom: 1em;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    margin-bottom: -1.6em;
  }
}

h2,
p {
  position: relative;
  z-index: 2;
}

p {
  margin-bottom: 1.2em;
}

.textsection {
  margin-bottom: 20em;
  transition: all 0.2s;

  &:not(.active) {
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    margin-bottom: 5em;
  }
}

.spacer {
  height: 10vh;
}
</style>
