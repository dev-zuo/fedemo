<template>
  <div>
    <button @click="toggleMsg">Toggle msg</button>
    <message-info />
  </div>
</template>

<script>
export default {
  methods: {
    toggleMsg() {
      this.$showMsg(["sdfsdfsdf"]);
    }
  }
};
</script>

<style></style>
