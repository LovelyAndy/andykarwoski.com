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

._main-title
  padding: 0em 2.8em
  max-width: 85em
  width: 100%
  z-index: 10

._profile-pic
  transform: scale(.9)

._sns-links
  padding: 0

@include media('<tablet')
  .hero
    display: flex
    flex-direction: column
    align-items: center
    margin-bottom: 4em
    ._main-title
      left: 10em
      min-width: 35em
  ._profile-pic
    transform: scale(.8)
  ._fuji
    display: none
  ._street
    display: none
  ._suidobashi
    display: none

@include media('>=tablet', '<=1024px')
  .hero
    position: relative
    min-height: 55vh
    margin-bottom: 8em
    ._main-title
      position: absolute
      left: 10em
      max-width: 60em
    ._sns-links
      bottom: 7em
      left: 27em
    ._profile-pic
      top: 5em
      left: -4em
    ._fuji
      bottom: -8em
      left: -4em
    ._street
      top: 2em
      right: 1em
    ._suidobashi
      bottom: -12em
      right: -1em
    ._sns-links,
    ._profile-pic,
    ._fuji,
    ._street,
    ._suidobashi
      position: absolute
      transform: scale(.8)

@include media('>1024px', '<laptop')
  .hero
    position: relative
    height: 55vh
    margin-bottom: 12em
    ._main-title
      position: absolute
      max-width: 65em
    ._sns-links
      bottom: 6em
    ._profile-pic
      top: 4em
      left: 1em
    ._fuji
      bottom: -12em
      left: 2em
    ._street
      top: 4em
      right: 6em
    ._suidobashi
      bottom: -15em
      right: 3em
    ._sns-links,
    ._profile-pic,
    ._fuji,
    ._street,
    ._suidobashi
      position: absolute
      transform: scale(.9)

@include media('>=laptop', '<desktop')
  .hero
    position: relative
    min-height: 50vh
    margin-bottom: 22em
    ._main-title
      position: absolute
      max-width: 80em
    ._sns-links
      bottom: 0em
    ._profile-pic
      top: 3em
      left: 3em
    ._fuji
      bottom: -18em
      left: 5em
    ._street
      top: -1em
      right: 5em
      z-index: 12
    ._suidobashi
      bottom: -23em
      right: 8em
    ._sns-links,
    ._profile-pic,
    ._fuji,
    ._street,
    ._suidobashi
      position: absolute
      transform: scale(1.1)
@include media('>=desktop')
  .hero
    position: relative
    min-height: 50vh
    margin-bottom: 20em
    ._main-title
      position: absolute
      max-width: 85em
    ._sns-links
      bottom: 0em
    ._profile-pic
      top: 3em
      left: 0em
    ._fuji
      bottom: -18em
      left: 5em
    ._street
      top: 0em
      right: 5em
      z-index: 12
    ._suidobashi
      bottom: -23em
      right: 8em
    ._sns-links,
    ._profile-pic,
    ._fuji,
    ._street,
    ._suidobashi
      position: absolute
      transform: scale(1.2)
</style>
