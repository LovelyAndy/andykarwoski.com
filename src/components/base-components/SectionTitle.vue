<template>
  <div class="component-wrapper">
    <h1 :class="[`section-title_${fontColor}`, 't-section-title-lg']">
      {{ title }}
    </h1>
    <hr :class="`${lineColor}`" />

    <!-- <div v-if="fontColor === blue" class="section-title_blue t-section-title-lg">
      {{ title }}
    </div>
    <hr class="red" /> -->
  </div>
</template>

<script>
export default {
  components: {},
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
@import '../../css/breakpoints.scss'

.component-wrapper
  display: flex
  flex-direction: column
hr
  width: 100%
  height: 4px
  &.blue
    background-color: $c-blue
  &.red
    background-color: $c-red

.section-title_red
  margin-right: auto
  margin-left: 6.8em
  color: $c-red

.section-title_blue
  margin-left: auto
  margin-right: 6.8em
  color: $c-blue

@include media('<tablet')
hr
  width: 100%
  &.blue
    border: 1px solid $c-blue
  &.red
    border: 1px solid $c-red
.section-title_red
  margin-right: auto
  margin-left: .35em
.section-title_blue
  margin-right: .35em
  margin-left: auto
</style>