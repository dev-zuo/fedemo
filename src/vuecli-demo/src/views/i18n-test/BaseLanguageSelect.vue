<template>
  <div class="demo-i18n">
    国际化测试：
    <el-select v-model="lang" @change="langChange">
      <el-option label="中文" value="zh-CN"></el-option>
      <el-option label="英语" value="en"></el-option>
    </el-select>
  </div>
</template>

<script>
// 将当前语言存到 localStorage 中的字段，要特殊，防止和其他项目冲突
const LANG_NAME = "demo-lang";
export default {
  data() {
    return {
      lang: "en"
    };
  },
  created() {
    // 从 localStorage 中读取默认语言，便于页面刷新后调试
    this.lang = localStorage.getItem(LANG_NAME) || "en";
    // 设置到 i18n
    this.$i18n.locale = this.lang;
  },
  methods: {
    // 语言切换后，设置到 i18n、localStorage
    langChange(value) {
      this.$i18n.locale = value;
      localStorage.setItem(LANG_NAME, value);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-i18n {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
