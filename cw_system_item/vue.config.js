const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const { resolve } = require('path')

module.exports = {
  outputDir: './build',
  devServer: {},
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
