<template>
  <div id="contact" class="section-outer contact">
    <div class="col section-inner">
      <SectionTitle title="contact" fontColor="red" lineColor="blue" />
      <p class="_text t-body">
        If you like my projects, want to hear more about my life in Japan or just want some movie &
        music recommendations shoot me a message!
      </p>
      <p class="contact-btn t-section-title-lg">let's talk!</p>
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
.contact
  padding-bottom: 2em
._text
  text-align: left
  color: $c-black
  padding: 1em 2em

.contact-btn
  display: flex
  flex-basis: 100%
  justify-content: center
  align-self: center
  color: $c-blue
  border: 5px solid $c-red
  padding: 1.6rem 6.4rem
._pic
  align-self: center
@include media('<=phone')
  ._text
    padding: 0

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>