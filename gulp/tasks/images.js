/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Images
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
	changed = require('gulp-changed'),
	config = require('../config'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

/*
** -- Check if image is already in dist directory and has changed
** -- Optimize image for production
*/
gulp.task('images', function() {

  	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest))
    	.pipe(imagemin())
    	.pipe(gulp.dest(config.images.dest));

});