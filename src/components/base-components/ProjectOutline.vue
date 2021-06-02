<template>
  <div class="project-wrapper" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="_content-main">
      <div
        v-if="titleSmall"
        :class="[`_title-${titleLocation}`, 't-project-title', '_title-small']"
      >
        {{ title }}
      </div>
      <div v-else :class="[`_title-${titleLocation}`, 't-project-title', '_title']">
        {{ title }}
      </div>
      <div class="_project">
        <slot />
      </div>
    </div>
    <div v-if="hover" :class="{ _overlay: hover }">
      <div class="_project-details">
        <slot name="details"></slot>
      </div>
    </div>
    <div :class="[`_frame-${frameLocation}`, `_frame-${frameColor}`]"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectOutline',
  props: {
    title: { type: String },
    titleLocation: { type: String, default: 'top' },
    frameColor: { type: String, default: 'red' },
    frameLocation: { type: String, default: 'top-left' },
    titleSmall: { type: Boolean, default: false },
  },
  data() {
    return {
      hover: false,
    }
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
@import '../../css/colors.sass'
@import '../../css/breakpoints.scss'
.project-wrapper
  display: inline-block
  position: relative
  cursor: pointer
._content-main
  position: relative
  width: 27.6rem
  height: 27.6rem
  background-color: $c-grey
  z-index: 2
  ._title
    position: absolute
    background-color: $c-black
    color: $c-bg-white
    padding: .75em
    overflow: hidden
  ._title-small
    position: absolute
    background-color: $c-black
    color: $c-bg-white
    font-size: 1.8rem
    padding: 1em
    overflow: hidden
  ._title-top
    top: 0
    left: 0
    right: 0
    text-align: left
  ._title-bottom
    left: 0
    right: 0
    bottom: 0
    text-align: right
  ._title-left
    top: 0
    left: 2.65em
    width: 100%
    text-align: left
    transform-origin: 0 0
    transform: rotate(90deg)
    text-transform: rotate(90deg)
    // This needs to be fixed ^^^
  ._title-right
    top: 0
    right: -100%
    width: 100%
    text-align: left
    transform-origin: 0 0
    transform: rotate(90deg)
    text-transform: rotate(90deg)

// ._content-main
//   &:hover
//     ._overlay
//       opacity: 1
._project
  padding: 4em 2em
._overlay
  position: absolute
  top: 0
  left: 0
  width: 27.6rem
  height: 27.6rem
  opacity: 1
  background: rgba(51, 51, 51, .95)
  color: $c-bg-white
  z-index: 3
._project-details
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-around

._frame-red
  background: $c-red
._frame-blue
  background: $c-blue
._frame-gold
  background: $c-gold

._frame-top-left
  position: absolute
  width: 27.6rem
  height: 27.6rem
  top: -1.25em
  left: -1.25em
  z-index: 1
._frame-top-right
  position: absolute
  width: 27.6rem
  height: 27.6rem
  top: -1.25em
  left: 1.25em
  z-index: -1
._frame-bottom-left
  position: absolute
  width: 27.6rem
  height: 27.6rem
  bottom: -1.25em
  left: -1.25em
  z-index: -1
._frame-bottom-right
  position: absolute
  width: 27.6rem
  height: 27.6rem
  bottom: -1.25em
  left: 1.25em
  z-index: -1
</style>