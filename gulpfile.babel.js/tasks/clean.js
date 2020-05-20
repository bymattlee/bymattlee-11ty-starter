/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Clean
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import del from 'del';
import gulp from 'gulp';

// Delete dist directory for a clean project rebuild
function clean() {
  return del(config.clean.dest);
}

export default clean;
