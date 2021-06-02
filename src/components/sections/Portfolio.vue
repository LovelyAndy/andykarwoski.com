<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner portfolio_wrapper">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <div class="_projects">
        <ProjectMDS class="_mds" />
        <ProjectStump class="_stump" />
        <ProjectWeather class="_weather" />
      </div>
      <p class="_text__bottom-text t-section-title-md">
        Check out my <span>resume</span> or take a look at my linkedin for more information!
      </p>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import ProjectMDS from '../projects/ProjectMDS.vue'
import ProjectStump from '../projects/ProjectStump.vue'
import ProjectWeather from '../projects/ProjectWeather.vue'
export default {
  components: { SectionTitle, ProjectMDS, ProjectStump, ProjectWeather },
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

._projects
  margin: 4em 0
._text
  &__bottom-text
    padding: 1em 2em

@include media('<=phone')
  ._text
    &__bottom-text
      padding: 0

@include media('>phone', '<tablet')
  .portfolio_wrapper
    ._mds
    ._stump
    ._weather
// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>