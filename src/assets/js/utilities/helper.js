/* ***** ----------------------------------------------- ***** **
** ***** Helper Utilities JS
** ***** ----------------------------------------------- ***** */

const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]'); // eslint-disable-line no-useless-escape
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export { getUrlParameter };
