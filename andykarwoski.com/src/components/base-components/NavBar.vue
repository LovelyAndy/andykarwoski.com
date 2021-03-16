<template>
  <div class="nav-bar-container">
    <div class="t-navbar about">about</div>
    <div class="t-navbar portfolio">portfolio</div>
    <div class="t-navbar contact">contact</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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