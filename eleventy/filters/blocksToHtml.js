/* ***** ----------------------------------------------- ***** **
/* ***** Blocks To HTML Filter
/* ***** ----------------------------------------------- ***** */

const blocksToHtml = require('@sanity/block-content-to-html');
const getYouTubeID = require('get-youtube-id');
const imageUrl = require('../shortcodes/imageUrl.js');
const getInternalUrl = require('../utilities/getInternalUrl.js');

const h = blocksToHtml.h;

const serializers = {
  types: {
    imageBlock: props => (
      h('div', {className: 'u-my30 u-my30-md'},
        h('img', {
          src: imageUrl(props.node.asset),
          alt: props.node.alternativeText
        })
      )
    ),
    youtubeBlock: props => (
      h('iframe', {src: `https://www.youtube.com/embed/${getYouTubeID(props.node.youtubeUrl)}`})
    )
  },
  marks: {
    internalLink: props => (
      h('a', {href: getInternalUrl(props.mark.slug, props.mark.dataType)}, props.children)
    ),
    externalLink: props => (
      h('a', {
        href: props.mark.href,
        target: '_blank',
        rel: 'noopener'
      },
      props.children)
    )
  }
};

module.exports = value => {
  return blocksToHtml({
    blocks: value,
    serializers: serializers
  });
}
