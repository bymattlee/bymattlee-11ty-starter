[![ByMattLee](http://hosted.bymattlee.com/github/bymattlee-logo.png)](http://bymattlee.com)

# ByMattLee Web Starter Files
A starter boilerplate that includes Eleventy as the static site generator and Gulp as the build tool for asset optimization.

## Installation
##### 1. Install Node >=12.0.0: <https://nodejs.org/>
##### 2. Install Yarn: <https://yarnpkg.com/>
##### 3. Install all dependencies
```
$ yarn
```

## Configuration
In `config.js`, update Sanity options and environment URLs for project compilation.

## Use
##### Build Files For Development And Initialize Watch
```
$ yarn dev
```
##### Build Files For Staging
```
$ yarn stage
```
##### Build Files For Production
```
$ yarn prod
```

## General Features
* Spins up a local development environment through Browsersync
* Browser reload when NJK, JS, image, SVG or asset files are updated
* Styles are injected when SCSS files are updated
* Uses Modernizr to detect flexbox and SVG compatibility. If flexbox and/or SVG are not supported, a message will display asking the user to upgrade to latest version of the browser

##### Markup
* Features Eleventy as the static site generator
* Markup is minified in staging and production environments
* Site data can be set in `src/site/_data`
* Pages in `src/site` will be compiled to `dist`
* `src/site/_includes/layouts/base.njk` serves as the base template for the site
* `src/site/_includes/partials` contains site partials and components that are reused across the site (modular HTML)

##### Styles
* Includes linter (Stylelint), autoprefixer, minification and sourcemap creation
* SCSS files are located in `src/assets/scss`
* `main.scss` in `src/assets/scss` serves as the base that includes the other dependent SASS files
* `main.scss` gets compiled to `dist/assets/css/main.min.css`
* `.stylelintrc` contains the settings for Stylelint
* Info about class namespacing can be found in `src/assets/scss/main.scss`
* Default unit of measurement is **rem** and can be switched in `get-size()` in `src/assets/scss/1-tools/_functions.scss`
* Utilizes a custom utility-first CSS approach; available classes can be found in `assets/src/scss/8-utilities`
* Unused CSS (PurgeCSS) will be removed in staging and production builds

##### Scripts
* Utilizes ES2015+ syntax and modules with Babel transpiling
* Includes a custom Modernizr build (based on references in the .scss and .js files), linting (ESLint), concatenation, minification and sourcemap creation
* `main.js` in `src/assets/js` serves as the main JS file that includes and runs all modules and will be compiled to `dist/assets/js/main.min.js`
* All local modules should be placed in `src/assets/js/modules`
* All vendor JS can be manually added to `src/assets/js/vendors` if not found on Yarn
* `.eslintrc` contains the settings for ESLint

##### Images
* Place all unoptimized images in the `src/assets/images` directory
* They will then be optimized and placed in `dist/assets/images`
* Responsive images will be generated at the following widths: 200w, 400w, 600w, 800w, 1000w, 1200w, 1400w, 1600w, 1800w
* See `src/site/_includes/marcos/marco.njk` for usage information
* Site preview image (`share.jpg`) is included

##### SVGS
* Place all SVG files in the `src/assets/svg` directory
* They will then be optimized and added to a sprite at `dist/assets/svg/sprite.svg`
* SVGs can be displayed with the SVG macro at `src/site/_includes/marcos/marco.njk`

##### Other Assets
* All assets (fonts, videos, swfs, etc) under `src/assets` will be copied to `dist/assets` on build

##### Sitemap
* Generates a sitemap based on the HTML files in `dist`

##### Robots.txt
* Generates robots.txt file
* Configuration can be found in `gulpfile.babel.js/config.js`
