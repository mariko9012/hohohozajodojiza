<template>
  <PageSection class="section" id="apply">
    <!-- <div class="bghalf"></div> -->
    <div class="contentcolumn">
      <h1>Apply</h1>
      <div class="columns">
        <!-- <div class="residency">
          <h2 v-if="$i18n.locale === 'ja'">レジデンス</h2>
          <h2 v-else>Residency</h2>
          <p class="indent">
            <strong>
              <template v-if="$i18n.locale === 'ja'"
                >現在、レジデンスの申し込みを受付しておりません。</template
              >
              <template v-else
                >We are not currently accepting new
                residency applications. Thanks for your
                patience!</template
              >
            </strong>
          </p>
          <p class="indent">
            <template v-if="$i18n.locale === 'ja'"
              >Bridge to
              Kyotoは、「都市」をテーマに分野・文化・国籍を超えた活動を行うための場所です。海外を中心に、国内外から1〜6ヶ月の単位で「アーバニスト・イン・レジデンス」として実践者を受け入れ、地元のコミュニティや活動とつなぐ手助けをします。応募は、年間を通して随時可能です。</template
            >
            <template v-else
              >Bridge to Kyoto is a place for
              trans-disciplinary &amp; trans-national
              activities centered on the topic of “the
              city”. It encourages mutual learning and
              collaborative practices of urbanism
              transnationally. We are looking for urbanists
              who want to stay with us for a period of 1–6
              months, who are interested in doing research
              in Kyoto or Japan in general, and who want to
              connect with local practitioners. You can
              apply anytime throughout the year!</template
            >
          </p>
          <h3>
            <template v-if="$i18n.locale === 'ja'"
              >アーバニスト・イン・レジデンスの対象者</template
            >
            <template v-else>Who is it for?</template>
          </h3>
          <ul>
            <template v-if="$i18n.locale === 'ja'">
              <li>
                建築、都市デザイン、まちづくり、プランニング、市民参加、コミュニティマネジメント、不動産、ジャーナリズムなどに関わる方々
              </li>
              <li>
                都市や公共空間をテーマとした活動を積極的に行っているアーティスト
              </li>
              <li>
                英語、あるいは日本語での日常会話ができる方
              </li>
              <li>
                生活費、家賃、旅費などを自己負担できる方
              </li>
              <li>
                レジデンス期間中に、最低1回はワークショップ、イベント、展示などを自発的に開催できる方
              </li>
              <li>
                年齢、宗教、ジェンダーなどに関わらず誰でもご応募頂けます
              </li>
            </template>
            <template v-else>
              <li>
                Those who mainly work in the fields of
                architecture, urban design and planning,
                citizen participation, community management,
                journalism, or art related to the topic of
                urbanism
              </li>
              <li>
                Those who can communicate fluently in
                English or Japanese (Our daily communication
                is mainly in English)
              </li>
              <li>
                Those who can cover their own travel
                expenses and living expenses during their
                stay
              </li>
              <li>
                Those who can participate in interviews via
                the Internet (if they pass the first phase
                of the application process)
              </li>
              <li>
                Those who are willing to organize &amp;
                participate in workshops or events during
                their stay — at least one event or workshop
                that is open to the public is required to be
                organized by the applicant
              </li>
              <li>
                There are no limitations concerning age,
                religion, sexual preference, or background
              </li>
            </template>
          </ul>
          <h3>
            <template v-if="$i18n.locale === 'ja'"
              >こちらが提供するもの</template
            >
            <template v-else>What we provide</template>
          </h3>
          <ul>
            <template v-if="$i18n.locale === 'ja'">
              <li>
                プライベートルーム、オフィススペース（家具、Wifi付き）
              </li>
              <li>
                キッチン、バルコニー、庭、お風呂やリビングなどのコモンスペース（共用）
              </li>
              <li>
                イベントやワークショップ開催に際しての場所の提供と最低限のサポート
              </li>
              <li>
                滞在者の活動内容のプロモーションとネットワーキングのお手伝い
              </li>
              <li>海外のアーバニストの紹介</li>
            </template>
            <template v-else>
              <li>
                A room for living and working (furnished,
                with wifi)
              </li>
              <li>
                Access to common spaces (kitchen, terrace,
                garden, bathroom, and living room)
              </li>
              <li>
                The possibility to take part or be part of
                events and workshops
              </li>
              <li>
                Support in locating events, resources, and
                connections relevant to the fellows’
                research interests
              </li>
              <li>
                Support to create self-initiated public
                events or works
              </li>
              <li>
                Promotion and exhibition of the fellows’
                work both online and locally
              </li>
            </template>
          </ul>

          <h3>
            <template v-if="$i18n.locale === 'ja'">費用</template>
            <template v-else>Price</template>
          </h3>
          <div class="indent">
            <template v-if="$i18n.locale === 'ja'">
              <p>プライベートルーム + オフィススペース、滞在中最低1回のコミュニティスペースの利用</p>
              <p>
                <b>¥70,000 + ¥5,000（共用費）</b>
              </p>
              <div class="sub">※ 1ヶ月〜6ヶ月以外の滞在期間をご希望の方はご連絡ください。</div>
            </template>
            <template v-else>
              <p>Stay between 1–6 months</p>
              <p>Includes: private room + office use + minimum 1 day workshop / event / presentation</p>
              <p>
                <b>¥70,000 + ¥5,000 utility fee per month</b>
              </p>
              <div
                class="sub"
              >Please consult us if you want to stay less than 1 month / more than 6 months</div>
            </template>
          </div>

          <ApplyButton
            class="applybutton button"
            label="Apply for Residency"
            :reverse="true"
            target="https://docs.google.com/forms/d/e/1FAIpQLSfE7Pf0-G1MoVrvJR4YHYq1rXk8SGwUnXP8xW7Njhaq3Li7NA/viewform"
          />
        </div> -->

        <div class="event">
          <h2 v-if="$i18n.locale === 'ja'">
            イベント、ワークショップ、展示
          </h2>
          <h2 v-else>EVENT OR WORKSHOP</h2>
          <p class="indent">
            <template v-if="$i18n.locale === 'ja'"
              >Bridge to
              Kyotoは、「都市」をテーマにしたイベント、ワークショップ、展示などの企画を常時応募しています。イベントスペースの収容人数は10名〜15名と小規模ですが、京都での実験的なプロジェクトや地元の実践者との交流など、面白いアイデアの応募をお待ちしています。</template
            >
            <template v-else
              >You can organize an event, workshop, meetup,
              etc. at our place to introduce your practices
              or share your ideas! Instead of being a
              regular tourist, organize something engaging
              here to gain awareness of the local community
              and start building meaningful relationships
              with local practitioners. Our space is not
              big, but it can comfortably fit 10–15 people
              (depending on the event type), and we can help
              you promote your event and communicate with
              participants in Japanese.</template
            >
          </p>

          <h3>
            <template v-if="$i18n.locale === 'ja'"
              >詳細</template
            >
            <template v-else>Details</template>
          </h3>
          <p class="indent">
            <template v-if="$i18n.locale === 'ja'">
              建築、都市デザイン・プランニング、市民参加、コミュニティマネジメント、不動産、ジャーナリズムなどの活動や、都市や公共空間をテーマとしたアート活動を対象としています。企画運営、スタッフ、参加者管理、イベントページ作成や参加者募集は基本的に応募者の責任とさせて頂きます。金額や条件などは
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >メールにてご相談ください。</a
              >
            </template>
            <template v-else>
              Activities in the field of architecture, urban
              design and planning, citizen participation,
              community management, journalism, art that are
              related to the topic of urbanism. Applicants
              are responsible to organize and manage event
              logistics by themselves.
              <a
                href="mailto:bridgetoresidency@gmail.com"
                target="_blank"
                >Email us</a
              >
              for pricing and details.
            </template>
          </p>

          <h3>
            <template v-if="$i18n.locale === 'ja'"
              >こちらが提供するもの</template
            >
            <template v-else>What we provide</template>
          </h3>
          <ul>
            <template v-if="$i18n.locale === 'ja'">
              <li>イベントスペース</li>
              <li>プロジェクター</li>
              <li>スピーカー</li>
              <li>
                文房具やホワイトボードなど基本的なツール類の貸し出し
              </li>
              <li>イベント拡散のサポート</li>
              <li>
                海外の方も参加する場合、英語でのサポート
              </li>
            </template>
            <template v-else>
              <li>Event space</li>
              <li>
                Basic tools such as pens, whiteboard,
                speaker, projector
              </li>
              <li>
                Support in promoting your event (both in
                Japanese and English)
              </li>
              <li>Support in communication in Japanese</li>
            </template>
          </ul>

          <ApplyButton
            class="applybutton button"
            label="Apply for Event or Workshop"
            :reverse="true"
            target="https://docs.google.com/forms/d/e/1FAIpQLSe0iPDaULQMc6BfS4puRMV0rfJcdrViyUOg-jjcSzefF_ivwA/viewform"
          />
        </div>
      </div>
    </div>
  </PageSection>
