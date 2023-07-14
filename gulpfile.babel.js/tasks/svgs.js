/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - SVGs
/* ***** ----------------------------------------------- ***** */

import config from '../config'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import size from 'gulp-size'
import svgSprite from 'gulp-svg-sprite'

/*
 ** -- Optimize SVG files
 ** -- Create SVG sprite
 */
const svgs = () => {
  return gulp
    .src(config.svgs.src)
    .pipe(imagemin())
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            dest: '',
            sprite: config.svgs.sprite,
          },
        },
      })
    )
    .pipe(
      size({
        title: 'Optimized File Size:',
        showFiles: true,
      })
    )
    .pipe(gulp.dest(config.svgs.dest))
}

export default svgs
