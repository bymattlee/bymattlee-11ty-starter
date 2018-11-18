/* ***** ----------------------------------------------- ***** **
** ***** Global JS
** ***** ----------------------------------------------- ***** */

/* global Main, Modernizr */
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

			addNotDeviceClassToBody = function() {

				var utilities = Main.modules.utilities(),
					isDevice = utilities.isDevice();

				// Add class to enable hover effects
				if (!isDevice) $body.addClass('l-not_device');

			},

			displaySiteAlert = function(message, link) {

				var $body = $('.js-body'),
					markup = '';

				markup += '<div class="c-site_alert">';

				if (link) {
					markup += '<a href="' + link + '" class="c-site_alert-link" target="_blank">' + message + '</a>';
				} else {
					markup += '<span class="c-site_alert-message">' + message + '</span>';
				}

				markup += '</div>';

				$body.append(markup);

			};

		return {
			init: function() {
				modernizrCheck();
				addNotDeviceClassToBody();
			},
			displaySiteAlert: displaySiteAlert
		};
		
	};

})(jQuery);