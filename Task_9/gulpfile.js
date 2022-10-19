var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('mytask', function () {
     return gulp.src('scr/*/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});