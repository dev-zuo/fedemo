<template>
  <!-- el-form 模拟-->
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  // 将z-form元素上的model以及rules属性的值传递到z-form-item，用于校验，显示错误信息
  provide() {
    return {
      form: {
        model: this.value,
        rules: this.rules
      }
    };
  },
  props: {
    value: {
      type: Object
    },
    rules: {
      type: Object
    }
  }
};
</script>

<style></style>
