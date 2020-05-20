/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Markup
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync';
import config from '../config';
import data from 'gulp-data';
import gif from 'gulp-if';
import gulp from 'gulp';
import gutil from 'gulp-util';
import header from 'gulp-header';
import htmlmin from 'gulp-htmlmin';
import nunjucksRender from 'gulp-nunjucks-render';
import plumber from 'gulp-plumber';
import prettyUrl from 'gulp-pretty-url';
import size from 'gulp-size';

// Environment variables
const isProduction = !!gutil.env.production;
const isStaging = !!gutil.env.staging;
const isDevelopment = !isProduction && !isStaging;

let siteUrl = '';

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
function markup() {
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
}

export default markup;
