#!/usr/bin/env node

const { program } = require("commander");
const prompts = require('prompts');

program.version('0.1.1');

program
  .command("start")
  .description("开启部署监听服务") // description + action 可防止查找 command拼接文件
  .action(async () => {
    const response = await prompts([
      {
      type: 'number',
      name: 'port',
      initial: 7777,
      message: '请指定部署服务监听端口：',
      validate: value => ((value !== '') && (value < 3000 || value > 10000)) ? `端口号必须在 3000 - 10000 之间` : true
      },
      {
        type: 'password',
        name: 'password',
        initial: '888888',
        message: '请设置登录密码',
        validate: value => (value.length < 6) ? `密码需要 6 位以上` : true
      }
    ]);
    console.log(response); // => { value: 24 }
  });

program.parse();
