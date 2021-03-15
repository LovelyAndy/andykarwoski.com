<template>
  <div id="app">
    <router-view />
    <BaseNavBar />
  </div>
</template>

<script>
import BaseNavBar from './components/atoms/BaseNavBar.vue'

export default {
  name: 'App',
  components: { BaseNavBar },
}
</script>


<style lang="sass">
@import './css/colors.sass'
@import './css/typography.sass'

*,
*::after,*::before
  box-sizing: border-box
  font-family: 'vonnes', sans-serif

body
  margin: 0px
  padding: 2rem 12.5rem
  text-align: center
</style>
