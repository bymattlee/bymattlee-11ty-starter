/* ***** ----------------------------------------------- ***** **
/* ***** RSS Date Filter
/* ***** ----------------------------------------------- ***** */

const { DateTime } = require('luxon')

module.exports = (dateObj) => {
  return DateTime.fromJSDate(dateObj).toISO()
}
