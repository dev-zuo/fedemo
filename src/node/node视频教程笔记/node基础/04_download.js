
module.exports.downloadRepo = async function (repo, dest) {
  const { promisify } = require('util')
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`正在下载 ${repo} 到 ${dest} 目录...`).start()

  try {
    await download(repo, dest) // 下载
  } catch(e) {
    process.fail('失败')
  }

  process.succeed('下载成功!')
}