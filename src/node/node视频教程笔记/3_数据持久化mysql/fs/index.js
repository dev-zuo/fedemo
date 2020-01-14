
const fs = require('fs')

// 获取某个key的值
function get(key) {
  fs.readFile('./db.json', (err, data) => {
    const json = data ? JSON.parse(data) : {}
    console.log(json[key])
  })
}

// 设置键值对值
function set(key, value) {
  fs.readFile('./db.json', (err, data) => {
    // 如果文件为空，则设置空对象ss
    const json = data ? JSON.parse(data) : {}
    json[key] = value
    fs.writeFile('./db.json', JSON.stringify(json), err => {
      err && console.log(err)
      console.log('写入成功')
    })
  })
}

// 命令行操作支持
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', input => {
  const [op, key, value] = input.split(' ')

  if (op === 'get') {
    get(key)
  } else if(op === 'set') {
    set(key, value)
  } else if (op === 'quit') {
    rl.close()
  } else {
    console.log('没有该操作')
  }
})

rl.on('close', () => {
  console.log('程序结束')
  process.exit(0)
})