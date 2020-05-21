<template>
  <!-- session新开tab后失效的问题 -->
  <div style="margin: 100px 30%">
    <div>alreadyCheck: {{ alreadyCheck }}</div>

    <div v-if="!alreadyCheck">
      首次进入，没有点同意，不能查看内容，用于协议确定。每次登录都需要重新提示
      <button @click="confirmHandle">同意</button>
    </div>
    <div v-else>已经点击了同意，可以查看内容</div>
  </div>
</template>

<script>
import NewTabSessionShare from "./newTabSessionShare";
export default {
  data() {
    return {
      alreadyCheck: false
    };
  },
  created() {
    this.alreadyCheck = sessionStorage.getItem("TEST_alreadyCheck") === "true";
    NewTabSessionShare.init(() => {
      this.alreadyCheck =
        sessionStorage.getItem("TEST_alreadyCheck") === "true";
    });
  },
  methods: {
    // 点击了同意
    confirmHandle() {
      this.alreadyCheck = true;
      sessionStorage.setItem("TEST_alreadyCheck", "true"); // sessionStorage一般存字符串
    }
  }
};
</script>

<style></style>
