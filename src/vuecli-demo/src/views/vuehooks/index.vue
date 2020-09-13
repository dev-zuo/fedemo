<template>
  <div>
    <div>当前组件{{ curComp }}</div>
    <el-radio v-model="curComp" label="compA">组件A</el-radio>
    <el-radio v-model="curComp" label="compB">组件B</el-radio>
    <el-button @click="gotoOtherPage" size="mini">离开当前页面</el-button>
    <div>
      <!-- 这里用来打开或关闭keep-alive -->
      <!-- <keep-alive>
        <component :is="curComp"></component>
      </keep-alive> -->
      <comp-a></comp-a>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    compA: () => import("./A")
    // compB: () => import("./B")
  },
  data() {
    return {
      curComp: "compA"
    };
  },
  methods: {
    gotoOtherPage() {
      this.$router.push("/echarts");
    }
  },
  beforeCreate() {
    console.log("index beforeCreate");
  },
  created() {
    console.log("index created");
  },
  beforeMount() {
    console.log("index beforeMount");
  },
  mounted() {
    console.log("index mounted");
  },
  beforeUpdate() {
    console.log("index beforeUpdate");
  },
  updated() {
    console.log("index updated");
  },
  activated() {
    console.log("index activated");
  },
  deactivated() {
    console.log("index deactivated");
  },
  beforeDestroy() {
    console.log("index beforeDestroy");
  },
  destroyed() {
    console.log("index destroyed");
  },
  errorCaptured() {
    console.log("index errorCaptured");
  }
};
</script>

<style></style>
