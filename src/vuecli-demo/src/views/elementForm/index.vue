<template>
  <!-- /elementForm -->
  <div>
    <z-form v-model="form" :rules="rules">
      {{ form }}
      <z-form-item label="姓名" prop="name">
        <z-input v-model="form.name" placeholder="请输入姓名"></z-input>
      </z-form-item>
      <z-form-item label="电话" prop="mobile">
        <z-input v-model="form.mobile" placeholder="请输入电话"></z-input>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
export default {
  components: {
    ZInput: () => import("./ZInput"),
    ZFormItem: () => import("./ZFormItem"),
    ZForm: () => import("./ZForm")
  },
  data() {
    return {
      form: {
        name: "",
        mobile: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        mobile: [{ required: true, message: "请输入电话", trigger: "change" }]
      }
    };
  },
  methods: {}
};
</script>

<style></style>
