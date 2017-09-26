'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarVerticalAlign = navbarVerticalAlign;

var _unitUtils = require('bootstrap-styled-utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var marginTop = '' + (_unitUtils2.default.rmUnit(navbarHeight, _unitUtils2.default.UNIT.PX) - _unitUtils2.default.rmUnit(elementHeight, _unitUtils2.default.UNIT.PX)) / 2 + _unitUtils2.default.UNIT.PX;
  var marginBottom = '' + (_unitUtils2.default.rmUnit(navbarHeight, _unitUtils2.default.UNIT.PX) - _unitUtils2.default.rmUnit(elementHeight, _unitUtils2.default.UNIT.PX)) / 2 + _unitUtils2.default.UNIT.PX;
  return '\n    margin-top: ' + marginTop + ';\n    margin-bottom: ' + marginBottom + ';  \n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navbarVerticalAlign: navbarVerticalAlign
};