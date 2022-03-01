const Koa = require("koa");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const path = require("path");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser"); 

const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser()); // 处理 post 请求参数

// 集成 session
app.keys = [`自定义安全字符串123`]; // 'some secret hurr'
const CONFIG = {
  key: "koa:sess" /** (string) cookie key (default is koa:sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 0.5 * 3600 * 1000, // 0.5h
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
};
app.use(session(CONFIG, app));

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

router.post("/login", async (ctx) => {
  let code = 0;
  let msg = "登录成功";
  let { password } = ctx.request.body;
  if (password === `888888`) {
    ctx.session.isLogin = true;
  } else {
    code = -1;
    msg = "密码错误";
  }
  ctx.body = {
    code,
    msg,
  };
});

router.post("/deploy", async (ctx) => {
  if (!ctx.session.isLogin) {
    ctx.body = {
      code: -2,
      msg: "未登录",
    };
    return;
  }
  // 有登录态，执行部署
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