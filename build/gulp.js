const gulp = require('gulp')

// 引入兼容CMD AMD 的 插件
const umd = require('gulp-umd')

// 改个名字还要插件 666
const rename = require('gulp-rename')

// 删除文件为了配合流 也要引入
const clean = require('gulp-clean')

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


// 配置主线任务
gulp.task('default', () => {
  return gulp.src('./src/index.js')
      .pipe(umd())
      .pipe(rename('gulp_index.js'))
      .pipe(gulp.dest('./lib'))
})

gulp.start(() => {
  console.log(arguments)
})
