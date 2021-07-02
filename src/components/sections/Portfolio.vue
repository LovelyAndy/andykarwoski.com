<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner portfolio_wrapper">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <div class="_projects">
        <ProjectMDS class="_mds" />

        <ProjectStump class="_stump" />

        <ProjectWeather class="_weather" />
      </div>
      <div class="t-section-title-md _text__bottom-text">
        Check out my
        <a href="#" style="cursor: pointer; color: #fe4539" class="t-section-title-md red-underline"
          >resume</a
        >
        or take a look at my
        <a
          href="#"
          style="cursor: pointer; color: #4062bf"
          class="t-section-title-md blue-underline"
          >linkedin</a
        >
        for more information!
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
._text__bottom-text
  padding: 0 1em
// ._mds,
// ._stump,
// ._weather
//   max-width: 45.5rem

@include media('<=phone')
  ._projects
    margin-top: 4em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 3em
  ._text__bottom-text
    margin-top: 2em

@include media('>phone', '<=550px')
  ._projects
    margin-top: 4em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 4em
  ._text__bottom-text
    margin-top: 2em

@include media('<=tablet', '>550px')
  ._projects
    margin-top: 6em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.1)
      margin-bottom: 8em
    ._mds
      margin-right: 12em

    ._stump
      margin-left: 12em

    ._weather
      margin-right: 12em
    ._text__bottom-text
      margin-top: 4em

    ._text__bottom-text
      margin-top: 3.5em
      padding: 0 3.75em
@include media('>tablet', '<=1200px')
  ._projects
    margin-top: 12em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.2)
    ._mds
      margin-right: 25em

    ._stump
      margin-top: 12em
      margin-left: 32em

    ._weather
      margin-top: 12em
      margin-right: 22em
  ._text__bottom-text
    margin-top: 4em

  ._text__bottom-text
    margin-top: 3.5em
    padding: 0 3.75em

@include media('>1200px', '<=laptop')
  ._projects
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    margin-top: 24em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.5)

    ._mds
      margin-left: 15em
    ._stump
      margin-top: 26em
      margin-left: 10em
    ._weather
      margin-top: 16em
      margin-left: 18em

  ._text__bottom-text
    margin-top: 4em
    padding: 0 2em

@include media('>laptop', '<desktop')
  ._projects
    display: flex
    flex-direction: column
    flex-wrap: wrap
    margin-top: 24em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.65)

    ._mds
      margin-right: 55em
    ._stump
      margin-top: 5em
      margin-left: 65em

    ._weather
      margin-top: 10em
      margin-right: 60em

  ._text__bottom-text
    margin-top: 4em
    padding: 0 2em

  ._text__bottom-text
    margin-top: 5em
    padding: 0 2em
@include media('>=desktop')
  ._projects
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    margin-top: 24em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.65)

    ._mds
      padding-left: 18em
    ._stump
      margin-top: 16em
      padding-right: 5em
    ._weather
      margin-top: 20em
      padding-left: 15em

  ._text__bottom-text
    margin-top: 4em
    padding: 0 2em

  ._text__bottom-text
    margin-top: 5em
    padding: 0 2em
</style>