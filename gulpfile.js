// Build for Browsers
const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const shimify = require('browserify-shimify');

/**
 * Check for linter errors.
 */
function lint() {
  const sourceFiles = ['**/*.js', '!tests/misc.js', '!lib/**', '!dist/**', '!coverage/**', '!node_modules/**'];

  return gulp
    .src(sourceFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

/**
 * Transpile source code using babel.
 */
function transpile() {
  return gulp
    .src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('lib'));
}

/**
 * Bundle files using browserify.
 */
function bundle() {
  const config = {
    entries: './index.js',
    standalone: 'H'
  };

  const shimifyConfig = {
    'sprintf-js': '{sprintf: window.sprintf, vsprintf: window.vsprintf}',
    moment: 'window.moment',
    'currencyformatter.js': 'window.OSREC.CurrencyFormatter',
    handlebars: 'window.Handlebars'
  };

  return browserify(config)
    .transform(shimify.configure(shimifyConfig))
    .bundle()
    .pipe(source('h.js'))
    .pipe(gulp.dest('dist'));
}

/**
 * Uglify build.
 */
function uglifyDist() {
  return gulp
    .src('dist/h.js')
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

exports.lint = lint;
exports.bundle = bundle;
exports.transpile = transpile;

exports.default = gulp.series(lint, transpile, bundle, uglifyDist);
