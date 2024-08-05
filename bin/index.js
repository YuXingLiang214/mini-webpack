const path = require('path')
const config = require(path.resolve('webpack.config.js'))
const WebpackCompiler = require('../lib/WebpackCompiler.js')

const WebpackCompiler = new WebpackCompiler(config)
WebpackCompiler.run()
