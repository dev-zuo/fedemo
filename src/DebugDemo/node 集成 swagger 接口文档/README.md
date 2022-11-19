# sudo 提示输入命令怎么放到 web 端交互

- stdin.write 和 sudo ls 提示输入密码 不在一个输入缓冲区
- 提供前端样式，并不提供 shell 功能 <https://github.com/xtermjs/xterm.js>

- 看起来不错 web shell，但依赖 python3 + c++，安装环境比较麻烦（mac下需要安装 xcode-select --install, windows 需要安装 Visual Studio，不然 npm install 都安装不了）
  - <https://github.com/chjj/tty.js>
  - <https://github.com/Gottox/node-webterm>

```js
echo '456\r\n' | sudo pwd -s
```

耗时：3h
