/* ***** ----------------------------------------------- ***** **
/* ***** Main JS
/* ***** ----------------------------------------------- ***** */

import Highway from '@dogstudio/highway';
import { setActiveLink, updateBodyClasses, trackGA } from './components/highway.js';
import Fade from './transitions/Fade'

import { init as globalInit } from './components/global.js';
import Scroll2Reveal from './vendors/Scroll2Reveal.js';

// Init on first load
globalInit();
const s2r = new Scroll2Reveal();

// Init Highway
const H = new Highway.Core({
  transitions: {
    default: Fade
  }
});

// Executed at the start of every page load
H.on('NAVIGATE_IN', ({to, location}) => {
  setActiveLink(location);
  updateBodyClasses(to);
  s2r.reInit();
});

// Executed when the page has loaded completely
H.on('NAVIGATE_END', ({to, location}) => {
  trackGA(to, location);
});
