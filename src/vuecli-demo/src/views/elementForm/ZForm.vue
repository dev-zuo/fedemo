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
  },
  methods: {
    // submit时的校验
    async validate(cb) {
      // this.$children 所有form-item vue实例 获取实例的this.prop属性，有值则校验
      let tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate);

      try {
        await Promise.all(tasks);
        cb(true);
      } catch (e) {
        cb(false);
      }
    },

    resetFields() {
      console.log(this.value, this.rules);
    }
  }
};
</script>

<style></style>
