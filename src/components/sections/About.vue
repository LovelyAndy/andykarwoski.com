<template>
  <div id="about" class="about-wrapper">
    <SectionTitle title="about" fontColor="red" lineColor="blue" />
    <div class="text">
      <p class="t-body">
        Marketing & brand manager, formerly based in the heart of Tokyo, Japan, turned frontend web
        dev with an eye for design.
      </p>
      <p class="t-body">
        Spending most of my adult life in one of the biggest cities in the world taught me a lot
        about different cultures & perspectives as well as the various passions can drive us all. It
        also gave me Japanese fluency; which is pretty nice as well.
      </p>
      <p class="t-body">Film, music and fitness is what I’m all about.</p>
      <p class="t-body">
        I’ve also started a <span>blog</span> about my life from the busy streets of Tokyo, to my
        dive into the vast ocean of programming if you’re into that sort of thing.
      </p>
      <SuidobashiPF class="pic" />
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
.about-wrapper
  padding: 1em 2em
span
  color: $c-red
p
  margin: .5em
  padding: 0em

.text
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 0 2rem
  & > *
    text-align: left
.t-body
  text-align: left
.pic
  padding: 2em 0
</style>