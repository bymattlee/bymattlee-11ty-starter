const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "article" && !(_id in path('drafts.**'))]{
    articleMetaData{
      pageDescription,
      pageShareImage,
      pageTitle
    },
    categories[]->{
      title,
      'slug': slug.current
    },
    excerpt,
    featuredImage,
    mainContent[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "dataType": @.reference->_type
        }
      }
    },
    publishedAt,
    'slug': slug.current,
    title
  } | order(publishedAt desc)
`

const getArticles = async () => {
  const articles = await client.fetch(filter).catch((err) => console.error(err))

  // Include previous and next article objects for previous and next pagination
  for (let i = 0; i < articles.length; i++) {
    const previousArticle = articles[i - 1]
    const nextArticle = articles[i + 1]

    articles[i].previousArticle = previousArticle
    articles[i].nextArticle = nextArticle
  }

  return articles
}

module.exports = getArticles
