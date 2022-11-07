const Router = require("koa-router")
const { cityInfo } = require("../middleware/city.js");

const useRouter = new Router({prefix:"/city"})

//获取全国城市接口
useRouter.get("/", cityInfo)

module.exports = useRouter