// /* ***** ----------------------------------------------- ***** **
// ** ***** Global JS
// ** ***** ----------------------------------------------- ***** */

/* global Modernizr */
import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset';
import objectFitImages from 'object-fit-images';
import 'svgxuse';

// Display message for user to upgrade if browser does not support flexbox
const modernizrCheck = () => {
  if (!Modernizr.flexbox || !Modernizr.svg ) {
    const upgradeMessage = 'For an improved browsing experience, please upgrade your browser to the latest version. Click here to upgrade.';
    displaySiteAlert(upgradeMessage, 'http://outdatedbrowser.com/');
  }
}

const displaySiteAlert = (message, link) => {
  const body = document.querySelector('body');
  let markup = '';

  markup += '<div class="u-fixed u-bottom u-left u-wFull u-textCenter u-z10">';

  if (link) {
    markup += `<a href="${link}" class="u-block u-white u-greyLightC-hover u-white-active u-p15 u-p20-md" target="_blank">${message}</a>`;
  } else {
    markup += `<span class="u-block u-white u-p15 u-p15-md">${message}</span>`;
  }

  markup += '<span class="u-block u-absolute u-fullCover u-zBelow u-bgBlack u-opacity75"></span></div>';

  body.insertAdjacentHTML('beforeend', markup);
}

const init = () => {
  modernizrCheck();
  objectFitImages();
}

export { init, displaySiteAlert };
