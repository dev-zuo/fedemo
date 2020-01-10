

const fs = require('fs')
const path = require('path')

// console.log(path, '*' + path.resolve)

function static(dirPath = './pbulic') {
  return async (ctx, next) => {
    // 校验是否是static目录
    if (ctx.url.startsWith('/public')) {
      // 将当前路径和用户指定的路径合并为一个绝对路径
      let url = path.resolve(__dirname, dirPath)
      console.log(url)
      // /Users/kevin/Desktop/feclone/fedemo/src/node/node视频教程笔记/1_koa/静态文件服务中间件/public
      console.log(ctx.url) // /public/2sdf/323
      let filePath = url + ctx.url.replace('/public', '')
      try {
        let stat = fs.statSync(filePath) // https://nodejs.org/docs/latest/api/fs.html#fs_fs_statsync_path_options
        if (stat.isDirectory()) {
          // 如果是目录，列出文件
          let dir = fs.readdirSync(filePath)
          console.log(dir)
          if (dir.length === 0) {
            ctx.body = '目录为空'
            return
          }
          let htmlArr = ['<div style="margin:30px;">']
          dir.forEach(filename => {
            htmlArr.push(
              filename.includes('.') ? 
              `<p><a style="color:black" href="${ctx.url}/${filename}">${filename}</a></p>` : 
              `<p><a href="${ctx.url}/${filename}">${filename}</a></p>`
            )
          })
          htmlArr.push('</di>')
          ctx.body = htmlArr.join('')
        } else {
          // 如果是文件 
          let content = fs.readFileSync(filePath)
          console.log(content)
          ctx.body = content.toString()
        }
      } catch(e) {
        console.error(e)
        // ctx.body = ctx.url + '文件或目录不存在'
        ctx.body = 'Not Found'
      }
    } else {
      // 非静态资源，执行下一个中间件
      await next()
    }
  }
}

module.exports = static