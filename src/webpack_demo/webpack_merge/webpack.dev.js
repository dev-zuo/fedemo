
const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.js')

let devConfig = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      // 增加对css的处理
      {
        test: /\.less$/,
        // 注意css loader有执行顺序，从又向左执行
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        // options: {
        //   presets: ["@babel/preset-env"],
        //   plugins: ["@babel/plugin-transform-runtime"]
        // }
      }
    ]
  },
  devServer: {
    contentBase: './dist', // 指定服务器的静态资源目录
    open: true, // 自动再浏览器打开
    port: 8081, // 端口
    hot: true,
    //即便便HMR不不⽣生效，浏览器器也不不⾃自动刷新，就开启hotOnly 
    // hotOnly: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9002"
      }
    }
  },
  optimization: {
    // tree shaking
    usedExports: true,
    // 自动代码分割
    splitChunks: {
      chunks: "all", // 默认⽀持异步，我们使用all 
    }
  }
}

module.exports = merge(commonConfig, devConfig)