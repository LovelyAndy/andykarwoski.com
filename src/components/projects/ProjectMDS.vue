<template>
  <div>
    <ProjectOutline
      title="My Dad's Stuff"
      titleLocation="bottom"
      frameColor="red"
      frameLocation="top-left"
    >
      <img src="/svgs/mds-phones.svg" alt="My Dad's Stuff App on phone display" />
      <template v-slot:details>
        <div class="t-project-details _project-details_text">
          An inventory app that provides users a way to smartly keep track of items in their home.
          <br />
          <br />
          Launched to both iOS and Android in July of 2021.
        </div>
        <TechStack html css sass vuejs firebase capacitor class="_tech-stack" />
      </template>
    </ProjectOutline>
    <ProjectLinks
      appstore
      github
      :appstoreLink="'https://apps.apple.com/us/app/my-dads-stuff/id1575920671#?platform=iphone'"
      :githubLink="'https://github.com/LovelyAndy/MyDadsStuff'"
      class="_links"
    />
  </div>
</template>

<script>
import ProjectOutline from '../base-components/ProjectOutline.vue'
import TechStack from '../base-components/TechStack.vue'
import ProjectLinks from '../base-components/ProjectLinks.vue'

export default {
  components: { ProjectOutline, TechStack, ProjectLinks },
  name: 'ProjectMDS',
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

._project-details_text
  // display: flex
  // justify-content: center
  // align-items: center
  text-align: left
  padding: 0 1em
._tech-stack
  display: flex
  justify-content: center
  align-items: center
  margin: 1em
._links
  margin-top: 1em
</style>