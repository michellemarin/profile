'use strict'

var gulp  = require('gulp');
var sass  = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function () {
    gulp.src('app/styles/*.scss')
        .pipe(watch('app/styles/*.scss', function(files) {
            return files
                    .pipe(sass())
                    .pipe(gulp.dest('app/styles'));
        }))
});



gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
