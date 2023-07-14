/* ***** ----------------------------------------------- ***** **
/* ***** Image Srcset Shortcode
/* ***** ----------------------------------------------- ***** */

const absoluteUrl = require('../filters/absoluteUrl.js')
const imageUrl = require('../shortcodes/imageUrl.js')
const sizeOf = require('image-size')

// Generate responsive image srcset based on width
module.exports = (image, isLocal = false) => {
  let imageSrcset = []

  const imageWidths = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800]

  if (isLocal) {
    // If image is local, determine the width of the image and then generate
    // markup for images at sizes smaller than the image

    const localImagePath = `./src/assets/images/${image}`

    const imageDimensions = sizeOf(localImagePath)
    const imageWidth = imageDimensions.width

    const imageFilename = image.split('.')
    const imageName = imageFilename[0]
    const imageExtension = imageFilename[1]

    imageWidths.forEach((width) => {
      if (imageWidth > width)
        imageSrcset.push(
          `${absoluteUrl(
            ''
          )}/assets/images/${imageName}-${width}w.${imageExtension} ${width}w`
        )
    })

    imageSrcset.push(
      `${absoluteUrl(
        ''
      )}/assets/images/${imageName}.${imageExtension} ${imageWidth}w`
    )
  } else {
    // If image is coming from Sanity, generate an image at every size
    imageWidths.forEach((width) =>
      imageSrcset.push(`${imageUrl(image, width)} ${width}w`)
    )
  }

  return imageSrcset.join(', ')
}
