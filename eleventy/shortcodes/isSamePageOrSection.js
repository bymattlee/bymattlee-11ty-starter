/* ***** ----------------------------------------------- ***** **
/* ***** Same Page Or Section Check Shortcode
/* ***** ----------------------------------------------- ***** */

module.exports = (currentItem, currentUrl, className) => {
  /*
   ** Check if user is on the same page as current nav item
   ** Or if user is in the same section as nav item
   ** If so, print class to highlight nav item
   */

  let isSamePageOrSection = false

  if (currentItem === currentUrl) {
    isSamePageOrSection = true
  } else {
    const currentItemSlug = currentItem.split('/')[1]
    const currentSectionSlug = currentUrl.split('/')[1]
    if (currentItemSlug === currentSectionSlug) {
      isSamePageOrSection = true
    }
  }
  return isSamePageOrSection ? className : ''
}
