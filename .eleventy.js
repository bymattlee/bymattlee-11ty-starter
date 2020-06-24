module.exports = function(config) {

  // If prod or stage, minify the html
  if (process.env.NODE_ENV !== 'development') {
    config.addTransform('minifyHtml', require('./eleventy/utilities/minifyHtml.js'));
  }

  // Add header credit to html
  config.addTransform('addHeaderCredit', require('./eleventy/utilities/addHeaderCredit.js'));

  // Filters
  config.addFilter('absoluteUrl', require('./eleventy/filters/absoluteUrl.js'));
  config.addFilter('cacheBust', require('./eleventy/filters/cacheBust.js'));

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
