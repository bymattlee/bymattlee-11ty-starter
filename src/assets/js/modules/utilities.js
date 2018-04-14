/* ***** ----------------------------------------------- ***** **
** ***** Utilities JS
** ***** ----------------------------------------------- ***** */

/* global Main */
(function($){
	'use strict';

	Main.utilities = function() {

		var windowWidth = $(window).width(),
			xSmallWidth = 480,
			smallWidth = 768,
			mediumWidth = 900,
			largeWidth = 1100,
			xLargeWidth = 1300,

			isXSmallWidth = function() {
				return (windowWidth <= xSmallWidth ? true : false);
			},

			isSmallWidth = function() {
				return (windowWidth <= smallWidth ? true : false);
			},

			isMediumWidth = function() {
				return (windowWidth <= mediumWidth ? true : false);
			},

			isLargeWidth = function() {
				return (windowWidth <= largeWidth ? true : false);
			},

			isXLargeWidth = function() {
				return (windowWidth >= xLargeWidth ? true : false);
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

			isEdge = function() {
				return navigator.userAgent.match(/Edge/i);
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
			isXSmallWidth: isXSmallWidth,
			isSmallWidth: isSmallWidth,
			isMediumWidth: isMediumWidth,
			isLargeWidth: isLargeWidth,
			isXLargeWidth: isXLargeWidth,
			isChrome: isChrome,
			isSafari: isSafari,
			isFirefox: isFirefox,
			isEdge: isEdge,
			isDevice: isDevice
		};
		
	};

})(jQuery);