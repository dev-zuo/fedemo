
const ora = require('ora');
 
const spinner = ora('Loading unicorns').start();
 
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);


setTimeout(()=> {
  spinner.warn('这是一个警告....')
}, 3000)

setTimeout(()=> {
  spinner.fail('这是一个错误....')
}, 4000)

setTimeout(()=> {
  spinner.succeed('加载成功!')
}, 5000)