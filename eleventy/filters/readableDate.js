/* ***** ----------------------------------------------- ***** **
/* ***** Readable Date Filter
/* ***** ----------------------------------------------- ***** */

const { DateTime } = require('luxon')

module.exports = (isoDate) => {
  return DateTime.fromISO(isoDate).toFormat('LLL dd, yyyy')
}