</template>

<script>
import PageSection from '~/components/PageSection.vue'
import ApplyButton from '~/components/ApplyButton.vue'

export default {
  components: {
    PageSection,
    ApplyButton,
  },
}
</script>

<style lang="scss" scoped>
.section {
  --bg: var(--primaryd2);
  background: var(--primaryd2);
  color: white;
  padding-bottom: 10vh;
  overflow: hidden;
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 5vh;
    background: var(--primaryd2);
  }
}

// .bghalf {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   width: 50%;
//   height: 100%;
//   background: var(--primaryd3);

//   @media (max-width: 768px) {
//     display: none;
//   }
// }

.contentcolumn {
  position: relative;
  z-index: 2;
}

h1 {
  padding-top: 30px;
}

.columns {
  display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 100px;

  // @media (max-width: 768px) {
  grid-template-columns: 1fr;
  // }
}

.event {
  @media (max-width: 768px) {
    // background: var(--primaryd3);
    margin: -30px -50vw -15vh -50vw;
    padding: 30px 50vw 15vh 50vw;
  }
}

a {
  color: white;
}

p {
  margin: 1em 0;
}

li {
  line-height: 1.5;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
}

h3 {
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
}

.indent {
  margin-left: 1.5em;
}

.applybutton {
  margin-top: 40px;
}
</style>
