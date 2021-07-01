<template>
  <div>
    <ProjectOutline
      title="Weather Boyy"
      titleLocation="right"
      frameColor="blue"
      frameLocation="bottom-left"
    >
      <img src="/svgs/weather-boy-site.svg" alt="Weather Boy site image" class="_project-display" />
      <template v-slot:details>
        <div class="t-project-details _project-details_text">
          Simple weather app built in vanilla JS, utilizing the OpenWeatherMap API.
        </div>
        <TechStack html css js firebase class="_tech-stack" />
      </template>
    </ProjectOutline>
    <ProjectLinks
      website
      github
      :websiteLink="'https://weather-boyy.web.app/'"
      :githubLink="'https://github.com/LovelyAndy/weather-boy'"
    />
  </div>
</template>

<script>
import ProjectOutline from '../base-components/ProjectOutline.vue'
import TechStack from '../base-components/TechStack.vue'
import ProjectLinks from '../base-components/ProjectLinks.vue'

export default {
  components: { ProjectOutline, TechStack, ProjectLinks },
  name: 'ProjectStump',
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

._project-display
  width: 18em
  margin-right: 5.5em
._project-details_text
  padding: 2em 1em
  text-align: left
._tech-stack
  display: flex
  justify-content: space-around
  align-items: center
  padding: 0 2em
</style>