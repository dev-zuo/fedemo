<template>
  <div>
    <div>当前显示组件{{ curComp }}</div>
    <el-radio v-model="curComp" label="compA">组件A</el-radio>
    <el-radio v-model="curComp" label="compB">组件B</el-radio>
    <el-button @click="gotoOtherPage" size="mini">离开当前页面</el-button>
    <div>
      <comp-a v-show="curComp === 'compA'"></comp-a>
      <comp-b v-show="curComp === 'compB'"></comp-b>
    </div>
    <!-- <div>
      <comp-a v-if="curComp === 'compA'"></comp-a>
      <comp-b v-if="curComp === 'compB'"></comp-b>
    </div> -->
  </div>
</template>

<script>
export default {
  components: {
    compA: () => import("../vuehooks/A"),
    compB: () => import("../vuehooks/B")
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
