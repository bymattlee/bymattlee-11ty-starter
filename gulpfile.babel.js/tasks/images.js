/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Images
/* ***** ----------------------------------------------- ***** */

import changed from 'gulp-changed'
import config from '../config'
import flatMap from 'flat-map'
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import imageminJpegRecompress from 'imagemin-jpeg-recompress'
import path from 'path'
import readMetadata from 'gulp-scale-images/read-metadata'
import scaleImages from 'gulp-scale-images'
import size from 'gulp-size'
import through from 'through2'

/*
 ** -- Check if image is already in dist directory and has changed
 ** -- Optimize image for production
 */
const imagesOptimize = () => {
  return gulp
    .src(config.images.optimizeSrc)
    .pipe(changed(config.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imageminJpegRecompress(),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo(),
      ])
    )
    .pipe(
      size({
        title: 'Optimized File Size:',
        showFiles: true,
      })
    )
    .pipe(gulp.dest(config.images.dest))
}

/*
 ** -- Check if image is already in dist directory and has changed
 ** -- Generate responsive images by resizing them to various sizes
 */
const getFileWidth = function (file, _, callback) {
  readMetadata(file, function (error, meta) {
    if (error) return callback(error)
    file.width = meta.width
    callback(null, file)
  })
}

const imageVariants = function (file, callback) {
  const imageSizes = []

  if (file.width >= 200) {
    const img200 = file.clone()
    img200.scale = { maxWidth: 200 }
    imageSizes.push(img200)
  }

  if (file.width >= 400) {
    const img400 = file.clone()
    img400.scale = { maxWidth: 400 }
    imageSizes.push(img400)
  }

  if (file.width >= 600) {
    const img600 = file.clone()
    img600.scale = { maxWidth: 600 }
    imageSizes.push(img600)
  }

  if (file.width >= 800) {
    const img800 = file.clone()
    img800.scale = { maxWidth: 800 }
    imageSizes.push(img800)
  }

  if (file.width >= 1000) {
    const img1000 = file.clone()
    img1000.scale = { maxWidth: 1000 }
    imageSizes.push(img1000)
  }

  if (file.width >= 1200) {
    const img1200 = file.clone()
    img1200.scale = { maxWidth: 1200 }
    imageSizes.push(img1200)
  }

  if (file.width >= 1400) {
    const img1400 = file.clone()
    img1400.scale = { maxWidth: 1400 }
    imageSizes.push(img1400)
  }

  if (file.width >= 1600) {
    const img1600 = file.clone()
    img1600.scale = { maxWidth: 1600 }
    imageSizes.push(img1600)
  }

  if (file.width >= 1800) {
    const img1800 = file.clone()
    img1800.scale = { maxWidth: 1800 }
    imageSizes.push(img1800)
  }

  callback(null, imageSizes)
}

const newFileName = function (output, scale, callback) {
  const fileName =
    path.basename(output.path, output.extname) +
    '-' +
    scale.maxWidth +
    'w' +
    output.extname
  callback(null, fileName)
}

function imagesGenerateResponsive() {
  return gulp
    .src(config.images.responsiveSrc)
    .pipe(changed(config.images.dest))
    .pipe(through.obj(getFileWidth))
    .pipe(flatMap(imageVariants))
    .pipe(scaleImages(newFileName))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imageminJpegRecompress(),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo(),
      ])
    )
    .pipe(
      size({
        title: 'Optimized File Size:',
        showFiles: true,
      })
    )
    .pipe(gulp.dest(config.images.dest))
}

const images = gulp.parallel(imagesOptimize, imagesGenerateResponsive)

export default images
