// testExecShell/runShell.js
const { spawn } = require('child_process');
const child = spawn('sh', ['testExecShell/deploy.sh']); // 执行 sh deploy.sh 命令

child.stdout.on('data', (data) => {
  // shell 执行的 log 在这里搜集，可以通过接口返回给前端
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  // 如果发生错误，错误从这里输出
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  // 执行完成后正常退出就是 0 
  console.log(`child process exited with code ${code}`);
});