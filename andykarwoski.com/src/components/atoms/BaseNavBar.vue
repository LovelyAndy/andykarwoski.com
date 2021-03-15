<template>
  <div class="nav-bar-container">
    <div class="about">about</div>
    <div class="portfolio">portfolio</div>
    <div class="contact">contact</div>
  </div>
</template>

<script>
export default {
  name: 'BaseNavBar',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
@import '../../css/colors.sass'
.nav-bar-container
  display: flex
  justify-content: flex-start
  align-items: center
  width: 100%

.about
  color: $c-blue
  padding-right: 3.5rem
.portfolio
  color: $c-red
  padding-right: 3.5rem
.contact
  color: $c-gold
</style>