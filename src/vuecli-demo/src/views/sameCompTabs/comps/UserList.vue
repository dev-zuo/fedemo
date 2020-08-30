<template>
  <div>
    <el-table
      :data="tableData"
      size="small"
      height="250"
      border
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column label="操作" width="180">
        <template v-slot:default="scope">
          <el-button type="primary" size="small" @click="openDetail(scope.row)">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { name: "张三", id: "zhangsan" },
        { name: "李四", id: "lisi" },
        { name: "王五", id: "wangwu" }
      ]
    };
  },
  methods: {
    openDetail(detail) {
      console.log(JSON.stringify(detail, null, 2));
      this.$emit("open-detail", detail);
    }
  }
};
</script>

<style></style>
