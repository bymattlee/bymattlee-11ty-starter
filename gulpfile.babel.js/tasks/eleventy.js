/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Eleventy
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync';
import elev from '../../eleventyCmd.js';
import regeneratorRuntime from 'regenerator-runtime'; // Added to use async functions in _data during Gulp compilation

// Build with 11ty
const eleventyBuild = done => {
  elev.write().then(function() {
    done();
  });
}

// Build with 11ty and reload browser when complete
const eleventyWatch = done => {
  elev.restart();
  elev.write().then(function() {
    browserSync.reload();
    done();
  });
}

export { eleventyBuild, eleventyWatch };
