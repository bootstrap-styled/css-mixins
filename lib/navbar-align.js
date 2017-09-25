'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarVerticalAlign = navbarVerticalAlign;

var _bootstrapStyledUtils = require('bootstrap-styled-utils');

var defaultProps = exports.defaultProps = {
  '$navbar-height': '50px'
};

// Navbar vertical align
//
// Vertically center elements in the navbar.
// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.

// @mixin navbar-vertical-align($element-height) {
//   margin-top: (($navbar-height - $element-height) / 2);
//   margin-bottom: (($navbar-height - $element-height) / 2);
// }

function navbarVerticalAlign() {
  var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$navbar-height'];
  var elementHeight = arguments[1];

  var marginTop = '' + (_bootstrapStyledUtils.unitUtils.rmUnit(navbarHeight, _bootstrapStyledUtils.unitUtils.UNIT.PX) - _bootstrapStyledUtils.unitUtils.rmUnit(elementHeight, _bootstrapStyledUtils.unitUtils.UNIT.PX)) / 2 + _bootstrapStyledUtils.unitUtils.UNIT.PX;
  var marginBottom = '' + (_bootstrapStyledUtils.unitUtils.rmUnit(navbarHeight, _bootstrapStyledUtils.unitUtils.UNIT.PX) - _bootstrapStyledUtils.unitUtils.rmUnit(elementHeight, _bootstrapStyledUtils.unitUtils.UNIT.PX)) / 2 + _bootstrapStyledUtils.unitUtils.UNIT.PX;
  return '\n    margin-top: ' + marginTop + ';\n    margin-bottom: ' + marginBottom + ';  \n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navbarVerticalAlign: navbarVerticalAlign
};