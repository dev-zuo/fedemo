<template>
  <div class="z-chart-container">
    <chart
      v-if="!loading && hasData"
      :options="options"
      v-on="$listeners"
      v-bind="$attrs"
    ></chart>
    <slot v-if="!loading && !hasData"></slot>
    <loading-chart v-if="loading"></loading-chart>
  </div>
</template>

<script>
export default {
  components: {
    Chart: () => import("./Chart"),
    LoadingChart: () => import("./LoadingChart")
  },
  props: {
    loading: {
      type: Boolean,
      required: false
    },
    options: {
      type: Object,
      required: true
    },
    hasData: {
      type: Boolean,
      required: false,
      default: true
    }
  }
};
</script>

<style>
.z-chart-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
