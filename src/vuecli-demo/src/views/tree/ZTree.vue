<template>
  <!-- z-tree递归组件实现 -->
  <div>
    <ul>
      <li v-for="item in data" :key="item.label">
        {{ item.label }}
        <i class="iconfont el-icon-arrow-right" v-if="item.list"></i>
        <z-tree v-if="item.list" :data="item.list"></z-tree>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // components: {
  //   ZTree: () => import("./ZTree")
  // },
  name: "ZTree",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
// ul {
//   list-style-type: none;
// }
</style>
