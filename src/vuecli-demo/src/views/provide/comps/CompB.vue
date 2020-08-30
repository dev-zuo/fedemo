<template>
  <div>
    组件B内容 numA: {{ numA }} objB: {{ objB }} arrayC: {{ arrayC }}
    <comp-c></comp-c>
  </div>
</template>

<script>
export default {
  components: {
    CompC: () => import("./CompC")
  },
  inject: ["numA", "objB", "arrayC"]
};
</script>

<style></style>
