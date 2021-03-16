<template>
  <div class="component-wrapper">
    <div class="profile-pic-wrapper">
      <img src="/imgs/profile-pic.jpg" alt="profile picture" class="profile-pic" />
      <div class="frame"></div>
    </div>
    <div class="title-els">
      <div class="title-els_name">
        <div class="t-main-title andy">Andy</div>
        <div class="t-main-title karwoski">Karwoski</div>
      </div>
      <div class="title-els_sub">
        <span class="t-section-title frontend">frontend web developer</span>
        <span class="t-section-title line"> / </span>
        <span class="t-section-title designer">designer</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleAndProfilePic',
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

.profile-pic-wrapper
  position: relative
  max-width: 100%
  height: 100%

.profile-pic
  position: relative
  z-index: 2
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
.title-els
  position: relative
  display: flex
  flex-direction: column
.title-els_name
  text-align: left
  z-index: 3

.andy
  position: absolute
  bottom: 13.5rem
  left: 27.5rem
  color: $c-red
.karwoski
  position: absolute
  bottom: 6.6rem
  left: 30.8rem
  color: $c-blue
.title-els_sub
  position: relative
  bottom: 4rem
  left: 32.5rem

.frontend
  color: $c-blue
.line
  color: $c-gold
.designer
  color: $c-red
</style>
