<template>
  <div class="_pic-wrapper">
    <img src="/imgs/profile-pic.jpg" alt="Profile Picture" class="_pic" />
    <div class="_frame"></div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePicPF',
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

._pic-wrapper
  position: relative
  width: 100%
  max-width: 21.5rem

  ._pic
    position: relative
    z-index: 2
    max-width: 100%
    filter: saturate(0%)
    cursor: pointer
    &:hover
      filter: saturate(100%)
      transition: all ease-in-out 500ms
    &:not(:hover)
      filter: saturate(0%)
      transition: all ease-in-out 500ms

  ._frame
    position: absolute
    background: $c-gold
    width: 100%
    top: .75em
    bottom: 3.5em
    left: -1.25em
    right: 1.25em
    z-index: 1
</style>
