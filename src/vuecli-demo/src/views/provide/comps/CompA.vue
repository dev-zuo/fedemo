<template>
  <div>
    组件A内容：numA: {{ numA }} objB: {{ objB }} arrayC: {{ arrayC }}
    <comp-b></comp-b>
  </div>
</template>

<script>
export default {
  components: {
    CompB: () => import("./CompB")
  },
  inject: ["numA", "objB", "arrayC"]
};
</script>

<style></style>
