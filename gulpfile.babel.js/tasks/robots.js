/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Robots
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import envUrls from '../../envUrls.js';
import gulp from 'gulp';
import robots from 'gulp-robots';

const siteUrl = envUrls[process.env.NODE_ENV];

// Create robots.txt file and place in dist
const robotsTask = () => {
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
