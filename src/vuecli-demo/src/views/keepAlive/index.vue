<template>
  <div>
    我是主页面
    <ul>
      <li><router-link to="/keepAlive/a">A组件页面</router-link></li>
      <li><router-link to="/keepAlive/b">B组件页面</router-link></li>
      <li><router-link to="/keepAlive/c">C组件页面</router-link></li>
    </ul>
    include{{ include }}
    <!-- 为什么这样写不生效 -->
    <!-- <div v-if="$route.meta.keepAlive">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div> -->
    <keep-alive :include="include">
      <!-- <keep-alive> -->
      <!-- <keep-alive include="PageB"> -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    $route.meta.include {{ $route.meta.include }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      include: "PageB"
    };
  },
  created() {
    setTimeout(() => {
      this.$route.meta.include = "test";
      console.log("this.$route.meta.include", "test");
    }, 3000);
  }
};
</script>

<style></style>
