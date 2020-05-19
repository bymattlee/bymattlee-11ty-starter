/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Watch
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
  config = require('../config'),
  gulp = require('gulp'),
  watch = require('gulp-watch'),
  reload = browserSync.reload;

/*
** -- Initialize BrowserSync
** -- Initialize watch for styles, scripts, images, svgs and asset files
** -- Force browser reload when changes are made to images, svgs and asset files
*/
gulp.task('watch', 
  gulp.parallel(['browserSync', function() {

    gulp.watch(config.markup.watchSrc, gulp.series('markup'));
    gulp.watch(config.styles.src, gulp.series('styles'));
    gulp.watch(config.scripts.watchSrc, gulp.series('scripts:watch'));
    gulp.watch(config.images.optimizeSrc, gulp.series('images')).on('change', reload);
    gulp.watch(config.svgs.src, gulp.series('svgs')).on('change', reload);
    gulp.watch(config.copy.assetsSrc, gulp.series('copy:assets')).on('change', reload);

  }]
));