/* ***** ----------------------------------------------- ***** **
** ***** Fade JS
** ***** ----------------------------------------------- ***** */

import Highway from '@dogstudio/highway';
import gsap from 'gsap';

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);

    // Remove Old View
    from.remove();

    // Animation
    gsap.fromTo(to, 0.3, {opacity: 0}, {opacity: 1, onComplete: done});
  }

  out({ from, done }) {
    gsap.fromTo(from, 0.3, {opacity: 1}, {opacity: 0, onComplete: done});
  }
}

export default Fade
