const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd()); // 处理返回当前 Node 进程执行的目录
module.exports  = {
    appSrc: path.resolve(__dirname, '../src'),
    resolveApp: p => path.resolve(appDirectory, p),
    appDirectory
}
