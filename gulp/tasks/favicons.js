/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Favicons
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var concat = require('gulp-concat'),
	config = require('../config'),
	del = require('del'),
	favicons = require('gulp-favicons'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	rename = require('gulp-rename'),
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	siteUrl;

// Set site URL based on environment
if (isProduction) {
	siteUrl = config.productionUrl.homeUrl;
} else if (isStaging) {
	siteUrl = config.stagingUrl.homeUrl;
} else {
	siteUrl = config.developmentUrl.homeUrl;
}

// Create favicons
gulp.task('favicons:create-favicon', function() {

	return gulp.src(config.favicons.faviconSrc)
		.pipe(favicons({
			appName: config.favicons.appName,
			appDescription: config.favicons.appDescription,
			developerName: config.favicons.developerName,
			developerURL: config.favicons.developerURL,
			background: config.favicons.background,
			theme_color: config.favicons.background,
			path: config.favicons.path,
			url: siteUrl,
			display: config.favicons.display,
			orientation: config.favicons.orientation,
			version: config.favicons.version,
			logging: true,
			online: false,
			html: config.favicons.faviconHtmlPath,
			pipeHTML: true,
			replace: true,
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				opengraph: false,
				firefox: false,
				windows: false,
				yandex: false
			}
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest(config.favicons.dest));

});

// Create touch icons and associated files
gulp.task('favicons:create-touch-icon', function() {

	return gulp.src(config.favicons.touchIconSrc)
		.pipe(favicons({
			appName: config.favicons.appName,
			appDescription: config.favicons.appDescription,
			developerName: config.favicons.developerName,
			developerURL: config.favicons.developerURL,
			background: config.favicons.background,
			theme_color: config.favicons.background,
			path: config.favicons.path,
			url: siteUrl,
			display: config.favicons.display,
			orientation: config.favicons.orientation,
			version: config.favicons.version,
			logging: true,
			online: false,
			html: config.favicons.touchIconHtmlPath,
			pipeHTML: true,
			replace: true,
			icons: {
				favicons: false,
				yandex: false
			}
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest(config.favicons.dest));

});

// Concat favicons.html with touch-icons.html
gulp.task('favicons:concat-html', function() {

	return gulp.src(config.favicons.concatHtmlSrc)
		.pipe(concat(config.favicons.concatHtmlFilename))
		.pipe(gulp.dest(config.favicons.concatHtmlDest));

});

// Remove favicons.html
gulp.task('favicons:remove-html', function() {

	return del(config.favicons.concatHtmlSrc);

});

// Favicons sequence of tasks
gulp.task('favicons', gulp.series('favicons:create-favicon', 'favicons:create-touch-icon', 'favicons:concat-html', 'favicons:remove-html'));
