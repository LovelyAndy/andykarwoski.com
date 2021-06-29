<template>
  <div class="home">
    <NavBar class="_navbar" />
    <Hero class="_hero" />
    <About class="_about" />
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

@include media('<tablet')
  .navbar
    margin-top: 2em
  ._hero
    margin-bottom: 1em
  .about
    margin-bottom: 2em

@include media('>=tablet', '<900px')
  ._hero
    margin-bottom: 10em
  .about
    margin-bottom: 2em
@include media('>=900px', '<1024px')
  ._navbar
    margin-bottom: 0em
  ._hero
    margin-bottom: 8em
  .about
    margin-bottom: 2em
@include media('>=1024px', '<laptop')
  ._navbar
    margin-bottom: 2em
  ._hero
    margin-bottom: 10em
  .about
    margin-bottom: 5em
@include media('>=laptop')
  ._navbar
    margin-bottom: 2em
  ._hero
    margin-bottom: 20em
  .about
    margin-bottom: 5em

@include media('>=laptop', '<desktop')
  ._navbar
    padding-bottom: 4em
  ._hero
    margin-bottom: 20em
  .about
    margin-bottom: 5em
@include media('>desktop')
  .navbar
    padding-bottom: 4em
  .about
    margin-bottom: 5em
</style>