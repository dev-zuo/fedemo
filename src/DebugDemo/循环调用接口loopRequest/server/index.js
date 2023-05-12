const Koa = require("koa");
const KoaStatic = require("koa-static");
const KoaRouter = require("koa-router");
const path = require("path");

const app = new Koa();
const router = new KoaRouter();

let state = "pending";
router.get("/user", async (ctx) => {
  setTimeout(() => {
    state = "fail";
  }, 4000); // 改为10000可以测超时
  try {
    // 接口时延，如果为2s可以很明显看到v2.js (setinterval)多次触发回调函数情况
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    await new Promise((resolve) => setTimeout(resolve, 300));
    ctx.body = {
      code: 0,
      data: {
        state,
        // state: "success",
        // state: 'fail',
        // state: 'pending'
      },
      msg: "ok",
      // msg: res, // 人工制造错误
    };
  } catch (e) {
    ctx.body = {
      code: -1,
      msg: e.message,
    };
  }
});
app.use(new KoaStatic(path.resolve(__dirname, "../fe/")));
app.use(router.routes()).use(router.allowedMethods());
app.listen(7777, () => console.log("服务监听 7777 端口"));

// 作者：dev_zuo
// 链接: https://juejin.cn/post/7070921715492061214
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
