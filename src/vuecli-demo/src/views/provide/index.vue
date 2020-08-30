<template>
  <div>
    入口index.vue numA: {{ numA }} objB: {{ objB }} arrayC: {{ arrayC }}
    <comp-a></comp-a>
  </div>
</template>

<script>
export default {
  components: {
    CompA: () => import("./comps/CompA")
  },
  provide() {
    return {
      numA: this.numA,
      objB: this.objB,
      arrayC: this.arrayC
    };
  },
  data() {
    return {
      numA: 1,
      objB: { a: 1 },
      arrayC: [1, 2, 3]
    };
  },
  created() {
    setInterval(() => {
      this.numA = this.numA++;
      this.objB = { b: this.numA++ };
      this.arrayC = [this.numA++, 2, 3];
    }, 2000);
  }
};
</script>

<style></style>
