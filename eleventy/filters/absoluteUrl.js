const envUrls = require('../../envUrls.js');
const homeUrl = envUrls[process.env.NODE_ENV];

module.exports = value => {
	return homeUrl ? homeUrl + value : value;
}
