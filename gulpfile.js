var gulp    = require('gulp');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function () {
    return gulp.src('./app/scripts/*.js')
              .pipe(jshint())
              .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass' , function() {
  gulp.src('app/styles/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/styles'));
});

gulp.task('connect', function() {
  connect.server({
    root: ['app', 'bower_components'],
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/scripts/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/scripts/*.js'], ['lint', 'js']);
  gulp.watch(['./app/styles/*.scss'], ['sass','html']);
});

gulp.task('default', ['connect', 'watch']);
