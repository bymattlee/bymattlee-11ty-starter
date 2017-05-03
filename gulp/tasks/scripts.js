/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Scripts
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var addSrc = require('gulp-add-src'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	config = require('../config'),
	eslint = require('gulp-eslint'),
	gif = require('gulp-if'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	header = require('gulp-header'),
	mainBowerFiles = require('main-bower-files'),
	modernizr = require('gulp-modernizr'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	size = require('gulp-size'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	isDevelopment = !isProduction && !isStaging;

/*
** -- Create a custom Modernizr build by crawling the .scss and .js files
** -- Add Bower files to the build
** -- Minify all files
** -- Bundle all files
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Reload browser
*/
gulp.task('scripts:vendors', function() {

	var bowerFiles = mainBowerFiles({
		filter: '**/*.js',
		includeDev: true
	});
	console.log('Bower Files: ', bowerFiles);

	return gulp.src(config.scripts.modernizr.src)
		.pipe(plumber())
		.pipe(modernizr(config.scripts.modernizr.options))
		.pipe(addSrc.append(bowerFiles))
		.pipe(uglify())
		.pipe(concat('vendors.js'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(header(config.fileHeader.join('\n')))
		.pipe(size({
			title: 'Compressed File Size:',
			showFiles: true
		}))
		.pipe(gulp.dest(config.scripts.dest));

});

/*
** -- Add main and module files to the build
** -- Lint files with ESLint
** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
** -- Minify all files
** -- Bundle all files
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Reload browser
*/
gulp.task('scripts:main', function() {

	return gulp.src(config.scripts.src)
		.pipe(plumber())
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(gif(isDevelopment, sourcemaps.init()))
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

// Scripts sequence of tasks
gulp.task('scripts', ['scripts:vendors', 'scripts:main']);
