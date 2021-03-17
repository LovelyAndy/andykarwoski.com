<template>
  <div class="component-wrapper">
    <div><img src="/svgs/linkedin.svg" alt="Linkedin Link" /></div>
    <div><img src="/svgs/github.svg" alt="Github Link" /></div>
    <div><img src="/svgs/medium.svg" alt="Medium Link" /></div>
    <div><img src="/svgs/dribbble.svg" alt="Dribbble Link" /></div>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',
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
.component-wrapper
  display: flex
div
  margin: 0rem 0.75rem
</style>