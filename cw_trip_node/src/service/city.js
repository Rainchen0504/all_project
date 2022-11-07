const axios = require("axios")

class cityService {
    async city(){
        const result = await axios.get("https://touch.qunar.com/intl/api/hotel/city/gj")
        return result.data
    }
}

module.exports = new cityService()