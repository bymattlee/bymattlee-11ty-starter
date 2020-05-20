/* ***** ----------------------------------------------- ***** **
/* ***** Gulp
/* ***** ----------------------------------------------- ***** */

import gulp from 'gulp';
import defaultTask from './tasks/default.js';
import build from './tasks/build.js';
import watch from './tasks/watch.js';
import deploy from './tasks/deploy.js';
import gzip from './tasks/gzip.js';

// Available tasks
gulp.task('default', defaultTask);
gulp.task('build', build);
gulp.task('watch', watch);
gulp.task('deploy', deploy);
gulp.task('gzip', gzip);
