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
const rssLastUpdatedDate = require('./eleventy/filters/rssLastUpdatedDate.js');
const rssDate = require('./eleventy/filters/rssDate.js');
const articleUrl = require('./eleventy/filters/articleUrl.js');
const articleCategoryUrl = require('./eleventy/filters/articleCategoryUrl.js');
const blocksToHtml = require('./eleventy/filters/blocksToHtml.js');

// Import shortcodes
const imageUrl = require('./eleventy/shortcodes/imageUrl.js');
const imageSrcset = require('./eleventy/shortcodes/imageSrcset.js');
const isSamePageOrSection = require('./eleventy/shortcodes/isSamePageOrSection.js');
const svg = require('./eleventy/shortcodes/svg.js');
const currentYear = require('./eleventy/shortcodes/currentYear.js');

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
  config.addFilter('rssLastUpdatedDate', rssLastUpdatedDate);
  config.addFilter('rssDate', rssDate);
  config.addFilter('articleUrl', articleUrl);
  config.addFilter('articleCategoryUrl', articleCategoryUrl);
  config.addFilter('blocksToHtml', blocksToHtml);

  // Shortcodes
  config.addShortcode('imageUrl', imageUrl);
  config.addShortcode('imageSrcset', imageSrcset);
  config.addShortcode('isSamePageOrSection', isSamePageOrSection);
  config.addShortcode('svg', svg);
  config.addShortcode('currentYear', currentYear);

  // Layout aliases
  config.addLayoutAlias('base', 'layouts/base.njk');
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('page', 'layouts/page.njk');

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
