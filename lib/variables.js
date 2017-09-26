'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAscending = assertAscending;
exports.assertStartAtZero = assertStartAtZero;
exports.comparable = comparable;

var _unitUtils = require('bootstrap-styled-utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
      // do nothing
    } else if (!comparable(_unitUtils2.default.rmUnit(prevNum), _unitUtils2.default.rmUnit(num))) {
      /* istanbul ignore if */
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !'); // eslint-disable-line no-console
      }
      asserted = false;
    } else if (_unitUtils2.default.rmUnit(prevNum) >= _unitUtils2.default.rmUnit(num)) {
      /* istanbul ignore if */
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !'); // eslint-disable-line no-console
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}

function assertStartAtZero(map) {
  var values = Object.keys(map).map(function (key) {
    return map[key];
  });
  var firstValue = _unitUtils2.default.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.'); // eslint-disable-line no-console
    }
    asserted = false;
  }
  return asserted;
}

function comparable(a, b) {
  return !isNaN(a + b); // eslint-disable-line no-restricted-globals
}

exports.default = {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};