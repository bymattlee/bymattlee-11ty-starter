/* ***** ----------------------------------------------- ***** **
** ***** Mobile Lock JS
** ***** ----------------------------------------------- ***** */

/* global Main, iNoBounce */
(function(){
  'use strict';

  Main.modules.mobileLock = function() {

    var preventSwipe = function($element) {

        // Prevent swipe on this element
  
        $element.bind('touchmove', function(e) {
          e.preventDefault();
        });

      };

    return {
      init: function() {
        iNoBounce.disable();
      },
      preventSwipe: preventSwipe
    };
    
  };

})(jQuery);