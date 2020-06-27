const { DateTime } = require('luxon');

module.exports = dateObj => {
  return DateTime.fromJSDate(dateObj).toFormat('LLL dd, yyyy');
}
