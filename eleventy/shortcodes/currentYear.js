/* ***** ----------------------------------------------- ***** **
/* ***** Current Year Shortcode
/* ***** ----------------------------------------------- ***** */

const { DateTime } = require('luxon')

module.exports = () => {
  return DateTime.local().toFormat('yyyy')
}
