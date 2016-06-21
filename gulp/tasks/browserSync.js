/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - BrowserSync
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
	config = require('../config'),
	gulp = require('gulp');

/*
** -- Initialize BrowserSync
** -- Use directory specified in config as the root for the server
*/
gulp.task('browserSync', function() {

    browserSync.init({
        server: config.browserSync.server
    });

});
