/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Favicons
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
import concat from 'gulp-concat';
import config from '../config';
import del from 'del';
import favicons from 'gulp-favicons';
import gulp from 'gulp';
import gutil from 'gulp-util';
import rename from 'gulp-rename';

// Environment variables
const isProduction = !!gutil.env.production;
const isStaging = !!gutil.env.staging;

let siteUrl = '';

// Set site URL based on environment
if (isProduction) {
  siteUrl = config.productionUrl.homeUrl;
} else if (isStaging) {
  siteUrl = config.stagingUrl.homeUrl;
} else {
  siteUrl = config.developmentUrl.homeUrl;
}

// Create favicons
function faviconsCreateFavicon() {
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
}

// Create touch icons and associated files
function faviconsCreateTouchIcon() {
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
}

// Concat favicons.html with touch-icons.html
function faviconsConcatHtml() {
  return gulp.src(config.favicons.concatHtmlSrc)
    .pipe(concat(config.favicons.concatHtmlFilename))
    .pipe(gulp.dest(config.favicons.concatHtmlDest));
}

// Remove favicons.html
function faviconsRemoveHtml() {
  return del(config.favicons.concatHtmlSrc);
}

const faviconsSeries = gulp.series(faviconsCreateFavicon, faviconsCreateTouchIcon, faviconsConcatHtml, faviconsRemoveHtml);

export default faviconsSeries;
