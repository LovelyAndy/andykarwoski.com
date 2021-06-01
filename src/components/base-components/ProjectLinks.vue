<template>
  <div class="project-links">
    <div v-if="website" class="row">
      <p class="t-section-title-sm">live website</p>
      <img src="/svgs/website-link.svg" alt="Link to project website" />
    </div>
    <div v-if="github" class="row">
      <p class="t-section-title-sm">view repo</p>
      <img src="/svgs/github.svg" alt="Link to project on github" />
    </div>
    <img v-if="figma" src="/svgs/figma.svg" alt="Link to project on figma" />
  </div>
</template>

<script>
export default {
  name: 'Project Links',
  props: {
    website: { type: Boolean, default: false },
    github: { type: Boolean, default: false },
    figma: { type: Boolean, default: false },
  },
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
.project-links
  display: flex
</style>