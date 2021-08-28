<template>
  <div id="app">
    <!-- <user-selection v-model="showUserSelection" @confirm="confirm"/>
    <el-button type="primary" @click="showUserSelection = true">打开弹窗</el-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <footer class="footer">
      <div>
        <span>Copyright © 2020-2021 zuoguoqing.com.</span>
        <a href="http://beian.miit.gov.cn/" target="_blank">
          鄂ICP备16014741号-4
        </a>
      </div>
      <!-- {{ $router.history.current.name }} -->
      <div>
        <el-button
          type="primary"
          size="mini"
          @click="
            $router.history.current.name !== 'Home'
              ? $router.replace({ name: 'Home' })
              : ''
          "
        >
          返回首页
        </el-button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {
    // UserSelection: () => import("../src/components/user-selection/src/main")
  },
  data() {
    return {
      showUserSelection: false
    };
  },
  created() {
    console.log(this.$router);
  },
  methods: {
    confirm(value) {
      console.log(value);
    }
  }
};
</script>
<style>
@import url("./assets/css/common.css");
/* @ */
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  position: fixed;
  bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  padding: 0 9%;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}
</style>
