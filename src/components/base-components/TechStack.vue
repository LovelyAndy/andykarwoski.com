<template>
  <div class="tech-stack">
    <img v-if="html" src="svgs/html5.svg" alt="html5 logo" class="_icon" />
    <img v-if="css" src="svgs/css3.svg" alt="css3 logo" class="_icon" />
    <img v-if="js" src="svgs/javascript.svg" alt="javascript logo" class="_icon" />
    <img v-if="sass" src="svgs/sass.svg" alt="sass logo" class="_icon" />
    <img v-if="vuejs" src="svgs/vuejs.svg" alt="vuejs logo" class="_icon" />
    <img v-if="firebase" src="svgs/firebase.svg" alt="firebase logo" class="_icon" />
    <img v-if="git" src="svgs/git.svg" alt="git logo" class="_icon" />
    <img v-if="cypress" src="svgs/cypress.svg" alt="cypress logo" class="_icon" />
    <img v-if="capacitor" src="svgs/capacitor.svg" alt="capacitor logo" class="_icon" />
  </div>
</template>

<script>
export default {
  name: 'TechStack',
  props: {
    html: { type: Boolean, default: false },
    css: { type: Boolean, default: false },
    sass: { type: Boolean, default: false },
    js: { type: Boolean, default: false },
    vuejs: { type: Boolean, default: false },
    firebase: { type: Boolean, default: false },
    git: { type: Boolean, default: false },
    cypress: { type: Boolean, default: false },
    capacitor: { type: Boolean, default: false },
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
.tech-stack
  display: flex

._icon
  max-width: 4rem
</style>