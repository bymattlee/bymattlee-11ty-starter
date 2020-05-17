/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Images
/* ***** ----------------------------------------------- ***** */

// Require all development dependencies
var changed = require('gulp-changed'),
  config = require('../config'),
  flatMap = require('flat-map').default,
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  path = require('path'),
  // readMetadata = require('gulp-scale-images/read-metadata'),
  // scaleImages = require('gulp-scale-images'),
  size = require('gulp-size'),
  through = require('through2');

/*
** -- Check if image is already in dist directory and has changed
** -- Optimize image for production
*/
gulp.task('images:optimize', function() {

  return gulp.src(config.images.optimizeSrc)
    .pipe(changed(config.images.dest))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imageminJpegRecompress(),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo()
    ]))
    .pipe(size({
      title: 'Optimized File Size:',
      showFiles: true
    }))
    .pipe(gulp.dest(config.images.dest));

});

/*
** -- Check if image is already in dist directory and has changed
** -- Generate responsive images by resizing them to various sizes
*/

var getFileWidth = function(file, _, callback) {
  readMetadata(file, function(error, meta) {
    if (error) return callback(error)
    file.width = meta.width;
    callback(null, file);
  });
};

var imageVariants = function(file, callback) {

  var imageSizes = [];

  if (file.width >= 200) {
    var img200 = file.clone();
    img200.scale = { maxWidth: 200 };
    imageSizes.push(img200);
  }

  if (file.width >= 400) {
    var img400 = file.clone();
    img400.scale = { maxWidth: 400 };
    imageSizes.push(img400);
  }

  if (file.width >= 600) {
    var img600 = file.clone();
    img600.scale = { maxWidth: 600 };
    imageSizes.push(img600);
  }

  if (file.width >= 800) {
    var img800 = file.clone();
    img800.scale = { maxWidth: 800 };
    imageSizes.push(img800);
  }

  if (file.width >= 1000) {
    var img1000 = file.clone();
    img1000.scale = { maxWidth: 1000 };
    imageSizes.push(img1000);
  }

  if (file.width >= 1200) {
    var img1200 = file.clone();
    img1200.scale = { maxWidth:1200 };
    imageSizes.push(img1200);
  }

  if (file.width >= 1400) {
    var img1400 = file.clone();
    img1400.scale = { maxWidth: 1400 };
    imageSizes.push(img1400);
  }

  if (file.width >= 1600) {
    var img1600 = file.clone();
    img1600.scale = { maxWidth: 1600 };
    imageSizes.push(img1600);
  }

  if (file.width >= 1800) {
    var img1800 = file.clone();
    img1800.scale = { maxWidth: 1800 };
    imageSizes.push(img1800);
  }

  callback(null, imageSizes);
};

var newFileName = function(output, scale, callback) {
  var fileName = path.basename(output.path, output.extname) + '-' + scale.maxWidth + 'w' + output.extname;
  callback(null, fileName);
};

// gulp.task('images:generate-responsive', function() {

//   return gulp.src(config.images.responsiveSrc)
//     .pipe(changed(config.images.dest))
//     .pipe(through.obj(getFileWidth))
//     .pipe(flatMap(imageVariants))
//     .pipe(scaleImages(newFileName))
//     .pipe(imagemin([
//       imagemin.gifsicle({ interlaced: true }),
//       imageminJpegRecompress(),
//       imagemin.optipng({ optimizationLevel: 5 }),
//       imagemin.svgo()
//     ]))
//     .pipe(size({
//       title: 'Optimized File Size:',
//       showFiles: true
//     }))
//     .pipe(gulp.dest(config.images.dest));

// });

// Images task
gulp.task('images', gulp.parallel('images:optimize'));
