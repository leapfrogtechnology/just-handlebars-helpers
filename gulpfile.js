// Build for Browsers
var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var shimify = require('browserify-shimify');

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

// Transpile ES6 to ES5
gulp.task('transpile', ['lint'], function() {
    return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

// Bundle things up
gulp.task('bundle', ['transpile'], function() {
    var config = {
        entries: './index.js',
        standalone: 'H',
        debug: true
    };

    var shimifyConfig = {
        'sprintf-js': '{sprintf: window.sprintf, vsprintf: window.vsprintf}',
        'moment': 'window.moment',
        'currencyformatter.js': 'window.OSREC.CurrencyFormatter',
        'handlebars': 'window.Handlebars'
    };

    return browserify(config)
        .transform(shimify.configure(shimifyConfig))
        .bundle()
        .pipe(source('h.js'))
        .pipe(gulp.dest('dist'));
});


// Uglify
gulp.task('uglify', ['bundle'], function() {
    return gulp.src('dist/h.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'transpile', 'bundle', 'uglify']);
