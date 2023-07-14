/* ***** ----------------------------------------------- ***** **
/* ***** Blocks To HTML Filter
/* ***** ----------------------------------------------- ***** */

const blocksToHtml = require('@sanity/block-content-to-html')
const getYouTubeID = require('get-youtube-id')
const getVideoId = require('get-video-id')
const imageUrl = require('../shortcodes/imageUrl.js')
const imageSrcset = require('../shortcodes/imageSrcset.js')
const getInternalUrl = require('../utilities/getInternalUrl.js')

const h = blocksToHtml.h

const serializers = {
  types: {
    imageBlock: (props) =>
      h('figure', { className: 'u-my-30 md:u-my-40' }, [
        h('img', {
          dataset: {
            srcset: imageSrcset(props.node.asset),
            sizes: 'auto',
          },
          alt: props.node.alternativeText,
        }),
        h(
          'figcaption',
          { class: 'u-mt-10 u-text-12 md:u-text-14' },
          props.node.caption
        ),
      ]),
    youtubeBlock: (props) =>
      h('iframe', {
        src: `https://www.youtube.com/embed/${getYouTubeID(
          props.node.youtubeUrl
        )}`,
      }),
    vimeoBlock: (props) =>
      h('iframe', {
        src: `https://player.vimeo.com/video/${
          getVideoId(props.node.vimeoUrl).id
        }`,
      }),
  },
  marks: {
    internalLink: (props) =>
      h(
        'a',
        {
          href: getInternalUrl(props.mark.slug, props.mark.dataType),
          class: props.mark.linkButton ? 'o-button' : '',
        },
        props.children
      ),
    link: (props) =>
      h(
        'a',
        {
          href: props.mark.href,
          target: '_blank',
          rel: 'noopener',
          class: props.mark.linkButton ? 'o-button' : '',
        },
        props.children
      ),
  },
}

module.exports = (value) => {
  const html = blocksToHtml({
    blocks: value,
    serializers: serializers,
  })

  // If html starts with an empty div, remove brcause it interferes with s2r
  if (html.startsWith('<div>')) {
    return html.slice(5).slice(0, -6)
  } else {
    return html
  }
}
