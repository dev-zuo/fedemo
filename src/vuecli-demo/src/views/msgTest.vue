<template>
  <div>
    <button @click="showMsg">Show msg</button>
    <message-info>
      <!-- slot -->
      <button @click="closeMsg">手动关闭 message</button>
    </message-info>
  </div>
</template>

<script>
export default {
  methods: {
    // 显示弹窗
    showMsg() {
      this.$showMsg(["消息1", "消息2"]);
    },

    // 手动关闭弹窗
    closeMsg() {
      this.$closeMsg();
    }
  }
};
</script>
<style></style>
