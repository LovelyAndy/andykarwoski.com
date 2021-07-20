<template>
  <div id="about" class="section-outer about">
    <div class="col section-inner">
      <SectionTitle title="about" fontColor="red" lineColor="blue" />
      <div class="_text">
        <p class="t-body">
          Marketing & brand manager, formerly based in the heart of Tokyo, Japan, turned frontend
          web dev with an eye for design.
        </p>
        <p class="t-body">
          Spending most of my adult life in one of the busiest cities in the world taught me a lot
          about different cultures and perspectives as well as the various passions that can drive
          us all. It also gave me Japanese fluency; which is pretty nice as well.
        </p>
        <p class="t-body">Film, music and fitness is what I’m all about.</p>
        <p class="t-body">
          I’ve also started a
          <span style="cursor: pointer; color: #fe4539" class="red-underline"
            ><a href="https://medium.com/@LovelyAndy" target="_blank">blog</a></span
          >
          about my life from the busy streets of Tokyo, to my dive into the vast ocean of
          programming if you’re into that sort of thing.
        </p>
      </div>
      <SuidobashiPF class="_pic" />
    </div>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import SuidobashiPF from '../base-components/SuidobashiPF.vue'
export default {
  components: { SectionTitle, SuidobashiPF },
  name: 'About',
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

a
  color: inherit
._text
  text-align: left
  padding: 1em 2em

._pic
  align-self: center
  margin: 2em 0
@include media('>tablet')
  ._pic
    display: none

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

@include media('>=laptop')
  ._text
    padding: 0 5em
</style>