<template>
  <div class="row project-links">
    <div v-if="website" class="row">
      <a :href="websiteLink" target="_blank" class="_website">
        <div class="t-section-title-sm">live site</div>
        <img src="/svgs/website-link.svg" alt="Link to project website" class="_icon" />
      </a>
    </div>
    <div v-if="github" class="row">
      <a :href="githubLink" target="_blank" class="_github">
        <div class="t-section-title-sm">view repo</div>
        <img src="/svgs/github.svg" alt="Github Link" class="_icon" />
      </a>
    </div>
    <div v-if="figma" class="row">
      <a :href="figmaLink" target="_blank" class="_figma">
        <div class="t-section-title-sm">view design</div>
        <img src="/svgs/figma.svg" alt="Link to project on figma" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectLinks',
  props: {
    website: { type: Boolean, default: false },
    websiteLink: { type: String },
    github: { type: Boolean, default: false },
    githubLink: { type: String },
    figma: { type: Boolean, default: false },
    figmaLink: { type: String },
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
  justify-content: center
  margin-top: 2em

  ._icon
    cursor: pointer
    width: clamp(2.4rem, 1.8857rem + 2vw, 3.6rem)
    margin-left: .5em
  ._github,
  ._website,
  ._figma
    display: flex
    color: $c-black
    cursor: pointer
    &:hover
      transform: scale(1.2)
  ._website
    margin-right: 2em
</style>