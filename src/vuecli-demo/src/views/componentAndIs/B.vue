<template>
  <div>
    我是B组件内容
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("B beforeCreate");
  },
  created() {
    console.log("B created");
  },
  beforeMount() {
    console.log("B beforeMount");
  },
  mounted() {
    console.log("B mounted");
  },
  beforeUpdate() {
    console.log("B beforeUpdate");
  },
  updated() {
    console.log("B updated");
  },
  activated() {
    console.log("B activated");
  },
  deactivated() {
    console.log("B deactivated");
  },
  beforeDestroy() {
    console.log("B beforeDestroy");
  },
  destroyed() {
    console.log("B destroyed");
  },
  errorCaptured() {
    console.log("B errorCaptured");
  }
};
</script>

<style></style>
