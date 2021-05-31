<template>
  <div class="project-wrapper">
    <div class="_main-backdrop">
      <div :class="[`_title-${titleLocation}`, 't-project-title', '_title']">
        {{ title }}
      </div>
    </div>
    <div :class="`_frame-${frameLocation}`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProjectOutline',
  props: {
    title: { type: String },
    titleLocation: { type: String, default: 'top' },
    frameColor: { type: String },
    frameLocation: { type: String, default: 'top-left' },
  },
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
.project-wrapper
  position: relative
._main-backdrop
  width: 100%
  width: 27.6rem
  height: 27.6rem
  position: relative
  background-color: $c-grey
  ._title
    position: absolute
    background-color: $c-black
    color: $c-bg-white
    padding: 1em
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

._frame-top-left
  position: absolute
  background: $c-red
  width: 27.6rem
  height: 27.6rem
  top: -4%
  left: -3%
  z-index: -1
</style>