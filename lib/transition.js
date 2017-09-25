'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true
};

// eslint-disable-next-line consistent-return
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

exports.default = {
  transition: transition
};