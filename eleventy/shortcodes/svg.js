/* ***** ----------------------------------------------- ***** **
/* ***** SVG Shortcode
/* ***** ----------------------------------------------- ***** */

const absoluteUrl = require('../filters/absoluteUrl.js')

module.exports = (name = '', viewbox = '0 0 50 50', classes = '') => {
  return `
    <svg viewBox="${viewbox}" aria-hidden="true"${
    classes ? ` class="${classes}"` : ''
  }>
      <use xlink:href="${absoluteUrl('')}/assets/svgs/sprite.svg#${name}"></use>
    </svg>
  `
}
