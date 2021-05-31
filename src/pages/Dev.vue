<template>
  <div class="dev-page-wrapper">
    <ProjectOutline
      title="My Dad's Shit"
      titleLocation="bottom"
      frameColor="red"
      frameLocation="top-left"
    >
      <img src="../../public/svgs/mds-phones.svg" alt="" />
      <template v-slot:details> <p>something something something</p> </template>
    </ProjectOutline>
    <!-- <NavBar /> -->
    <!-- <Gallery /> -->
    <!-- <About /> -->
    <!-- <BaseLinks />-->
    <!-- <Hero /> -->
    <!-- <ProfilePicPF class="img--profile" /> -->
    <!-- <br />
    <br />
    <br />
    <SuidobashiPF />
    <br />
    <br />
    <br />
    <StreetCornerPF />
    <br />
    <br />
    <br />
    <FromFujiPF /> -->
  </div>
</template>

<script>
import SectionTitle from '../components/base-components/SectionTitle.vue'
import ProfilePicPF from '../components/base-components/ProfilePicPF.vue'
import StreetCornerPF from '../components/base-components/StreetCornerPF.vue'
import SuidobashiPF from '../components/base-components/SuidobashiPF.vue'
import FromFujiPF from '../components/base-components/FromFujiPF.vue'
import BaseLinks from '../components/base-components/BaseLinks.vue'
import About from '../components/sections/About.vue'
import Gallery from '../components/sections/Gallery.vue'
import NavBar from '../components/base-components/NavBar.vue'
import Hero from '../components/sections/Hero.vue'
import ProjectOutline from '../components/base-components/ProjectOutline.vue'

export default {
  name: 'DevPage',
  components: {
    SectionTitle,
    ProfilePicPF,
    SuidobashiPF,
    StreetCornerPF,
    FromFujiPF,
    BaseLinks,
    About,
    Gallery,
    NavBar,
    Hero,
    ProjectOutline,
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
@import '../css/colors.sass'
@import '../css/breakpoints.scss'

.dev-page-wrapper
  display: flex
  flex-direction: column
  justify-content: flex-end
  padding: 5rem 5em
  // align-items: center
  // width: 100vw
  // height: 100vh
p
  font-size: 4em
  color: white

// .img--profile
//   margin-left: 5em
//   max-width: 60%

@include media('<=phone')
  .dev-page-wrapper
    background-color: #ff9b54
  // .img--profile
  //   justify-self: center
  //   align-self: center
  //   margin: 0
  //   max-width: 60%
  // &:before
  //   content: 'phone viewport'

@include media('>=phone', '<=425px', 'retina2x')
  .dev-page-wrapper
    background-color: #ae76a6
  // .img--profile
  //   justify-self: center
  //   align-self: center
  //   margin: 0
  //   max-width: 60%
  // &:before
  //   content: 'large phone viewport'

@include media('>=tablet', '<laptop')
  .dev-page-wrapper
    background-color: #a3c3d9
  // &:before
  //   content: 'greater than tab and smaller than laptop viewport'
</style>