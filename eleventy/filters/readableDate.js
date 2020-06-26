import { DateTime } from 'luxon';

module.exports = dateObj => {
	return DateTime.fromJSDate(dateObj).toFormat('LLL dd, yyyy');
}
