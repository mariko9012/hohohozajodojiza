<template>
  <PageSection class="section" id="about">
    <div class="contentcolumn">
      <div class="grid">
        <div class="flex text1">
          <div class="textbox left">
            <h1>About</h1>
            <p>
              一般社団法人ホホホ座浄土寺座は、京都・左京区の浄土寺エリアを中心に、地域福祉と空き家の利活用を基盤としたまちづくり、コミュニティの形成・育成を行う団体です。既に地域にある資源を可視化・流通・活用することで、小さなストレスを解消し、誰もが暮らしやすい地域コミュニティを生み出すことを目標に活動しています。
            </p>
          </div>
        </div>

        <div class="illustration ill1">
          <img src="/assets/img/newlogo.png" />
        </div>

        <div class="flex text2">
          <div class="textbox right">
            <h1>浄土寺という場所</h1>
            <p>
              私たちが活動する浄土寺近隣は、銀閣寺や法然院、哲学の道、大文字山などの観光地と静かな住宅街が共存する地域です。カルチャーの発信地である書店「ホホホ座浄土寺店」「ホホホ座浄土寺センター」、アートスペース「浄土複合」、レストラン「monk」、複合スペース「Bridge
              To」など、個性的な商店、施設が点在し、新しい文化の兆しが感じられる地域でもあります。
            </p>
          </div>
        </div>

        <div class="illustration ill2">
          <img src="/assets/img/daimonji.png" />
        </div>

        <div class="flex text1">
          <div class="textbox left">
            <h2>古材流通・場所の活用</h2>
            <p>
              「地産地消できる唯一の建材」として、古材の再利用に取り組んでいます。さまざまな建築プロジェクトに加え、地域の空き家、遊休物件の利活用も行っています。改修や不動産関係の相談は、お気軽に
              <a
                href="https://www.instagram.com/bridgetokyoto/?hl=en"
                target="_blank"
                >お問合せ</a
              >ください）
            </p>
          </div>
        </div>

        <div class="illustration ill3">
          <img src="/assets/img/kozai_hudousan.png" />
        </div>

        <div class="flex text2">
          <div class="textbox right">
            <h2>コミュニティスペースの運用</h2>
            <p>
              社寺や集会所など、既存の地域資源とメンバーが運営するお店、施設を活用したイベントを行っています。2023年には、ホホホ座浄土寺センター横の物件を取得。物品を無料で提供する「0えんマーケット」、住民が工具やツール類をシェア出来る「ツールライブラリー」などをオープンする予定です。
            </p>
          </div>
        </div>

        <div class="illustration ill4">
          <img src="/assets/img/community_space.png" />
        </div>

        <div class="flex text1">
          <div class="textbox left">
            <h2>地域福祉</h2>
            <p>
              高齢者、障害者、生活に不安を感じている方。立場や程度の大小にかかわらない「地べた」の相談支援を行っています。医療、福祉のプロが在籍し、しかるべき専門機関につなぐことも可能です。＊当法人で地域福祉ボランティア団体「ホホホ・ザ・わいわい」の活動を引き継いでいます。
            </p>
          </div>
        </div>

        <div class="illustration ill5">
          <img src="/assets/img/tiiki_fukushi.png" />
        </div>

        <div class="flex text2">
          <div class="textbox right">
            <h2>イベント・ワークショップの実施</h2>
            <p>
              有識者や実践者を招いたトークイベントやまち歩き、住民を巻き込んだものづくりのワークショップなど、誰もが参加できる学びの場を企画・運営します。
            </p>
          </div>
        </div>

        <div class="illustration ill6">
          <img src="/assets/img/event_workshop.png" />
        </div>

        <div class="flex text1">
          <div class="textbox left">
            <h2>公開型住民会議</h2>
            <p>
              浄土寺の住民であるか否かに関わらず、自由に出入りし、意見を交わせる一般公開型の住民会議を月一で開催しています。課題の共有、生活のアップデート、今後の活動などをオープンに議論する会です。議事録はオンライン上で一般公開します。浄土寺に限らない「小さな地域コミュニティ」のあり方を模索します。
            </p>
          </div>
        </div>

        <div class="illustration ill7">
          <img src="/assets/img/koukai_kaigi.png" />
        </div>

        <div class="flex text2">
          <div class="textbox right">
            <h2>食の実験</h2>
            <p>
              理想的な地域社会をつくるため、「食」をテーマにした研究と実践を行います。健康はもちろん、流通や環境などのテーマにも取り組み、地域の施設を利用したワークショップ、物販企画などを通じ、地域住民にフィードバックします。
            </p>
          </div>
        </div>

        <div class="illustration ill8">
          <img src="/assets/img/syoku.png" />
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from "~/components/PageSection.vue";

export default {
  components: {
    PageSection,
  },
};
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
  grid-gap: 50px 100px;
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
  max-width: 100%;
}
.illustration {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }

  // &.ill1 {
  //   // transform: translateX(30px);
  //   // max-width: 125%;
  //   // margin-left: -30%;
  // }

  &.ill2 {
    // max-width: 115%;
    // margin-left: -20%;
    // transform: rotate(-7deg);
    grid-column: 1;
  }

  &.ill3 {
    // margin-left: -50%;
    grid-column: 2;
  }

  &.ill4 {
    // margin-right: -50%;
    grid-column: 1;
  }

  &.ill5 {
    // margin-left: -50%;
    grid-column: 2;
  }

  &.ill6 {
    // margin-right: -50%;
    grid-column: 1;
  }
  &.ill7 {
    // margin-left: -50%;
    grid-column: 2;
  }
  &.ill8 {
    // margin-right: -20%;
    grid-column: 1;
  }

  @media (max-width: 768px) {
    // margin-left: -15% !important;
    // margin-right: 0 !important;
    max-width: 100% !important;
  }
}

a {
  color: var(--primaryd2);
}
</style>
