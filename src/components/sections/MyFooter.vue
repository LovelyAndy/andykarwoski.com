<template>
  <div class="section-outer footer">
    <div class="col center section-inner">
      <ul class="row _links">
        <li class="_links--link grey-underline">
          <a class="t-footer-link _link" href="" v-scroll-to="'#home'">Home</a>
        </li>
        <li class="_links--link grey-underline">
          <a class="t-footer-link _link" href="" v-scroll-to="'#about'">About</a>
        </li>
        <li class="_links--link grey-underline">
          <a class="t-footer-link _link" href="" v-scroll-to="'#portfolio'">Portfolio</a>
        </li>
        <li class="_links--link grey-underline">
          <a class="t-footer-link _link" href="" v-scroll-to="'#contact'">Contact</a>
        </li>
      </ul>
      <hr class="_line1" />
      <BaseLinks class="_base-links" />
      <hr class="_line2" />
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
._line1
  width: 100%
  height: 4px
  background-color: $c-gold
  border: none
  margin: 2em 0
._line2
  width: 100%
  height: 1px
  background-color: $c-grey-light
  border: none
  width: 100vw
  margin: 1em 0
.footer
  // background-color: #E0E0E0

._links
  width: 100%
  max-width: 50em
  justify-content: space-between
  &--link
    // font-weight: 600
  ._link
    color: $c-grey-dark
._base-links
  margin: 1.5em 0
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
  ._line1
    height: 2px
  ._links
    width: 100%
    justify-content: space-between
    margin: 1em 0
    padding: 0
    &--link
      // font-size: 200%
      color: $c-grey-dark
      font-weight: 500
  ._base-links
    padding: 0 1em

// @include media('>=425px', '<tablet')

@include media('>=tablet', '<laptop')
  ._links
    margin-bottom: 2em
    padding: 0
  ._line2
    margin-top: 2em

@include media('>=laptop')
  ._links
    margin-bottom: 2em
    padding: 0
  ._line2
    margin-top: 4em
</style>