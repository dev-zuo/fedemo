<template>
  <!-- 父元素遮罩层-->
  <div class="msg-info-wrap" v-if="showMsg" @click="closeMsg">
    <!-- 消息弹窗 -->
    <div class="msg-info" @click.stop>
      <!-- 消息列表 -->
      <div v-for="msg in messages" :key="msg">{{ msg }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bus from "./EventBus";

export default {
  name: "MessageInfo",
  data() {
    return {
      showMsg: false,
      messages: []
    };
  },

  created() {
    Bus.$on("showMsg", msgList => {
      this.showMsg = true; // 显示消息
      this.messages = msgList; // 显示对应的消息列表
    });
    Bus.$on("closeMsg", this.closeMsg);
  },

  destroyed() {
    Bus.$off("showMsg");
    Bus.$off("closeMsg");
  },

  methods: {
    closeMsg() {
      this.showMsg = false;
      this.messages = [];
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
