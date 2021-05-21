<template>
  <div class="component-wrapper">
    <div class="_pic-wrapper">
      <img src="/imgs/from-fuji.jpg" alt="Photo from Mt. Fuji" class="_pic" />
      <div class="_frame"></div>
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

.component-wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

._pic-wrapper
  position: relative
  max-width: 100%
  height: 100%
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

.__frame
  position: absolute
  background: $c-gold
  top: -5.5%
  bottom: 5.5%
  left: 4.5%
  right: -4.5%
  z-index: 1
</style>
