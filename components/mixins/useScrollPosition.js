export default {
  data() {
    return {
      windowScroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll(e) {
      this.windowScroll = window.scrollY
    },
  },
}
