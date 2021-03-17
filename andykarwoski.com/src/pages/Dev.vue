<template>
  <div class="dev-page-wrapper">
    <SectionTitle title="about" fontColor="blue" lineColor="red" />
    <br />
    <br />
    <br />
    <BaseLinks />
    <br />
    <br />
    <br />
    <ProfilePicPF />
    <br />
    <br />
    <br />
    <SuidobashiPF />
    <br />
    <br />
    <br />
    <StreetCornerPF />
    <br />
    <br />
    <br />
    <FromFujiPF />
  </div>
</template>

<script>
import SectionTitle from '../components/base-components/SectionTitle.vue'
import ProfilePicPF from '../components/base-components/ProfilePicPF.vue'
import StreetCornerPF from '../components/base-components/StreetCornerPF.vue'
import SuidobashiPF from '../components/base-components/Suidobashi.vue'
import FromFujiPF from '../components/base-components/FromFujiPF.vue'
import BaseLinks from '../components/base-components/BaseLinks.vue'
export default {
  name: 'DevPage',
  components: { SectionTitle, ProfilePicPF, SuidobashiPF, StreetCornerPF, FromFujiPF, BaseLinks },
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>


<style lang="sass" scoped>
@import '../css/colors.sass'
.dev-page-wrapper
  display: flex
  flex-direction: column
  padding-top: 5rem
</style>