<template>
  <div id="app">
    <!-- <user-selection v-model="showUserSelection" @confirm="confirm"/>
    <el-button type="primary" @click="showUserSelection = true">打开弹窗</el-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
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
  methods: {
    confirm(value) {
      console.log(value);
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
