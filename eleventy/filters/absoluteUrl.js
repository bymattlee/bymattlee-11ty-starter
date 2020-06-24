import envUrls from '../../envUrls.js';

const homeUrl = envUrls[process.env.NODE_ENV];

module.exports = value => {
	return homeUrl + value;
}
