const path = require('path')
const {merge} = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// console.log("自定义变量",process.env.env_config)
// console.log("全局变量process.env",process.env)

const plugins = []
if(process.env.analyzer === 'analyzer'){
    plugins.push(new BundleAnalyzerPlugin())
}
module.exports = merge(common, {
    mode:"production",
    // devtool:"cheap-module-eval-source-map",
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: "[name].[chunkhash].js",
        chunkFilename:"[name].[chunkhash].async.js"
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
            chunkFilename:"[contenthash].css",// contenthash 适用于css，主要是css变动了，js 文件hash 不会跟着变动。
        }),
        ...plugins
    ]
})