<template>
  <div id="portfolio" class="section-outer portfolio">
    <div class="col section-inner portfolio_wrapper">
      <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
      <div class="_projects">
        <div class="_mds">
          <ProjectMDS />
        </div>
        <div class="_stump">
          <ProjectStump />
        </div>
        <div class="_weather">
          <ProjectWeather />
        </div>
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
._linkedin
._resume

// .red-underline
//   display: inline-block
//   position: relative
//   &:before
//     content: ''
//     display: block
//     position: absolute
//     left: 0
//     bottom: 0
//     height: 4px
//     width: 0
//     transition: width 0s ease, background .5s ease
//   &:after
//     content: ''
//     display: block
//     position: absolute
//     right: 0
//     bottom: 0
//     height: 4px
//     width: 0
//     background: #FE4539
//     transition: width .5s ease
//   &:hover:before
//     width: 100%
//     background: #FE4539
//     transition: width .5s ease
//   &:hover:after
//     width: 100%
//     background: transparent
//     transition: all 0s ease

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
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    width: 100%
    margin-top: 12em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.1)
      // &:hover
      //   transform: scale(1.5)
      //   z-index: 10

    // ._mds
    //   margin-left: 12em
    // ._stump
    //   margin-top: 14em
    // ._weather
    //   margin-top: 24em

  ._text__bottom-text
    margin-top: 3.5em
    padding: 0 2em

@include media('>=laptop')
  ._projects
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    width: 100%
    margin-top: 12em
    ._mds,
    ._stump,
    ._weather
      transform: scale(1.5)
      // &:hover
      //   transform: scale(1.5)
      //   z-index: 10

    ._mds
      flex-basis: 100%
      margin-top: 2em
      margin-left: 15em
    ._stump
      margin-top: 24em
      margin-left: 10em
    ._weather
      margin-top: 30em
      margin-right: 12em

  ._text__bottom-text
    margin-top: 3.5em
    padding: 0 2em
</style>