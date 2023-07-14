const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "articleCategory" && !(_id in path('drafts.**'))] {
    description,
    'slug': slug.current,
    title,
    'articles': *[_type == "article" && references(^._id)]{
      categories[]->{
        title,
        'slug': slug.current
      },
      excerpt,
      publishedAt,
      'slug': slug.current,
      title
    } | order(publishedAt desc)
  } | order(title asc)
`

module.exports = async () => {
  return await client.fetch(filter).catch((err) => console.error(err))
}
