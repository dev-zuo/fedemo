<template>
  <div>
    <!-- 
      1. <z-input v-model="searchForm.name"></z-input> 等价于
      <z-input :value="searchForm.name" @input="searchForm.name = $event"></z-input>
      虽然等价，区别是什么呢？v-model在输入法组合过程中不会更新值，而@input这种是会更新的，之前有总结过
      2. v-bind="$attrs" 接收z-input上的除props接收外设置的其它属性，比如placeholder等
    -->
    <input :value="value" @input="oninput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    oninput(e) {
      this.$emit("input", e.target.value); // 双向绑定
      this.$parent.$emit("validate"); // 触发父组件的校验
    }
  }
};
</script>

<style></style>
