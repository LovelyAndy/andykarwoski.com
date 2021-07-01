<template>
  <div id="contact" class="section-outer contact">
    <div class="col section-inner">
      <SectionTitle title="contact" fontColor="red" lineColor="blue" />
      <p class="_text t-body">
        If you like my projects, want to hear more about my life in Japan or just want some movie &
        music recommendations shoot me a message!
      </p>
      <div class="_btn-wrapper">
        <button class="_contact-btn t-btn">let's talk!</button>
      </div>
      <StreetCornerPF class="_pic" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import StreetCornerPF from '../base-components/StreetCornerPF.vue'
export default {
  components: { SectionTitle, StreetCornerPF },
  name: 'Contact',
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

._text
  text-align: center
  color: $c-black
._btn-wrapper
  position: relative
  display: flex
  justify-content: center
  align-self: center
  width: 100%$c-blue
  &::before,
  &::after
    position: absolute
    content: ""
    width: 100%
    height: 100%
    z-index: -1
    // border: 2px solid yellow;
    transition: all .25s ease-out
  &::before
    background-color: $c-bg-white
    border: .5rem solid $c-blue
    top: -1.5rem
    right: -1.5rem
  &::after
    background-color: $c-bg-white
    border: .5rem solid $c-red
    bottom: -1.5rem
    left: -1.5rem
  &:hover
    transform: translateY(3px)
    // box-shadow: 4px 14px 14px 0px rgba(0, 0, 0, 0.4)
    &::before
      top: 1.5rem
      left: 1.5rem
      background-color: $c-blue
      // box-shadow: 5px 5px 15px rgba(64,98,191,.25)
    &::after
      bottom: 1.5rem
      right: 1.5rem
      background-color: $c-red
      // box-shadow: -5px -5px 15px rgba(254,69,57,.25)
  &:active
    transform: translateY(-1px)
    // box-shadow: 4px 8px 8px 0px rgba(0, 0, 0, 0.4)
  ._contact-btn
    color: $c-bg-white
    background-color: $c-black
    // border: 5px solid $c-red
    width: 100%
    padding: .5em .75em
    &:hover
      color: $c-gold
._pic
  align-self: center

button
  background: none
  border: none
  cursor: pointer

@include media('<=phone')
  ._text
    margin-top: 1em
  ._btn-wrapper
    margin-top: 5em
  ._pic
    margin-top: 8em
@include media('>phone', '<=tablet')
  ._text
    margin-top: 1em
    padding: 0 1em
  ._btn-wrapper
    margin-top: 6em
  ._pic
    margin-top: 6em

@include media('>tablet', '<laptop')
  ._text
    margin-top: 2em
    padding: 0 4em
  ._btn-wrapper
    margin-top: 6em
  ._pic
    display: none

@include media('>=laptop')
  ._text
    margin-top: 2em
    padding: 0 6em
  ._btn-wrapper
    margin-top: 6em
  ._pic
    display: none
</style>