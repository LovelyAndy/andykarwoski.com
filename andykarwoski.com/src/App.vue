<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
@import './css/colors.sass'
@import './css/typography.sass'

*,
*::after,*::before
  box-sizing: border-box
  font-family: 'vonnes', sans-serif

body
  margin: 0px
  padding: 0px
  text-align: center
</style>
