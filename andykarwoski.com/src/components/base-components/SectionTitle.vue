<template>
  <div class="component-wrapper">
    <div :class="[`section-title_${fontColor}`, 't-section-title-lg']">
      {{ title }}
    </div>
    <hr :class="`${lineColor}`" />
    <!-- <div v-if="fontColor === blue" class="section-title_blue t-section-title-lg">
      {{ title }}
    </div>
    <hr class="red" /> -->
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: { type: String },
    fontColor: { type: String },
    lineColor: { type: String },
  },
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
hr
  width: 100%
  &.blue
    border: 3px solid $c-blue
  &.red
    border: 3px solid $c-red

.section-title_red
  margin-right: auto
  margin-left: 4rem
  color: $c-red

.section-title_blue
  margin-left: auto
  margin-right: 4rem
  color: $c-blue
</style>