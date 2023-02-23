<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner portfolio_wrapper">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <div class="col _projects">
        <ProjectMDS class="_mds" />

        <ProjectStump class="_stump" />

        <ProjectWeather class="_weather" />
      </div>
      <div class="t-section-title-md _text__bottom-text">
        Check me out on
        <a
          href="https://www.linkedin.com/in/andykarwoski/"
          style="cursor: pointer; color: #4062bf"
          class="t-section-title-md blue-underline"
          target="_blank"
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
._projects
  align-items: center
._text__bottom-text
  padding: 0 1em

@include media('<=phone')
  ._projects
    margin-top: 6em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 3em
  ._text__bottom-text
    margin-top: 2em

@include media('>phone', '<=550px')
  ._projects
    margin-top: 6em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 4em
  ._text__bottom-text
    margin-top: 2em

@include media('<=tablet', '>550px')
  ._projects
    margin-top: 8em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 8em
    ._mds
      transform: translateX(-8em) scale(1.1)

    ._stump
      transform: translateX(8em) scale(1.1)

    ._weather
      transform: translateX(-8em) scale(1.1)

  ._text__bottom-text
    margin-top: 3.5em
    padding: 0 3.75em
@include media('>tablet', '<=1000px')
  ._projects
    margin-top: 12em
    ._mds
      transform: translateX(-14em) scale(1.25)

    ._stump
      transform: translateX(12em) scale(1.25)
      margin-top: 12em

    ._weather
      transform: translateX(-12em) scale(1.25)
      margin-top: 12em

  ._text__bottom-text
    margin-top: 4em
    padding: 0 3.75em
@include media('>1000px', '<=1200px')
  ._projects
    margin-top: 12em
    ._mds
      transform: translateX(-16em) scale(1.25)

    ._stump
      transform: translateX(18em) scale(1.25)
      margin-top: 12em

    ._weather
      transform: translateX(-12em) scale(1.25)
      margin-top: 12em

  ._text__bottom-text
    margin-top: 7em
    padding: 0 3.75em
@include media('>=1000px', '<=1200px')
  ._projects
    margin-top: 12em
    ._mds,
    ._stump,
    ._weather
      margin-bottom: 8em

    ._mds
      transform: translateX(-25em) scale(1.25)

    ._stump
      transform: translateX(24em) scale(1.25)
      margin-top: -12em

    ._weather
      transform: translateX(-21em) scale(1.25)
      margin-top: -12em

  ._text__bottom-text
    margin-top: 2em
    padding: 0 3.75em

@include media('>1200px', '<=laptop')
  ._projects
    margin-top: 20em

    ._mds
      transform: translateX(-28em) scale(1.5)
    ._stump
      transform: translateX(28em) scale(1.5)
      margin-top: -2em
    ._weather
      transform: translateX(-24em) scale(1.5)
      margin-top: 6em

  ._text__bottom-text
    margin-top: 4em
    padding: 0 2em

@include media('>laptop', '<desktop')
  ._projects
    margin-top: 20em

    ._mds
      transform: translateX(-28em) scale(1.5)
    ._stump
      transform: translateX(32em) scale(1.5)
      margin-top: -10em
    ._weather
      transform: translateX(-20em) scale(1.5)
      margin-top: 8em

  ._text__bottom-text
    margin-top: 5em
    padding: 0 2em
@include media('>=desktop')
  ._projects
    margin-top: 20em

    ._mds
      transform: translateX(-35em) scale(1.5)
    ._stump
      transform: translateX(32em) scale(1.5)
      margin-top: -8em
    ._weather
      transform: translateX(-28em) scale(1.5)
      margin-top: 10em

  ._text__bottom-text
    margin-top: 6em
    padding: 0 2em
</style>
