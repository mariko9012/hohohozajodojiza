<template>
  <PageSection class="section" id="contact">
    <div
      v-lazy:background-image="
        '/assets/img/2023/7.jpg'
      "
      class="interstitial"
    >
      <div class="overlay"></div>
    </div>

    <div class="contentcolumn">
      <h1>Contact Us</h1>
      <template v-if="$i18n.locale === 'ja'">
        <div class="p">
          <div>ご質問やご相談は、</div>
          <a
            class="button"
            href="mailto:bridgetoresidency@gmail.com"
            target="_blank"
          >
            <div>メールをください。</div>
          </a>
        </div>
        <div>
          We are here:
          <blockquote>
            28-3 Jodoji Banbacho, Sakyo-ku, Kyoto, 606-8412
            <br />〒606-8412 京都市左京区浄土寺馬場町28-3
          </blockquote>
        </div>
      </template>
      <template v-else>
        <div class="p">
          <div>Still have questions?</div>
          <a
            class="button"
            href="mailto:bridgetoresidency@gmail.com"
            target="_blank"
          >
            <div>Email us!</div>
          </a>
        </div>
        <div>
          We are located at:
          <blockquote>
            28-3 Jōdoji Banbachō, Sakyō-ku, Kyoto, 606-8412
            <br />〒606-8412 京都市左京区浄土寺馬場町28-3
          </blockquote>
        </div>
      </template>
      <iframe
        width="600"
        height="450"
        frameborder="0"
        style="border:0"
        src="https://www.google.com/maps/embed/v1/place?q=606-8412%20%E4%BA%AC%E9%83%BD%E5%B8%82%E5%B7%A6%E4%BA%AC%E5%8C%BA%E6%B5%84%E5%9C%9F%E5%AF%BA%E9%A6%AC%E5%A0%B4%E7%94%BA28-3&key=AIzaSyCHF6DdpDLIG-1Ak4p0XyIK2Bc6DbVmgLY"
        allowfullscreen
      ></iframe>
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
  --bg: #333;
  background: #333;
  color: white;
  padding-bottom: 30vh;
  padding-top: 0;
}

h1 {
  margin-bottom: 0.8em;
}

.p {
  display: block;
  margin-bottom: 6em;

  & > *:first-child {
    margin-bottom: 5px;
  }
}

.button {
  max-width: 500px;
}

.sub {
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.4;
}

blockquote {
  max-width: 500px;
  text-align: center;
  margin: 5px 0 10px 0;
  padding: 20px 30px;
  background: rgba(black, 0.05);
  border: 1px solid rgba(black, 0.1);
}

iframe {
  width: 100%;
}
</style>
