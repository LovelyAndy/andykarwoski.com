<template>
  <div class="project-wrapper" @mouseover="show = true" @mouseleave="show = false">
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
    <!-- try a transition here -->
    <!-- separate transitions to both the bg and content. bg is fade in and content is move up or down or whatever -->
    <transition>
      <div v-if="show" class="_overlay-bg"></div>
    </transition>
    <transition>
      <div v-if="show" class="_overlay-content">
        <div class="_project-details">
          <slot name="details"></slot>
        </div>
      </div>
    </transition>
    <div :class="[`_framing-${frameLocation}`, `_framing-${frameColor}`]"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectOutline',
  props: {
    title: { type: String },
    // add all options to these props
    /** options: 'bottom', 'top', 'left', 'right'   */
    titleLocation: { type: String, default: 'top' },
    /** options: 'red', 'blue', 'gold'   */
    frameColor: { type: String, default: 'red' },
    /** options: 'bottom-left', 'top-left', 'bottom-right', 'top-right'   */
    frameLocation: { type: String, default: 'top-left' },
    titleSmall: { type: Boolean, default: false },
  },
  data() {
    return {
      show: false,
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
    left: 0
    width: 100%
    text-align: left
    transform-origin: 0 0
    transform: rotate(-90deg) translateX(-100%)
    text-transform: rotate(-90deg)
  ._title-right
    top: 0
    right: -100%
    width: 100%
    text-align: left
    transform-origin: 0 0
    transform: rotate(90deg)
    text-transform: rotate(90deg)

._project
  padding: 4em 2em
._overlay-bg,
._overlay-content
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
._overlay-bg
  z-index: 3
  background: rgba(51, 51, 51, .95)
._overlay-content
  z-index: 4
  color: $c-bg-white
._project-details
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-around

._framing-red
  background: $c-red
._framing-blue
  background: $c-blue
._framing-gold
  background: $c-gold

._framing-top-left
  position: absolute
  width: 27.6rem
  height: 27.6rem
  top: -1.25em
  left: -1.25em
  z-index: 1
._framing-top-right
  position: absolute
  width: 27.6rem
  height: 27.6rem
  top: -1.25em
  left: 1.25em
  z-index: -1
._framing-bottom-left
  position: absolute
  width: 27.6rem
  height: 27.6rem
  bottom: -1.25em
  left: -1.25em
  z-index: -1
._framing-bottom-right
  position: absolute
  width: 27.6rem
  height: 27.6rem
  bottom: -1.25em
  left: 1.25em
  z-index: -1

// //transitions
// .fade-enter-active,
// .fade-leave-active
//   transition: opacity 1.5s

// .fade-enter,
// .fade-leave-to
//   opacity: 0

// .slide-up-leave-active,
// .slide-up-enter-active
//   transition: 1s

// .slide-up-enter
//   transform: translate(0, 10%)

// .slide-up-leave-to
//   transform: translate(0, -50%)
</style>