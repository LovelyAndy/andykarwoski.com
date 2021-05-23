<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>


<style lang="sass">
@import './css/colors.sass'
@import './css/typography.sass'
@import './css/breakpoints.scss'
@import './css/global.sass'

*,
*::after,*::before
  box-sizing: border-box
  font-family: 'Vonnes', sans-serif

html
  font-size: 62.5%
body
  margin: 0
  padding: 2em 0
  max-width: 100%
  text-align: center
  background-color: $c-bg-white
@include media('>=phone', '<=425px', 'retina2x')
  body
    background-color: #aea9

@include media('>=425px', '<tablet')
  body
    background-color: #daa
@include media('>=tablet', '<laptop')
  body
    background-color: #a3c3d9
</style>
