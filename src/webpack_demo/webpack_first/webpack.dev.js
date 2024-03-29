
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: {
    'index': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
    // filename: '[name]_[chunkhash:8].js'
  },
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 文件名，[name]为资源的名称，[ext]为资源的后缀
            name: '[name].[ext]',
            outputPath: 'images/',
            // 我这里图片为26k，就调到了限制，一般建议 2048, 2KB
            // 图片太大会影响主包，还是设置为2048
            limit: 2048 // 单位字节，小于40KB的jpg，图片自动转base64，可以减少一次http请求
          }
        }
      },
      // 增加对css的处理
      {
        test: /\.less$/,
        // 注意css loader有执行顺序，从又向左执行
        // use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
        // use: [
        //   'style-loader', 'css-loader', 'less-loader', 
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: [
        //           require('autoprefixer')({
        //               overrideBrowserslist: ['last 2 versions', '>1%']
        //           })
        //         ]
        //       }
        //     }
        //   }
        // ]
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 2 versions', '>1%']
                })
              ]
            }
          }
        }]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: "file-loader"
      },
    ]
  },
  // watch: true, // 默认false,不不开启
  // // 配合watch使用, 只有watch为true才会生效
  // watchOptions: {
  //   // 设置当某些文件变更时，不触发打包，值为⽂件或者⽬录，⽀持正则
  //   ignored: /node_modules/,
  //   // 监听到文件变化后延时多少秒再执行webpack，默认300ms, 
  //   aggregateTimeout: 300,
  //   // 轮询间隔：通过不停的轮询系统，看⽂件是否有变化，默认每秒轮询1次
  //   poll: 1000 // ms
  // }
  plugins: [
    new HtmlWebpackPlugin({
      title: '测试webpack生成htmllll',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: "[name]_[contenthash:8].css" 
      filename: "[name].css"
    })
    // new webpack.HotModuleReplacementPlugin()
  ],
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
  }
}

