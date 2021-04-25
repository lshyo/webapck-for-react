const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const devWebpackConfig = require('./webpack.dev.js')

const devOptions = {
    contentBase:"../dist",
    hot:true,
    host:"localhost",
    open:true
}

webpackDevServer.addDevServerEntrypoints(devWebpackConfig,devOptions)

const compiler = webpack(devWebpackConfig)

const server = new webpackDevServer(compiler,devOptions)

server.listen("8000","localhost",()=>{
    console.log('dev server listening on port 8000');
})
