const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('browser', function() {
  browserSync.init({
      server: {
          baseDir: "./app"
      }
  });
});


gulp.task('sass', function () {
  return gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'));
});
   
  

gulp.task('default', function () {
  return gulp.src('./app/css/*.css')
    .pipe(concat('all.css'))
    .pipe(postcss([ autoprefixer() ]))
    .pipe(csso())
    .pipe(rename({
      basename: "style",
      suffix: '.min'
    }))
    .pipe(gulp.dest('./app/css'));
});


