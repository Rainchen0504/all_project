
const citySerice = require("../service/city.js")

//封装接口类
class CityController {
    async cityInfo(ctx,next){
        const result = await citySerice.city()
        ctx.body = result
    }
}

module.exports = new CityController()