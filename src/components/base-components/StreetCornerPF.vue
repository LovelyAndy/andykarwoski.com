<template>
  <div class="pic-wrapper frame-gold-br">
    <img src="/imgs/street-corner.jpg" alt="Street Corner in Setagaya, Tokyo" class="_pic" />
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

.pic-wrapper
  position: relative
  width: 100%
  max-width: 30.4rem

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
</style>
