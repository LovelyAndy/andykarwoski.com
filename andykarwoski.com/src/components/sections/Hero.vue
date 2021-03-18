<template>
  <div class="hero">
    <ProfilePicPF />
    <div class="title-els">
      <div class="title-els_main">
        <span class="t-main-title andy">Andy</span>
        <span class="t-main-title karwoski">Karwoski</span>
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
.hero
  display: flex
  flex-direction: row
  justify-content: flex-start

.title-els
  display: flex
  flex-direction: column
  margin-left: -2rem
.title-els_main
  text-align: left
  z-index: 3
  .andy
    display: block
    color: $c-red
  .karwoski
    display: block
    margin-top: -3.78rem
    margin-left: 3.3rem
    color: $c-blue
.title-els_sub
  text-align: center
  margin-top: -1.5rem
  margin-left: 3.5rem
  .designer
    color: $c-red
  .frontend
    color: $c-blue

.line
  color: $c-gold
</style>
