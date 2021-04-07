<template>
  <div class="dev-page-wrapper">
    <!-- <Gallery /> -->
    <!-- <About /> -->
    <!-- <BaseLinks />
    <br />
    <br />
    <br />-->
    <!-- <ProfilePicPF />
    <br />
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
  justify-content: center
  align-items: center
  height: 100vh
  @include media('<=phone')
    background-color: #ff9b54
    &:before
      content: 'phone viewport'

  @include media('>=phone', '<=425px', 'retina2x')
    background-color: #ae76a6
    &:before
      content: 'large phone viewport'

  @include media('>=tablet', '<desktop')
    background-color: #a3c3d9
    &:before
      content: 'greater than tab and smaller than desktop viewport'
</style>