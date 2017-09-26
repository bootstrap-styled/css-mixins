'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navDivider = navDivider;

var _unitUtils = require('bootstrap-styled-utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = exports.defaultProps = {
  '$spacer-y': '1rem'
};

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';

  var marginY = '' + _unitUtils2.default.rmUnit(spacerY, _unitUtils2.default.UNIT.REM) / 2 + _unitUtils2.default.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}

exports.default = {
  defaultProps: defaultProps,
  navDivider: navDivider
};