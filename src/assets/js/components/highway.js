/* ***** ----------------------------------------------- ***** **
** ***** Highway JS
** ***** ----------------------------------------------- ***** */

/* global gtag, gaId */

// Set active link on newly loaded page
// Check if user is on the same page as current nav item
// Or if user is in the same section as nav item
const setActiveLink = location => {
  const menuItem = document.querySelectorAll('.js-menuItem');

  menuItem.forEach(item => {
    item.classList.remove('u-white');
    if (item.href === location.href) {
      item.classList.add('u-white');
    } else {
      const currentItemSlug = item.href.split('/')[3];
      const currentLocationSlug = location.href.split('/')[3];
      if (currentItemSlug === currentLocationSlug) item.classList.add('u-white');
    }
  });
};

// Update body classes from new page
const updateBodyClasses = to => {
  document.body.classList = to.page.body.classList;
};

// Track Google Analytics on a new page load
const trackGA = (to, location) => {
  if (typeof gtag === 'undefined') return;

  gtag('config', gaId, {
    'page_path': location.pathname,
    'page_title': to.page.title,
    'page_location': location.href
  });
};

export { setActiveLink, updateBodyClasses, trackGA };
