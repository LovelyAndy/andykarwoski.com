<template>
  <div class="project-wrapper" @mouseover="show = true" @mouseleave="show = false">
    <div :class="[`_framing-${frameLocation}`, `_framing-${frameColor}`, '_no-overflow']"></div>
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
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div v-if="show" class="_overlay-bg"></div>
    </transition>
    <div class="_try">
      <transition
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutUp"
      >
        <div v-if="show" class="_overlay-content">
          <div class="_project-details">
            <slot name="details"></slot>
          </div>
        </div>
      </transition>
    </div>
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
  box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25)

._try
  position: absolute
  overflow: hidden
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 5
._content-main
  position: relative
  min-width: 27.6rem
  min-height: 27.6rem
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
    font-size: 1.5rem
    padding: 1em 0em
    padding-left: 1em
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
    right: -105.5%
    width: 105.5%
    text-align: left
    transform-origin: 0 0
    transform: rotate(90deg)
    text-transform: rotate(90deg)

._project
  padding: 4em 2em

._overlay-bg
  position: absolute
  top: 0
  left: 0
  right: 0
  bottom: 0
._overlay-bg
  z-index: 3
  background: rgba(51, 51, 51, .95)
._overlay-content
  padding-top: 2em
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

._framing-top-left,
._framing-top-right,
._framing-bottom-left,
._framing-bottom-right
  position: absolute
  min-width: 27.6rem
  min-height: 27.6rem
  z-index: -1
  box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25)

._framing-top-left
  top: -1.25em
  left: -1.25em

._framing-top-right
  top: -1.25em
  left: 1.25em

._framing-bottom-left
  bottom: -1.25em
  left: -1.25em

._framing-bottom-right
  bottom: -1.25em
  left: 1.25em

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