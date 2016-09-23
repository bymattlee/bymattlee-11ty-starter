/* ***** ----------------------------------------------- ***** **
** ***** Utilities JS
** ***** ----------------------------------------------- ***** */

/* global Main */
(function($){
	'use strict';

	Main.modules.utilities = function() {

		var isDeviceAndroid = function() {
				return navigator.userAgent.match(/Android/i);
			},

			isDeviceBlackBerry = function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},

			isDeviceiOS = function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},

			isDeviceOpera = function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},

			isDeviceWindows = function() {
				return navigator.userAgent.match(/IEMobile/i);
			},

			isDevice = function() {
				return (isDeviceAndroid() || isDeviceBlackBerry() || isDeviceiOS() || isDeviceOpera() || isDeviceWindows());
			};

		return {
			init: function() {},
			isDevice: isDevice
		}
		
	};

})(jQuery);