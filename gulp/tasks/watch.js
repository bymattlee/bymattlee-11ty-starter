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
gulp.task('watch', ['browserSync'], function() {

	gulp.watch(config.markup.watchSrc, ['markup']);
	gulp.watch(config.styles.src, ['styles']);
	gulp.watch(config.scripts.src, ['scripts:main']);
	gulp.watch(config.images.src, ['images']).on('change', reload);
	gulp.watch(config.svgs.src, ['svgs']).on('change', reload);
	gulp.watch(config.copy.assetsSrc, ['copy:assets']).on('change', reload);

});
