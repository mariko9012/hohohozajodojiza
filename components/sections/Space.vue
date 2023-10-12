<template>
  <PageSection class="section" id="space">
    <div
      v-lazy:background-image="'/assets/img/2023/jodoji1.jpg'"
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <div class="contentcolumn">
      <h1>Spaces</h1>

      <div class="leftright">
        <div class="mapholder sticky">
          <img
            class="pointer"
            src="/assets/img/map_pointer.png"
            :style="{
              top: pointerTop * 100 + '%',
              left: pointerLeft * 100 + '%',
            }"
          />

          <img class="map" :src="`/assets/img/map_fade.jpg`" />
        </div>

        <div class="text">
          <div
            ref="intro"
            label="intro"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'intro',
            }"
            :top="0.5"
            :left="-1"
          >
            <p>
              ホホホ座浄土寺座が管理している、もしく連携している拠点の一覧です。イベントやワークショップ、展覧会、宿などを通して地域の活動に開いた使い方をしています。ご使用を希望される方は、お問い合わせください。
              <a
                href="https://www.google.com/maps/d/u/3/edit?mid=1dkzrlCFpr0rIwb3DVTnvd736F2Ixw8A&usp=sharing"
                target="_blank"
                >こちら</a
              >の地図でもご覧頂けます。
            </p>
          </div>

          <div
            ref="浄土寺センター"
            label="浄土寺センター"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '浄土寺センター',
            }"
            :top="0.42"
            :left="0.56"
          >
            <h2>ホホホ座ねどこ／浄土寺センター</h2>
            <p>
              ホホホ座浄土寺座の活動拠点となる建物です。1階に古書・雑貨店、2階に1日1組限定の宿があります。1階では、福祉にまつわる事柄、空き家、物品の処分など、地域の困りごと相談を受け付けています。2階は、宿泊機能のほか、展示、イベントスペースとしても使用出来ます。室内は、化学物質過敏症の方に配慮した内装となっています。
            </p>
          </div>

          <!-- <div
            ref="ホホホ座ねどこ"
            label="ホホホ座ねどこ"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'ホホホ座ねどこ',
            }"
            :top="0.42"
            :left="0.56"
          >
            <h2>ホホホ座ねどこ</h2>
            <p>
              ホホホ座浄土寺店の斜め前、1日1組限定のお宿です。室内は、琉球漆喰、土壁、荏胡麻油、亜麻仁油、柿渋等、なるべく自然由来の素材を使用し、廃材を活用した空間になっています。詳細は<a
                href="http://hohohoza.com/news/3609"
                target="_blank"
                >こちら</a
              >
            </p>
          </div> -->

          <div
            ref="ホホホ座コミュニティスペース"
            label="ホホホ座コミュニティスペース"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'ホホホ座コミュニティスペース',
            }"
            :top="0.42"
            :left="0.55"
          >
            <h2>ホホホ座コミュニティスペース（仮）</h2>
            <p>
              （現在改装中）2023年冬にオープン予定の、ホホホ座浄土寺座が運営するコミュニティスペースです。当面は、月1回開催していた「0えんマーケット」を常設します。キッチンスペースを作り、飲食サービス、食料品の販売も不定期に開催する予定です。
              世代を問わないサロン活動、各種会合にも使える開かれたスペースを目指しています。
            </p>
          </div>

          <div
            ref="ホホホ座"
            label="ホホホ座"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'ホホホ座',
            }"
            :top="0.42"
            :left="0.55"
          >
            <h2>ホホホ座浄土寺店</h2>
            <p>
              一般書籍から、ZINE、雑貨まで。浄土寺のランドマークとなるお店です。店内では、さまざまな展示企画やトークイベント、ときには音楽のライブも開催されます。本の取り寄せや配達など、昔ながらの書店サービスも行っています。
            </p>
          </div>

          <div
            ref="Hand Saw Press"
            label="Hand Saw Press"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'Hand Saw Press',
            }"
            :top="0.42"
            :left="0.55"
          >
            <h2>Hand Saw Press</h2>
            <p>
              ホホホ座浄土寺店と同じフロアにある、日本初のリソグラフスタジオ「hand
              saw
              press」の京都店です。冊子、ポスター、アートプリントなど、リソグラフを用いたあらゆる表現を追求しており、企画、デザイン、編集を含んだ、総合的なディレクションが可能です。
            </p>
          </div>

          <div
            ref="Bridge To"
            label="Bridge To"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'Bridge To',
            }"
            :top="0.34"
            :left="0.62"
          >
            <h2>Bridge To</h2>
            <p>
              「都市」をテーマにした、建築・街づくり・アートなど都市に関わる実践者のための私設ライブラリー&イベントスペースです。都市や建築をフィールドに活動を行うアーティストが1〜6ヶ月の期間で滞在して活動できるアーバニスト・イン・レジデンスとしても機能してきました。ポップアップのイベントやワークショップの開催が可能です。
            </p>
            <p>
              HP:
              <a href="https://www.brdg.to//" target="_blank"
                >https://www.brdg.to/</a
              >
            </p>
          </div>

          <div
            ref="浄土寺協業センター"
            label="浄土寺協業センター"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '浄土寺協業センター',
            }"
            :top="0.34"
            :left="0.7"
          >
            <h2>浄土寺座協業スペース</h2>
            <p>
              哲学の道ほど近くにあるコンパクトな多目的スペースです。1階がキッチンのあるフリースペース。2階は整体など身体にまつわる施術、ワークショップにも使用出来ます。本のライブラリー機能もあり、絵本の読みきかせや読書会なども開催予定。地域に開かれたコミュニティスペースとして目的に応じた使用が出来ます。
            </p>
          </div>

          <div
            ref="下南田町集会所"
            label="下南田町集会所"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '下南田町集会所',
            }"
            :top="0.4"
            :left="0.7"
          >
            <h2>下南田町集会所</h2>
            <p>
              下南田町の集会所。広めの座敷で、打ち合わせやイベントなどさまざまな用途に使えます。
            </p>
          </div>

          <div
            ref="託児所"
            label="託児所"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '託児所',
            }"
            :top="0"
            :left="0"
          >
            <h2>ホホホ座おやこのごろね</h2>
            <p>
              ０歳児も預かることが出来る、認定外保育施設（京都市指定）を併設した産前産後「おかあさん支援」の場です。大人用ベッドもあり、おかあさんもゆっくり休むことが出来ます。単純な子育て支援だけではなく、左京区〜浄土寺が持つ、地域文化を絡めた子育て生活のサポートをします。詳細は
              <a
                href="https://9514588814.amebaownd.com/?fbclid=PAAaZvI10q15JTJtDIgPP8cIlGDIjYLypskvX2ncoi2nt9mCT7WkPvZQPYB0Y"
                target="_blank"
                >こちら</a
              >
            </p>
          </div>

          <div
            ref="ギャラリー桜谷町47"
            label="ギャラリー桜谷町47"
            class="textsection"
            :class="{
              active: isMobile || activeItem === 'ギャラリー桜谷町47',
            }"
            :top="0.59"
            :left="0.64"
          >
            <h2>ギャラリー桜谷町47</h2>
            <p>
              哲学の道沿いにある安楽寺のギャラリーです。宿泊スペース、キッチン、簡易シャワーもあり、滞在型の展示、物販、飲食系のイベントなど、多用途に使用出来ます。春と秋の観光シーズン、大型連休の期間は基本使用出来ません。また、閑静な場所にあるため、大きな音が出るイベントも不可となります。
            </p>
          </div>

          <div
            ref="安楽寺"
            label="安楽寺"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '安楽寺',
            }"
            :top="0.5"
            :left="0.8"
          >
            <h2>京都住蓮山安楽寺</h2>
            <p>
              鹿ヶ谷の山麓に位置する、かぼちゃ供養で知られる浄土宗系単立のお寺です。本殿、書院を使った展示企画、井戸のあるキッチンを備えた客殿「椛（もみじ）」ではライブや飲食系イベントも催され、地域に開かれた寺院として知られています。コロナ禍で中止になっていた「くさの地蔵縁日」は、2024年から再開予定です。
            </p>
          </div>

          <div
            ref="岡崎倉庫"
            label="岡崎倉庫"
            class="textsection"
            :class="{
              active: isMobile || activeItem === '岡崎倉庫',
            }"
            :top="0.73"
            :left="0.23"
          >
            <h2>天王町倉庫</h2>
            <p>
              倉庫、制作スペース、ラボ機能を併設した大型倉庫です。古材に限らず、古道具、古書など、多種多様なリサイクル品目を保管しています。施設内は非公開となっていますが、事前予約制で見学可能です。
            </p>
          </div>

          <div class="spacer" v-if="!isMobile"></div>
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from "~/components/PageSection.vue";
import useWindowWidth from "~/components/mixins/useWindowWidth";

