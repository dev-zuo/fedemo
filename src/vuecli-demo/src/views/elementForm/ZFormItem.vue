<template>
  <div class="z-form-item">
    <div class="label">{{ label }}:</div>
    <div class="input"><slot></slot></div>
    <div class="error" v-if="errMsg">{{ errMsg }}</div>
  </div>
</template>

<script>
export default {
  inject: ["searchForm"], // 从祖先组件接收searchForm传参
  props: {
    label: {
      // 对应的标签名
      type: String,
      required: true,
      default: ""
    },
    prop: {
      // 对应的字段名
      type: String
    }
  },

  data() {
    return {
      errMsg: "" // 错误信息
    };
  },

  mounted() {
    // 当前组件监听validate事件，子组件通过$parent.$emit触发
    this.$on("validate", this.validate);
  },

  methods: {
    validate() {
      console.log("start validate", this.searchForm[this.prop]);
    }
  }
};
</script>

<style lang="less" scoped>
.z-form-item {
  display: flex;
  .label {
    margin-right: 15px;
  }
}
</style>
