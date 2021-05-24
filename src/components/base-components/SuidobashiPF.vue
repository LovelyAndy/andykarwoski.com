_<template>
  <div class="_pic-wrapper">
    <img src="/imgs/suidobashi.jpg" alt="Suidobashi, Tokyo Photo" class="_pic" />
    <div class="_frame"></div>
  </div>
</template>

<script>
export default {
  name: 'SuidobashiPF',
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
  max-width: 29rem
  width: 100%
  position: relative

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
  top: 10%
  bottom: 4.5%
  left: -3.5%
  right: 5.5%
  z-index: 1
</style>
