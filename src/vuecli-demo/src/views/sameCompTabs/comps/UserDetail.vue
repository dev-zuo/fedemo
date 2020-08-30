<template>
  <!-- 用户详情页 -->
  <div>
    <h1>用户详情页</h1>
    <div>userId: {{ detail.id }} userDetail: {{ userDetail }}</div>
  </div>
</template>

<script>
export default {
  props: ["detail"],

  data() {
    return {
      userDetail: {}
    };
  },

  created() {
    console.log("create");
    this.getDetailById();
  },

  methods: {
    getDetailById() {
      console.log("get detail by id", this.detail.id);
      this.userDetail = {
        id: this.detail.id
      };
    }
  },

  // 同组件之间的切换
  watch: {
    detail: {
      handler: function(val, oldVal) {
        console.log(
          "detail change",
          JSON.stringify(val),
          JSON.stringify(oldVal)
        );
        this.getDetailById();
      },
      deep: true
    }
  }
};
</script>

<style></style>
