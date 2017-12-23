/*   需要说明
* process   node 全局变量， 提供有关信息，控制当前 Node.js 进程
*/

const webpack = require('webpack')

// 实现node.js 命令行环境的 loading效果 浮夸哈哈哈
const ora = require('ora')

// 删除某个大兄弟
const rm = require('rimraf')

// 提供了一些用于处理文件路径的工具 node自带
const path = require('path')

// 命令行颜色console  浮夸 + 1
const chalk = require('chalk')

// 输出茅坑必须是绝对路径
const outPath = path.resolve(__dirname, '../lib')

// 声明webpack配置
const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: outPath,
    filename: 'webpack_index.js',
    // 来个 umd 模式 跨平台， AMD AND CMD
    libraryTarget: 'umd',
    library: 'arsenal'
  }
}

//  声明浮夸的loading， 并且启动他
const spinner = ora('building for production...')
spinner.start()

// 先把我要上的茅坑上的人赶走, 实际上不删除也可以 强行覆盖了， 如果是打包一个整体项目 /dist 最好移除
rm(outPath + '/webpack_index.js', err => {

  // 没赶紧，它可能正在open
  if (err) throw err

  // 没人了， 快启动 ！
  webpack(config, function (err, stats) {

    // 结束浮夸的loading
    spinner.stop()

    // 我靠
    if (err) throw err

    // 输出 webpack 产出结果 到 终端
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    // 如果产出不太好 告诉你 不好
    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))

      // 好了 这个进程别用了 退了退了
      process.exit(1)
    }

    // 报喜
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: Go and look at your output'
    ))
  })
})
