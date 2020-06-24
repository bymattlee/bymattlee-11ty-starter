/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Favicons
/* ***** ----------------------------------------------- ***** */

import concat from 'gulp-concat';
import config from '../config';
import del from 'del';
import envUrls from '../../envUrls.js';
import favicons from 'gulp-favicons';
import gulp from 'gulp';
import fancyLog from 'fancy-log';

const siteUrl = envUrls[process.env.NODE_ENV];

// Create favicons
const faviconsCreateFavicon = () => {
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
    .on('error', fancyLog)
    .pipe(gulp.dest(config.favicons.dest));
}

// Create touch icons and associated files
const faviconsCreateTouchIcon = () => {
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
    .on('error', fancyLog)
    .pipe(gulp.dest(config.favicons.dest));
}

// Concat favicons.html with touch-icons.html
const faviconsConcatHtml = () => {
  return gulp.src(config.favicons.concatHtmlSrc)
    .pipe(concat(config.favicons.concatHtmlFilename))
    .pipe(gulp.dest(config.favicons.concatHtmlDest));
}

// Remove favicons.html
const faviconsRemoveHtml = () => {
  return del(config.favicons.concatHtmlSrc);
}

const faviconsSeries = gulp.series(faviconsCreateFavicon, faviconsCreateTouchIcon, faviconsConcatHtml, faviconsRemoveHtml);

export default faviconsSeries;
