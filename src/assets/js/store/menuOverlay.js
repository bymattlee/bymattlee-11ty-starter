/* ***** ----------------------------------------------- ***** **
 ** ***** Menu Overlay JS
 ** ***** ----------------------------------------------- ***** */

const menuOverlayStore = {
  isOpen: false,

  toggle() {
    this.isOpen = !this.isOpen
  },

  close() {
    this.isOpen = false
  },
}

export default menuOverlayStore
