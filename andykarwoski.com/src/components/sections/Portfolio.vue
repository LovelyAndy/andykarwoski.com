<template>
  <div id="portfolio" class="portfolio-wrapper">
    <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
    <p class="contact-bottom-text t-section-title-md">
      Check out my <span>resume</span> or take a look at my linkedin for more information!
    </p>
    <StreetCornerPF class="pic" />
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import StreetCornerPF from '../base-components/StreetCornerPF.vue'
export default {
  components: { SectionTitle, StreetCornerPF },
  name: 'Portfolio',
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
.portfolio-wrapper
  padding: 1em 2em

.contact-bottom-text

.pic
  padding: 0 1em
</style>