export default {
  components: { PageSection },
  mixins: [useWindowWidth],

  data() {
    return {
      observer: null,
      activeItem: "intro",
      pointerTop: 0.5,
      pointerLeft: -1,
    };
  },
  computed: {
    instersectionThreshold() {
      return this.isMobile ? 0.1 : 0.9;
    },
  },
  mounted() {
    let toObserve = [...Object.values(this.$refs)];
    this.observer = new IntersectionObserver(this.intersectEvent, {
      threshold: this.instersectionThreshold,
    });
    toObserve.forEach((el) => this.observer.observe(el));
  },
  beforeDestroy() {
    this.observer.disconnect();
    this.observer = null;
  },
  methods: {
    intersectEvent(entries, observer) {
      entries.forEach((entry) => {
        if (
          !this.isMobile &&
          entry.intersectionRatio > this.instersectionThreshold
        ) {
          this.activeItem = entry.target.getAttribute("label");
          this.pointerTop = parseFloat(entry.target.getAttribute("top"));
          this.pointerLeft = parseFloat(entry.target.getAttribute("left"));
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  --bg: white;
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
  z-index: 0;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
}
.mapholder {
  transform: scale(1.5);
}
.map {
  position: relative;
}
.pointer {
  transform: translate(-50%, -50%) scale(0.5);
  position: absolute;
  z-index: 3;
  transition: all 0.5s ease-in-out;
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

.text {
  position: relative;
  z-index: 4;
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
