/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Deploy
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	rsync = require('gulp-rsync');

// Check if hostSettings.json is present
try {
	hostSettings = require('../hostSettings.json');
} catch (e) {
    console.log('ERROR: hostSettings.json was not found. Unable to deploy files to host server.');
}

// Deploy dist directory to host server based on settings in hostSettings.json
gulp.task('deploy', function() {

	return gulp.src(config.deploy.src)
		.pipe(rsync({
			hostname: hostSettings.hostname,
			username: hostSettings.username,
			destination: hostSettings.destination,
			root: config.deploy.root,
			recursive: true
		}));

});
