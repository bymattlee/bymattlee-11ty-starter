const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "settingsSeo" && !(_id in path('drafts.**'))]{
    siteDescription,
    siteName,
    siteShareImage
  }[0]
`

module.exports = async () => {
  return await client.fetch(filter).catch((err) => console.error(err))
}
