<template>
  <div class="section-outer hero">
    <div class="col center section-inner">
      <img
        src="svgs/main-sub-title.svg"
        alt="Andy Karwoski Frontend Web Dev / Designer"
        class="_main-title"
      />
      <ProfilePicPF class="_profile-pic" />
      <BaseLinks class="_sns-links" />
    </div>
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
  padding: 0
  padding-top: 2em

._main-title
  padding: 0em 2.8em
  max-width: 76rem
  width: 100%
  // width: clamp(26rem, 50vw, 78rem)
  z-index: 2

._profile-pic
  padding: 2em 0
//   width: clamp(18rem, 20vw, 21rem)

._sns-links
  padding: 0

@include media('<=phone')
  .hero
    display: flex
    flex-direction: column-reverse
    justify-content: space-around
    align-items: center
    //border: 2px solid #ff9b85

// @include media('>=phone', '<=425px', 'retina2x')

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')

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
