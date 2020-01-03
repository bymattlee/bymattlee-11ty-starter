/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Sitemap
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  sitemap = require('gulp-sitemap'),
  isProduction = !!gutil.env.production,
  isStaging = !!gutil.env.staging,
  siteUrl;

// Create site map based on environment (development/production) and place in dist
gulp.task('sitemap', function() {

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

});
