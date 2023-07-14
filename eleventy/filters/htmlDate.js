/* ***** ----------------------------------------------- ***** **
/* ***** HTML Date Filter
/* ***** ----------------------------------------------- ***** */

const { DateTime } = require('luxon')

module.exports = (isoDate) => {
  return DateTime.fromISO(isoDate).toFormat('yyyy-LL-dd')
}
