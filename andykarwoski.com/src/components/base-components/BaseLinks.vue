<template>
  <div class="component-wrapper">
    <div class="container">
      <div><img src="/svgs/linkedin.svg" alt="Linkedin Link" /></div>
      <div><img src="/svgs/github.svg" alt="Github Link" /></div>
      <div><img src="/svgs/medium.svg" alt="Medium Link" /></div>
      <div><img src="/svgs/dribbble.svg" alt="Dribbble Link" /></div>
    </div>
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
.container
  display: flex
  flex-direction: row
@media (min-width: 40rem)
  .container > * + *
    margin-left: 0.75rem
</style>