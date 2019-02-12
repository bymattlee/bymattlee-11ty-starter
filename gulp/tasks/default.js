/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Default
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	runSequence = require('gulp4-run-sequence');

/*
** -- Clean dist directory
** -- Run all tasks to rebuild project
*/
gulp.task('default', function(done) {
	runSequence(
		'clean',
		'favicons:create-favicon',
		'favicons:create-touch-icon',
		'favicons:concat-html',
		'favicons:remove-html',
		['markup', 'styles', 'scripts', 'images', 'svgs', 'copy'],
		['sitemap', 'robots']
	);
	done();
});
