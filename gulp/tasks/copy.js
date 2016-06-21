/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Copy
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
	changed = require('gulp-changed'),
	config = require('../config'),
	gulp = require('gulp');

// Copy all asset files to dist directory (fonts, swfs, videos, etc)
gulp.task('copy', function() {

	return gulp.src(config.copy.src)
		.pipe(changed(config.copy.dest))
		.pipe(gulp.dest(config.copy.dest));

});
