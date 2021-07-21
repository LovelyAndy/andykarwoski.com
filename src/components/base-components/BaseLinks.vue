<template>
  <div class="component-wrapper">
    <div class="container">
      <a
        href="https://www.linkedin.com/in/andrew-karwoski-b95689122/"
        target="_blank"
        class="_icon"
        draggable="false"
        ><img src="/svgs/linkedin.svg" alt="Linkedin Link" draggable="false"
      /></a>
      <a href="https://github.com/LovelyAndy" target="_blank" class="_icon" draggable="false"
        ><img src="/svgs/github.svg" alt="Github Link" draggable="false"
      /></a>
      <a
        href="https://stackoverflow.com/users/story/14494747"
        target="_blank"
        class="_icon"
        draggable="false"
        ><img src="/svgs/stackoverflow.svg" alt="stackoverflow Link" draggable="false"
      /></a>
      <a href="https://medium.com/" target="_blank" class="_icon" draggable="false"
        ><img src="/svgs/medium.svg" alt="Medium Link" draggable="false"
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
  // margin-left: .75em
  margin-left: clamp(0.75rem, -0.1773rem + 2.8977vw, 3.3rem)
._icon
  width: clamp(3.1rem, 3.5667rem + 1.6667vw, 4.3rem)
  cursor: pointer
  &:hover
    transform: scale(1.1)
</style>