<template>
  <div>
    <BaseLanguageSelect />
    <!-- {{ $t("name") }}, {{ $t("hello") }} -->
    {{ $t("user.name") }}, {{ $t("user.hello") }}

    {{ $t("base.year") }}, {{ $t("base.month") }}, {{ $t("base.time") }}

    <div v-for="item in $t('base.currencys')" :key="item">{{ item }}</div>

    当前币种：{{ currency | currencyText($i18n) }} {{ currency }}
    <el-select v-model="currency">
      <el-option
        v-for="(item, index) in $t('base.currencys')"
        :key="item"
        :label="item"
        :value="$t('base.currencyCodes')[index]"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  components: {
    BaseLanguageSelect: () => import("./BaseLanguageSelect")
  },
  filters: {
    currencyText: function(code, i18n) {
      // filter 中不能使用 this，需要传参数 this.$i18n
      // console.log(this); // undefined
      let { currencys, currencyCodes } = i18n.messages[i18n.locale].base;
      // 根据 code 找到对应的 index
      let index = currencyCodes.indexOf(code);
      return currencys[index];
    }
    // eslint-disable-next-line vue/no-reserved-keys
  },

  data() {
    return {
      currency: "",
      // eslint-disable-next-line vue/no-reserved-keys
      _test: "hello"
    };
  },

  created() {
    console.log("test", this._test);
  }
};
</script>

<style lang="less" scoped></style>
