const fs = require("fs");

//readdirSync同步返回结果
//readdir异步回调返回结果
const useRoutes = function () {
  fs.readdirSync("./src/router").forEach((item) => {
    if (item === "index.js") return;
    const router = require(`./${item}`);
    //启动路由
    this.use(router.routes());
    this.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
