const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', () => {
  return gulp
    .src('../src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest('../lib/style'));
});

gulp.task('default', ['compile']);
