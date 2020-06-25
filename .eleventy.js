import minifyHtml from './eleventy/utilities/minifyHtml.js';
import addHeaderCredit from './eleventy/utilities/addHeaderCredit.js';
import absoluteUrl from './eleventy/filters/absoluteUrl.js';
import cacheBust from './eleventy/filters/cacheBust.js';

module.exports = function(config) {

  // If prod or stage, minify the html
  if (process.env.NODE_ENV !== 'development') {
    config.addTransform('minifyHtml', minifyHtml);
  }

  // Add header credit to html
  config.addTransform('addHeaderCredit', addHeaderCredit);

  // Filters
  config.addFilter('absoluteUrl', absoluteUrl);
  config.addFilter('cacheBust', cacheBust);

  return {
    dir: {
      input: 'src/site',
      output: 'dist'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };

};
