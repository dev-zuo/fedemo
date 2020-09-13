<template>
  <div>
    <p>我是index组件</p>
    <test-a></test-a>
  </div>
</template>

<script>
export default {
  components: {
    TestA: () => import("./TestA")
  },
  // name: "testA",
  name: "TestA",
  created() {
    console.log("index comp created");
  }
};
</script>

<style></style>
