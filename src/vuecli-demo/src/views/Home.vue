<template>
  <div class="home">
    <!-- <h3>Vue测试demo</h3> -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ul>
      <li v-for="item in linkList" :key="item.link" @click="jumpTo(item)">
        <a :href="`/#/${item.link}`">{{ item.desc }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      linkList: [
        // { desc: "infiniteScroll触底刷新，无线滚动", link: "infiniteScroll" },
        { desc: "lessPageA", link: "lessPageA" },
        { desc: "lessPageB", link: "lessPageB" },
        { desc: "sessionTest", link: "sessionTest" },
        { desc: "elementForm", link: "elementForm" },
        { desc: "echarts", link: "echarts" },
        { desc: "elementTabs", link: "elementTabs" },
        { desc: "vuehooks", link: "vuehooks" },
        { desc: "componentAndIs", link: "componentAndIs" },
        { desc: "vloading", link: "vloading" },
        { desc: "jsVueToast", link: "jsVueToast" },
        { desc: "tree", link: "tree" },
        { desc: "table", link: "table" },
        { desc: "textarea_trim", link: "textarea_trim" },
        { desc: "provide", link: "provide" },
        { desc: "sameCompTabs", link: "sameCompTabs" },
        { desc: "keepAlive", link: "keepAlive" },
        // { desc: "subcomp_samename", link: "subcomp_samename" },
        { desc: "at", link: "at" }
        // { desc: "", link: "" },
        // { desc: "", link: "" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home {
  padding: 30px;
}
img {
  width: 60px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    padding-right: 10px;
    padding-bottom: 10px;
  }
}
</style>
