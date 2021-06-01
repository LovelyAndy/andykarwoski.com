<template>
  <ProjectOutline
    title="My Dad's Shit"
    titleLocation="bottom"
    frameColor="red"
    frameLocation="top-left"
  >
    <img src="/svgs/mds-phones.svg" alt="My Dad's Shit App on phone display" />
    <template v-slot:details>
      <div class="t-project-details _project-details_text">
        An inventory app that provides users a way to smartly keep track of items in their home.
        <br />
        <br />
        Launched to both iOS and Android in June of 2021.
      </div>
      <TechStack html css sass vuejs firebase capacitor class="_tech-stack" />
    </template>
  </ProjectOutline>
</template>

<script>
import ProjectOutline from '../base-components/ProjectOutline.vue'
import TechStack from '../base-components/TechStack.vue'

export default {
  components: { ProjectOutline, TechStack },
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
  padding: 0 1em
  text-align: left
._tech-stack
  display: flex
  justify-content: center
  align-items: center
</style>