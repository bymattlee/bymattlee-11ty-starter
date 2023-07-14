/* ***** ----------------------------------------------- ***** **
 ** ***** Taxi JS
 ** ***** ----------------------------------------------- ***** */

/* global gtag, gaId */

// Set active link on newly loaded page
// Check if user is on the same page as current nav item
// Or if user is in the same section as nav item
const setActiveLink = () => {
  const menuItem = document.querySelectorAll('.js-menu-item')

  menuItem.forEach((item) => {
    item.classList.remove('u-text-white')
    if (item.href === location.href) {
      item.classList.add('u-text-white')
    } else {
      const currentItemSlug = item.href.split('/')[3]
      const currentLocationSlug = location.href.split('/')[3]
      if (currentItemSlug === currentLocationSlug)
        item.classList.add('u-text-white')
    }
  })
}

// Update body classes from new page
const updateBodyClasses = (to) => {
  document.body.classList = to.page.body.classList
}

// Track Google Analytics on a new page load
const trackGA = (to) => {
  if (typeof gtag === 'undefined') return

  gtag('config', gaId, {
    page_path: location.pathname,
    page_title: to.page.title,
    page_location: location.href,
  })
}

export { setActiveLink, updateBodyClasses, trackGA }
