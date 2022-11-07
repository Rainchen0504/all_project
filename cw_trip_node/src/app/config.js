const detenv = require("dotenv")

detenv.config()

module.exports = {
    APP_PORT,
    APP_HOST
} = process.env