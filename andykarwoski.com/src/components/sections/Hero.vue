<template>
  <div class="component-wrapper">
    <ProfilePicPF />
    <div class="title-els">
      <div class="title-els_name">
        <div class="t-main-title andy">Andy</div>
        <div class="t-main-title karwoski">Karwoski</div>
      </div>
      <div class="title-els_sub">
        <span class="t-section-title-md frontend">frontend web developer</span>
        <span class="t-section-title-md line"> / </span>
        <span class="t-section-title-md designer">designer</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicPF from '../base-components/ProfilePicPF.vue'
export default {
  components: { ProfilePicPF },
  name: 'TitleAndProfilePic',
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
.component-wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.title-els
  position: relative
  display: flex
  flex-direction: column
.title-els_name
  text-align: left
  z-index: 3

.andy
  position: absolute
  bottom: 13.5rem
  left: 26.25rem
  color: $c-red
.karwoski
  position: absolute
  bottom: 6.55rem
  left: 29.55rem
  color: $c-blue
.title-els_sub
  position: relative
  bottom: 4rem
  left: 31.25rem

.frontend
  color: $c-blue
.line
  color: $c-gold
.designer
  color: $c-red
</style>
