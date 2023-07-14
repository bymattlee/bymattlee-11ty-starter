/* ***** ----------------------------------------------- ***** **
/* ***** RSS Last Updated Date Filter
/* ***** ----------------------------------------------- ***** */

const { DateTime } = require('luxon')

module.exports = (collection) => {
  if (!collection || !collection.length) return ''

  // Newest date in the collection
  return collection[0].publishedAt
}
