/* ***** ----------------------------------------------- ***** **
/* ***** Gulp Config
/* ***** ----------------------------------------------- ***** */

// Global variables
const src = './src'
const dest = './dist'
const srcAssets = src + '/assets'
const destAssets = dest + '/assets'

// Contains all main configurations for Gulp
module.exports = {
  fileHeader: [
    '/*',
    '**',
    '**',
    '**',
    '**',
    '**',
    '**              {{ @bymattlee }}',
    '**              {{ bymattlee.com }}',
    '**',
    '**',
    '**',
    '**',
    '**',
    '*/\n',
  ],
  eleventy: {
    watch: [dest + '/**/index.html', './tailwind.config.js'],
  },
  styles: {
    src: srcAssets + '/scss/**/*.scss',
    dest: destAssets + '/css',
    tailwindConfig: './tailwind.config.js',
    purgeContent: [
      src + '/site/**/*.njk',
      srcAssets + '/js/**/*.js',
      './eleventy/**/*.js',
    ],
  },
  scripts: {
    src: srcAssets + '/js/main.js',
    watchSrc: srcAssets + '/js/**/*.js',
    dest: destAssets + '/js',
  },
  images: {
    optimizeSrc: srcAssets + '/images/**/*',
    responsiveSrc: [
      srcAssets + '/images/**/*',
      '!' + srcAssets + '/images/**/*.svg',
    ],
    dest: destAssets + '/images',
  },
  svgs: {
    src: srcAssets + '/svgs/*.svg',
    dest: destAssets + '/svgs',
    sprite: 'sprite.svg',
  },
  copy: {
    assetsSrc: [
      srcAssets + '/**/*.+(eot|svg|ttf|woff|woff2|swf|mp4|mp3)',
      '!' + srcAssets + '/svgs/*.svg',
      '!' + srcAssets + '/vendors/**/*',
    ],
    assetsDest: destAssets,
  },
  clean: {
    dest: dest,
  },
  browserSync: {
    server: './' + dest,
  },
}
