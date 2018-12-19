/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Copy
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var changed = require('gulp-changed'),
	config = require('../config'),
	gulp = require('gulp');

// Copy all asset files to dist directory (fonts, swfs, videos, etc)
gulp.task('copy:assets', function() {

	return gulp.src(config.copy.assetsSrc)
		.pipe(changed(config.copy.assetsDest))
		.pipe(gulp.dest(config.copy.assetsDest));

});

// Copy .htaccess file to dist directory
gulp.task('copy:htaccess', function() {

	return gulp.src(config.copy.htaccessSrc)
		.pipe(changed(config.copy.htaccessDest))
		.pipe(gulp.dest(config.copy.htaccessDest));

});

// Copy task
gulp.task('copy', gulp.series(gulp.parallel('copy:assets', 'copy:htaccess')));
