<template>
  <div>
    <div>当前组件{{ activeName }}</div>
    <el-button @click="gotoOtherPage" size="mini">离开当前页面</el-button>

    <!-- 不使用el-tab-pane slot的逻辑，仅用tab控制顶部tab栏 -->
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组件A" name="compA"></el-tab-pane>
      <el-tab-pane label="组件B" name="compB"></el-tab-pane>
    </el-tabs>
    <div>
      <keep-alive>
        <component :is="activeName"></component>
      </keep-alive>
    </div> -->

    <!-- 使用el-tab-pane slot -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="组件A" name="compA" :lazy="false">
        <keep-alive>
          <comp-a></comp-a>
          <!-- <comp-a v-if="activeName === 'compA'"></comp-a> -->
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="组件B" name="compB" :lazy="false">
        <keep-alive>
          <comp-b></comp-b>
          <!-- <comp-b v-if="activeName === 'compB'"></comp-b> -->
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {
    compA: () => import("./A"),
    compB: () => import("./B")
  },
  data() {
    return {
      activeName: "compA"
    };
  },
  methods: {
    gotoOtherPage() {
      this.$router.push("/echarts");
    },
    handleClick() {
      // console.log(tab, event);
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
