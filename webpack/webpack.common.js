const path = require('path')
const fs =require('fs')
const webpack = require('webpack')
const paths = require('./paths.js')

// config
const {entrys , htmlPlugins} = require("./entry")


// plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const devMode= process.env.NODE_ENV === 'development';

module.exports={
    entry:{
        ...entrys
    },
    module:{
        noParse: /jquery/,// 不解析x中的依赖库，忽略大型的 library 可以提高构建性能

        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: [paths.appSrc],
                use: {
                    loader: 'babel-loader', // 配置可以统一在 babel.config.json中写。两边的配置都是会生效。
                }
            },
            {
                test:/\.css$/,
                use:[
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,// 用了 MiniCssExtractPlugin 就不能再用style-loader
                    "css-loader"
                ]
            },
            {
                test:/\.less$/,
                include: [paths.appSrc],
                use:[
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.(png|svg|gif|jpg)$/,
                use:['file-loader']
            },
            {
                test:/\.(ts|tsx)$/,
                use:["ts-loader"],
                include: [paths.appSrc],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmlPlugins,
        // new HtmlWebpackPlugin({
        //     title:"从零开始的webpck配置",
        //     template: path.resolve(__dirname,"./template/index.html"),
        //     filename: "test/index.html",
        //     loading:{
        //         css:`<style type="text/css">${fs.readFileSync(path.join(__dirname,'./template/loading.less'))}</style>`,
        //         html:fs.readFileSync(path.join(__dirname,'./template/loading.html'))
        //     }
        // }),

        new webpack.ProvidePlugin({
            $:"jquery",
            jquery: 'jquery',
            jQuery: 'jquery'
        }),

    ],
    resolve: {
        alias: {
            '@': paths.appSrc
        },
        extensions:[".js",".jsx",".css",".json",".ts",".tsx"],// 自动识别后缀名
    },
    // 优化
    optimization: {
        runtimeChunk: "single", // 会创建一个在所有生成 chunk 之间共享的运行时文件 ,相当于 {name:"runtime"}
        moduleIds:"hashed",
        // chunkIds:"named",
        splitChunks: { // 对于动态导入模块，使用通用分块策略
            cacheGroups: {
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendor",
                    chunks: "all"
                }
            }
        },
        // webpack v4+ 会默认压缩你的代码。如果想要用其他压缩插件，可以在minimizer 对默认压缩进行覆盖
        minimizer:[
            new UglifyJSPlugin() //注：打包压缩带有es6代码的会报错，需要babel进行转换
        ]
    }
}
