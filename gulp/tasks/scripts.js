/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Scripts
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	config = require('../config'),
	eslint = require('gulp-eslint'),
	filter = require('gulp-filter'),
	gif = require('gulp-if'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	header = require('gulp-header'),
	order = require('gulp-order'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	size = require('gulp-size'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	isDevelopment = !isProduction && !isStaging;

/*
** -- Lint only module files with ESLint
** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
** -- Order files by vendors and then modules
** -- Minify all files
** -- Bundle all files
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Reload browser
*/
gulp.task('scripts', function() {

	var filterPipe = filter(config.scripts.filter, { restore: true });

    return gulp.src(config.scripts.src)
		.pipe(plumber())
		.pipe(filterPipe)
		.pipe(eslint({
			'extends': 'eslint:recommended',
			'env': {
        		'browser': true,
    		},
		}))
		.pipe(eslint.format())
		.pipe(filterPipe.restore)
		.pipe(gif(isDevelopment, sourcemaps.init()))
			.pipe(order(config.scripts.order, { base: './' }))
			.pipe(uglify())
        	.pipe(concat('main.js'))
        	.pipe(rename({
				suffix: '.min'
			}))
        	.pipe(header(config.fileHeader.join('\n')))
        	.pipe(size({
				title: 'Compressed File Size:',
				showFiles: true
			}))
		.pipe(gif(isDevelopment, sourcemaps.write('./')))
        .pipe(gulp.dest(config.scripts.dest))
		.pipe(browserSync.stream());

});
