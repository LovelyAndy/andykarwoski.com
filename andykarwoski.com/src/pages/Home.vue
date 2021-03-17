<template>
  <div class="home">
    <NavBar class="nav-bar" />
    <TitleAndProfilePic class="title-prof" />
    <MyFooter />
  </div>
</template>

<script>
import NavBar from '../components/base-components/NavBar.vue'
import MyFooter from '../components/sections/MyFooter.vue'
import TitleAndProfilePic from '../components/sections/TitleAndProfilePic.vue'

export default {
  name: 'Home',
  components: { NavBar, TitleAndProfilePic, MyFooter },
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