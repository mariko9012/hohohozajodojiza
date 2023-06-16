<template>
  <PageSection class="section" id="faq">
    <div
      v-lazy:background-image="
        '/assets/img/2023/4.jpg'
      "
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <div
      class="interstitialbg"
      v-lazy:background-image="
        '/assets/img/2023/6.jpg'
      "
    ></div>

    <div class="contentcolumn">
      <h1>FAQ</h1>
      <div class="columns">
        <h2 v-if="$i18n.locale === 'ja'">
          誰が運営しているの？
        </h2>
        <h2 v-else>Who is behind this?</h2>
        <p>
          <template v-if="$i18n.locale === 'ja'">
            都市、建築、まちづくりの分野で編集やリサーチの仕事を行う杉田真理子と、デザイナー・ディベロッパーのジャスパー・スティーベンソンの個人プロジェクトとして運営しています。海外の都市から集めた都市、建築、まちづくりの事例を紹介する
            <a
              href="https://www.travelingcircusofurbanism.com"
              target="_blank"
              >Traveling Circus of
              Urbanism（アーバニズムの旅するサーカス）</a
            >も運営しています。
          </template>
          <template v-else>
            We are Mariko Sugita (an editor and writer on
            urban affairs) and Jasper Stephenson (a designer
            and developer). We own an online platform called
            <a
              href="https://www.travelingcircusofurbanism.com"
              target="_blank"
              >Traveling Circus of Urbanism</a
            >, which collects urban narratives from around
            the world through traveling. We run Bridge To
            Kyoto by ourselves (we also live here!) through
            our passion for cities and urbanism, and it's
            entirely an independent project. We have good
            connections with different urbanism-related
            practitioners here in Japan as well as in the
            U.S., Europe, and Southeast Asia, and we will do
            our best to connect you with the local urbanist
            scene!
          </template>
        </p>

        <h2 v-if="$i18n.locale === 'ja'">
          誰が使用できるの？
        </h2>
        <h2 v-else>What happens after I apply?</h2>
        <p>
          <template v-if="$i18n.locale === 'ja'"
            >都市、建築、まちづくり、アートに興味がある人であれば誰でもご使用いただけます。レジデンス募集の場合は、面談・ビデオ面接をさせて頂く場合もあります。ワークショップやイベントの開催希望の方も、お気軽にお問い合わせください。</template
          >
          <template v-else
            >It's important for us to get to know you
            better, so we'll carefully examine your
            application and perhaps ask for an online
            interview. We'll get back to you within a week
            to let you know our availability.</template
          >
        </p>

        <h2 v-if="$i18n.locale === 'ja'">
          どんなエリアなの？
        </h2>
        <h2 v-else>What's in the neighborhood?</h2>
        <p>
          <template v-if="$i18n.locale === 'ja'"
            >銀閣寺と哲学の道から、徒歩5分ほどの場所にあります。京都大学も近く、カフェやレストランなどが徒歩圏内に数多くあるほか、クリエイティブな本屋や隠れ家的なアートスペースも点在するエリアです。</template
          >
          <template v-else>
            We're only a 5 minute walk away from the Silver
            Temple (Ginkakuji) &amp; the Philosopher's Path
            (one of the most popular icons of Kyoto), and 25
            minutes by bus from the city center. Kyoto
            University is very close by, as well. On top of
            that, there are many small independent art
            galleries, book stores, and craft shops nearby.
            One of our favorites is
            <a href="http://hohohoza.com/" target="_blank"
              >Hohohoza</a
            >!
          </template>
        </p>
        <h2 v-if="$i18n.locale === 'ja'">利用料金は？</h2>
        <h2 v-else>How much does it cost?</h2>
        <div>
          <template v-if="$i18n.locale === 'ja'">
            <!-- <h3>レジデンス</h3>
            <p>
              1ヶ月〜6ヶ月の滞在で、700ユーロでご利用頂けます。
              1ヶ月以下、6ヶ月以上ご利用希望の方は、
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
              >ご相談</a>ください。
            </p>
            <p>
              スペースの一般利用は無料ですが、有料イベントやグッズ販売がある際には、利益の40%を頂戴しております。
            </p> -->

 <template v-if="$i18n.locale === 'ja'"
            >イベント、ワークショップ、展示など。企画内容によって
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >ご相談</a
              >ください。</template
          >
          </template>
          <template v-else>
            <!-- <h3>Residency</h3>
            <p>
              Stay between 1–6 months
              Includes: private room + office use + minimum 1 day workshop / event / presentation
              <br />700 Euros per month (the price may change depending on season)
              <br />Please
              <a href="mailto:bridgetoresidency@gmail.com" target="_blank">consult us</a> if you want to stay less than 1 month or more than 6 months.
            </p>
            <p>
              General use of the space for events and workshops is free for the residents. We prefer the space to be noncommercial, but in the event that you make a profit from ticket or goods sales, we kindly ask for 40% of the earnings for our help with planning, translation, setup/teardown, etc.
            </p>
            <p>
              For non-residents, the price varies depending on the type &amp; length of the event. Please contact us for inquiries.
            </p> -->

            <h3>Event / Workshop</h3>
            <p>
              We prefer the space to be noncommercial, but
              in the event that you make a profit from
              ticket or goods sales, we kindly ask for 40%
              of the earnings for our help with planning,
              promption, translation, setup/teardown,
              documentation etc.
            </p>
            <p>
              Price varies depending on the type &amp;
              length of the event.
              <br />Please
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >contact us</a
              >
              for inquiry.
            </p>
          </template>
        </div>

        <h2 v-if="$i18n.locale === 'ja'">使用言語は？</h2>
        <h2 v-else>
          What languages are spoken in the house?
        </h2>
        <p>
          <template v-if="$i18n.locale === 'ja'"
            >英語を中心に、日本語とのバイリンガルです。</template
          >
          <template v-else
            >Mariko is a native Japanese speaker and Jasper
            speaks American English. We both speak English
            and Japanese fluently, though English is our
            primary language at the house. Also, we are
            currently learning Spanish!</template
          >
        </p>

        <h2 v-if="$i18n.locale === 'ja'">
          アーバニストって誰のこと？
        </h2>
        <h2 v-else>
          ”Urbanist” means a lot of things. What do you mean
          by it?
        </h2>
        <p>
          <template v-if="$i18n.locale === 'ja'"
            >アーバニストという言葉は、日本では都市プランナーや土木工学系の技術者と捉えられることが多いようです。しかし、私たちは、都市、建築、まちづくりに少しでもつながりのある活動を行う全ての実践者を、広い意味でアーバニストと名付けています。Bridge Toでは特に、小さなグラスルーツの活動や、コミュニティ主導のプロジェクトを支援しています。</template
          >
          <template v-else
            >In a Japanese context, “urbanist” often means
            city planners and civil engineers. However,
            urbanists do not have to be only architects,
            urban designers, or other related specialists —
            we define the term in a broader way. Urbanists,
            for us, are anyone whose work concerns the scale
            of cities and urban living. For instance, an
            artist who stages performances in public spaces,
            or an environmentalist who does research on
            implementating fermentation technology into
            people's everyday lives in cities — these people
            are also urbanists to us.</template
          >
        </p>
        <template v-if="$i18n.locale !== 'ja'">
          <h2>
            What kind of urbanists are you looking for?
          </h2>
          <p>
            <template
              v-if="$i18n.locale === 'ja'"
            ></template>
            <template v-else
              >We appreciate urban movements and
              architectural projects that are small-scale,
              incremental, resident-generated, and
              bottom-up, rather than top-down planning and
              mega-projects. We'd love to invite inspiring
              practitioners who truly love their cities who
              are part of motivating initiatives and topics
              that are unique to each city.</template
            >
          </p>

          <!-- <h2>What if I want to stay less than a month?</h2>
          <p>
            <template
              v-if="$i18n.locale === 'ja'"
            ></template>
            <template v-else>
              Please understand that this house is not an
              airbnb or a guest house, so one month is our
              minimum period. That said, we also understand
              that not everyone can take a month off to live
              in Japan. Please
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >contact us</a
              >
              if you are interested in staying with us but
              have only a few weeks to spare — hopefully we
              can figure something out!
            </template>
          </p> -->
        </template>
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
  --bg: rgb(141, 115, 160);
  background: rgb(141, 115, 160);
  color: white;
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;
  position: relative;
  padding-top: 0;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
  }
}

.interstitialbg {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 50%;
  height: 50%;
  background-size: cover;
  background-position: center center;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
  opacity: 0.2;

  @media (max-width: 768px) {
    top: 30%;
    left: 20%;
    width: 80%;
    height: 25%;
    // opacity: 0.3;
  }
}

.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}

h2 {
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 40px;
  }
}
h3 {
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-top: 20px;
  }
}

h2,
h3,
p {
  text-shadow: 0 1px 3px rgb(141, 115, 160),
    0 0px 3px rgb(141, 115, 160),
    0 1px 5px rgb(141, 115, 160),
    0 1px 5px rgb(141, 115, 160);
}

a {
  color: white;
}

p {
  margin: 1em 0;
}
</style>
