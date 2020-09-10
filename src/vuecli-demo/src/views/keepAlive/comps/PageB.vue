<template>
  <div>
    我是B组件

    <el-input v-model="input" placeholder="请输入B组件内容"></el-input>

    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "pageB",
  data() {
    return {
      input: "",
      radio: "3"
    };
  },
  created() {
    console.log("created");
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // console.log(to, from);
    if (from.path === "keepAliveA") {
      to.meta.include = undefined;
      next();
    } else {
      next(vm => {
        vm.$forceUpdate();
      });
    }
    // if (from.path === "keepAliveA") {
    //   to.meta.include = undefined;
    // } else {
    //   // to.meta.include = "";
    // }
    // if (from.path !== "keepAliveC") {
    //   next(vm => {
    //     vm.input = "";
    //   });
    // }
    // 进来时，加上keep-alive
    // if (to.meta.include === "") {
    //   to.meta.include = undefined;
    // }
    // next(vm => {
    //   // 开始缓存
    //   console.log(vm, "121");
    //   to.meta.include = undefined;
    // });
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to, from);

    if (to.name === "keepAliveC") {
      // 如果跳转的页面非C组件，去掉keepAlive
      from.meta.include = undefined;
    } else {
      // 如果跳转的页面是C组件，加上keepAlive
      from.meta.include = "";
      this.name = "pageB" + new Date();
    }
    next();
  }
};
</script>

<style></style>
