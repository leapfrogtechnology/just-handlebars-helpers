// Build for Browsers
var gulp = require('gulp');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('compile', function() {
    return browserify({ entries: './src/H.js', debug: true })
        .transform(babelify, {presets: ['es2015']})
        .bundle()
        .pipe(source('h.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['compile'], function() {
    gulp.src('dist/h.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compile', 'uglify']);

gulp.task('watch', function() {
    gulp.watch('./src/**/*.js', ['default']);
});
