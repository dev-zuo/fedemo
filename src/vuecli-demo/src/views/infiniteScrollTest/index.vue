<template>
  <div>
    <!-- <sub-comps></sub-comps> -->
    <!-- <div v-infinite-scroll="loadMore" infinite-scroll-distance="10">
      测试
    </div> -->
    <sub-comps-middle>
      <div v-infinite-scroll="loadMore" infinite-scroll-distance="10">
        测试
      </div>
    </sub-comps-middle>
  </div>
</template>

<script>
export default {
  components: {
    // SubComps: () => import('./subComps'),
    SubCompsMiddle: () => import("./subCompsMiddle")
  },
  data() {
    return {};
  },
  mounted() {
    console.log("index mounted");
  },
  methods: {
    loadMore() {
      console.log("触发了loadMore");
    }
  }
};
</script>

<style lang="less" scoped></style>
