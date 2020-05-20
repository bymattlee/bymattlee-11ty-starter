/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - Deploy
/* ***** ----------------------------------------------- ***** */

import config from '../config';
import gif from 'gulp-if';
import gulp from 'gulp';
import gutil from 'gulp-util';
import notify from 'gulp-notify';
import rsync from 'gulp-rsync';

// Environment variables
const isProduction = !!gutil.env.production;
const isStaging = !!gutil.env.staging;
const isDevelopment = !isProduction && !isStaging;

const isClean = !!gutil.env.clean;

let hostSettings = null;
let hostSettingsNotFound = false;
const notifyTitle = 'ERROR';
const notFoundMessage = 'hostSettings.json was not found. Unable to deploy files to host server.';
const deployErrorMessage = 'Please use a flag (--staging or --production) to target a host server.';

// Check if hostSettings.json is present
try {
  hostSettings = require('../hostSettings.json');

  if (isProduction) {
    hostSettings = hostSettings.production;
  } else {
    hostSettings = hostSettings.staging;
  }

} catch (e) {
  hostSettingsNotFound = true;
}

/*
** -- Deploy dist directory to host server based on flag (--production or --staging)
** -- If hostSettings.json is not present, display error message
** -- If a flag (--production or --staging) is not used, display error message
*/
function deploy() {
  return gulp.src(config.deploy.src)
    .pipe(gif(hostSettingsNotFound, notify({
      title: notifyTitle,
      message: notFoundMessage,
      onLast: true
    })))
    .pipe(gif(isDevelopment, notify({
      title: notifyTitle,
      message: deployErrorMessage,
      onLast: true
    })))
    .pipe(gif(!isDevelopment, rsync({
      hostname: hostSettings ? hostSettings.hostname : '',
      username: hostSettings ? hostSettings.username : '',
      destination: hostSettings ? hostSettings.destination : '',
      root: config.deploy.root,
      archive: true,
      recursive: true,
      clean: isClean ? true : false
    })));
}

export default deploy;
