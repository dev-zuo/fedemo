const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')
const KoaRouter = require("koa-router");
const { PassThrough } = require('stream');

const app = new Koa()
const router = new KoaRouter();
router.get("/open-ai/sendMsg", async (ctx) => {
    ctx.type = "text/event-stream"
    ctx.set({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
    })
    const steamData = new PassThrough()
    ctx.body = steamData
    let i = 1;
    let timer = setInterval(() =>{
        if (i === 21) {
            steamData.write(`data: [DONE]\n\n`)
            clearInterval(timer)
        } else {
            steamData.write(`data: ${i}\n\n`)
        }
        i++;
    }, 500)
})
app.use(new KoaStatic(path.resolve(__dirname, './fe')))
app.use(router.routes()).use(router.allowedMethods());
app.listen(8086, () => console.log('服务开启于 8086 端口'))