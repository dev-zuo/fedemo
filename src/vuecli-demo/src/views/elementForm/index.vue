<template>
  <!-- /elementForm -->
  <div>
    <z-form v-model="searchForm">
      {{ searchForm }}
      <z-form-item label="姓名" prop="name">
        <z-input v-model="searchForm.name" placeholder="请输入姓名"></z-input>
      </z-form-item>
    </z-form>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      searchForm: this.searchForm
    };
  },
  components: {
    ZInput: () => import("./ZInput"),
    ZFormItem: () => import("./ZFormItem"),
    ZForm: () => import("./ZForm")
  },
  data() {
    return {
      name: "",
      searchForm: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    oninput(e) {
      console.log(e);
    }
  }
};
</script>

<style></style>
