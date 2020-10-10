<template>
  <div>
    <vue-tribute :options="options">
      <div
        class="content-editable"
        contenteditable="true"
        placeholder="@..."
      ></div>
    </vue-tribute>
  </div>
</template>

<script>
import VueTribute from "vue-tribute";

export default {
  components: {
    VueTribute
  },
  data() {
    return {
      options: {
        options: {
          trigger: "@",
          values: [
            { key: "Collin Henderson", value: "syropian" },
            { key: "Sarah Drasner", value: "sarah_edo" },
            { key: "Evan You", value: "youyuxi" },
            { key: "Adam Wathan", value: "adamwathan" }
          ],
          positionMenu: true
          // menuContainer: document.querySelector(".menu-container")
        }
      }
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
