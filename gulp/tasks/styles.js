/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Styles
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var addSrc = require('gulp-add-src'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	config = require('../config'),
	gif = require('gulp-if'),
	gulp = require('gulp'),
	gutil = require('gulp-util'),
	header = require('gulp-header'),
	mainBowerFiles = require('main-bower-files'),
	plumber = require('gulp-plumber'),
	postcss = require('gulp-postcss'),
	rename = require('gulp-rename'),
	reporter = require('postcss-reporter'),
	sass = require('gulp-sass'),
	scss = require('postcss-scss'),
	size = require('gulp-size'),
	sourcemaps = require('gulp-sourcemaps'),
	stylelint = require('stylelint'),
	isProduction = !!gutil.env.production,
	isStaging = !!gutil.env.staging,
	isDevelopment = !isProduction && !isStaging;

/*
** -- Lint scss files with Stylelint
** -- Add Bower files to the build
** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
** -- Compile scss files
** -- Autoprefix necessary properties
** -- Minify
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Inject styles into page
*/
gulp.task('styles', function () {

	var bowerFiles = mainBowerFiles({
		filter: '**/*.css',
		includeDev: true
	});
	console.log('Bower Files: ', bowerFiles);

	return gulp.src(config.styles.src)
		.pipe(plumber())
		.pipe(
			postcss([
				stylelint(),
				reporter({
					clearMessages: true
				})
			], {
				syntax: scss 
			})
		)
		.pipe(addSrc.prepend(bowerFiles))
		.pipe(gif(isDevelopment, sourcemaps.init()))
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(cleanCSS({
				inline: ['all']
			}))
			.pipe(concat('main.css'))
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(header(config.fileHeader.join('\n')))
			.pipe(size({
				title: 'Compressed File Size:',
				showFiles: true
			}))
		.pipe(gif(isDevelopment, sourcemaps.write('./')))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(browserSync.stream({
			match: '**/*.css'
		}));

});
