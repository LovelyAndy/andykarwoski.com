<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <ProjectMDS />
      <p class="_text__bottom-text t-section-title-md">
        Check out my <span>resume</span> or take a look at my linkedin for more information!
      </p>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import ProjectMDS from '../projects/ProjectMDS.vue'
export default {
  components: { SectionTitle, ProjectMDS },
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
@import '../../css/breakpoints.scss'
.portfolio

._text
  &__bottom-text
    padding: 1em 2em

@include media('<=phone')
  ._text
    &__bottom-text
      padding: 0

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>