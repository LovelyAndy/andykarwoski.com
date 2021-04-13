<template>
  <div class="component-wrapper">
    <div class="pic-wrapper">
      <img src="/imgs/street-corner.jpg" alt="Street Corner in Setagaya, Tokyo" class="pic" />
      <div class="frame"></div>
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
img
  filter: saturate(0%)
  &:hover
    // cursor: pointer
    filter: saturate(100%)
    transition: all 500ms
.component-wrapper
  max-width: 30.4rem

.pic-wrapper
  position: relative

.pic
  position: relative
  z-index: 2
  max-width: 100%
  // max-width: 43.4rem
  // max-height: 28.9rem

.frame
  position: absolute
  background: $c-gold
  top: -5.5%
  bottom: 4.5%
  left: -4%
  right: 5.5%
  z-index: 1
</style>
