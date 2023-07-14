/* ***** ----------------------------------------------- ***** **
 ** ***** Default JS
 ** ***** ----------------------------------------------- ***** */

import { Transition } from '@unseenco/taxi'
import gsap from 'gsap'

export default class Default extends Transition {
  onLeave({ from, done }) {
    gsap.fromTo(from, 0.3, { opacity: 1 }, { opacity: 0, onComplete: done })
  }

  onEnter({ to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0)

    // Animation
    gsap.fromTo(to, 0.3, { opacity: 0 }, { opacity: 1, onComplete: done })
  }
}
