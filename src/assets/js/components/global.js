/* ***** ----------------------------------------------- ***** **
** ***** Global JS
** ***** ----------------------------------------------- ***** */

/* global Modernizr */
import 'alpinejs';
import iNoBounce from 'inobounce';
import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset';
import objectFitImages from 'object-fit-images';
import 'svgxuse';
import { displaySiteAlert } from '../utilities/display.js';

// Display message for user to upgrade if browser does not support flexbox
const modernizrCheck = () => {
  if (!Modernizr.flexbox || !Modernizr.svg) {
    const upgradeMessage = 'For an improved browsing experience, please upgrade your browser to the latest version. Click here to upgrade.';
    displaySiteAlert(upgradeMessage, 'http://outdatedbrowser.com/');
  }
}

const init = () => {
  modernizrCheck();
  objectFitImages();
  iNoBounce.disable();
}

export { init };
