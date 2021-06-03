<template>
  <div class="pic-wrapper frame-gold-tl">
    <img src="/imgs/profile-pic.jpg" alt="Profile Picture" class="_pic" />
  </div>
</template>

<script>
export default {
  name: 'ProfilePicPF',
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
  max-width: 21.5rem

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
