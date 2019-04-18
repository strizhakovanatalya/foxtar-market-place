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
   
  

gulp.task('allCss', function () { 
  return gulp.src('./app/css/*.css')
      .pipe(concat('allstyle.css'))
      .pipe(postcss([ autoprefixer() ]))
      .pipe(csso())
      .pipe(rename({
          suffix: '.min'
        }))
      .pipe(gulp.dest('./app/css'));
});


gulp.task('minCss', gulp.series('sass', 'allCss'))



gulp.task('watch', function(){
  gulp.watch('./app/scss/custom/*.scss', gulp.series('minCss'));
  gulp.watch("app/*.html").on('change', browserSync.reload);
  gulp.watch("app/css/*.css").on('change', browserSync.reload);

})

gulp.task('default', gulp.series('minCss', gulp.parallel('browser', 'watch')))




