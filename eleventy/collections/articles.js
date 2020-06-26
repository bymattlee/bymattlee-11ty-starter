module.exports = collection => {
	return collection.getFilteredByGlob('./src/site/articles/*.md').reverse();
}
