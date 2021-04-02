const glob = require('glob');
const path = require('path');
const fs = require('fs');

const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 入口
const DEFAULT_ENTRY_GLOB = './src/page/*/index.{js,ts,tsx}';
const DEFAULT_HTML_GLOB = './src/page/*/index.{html,ejs}';
const mainjss = glob.sync(DEFAULT_ENTRY_GLOB, paths.appDirectory);
const htmls = glob.sync(DEFAULT_HTML_GLOB, paths.appDirectory);

const entrys = mainjss.reduce((memo, filePath, index) => {
    const key = filePath.split('/')[3] || `page_${index}`; // eslint-disable-line

    memo[key] = paths.resolveApp(filePath); // eslint-disable-line
    return memo;
}, {});

const htmlPlugins = htmls.map((filePath, index) => {
    const pageName = filePath.split('/')[3];
    const filename = `${pageName}.html`;

    return new HtmlWebpackPlugin({
        filename,
        template: filePath,
        inject: true,
        chunks: [pageName, 'commons', 'vendors', 'polyfills', 'runtime'],
        multihtmlCache: true,
        loading:{
            css:`<style type="text/css">${fs.readFileSync(path.join(__dirname,'./template/loading.less'))}</style>`,
            html:fs.readFileSync(path.join(__dirname,'./template/loading.html'))
        }
    });
});


module.exports = {
    entrys,
    htmlPlugins
}
