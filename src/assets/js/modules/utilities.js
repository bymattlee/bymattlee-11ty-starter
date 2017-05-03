/* ***** ----------------------------------------------- ***** **
** ***** Utilities JS
** ***** ----------------------------------------------- ***** */

/* global Main */
(function($){
	'use strict';

	Main.modules.utilities = function() {

		var windowWidth = $(window).width(),
			tabletWidth = 768,
			mediumWidth = 900,
			desktopWidth = 1100,

			isMobileWidth = function() {
				return (windowWidth < tabletWidth ? true : false);
			},

			isTabletWidth = function() {
				return (windowWidth >= tabletWidth && windowWidth < desktopWidth ? true : false);
			},

			isMediumWidth = function() {
				return (windowWidth >= tabletWidth && windowWidth < mediumWidth ? true : false);
			},

			isDesktopWidth = function() {
				return (windowWidth >= desktopWidth ? true : false);
			},

			isChrome = function() {
				return navigator.userAgent.match(/Chrome/i) || navigator.userAgent.match(/CriOS/i);
			},

			isSafari = function() {
				return navigator.userAgent.match(/Safari/i) && !isChrome();
			},

			isFirefox = function() {
				return navigator.userAgent.match(/Firefox/i);
			},

			isDeviceAndroid = function() {
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
			isMobileWidth: isMobileWidth,
			isTabletWidth: isTabletWidth,
			isMediumWidth: isMediumWidth,
			isDesktopWidth: isDesktopWidth,
			isChrome: isChrome,
			isSafari: isSafari,
			isFirefox: isFirefox,
			isDevice: isDevice
		}
		
	};

})(jQuery);