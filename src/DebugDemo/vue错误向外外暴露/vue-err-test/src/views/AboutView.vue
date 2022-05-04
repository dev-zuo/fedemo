<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img alt="Vue logo2" src="https://baidu.com/xxx.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    Promise.reject("this is error about view");
    let a = 2;
    console.log(a.c()); // mounted hook
  },
};
</script>
