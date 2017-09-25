'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalStyles = getGlobalStyles;
exports.getGlobalStyleNoBootstrapProvider = getGlobalStyleNoBootstrapProvider;
exports.html = html;
exports.boxSizing = boxSizing;
exports.ie10FixViewport = ie10FixViewport;
exports.body = body;
exports.bodyUtils = bodyUtils;
exports.tabIndex = tabIndex;
exports.svg = svg;
exports.ie10FixHidden = ie10FixHidden;
exports.webkitFileUploadButton = webkitFileUploadButton;
var defaultProps = exports.defaultProps = {
  '$font-family-base': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  '$font-size-base': '1rem',
  '$font-weight-base': '1.5',
  '$line-height-base': '1.5',
  '$body-color': '#292b2c',
  '$body-bg': '#fff'
};

/**
 * getRebootUtility
 *
 * This utility MUST return only things that can ONLY be injected in global styles
 */

function getGlobalStyles() {
  return '\n    html {\n      ' + html() + '\n    }\n    *,\n    *::before,\n    *::after {\n      ' + boxSizing() + '\n    }\n    @-ms-viewport { \n      ' + ie10FixViewport() + ' \n    }\n  ';
}

function getGlobalStyleNoBootstrapProvider() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$body-bg'];

  return '\n  ' + getGlobalStyles() + '\n  body {\n  ' + body(fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, bodyColor, bodyBg) + ' \n}';
}

// Document
//
// 1. Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
// 2. Change the default font family in all browsers.
// 3. Correct the line height in all browsers.
// 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.
// 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge, so
//    we force a non-overlapping, non-auto-hiding scrollbar to counteract.
// 6. Change the default tap highlight to be completely transparent in iOS.
function html() {
  return '\n    box-sizing: border-box;\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  ';
}

function boxSizing() {
  return '\n    box-sizing: inherit;\n  ';
}

// IE10+ doesn't honor `<meta name="viewport">` in some cases.
function ie10FixViewport() {
  return '\n    width: device-width;\n  ';
}

// Body
//
// 1. Remove the margin in all browsers.
// 2. As a best practice, apply a default `background-color`.
function body() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$body-bg'];

  return '\n    margin: 0;\n    font-family: ' + fontFamilyBase + ';\n    font-size: ' + fontSizeBase + ';\n    font-weight: ' + fontWeightBase + ';\n    line-height: ' + lineHeightBase + ';\n    color: ' + bodyColor + ';\n    background-color: ' + bodyBg + ';\n    \n    ' + bodyUtils() + '\n    \n    [tabindex="-1"]:focus {\n      ' + tabIndex() + '\n    }\n    svg:not(:root) {\n      ' + svg() + '\n    }\n    [hidden] {\n      ' + ie10FixHidden() + '\n    }\n    ::-webkit-file-upload-button {\n      ' + webkitFileUploadButton() + '\n    }\n  ';
}

function bodyUtils() {
  return '\n    &.overflow {\n      overflow-x: hidden;\n    }\n  ';
}

// Suppress the focus outline on elements that cannot be accessed via keyboard.
// This prevents an unwanted focus outline from appearing around elements that
// might still respond to pointer events.
//
// Credit: https://github.com/suitcss/base
function tabIndex() {
  return '\n    outline: none !important;\n  ';
}

// Hide the overflow in IE
function svg() {
  return '\n    overflow: hidden;\n  ';
}

// Always hide an element with the `hidden` HTML attribute (from PureCSS).
// Needed for proper display in IE 10-.
function ie10FixHidden() {
  return '\n    display: none !important;\n  ';
}

function webkitFileUploadButton() {
  return '\n    font: inherit;\n    -webkit-appearance: button;\n  ';
}

exports.default = {
  html: html,
  boxSizing: boxSizing,
  ie10FixViewport: ie10FixViewport,
  body: body,
  bodyUtils: bodyUtils,
  tabIndex: tabIndex,
  svg: svg,
  ie10FixHidden: ie10FixHidden,
  getGlobalStyles: getGlobalStyles,
  getGlobalStyleNoBootstrapProvider: getGlobalStyleNoBootstrapProvider,
  webkitFileUploadButton: webkitFileUploadButton
};