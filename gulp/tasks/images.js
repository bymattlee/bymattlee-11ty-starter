/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Images
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var changed = require('gulp-changed'),
	config = require('../config'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	size = require('gulp-size');

/*
** -- Check if image is already in dist directory and has changed
** -- Optimize image for production
*/
gulp.task('images', function() {

	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest))
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imageminJpegRecompress(),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo()
		]))
		.pipe(size({
			title: 'Optimized File Size:',
			showFiles: true
		}))
		.pipe(gulp.dest(config.images.dest));

});