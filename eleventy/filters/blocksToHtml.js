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
      h('figure', {className: 'u-my30 u-my40'},
        [
          h('img', {
            src: imageUrl(props.node.asset),
            alt: props.node.alternativeText
          }),
          h('figcaption', { class: 'u-mt10 u-font12 u-font14-md' }, props.node.caption)
        ]
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
    link: props => (
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
  const html = blocksToHtml({
    blocks: value,
    serializers: serializers
  });

  // If html starts with an empty div, remove brcause it interferes with s2r
  if (html.startsWith('<div>')) {
    return html.slice(5).slice(0, -6);
  } else {
    return html;
  }
}
