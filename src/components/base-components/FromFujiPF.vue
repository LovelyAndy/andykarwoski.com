<template>
  <div class="_pic-wrapper frame-gold-tr">
    <img src="/imgs/from-fuji.jpg" alt="Photo from Mt. Fuji" class="_pic" />
    <!-- <div class="_frame"></div> -->
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

._pic-wrapper
  position: relative
  width: 100%
  max-width: 30.4rem
  ._pic
    position: relative
    z-index: 2
    max-width: 100%
    filter: saturate(0%)
    cursor: pointer
    box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25)
    &:hover
      filter: saturate(100%)
      transition: all ease-in-out 500ms
    &:not(:hover)
      filter: saturate(0%)
      transition: all ease-in-out 500ms

// ._frame
//   position: absolute
//   background: $c-gold
//   top: -5.5%
//   bottom: 5.5%
//   left: 4%
//   right: -3.5%
//   z-index: 1
//   box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25)
</style>
