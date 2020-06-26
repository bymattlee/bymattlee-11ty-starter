import { DateTime } from 'luxon';

module.exports = dateObj => {
	return DateTime.fromJSDate(dateObj).toFormat('yyyy-LL-dd');
}
