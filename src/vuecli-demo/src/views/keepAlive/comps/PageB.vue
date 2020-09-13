<template>
  <div>
    我是B组件页面
    <el-input v-model="input" placeholder="请输入B组件内容"></el-input>
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "PageB",
  data() {
    return {
      input: "",
      radio: ""
    };
  },
  created() {
    console.log("created");
  },
  // beforeRouteEnter(to, from, next) {
  //   next();
  // },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, from);

    if (to.name === "keepAliveC") {
      // 如果跳转的页面C组件，缓存页面数据
      this.$parent.include = "PageB";
    } else {
      // 如果跳转的页面不是C组件，不缓存数据
      this.$parent.include = "";
    }
    next();
  }
};
</script>

<style></style>
