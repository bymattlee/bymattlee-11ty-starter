/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Default
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp');

/*
** -- Clean dist directory
** -- Run all tasks to rebuild project
*/
gulp.task('default',
	gulp.series(
		'clean',
		'favicons:create-favicon',
		'favicons:create-touch-icon',
		'favicons:concat-html',
		'favicons:remove-html',
		gulp.parallel(
			'markup',
			'styles',
			'scripts',
			'images',
			'svgs',
			'copy'
		),
		gulp.parallel(
			'sitemap',
			'robots'
		)
	)
);
