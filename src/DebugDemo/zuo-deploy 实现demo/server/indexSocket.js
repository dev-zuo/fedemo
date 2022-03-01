const Koa = require("koa");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const path = require("path");

const app = new Koa();
const router = new KoaRouter();

// 开启 socket 服务
let socketList = [];
const server = require("http").Server(app.callback());
const socketIo = require("socket.io")(server);
socketIo.on("connection", (socket) => {
  socketList.push(socket);
  console.log("a user connected");
});

const rumCmd = () => {
  return new Promise((resolve, reject) => {
    const { spawn } = require('child_process');
    const child = spawn('sh', ['deploy.sh']); // 执行 sh deploy.sh 命令

    let msg = ''
    child.stdout.on('data', (data) => {
      // shell 执行的 log 在这里搜集，可以通过接口返回给前端
      console.log(`stdout: ${data}`);
      socketIo.emit('deploy-log', `${data}`)
      // 普通接口仅能返回一次，需要把 log 都搜集到一次，在 end 时 返回给前端
      msg += `${data}`
    });

    child.stdout.on('end', (data) => {
      resolve(msg) // 执行完毕后，接口 resolve，返回给前端
    });

    child.stderr.on('data', (data) => {
      // 如果发生错误，错误从这里输出
      console.error(`stderr: ${data}`);
      socketIo.emit('deploy-log', `${data}`)
      msg += `${data}`
    });

    child.on('close', (code) => {
      // 执行完成后正常退出就是 0 
      console.log(`child process exited with code ${code}`);
    });
  })
}

router.post("/deploy", async (ctx) => {
  try {
    let res =  await rumCmd(); // 执行部署脚本
    ctx.body = {
      code: 0,
      msg: res,
    };
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message,
    };
  }
});

app.use(new KoaStatic(path.resolve(__dirname, "../frontend")));
app.use(router.routes()).use(router.allowedMethods());
server.listen(7777, () => console.log(`服务监听 ${7777} 端口`));