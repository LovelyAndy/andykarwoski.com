<template>
  <div class="component-wrapper">
    <div class="pic-wrapper">
      <img src="/imgs/profile-pic.jpg" alt="Profile Picture" class="pic" />
      <div class="frame"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FromFujiPF',
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
@import '../../css/colors.sass'
img
  filter: saturate(0%)
  &:hover
    // cursor: pointer
    filter: saturate(100%)
    transition: all 500ms
.component-wrapper
  max-width: 21rem

.pic-wrapper
  position: relative

.pic
  position: relative
  z-index: 2
  max-width: 100%
  // max-width: 29rem
  // max-height: 44.5rem
.frame
  position: absolute
  background: $c-gold
  top: -3.5%
  bottom: 4.5%
  left: -5.5%
  right: 5.5%
  z-index: 1

// //phone viewport
// @include media('<=phone')
//   .dev-page-wrapper
//     background-color: #ff9b54
//   .img--profile
//     justify-self: center
//     align-self: center
//     margin: 0
//     max-width: 60%

// //large phone viewport
// @include media('>=phone', '<=425px', 'retina2x')
//   .dev-page-wrapper
//     background-color: #ae76a6
//   .img--profile
//     justify-self: center
//     align-self: center
//     margin: 0
//     max-width: 60%

// // greater than large phone and smaller than desktop viewport
// @include media('>=425', '<desktop')
</style>
