/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Robots
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	robots = require('gulp-robots'),
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	siteUrl;

// Create robots.txt file and place in dist
gulp.task('robots', function() {

	if (isProduction) {
		siteUrl = config.productionUrl.home_url;
	} else if (isStaging) {
		siteUrl = config.stagingUrl.home_url;
	} else {
		siteUrl = config.developmentUrl.home_url;
	}

	return gulp.src(config.robots.src)
		.pipe(robots({
			useragent: config.robots.useragent,
			allow: config.robots.allow,
			disallow: config.robots.disallow,
			sitemap: siteUrl + '/sitemap.xml'
		}))
		.pipe(gulp.dest(config.robots.dest));

});
