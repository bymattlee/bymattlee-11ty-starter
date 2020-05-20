/* ***** ----------------------------------------------- ***** **
** ***** Mobile Lock JS
** ***** ----------------------------------------------- ***** */

import iNoBounce from 'iNoBounce';

function preventSwipe(element) {
	element.addEventListener('touchmove', e => {
    e.preventDefault();
  });
}

function init() {
  iNoBounce.disable();
}

export { init, preventSwipe };
