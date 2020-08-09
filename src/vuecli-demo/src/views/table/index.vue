<template>
  <div class="table-test">
    <el-table
      :data="dataList"
      border
      size="mini"
      :span-method="arraySpanMethod"
      :header-cell-style="{ background: '#f7f7f7' }"
    >
      <el-table-column
        v-for="item in ['a', 'b', 'c', 'd']"
        :key="item"
        :prop="item"
        :label="item"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    this.dataList = [1, 2, 3, 4].map(() => {
      return { a: "1", b: "2", c: "3", d: 4 };
    });
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex);
      // 只是遍历表格td内容，不包含th表头
      // 对第一列，进行合并列
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          // 第一列，第一行，默认
          return {
            rowspan: 1,
            colspan: 1
          };
        } else if (rowIndex === 1) {
          // 第一列，第二行，合并，占this.dataList.length - 1行
          return {
            rowspan: this.dataList.length - 1,
            colspan: 1
          };
        } else if (rowIndex >= 2) {
          // 第一列，剩余行，为空
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.table-test {
  width: 500px;
  margin: 100px;
  // border处理
  // 去掉表头单元格th右边框
  /deep/ .el-table th:not(:first-child) {
    border-right: 0;
  }
  // 去掉表格内容单元格td的右侧边框、底部边框
  /deep/ .el-table td {
    border-right: 0;
    border-bottom: 0;
  }
  // 为第一行td增加底部border
  /deep/ .el-table__row:first-child td {
    border-bottom: 1px solid #eaeaea;
  }
  // 为第一行第一列td增加右侧border
  /deep/ .el-table__row:first-child td:first-child,
  // 为第二行（合并后的）第一列td设置右侧border
  /deep/ .el-table__row:nth-child(2) td:first-child {
    border-right: 1px solid #eaeaea;
  }
}
</style>
