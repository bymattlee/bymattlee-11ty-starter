/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Scripts
/* ***** ----------------------------------------------- ***** */

import addSrc from 'gulp-add-src';
import babel from 'rollup-plugin-babel';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import commonjs from 'rollup-plugin-commonjs';
import config from '../config';
import eslint from 'gulp-eslint';
import gif from 'gulp-if';
import gulp from 'gulp';
import header from 'gulp-header';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import rollup from 'gulp-better-rollup';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import terser from 'gulp-terser';

// Environment variables
const isDevelopment = process.env.NODE_ENV === 'development';

// Lint files with ESLint
const scriptsLint = () => {
  return gulp.src(config.scripts.watchSrc)
    .pipe(eslint())
    .pipe(eslint.format());
}

/*
** -- Create sourcemaps if in development mode (use gulp --production or gulp --staging to disable soucemaps)
** -- Bundle all files
** -- Minify all files
** -- Add ByMattLee header to bundled file
** -- Print bundled file size
** -- Reload browser
*/
const scriptsMain = () => {
  return gulp.src(config.scripts.src)
    .pipe(plumber())
    .pipe(gif(isDevelopment, sourcemaps.init()))
      .pipe(rollup({
        plugins: [
          babel({
            exclude: 'node_modules/**'
          }),
          nodeResolve(),
          commonjs(),
          json()
        ]
      }, 'umd'))
      .pipe(terser({
        format: {
          comments: false
        }
      }))
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
}

const scripts = gulp.series(scriptsLint, scriptsMain);

export default scripts;
