/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Gzip
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import gulp from 'gulp';
import gzip from 'gulp-gzip';
import size from 'gulp-size';
import tar from 'gulp-tar';

// Create a tarball of the dist directory and compress with gzip
function gzipTask() {
  return gulp.src(config.gzip.src)
    .pipe(tar(config.gzip.filename))
    .pipe(gzip())
    .pipe(gulp.dest(config.gzip.dest))
    .pipe(size({
      title: 'Project Archive File Size:',
      showFiles: true
    }));
}

export default gzipTask;
