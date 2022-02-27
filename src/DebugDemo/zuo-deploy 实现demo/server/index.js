const Koa = require("koa");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const path = require("path");

const app = new Koa();
const router = new KoaRouter();

router.post("/deploy", async (ctx) => {
  // 执行部署脚本
  let execFunc = () => {};
  try {
    let res =  await execFunc();
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
app.listen(7777, () => console.log(`服务监听 ${7777} 端口`));