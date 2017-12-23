const gulp = require('gulp')

//引入 优化task的异步任务
const runSequence = require('run-sequence');

// 删除某个大兄弟
const clean = require('gulp-clean')

// AMD CMD
const umd = require('gulp-umd')

// 提供了一些用于处理文件路径的工具 node自带
const path = require('path')

// 命令行颜色console  浮夸 + 1
const chalk = require('chalk')

// 腾空新家
gulp.task('clean', () => {
  return gulp.src(['./lib/*', '!./lib/*.js'])
    .pipe(clean())
})

// 获取搬家任务
gulp.task('move', ['clean'], () => {
  return gulp.src('./src/*/*.js')
    .pipe(umd())
    .pipe(gulp.dest('./lib'))
})

gulp.task('default', () => {
  console.log(chalk.yellow('  Gulp begin'))
  runSequence('move', () => {
    console.log(chalk.cyan('  Gulp complete.\n'))
    console.log(chalk.yellow(
      '  Tip: Go and look at your output'
    ))
  })

})
gulp.start()
