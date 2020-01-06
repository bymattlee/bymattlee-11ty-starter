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

        markup += '<div class="u-fixed u-bottom u-left u-wFull u-textCenter u-z10">';

        if (link) {
          markup += '<a href="' + link + '" class="u-block u-white u-greyLightC-hover u-white-active u-p15 u-p20-md" target="_blank">' + message + '</a>';
        } else {
          markup += '<span class="u-block u-white u-p15 u-p15-md">' + message + '</span>';
        }

        markup += '<span class="u-block u-absolute u-fullCover u-zBelow u-bgBlack u-opacity75"></span>';
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