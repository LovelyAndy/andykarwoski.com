<template>
  <div class="component-wrapper">
    <div class="pic-wrapper">
      <img src="/imgs/suidobashi.jpg" alt="Suidobashi, Tokyo Photo" class="pic" />
      <div class="frame"></div>
    </div>
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
img
  filter: saturate(0%)
  &:hover
    // cursor: pointer
    filter: saturate(100%)
    transition: all 500ms
.component-wrapper

.pic-wrapper
  position: relative
  max-width: 29rem

.pic
  position: relative
  z-index: 2
  max-width: 100%
  // max-width: 38rem
  // max-height: 34.2rem

.frame
  position: absolute
  background: $c-gold
  top: 4.5%
  bottom: -4.5%
  left: -5.5%
  right: 5.5%
  z-index: 1
</style>
