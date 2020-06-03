<template>
  <div class="z-form-item">
    <div class="label">{{ label }}:</div>
    <div class="input"><slot></slot></div>
    <div class="error" v-if="errMsg">{{ errMsg }}</div>
  </div>
</template>

<script>
export default {
  inject: ["form"], // 从祖先组件接收searchForm传参
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
      console.log(this.form);
      let prop = this.prop;
      let value = this.form.model[prop];
      let rule = this.form.rules[prop];
      console.log(prop, value, rule);
      //  rules: {
      //     name: [
      //       { required: true, message: "请输入姓名", trigger: "blur" },
      //       { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
      //     ],
      //     mobile: [{ required: true, message: "请输入电话", trigger: "change" }]
      //   }
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
