'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

// IMAGES OPTIMIZATIONS
gulp.task('imgmin', function() {
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'));
});
