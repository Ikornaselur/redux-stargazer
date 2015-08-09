var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var react = require('gulp-react');

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(plumber())
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('lint', function () {
  gulp.src('src/js/**/*.js')
    .pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter('default'), {verbose: true});
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['browserify', 'copy', 'lint']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});
