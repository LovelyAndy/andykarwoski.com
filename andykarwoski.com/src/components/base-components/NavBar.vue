<template>
  <nav>
    <ul class="links">
      <li class="links__link t-navbar"><a class="red" href="#">About</a></li>
      <li class="links__link t-navbar"><a class="blue" href="#">Portfolio</a></li>
      <li class="links__link t-navbar"><a class="gold" href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
  data() {
    return {}
    // return {
    //   navLinks: [
    //     {
    //       path: '/about',
    //       name: 'about',
    //       component: About,
    //     },
    //     {
    //       path: '/portfolio',
    //       name: 'Portfolio',
    //       component: Portfolio,
    //     },
    //     {
    //       path: '/contact',
    //       name: 'Contact',
    //       component: Contact,
    //     },
    //   ],
    // }
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
    margin: 0 2em
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