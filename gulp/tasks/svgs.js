/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - SVGs
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var config = require('../config'),
	gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	size = require('gulp-size'),
	svgSprite = require('gulp-svg-sprite');

/*
** -- Optimize SVG files
** -- Create SVG sprite
*/
gulp.task('svgs', function() {

	return gulp.src(config.svgs.src)
		.pipe(imagemin())
		.pipe(svgSprite({
			mode: {
				symbol: {
					dest: '',
					sprite: config.svgs.sprite
				}
			}
		}))
		.pipe(size({
			title: 'Optimized File Size:',
			showFiles: true
		}))
		.pipe(gulp.dest(config.svgs.dest));

});
