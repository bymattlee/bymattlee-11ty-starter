/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Styles
/* ***** ----------------------------------------------- ***** */

import autoprefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'
import config from '../config'
import dartSass from 'sass'
import gif from 'gulp-if'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import header from 'gulp-header'
import plumber from 'gulp-plumber'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import reporter from 'postcss-reporter'
import scss from 'postcss-scss'
import size from 'gulp-size'
import sourcemaps from 'gulp-sourcemaps'
import stylelint from 'stylelint'
import tailwindcss from 'tailwindcss'

// Set default sass compiler
const sass = gulpSass(dartSass)

// Environment variables
const isDevelopment = process.env.NODE_ENV === 'development'

/*
 ** -- Lint scss files with Stylelint
 ** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
 ** -- Compile scss files
 ** -- Apply Tailwind styles
 ** -- Autoprefix necessary properties
 ** -- Minify
 ** -- Add ByMattLee header to bundled file
 ** -- Print bundled file size
 ** -- Inject styles into page
 */
const styles = () => {
  return gulp
    .src(config.styles.src)
    .pipe(plumber())
    .pipe(
      postcss(
        [
          stylelint(),
          reporter({
            clearMessages: true,
          }),
        ],
        {
          syntax: scss,
        }
      )
    )
    .pipe(gif(isDevelopment, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(
      postcss(
        [
          tailwindcss(config.styles.tailwindConfig),
          reporter({
            clearMessages: true,
          }),
        ],
        {
          syntax: scss,
        }
      )
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        inline: ['all'],
        rebase: false,
      })
    )
    .pipe(concat('main.css'))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(header(config.fileHeader.join('\n')))
    .pipe(
      size({
        title: 'Compressed File Size:',
        showFiles: true,
      })
    )
    .pipe(gif(isDevelopment, sourcemaps.write('./')))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(
      browserSync.stream({
        match: '**/*.css',
      })
    )
}

export default styles
