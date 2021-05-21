<template>
  <div class="component-wrapper">
    <div class="container">
      <a href="https://www.linkedin.com/in/andrew-karwoski-b95689122/" target="_blank" class="icon"
        ><img src="/svgs/linkedin.svg" alt="Linkedin Link"
      /></a>
      <a href="https://github.com/LovelyAndy" target="_blank" class="icon"
        ><img src="/svgs/github.svg" alt="Github Link"
      /></a>
      <a href="https://medium.com/" target="_blank" class="icon"
        ><img src="/svgs/medium.svg" alt="Medium Link"
      /></a>
      <a href="#" target="_blank" class="icon"
        ><img src="/svgs/dribbble.svg" alt="Dribbble Link"
      /></a>
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
.container > * + *
  margin-left: .75em
.icon
  cursor: pointer
  width: clamp(3.1rem, 2.5667rem + 1.6667vw, 4.3rem)
</style>