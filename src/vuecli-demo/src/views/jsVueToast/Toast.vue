<template>
  <div class="my-toast">
    <div :class="type">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "error"
    }
  }
};
</script>

<style lang="less" scoped>
.my-toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border: 1px solid #ccc;
  text-align: center;
  .error {
    color: red;
  }
  .success {
    color: green;
  }
}
</style>
