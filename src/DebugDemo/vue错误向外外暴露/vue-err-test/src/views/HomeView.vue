<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="testError" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    testError() {
      let a = `{a:1`;
      JSON.parse(a); // v-on handler
    },
  },
};
</script>
