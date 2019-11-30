const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new StyleLintPlugin()
    ]
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('src', path.resolve(__dirname, 'src'))
  }
}
