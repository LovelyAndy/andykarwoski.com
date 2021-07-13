_<template>
  <div class="_pic-wrapper frame-gold-bl">
    <img src="/imgs/suidobashi.jpg" alt="Suidobashi, Tokyo Photo" class="_pic" />
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
  position: relative
  max-width: 29rem
  width: 100%

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
</style>
