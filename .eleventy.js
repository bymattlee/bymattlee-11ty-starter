/* ***** ----------------------------------------------- ***** **
/* ***** Eleventy Config
/* ***** ----------------------------------------------- ***** */

// Import transforms
const parseContent = require('./eleventy/transforms/parseContent.js');
const minifyHtml = require('./eleventy/transforms/minifyHtml.js');
const addHeaderCredit = require('./eleventy/transforms/addHeaderCredit.js');

// Import filters
const absoluteUrl = require('./eleventy/filters/absoluteUrl.js');
const cacheBust = require('./eleventy/filters/cacheBust.js');
const htmlDate = require('./eleventy/filters/htmlDate.js');
const readableDate = require('./eleventy/filters/readableDate.js');

// Import Shortcodes
const isSamePageOrSection = require('./eleventy/shortcodes/isSamePageOrSection.js');

// Import collections
const articles = require('./eleventy/collections/articles.js');

module.exports = function(config) {

  // Transforms
  config.addTransform('parseContent', parseContent);
  if (process.env.NODE_ENV !== 'development') config.addTransform('minifyHtml', minifyHtml);
  config.addTransform('addHeaderCredit', addHeaderCredit);


  // Filters
  config.addFilter('absoluteUrl', absoluteUrl);
  config.addFilter('cacheBust', cacheBust);
  config.addFilter('htmlDate', htmlDate);
  config.addFilter('readableDate', readableDate);

  // Shortcodes
  config.addShortcode('isSamePageOrSection', isSamePageOrSection);

  // Collections
  config.addCollection('articles', articles);

  // Layout aliases
  config.addLayoutAlias('base', 'layouts/base.njk')
  config.addLayoutAlias('default', 'layouts/default.njk')
  config.addLayoutAlias('page', 'layouts/page.njk')
  config.addLayoutAlias('article', 'layouts/article.njk')

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
