/* ***** ----------------------------------------------- ***** **
/* ***** Article Category URL Filter
/* ***** ----------------------------------------------- ***** */

const absoluteUrl = require('./absoluteUrl.js');

module.exports = value => {
  return absoluteUrl(`/articles/category/${value}/`);
}
