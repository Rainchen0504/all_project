const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const useRoutes = require("../router")

const app = new Koa()


app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
})

app.useRoutes = useRoutes

app.use(bodyParser())//中间件解析器
app.useRoutes()

module.exports = app
