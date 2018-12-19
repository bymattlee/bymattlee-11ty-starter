[![ByMattLee](http://hosted.bymattlee.com/github/bymattlee-logo.png)](http://bymattlee.com)

# ByMattLee Web Starter Files
* Serves as a base starting point for static websites
* Uses Gulp 4 as the build tool and Bower to manage front-end packages

## Installation
##### 1. Install Node: <https://nodejs.org/en/>
##### 2. Install all dependencies and build project
```
$ npm install
```
##### 3. Update Gulp Config
All Gulp settings can be found in `gulp/config.js`. Enter in development, staging and production URLs to allow pretty URLs to function properly. See `line 52`, `line 55` and `line 58`
##### 4. Enable Deployment
To enable deployment, create `hostSettings.json` and store in the `gulp` directory. This file should not be checked in as it contains sensitive information. Sample `hostSettings.json`:
```
{
	"staging": {
		"hostname": "X",
		"username": "X",
		"destination": "X"
	},
	"production": {
		"hostname": "X",
		"username": "X",
		"destination": "X"
	}
}
```

## Use
##### Initialize Gulp Watch
```
$ gulp watch
```
##### Development Build - Build Project With Local URL ANd Sourcemaps
```
$ gulp
```
##### Staging Build - Build Project With Staging URL, Without Sourcemaps And Minify HTML
```
$ gulp --staging
```
##### Production Build - Build Project With Production URL, Without Sourcemaps And Minify HTML
```
$ gulp --production
```
##### Deploy `dist` Directory To Staging
```
$ gulp deploy --staging
```
##### Deploy `dist` Directory To Production
```
$ gulp deploy --production
```
##### Gzip `dist` Directory
```
$ gulp gzip
```

## General Features
* Uses Nunjucks templating engine which serves as a static site generator
* Spins up a local development environment through Browsersync
* Browser reload when HTML, JS, image, SVG or asset files are updated
* Styles are injected when SCSS files are updated
* Uses Modernizr to detect flexbox compatibility. If flexbox is not supported, a message will display asking the user to upgrade to latest version of the browser

##### Markup
* Creates pretty URLs out of static templates (absolute URLs are used in the markup)
* Markup is minified
* General site data can be set in `src/html/site_data.json`
* Pages under `src/html/pages` will be compiled to `dist`
* `src/html/base.njk` serves as the base template for the site
* `src/html/partials` contains site partials and components that are reused across the site (modular HTML)

##### Styles
* Includes linter (Stylelint), autoprefixer, minification and sourcemap creation
* SCSS files are located in `src/assets/scss`
* `main.scss` in `src/assets/scss` serves as the base that includes the other dependent SASS files
* `main.scss` gets compiled to `dist/assets/css/main.min.css`
* All vendor CSS are managed by Bower in `src/assets/vendors` and are compiled to `main.min.css`
* `.stylelintrc` contains the settings for Stylelint

##### Scripts
* Includes a custom Modernizr build (based on references in the .scss and .js files), linting (ESLint), concatenation, minification and sourcemap creation
* JS files located in the `src/assets/js` directory will be bundled into `dist/assets/js/main.min.js`
* `main.js` in `src/assets/js` serves as the main JS file that runs all modules
* All modules should be placed in `src/assets/js/modules` so they can be bundled in `main.min.js`
* All vendor JS are managed by Bower in `src/assets/vendors` and are bundled in `vendors.min.js`
* All vendor JS that couldn't be found on Bower can be manually added to `src/assets/js/vendors` and are bundled in `vendors.min.js`
* When adding new devDependencies to Bower, rebuild scripts to ensure they are compiled into `vendors.min.js`
* `.eslintrc` contains the settings for ESLint

##### Images
* Place all unoptimized images in the `src/assets/images` directory
* They will then be optimized and placed in `dist/assets/images`
* Site preview image (`share.jpg`) is included

##### Favicons
* Creates favicons, touch icons, associated files and generates relevant markup that is included in the head
* Place source favicon in `src/assets/favicons` as `favicon.png`
* Place source touch icon in `src/assets/favicons` as `touch-icon.png`
* Favicons, touch icons and associated files are generated to the `dist/assets/favicons` directory
* Markup is generated to `src/html/partials/global/favicons.njk`

##### SVGS
* Place all SVG files in the `src/assets/svg` directory
* They will then be optimized and added to a sprite at `dist/assets/svg/sprite.svg`

##### Other Assets
* All assets (fonts, videos, swfs, etc) under `src/assets` will be copied to `dist/assets` on build

##### Sitemap
* Generates a sitemap based on the HTML files in `dist`

##### Robots.txt
* Generates robots.txt file
* Configuration can be found in `gulp/config.js` in `lines 123-129`

##### Deploy
* Deploys the `dist` directory via SSH
* Use `--clean` flag to delete all files and directories that are not in the destination path

##### Gzip
* Creates a tarball of the `dist` directory and then runs through gzip
* Ideal for packaging up the files to be sent off

## References
* [Google Web Starter Kit](https://github.com/google/web-starter-kit)
* [Viget Labs Gulp Starter](https://github.com/vigetlabs/gulp-starter)
* [Foundation](http://foundation.zurb.com/)
* [Bootstrap](http://getbootstrap.com/)
* [Kickoff](http://trykickoff.com/)
* [Basscss](http://www.basscss.com/)
* [Solid](http://solid.buzzfeed.com/)
* [BigCommerce SASS Style Guide](https://github.com/bigcommerce/sass-style-guide)
* [Gulp For Beginners](https://css-tricks.com/gulp-for-beginners/)
* [Html-Sass-Gulp Starter](https://github.com/MadeInHaus/html-sass-gulp-starter)