/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Gzip
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	gzip = require('gulp-gzip'),
	size = require('gulp-size'),
	tar = require('gulp-tar');

// Create a tarball of the dist directory and compress with gzip
gulp.task('gzip', function() {

	return gulp.src(config.gzip.src)
		.pipe(tar(config.gzip.filename))
		.pipe(gzip())
		.pipe(gulp.dest(config.gzip.dest))
		.pipe(size({
			title: 'Project Archive File Size:',
			showFiles: true
		}));

});
