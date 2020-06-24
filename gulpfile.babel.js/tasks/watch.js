/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Watch
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync';
import browserSyncTask from './browserSync.js';
import config from '../config';
import { copyAssets } from './copy.js';
import gulp from 'gulp';
import eleventy from './eleventy.js';
import images from './images.js';
import styles from './styles.js';
import svgs from './svgs.js';
import { scriptsWatch } from './scripts.js';

/*
** -- Initialize BrowserSync
** -- Initialize watch for styles, scripts, images, svgs and asset files
** -- Force browser reload when changes are made to images, svgs and asset files
*/
const watchChanges = () => {
  gulp.watch(config.eleventy.src, eleventy);
  gulp.watch(config.styles.src, styles);
  gulp.watch(config.scripts.watchSrc, scriptsWatch);
  gulp.watch(config.images.optimizeSrc, gulp.series(images)).on('change', browserSync.reload);
  gulp.watch(config.svgs.src, gulp.series(svgs)).on('change', browserSync.reload);
  gulp.watch(config.copy.assetsSrc, gulp.series(copyAssets)).on('change', browserSync.reload);
}

const watchInit = gulp.parallel(browserSyncTask, watchChanges);

export default watchInit;
