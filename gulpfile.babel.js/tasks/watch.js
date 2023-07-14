/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Watch
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync'
import browserSyncTask from './browserSync.js'
import config from '../config'
import copy from './copy.js'
import gulp from 'gulp'
import { eleventyInitWatch } from './eleventy.js'
import images from './images.js'
import styles from './styles.js'
import svgs from './svgs.js'
import scripts from './scripts.js'

/*
 ** -- Initialize BrowserSync
 ** -- Initialize watch for styles, scripts, images, svgs and asset files
 ** -- Force browser reload when changes are made to images, svgs and asset files
 */
const watchChanges = () => {
  gulp.watch(config.eleventy.watch, styles).on('change', browserSync.reload)
  gulp.watch(config.styles.src, styles)
  gulp.watch(config.scripts.watchSrc, scripts)
  gulp.watch(config.images.optimizeSrc, images).on('change', browserSync.reload)
  gulp.watch(config.svgs.src, svgs).on('change', browserSync.reload)
  gulp.watch(config.copy.assetsSrc, copy).on('change', browserSync.reload)
}

const watchInit = gulp.parallel(
  browserSyncTask,
  eleventyInitWatch,
  watchChanges
)

export default watchInit
