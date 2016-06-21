/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Clean
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	del = require('del'),
	gulp = require('gulp');

// Delete dist directory for a clean project rebuild
gulp.task('clean', function() {

	return del(config.clean.dest);

});
