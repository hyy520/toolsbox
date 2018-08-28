const path = require('path')
const fs = require('fs')
const ora = require('ora')  //实现node.js 命令行环境的 loading效果， 和显示各种状态的图标等
const rm = require('rimraf') //以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const copy = require('copy')
const chalk = require('chalk') //命令行彩色输出  在这里未起作用,  需执行FORCE_COLOR=1 npm run build-copy才能生效

const rootPath = path.resolve(__dirname, '../')

// 替换模块文件
let copying = ora('copying...')
copying.start()
rm('*.js', err => {  //删除原文件
  if (err) throw (err)
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))  //读取拷贝源 文件列表
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, rootPath, function (err, files) { //循环遍历相应文件夹下的文件并拷贝到根目录
      if (err) throw err;
      if (index === folderList.length - 1) {
        console.log(chalk.cyan('  Copy complete.\n'))
        copying.stop()
      }
    })
  })
})