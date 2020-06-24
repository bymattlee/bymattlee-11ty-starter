/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Sitemap
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import envUrls from '../../envUrls.js';
import gulp from 'gulp';
import sitemap from 'gulp-sitemap';

const siteUrl = envUrls[process.env.NODE_ENV];

// Create site map based on environment (development/production) and place in dist
function sitemapTask() {
  return gulp.src(config.sitemap.src, {
      read: false
    })
    .pipe(sitemap({
      siteUrl: siteUrl
    }))
    .pipe(gulp.dest(config.sitemap.dest));
}

export default sitemapTask;
