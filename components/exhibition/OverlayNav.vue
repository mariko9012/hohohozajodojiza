<template>
  <div class="overlaynav">
    <div>
      <div
        v-if="prevPaneIndex !== null"
        class="left navbutton"
        @click="$emit('prev')"
      >
        ←
      </div>
    </div>
    <div>
      <div
        v-if="nextPaneIndex !== null"
        class="right navbutton"
        @click="$emit('next')"
      >
        →
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { prevPaneIndex: {}, nextPaneIndex: {} },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.overlaynav {
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    display: inline-block;
    pointer-events: auto;
  }
}

.navbutton {
  cursor: pointer;
  padding: 1vh;
  background: white;
  transition: all 0.3s;
  position: relative;

  &:hover {
    box-shadow: 0 0.5vh 2vh rgba(0, 0, 0, 0.4);
  }
}

.left {
  padding-left: 3vh;
  left: -2vh;
  transition: left 0.3s;

  &:hover {
    left: 0vh;
  }
}
.right {
  padding-right: 3vh;
  right: -2vh;

  &:hover {
    right: 0vh;
  }
}
</style>
