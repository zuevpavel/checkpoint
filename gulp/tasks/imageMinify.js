const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = function imageMinify() {
  return gulp.src('src/img/**/*.{gif,png,jpg,svg,webp}')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 90,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 2 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img'))
}

