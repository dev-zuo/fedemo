<template>
  <div class="msg-info-wrap" v-if="showMsg" @click="closeMsg">
    <div class="msg-info" @click.stop>
      <div v-for="msg in messages" :key="msg">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageInfo",
  data() {
    return {
      showMsg: true,
      messages: ["消息1", "消息2"]
    };
  },

  methods: {
    closeMsg() {
      this.showMsg = false;
    }
  }
};
</script>

<style lang="less" scoped>
.msg-info-wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  .msg-info {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 50%;
    padding: 20px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: #fff;
  }
}
</style>
