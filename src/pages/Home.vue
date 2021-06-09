<template>
  <div class="home">
    <NavBar class="_navbar" />
    <Hero class="_hero" />
    <About />
    <Portfolio />
    <Contact />
    <!-- <Gallery />-->
    <MyFooter />
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
@import '../css/breakpoints.scss'

.home
  display: flex
  flex-direction: column
  justify-content: center
  align-items: stretch
  // > *
  //   margin-bottom: 20em
@include media('>=desktop')
  .home
    > *
    ._navbar
      margin-bottom: 5em
    ._hero
      margin-bottom: 25em
</style>