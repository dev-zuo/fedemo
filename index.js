import * as fs from 'fs/promises';

async function init() {
  let result = []
  try {
    let res = await readFolder('src', result)
    console.log('res', res)
  } catch(e) {
    console.log(e)
  }
}

init()

async function readFolder(curPath, result) {
  return new Promise(async (resove, reject) => {
    if (curPath.includes('node_modules')) {
      return resove(result)
    }

    try {
      let files = await fs.readdir(curPath, {
        withFileTypes: true // 不返回文件数组，返回文件 <fs.Dirent> 对象
      })
      console.log(files);
  
      if (files && Array.isArray(files)) {
        files.forEach(async item => {
          console.log(item.name,item.isDirectory())
          // 隐藏文件不处理
          if (item.name.startsWith('.') || item.name.startsWith('@')) {
            return
          }
          if (!result[curPath]) {
            result[curPath] = []
          }
          if (item.isDirectory()) {
            result[curPath].push(item.name)
            console.log('result', result)
            return await readFolder(`${curPath}/${item.name}`, result)
          }
        })
      }
  
    } catch (error) {
      console.error('there was an error:', error.message);
      reject(error)
    }
  })
}
