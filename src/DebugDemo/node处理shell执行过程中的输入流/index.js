
const { spawn, exec } = require('child_process');
// const ls = spawn('sudo', ['ls']);
// const ls = spawn('ls');

exec('sudo ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

// setTimeout(() => {
//   console.log('exec')
//   ls.stdin.write('abc\r\n')
// }, 3000)

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


