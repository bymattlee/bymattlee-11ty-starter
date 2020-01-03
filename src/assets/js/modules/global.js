/* ***** ----------------------------------------------- ***** **
** ***** Global JS
** ***** ----------------------------------------------- ***** */

/* global Main, Modernizr, objectFitImages */
(function($){
  'use strict';

  Main.modules.global = function() {

    var $body = $('.js-body'),
      
      modernizrCheck = function() {

        // Display message for user to upgrade if browser does not support flexbox
        if (Modernizr.flexbox === false ||
          Modernizr.svg === false) {

          var upgradeMessage = 'For an improved browsing experience, please upgrade your browser to the latest version. Click here to upgrade.';

          displaySiteAlert(upgradeMessage, 'http://outdatedbrowser.com/');

        }

      },

      displaySiteAlert = function(message, link) {

        var markup = '';

        markup += '<div class="c-siteAlert">';

        if (link) {
          markup += '<a href="' + link + '" class="c-siteAlert-link" target="_blank">' + message + '</a>';
        } else {
          markup += '<span class="c-siteAlert-message">' + message + '</span>';
        }

        markup += '</div>';

        $body.append(markup);

      },

      enableObjectFitPolyfill = function() {
        objectFitImages();
      };

    return {
      init: function() {
        modernizrCheck();
        enableObjectFitPolyfill();
      },
      displaySiteAlert: displaySiteAlert
    };
    
  };

})(jQuery);