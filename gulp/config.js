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
		'**              {{ creative_developer }}',
		'**',
		'**',
		'**',
		'**',
		'**',
		'*/\n'
	],
	developmentUrl: {
		home_url: 'http://localhost:3000'
	},
	stagingUrl: {
		home_url: 'http://mynameismattlee.com'
	},
	productionUrl: {
		home_url: 'http://bymattlee.com'
	},
	markup: {
		src: src + '/html/pages/**/*.html',
		dest: dest,
		data: '../../' + src + '/html/site_data.json',
		path: src + '/html',
		watchSrc: [
			src + '/html/**/*.njk',
			src + '/html/pages/**/*.html',
			src + '/html/site_data.json'
		]
	},
	styles: {
		src: srcAssets + '/scss/**/*.scss',
		dest: destAssets + '/css'
	},
	scripts: {
		src: [
			srcAssets + '/js/main.js',
			srcAssets + '/js/modules/**/*.js'
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
		}
	},
	images: {
		src: srcAssets + '/images/**/*',
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
		faviconHtmlPath: '../../../src/html/components/favicons.html',
		touchIconHtmlPath: '../../../src/html/components/touch-icons.html',
		concatHtmlSrc: [
			src + '/html/components/favicons.html',
			src + '/html/components/touch-icons.html'
		],
		concatHtmlDest: src + '/html/components'
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
}
