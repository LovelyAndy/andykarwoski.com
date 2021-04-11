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
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.pic-wrapper
  position: relative
  max-width: 100%

.pic
  position: relative
  z-index: 2
  max-width: 43.4rem
  max-height: 28.9rem

.frame
  position: absolute
  background: $c-gold
  top: -4.5%
  bottom: 4.5%
  left: -5.5%
  right: 5.5%
  z-index: 1
</style>
