<template>
  <div class="portfolio-wrapper">
    <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
    <p class="contact-bottom-text t-section-title-md">
      Check out my resume or take a look at my linkedin for more information!
    </p>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
export default {
  components: { SectionTitle },
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
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100rem

.contact-bottom-text
  padding: 15rem 25rem
</style>