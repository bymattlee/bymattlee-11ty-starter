/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Eleventy
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync';
import elev from '../../eleventyCmd.js';

// Build with 11ty and reload browser if Browsersync is running
const eleventy = done => {
  elev.restart();
  elev.write().then(function() {
    browserSync.reload();
    done();
  });
}

export default eleventy;
