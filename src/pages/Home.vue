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
._hero
  margin-bottom: 10em
@include media('>=900px', '<1024px')
  ._navbar
    margin-bottom: 0em
  ._hero
    margin-bottom: 8em
@include media('>=1024px', '<laptop')
  ._navbar
    margin-bottom: 2em
  ._hero
    margin-bottom: 15em
@include media('>=laptop')
  ._navbar
    margin-bottom: 2em
  ._hero
    margin-bottom: 20em
</style>