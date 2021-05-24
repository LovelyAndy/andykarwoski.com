<template>
<div id="portfolio" class="section-outer portfolio-wrapper">
    <div class="col section-inner">
        <SectionTitle title="portfolio" fontColor="blue" lineColor="red" />
        <p class="_text__bottom-text t-section-title-md">
          Check out my <span>resume</span> or take a look at my linkedin for more information!
        </p>
        <StreetCornerPF class="_pic" />
      </div>
    </div>
</div>
</template>

<script>
import SectionTitle from '../base-components/SectionTitle.vue'
import StreetCornerPF from '../base-components/StreetCornerPF.vue'
export default {
  components: { SectionTitle, StreetCornerPF },
  name: 'Portfolio',
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
.portfolio-wrapper

._text
  &__bottom-text
    padding: 1em 2em

._pic
  align-self: center

// @include media('>=phone', '<=425px', 'retina2x')

// @include media('>=425px', '<tablet')

// @include media('>=tablet', '<laptop')

// @include media('>=laptop')
</style>