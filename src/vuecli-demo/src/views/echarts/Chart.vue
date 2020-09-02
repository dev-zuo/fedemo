<template>
  <div class="chart" ref="echart"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import { debounce } from "lodash-es";
export default {
  name: "Chart",
  props: {
    options: {
      type: Object,
      required: false
    },
    autoResize: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {};
  },
  created() {
    console.log("created");
    // 监听 options 改动，改动后重绘数据
    this.$watch(
      "options",
      () => {
        this.refresh();
      },
      { deep: true }
    );
  },
  mounted() {
    console.log("mounted", this.autoResize);
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    init() {
      console.log(this.$el);
      let chart = echarts.init(this.$refs["echart"]);
      this.chart = chart;
      chart.setOption(this.options || {});
      // 当元素宽高改变时resize执行重绘
      if (this.autoResize) {
        this.__resizeHanlder = debounce(
          () => {
            chart.resize();
          },
          100,
          { leading: true }
        );
        addListener(this.$el, this.__resizeHanlder);
      }
    },
    destroy() {
      // 销毁实例，防止 柱状图 动态切换到 饼图 时，柱状图部分属性依旧留存的问题
      this.chart.dispose();
      this.chart = null;
      this.autoResize && removeListener(this.$el, this.__resizeHanlder);
    },
    refresh() {
      this.destroy();
      this.init();
    }
  }
};
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
}
</style>
