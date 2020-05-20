/* ***** ----------------------------------------------- ***** **
/* ***** Default
/* ***** ----------------------------------------------- ***** */

import build from './build.js';
import gulp from 'gulp';
import watch from './watch.js';

const defaultTask = gulp.series(build, watch);

export default defaultTask;
