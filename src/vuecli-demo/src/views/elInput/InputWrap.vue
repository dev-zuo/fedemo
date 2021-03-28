<template>
  <div>
    <slot></slot>
    <p v-if="errMsg">{{ errMsg }}</p>
  </div>
</template>

<script>
export default {
  props: ["errMsg"],
  data() {}
};
</script>

<style lang="less" scoped></style>
