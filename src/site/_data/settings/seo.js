const client = require('../../../../eleventy/utilities/sanityClient.js');
const groq = require('groq');

const filter = groq`
  *[_type == "settingsSeo" && !(_id in path('drafts.**'))]{
    siteDescription,
    siteName,
    siteShareImage
  }[0]
`;

module.exports = async () => {
  return await client.fetch(filter).catch(err => console.error(err));
}
