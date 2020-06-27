/* ***** ----------------------------------------------- ***** **
** ***** Interaction Utilities JS
** ***** ----------------------------------------------- ***** */

const preventSwipe = (element) => {
  element.addEventListener('touchmove', e => {
    e.preventDefault();
  });
}

export { preventSwipe };
