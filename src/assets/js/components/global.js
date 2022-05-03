/* ***** ----------------------------------------------- ***** **
** ***** Global JS
** ***** ----------------------------------------------- ***** */

import Alpine from 'alpinejs'
import 'lazysizes';
import 'lazysizes/plugins/bgset/ls.bgset';

const init = () => {
  window.Alpine = Alpine;
  Alpine.start();
}

export { init };
