/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Deploy
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gif = require('gulp-if'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	rsync = require('gulp-rsync'),
	isClean = !!gutil.env.clean,
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	isDevelopment = !isProduction && !isStaging,
	hostSettings,
	hostSettingsNotFound,
	notifyTitle = 'ERROR',
	notFoundMessage = 'hostSettings.json was not found. Unable to deploy files to host server.',
	deployErrorMessage = 'Please use a flag (--staging or --production) to target a host server.';

// Check if hostSettings.json is present
try {
	hostSettings = require('../hostSettings.json');

	if (isProduction) {
		hostSettings = hostSettings.production;
	} else {
		hostSettings = hostSettings.staging;
	}

} catch (e) {
	hostSettingsNotFound = true;
}

/*
** -- Deploy dist directory to host server based on flag (--production or --staging)
** -- If hostSettings.json is not present, display error message
** -- If a flag (--production or --staging) is not used, display error message
*/
gulp.task('deploy', function() {

	return gulp.src(config.deploy.src)
		.pipe(gif(hostSettingsNotFound, notify({
			title: notifyTitle,
			message: notFoundMessage,
			onLast: true
		})))
		.pipe(gif(isDevelopment, notify({
			title: notifyTitle,
			message: deployErrorMessage,
			onLast: true
		})))
		.pipe(gif(!isDevelopment, rsync({
			hostname: hostSettings ? hostSettings.hostname : '',
			username: hostSettings ? hostSettings.username : '',
			destination: hostSettings ? hostSettings.destination : '',
			root: config.deploy.root,
			archive: true,
			recursive: true,
			clean: isClean ? true : false
		})));

});
