<template>
  <div class="home">
    <NavBar class="nav-bar" />
    <TitleAndProfilePic class="title-prof" />
  </div>
</template>

<script>
import NavBar from '../components/base-components/NavBar.vue'
import TitleAndProfilePic from '../components/base-components/TitleAndProfilePic.vue'

export default {
  name: 'Home',
  components: { NavBar, TitleAndProfilePic },
}
</script>
<style lang="sass"scoped>
@import '../css/colors.sass'
.home
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
.nav-bar
  border: 2px solid red
</style>