/*
 * @Author: xwp xuweip0@chanjet.com
 * @Date: 2023-04-14 13:52:07
 * @LastEditors: xwp xuweip0@chanjet.com
 * @LastEditTime: 2023-04-14 14:03:14
 * @FilePath: /easyornoty-ui/gulpfile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const minifyCSS = require('gulp-minify-css');

gulp.task('sass', async function () {
  return gulp
    .src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});
