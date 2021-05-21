<template>
  <div class="home">
    <NavBar class="nav-bar" />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
    <!-- <Gallery />
    <MyFooter /> -->
  </div>
</template>

<script>
import NavBar from '../components/base-components/NavBar.vue'
import MyFooter from '../components/sections/MyFooter.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Gallery from '../components/sections/Gallery.vue'
import Portfolio from '../components/sections/Portfolio.vue'
import Contact from '../components/sections/Contact.vue'

export default {
  name: 'Home',
  components: { NavBar, Hero, MyFooter, About, Gallery, Portfolio, Contact },
}
</script>
<style lang="sass"scoped>
@import '../css/colors.sass'
.home
  display: flex
  flex-direction: column
  justify-content: center
  align-items: stretch
.nav-bar
  width: 100%
</style>