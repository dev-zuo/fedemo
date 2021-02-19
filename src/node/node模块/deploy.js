const { spawn } = require('child_process');
const child = spawn('sh', ['./deploy.sh']); // sh ./deploy.sh 运行脚本

child.stdout.on('data', (data) => {
  // 运行命令产生的 terminal log 在这里 console
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