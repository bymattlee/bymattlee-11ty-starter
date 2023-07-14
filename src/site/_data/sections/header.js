const client = require('../../../../eleventy/utilities/sanityClient.js')

const filter = `
  *[_type == "sectionsHeader" && !(_id in path('drafts.**'))]{
    'menu': headerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`

module.exports = async () => {
  return await client.fetch(filter).catch((err) => console.error(err))
}
