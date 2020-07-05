<template>
  <div>
    <el-button @click="showToast">打开toast</el-button>
  </div>
</template>

<script>
import Toast from "./Toast.vue";
import create from "./create";
export default {
  data() {
    return {};
  },
  methods: {
    showToast() {
      console.log("show toast");
      let toast = create(Toast, {
        show: true,
        message: "我是错误信息",
        type: "error"
      });
      console.log(toast);
      setTimeout(() => {
        toast.remove();
      }, 2000);
    }
  }
};
</script>

<style></style>
