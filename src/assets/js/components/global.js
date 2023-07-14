/* ***** ----------------------------------------------- ***** **
 ** ***** Global JS
 ** ***** ----------------------------------------------- ***** */

import Alpine from 'alpinejs'
import 'lazysizes'
import 'lazysizes/plugins/bgset/ls.bgset'

import menuOverlayStore from '../store/menuOverlay.js'

const init = () => {
  window.Alpine = Alpine
  Alpine.store('menuOverlay', menuOverlayStore)
  Alpine.start()
}

export { init }
