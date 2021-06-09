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
  width: 100%
  ._links
    padding: 0
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

@include media('<tablet')
  .navbar
    padding: 0
    padding-top: 2em
    padding-bottom: 1em
    width: 100%
    ._links
      display: flex
      justify-content: center
      align-items: center

@include media('>=tablet', '<=1024px')
  .navbar
    padding-top: 2em
    padding-bottom: 1em
    width: 100%
@include media('>=1024px', '<laptop')
  .navbar
    padding-top: 3em
    padding-bottom: 1em
    width: 100%

@include media('>=laptop', '<desktop')
  .navbar
    padding-top: 3em
    padding-bottom: 7em
    width: 100%

@include media('>=desktop')
  .navbar
    padding: 5em 0
    padding-right: 0
    width: 100%
</style>