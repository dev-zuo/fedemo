module.exports = {
  configureWebpack: {
    externals: {
      // 需要使用外部引入的包名：包名
      echarts: "echarts",
      vue: "Vue",
      // element: "ElementUI" 可以打包成功，但chunk-vendors.js里面会打包element
      "element-ui": "ELEMENT"
    }
  }
};
