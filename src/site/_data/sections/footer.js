const client = require('../../../../eleventy/utilities/sanityClient.js');
const groq = require('groq');

const filter = groq`
  *[_type == "sectionsFooter" && !(_id in path('drafts.**'))]{
    'menu': footerMenu->menuItems[]{
      'name': menuItemName,
      'url': menuItemUrl,
      openInNewTab
    }
  }[0]
`;

module.exports = async () => {
  return await client.fetch(filter).catch(err => console.error(err));
}
