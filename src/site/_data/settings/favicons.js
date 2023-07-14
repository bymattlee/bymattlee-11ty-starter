const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "settingsFavicons" && !(_id in path('drafts.**'))]{
    appleTouchIcon,
    favicon
  }[0]
`

module.exports = async () => {
  return await client.fetch(filter).catch((err) => console.error(err))
}
