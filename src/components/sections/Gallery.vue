<template>
  <div class="gallery-wrapper">
    <div class="left-group">
      <BaseLinks class="left-group__links" />
      <SuidobashiPF class="left-group__suidobashi" />
    </div>
    <div class="right-group">
      <StreetCornerPF class="right-group__street-corner" />
      <FromFujiPF class="right-group__fuji" />
    </div>
  </div>
</template>

<script>
import BaseLinks from '../base-components/BaseLinks'
import StreetCornerPF from '../base-components/StreetCornerPF.vue'
import FromFujiPF from '../base-components/FromFujiPF.vue'
import SuidobashiPF from '../base-components/SuidobashiPF.vue'
export default {
  components: { BaseLinks, StreetCornerPF, FromFujiPF, SuidobashiPF },
  name: 'Gallery',
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
.gallery-wrapper
  display: flex
  justify-content: center
  align-items: center

.left-group
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &__links
    padding: 3rem
.right-group
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &__street-corner
    margin-bottom: 6.6rem
  &__fuji
    margin-left: 8rem

// @include media('>=phone', '<=425px', 'retina2x')

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>