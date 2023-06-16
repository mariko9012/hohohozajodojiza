<template>
  <nav>
    <div class="navelement" :class="{active: activeMenuItem === 'intro'}">
      <Logo />
      <div>
        Bridge To
        <i>Kyoto</i>
      </div>
    </div>
    <div class="navelement" :class="{active: activeMenuItem === 'about'}">About</div>
    <div class="navelement" :class="{active: activeMenuItem === 'space'}">Our Space</div>
    <div class="navelement" :class="{active: activeMenuItem === 'stories'}">Stories</div>
    <div class="navelement" :class="{active: activeMenuItem === 'location'}">Location</div>
    <div class="navelement" :class="{active: activeMenuItem === 'availability'}">Availability</div>
    <div class="navelement" :class="{active: activeMenuItem === 'apply'}">Apply</div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      observer: null,
      instersectionThreshold: 0.4,
      activeMenuItem: 'intro',
    }
  },

  components: { Logo },

  mounted() {
    let toObserve = document.querySelectorAll('.content section')
    this.observer = new IntersectionObserver(this.intersectEvent, {
      threshold: this.instersectionThreshold,
    })
    toObserve.forEach(el => this.observer.observe(el))
  },

  beforeDestroy() {
    this.observer.disconnect()
    this.observer = null
  },

  methods: {
    intersectEvent(entries, observer) {
      entries.forEach(entry => {
        console.log(entry.intersectionRatio, entry.target, entry.time)
        if (entry.intersectionRatio > this.instersectionThreshold)
          this.activeMenuItem = entry.target.getAttribute('label')
      })
    },
  },
}
</script>

<style lang="sass" scoped>
nav
	height: 100%
	position: fixed
	width: var(--nav-width)
	padding: 0 var(--p3)
	display: flex
	flex-direction: column
	align-items: space-around
	justify-content: center

$scale-multiplier: 4
.navelement
	transform: scale(1 / $scale-multiplier)
	transform-origin: center left;
	white-space: nowrap
	transition: all ease-in-out .5s
	font-size: $scale-multiplier * 1em
	line-height: 1em
	margin: ((1 / $scale-multiplier) * -1) * 1em 0

.active
	transition: all ease-in-out .2s
	margin: 0
	transform: scale(1)

</style>
