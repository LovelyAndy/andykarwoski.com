<template>
  <div class="component-wrapper">
    <div class="_pic-wrapper">
      <img src="/imgs/street-corner.jpg" alt="Street Corner in Setagaya, Tokyo" class="_pic" />
      <div class="_frame"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StreetCornerPF',
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

.component-wrapper
  max-width: 30.4rem

._pic-wrapper
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
  top: -5.5%
  bottom: 4.5%
  left: -4%
  right: 5.5%
  z-index: 1
</style>
