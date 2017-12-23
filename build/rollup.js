const rollup = require('rollup')

// 没意思没意思 还要多引入两个插件 不然他只处理 index.js 不会根据 index.js里面的 import require 再去引入
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
//
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

// 声明webpack配置  帮你处理了绝对位置
const inputOptions = {
  input: 'src/index.js',
  plugins: [
    nodeResolve({
      browser: true,
      jsnext: true,
      preferBuiltins: false
    }),
    commonjs()
  ]
}

const outputOptions = {
  file: 'lib/rollup_index.js',
  format: 'umd',
  name: 'arsenal',
  banner: `/**
  dao ci yi you
 */`
}

// 申明 一个 build
async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

// 申明一个watch 站岗者
const watcher = rollup.watch();

//  声明浮夸的loading
const spinner = ora('building for production...')

// 这个可以 用来配置 热更新的dev   https://rollupjs.org/#rollup-watch
watcher.on('event', event => {
  if (event.code === 'START') { spinner.start(); return }

  if (event.code === 'END') {
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: Go and look at your output'
    ))

    watcher.close();
    return
  }

  if ('ERROR,FATAL'.indexOf(event.code) > -1) {
      console.log(chalk.red('  Build failed with errors.\n'))
      watcher.close();
      return
  }
  // event.code can be one of:
  //   START        — the watcher is (re)starting
  //   BUNDLE_START — building an individual bundle
  //   BUNDLE_END   — finished building a bundle
  //   END          — finished building all bundles
  //   ERROR        — encountered an error while bundling  等等  ERROR\FATAL 不给个说法吗
  //   FATAL        — encountered an unrecoverable error
});



// 先把我要上的茅坑上的人赶走, 实际上不删除也可以 强行覆盖了， 如果是打包一个整体项目 /dist 最好移除
rm(outPath + '/rollup_index.js', err => {

  // 没赶紧，它可能正在open
  if (err) throw err

  build()
})
