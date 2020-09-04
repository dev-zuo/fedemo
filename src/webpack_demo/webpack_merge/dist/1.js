const a = {optimization: {
  splitChunks: {
    chunks: 'async',//对同步 initial，异步 async，所有的模块 有效 all
      minSize: 30000,//最⼩小尺⼨寸，当模块⼤大于30kb
        maxSize: 0,//对模块进⾏行行⼆二次分割时使⽤用，不不推荐使⽤用 minChunks: 1,//打包⽣生成的chunk⽂文件最少有⼏几个chunk引⽤用了了这
          个模块
    maxAsyncRequests: 5,//最⼤大异步请求数，默认5 maxInitialRequests: 3,//最⼤大初始化请求书，⼊入⼝口⽂文件同步请
      求，默认3
    automaticNameDelimiter: '~',//打包分割符号
      name: true,//打包后的名称，除了了布尔值，还可以接收⼀一个函数
        function
          cacheGroups: {//缓存组
            vendors: {
              test: / [\\/]node_modules[\\/]/, name: "vendor", // 要缓存的 分隔出来的 chunk 名称 priority: -10//缓存组优先级 数字越⼤大，优先级越⾼高
}, other: {
    开课吧web全栈架构师

    "all" | chunk,
      chunks: "initial", // 必须三选⼀一: "initial" | "async"(默认就是async)
        test: /react|lodash/, // 正则规则验证，如果符合就提取
          name: "other", minSize: 30000, minChunks: 1,
}, commons: {
    test: /(react|react-dom)/, name: "react_vendors", chunks: "all"
  }, default: {
    minChunks: 2,
      priority: -20,
        reuseExistingChunk: true//可设置是否重⽤用该chunk
  }
}
} }
}