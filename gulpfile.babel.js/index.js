/* ***** ----------------------------------------------- ***** **
/* ***** Gulp
/* ***** ----------------------------------------------- ***** */

import gulp from 'gulp';
import config from './config';

import build from './tasks/build.js';
import watch from './tasks/watch.js';
import deploy from './tasks/deploy.js';
import gzip from './tasks/gzip.js';

// Available tasks
gulp.task('default', build);
gulp.task('watch', watch);
gulp.task('deploy', deploy);
gulp.task('gzip', gzip);
