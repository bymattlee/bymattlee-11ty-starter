const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "settingsAnalytics" && !(_id in path('drafts.**'))]{
    googleAnalyticsId
  }[0]
`

module.exports = async () => {
  return await client.fetch(filter).catch((err) => console.error(err))
}
