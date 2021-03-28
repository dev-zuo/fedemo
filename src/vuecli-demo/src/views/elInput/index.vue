<template>
  <div>
    <el-input v-model="name1" @input="nameChange" @blur="nameChange"></el-input>
    <div v-if="showInput">
      <p>InputInfo</p>
      <InputWrap :err-msg="errMsg">
        name:
        <el-input
          v-model="name2"
          @input="nameChange"
          @blur="nameChange"
        ></el-input>
        <!-- @input.native="nameChange" -->
      </InputWrap>
    </div>
    <el-button @click="switchInfo">切换</el-button>
  </div>
</template>

<script>
export default {
  components: {
    InputWrap: () => import("./InputWrap")
  },

  data() {
    return {
      showInput: false,
      name1: "",
      name2: "",
      errMsg: ""
    };
  },

  methods: {
    switchInfo() {
      this.showInput = !this.showInput;
    },

    nameChange(event) {
      console.log("name change", this.name, event);
      if (this.name === "123") {
        this.errMsg = "信息错误";
      } else {
        this.errMsg = "";
      }
    }
  }
};
</script>

<style lang="less" scoped></style>
