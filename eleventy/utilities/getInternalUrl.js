/* ***** ----------------------------------------------- ***** **
/* ***** Get Internal URL
/* ***** ----------------------------------------------- ***** */

const absoluteUrl = require('../filters/absoluteUrl.js')
const articleUrl = require('../filters/articleUrl.js')

module.exports = (slug, type) => {
  if (type === 'page') {
    return slug === 'index' ? absoluteUrl('/') : absoluteUrl(`/${slug}/`)
  } else if (type === 'article') {
    return articleUrl(slug)
  } else {
    return slug
  }
}
