<template>
  <div>
    <div>组件C内容 numA: {{ numA }} objB: {{ objB }} arrayC: {{ arrayC }}</div>
    <div>
      组件C内容 computedNumA: {{ computedNumA }} computedObjB:
      {{ computedObjB }} computedArrayC:
      {{ computedArrayC }}

      oldNumA: {{ oldNumA }} oldObjB: {{ oldObjB }}
    </div>
  </div>
</template>

<script>
export default {
  inject: ["numA", "objB", "arrayC"],
  data() {
    return {
      oldNumA: this.numA,
      oldObjB: this.objB
    };
  },
  computed: {
    computedNumA() {
      return this.numA;
    },
    computedObjB() {
      return this.objB;
    },
    computedArrayC() {
      return this.arrayC;
    }
  }
};
</script>

<style></style>
