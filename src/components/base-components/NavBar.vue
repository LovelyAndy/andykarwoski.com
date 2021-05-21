<template>
  <nav>
    <ul class="links">
      <li class="links__link t-navbar"><a class="red" href="#" v-scroll-to="'#about'">About</a></li>
      <li class="links__link t-navbar">
        <a class="blue" href="#" v-scroll-to="'#portfolio'">Portfolio</a>
      </li>
      <li class="links__link t-navbar">
        <a class="gold" href="#" v-scroll-to="'#contact'">Contact</a>
      </li>
    </ul>
  </nav>
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
@import '../../css/breakpoints.scss'
nav
  display: flex
  justify-content: flex-end
  padding: 1em 0
  width: 100%
  height: auto
  .links
    display: flex
    justify-content: flex-end
    align-items: flex-end
    width: 100%
    margin: 0 1.5em
    &__link
      font-weight: 600
      list-style: none
    a
      text-decoration: none
      &.red
        color: $c-red
      &.blue
        color: $c-blue
      &.gold
        color: $c-gold
.links__link
  &+ .links__link
    margin-left: 1em

@include media ('<tablet')
  nav
    padding-right: 1em
</style>