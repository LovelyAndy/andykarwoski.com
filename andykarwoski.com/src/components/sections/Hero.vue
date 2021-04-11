<template>
  <div class="hero">
    <BaseLinks class="sns-links" />
    <ProfilePicPF class="profile-pic" />
    <img
      src="svgs/main-sub-title.svg"
      alt="Andy Karwoski Frontend Web Dev / Designer"
      class="main-title"
    />
  </div>
</template>

<script>
import BaseLinks from '../base-components/BaseLinks.vue'
import ProfilePicPF from '../base-components/ProfilePicPF.vue'
export default {
  components: { ProfilePicPF, BaseLinks },
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
@import '../../css/breakpoints.scss'

.hero
  display: flex
  justify-content: center

.main-title
  margin-left: -2rem
  width: clamp(26rem, 50vw, 78rem)
  z-index: 2

// .profile-pic
//   width: clamp(18rem, 20vw, 21rem)

.sns-links

@include media('<=phone')
  .hero
    display: flex
    flex-direction: column-reverse
    justify-content: space-around
    align-items: center
    height: 70vh
    // border: 2px solid #ff9b85

@include media('>=phone', '<=465px', 'retina2x')
  .hero
    display: flex
    flex-direction: column-reverse
    justify-content: space-around
    align-items: center
    height: 70vh
    // border: 2px solid #ae72a9

@include media('>=465px', '<tablet')
  .hero
    // border: 2px solid goldenrod
@include media('>=tablet', '<desktop')
  .hero
    // border: 2px solid #a3c3d9

@include media('>=desktop')
  .hero
    // border: 2px solid green
// .title-els
//   display: flex
//   flex-direction: column
//   justify-content: center
//   align-items: center
//   margin-top: 8rem
// .title-els__main
//   text-align: left
//   z-index: 3
//   .andy
//     display: block
//     color: $c-red
//   .karwoski
//     display: block
//     margin-top: -6.25rem
//     margin-left: 5.25rem
//     color: $c-blue
// .title-els_sub
//   text-align: center
//   margin-top: -1.5rem
//   margin-left: 3.5rem
//   .designer
//     color: $c-red
//   .frontend
//     color: $c-blue

// .line
//   color: $c-gold
</style>
