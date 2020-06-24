/* ***** ----------------------------------------------- ***** **
/* ***** Gulp Config
/* ***** ----------------------------------------------- ***** */

// Global variables
const src = 'src';
const dest = 'dist';
const srcAssets = src + '/assets';
const destAssets = dest + '/assets';

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
    '*/\n'
  ],
  eleventy: {
    src: src + '/site/**/*',
  },
  styles: {
    src: srcAssets + '/scss/**/*.scss',
    dest: destAssets + '/css',
    purgeContent: [
      dest + '/**/*.html',
      srcAssets + '/js/modules/**/*.js'
    ]
  },
  scripts: {
    src: srcAssets + '/js/main.js',
    watchSrc: [
      srcAssets + '/js/**/*.js',
      '!' + srcAssets + '/js/vendors/modernizr.js'
    ],
    dest:  destAssets + '/js',
    modernizr: {
      src: [
        srcAssets + '/scss/**/*',
        srcAssets + '/js/**/*',
      ],
      options: {
        'options' : [
          'setClasses'
        ]
      }
    },
    modernizrDest: srcAssets + '/js/vendors',
    modernizrFileSrc: srcAssets + '/js/vendors/modernizr.js'
  },
  images: {
    optimizeSrc: srcAssets + '/images/**/*',
    responsiveSrc: [
      srcAssets + '/images/**/*',
      '!' + srcAssets + '/images/**/*.svg',
      '!' + srcAssets + '/images/share.jpg'
    ],
    dest:  destAssets + '/images'
  },
  svgs: {
    src: srcAssets + '/svgs/*.svg',
    dest:  destAssets + '/svgs',
    sprite: 'sprite.svg'
  },
  copy: {
    assetsSrc: [
      srcAssets + '/**/*.+(eot|svg|ttf|woff|woff2|swf|mp4|mp3)',
      '!' + srcAssets + '/svgs/*.svg',
      '!' + srcAssets + '/vendors/**/*'
    ],
    assetsDest: destAssets,
    htaccessSrc: src + '/.htaccess',
    htaccessDest: dest
  },
  clean: {
    dest:  dest
  },
  browserSync: {
    server: './' + dest
  },
  sitemap: {
    src: dest + '/**/*.html',
    dest: dest
  },
  robots: {
    src: dest + '/index.html',
    dest: dest,
    useragent: '*',
    allow: '/',
    disallow: ''
  },
  favicons: {
    faviconSrc: srcAssets + '/favicons/favicon.png',
    touchIconSrc: srcAssets + '/favicons/touchIcon.png',
    dest: destAssets + '/favicons',
    appName: 'ByMattLee',
    appDescription: 'ByMattLee Web Starter Files',
    developerName: 'Matt Lee',
    developerURL: 'http://bymattlee.com',
    background: '#212121',
    path: '/assets/favicons',
    display: 'browser',
    orientation: 'portrait',
    version: '1.0',
    faviconHtmlPath: '../../../src/site/_includes/partials/global/favicons.html',
    touchIconHtmlPath: '../../../src/site/_includes/partials/global/touch-icons.html',
    concatHtmlSrc: [
      src + '/site/_includes/partials/global/favicons.html',
      src + '/site/_includes/partials/global/touch-icons.html'
    ],
    concatHtmlFilename: 'favicons.njk',
    concatHtmlDest: src + '/site/_includes/partials/global'
  }
};
