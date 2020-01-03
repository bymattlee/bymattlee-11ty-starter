/* ***** ----------------------------------------------- ***** **
/* ***** Gulp Config
/* ***** ----------------------------------------------- ***** */

// Global variables
var src = 'src',
  dest = 'dist', 
  srcAssets = src + '/assets',
  destAssets = dest + '/assets',
  timestamp = Math.floor(Date.now() / 1000);

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
  markupHeader: [
    '<!DOCTYPE html>',
    '<!--',
    '**',
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
    '**',
    '-->\n'
  ],
  developmentUrl: {
    homeUrl: 'http://localhost:3000'
  },
  stagingUrl: {
    homeUrl: 'http://mynameismattlee.com'
  },
  productionUrl: {
    homeUrl: 'http://bymattlee.com'
  },
  markup: {
    src: src + '/html/pages/**/*.njk',
    dest: dest,
    data: '../../' + src + '/html/siteData.json',
    path: src + '/html',
    watchSrc: [
      src + '/html/**/*.njk',
      src + '/html/siteData.json'
    ]
  },
  styles: {
    src: srcAssets + '/scss/**/*.scss',
    dest: destAssets + '/css'
  },
  scripts: {
    src: [
      srcAssets + '/js/define.js',
      srcAssets + '/js/modules/**/*.js',
      srcAssets + '/js/main.js'
    ],
    srcVendors: srcAssets + '/js/vendors/*.js',
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
    }
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
    touchIconSrc: srcAssets + '/favicons/touch-icon.png',
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
    faviconHtmlPath: '../../../src/html/partials/global/favicons.html',
    touchIconHtmlPath: '../../../src/html/partials/global/touch-icons.html',
    concatHtmlSrc: [
      src + '/html/partials/global/favicons.html',
      src + '/html/partials/global/touch-icons.html'
    ],
    concatHtmlFilename: 'favicons.njk',
    concatHtmlDest: src + '/html/partials/global'
  },
  deploy: {
    src: dest + '/',
    root: dest
  },
  gzip: {
    src: dest + '/**/*',
    dest: './',
    filename: 'Project.Archive.' + timestamp + '.tar'
  }
};
