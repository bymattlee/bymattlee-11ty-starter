/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Eleventy
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync'
import Eleventy from '@11ty/eleventy'
import run from 'gulp-run-command'
import regeneratorRuntime from 'regenerator-runtime' // Added to use async functions in _data during Gulp compilation

// Build with 11ty
const eleventyBuild = async () => {
  let elev = new Eleventy()
  await elev.write()
}

// Build with 11ty and reload browser when complete
const eleventyInitWatch = () => {
  run('npx @11ty/eleventy --watch')()
}

export { eleventyBuild, eleventyInitWatch }
