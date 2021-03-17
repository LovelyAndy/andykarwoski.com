<template>
  <div class="home">
    <NavBar class="nav-bar" />
    <Hero class="title-prof" />
    <About />
    <MyFooter />
  </div>
</template>

<script>
import NavBar from '../components/base-components/NavBar.vue'
import MyFooter from '../components/sections/MyFooter.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'

export default {
  name: 'Home',
  components: { NavBar, Hero, MyFooter, About },
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