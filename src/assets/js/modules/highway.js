/* ***** ----------------------------------------------- ***** **
** ***** Highway JS
** ***** ----------------------------------------------- ***** */

/* global gtag, gaId */
import Highway from '@dogstudio/highway';
import gsap from 'gsap';

// Fade in/out transition
class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    // Animation
    gsap.fromTo(to, 0.4, {opacity: 0}, {opacity: 1, onComplete: done});
  }

  out({ from, done }) {
    gsap.fromTo(from, 0.4, {opacity: 1}, {opacity: 0, onComplete: done});
  }
}

// Set active link on newly loaded page
const setActiveLink = location => {
  const menuItem = document.querySelectorAll('.js-menuItem');

  menuItem.forEach(item => {
    item.classList.remove('u-white');
    if (item.href === location.href) item.classList.add('u-white');
  });
};

// Update body classes from new page
const updateBodyClasses = to => {
  document.body.classList = to.page.body.classList;
};

// Track Google Analytics on a new page load
const trackGA = ((to, location) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', gaId, {
      'page_path': location.pathname,
      'page_title': to.page.title,
      'page_location': location.href
    });
  }
});

const init = () => {
  // Init Highway
  const H = new Highway.Core({
    transitions: {
      default: Fade
    }
  });

  // Executed at the start of page load
  H.on('NAVIGATE_IN', ({to, location}) => {
    setActiveLink(location);
    updateBodyClasses(to);
  });

  // Executed when the page has loaded completely
  H.on('NAVIGATE_END', ({to, location}) => {
    trackGA(to, location);
  });
}

export { init };