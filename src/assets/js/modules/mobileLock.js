/* ***** ----------------------------------------------- ***** **
** ***** Mobile Lock JS
** ***** ----------------------------------------------- ***** */

import iNoBounce from 'iNoBounce';

const preventSwipe = (element) => {
	element.addEventListener('touchmove', e => {
    e.preventDefault();
  });
}

const init = () => {
  iNoBounce.disable();
}

export { init, preventSwipe };
