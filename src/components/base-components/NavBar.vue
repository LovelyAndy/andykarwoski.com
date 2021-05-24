<template>
  <nav id="home" class="section-outer navbar">
    <div class="section-inner">
      <ul class="_links">
        <li class="_links__link t-navbar">
          <a class="red _link" href="#" v-scroll-to="'#about'">About</a>
        </li>
        <li class="_links__link t-navbar">
          <a class="blue _link" href="#" v-scroll-to="'#portfolio'">Portfolio</a>
        </li>
        <li class="_links__link t-navbar">
          <a class="gold _link" href="#" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
    </div>
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
.navbar
  padding: 1em 0
  padding-right: 12vw
  width: 100%
  ._links
    display: flex
    justify-content: flex-end
    align-items: flex-end
    width: 100%
    &__link
      font-weight: 600
      list-style: none
    ._link
      text-decoration: none
      &.red
        color: $c-red
      &.blue
        color: $c-blue
      &.gold
        color: $c-gold
._links__link
  &+ ._links__link
    margin-left: 1em
ul
  padding: 0

@include media('<tablet')
  .navbar
    padding: 0
    width: 100%
    ._links
      display: flex
      justify-content: center
      align-items: center
      margin-right: 10em

// @include media ('>=tablet')
</style>