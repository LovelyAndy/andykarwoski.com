<template>
  <div class="hero">
    <ProfilePicPF class="profile-pic" />
    <img
      src="svgs/main-sub-title.svg"
      alt="Andy Karwoski Frontend Web Dev / Designer"
      class="main-title"
    />
  </div>
</template>

<script>
import ProfilePicPF from '../base-components/ProfilePicPF.vue'
export default {
  components: { ProfilePicPF },
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
.hero
  display: flex
  justify-content: center

.main-title
  margin-left: -2rem
  width: clamp(26rem, 50vw, 78rem)
  z-index: 2

.profile-pic
  width: clamp(18rem, 20vw, 21rem)

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
