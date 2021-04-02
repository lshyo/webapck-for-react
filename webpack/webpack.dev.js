const {merge} = require('webpack-merge')
const webpack = require("webpack")
const common = require('./webpack.common.js')
module.exports =merge(common,{
    mode:"development",
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换插件
    ]
})
