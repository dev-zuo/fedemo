<template>
  <div class="z-form-item">
    <div class="label">{{ label }}:</div>
    <div class="input"><slot></slot></div>
    <div class="error" v-if="errMsg">{{ errMsg }}</div>
  </div>
</template>

<script>
import Schema from "async-validator";
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
    this.$on("validate", () => {
      this.validate();
    });
  },

  methods: {
    // promise验证
    validate() {
      let value = this.form.model[this.prop];
      let rules = this.form.rules[this.prop];
      console.log(this.prop, value, rules);

      let desc = { [this.prop]: rules };
      let schema = new Schema(desc);
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMsg = errors[0].message;
        } else {
          console.log("验证成功");
          this.errMsg = "";
        }
      });
    },
    //  rules: {
    //     name: [
    //       { required: true, message: "请输入姓名", trigger: "blur" },
    //       { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
    //     ],
    //     mobile: [{ required: true, message: "请输入电话", trigger: "change" }]
    //   }
    resetFields() {
      this.form.model[this.prop] = ""; // 重置值
      this.errMsg = ""; // 重置错误消息
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
  .error {
    margin-left: 10px;
    color: red;
  }
}
</style>
