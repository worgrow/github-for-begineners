'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('scss', function(done) {
    return gulp.src('scss/**/*.scss')
        //{outputStyle: 'compressed'}
        .pipe(sass())
        .pipe(gulp.dest('css'));
});
// @media (max-width: 1200px)
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('scss'));
});


// gulp.task('compress', function() {
//     gulp.src('src/main/resources/static/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('src/main/resources/static/js/dist'));
// });
