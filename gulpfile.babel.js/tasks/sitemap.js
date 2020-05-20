/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Sitemap
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
import config from '../config';
import gulp from 'gulp';
import gutil from 'gulp-util';
import sitemap from 'gulp-sitemap';

// Environment variables
const isProduction = !!gutil.env.production;
const isStaging = !!gutil.env.staging;

let siteUrl = '';

// Create site map based on environment (development/production) and place in dist
function sitemapTask() {
  if (isProduction) {
    siteUrl = config.productionUrl.homeUrl;
  } else if (isStaging) {
    siteUrl = config.stagingUrl.homeUrl;
  } else {
    siteUrl = config.developmentUrl.homeUrl;
  }

  return gulp.src(config.sitemap.src, {
      read: false
    })
    .pipe(sitemap({
      siteUrl: siteUrl
    }))
    .pipe(gulp.dest(config.sitemap.dest));
}

export default sitemapTask;
