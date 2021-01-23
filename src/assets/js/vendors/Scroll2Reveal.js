/* ***** ----------------------------------------------- ***** **
** ***** Scroll2Reveal JS
** ***** ----------------------------------------------- ***** */

/*

Scroll2Reveal - Display elements are they come into view

Requires: GSAP 3+

Two implementation approaches:

[1] Group Reveal
    - Details
      - Once a group container comes into view, the elements in the group animate one-by-one
      - Each element each have a different animation style
    - Usage
      - Add this selector to the group container - [data-s2r="group"]
      - Add this selector to the child elements that will animate - [data-s2r-el="XXX"]
        - Replace "XXX" with the animation style. Choose from:
          - "block-fade-up" - Animates the element by fading up
          - "block-fade-in" - Animtes the element by fading in
          - "stagger-fade-up" - Stagger animate child elements by fading up. Automatically selects child elements
          - "stagger-fade-in" - Stagger animate child elements by fading in. Automatically selects child elements
        - Use the following selectors for custom options
          - Delay - [data-s2r-delay="0.1"]
          - Duration - [data-s2r-duration="0.6"]

[2] Single Reveal
    - Details
      - Once an element comes into view, the element animates in
    - Usage
      - Add this selector to the element - [data-s2r="single"]
      - Add this selector to the element to specify the animation type - [data-s2r-type="XXX"]
        - Replace "XXX" with the animation style. Choose from:
          - "block-fade-up" - Animates the element by fading up
          - "block-fade-in" - Animates the element by fading in
          - "stagger-fade-up" - Stagger animate child elements by fading up. Add this selector to each child element - [data-s2r-el]
          - "stagger-fade-in" - Stagger animate child elements by fading in. Add this selector to each child element - [data-s2r-el]
          - "stagger-fade-up-children" - Stagger animate child elements by fading up. Automatically selects child elements
          - "stagger-fade-in-children" - Stagger animate child elements by fading in. Automatically selects child elements
        - Use the following selectors for custom options
          - Delay - [data-s2r-delay="0.1"]
          - Duration - [data-s2r-duration="0.6"]
          - Stagger (works for "stagger-fade-up" and "stagger-fade-in") - [data-s2r-stagger="0.1"]

*/

import gsap from 'gsap';

class Scroll2Reveal {
  constructor() {
    // Check if s2r elements are present. If so, do nothing
    this.s2r = document.querySelectorAll('[data-s2r]');
    if (!this.s2r.length) return;

    // Define global, reusable vars
    this.s2rActive;
    this.observer;
    this.initDelay = 100;

    // Init
    window.addEventListener('DOMContentLoaded', () => {
      this.init();
    });
  }

  init() {
    // Add init delay to allow page to load before animating
    setTimeout(() => { this.reveal(); }, this.initDelay);
  }

  reveal() {
    // Check if element has already animated, if so, do nothing
    this.s2rActive = document.querySelectorAll('[data-s2r]:not(.s2r-in-view)');
    if (!this.s2rActive.length) return;

    this.observer = new IntersectionObserver(entries => { 
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const thisEl = entry.target;

          if (thisEl.classList.contains('s2r-in-view')) return;

          thisEl.classList.add('s2r-in-view');

          if (thisEl.dataset.s2r === 'group') {
            this.groupReveal(thisEl);
          } else if (thisEl.dataset.s2r === 'single') {
            this.singleReveal(thisEl);
          }

        }
      });
    }, {rootMargin: `0px 0px ${window.innerHeight * -0.2}px 0px`});

    this.s2rActive.forEach(el => { 
      this.observer.observe(el);
    });
  }

  groupReveal(el) {
    const childEl = el.querySelectorAll('[data-s2r-el]');

    // Select each child element and animate
    childEl.forEach(el => { 
      const thisElType = el.dataset.s2rEl;
      const delay = el.dataset.s2rDelay || 0;
      const duration = el.dataset.s2rDuration || 0.8;

      if (thisElType === 'block-fade-up') {
        gsap.fromTo(el,
          {opacity: 0, y: '40px'},
          {opacity: 1, y: '0px', duration: duration, delay: delay, ease: 'power2.out'}
        );
      } else if (thisElType === 'block-fade-in') {
        gsap.fromTo(el,
          {opacity: 0},
          {opacity: 1, duration: duration, delay: delay, ease: 'power2.out'}
        );
      } else if (thisElType === 'stagger-fade-up') {
        const stagger = el.dataset.s2rStagger || 0.1;
        const staggerEl = el.children;

        gsap.fromTo(staggerEl,
          {opacity: 0, y: '40px'},
          {opacity: 1, y: '0px', stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
        );
      } else if (thisElType === 'stagger-fade-in') {
        const stagger = el.dataset.s2rStagger || 0.1;
        const staggerEl = el.children;
        
        gsap.fromTo(staggerEl,
          {opacity: 0},
          {opacity: 1, stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
        );
      }
    });
  }

  singleReveal(el) {
    const childEl = el.querySelectorAll('[data-s2r-el]');
    const thisElType = el.dataset.s2rType;
    const delay = el.dataset.s2rDelay || 0;
    const duration = el.dataset.s2rDuration || 0.8;
    const stagger = el.dataset.s2rStagger || 0.1;

    // Play the animation on the single element
    if (thisElType === 'block-fade-up') {
        gsap.fromTo(el,
          {opacity: 0, y: '40px'},
          {opacity: 1, y: '0px', duration: duration, delay: delay, ease: 'power2.out'}
        );
    } else if (thisElType === 'block-fade-in') {
        gsap.fromTo(el,
          {opacity: 0},
          {opacity: 1, duration: duration, delay: delay, ease: 'power2.out'}
        );
    } else if (thisElType === 'stagger-fade-up') {
      gsap.fromTo(childEl,
        {opacity: 0, y: '40px'},
        {opacity: 1, y: '0px', stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
      );
    } else if (thisElType === 'stagger-fade-in') {
      gsap.fromTo(childEl,
        {opacity: 0},
        {opacity: 1, stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
      );
    } else if (thisElType === 'stagger-fade-up-children') {
      const staggerEl = el.children;
      gsap.fromTo(staggerEl,
        {opacity: 0, y: '40px'},
        {opacity: 1, y: '0px', stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
      );
    } else if (thisElType === 'stagger-fade-in-children') {
      const staggerEl = el.children;
      gsap.fromTo(staggerEl,
        {opacity: 0},
        {opacity: 1, stagger: stagger, duration: duration, delay: delay, ease: 'power2.out'}
      );
    }
  }

  reInit() {
    // If s2r is undefined on reInit, init again
    // This can happen if s2r was initialized on an empty page and reInit was called on new page load with Highway
    if (typeof this.observer === 'undefined') {
      this.init()
    } else {
      this.s2rActive = document.querySelectorAll('[data-s2r]:not(.s2r-in-view)');
      this.s2rActive.forEach(el => { 
        // Add init delay to allow page to load before animating
        setTimeout(() => { this.observer.observe(el); }, this.initDelay);
      });
    }
  }
}

export default Scroll2Reveal;
