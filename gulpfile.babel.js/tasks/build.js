/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Build
/* ***** ----------------------------------------------- ***** */

import clean from './clean.js';
import { copy } from './copy.js';
import gulp from 'gulp';
import favicons from './favicons.js';
import images from './images.js';
import markup from './markup.js';
import robots from './robots.js';
import { scriptsBuild } from './scripts.js';
import sitemap from './sitemap.js';
import styles from './styles.js';
import svgs from './svgs.js';

/*
** -- Clean dist directory
** -- Run all tasks to rebuild project
*/
const build = gulp.series(
  clean,
  favicons,
  gulp.parallel(markup, styles, scriptsBuild, images, svgs, copy),
  gulp.parallel(sitemap, robots)
);

export default build;
