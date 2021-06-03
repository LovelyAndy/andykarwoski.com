<template>
  <div class="section-outer">
    <div class="col center section-inner hero">
      <img
        src="svgs/main-sub-title.svg"
        alt="Andy Karwoski Frontend Web Dev / Designer"
        class="_main-title"
      />
      <FromFujiPF class="_fuji" />
      <SuidobashiPF class="_suidobashi" />
      <StreetCornerPF class="_street" />
      <ProfilePicPF class="_profile-pic" />
      <BaseLinks class="_sns-links" />
    </div>
  </div>
</template>

<script>
import BaseLinks from '../base-components/BaseLinks.vue'
import FromFujiPF from '../base-components/FromFujiPF.vue'
import ProfilePicPF from '../base-components/ProfilePicPF.vue'
import StreetCornerPF from '../base-components/StreetCornerPF.vue'
import SuidobashiPF from '../base-components/SuidobashiPF.vue'
export default {
  components: { ProfilePicPF, BaseLinks, StreetCornerPF, FromFujiPF, SuidobashiPF },
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
  max-width: 120em

._main-title
  padding: 0em 2.8em
  max-width: 85em
  width: 100%
  z-index: 10

._profile-pic
  transform: scale(.9)

._sns-links
  padding: 0

@include media('<=phone')
  .hero
    display: flex
    flex-direction: column
    align-items: center
    //border: 2px solid #ff9b85

// @include media('>=phone', '<=425px', 'retina2x')

@include media('<tablet')
  ._fuji
    display: none
  ._street
    display: none
  ._suidobashi
    display: none

@include media('>=tablet', '<laptop')
  .hero
    position: relative
    height: 55vh
    margin-bottom: 10em
    ._main-title
      position: absolute
      max-width: 70em
    ._sns-links
      bottom: 6em
    ._profile-pic
      top: 1em
      left: -5em
    ._fuji
      bottom: -10em
      left: 1em
    ._street
      top: 4em
      right: 4em
    ._suidobashi
      bottom: -19em
      right: 3em
    ._sns-links,
    ._profile-pic,
    ._fuji,
    ._street,
    ._suidobashi
      position: absolute
      transform: scale(.8)

@include media('>=laptop')
  .hero
    position: relative
    min-height: 60vh
    margin-bottom: 16em
    ._main-title
      position: absolute
    ._sns-links
      position: absolute
      bottom: 4em
    ._profile-pic
      position: absolute
      top: 3em
      left: 1.5em
    ._fuji
      position: absolute
      bottom: -12em
      left: 5em
    ._street
      position: absolute
      top: 4em
      right: 8em
      z-index: 12
    ._suidobashi
      position: absolute
      bottom: -19em
      right: 12em
</style>
