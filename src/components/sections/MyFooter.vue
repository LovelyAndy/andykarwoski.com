<template>
  <div class="component-wrapper">
    <div class="links_anchor">
      <div class="t-footer-link">home</div>
      <div class="t-footer-link">about</div>
      <div class="t-footer-link">portfolio</div>
      <div class="t-footer-link">contact</div>
    </div>
    <BaseLinks class="base-links" />
    <hr />
    <div class="footer-info">
      <div class="footer-info_copyright t-footer-minor">Copyright © Andy Karwoski 2021</div>
      <div class="footer-info_copyright t-footer-minor">
        Email: <span class="footer-info_email t-footer-minor">andy@andykarwoski.com</span>
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
hr
  color: #e0e0e0
  position: absolute
  left: 0
  right: 0

.component-wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  border: 3px solid red
.base-links
  display: flex
  flex-direction: row
.links_anchor
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 100%
  padding: 0rem 25%
  color: $c-grey-dark
.footer-info
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  width: 100%
  padding: 0rem 10%
.footer-info_copyright
  color: $c-grey-light
.footer-info_email
  color: $c-blue
</style>