const app = require("./app")

const config = require("./app/config")

app.listen(config.APP_PORT, () => {
    console.log(`服务启动成功:端口号${config.APP_PORT}`);
})
