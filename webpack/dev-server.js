const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.dev.js')

const devOptions = {
    contentBase:"../dist",
    hot:true,
    host:"localhost",
    open:true
}

webpackDevServer.addDevServerEntrypoints(config,devOptions)

const compiler = webpack(config)

const server = new webpackDevServer(compiler,devOptions)

server.listen("8000","localhost",()=>{
    console.log('dev server listening on port 8000');
})
