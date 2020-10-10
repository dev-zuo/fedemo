<template>
  <div>
    <el-input
      type="textarea"
      v-model.trim="text"
      rows="5"
      style="width:200px;margin:100px;"
    ></el-input>

    只能输入正整数: {{ peopleCount }}
    <el-input
      v-model="peopleCount"
      @keyup.native="keyUp"
      style="width:200px;margin:50px;"
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      peopleCount: ""
    };
  },
  methods: {
    keyUp(e) {
      // 非数字全部转换为''
      e.target.value = e.target.value.replace(/[^\d]/g, "");
      // 开始的0处理
      if (e.target.value.startsWith("0")) {
        e.target.value = "";
      }
      this.peopleCount = e.target.value;
      return e.target.value;
    }
  }
};
</script>

<style></style>
