/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Favicons
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	del = require('del'),
	favicons = require('gulp-favicons'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	rename = require('gulp-rename'),
	runSequence = require('run-sequence'),
	isProduction = !!gutil.env.production,
	siteUrl;

// Create favicons and associated files
gulp.task('favicons:create', function() {

	if (isProduction) {
		siteUrl = config.productionUrl.home_url;
	} else {
		siteUrl = config.developmentUrl.home_url;
	}

	return gulp.src(config.favicons.src)
		.pipe(favicons({
			appName: config.favicons.appName,
			appDescription: config.favicons.appDescription,
			developerName: config.favicons.developerName,
			developerURL: config.favicons.developerURL,
			background: config.favicons.background,
			path: siteUrl + config.favicons.path,
			url: siteUrl,
			display: config.favicons.display,
			orientation: config.favicons.orientation,
			version: config.favicons.version,
			logging: true,
			online: true,
			html: config.favicons.html,
			pipeHTML: true,
			replace: true,
			icons: {
				opengraph: false,
				twitter: false,
				yandex: false
			}
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest(config.favicons.dest));

});

// Rename favicons.html to favicons.njk (nunjucks template)
gulp.task('favicons:rename-html', function() {

	return gulp.src(config.favicons.htmlRenameSrc)
		.pipe(rename({
			extname: '.njk'
		}))
		.pipe(gulp.dest(config.favicons.htmlRenameDest));

});

// Remove favicons.html
gulp.task('favicons:remove-html', function() {

	return del(config.favicons.htmlRenameSrc);

});

// Favicons sequence of tasks
gulp.task('favicons', function() {
	runSequence('favicons:create', 'favicons:rename-html', 'favicons:remove-html');
});
