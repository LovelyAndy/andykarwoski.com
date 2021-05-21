<template>
  <div id="contact" class="contact-wrapper">
    <SectionTitle title="contact" fontColor="red" lineColor="blue" />
    <p class="contact-text t-body">
      If you like my projects, want to hear more about my life in Japan or just want some movie &
      music recommendations shoot me a message!
    </p>
    <p class="contact-btn t-section-title-lg">let's talk!</p>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
export default {
  components: { SectionTitle },
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
.contact-wrapper
  padding: 1em 2em

.contact-text
  text-align: center
  color: black

.contact-btn
  display: flex
  flex-basis: 100%
  justify-content: center
  align-self: center
  color: $c-blue
  border: 5px solid $c-red
  padding: 1.6rem 6.4rem
</style>