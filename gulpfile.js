// Build for Browsers
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const shimify = require('browserify-shimify');

// Lint using eslint
gulp.task('lint', function () {
  const sourceFiles = [
    '**/*.js',
    '!lib/**',
    '!dist/**',
    '!coverage/**',
    '!node_modules/**'
  ];

  return gulp.src(sourceFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Transpile ES6 to ES5
gulp.task('transpile', ['lint'], function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

// Bundle things up
gulp.task('bundle', ['transpile'], function () {
  const config = {
    entries: './index.js',
    standalone: 'H',
    debug: true
  };

  const shimifyConfig = {
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
gulp.task('uglify', ['bundle'], function () {
  return gulp.src('dist/h.js')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'transpile', 'bundle', 'uglify']);
