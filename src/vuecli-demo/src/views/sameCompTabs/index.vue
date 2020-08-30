<template>
  <div class="same-comp-tabs">
    curTab: {{ curTab }} curDetail: {{ curUserDetail }}

    <el-tabs v-model="curTab" type="card" closable @tab-remove="tabRemove">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
      </el-tab-pane>
    </el-tabs>

    <keep-alive>
      <component
        :is="curComp"
        :detail="curUserDetail"
        @open-detail="openDetail"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  components: {
    UserList: () => import("./comps/UserList"),
    UserDetail: () => import("./comps/UserDetail")
  },

  computed: {
    curComp() {
      return this.curTab.split("|")[0];
    },
    curUserDetail() {
      for (let i = 0, len = this.tabList.length; i < len; i++) {
        let item = this.tabList[i];
        // console.log("item", item);
        if (item.name === this.curTab && item.name.includes("UserDetail")) {
          return item.detail;
        }
      }
      return {};
    }
  },

  data() {
    return {
      curTab: "UserList", // v-model的值为el-tab-pane name值
      tabList: [
        {
          title: "用户列表",
          name: "UserList"
        }
      ]
    };
  },

  methods: {
    openDetail(detail) {
      console.log("open detail in index.vue", JSON.stringify(detail));

      let name = `UserDetail|${detail.id}`;
      this.curTab = name;

      // 之前打开过
      if (this.tabList.some(item => item.name === name)) {
        return;
      }

      this.tabList.push({
        title: "用户详情" + detail.name,
        name,
        detail
      });
    },

    tabRemove(name) {
      console.log("remove name", name);
      if (["UserList"].includes(name)) {
        return;
      }
      this.tabList = this.tabList.filter(item => item.name !== name);
      this.curTab = "UserList";
    }
  }
};
</script>

<style lang="less" scoped>
.same-comp-tabs {
  padding: 20px;
}
</style>
