<template>
  <div class="component-wrapper">
    <div class="_pic-wrapper">
      <img src="/imgs/profile-pic.jpg" alt="Profile Picture" class="_pic" />
      <div class="_frame"></div>
    </div>
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

.component-wrapper

._pic-wrapper
  width: 100%
  max-width: 21.5rem
  position: relative

._pic
  position: relative
  z-index: 2
  width: 100%
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
  top: -3.5%
  bottom: 4.5%
  left: -5.5%
  right: 5.5%
  z-index: 1
</style>
