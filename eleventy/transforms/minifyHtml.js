/* ***** ----------------------------------------------- ***** **
/* ***** Minify HTML Transform
/* ***** ----------------------------------------------- ***** */

const htmlmin = require('html-minifier')

module.exports = (content, outputPath) => {
  if (outputPath.endsWith('.html')) {
    let minified = htmlmin.minify(content, {
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      processScripts: ['application/ld+json'],
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
    })
    return minified
  }
  return content
}
