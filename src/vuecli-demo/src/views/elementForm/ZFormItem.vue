<template>
  <div class="z-form-item">
    <div class="label">{{ label }}:</div>
    <div class="input"><slot></slot></div>
    <div class="error" v-if="errMsg">{{ errMsg }}</div>
  </div>
</template>

<script>
import schema from "async-validator";
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
    // promise验证
    validatePromise() {
      console.log(this.form);
      let prop = this.prop;
      let value = this.form.model[prop];
      let rules = this.form.rules[prop];
      console.log(prop, value, rules);

      let desc = { [prop]: rules };
      let validator = new schema(desc);
      return validator.validate({ [prop]: value }, this.handleErrors);
    },

    handleErrors(errors, fields) {
      return function() {
        console.log("校验失败", errors, fields);
        this.errMsg = errors[0].message;
      };
    },

    async validate() {
      console.log(this.form);
      let prop = this.prop;
      let value = this.form.model[prop];
      let rules = this.form.rules[prop];
      console.log(prop, value, rules);

      let desc = { [prop]: rules };
      let validator = new schema(desc);
      validator
        .validate({ [prop]: value })
        .then(() => {})
        .catch(() => {
          return this.handleErrors;
        });
      // try {
      //   await this.validatePromise();
      //   console.log("校验成功");
      // } catch (e) {
      //   console.log(e);
      //   console.log("校验失败", e);
      //   let errors = "";
      //   // let fields = "";
      //   return () => {
      //     this.errMsg = errors[0].message;
      //   };
      // }
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
  .error {
    margin-left: 10px;
    color: red;
  }
}
</style>
