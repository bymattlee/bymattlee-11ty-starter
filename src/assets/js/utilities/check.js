/* ***** ----------------------------------------------- ***** **
** ***** Check Utilities JS
** ***** ----------------------------------------------- ***** */

const windowWidth = window.outerWidth;
const xSmallWidth = 480;
const smallWidth = 768;
const mediumWidth = 900;
const largeWidth = 1100;
const xLargeWidth = 1300;

const isXSmallWidth = windowWidth <= xSmallWidth;
const isSmallWidth = windowWidth <= smallWidth;
const isMediumWidth = windowWidth <= mediumWidth;
const isLargeWidth = windowWidth <= largeWidth;
const isXLargeWidth = windowWidth >= xLargeWidth;

const isChrome = navigator.userAgent.match(/Chrome/i) || navigator.userAgent.match(/CriOS/i);
const isSafari = navigator.userAgent.match(/Safari/i) && !isChrome;
const isFirefox = navigator.userAgent.match(/Firefox/i);
const isEdge = navigator.userAgent.match(/Edge/i);
const isDeviceAndroid = navigator.userAgent.match(/Android/i);
const isDeviceBlackBerry = navigator.userAgent.match(/BlackBerry/i);
const isDeviceiOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
const isDeviceOpera = navigator.userAgent.match(/Opera Mini/i);
const isDeviceWindows = navigator.userAgent.match(/IEMobile/i);
const isDevice = isDeviceAndroid || isDeviceBlackBerry || isDeviceiOS || isDeviceOpera || isDeviceWindows;

export {
  isXSmallWidth,
  isSmallWidth,
  isMediumWidth,
  isLargeWidth,
  isXLargeWidth,
  isChrome,
  isSafari,
  isFirefox,
  isEdge,
  isDeviceAndroid,
  isDeviceBlackBerry,
  isDeviceiOS,
  isDeviceOpera,
  isDeviceWindows,
  isDevice
};
