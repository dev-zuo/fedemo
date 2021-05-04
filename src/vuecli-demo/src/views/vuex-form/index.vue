<template>
  <div>
    <div>{{ obj }}</div>
    <div>{{ objCopy }}</div>
    <el-form>
      <el-input v-model="objCopy.message" />
      <el-button @click="confirm">提交</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      objCopy: {
        message: ""
      }
    };
  },

  computed: {
    ...mapState(["obj"])
  },

  watch: {
    obj: {
      handler() {
        this.initData();
      },
      deep: true
    }
  },

  created() {
    this.initData();
  },

  methods: {
    initData() {
      Object.assign(this.objCopy, this.obj);
    },
    confirm() {
      this.$store.commit("updateObj", JSON.parse(JSON.stringify(this.objCopy)));
    }
  }
};
</script>

<style lang="scss" scoped></style>
