/* ***** ----------------------------------------------- ***** **
/* ***** Gulp
/* ***** ----------------------------------------------- ***** */

/*
** All Gulp tasks are broken up into their own files in gulp/tasks.
** The Gulp config file is located at ./gulp/config.js
*/

var requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});
