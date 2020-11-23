/* ***** ----------------------------------------------- ***** **
/* ***** Main JS
/* ***** ----------------------------------------------- ***** */

import Highway from '@dogstudio/highway';
import { setActiveLink, updateBodyClasses, trackGA } from './components/highway.js';
import Fade from './transitions/Fade'

import { init as globalInit } from './components/global.js';
import { init as s2rInit, reInit as s2rReInit } from './components/s2r.js';

// Init on first load
globalInit();
s2rInit();

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
  s2rReInit();
});

// Executed when the page has loaded completely
H.on('NAVIGATE_END', ({to, location}) => {
  trackGA(to, location);
});
