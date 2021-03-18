<template>
  <div class="profile-pic-pf">
    <div class="pic-wrapper">
      <img src="/imgs/profile-pic.jpg" alt="Profile Picture" class="pic" />
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
.profile-pic-pf
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
  max-width: 29rem
  max-height: 44.5rem
.frame
  position: absolute
  background: $c-gold
  top: -1.25rem
  bottom: 1.25rem
  left: -1.25rem
  right: 1.25rem
  z-index: 1
</style>
