// Build for Browsers
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// Lint using eslint
gulp.task('lint', function() {
    return gulp.src([
            '**/*.js',
            '!lib/**',
            '!dist/**',
            '!coverage/**',
            '!node_modules/**'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Compile ES6
gulp.task('compile', ['lint'], function() {
    return browserify({ entries: './src/H.js', standalone: 'H', debug: true })
        .transform(babelify)
        .bundle()
        .pipe(source('h.js'))
        .pipe(gulp.dest('dist'));
});

// Build for NPM
gulp.task('just-transpile', function() {
    gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

// Uglify
gulp.task('uglify', ['compile'], function() {
    return gulp.src('dist/h.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'compile', 'just-transpile', 'uglify']);
