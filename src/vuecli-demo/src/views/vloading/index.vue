<template>
  <!-- v-loading 指令实现 -->
  <div>
    v-loading={{ loading }}指令实现
    <el-button @click="swithLoading">swithLoading</el-button>
    <div v-loading="loading" class="div">
      测试
    </div>

    <div v-zloading="loading" class="div">
      测试
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  methods: {
    swithLoading() {
      this.loading = !this.loading;
    }
  }
};
</script>

<style lang="less" scoped>
.div {
  height: 100px;
  width: 200px;
  margin: 10px 0 0 100px;
  border: 1px solid #ccc;
}
</style>
