/* ***** ----------------------------------------------- ***** **
/* ***** Gulp - BrowserSync
/* ***** ----------------------------------------------- ***** */

import browserSync from 'browser-sync'
import config from '../config'

/*
 ** -- Initialize BrowserSync
 ** -- Use directory specified in config as the root for the server
 */
const browserSyncTask = () => {
  browserSync.init({
    server: config.browserSync.server,
  })
}

export default browserSyncTask
