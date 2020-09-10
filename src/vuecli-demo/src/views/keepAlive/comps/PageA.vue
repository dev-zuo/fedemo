<template>
  <div>
    我是A组件

    <el-input v-model="input" placeholder="请输入A组件内容"></el-input>

    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      radio: "3"
    };
  }
};
</script>

<style></style>
