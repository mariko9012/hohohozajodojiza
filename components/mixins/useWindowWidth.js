export default {
  data() {
    return {
      windowWidth: 0,
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 800
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
    this.updateWindowWidth()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    updateWindowWidth(e) {
      this.windowWidth = window.innerWidth
    },
  },
}
