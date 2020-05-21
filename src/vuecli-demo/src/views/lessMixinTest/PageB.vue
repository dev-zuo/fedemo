<template>
  <div class="container">
    <div class="top"></div>
    <div class="main">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("./common/base.less");
.container-mixin();
// 引入公共样式后，再修改部分公共的样式
.container {
  .top {
    background: red;
  }
}
</style>
