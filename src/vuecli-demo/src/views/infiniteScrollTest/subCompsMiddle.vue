<template>
  <div>
    title 额外的
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("sub middle mounted");
  },
  methods: {}
};
</script>
