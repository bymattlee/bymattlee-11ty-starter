/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Copy
/* ***** ----------------------------------------------- ***** */

import changed from 'gulp-changed'
import config from '../config'
import gulp from 'gulp'

// Copy all asset files to dist directory (fonts, swfs, videos, etc)
const copy = () => {
  return gulp
    .src(config.copy.assetsSrc)
    .pipe(changed(config.copy.assetsDest))
    .pipe(gulp.dest(config.copy.assetsDest))
}

export default copy
