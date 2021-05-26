<template>
  <div class="section-outer footer">
    <div class="col center section-inner">
      <ul class="row _links">
        <li class="_links--link t-footer-link">
          <a class="_link" href="" v-scroll-to="'#home'">Home</a>
        </li>
        <li class="_links--link t-footer-link">
          <a class="_link" href="" v-scroll-to="'#about'">About</a>
        </li>
        <li class="_links--link t-footer-link">
          <a class="_link" href="" v-scroll-to="'#portfolio'">Portfolio</a>
        </li>
        <li class="_links--link t-footer-link">
          <a class="_link" href="" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
      <BaseLinks class="_base-links" />
      <hr class="_line" />
      <div class="_info">
        <div class="_copyright t-footer-minor">Copyright © Andy Karwoski 2021</div>
        <!-- <div class="_copyright t-footer-minor">
          Email: <span class="_email t-footer-minor">andy@andykarwoski.com</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BaseLinks from '../base-components/BaseLinks.vue'

export default {
  components: { BaseLinks },
  name: 'MyFooter',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
@import '../../css/colors.sass'
@import '../../css/breakpoints.scss'
._line
  width: 100%
  height: 4px
  background-color: $c-gold
  border: none
  margin: 1em 0

.footer
  // background-color: #E0E0E0

._links
  width: 100%
  max-width: 1000px
  justify-content: space-between
  padding: 0
  &--link
    // font-weight: 600
  ._link
    color: $c-grey-dark

._info
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  width: 100%
._copyright
  margin: 1em 0
  color: $c-grey-light
._email
  color: $c-blue
@include media('<=phone')
  .footer
    padding: 2em 12vw
  ._links
    // display: flex
    // flex-direction: column
    width: 100%
    // max-width: 1000px
    justify-content: space-between
    margin: 1em 0
    padding: 0
    &--link
      // font-size: 200%
      color: $c-grey-dark
      font-weight: 500
  ._base-links
    padding: 1em

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>