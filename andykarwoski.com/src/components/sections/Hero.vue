<template>
  <div class="hero">
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
.hero
  display: flex
  flex-direction: row
  justify-content: flex-start

.title-els
  display: flex
  flex-direction: column
.title-els_name
  text-align: left
  z-index: 3

.andy,
.designer
  color: $c-red
.karwoski,
.frontend
  color: $c-blue

.line
  color: $c-gold
</style>
