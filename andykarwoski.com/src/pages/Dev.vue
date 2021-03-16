<template>
  <div class="dev-page-wrapper"><SuidobashiPF /></div>
</template>

<script>
import SuidobashiPF from '../components/base-components/SuidobashiPF.vue'

export default {
  name: 'DevPage',
  components: { SuidobashiPF },
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
  padding-top: 5rem
</style>