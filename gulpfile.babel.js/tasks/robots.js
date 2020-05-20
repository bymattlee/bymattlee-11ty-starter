/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Robots
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import gulp from 'gulp';
import gutil from 'gulp-util';
import robots from 'gulp-robots';

const isProduction = !!gutil.env.production;
const isStaging = !!gutil.env.staging;

let siteUrl = '';

// Create robots.txt file and place in dist
function robotsTask() {
  if (isProduction) {
    siteUrl = config.productionUrl.homeUrl;
  } else if (isStaging) {
    siteUrl = config.stagingUrl.homeUrl;
  } else {
    siteUrl = config.developmentUrl.homeUrl;
  }

  return gulp.src(config.robots.src)
    .pipe(robots({
      useragent: config.robots.useragent,
      allow: config.robots.allow,
      disallow: config.robots.disallow,
      sitemap: siteUrl + '/sitemap.xml'
    }))
    .pipe(gulp.dest(config.robots.dest));
}

export default robotsTask;
