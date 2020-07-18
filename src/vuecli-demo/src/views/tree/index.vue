<template>
  <div>
    <z-tree :data="treeData"></z-tree>
  </div>
</template>

<script>
export default {
  components: {
    ZTree: () => import("./ZTree")
  },
  data() {
    return {
      treeData: [
        {
          label: "冰箱"
        },
        {
          label: "水果",
          list: [
            { label: "苹果" },
            { label: "梨子" },
            { label: "葡萄" },
            {
              label: "喜欢的水果",
              list: [{ label: "水果1" }, { label: "水果2" }, { label: "水果3" }]
            },
            { label: "香蕉" }
          ]
        },
        {
          label: "茶叶",
          list: [
            { label: "铁观音" },
            { label: "西湖龙井" },
            { label: "毛尖" },
            {
              label: "红茶",
              list: [{ label: "红茶1" }, { label: "红茶2" }, { label: "红茶3" }]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
