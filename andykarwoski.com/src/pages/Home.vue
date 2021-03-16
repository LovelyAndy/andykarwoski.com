<template>
  <div class="home">
    <BaseNavBar class="nav-bar" />
    <div class="profile-pic-wrapper">
      <img src="/imgs/profile-pic.jpg" alt="profile picture" class="profile-pic" />
      <div class="frame"></div>
    </div>
  </div>
</template>

<script>
import BaseNavBar from '../components/atoms/BaseNavBar.vue'

export default {
  name: 'Home',
  components: { BaseNavBar },
}
</script>
<style lang="sass" scoped>
@import '../css/colors.sass'
img
  filter: saturate(0%)
  &:hover
    // cursor: pointer
    filter: saturate(100%)
    transition: all 500ms
.home
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.nav-bar
  border: 2px solid red

.profile-pic-wrapper
  position: relative
  max-width: 100%
  height: 100%
  // box-shadow: -10px 10px 0 0 $c-gold

.profile-pic
  position: relative
  z-index: 2
  width: 100%
  height: 100%
  max-width: 290px
  max-height: 445px

.frame
  position: absolute
  background: $c-gold
  top: -1.25rem
  bottom: 1.25rem
  left: -1.25rem
  right: 1.25rem
  z-index: 1
</style>