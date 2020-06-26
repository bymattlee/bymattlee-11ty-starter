import minifyHtml from './eleventy/utilities/minifyHtml.js';
import addHeaderCredit from './eleventy/utilities/addHeaderCredit.js';
import absoluteUrl from './eleventy/filters/absoluteUrl.js';
import cacheBust from './eleventy/filters/cacheBust.js';
import htmlDate from './eleventy/filters/htmlDate.js';
import readableDate from './eleventy/filters/readableDate.js';
import articles from './eleventy/collections/articles.js';

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
  config.addFilter('htmlDate', htmlDate);
  config.addFilter('readableDate', readableDate);

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
