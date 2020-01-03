/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Markup
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
  config = require('../config'),
  data = require('gulp-data'),
  gif = require('gulp-if'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  header = require('gulp-header'),
  htmlmin = require('gulp-htmlmin'),
  nunjucksRender = require('gulp-nunjucks-render'),
  plumber = require('gulp-plumber'),
  prettyUrl = require('gulp-pretty-url'),
  size = require('gulp-size'),
  isProduction = !!gutil.env.production,
  isStaging = !!gutil.env.staging,
  isDevelopment = !isProduction && !isStaging,
  siteUrl;

/*
** -- Render site files based on nunjucks templates and site data
** -- Set {{ home_url }} variable based on environment (development/staging/production)
**    This is used for setting the absolute URL for all assets in the html files
** -- If in production mode:
**    -- Minify all html files
**    -- Print the sizes of all html files
** -- Create pretty URLs from all html files
** -- Reload browser
*/
gulp.task('markup', function() {

  var timestamp = Math.floor(Date.now() / 1000);

  if (isProduction) {
    siteUrl = config.productionUrl;
  } else if (isStaging) {
    siteUrl = config.stagingUrl;
  } else {
    siteUrl = config.developmentUrl;
  }

  // Delete cache of data file for watch task
  delete require.cache[require.resolve(config.markup.data)];

  return gulp.src(config.markup.src)
    .pipe(plumber())
    .pipe(data(function() {
      return siteUrl;
    }))
    .pipe(data(function() {
      return {
        timestamp: timestamp,
        isProduction: isProduction
      };
    }))
    .pipe(data(function() {
      return require(config.markup.data);
    }))
    .pipe(nunjucksRender({
      path: config.markup.path
    }))
    .pipe(gif(!isDevelopment, htmlmin({
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      processScripts: ['application/ld+json'],
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(header(config.markupHeader.join('\n')))
    .pipe(gif(isProduction, size({
      title: 'Compressed File Size:',
      showFiles: true
    })))
    .pipe(prettyUrl())
    .pipe(gulp.dest(config.markup.dest))
    .pipe(browserSync.stream());

});
