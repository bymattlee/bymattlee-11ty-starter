/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Scripts
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var addSrc = require('gulp-add-src'),
  babel = require('rollup-plugin-babel'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  commonjs = require('rollup-plugin-commonjs'),
  config = require('../config'),
  eslint = require('gulp-eslint'),
  gif = require('gulp-if'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  header = require('gulp-header'),
  json = require('rollup-plugin-json'),
  modernizr = require('gulp-modernizr'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  rollup = require('gulp-better-rollup'),
  size = require('gulp-size'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  isProduction = !!gutil.env.production,
  isStaging = !!gutil.env.staging,
  isDevelopment = !isProduction && !isStaging;

// Create a custom Modernizr build by crawling the .scss and .js files
gulp.task('scripts:modernizr', function() {

  return gulp.src(config.scripts.modernizr.src)
    .pipe(plumber())
    .pipe(modernizr(config.scripts.modernizr.options))
    .pipe(concat('modernizr.js'))
    .pipe(gulp.dest(config.scripts.modernizrDest));

});

// Lint files with ESLint
gulp.task('scripts:lint', function() {

  return gulp.src(config.scripts.watchSrc)
    .pipe(eslint())
    .pipe(eslint.format());

});

/*
** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
** -- Bundle all files
** -- Minify all files
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Reload browser
*/
gulp.task('scripts:main', function() {

  return gulp.src(config.scripts.src)
    .pipe(plumber())
    .pipe(addSrc.prepend(config.scripts.modernizrFileSrc))
    .pipe(gif(isDevelopment, sourcemaps.init()))
      .pipe(rollup({
        plugins: [
          babel({
            exclude: 'node_modules/**'
          }),
          nodeResolve(),
          commonjs(),
          json()
        ]
      }, 'umd'))
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(header(config.fileHeader.join('\n')))
      .pipe(size({
        title: 'Compressed File Size:',
        showFiles: true
      }))
    .pipe(gif(isDevelopment, sourcemaps.write('./')))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream());

});

// Scripts task
gulp.task('scripts', gulp.series('scripts:modernizr', 'scripts:lint', 'scripts:main'));
gulp.task('scripts:watch', gulp.series('scripts:lint', 'scripts:main'));
