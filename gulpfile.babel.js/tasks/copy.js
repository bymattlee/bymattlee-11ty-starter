/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Copy
/* ***** ----------------------------------------------- ***** */

import changed from 'gulp-changed';
import config from '../config';
import gulp from 'gulp';

// Copy all asset files to dist directory (fonts, swfs, videos, etc)
function copyAssets() {
  return gulp.src(config.copy.assetsSrc)
    .pipe(changed(config.copy.assetsDest))
    .pipe(gulp.dest(config.copy.assetsDest));
}

// Copy .htaccess file to dist directory
function copyHtaccess() {
  return gulp.src(config.copy.htaccessSrc)
    .pipe(changed(config.copy.htaccessDest))
    .pipe(gulp.dest(config.copy.htaccessDest));
}

const copy = gulp.parallel(copyAssets, copyHtaccess);

export { copyAssets, copy };
