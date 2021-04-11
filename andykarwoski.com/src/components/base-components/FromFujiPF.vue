<template>
  <div class="component-wrapper">
    <div class="pic-wrapper">
      <img src="/imgs/from-fuji.jpg" alt="Photo from Mt. Fuji" class="pic" />
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
  height: 100%

.pic
  position: relative
  z-index: 2
  max-width: 47.6rem
  max-height: 29.7rem

.frame
  position: absolute
  background: $c-gold
  top: -5.5%
  bottom: 5.5%
  left: 4.5%
  right: -4.5%
  z-index: 1
</style>
