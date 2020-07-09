const client = require('../../../../eleventy/utilities/sanityClient.js');
const groq = require('groq');

const filter = groq`
  *[_type == "settingsSocial" && !(_id in path('drafts.**'))]{
    socialSites[] {
      'type': _type,
      facebookUrl,
      twitterUrl,
      instagramUrl,
      youtubeUrl
    },
    twitterHandle
  }[0]
`;

module.exports = async () => {
  return await client.fetch(filter).catch(err => console.error(err));
}
