var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': data.defaultTemplate({html: '<div class="container"><h1>Hello World!</h1></div>'})
    }
  }
})

config.module.loaders.push({
  test: /\.html$/,
  loader: 'mustache?minify'
})

module.exports = config
