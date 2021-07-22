<template>
  <div class="row project-links">
    <div v-if="website" class="row">
      <a :href="websiteLink" target="_blank" class="_website">
        <div class="t-section-title-sm">live site</div>
        <img src="/svgs/website-link.svg" alt="Link to project website" class="_icon" />
      </a>
    </div>
    <div v-if="appStore" class="row">
      <a :href="appStoreLink" target="_blank" class="_app-store">
        <!-- <div class="t-section-title-sm">app store</div> -->
        <img
          src="/svgs/app-store-dl.svg"
          alt="Link to project on app store"
          class="_icon-app-store"
        />
      </a>
    </div>
    <div v-if="googlePlay" class="row">
      <a :href="googlePlayLink" target="_blank" class="_google-play">
        <!-- <div class="t-section-title-sm">app store</div> -->
        <img
          src="/svgs/google-play-dl.svg"
          alt="Link to project on Google Play"
          class="_icon-google-play"
        />
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
    appStore: { type: Boolean, default: false },
    appStoreLink: { type: String },
    googlePlay: { type: Boolean, default: false },
    googlePlayLink: { type: String },
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
  max-width: 28em
  flex-wrap: wrap

  ._icon
    cursor: pointer
    width: clamp(2.4rem, 1.8857rem + 2vw, 3.6rem)
    margin-left: .5em
    padding-top: .5em
  ._icon-app-store,
  ._icon-google-play
    width: 12em

  ._github,
  ._app-store,
  ._google-play,
  ._website,
  ._figma
    display: flex
    justify-content: center
    align-items: center
    color: $c-black
    cursor: pointer
    &:hover
      transform: scale(1.1)
  ._website
    margin-right: 2em
  ._app-store
    margin-right: 2em
</style>