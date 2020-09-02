<template>
  <div>
    echarts
    <div id="main" style="width: 600px;height:400px;"></div>

    <div id="round" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
import round from "./round";
export default {
  data() {
    return {};
  },

  mounted() {
    this.$echarts.init(document.querySelector("#round")).setOption(round);
    // var myChart = this.$echarts.init(document.getElementById("main"));

    // // 指定图表的配置项和数据
    // var option = {
    //   title: {
    //     text: ""
    //   },
    //   tooltip: {},
    //   // legend: {
    //   //   data: ["销量"]
    //   // },
    //   xAxis: {
    //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "销量",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20]
    //     }
    //   ]
    // };

    // // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);

    // this.$echarts.init(document.getElementById("main")).setOption({
    //   series: {
    //     type: "pie",
    //     data: [
    //       { name: "A", value: 1212 },
    //       { name: "B", value: 2323 },
    //       { name: "C", value: 1919 }
    //     ]
    //   }
    // });
    this.$echarts.init(document.getElementById("main")).setOption({
      title: { text: "Line Chart" },
      tooltip: {},
      toolbox: {
        feature: {
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          },
          restore: {}
        }
      },
      xAxis: {},
      yAxis: {},
      series: [
        {
          type: "line",
          smooth: true,
          data: [
            [12, 5],
            [24, 20],
            [36, 36],
            [48, 10],
            [60, 10],
            [72, 20]
          ]
        }
      ]
    });
  },

  methods: {}
};
</script>

<style></style>
