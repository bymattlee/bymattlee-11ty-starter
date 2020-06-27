module.exports = collection => {
  const articles = collection.getFilteredByGlob('./src/site/articles/*.md').reverse();

  // Include previous and next article objects for detail pagination
  for (let i = 0; i < articles.length; i++) {
    const previousArticle = articles[i - 1];
    const nextArticle = articles[i + 1];

    articles[i].data['previousArticle'] = previousArticle;
    articles[i].data['nextArticle'] = nextArticle;
  }

  return articles;
}
