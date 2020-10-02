<template>
  <div>
    <!-- <vue-tribute :options="options">
      <input type="text" placeholder="@..." @tribute-no-match="noMatchFound" />
    </vue-tribute> -->
  </div>
</template>

<script>
// import VueTribute from "vue-tribute";

export default {
  components: {
    // VueTribute
  },
  data() {
    return {
      // options: {
      //   values: [
      //     { key: "red", value: "#FF0000" },
      //     { key: "green", value: "#00FF00" }
      //   ]
      // }
    };
  },
  methods: {
    noMatchFound() {
      console.log("xxx");
    }
  }
};
</script>

<style></style>
