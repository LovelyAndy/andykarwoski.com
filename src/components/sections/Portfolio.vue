<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner portfolio_wrapper">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <div class="_projects">
        <ProjectMDS class="_mds" />
        <ProjectStump class="_stump" />
        <ProjectWeather class="_weather" />
      </div>
      <div class="_text__bottom-text t-section-title-md">
        Check out my <span>resume</span> or take a look at my linkedin for more information!
      </div>
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

@include media('<=phone')
  ._projects
    margin-top: 4em
    ._mds,
    ._stump,
    ._weather
      transform: scale(.95)
  ._text__bottom-text
    margin-top: 2em

@include media('>phone', '<=tablet')
  ._projects
    margin-top: 10em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.2)

    ._stump,
    ._weather
      margin-top: 12em
  ._text__bottom-text
    margin-top: 5em
@include media('>tablet', '<laptop')
  ._projects
    margin-top: 16em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.5)

    ._stump,
    ._weather
      margin-top: 25em

    // ._mds,
    // ._weather
    //   margin-right: 12em
    // ._stump
    //   padding-left: 12em

  ._text__bottom-text
    margin-top: 5em

// @include media('>=laptop')
</style>