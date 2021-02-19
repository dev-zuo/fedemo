const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']); // 执行 ls -lh /usr 命令

ls.stdout.on('data', (data) => {
  // ls 产生的 terminal log 在这里 console
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  // 如果发生错误，错误从这里输出
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  // 执行完成后正常退出就是 0 
  console.log(`child process exited with code ${code}`);
});