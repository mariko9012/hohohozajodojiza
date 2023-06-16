export const useMousePosition = {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.update)
  },
  methods: {
    update(e) {
      this.mouseX = e.clientX || e.offsetX || e.pageX || e.x
      this.mouseY = e.clientY || e.offsetY || e.pageY || e.y
    },
  },
}
