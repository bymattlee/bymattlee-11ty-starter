/* ***** ----------------------------------------------- ***** **
** ***** Display Utilities JS
** ***** ----------------------------------------------- ***** */

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

export { displaySiteAlert };
