const path = require('path')
const ora = require('ora') //实现node.js 命令行环境的 loading效果， 和显示各种状态的图标等
const rm = require('rimraf') //以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const chalk = require('chalk') //命令行彩色输出
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

// 构建全量压缩包
let building = ora('building...')
building.start()
rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
  if (err) throw (err)
  webpack(config, function (err, stats) {
    if (err) throw (err)
    building.stop()
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('Build complete.\n'))
  })
})