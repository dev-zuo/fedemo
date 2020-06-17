<template>
  <div>
    我是A组件内容
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("A beforeCreate");
  },
  created() {
    console.log("A created");
  },
  beforeMount() {
    console.log("A beforeMount");
  },
  mounted() {
    console.log("A mounted");
  },
  beforeUpdate() {
    console.log("A beforeUpdate");
  },
  updated() {
    console.log("A updated");
  },
  activated() {
    console.log("A activated");
  },
  deactivated() {
    console.log("A deactivated");
  },
  beforeDestroy() {
    console.log("A beforeDestroy");
  },
  destroyed() {
    console.log("A destroyed");
  },
  errorCaptured() {
    console.log("A errorCaptured");
  }
};
</script>

<style></style>
