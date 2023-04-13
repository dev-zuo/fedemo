const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')
const KoaRouter = require("koa-router");
const { PassThrough } = require('stream');

const app = new Koa()
const router = new KoaRouter();

// 响应给前端 ContentType: text/event-stream
// https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events#%E4%BB%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8E%A5%E5%8F%97%E4%BA%8B%E4%BB%B6
// Koa SSE 实现 https://stackoverflow.com/questions/53295738/koa-sse-connection-reconnecting
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