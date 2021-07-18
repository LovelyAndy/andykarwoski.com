<template>
  <div>
    <ProjectOutline
      title="doubledstumpgrindingwi.com"
      titleLocation="top"
      frameColor="gold"
      frameLocation="bottom-right"
      titleSmall
    >
      <img
        src="/svgs/stump-site-img.svg"
        alt="Double D Stump Grinding Website displays"
        class="_project-display"
      />
      <template v-slot:details>
        <div class="t-project-details _project-details_text">
          Landing page for stump grinding business in Milwaukee, WI.
          <br />
          <br />
          Branding, design and website all created by me.
        </div>
        <TechStack html css sass vuejs firebase class="_tech-stack" />
      </template>
    </ProjectOutline>
    <ProjectLinks
      website
      github
      :websiteLink="'https://doubledstumpgrindingwi.com/'"
      :githubLink="'https://github.com/LovelyAndy/LovelyAndy---DoubleDStumpGrinding'"
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
  margin-top: 5em
._project-details_text
  text-align: left
  padding: .5em 1em
._tech-stack
  display: flex
  justify-content: space-around
  align-items: center
  margin: 1em
  padding: 0 2em
</style>