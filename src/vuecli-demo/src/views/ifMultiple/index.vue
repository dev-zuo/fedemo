<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  },
  watch: {
    userInfo: {
      handler(value) {
        if (value.name) {
          let indexMap = this.arrList.reduce(() => {
            console.log("test1");
          });

          this.list.forEach(item => {
            if (indexMap[item.index]) {
              console.log("test2");
            }
          });
        }
      },
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
