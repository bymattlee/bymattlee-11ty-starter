/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Default
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	runSequence = require('run-sequence');

/*
** -- Clean dist directory
** -- Run all tasks to rebuild project
*/
gulp.task('default', function() {
	runSequence(
		'clean',
		'favicons:create',
		['favicons:rename-html', 'favicons:remove-html'],
		['markup', 'styles', 'scripts', 'images', 'svgs', 'copy'],
		['sitemap', 'robots']
	);
});
