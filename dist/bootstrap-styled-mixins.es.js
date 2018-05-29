function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}
var tabFocus$1 = {
  tabFocus: tabFocus
};

var defaultProps$1 = {
  '$enable-hover-media-query': false
};
function hover(content) {
  return '\n    &:hover { ' + content + ' }\n  ';
}
function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}
function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}
function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}
hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;

var defaultProps = {
  '$link-color': '#0275d8',
  '$link-decoration': 'none',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$enable-hover-media-query': false
};
function a() {
  var $linkColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$link-color'];
  var $linkDecoration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$link-decoration'];
  var $linkHoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$link-hover-decoration'];
  var $enableHoverMediaQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$enable-hover-media-query'];
  return '\n    color: ' + $linkColor + ';\n    text-decoration: ' + $linkDecoration + ';\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  \n    ' + hoverFocus($enableHoverMediaQuery, '\n      color: ' + $linkHoverColor + ';\n      text-decoration: ' + $linkHoverDecoration + ';\n    ') + '\n    \n    &:focus {\n      ' + tabFocus() + '\n    }\n\n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n      \n      ' + hoverFocus($enableHoverMediaQuery, '\n        color: inherit;\n        text-decoration: none;\n      ') + '\n\n      &:focus {\n        outline: 0;\n      }\n    }\n  ';
}
var a$1 = {
  defaultProps: defaultProps,
  a: a
};

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

'use strict';
var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

'use strict';
var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}
	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {
'use strict';
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
	var results = [];
	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];
		if (isArrayish(arg)) {
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}
	return results;
};
swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
var reverseNames = {};
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}
var cs = module.exports = {
	to: {}
};
cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}
	if (!val) {
		return null;
	}
	return {model: model, value: val};
};
cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}
	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;
	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;
	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];
		for (i = 0; i < 3; i++) {
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}
		rgb = colorName[match[1]];
		if (!rgb) {
			return null;
		}
		rgb[3] = 1;
		return rgb;
	} else {
		return null;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);
	return rgb;
};
cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}
	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, s, l, a];
	}
	return null;
};
cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}
	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}
	return null;
};
cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};
cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);
	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);
	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}
	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var conversions = createCommonjsModule(function (module) {
var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}
var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}
		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}
		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}
		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}
convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	l = (min + max) / 2;
	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}
	return [h, s * 100, l * 100];
};
convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;
	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	v = ((max / 255) * 1000) / 10;
	return [h, s, v];
};
convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};
convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;
	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}
convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}
	var currentClosestDistance = Infinity;
	var currentClosestKeyword;
	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];
			var distance = comparativeDistance(rgb, value);
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}
	return currentClosestKeyword;
};
convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};
convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x * 100, y * 100, z * 100];
};
convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;
	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}
	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}
	t1 = 2 * l - t2;
	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}
		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}
		rgb[i] = val * 255;
	}
	return rgb;
};
convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	return [h, sv * 100, v * 100];
};
convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;
	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;
	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};
convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;
	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [h, sl * 100, l * 100];
};
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}
	n = wh + f * (v - wh);
	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}
	return [r * 255, g * 255, b * 255];
};
convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;
	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;
	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;
	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;
	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [x, y, z];
};
convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;
	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};
convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;
	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);
	return [l, a, b];
};
convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
	value = Math.round(value / 50);
	if (value === 0) {
		return 30;
	}
	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
	if (value === 2) {
		ansi += 60;
	}
	return ansi;
};
convert.hsv.ansi16 = function (args) {
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}
		if (r > 248) {
			return 231;
		}
		return Math.round(((r - 8) / 247) * 24) + 232;
	}
	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);
	return ansi;
};
convert.ansi16.rgb = function (args) {
	var color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}
		color = color / 10.5 * 255;
		return [color, color, color];
	}
	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;
	return [r, g, b];
};
convert.ansi256.rgb = function (args) {
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}
	args -= 16;
	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;
	return [r, g, b];
};
convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}
	var colorString = match[0];
	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}
	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;
	return [r, g, b];
};
convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}
	hue /= 6;
	hue %= 1;
	return [hue * 360, chroma * 100, grayscale * 100];
};
convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}
	return [hsl[0], c * 100, f * 100];
};
convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var f = 0;
	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}
	return [hsv[0], c * 100, f * 100];
};
convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}
	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	mg = (1.0 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	var f = 0;
	if (v > 0.0) {
		f = c / v;
	}
	return [hcg[0], f * 100, v * 100];
};
convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;
	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}
	return [hcg[0], s * 100, l * 100];
};
convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
};
convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};
convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};
convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};
convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};
convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};
convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

var models$1 = Object.keys(conversions);
function buildGraph() {
	var graph = {};
	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);
		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
};

var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		return fn(args);
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		var result = fn(args);
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
models.forEach(function (fromModel) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	var routes = route(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});
var colorConvert = convert;

'use strict';
var _slice = [].slice;
var skippedModels = [
	'keyword',
	'gray',
	'hex'
];
var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});
var limiters = {};
function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}
	if (model && model in skippedModels) {
		model = null;
	}
	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}
	var i;
	var channels;
	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}
		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;
		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}
		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}
		this.model = hashedModelKeys[hashedKeys];
		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}
		this.color = zeroArray(color);
	}
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}
	this.valpha = Math.max(0, Math.min(1, this.valpha));
	if (Object.freeze) {
		Object.freeze(this);
	}
}
Color.prototype = {
	toString: function () {
		return this.string();
	},
	toJSON: function () {
		return this[this.model]();
	},
	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},
	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},
	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},
	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;
		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}
		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}
		return result;
	},
	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;
		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}
		return rgb;
	},
	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;
		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}
		return rgb;
	},
	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},
	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}
		return this.valpha;
	},
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),
	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }),
	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),
	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),
	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),
	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),
	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),
	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),
	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),
	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorConvert[this.model].keyword(this.color);
	},
	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorString.to.hex(this.rgb().round().color);
	},
	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},
	luminosity: function () {
		var rgb = this.rgb().color;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},
	contrast: function (color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},
	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}
		return (contrastRatio >= 4.5) ? 'AA' : '';
	},
	dark: function () {
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},
	light: function () {
		return !this.dark();
	},
	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},
	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},
	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},
	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},
	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},
	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},
	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},
	grayscale: function () {
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},
	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},
	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},
	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},
	mix: function (mixinColor, weight) {
		var color1 = this.rgb();
		var color2 = mixinColor.rgb();
		var p = weight === undefined ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();
		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}
	var channels = colorConvert[model].channels;
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}
		if (arguments.length) {
			return new Color(arguments, model);
		}
		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});
function roundTo(num, places) {
	return Number(num.toFixed(places));
}
function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}
function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});
	model = model[0];
	return function (val) {
		var result;
		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}
			result = this[model]();
			result.color[channel] = val;
			return result;
		}
		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}
		return result;
	};
}
function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}
function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}
	return arr;
}
var color = Color;

function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + color(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + color(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}
var alert = {
  alertVariant: alertVariant
};

var defaultProps$2 = {
  '$enable-hover-media-query': false
};
function bgVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$2['$enable-hover-media-query'];
  var selector = arguments[1];
  var bgColor = arguments[2];
  return '\n    ' + selector + ' {\n      background-color: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      ' + hoverFocus(enableHoverMediaQuery, 'background-color: ' + color(bgColor).darken(0.2).rgb() + ' !important;') + '\n    }\n  ';
}
var backgroundVariant = {
  bgVariant: bgVariant
};

var defaultProps$3 = {
  '$enable-hover-mediaQuery': false
};
function badgeVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$3['$enable-hover-mediaQuery'];
  var badgeColor = arguments[1];
  return '\n    background-color: ' + badgeColor + ';\n    \n    &[href] {\n      ' + hoverFocus(enableHoverMediaQuery, 'background-color: ' + color(badgeColor).darken(0.1).toString() + ';') + '\n    }\n  ';
}
var badge = {
  defaultProps: defaultProps$3,
  badgeVariant: badgeVariant
};

var defaultProps$4 = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
var borderRadius$1 = {
  defaultProps: defaultProps$4,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};

var defaultProps$5 = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$5['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

var unitUtils = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var UnitUtils = function UnitUtils() {
  var _this = this;
  _classCallCheck(this, UnitUtils);
  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };
  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };
  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };
  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT;
  };
};
exports.default = new UnitUtils();
module.exports = exports['default'];
});
var unitUtils$1 = unwrapExports(unitUtils);

var defaultProps$6 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);
  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var min = breakpoints[name];
  return min !== '0' ? min : null;
}
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = unitUtils$1.rmUnit(breakpointMin(next, breakpoints), unitUtils$1.UNIT.PX);
    return (min - 1).toString() + unitUtils$1.UNIT.PX;
  }
  return null;
}
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[3];
  var min = breakpointMin(lower, breakpoints);
  var max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return '\n      @media (min-width: ' + min + ') and (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  } else if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  } else if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointOnly(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  return mediaBreakpointBetween(name, name, breakpoints, content);
}
var breakpoints = {
  defaultProps: defaultProps$6,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};

var defaultProps$8 = {
  '$enable-transitions': true
};
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$8['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}

var defaultProps$7 = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': true,
  '$enable-rounded': true,
  '$font-weight-normal': 'normal',
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$btn-transition': 'all .2s ease-in-out',
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5rem',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#636c72',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#292b2c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f'
};
function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$7['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$7['$btn-box-shadow'];
  var activeBackground = color(background).darken(0.2).toString();
  var activeBorder = color(border).darken(0.12).toString();
  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + boxShadow(enableShadows, btnBoxShadow) + '\n  \n    ' + hover('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + ifElse('\n        box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + color(border).alpha(0.5).toString() + ';\n      ', '\n        box-shadow: 0 0 0 2px ' + color(border).alpha(0.5).toString() + ';\n      ') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + boxShadow(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}
function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + hover('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + color(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];
  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + borderRadius(enableRounded, btnBorderRadius) + '\n  ';
}
function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$7['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$7['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$7['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$7['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$7['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$7['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$7['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$7['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$7['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$7['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$7['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$7['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$7['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$7['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$7['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$7['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$7['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$7['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$7['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$7['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$7['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$7['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$7['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$7['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$7['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$7['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$7['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps$7['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps$7['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps$7['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps$7['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps$7['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps$7['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps$7['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps$7['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps$7['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps$7['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps$7['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps$7['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps$7['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps$7['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps$7['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps$7['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps$7['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps$7['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps$7['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps$7['$btn-danger-border'];
  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + transition($enableTransitions, $btnTransition) + '\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + boxShadow($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + boxShadow($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + boxShadow($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + hover('border-color: transparent;') + '\n     \n      ' + hoverFocus($enableHoverMediaQuery, '\n        color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n        background-color: transparent;\n      ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + hoverFocus($enableHoverMediaQuery, '\n          text-decoration: none;\n        ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}
var buttons = {
  defaultProps: defaultProps$7,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize,
  button: button
};

var defaultProps$9 = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-y-sm': '.25rem',
  '$btn-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-border-width': '1px'
};
function buttonGroup() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$9['$enable-shadows'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$9['$enable-rounded'];
  var $inputBtnBorderWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$9['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$9['$btn-padding-x'];
  var $btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$9['$btn-active-box-shadow'];
  var $btnPaddingXLg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$9['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$9['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$9['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$9['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$9['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$9['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$9['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$9['$btn-border-radius-sm'];
  return ' \n    /*  Make the div behave like a button */\n    &.btn-group,\n    & .btn-group,\n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      position: relative;\n      display: inline-flex;\n      vertical-align: middle; /* match .btn alignment given font-size hack above */\n    \n      > .btn {\n        position: relative;\n        flex: 0 1 auto;\n        margin-bottom: 0;\n    \n        /* Bring the "active" button to the front */\n        &:focus,\n        &:active,\n        &.active {\n          z-index: 2;\n        }\n        ' + hover('\n          z-index: 2;\n        ') + '\n      }\n    }\n    \n    /*  Prevent double borders when buttons are next to each other */\n    &.btn-group,\n    & .btn-group {\n      .btn + .btn,\n      .btn + .btn-group,\n      .btn-group + .btn,\n      .btn-group + .btn-group {\n        margin-left: -' + $inputBtnBorderWidth + ';\n      }\n    }\n    \n    /* Optional: Group multiple button groups together for a toolbar */\n    &.btn-toolbar,\n    & .btn-toolbar {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n    \n      .input-group {\n        width: auto;\n      }\n    }\n     \n    &.btn-group,\n    & .btn-group {\n      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n        border-radius: 0;\n      }\n    }\n    \n    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */\n    &.btn-group,\n    & .btn-group {\n      > .btn:first-child {\n        margin-left: 0;\n    \n        &:not(:last-child):not(.dropdown-toggle) {\n          ' + borderRightRadius($enableRounded, '0') + '\n        }\n      }\n    }\n    /* Need .dropdown-toggle since :last-child does not apply given a .dropdown-menu immediately after it */\n    &.btn-group > .btn:last-child:not(:first-child),\n    & .btn-group > .btn:last-child:not(:first-child),\n    &.btn-group > .dropdown-toggle:not(:first-child),\n    & .btn-group > .dropdown-toggle:not(:first-child) {\n      ' + borderLeftRadius($enableRounded, '0') + '\n    }\n    \n    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */\n    &.btn-group > .btn-group,\n    & .btn-group > .btn-group {\n      float: left;\n    }\n    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    &.btn-group > .btn-group:first-child:not(:last-child),\n    & .btn-group > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + borderRightRadius($enableRounded, '0') + '\n      }\n    }\n    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + borderLeftRadius($enableRounded, '0') + '\n    }\n    \n    /* On active and open, do not show outline */\n    &.btn-group .dropdown-toggle:active,\n    & .btn-group .dropdown-toggle:active,\n    &.btn-group.open .dropdown-toggle,\n    & .btn-group.open .dropdown-toggle {\n      outline: 0;\n    }\n    \n    \n    /* \n    Sizing Remix the default button sizing classes into new ones for easier manipulation.\n    */\n    \n    &.btn-group-sm > .btn,\n    & .btn-group-sm > .btn { \n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n    &.btn-group-lg > .btn,\n    & .btn-group-lg > .btn {\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n    \n    /*\n     Split button dropdowns\n    */\n    \n    & .btn + .dropdown-toggle-split {\n      padding-right: ' + unitUtils$1.math.multiply($btnPaddingX, 0.75) + ';\n      padding-left: ' + unitUtils$1.math.multiply($btnPaddingX, 0.75) + ';\n    \n      &::after {\n        margin-left: 0;\n      }\n    }\n    \n    & .btn-sm + .dropdown-toggle-split {\n      padding-right: ' + unitUtils$1.math.multiply($btnPaddingXSm, 0.75) + ';\n      padding-left: ' + unitUtils$1.math.multiply($btnPaddingXSm, 0.75) + ';\n    }\n    \n    & .btn-lg + .dropdown-toggle-split {\n      padding-right: ' + unitUtils$1.math.multiply($btnPaddingXLg, 0.75) + ';\n      padding-left: ' + unitUtils$1.math.multiply($btnPaddingXLg, 0.75) + ';\n    }\n    \n    \n    /* The clickable button for toggling the menu */\n    /* Remove the gradient and set the same inset shadow as the :active state */\n    &.btn-group.open .dropdown-toggle {\n      ' + boxShadow($enableShadows, $btnActiveBoxShadow) + '\n    \n      /* Show no shadow for .btn-link since it has no other button styles. */\n      &.btn-link {\n        ' + boxShadow($enableShadows, 'none') + '\n      }\n    }\n\n    /*\n     Vertical button groups\n    */\n    \n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n    \n      .btn,\n      .btn-group {\n        width: 100%;\n      }\n      \n      > .btn + .btn,\n      > .btn + .btn-group,\n      > .btn-group + .btn,\n      > .btn-group + .btn-group {\n        margin-top: -' + $inputBtnBorderWidth + ';\n        margin-left: 0;\n      }\n    }\n    \n    &.btn-group-vertical > .btn,\n    & .btn-group-vertical > .btn {\n      &:not(:first-child):not(:last-child) {\n        border-radius: 0;\n      }\n      &:first-child:not(:last-child) {\n        ' + borderBottomRadius($enableRounded, '0') + '\n      }\n      &:last-child:not(:first-child) {\n        ' + borderTopRadius($enableRounded, '0') + '\n      }\n    }\n    \n    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    \n    &.btn-group-vertical > .btn-group:first-child:not(:last-child),\n    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + borderBottomRadius($enableRounded, '0') + '      \n      }\n    }\n    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + borderTopRadius($enableRounded, '0') + '\n    }\n    \n    &.btn-group {\n      > .btn,\n      > .btn-group > .btn {\n        input[type="radio"],\n        input[type="checkbox"] {\n          position: absolute;\n          clip: rect(0,0,0,0);\n          pointer-events: none;\n        }\n      }\n    }\n  ';
}
var buttonGroup$1 = {
  defaultProps: defaultProps$9,
  buttonGroup: buttonGroup
};

var defaultProps$10 = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$card-spacer-x': '1.25rem',
  '$card-spacer-y': '.75rem',
  '$card-bg': '#fff',
  '$card-border-width': '1px',
  '$card-border-color': 'rgba(0, 0, 0, 0.125)',
  '$card-border-radius': '.25rem',
  '$card-margin-y-halved': '0.375rem',
  '$card-margin-x-halved': '0.625rem',
  '$card-cap-bg': '#f7f7f9',
  '$card-border-radius-inner': 'calc(.25rem - 1px)',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$btn-primary-bg': '#0275d8',
  '$btn-secondary-border': '#ccc',
  '$btn-info-bg': '#5bc0de',
  '$btn-success-bg': '#5cb85c',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-danger-bg': '#d9534f',
  '$card-link-hover-color': '#fff',
  '$card-img-overlay-padding': '1.25rem'
};
function cardVariant(cardBackground, cardBorder) {
  return '\n    background-color: ' + cardBackground + ';\n    border-color: ' + cardBorder + ';\n  \n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n    }\n  ';
}
function cardOutlineVariant(cardColor) {
  return '\n    background-color: transparent;\n    border-color: ' + cardColor + ';\n  ';
}
function cardInverse() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$10['$enable-hover-media-query'];
  var cardLinkHoverColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$10['$card-link-hover-color'];
  return '\n    color: rgba(255,255,255,.65);\n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    \n    & .card-link {\n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + cardLinkHoverColor + ';') + '\n    }\n  ';
}
function card() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$10['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$10['$enable-hover-media-query'];
  var $cardSpacerY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$10['$card-spacer-y'];
  var $cardSpacerX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$10['$card-spacer-x'];
  var $cardBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$10['$card-bg'];
  var $cardBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$10['$card-border-width'];
  var $cardBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$10['$card-border-color'];
  var $cardBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$10['$card-border-radius'];
  var $cardMarginYHalved = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$10['$card-margin-y-halved'];
  var $cardMarginXHalved = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$10['$card-margin-x-halved'];
  var $cardCapBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$10['$card-cap-bg'];
  var $cardBorderRadiusInner = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$10['$card-border-radius-inner'];
  var $brandPrimary = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$10['$brand-primary'];
  var $brandSuccess = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$10['$brand-success'];
  var $brandInfo = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$10['$brand-info'];
  var $brandWarning = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$10['$brand-warning'];
  var $brandDanger = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$10['$brand-danger'];
  var $btnPrimaryBg = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$10['$btn-primary-bg'];
  var $btnSecondaryBorder = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$10['$btn-secondary-border'];
  var $btnInfoBg = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$10['$btn-info-bg'];
  var $btnSuccessBg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$10['$btn-success-bg'];
  var $btnWarningBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$10['$btn-warning-bg'];
  var $btnDangerBg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$10['$btn-danger-bg'];
  var $cardLinkHoverColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$10['$card-link-hover-color'];
  var $cardImgOverlayPadding = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$10['$card-img-overlay-padding'];
  return '\n    & .card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + $cardBg + ';\n      border: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n      ' + borderRadius($enableRounded, $cardBorderRadius) + '\n    }\n    \n    & .card-block {\n      flex: 1 1 auto;\n\n      padding: ' + $cardSpacerX + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + $cardSpacerY + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + $cardMarginYHalved + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover('text-decoration: none;') + '\n    \n      + .card-link {\n        margin-left: ' + $cardSpacerX + ';\n      }\n    }\n    \n    & .card{\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderTopRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderBottomRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    }\n    \n    & .card-header {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      margin-bottom: 0;\n      background-color: ' + $cardCapBg + ';\n      border-bottom: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:first-child {\n        ' + borderRadius($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      background-color: ' + $cardCapBg + ';\n      border-top: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:last-child {\n        ' + borderRadius($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner) + '\n      }\n    }\n\n    & .card-header-tabs {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-bottom: -' + $cardSpacerY + ';\n      margin-left: -' + $cardMarginXHalved + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-left: -' + $cardMarginXHalved + ';\n    }\n    \n    & .card-primary {\n      ' + cardVariant($brandPrimary, $brandPrimary) + '\n    }\n    & .card-success {\n      ' + cardVariant($brandSuccess, $brandSuccess) + '\n    }\n    & .card-info {\n      ' + cardVariant($brandInfo, $brandInfo) + '\n    }\n    & .card-warning {\n      ' + cardVariant($brandWarning, $brandWarning) + '\n    }\n    & .card-danger {\n      ' + cardVariant($brandDanger, $brandDanger) + '\n    }\n    \n    & .card-outline-primary {\n      ' + cardOutlineVariant($btnPrimaryBg) + '\n    }\n    & .card-outline-secondary {\n      ' + cardOutlineVariant($btnSecondaryBorder) + '\n    }\n    & .card-outline-info {\n      ' + cardOutlineVariant($btnInfoBg) + '\n    }\n    & .card-outline-success {\n      ' + cardOutlineVariant($btnSuccessBg) + '\n    }\n    & .card-outline-warning {\n      ' + cardOutlineVariant($btnWarningBg) + '\n    }\n    & .card-outline-danger {\n      ' + cardOutlineVariant($btnDangerBg) + '\n    }\n        \n    & .card-inverse {\n      ' + cardInverse($enableHoverMediaQuery, $cardLinkHoverColor) + '\n    }\n\n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    & .card-img {\n      ' + borderRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + $cardImgOverlayPadding + ';\n    }\n\n    & .card-img-top {\n      ' + borderTopRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderBottomRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n  ';
}
var cards = {
  defaultProps: defaultProps$10,
  cardVariant: cardVariant,
  cardOutlineVariant: cardOutlineVariant,
  cardInverse: cardInverse,
  card: card
};

function clearfix() {
  return "\n    &::after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  ";
}

function floatLeft() {
  return "\n    float: left !important;\n  ";
}
function floatRight() {
  return "\n    float: right !important;\n  ";
}
function floatNone() {
  return "\n    float: none !important;\n  ";
}
var float = {
  floatLeft: floatLeft,
  floatRight: floatRight,
  floatNone: floatNone
};

var defaultProps$11 = {
  '$enable-rounded': true,
  '$enable-transitions': true,
  '$enable-shadows': false,
  '$input-height': '2.5rem',
  '$input-padding-y': '.5rem',
  '$input-padding-x': '.75rem',
  '$font-size-base': '1rem',
  '$input-line-height': '1.25',
  '$input-color': '#464a4c',
  '$input-bg': '#fff',
  '$input-border-radius': '.25rem',
  '$input-btn-border-width': '1px',
  '$input-border-color': 'rgba(0, 0, 0, 0.15)',
  '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$input-color-focus': '#464a4c',
  '$input-bg-focus': '#fff',
  '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
  '$input-color-placeholder': '#636c72',
  '$input-bg-disabled': '#eceeef',
  '$cursor-disabled': 'not-allowed'
};
function formControl() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-rounded'];
  var $enableTransitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$11['$enable-transitions'];
  var $enableShadows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$enable-shadows'];
  var $inputHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$11['$input-height'];
  var $inputPaddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$11['$input-padding-y'];
  var $inputPaddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$11['$input-padding-x'];
  var $fontSizeBase = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$11['$font-size-base'];
  var $inputLineHeight = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$11['$input-line-height'];
  var $inputColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$11['$input-color'];
  var $inputBg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$11['$input-bg'];
  var $inputBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$11['$input-border-radius'];
  var $inputBtnBorderWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$11['$input-btn-border-width'];
  var $inputBorderColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$11['$input-border-color'];
  var $inputTransition = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$11['$input-transition'];
  var $inputBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$11['$input-box-shadow'];
  var $inputColorFocus = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$11['$input-color-focus'];
  var $inputBgFocus = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$11['$input-bg-focus'];
  var $inputBorderFocus = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$11['$input-border-focus'];
  var $inputBoxShadowFocus = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$11['$input-box-shadow-focus'];
  var $inputColorPlaceholder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$11['$input-color-placeholder'];
  var $inputBgDisabled = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$11['$input-bg-disabled'];
  var $cursorDisabled = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$11['$cursor-disabled'];
  return '\n      & .form-control {\n        display: block;\n        width: 100%;\n  \n        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */\n        /* height: ' + $inputHeight + '; */\n  \n        padding: ' + $inputPaddingY + ' ' + $inputPaddingX + ';\n        font-size: ' + $fontSizeBase + ';\n        line-height: ' + $inputLineHeight + ';\n        color: ' + $inputColor + ';\n        background-color: ' + $inputBg + ';\n  \n        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */\n        background-image: none;\n        background-clip: padding-box;\n        /* Note: This has no effect on selects in some browsers, due to the limited stylability of selects in CSS. */\n        ' + ($enableRounded ? 'border-radius: ' + $inputBorderRadius + ';' : 'border-radius: 0;') + ' /* Manually use the if/else instead of the mixin to account for iOS override */\n        border: ' + $inputBtnBorderWidth + ' solid ' + $inputBorderColor + ';\n        ' + transition($enableTransitions, $inputTransition) + '\n        ' + boxShadow($enableShadows, $inputBoxShadow) + '\n  \n        /* Unstyle the caret on selects in IE10+. */\n        &::-ms-expand {\n          background-color: transparent;\n          border: 0;\n        }\n  \n        /* Customize the :focus state to imitate native WebKit styles. */\n        ' + formControlFocus($enableShadows, $inputColorFocus, $inputBgFocus, $inputBorderFocus, $inputBoxShadowFocus) + '\n  \n        /* Placeholder */\n        &::placeholder {\n          color: ' + $inputColorPlaceholder + ';\n          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */\n          opacity: 1;\n        }\n  \n        /* Disabled and read-only inputs\n         HTML5 says that controls under a fieldset > legend:first-child will not be\n         disabled if the fieldset is disabled. Due to implementation difficulty, we\n         do not honor that edge case; we style them as disabled anyway.\n         */\n  \n        &:disabled,\n        &[readonly] {\n          background-color:' + $inputBgDisabled + ';\n          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */\n          opacity: 1;\n        }\n  \n        &:disabled {\n          cursor: ' + $cursorDisabled + ';\n        }\n      }\n  ';
}
function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$input-box-shadow'];
  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n      \n    & .form-control,\n    & .custom-select,\n    & .custom-file-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + boxShadow(enableShadows, inputBoxShadow + ', 0 0 6px ' + color(formColor).lighten(0.2).toString()) + '\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + color(formColor).lighten(0.40).toString() + ';\n    }\n  ';
}
function formControlFocus() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-shadows'];
  var inputColorFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$11['$input-color-focus'];
  var inputBgFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$input-bg-focus'];
  var inputBorderFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$11['$input-border-focus'];
  var inputBoxShadowFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$11['$input-box-shadow-focus'];
  return '\n    &:focus {\n      color: ' + inputColorFocus + ';\n      background-color: ' + inputBgFocus + ';\n      border-color: ' + inputBorderFocus + ';\n      outline: none;\n      ' + boxShadow(enableShadows, inputBoxShadowFocus) + '\n    }\n  ';
}
function inputSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-rounded'];
  var parent = arguments[1];
  var inputHeight = arguments[2];
  var paddingY = arguments[3];
  var paddingX = arguments[4];
  var fontSize = arguments[5];
  var lineHeight = arguments[6];
  var inputBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$11['$input-border-radius'];
  return '\n    ' + parent + ' {\n      height: ' + inputHeight + ';\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n      line-height: ' + lineHeight + ';\n      ' + borderRadius(enableRounded, inputBorderRadius) + '\n    }\n  \n    select' + parent + ' {\n      height: ' + inputHeight + ';\n      line-height: ' + inputHeight + ';\n    }\n  \n    textarea' + parent + ',\n      select[multiple]' + parent + ' {\n      height: auto;\n    }\n  ';
}
var forms = {
  defaultProps: defaultProps$11,
  formControl: formControl,
  formControlValidation: formControlValidation,
  formControlFocus: formControlFocus,
  inputSize: inputSize
};

var defaultProps$12 = {
  '$enable-rounded': true,
  '$enable-shadows': false,
  '$custom-control-checked-indicator-box-shadow': 'none',
  '$custom-control-active-indicator-box-shadow': 'none',
  '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
  '$custom-checkbox-indeterminate-box-shadow': 'none',
  '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5)',
  '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
  '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
  '$custom-select-border-radius': '.25rem',
  '$custom-file-border-radius': '.25rem',
  '$input-bg': '#fff',
  '$custom-select-line-height': '1.25px',
  '$line-height-base': '1.5',
  '$custom-control-gutter': '1.5rem',
  '$custom-control-spacer-x': '1rem',
  '$custom-control-checked-indicator-color': '#fff',
  '$custom-control-checked-indicator-bg': '#0275d8',
  '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
  '$custom-control-active-indicator-color': '#fff',
  '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
  '$custom-control-disabled-cursor': 'not-allowed',
  '$custom-control-disabled-indicator-bg': '#eceeef',
  '$custom-control-disabled-description-color': '#636c72',
  '$custom-control-indicator-size': '1rem',
  '$custom-control-indicator-bg': '#ddd',
  '$custom-control-indicator-bg-size': '50% 50%',
  '$custom-checkbox-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'#fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")',
  '$custom-checkbox-indeterminate-bg': '#0275d8',
  '$custom-checkbox-indeterminate-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'#fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")',
  '$custom-radio-radius': '50%',
  '$custom-radio-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'#fff\'/%3E%3C/svg%3E")',
  '$custom-control-spacer-y': '.25rem',
  '$border-width': '1px',
  '$input-height': '2.5rem',
  '$custom-select-padding-y': '.375rem',
  '$custom-select-padding-x': '.75rem ',
  '$custom-select-indicator-padding': '1rem',
  '$custom-select-color': '#464a4c',
  '$custom-select-bg': '#fff',
  '$custom-select-indicator': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'#333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E")',
  '$custom-select-bg-size': '8px 10px',
  '$custom-select-border-width': '1px',
  '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-color': '#464a4c',
  '$custom-select-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$custom-select-disabled-bg': '#eceeef',
  '$custom-select-sm-font-size': '75%',
  '$custom-file-width': '14rem',
  '$custom-file-height': '2.5rem',
  '$custom-file-padding-x': '.5rem',
  '$custom-file-padding-y': '1rem',
  '$custom-file-line-height': '1.5',
  '$custom-file-color': '#464a4c',
  '$custom-file-bg': '#fff',
  '$custom-file-border-width': '1px',
  '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-file-button-color': '#464a4c',
  '$custom-file-button-bg': '#eceeef',
  '$custom-checkbox-radius': '.25rem',
  '$custom-file-text': {
    'placeholder': {
      'en': 'Choose file...'
    },
    'button-label': {
      'en': 'Browse'
    }
  }
};
function customForms() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$12['$enable-rounded'];
  var $enableShadows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$12['$enable-shadows'];
  var $customControlCheckedIndicatorBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$12['$custom-control-checked-indicator-box-shadow'];
  var $customControlActiveIndicatorBoxShadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$12['$custom-control-active-indicator-box-shadow'];
  var $customControlIndicatorBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$12['$custom-control-indicator-box-shadow'];
  var $customCheckboxIndeterminateBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$12['$custom-checkbox-indeterminate-box-shadow'];
  var $customSelectFocusBoxShadow = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$12['$custom-select-focus-box-shadow'];
  var $customFileFocusBoxShadow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$12['$custom-file-focus-box-shadow'];
  var $customFileBoxShadow = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$12['$custom-file-box-shadow'];
  var $customSelectBorderRadius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$12['$custom-select-border-radius'];
  var $customFileBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$12['$custom-file-border-radius'];
  var $customCheckboxRadius = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$12['$custom-checkbox-radius'];
  var $inputBg = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$12['$input-bg'];
  var $customSelectLineHeight = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$12['$custom-select-line-height'];
  var $lineHeightBase = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$12['$line-height-base'];
  var $customControlGutter = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$12['$custom-control-gutter'];
  var $customControlSpacerX = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$12['$custom-control-spacer-x'];
  var $customControlCheckedIndicatorColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$12['$custom-control-checked-indicator-color'];
  var $customControlCheckedIndicatorBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$12['$custom-control-checked-indicator-bg'];
  var $customControlFocusIndicatorBoxShadow = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$12['$custom-control-focus-indicator-box-shadow'];
  var $customControlActiveIndicatorColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$12['$custom-control-active-indicator-color'];
  var $customControlActiveIndicatorBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$12['$custom-control-active-indicator-bg'];
  var $customControlDisabledCursor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$12['$custom-control-disabled-cursor'];
  var $customControlDisabledIndicatorBg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$12['$custom-control-disabled-indicator-bg'];
  var $customControlDisabledDescriptionColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$12['$custom-control-disabled-description-color'];
  var $customControlIndicatorSize = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$12['$custom-control-indicator-size'];
  var $customControlIndicatorBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$12['$custom-control-indicator-bg'];
  var $customControlIndicatorBgSize = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$12['$custom-control-indicator-bg-size'];
  var $customCheckboxCheckedIcon = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps$12['$custom-checkbox-checked-icon'];
  var $customCheckboxIndeterminateBg = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps$12['$custom-checkbox-indeterminate-bg'];
  var $customCheckboxIndeterminateIcon = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps$12['$custom-checkbox-indeterminate-icon'];
  var $customRadioRadius = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps$12['$custom-radio-radius'];
  var $customRadioCheckedIcon = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps$12['$custom-radio-checked-icon'];
  var $customControlSpacerY = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps$12['$custom-control-spacer-y'];
  var $borderWidth = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps$12['$border-width'];
  var $inputHeight = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps$12['$input-height'];
  var $customSelectPaddingY = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps$12['$custom-select-padding-y'];
  var $customSelectPaddingX = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps$12['$custom-select-padding-x'];
  var $customSelectIndicatorPadding = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps$12['$custom-select-indicator-padding'];
  var $customSelectColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps$12['$custom-select-color'];
  var $customSelectBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps$12['$custom-select-bg'];
  var $customSelectIndicator = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps$12['$custom-select-indicator'];
  var $customSelectBgSize = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps$12['$custom-select-bg-size'];
  var $customSelectBorderWidth = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps$12['$custom-select-border-width'];
  var $customSelectBorderColor = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps$12['$custom-select-border-color'];
  var $customSelectFocusBorderColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps$12['$custom-select-focus-border-color'];
  var $inputColor = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps$12['$input-color'];
  var $customSelectDisabledColor = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps$12['$custom-select-disabled-color'];
  var $cursorDisabled = arguments.length > 48 && arguments[48] !== undefined ? arguments[48] : defaultProps$12['$cursor-disabled'];
  var $customSelectDisabledBg = arguments.length > 49 && arguments[49] !== undefined ? arguments[49] : defaultProps$12['$custom-select-disabled-bg'];
  var $customSelectSmFontSize = arguments.length > 50 && arguments[50] !== undefined ? arguments[50] : defaultProps$12['$custom-select-sm-font-size'];
  var $customFileWidth = arguments.length > 51 && arguments[51] !== undefined ? arguments[51] : defaultProps$12['$custom-file-width'];
  var $customFileHeight = arguments.length > 52 && arguments[52] !== undefined ? arguments[52] : defaultProps$12['$custom-file-height'];
  var $customFilePaddingX = arguments.length > 53 && arguments[53] !== undefined ? arguments[53] : defaultProps$12['$custom-file-padding-x'];
  var $customFilePaddingY = arguments.length > 54 && arguments[54] !== undefined ? arguments[54] : defaultProps$12['$custom-file-padding-y'];
  var $customFileLineHeight = arguments.length > 55 && arguments[55] !== undefined ? arguments[55] : defaultProps$12['$custom-file-line-height'];
  var $customFileColor = arguments.length > 56 && arguments[56] !== undefined ? arguments[56] : defaultProps$12['$custom-file-color'];
  var $customFileBg = arguments.length > 57 && arguments[57] !== undefined ? arguments[57] : defaultProps$12['$custom-file-bg'];
  var $customFileBorderWidth = arguments.length > 58 && arguments[58] !== undefined ? arguments[58] : defaultProps$12['$custom-file-border-width'];
  var $customFileBorderColor = arguments.length > 59 && arguments[59] !== undefined ? arguments[59] : defaultProps$12['$custom-file-border-color'];
  var $customFileButtonColor = arguments.length > 60 && arguments[60] !== undefined ? arguments[60] : defaultProps$12['$custom-file-button-color'];
  var $customFileButtonBg = arguments.length > 61 && arguments[61] !== undefined ? arguments[61] : defaultProps$12['$custom-file-button-bg'];
  var $customFileText = arguments.length > 62 && arguments[62] !== undefined ? arguments[62] : defaultProps$12['$custom-file-text'];
  var customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(function ($lang) {
    customFileControlBeforeList.push('\n      &:lang(' + $lang + ')::after {\n        content: "' + $customFileText.placeholder[$lang] + '";\n      }   \n    ');
  });
  var customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(function ($lang) {
    customFileControlAfterList.push('\n      &:lang(' + $lang + ')::before {\n        content: "' + $customFileText['button-label'][$lang] + '";\n      }\n    ');
  });
  var selectBorderWidth = unitUtils$1.math.multiply($borderWidth, 2);
  var customSelectPaddingRight = unitUtils$1.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  var lineHeightBaseMinusCustomControlIndicatorSize = unitUtils$1.math.subtract($lineHeightBase, $customControlIndicatorSize);
  return '\n    /* Embedded icons from Open Iconic. */\n    /* Released under MIT and copyright 2014 Waybury. */\n    /* https://useiconic.com/open */\n    \n    \n    /* Checkboxes and radios */\n    /* Base class takes care of all the key behavioral aspects. */\n    \n    & .custom-control {\n      position: relative;\n      display: inline-flex;\n      min-height: calc(1rem * ' + $lineHeightBase + ');\n      padding-left: ' + $customControlGutter + ';\n      margin-right: ' + $customControlSpacerX + ';\n    }\n    \n    & .custom-control-input {\n      position: absolute;\n      z-index: -1; /* Put the input behind the label so it does not overlay text */\n      opacity: 0;\n    \n      &:checked ~ .custom-control-indicator {\n        color: ' + $customControlCheckedIndicatorColor + ';\n        background-color: ' + $customControlCheckedIndicatorBg + ';\n        ' + boxShadow($enableShadows, $customControlCheckedIndicatorBoxShadow) + '\n      }\n    \n      &:focus ~ .custom-control-indicator {\n        /* the mixin is not used here to make sure there is feedback */\n        box-shadow: ' + $customControlFocusIndicatorBoxShadow + ';\n      }\n    \n      &:active ~ .custom-control-indicator {\n        color: ' + $customControlActiveIndicatorColor + ';\n        background-color: ' + $customControlActiveIndicatorBg + ';\n        ' + boxShadow($enableShadows, $customControlActiveIndicatorBoxShadow) + '\n      }\n    \n      &:disabled {\n        ~ .custom-control-indicator {\n          cursor: ' + $customControlDisabledCursor + ';\n          background-color: ' + $customControlDisabledIndicatorBg + ';\n        }\n    \n        ~ .custom-control-description {\n          color: ' + $customControlDisabledDescriptionColor + ';\n          cursor: ' + $customControlDisabledCursor + ';\n        }\n      }\n    }\n    \n    /* Custom indicator */\n    /* Generates a shadow element to create our makeshift checkbox/radio background. */\n    \n    & .custom-control-indicator {\n      position: absolute;\n      top: calc(' + lineHeightBaseMinusCustomControlIndicatorSize + ' / 2);\n      left: 0;\n      display: block;\n      width: ' + $customControlIndicatorSize + ';\n      height: ' + $customControlIndicatorSize + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customControlIndicatorBg + ';\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: ' + $customControlIndicatorBgSize + ';\n      ' + boxShadow($enableShadows, $customControlIndicatorBoxShadow) + '\n    }\n    \n    /* Checkboxes */\n    /* Tweak just a few things for checkboxes.  */\n    \n    & .custom-checkbox {\n      & .custom-control-indicator {\n        ' + borderRadius($enableRounded, $customCheckboxRadius) + '\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customCheckboxCheckedIcon + ';\n      }\n    \n      & .custom-control-input.indeterminate ~ .custom-control-indicator {\n        background-color: ' + $customCheckboxIndeterminateBg + ';\n        background-image: ' + $customCheckboxIndeterminateIcon + ';\n        ' + boxShadow($enableShadows, $customCheckboxIndeterminateBoxShadow) + '\n      }\n    }\n    \n    /* Radios */\n    /* Tweak just a few things for radios. */\n    \n    & .custom-radio {\n      & .custom-control-indicator {\n        border-radius: ' + $customRadioRadius + ';\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customRadioCheckedIcon + ';\n      }\n    }\n    \n    \n    /* Layout options */\n    /* By default radios and checkboxes are inline-block with no additional spacing */\n    /* set. Use these optional classes to tweak the layout. */\n    \n    & .custom-controls-stacked {\n      display: flex;\n      flex-direction: column;\n    \n      & .custom-control {\n        margin-bottom: ' + $customControlSpacerY + ';\n    \n        + & .custom-control {\n          margin-left: 0;\n        }\n      }\n    }\n    \n    \n    /* Select */\n    /* Replaces the browser default select with a custom one, mostly pulled from */\n    /* http://primercss.io. */\n    \n    & .custom-select {\n      display: inline-block;\n      max-width: 100%;\n      height: calc(' + $inputHeight + ' + ' + selectBorderWidth + ');\n      padding: ' + $customSelectPaddingY + ' ' + customSelectPaddingRight + ' ' + $customSelectPaddingY + ' ' + $customSelectPaddingX + ';\n      line-height: ' + $customSelectLineHeight + ';\n      color: ' + $customSelectColor + ';\n      vertical-align: middle;\n      background: ' + $customSelectBg + ' ' + $customSelectIndicator + ' no-repeat right ' + $customSelectPaddingX + ' center;\n      background-size: ' + $customSelectBgSize + ';\n      border: ' + $customSelectBorderWidth + ' solid ' + $customSelectBorderColor + ';\n      ' + borderRadius($enableRounded, $customSelectBorderRadius) + '\n      /* Use vendor prefixes as appearance is not part of the CSS spec.  */\n      -moz-appearance: none;\n      -webkit-appearance: none;\n    \n      &:focus {\n        border-color: ' + $customSelectFocusBorderColor + ';\n        outline: none;\n        ' + boxShadow($enableShadows, $customSelectFocusBoxShadow) + '\n    \n        ::-ms-value {\n          /* For visual consistency with other platforms/browsers, */\n          /* supress the default white text on blue background highlight given to */\n          /* the selected option text when the (still closed) <select> receives focus */\n          /* in IE and (under certain conditions) Edge. */\n          /* See https://github.com/twbs/bootstrap/issues/19398. */\n          color: ' + $inputColor + ';\n          background-color: ' + $inputBg + ';\n        }\n      }\n    \n      &:disabled {\n        color: ' + $customSelectDisabledColor + ';\n        cursor: ' + $cursorDisabled + ';\n        background-color: ' + $customSelectDisabledBg + ';\n      }\n    \n      /* Hides the default caret in IE11 */\n      ::-ms-expand {\n        opacity: 0;\n      }\n    }\n    \n    & .custom-select-sm {\n      padding-top: ' + $customSelectPaddingY + ';\n      padding-bottom: ' + $customSelectPaddingY + ';\n      font-size: ' + $customSelectSmFontSize + ';\n    \n      /* &:not([multiple]) { */\n      /*   height: 26px; */\n      /*   min-height: 26px; */\n      /* } */\n    }\n    \n    \n    /* File */\n    /* Custom file input. */\n    \n    & .custom-file {\n      position: relative;\n      display: inline-block;\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin-bottom: 0;\n    }\n    \n    & .custom-file-input {\n      min-width: ' + $customFileWidth + ';\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin: 0;\n      opacity: 0;\n    \n      &:focus ~ .custom-file-control {\n        ' + boxShadow($enableShadows, $customFileFocusBoxShadow) + '\n      }\n    }\n    \n    & .custom-file-control {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 5;\n      height: ' + $customFileHeight + ';\n      padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n      line-height: ' + $customFileLineHeight + ';\n      color: ' + $customFileColor + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customFileBg + ';\n      border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n      ' + borderRadius($enableRounded, $customFileBorderRadius) + '\n      ' + boxShadow($enableShadows, $customFileBoxShadow) + '\n      \n      ' + customFileControlBeforeList.join('\n') + '\n    \n      &::before {\n        position: absolute;\n        top: ' + $customFileBorderWidth + ';\n        right: ' + $customFileBorderWidth + ';\n        bottom: ' + $customFileBorderWidth + ';\n        z-index: 6;\n        display: block;\n        height: ' + $customFileHeight + ';\n        padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n        line-height: ' + $customFileLineHeight + ';\n        color: ' + $customFileButtonColor + ';\n        background-color: ' + $customFileButtonBg + ';\n        border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n        ' + borderRadius(0, $enableRounded, $customFileBorderRadius, $customFileBorderRadius, 0) + '\n      }\n\n      ' + customFileControlAfterList.join('\n') + '\n    }\n  ';
}
var customForms$1 = {
  customForms: customForms
};

function gradientX() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var startPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0%';
  var endPercent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
  return '\n    background-image: linear-gradient(to right, ' + startColor + ' ' + startPercent + ', ' + endColor + ' ' + endPercent + ');\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=1); // IE9\n  ';
}
function gradientY() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var startPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0%';
  var endPercent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
  return '\n    background-image: linear-gradient(to bottom, ' + startColor + ' ' + startPercent + ', ' + endColor + ' ' + endPercent + ');\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=0); // IE9\n  ';
}
function gradientDirectional() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var deg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '45deg';
  return '\n    background-repeat: repeat-x;\n    background-image: linear-gradient(' + deg + ', ' + startColor + ', ' + endColor + ');\n  ';
}
function gradientXThreeColors() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#00b3ee';
  var midColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#7a43b6';
  var colorStop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '50%';
  var endColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#c3325f';
  return '\n    background-image: linear-gradient(to right, ' + startColor + ', ' + midColor + ' ' + colorStop + ', ' + endColor + ');\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=1); // IE9 gets no color-stop at all for proper fallback\n  ';
}
function gradientYThreeColors() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#00b3ee';
  var midColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#7a43b6';
  var colorStop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '50%';
  var endColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#c3325f';
  return '\n    background-image: linear-gradient(' + startColor + ', ' + midColor + ' ' + colorStop + ', ' + endColor + ');\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=0); // IE9 gets no color-stop at all for proper fallback\n  ';
}
function gradientRadial() {
  var innerColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var outerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  return '\n    background-image: radial-gradient(circle, ' + innerColor + ', ' + outerColor + ');\n    background-repeat: no-repeat;\n  ';
}
function gradientStriped() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgba(255,255,255,.15)';
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '45deg';
  return '\n    background-image: linear-gradient(' + angle + ', ' + color + ' 25%, transparent 25%, transparent 50%, ' + color + ' 50%, ' + color + ' 75%, transparent 75%, transparent);\n  ';
}
var gradients = {
  x: gradientX,
  y: gradientY,
  directional: gradientDirectional,
  xThreeColors: gradientXThreeColors,
  yThreeColors: gradientYThreeColors,
  radial: gradientRadial,
  striped: gradientStriped
};

var defaultProps$13 = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};
function makeContainer() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-gutter-widths'];
  if (enableGridClasses) {
    var columns = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      var column = mediaBreakpointUp(breakpoint, gutter, '\n        padding-right: ' + unitUtils$1.rmUnit(gutter) / 2 + unitUtils$1.detectUnit(gutter) + ';\n        padding-left:  ' + unitUtils$1.rmUnit(gutter) / 2 + unitUtils$1.detectUnit(gutter) + ';\n      ');
      columns.push(column);
    });
    return '\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;    \n      ' + columns.join('\n') + '\n    ';
  }
  return '';
}
function makeContainerMaxWidths() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var containerMaxWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$container-max-widths'];
  var gridBreakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$13['$grid-breakpoints'];
  if (enableGridClasses) {
    var maximumWidthList = [];
    Object.keys(containerMaxWidths).forEach(function (breakpoint) {
      var maximumWidth = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        width: ' + containerMaxWidths[breakpoint] + ';\n        max-width: 100%;\n      ');
      maximumWidthList.push(maximumWidth);
    });
    return '\n      ' + maximumWidthList.join('\n') + '\n    ';
  }
  return '';
}
function makeGutters() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$grid-gutter-widths'];
  var breakpoints$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-breakpoints'];
  var gutterList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutterValue = gridGutterWidths[breakpoint];
    gutterValue = '' + unitUtils$1.rmUnit(gutterValue) / 2 + unitUtils$1.detectUnit(gutterValue);
    var gutter = mediaBreakpointUp(breakpoint, breakpoints$$1, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}
function makeRow() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-gutter-widths'];
  if (enableGridClasses) {
    var rowList = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      gutter = '' + unitUtils$1.rmUnit(gutter) / -2 + unitUtils$1.detectUnit(gutter);
      var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
      rowList.push(row);
    });
    return '\n      display: flex;\n      flex-wrap: wrap;\n      ' + rowList.join('\n') + '\n    ';
  }
  return '';
}
function makeColReady() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$grid-gutter-widths'];
  var colReadyList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutter = gridGutterWidths[breakpoint];
    gutter = '' + unitUtils$1.rmUnit(gutter) / 2 + unitUtils$1.detectUnit(gutter);
    var colReady = mediaBreakpointUp(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutter + ';\n      padding-left:  ' + gutter + ';\n    ');
    colReadyList.push(colReady);
  });
  return '\n    position: relative;\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    min-height: 1px; /* Prevent collapsing */\n    width: 100%;\n    ' + colReadyList.join('\n') + '\n  ';
}
function makeCol(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    flex: 0 0 ' + unitUtils$1.toPercent(size, columns) + ';\n    /* Add a \'max-width\' to ensure content within each column does not blow out */\n    /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n    /* do not appear to require this. */\n    max-width: ' + unitUtils$1.toPercent(size, columns) + ';\n  ';
}
function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    margin-left: ' + unitUtils$1.toPercent($size, columns) + ';\n  ';
}
function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    left: ' + (size > 0 ? unitUtils$1.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    right: ' + (size > 0 ? unitUtils$1.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColModifier(type, size, columns) {
  var TYPE = {
    PUSH: 'push',
    PULL: 'pull',
    OFFSET: 'offset'
  };
  var modifier = '';
  if (type === TYPE.PUSH) {
    modifier = makeColPush(size, columns);
  } else if (type === TYPE.PULL) {
    modifier = makeColPull(size, columns);
  } else if (type === TYPE.OFFSET) {
    modifier = makeColOffset(size, columns);
  }
  return '\n    ' + modifier + '\n  ';
}
var grid = {
  defaultProps: defaultProps$13,
  makeContainer: makeContainer,
  makeContainerMaxWidths: makeContainerMaxWidths,
  makeGutters: makeGutters,
  makeRow: makeRow,
  makeColReady: makeColReady,
  makeCol: makeCol,
  makeColOffset: makeColOffset,
  makeColPush: makeColPush,
  makeColPull: makeColPull,
  makeColModifier: makeColModifier
};

var defaultProps$14 = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};
function getGridColumn() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$grid-gutter-widths'];
  var breakpoints$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-breakpoints'];
  return '\n    position: relative;\n    width: 100%;\n    min-height: 1px; /* Prevent columns from collapsing when empty */\n    ' + makeGutters(gridGutterWidths, breakpoints$$1) + '\n  ';
}
function getColumnGridColumn() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-breakpoints'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$14['$grid-gutter-widths'];
  var breakpoint = arguments[3];
  var columnList = [];
  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + getGridColumn(gridGutterWidths, gridBreakpoints) + '\n      }\n    ';
    columnList.push(column);
  }
  return '\n    /* Allow columns to stretch full width below their breakpoints */\n    &.col' + infix + ',\n     & .col' + infix + '{\n      ' + getGridColumn(gridGutterWidths, gridBreakpoints) + '\n    }\n\n    ' + columnList.join('\n') + '\n  ';
}
function getMediaBreakpointUp() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-breakpoints'];
  var breakpoint = arguments[2];
  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  var basic = '\n    &.col' + infix + ',\n     & .col' + infix + '{\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n    }\n    &.col' + infix + '-auto,\n     & .col' + infix + '-auto{\n      flex: 0 0 auto;\n      width: auto;\n    }\n  ';
  var columnList = [];
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + makeCol(i, gridColumns) + '\n      }\n    ';
    columnList.push(column);
  }
  var modifierList = ['pull', 'push'];
  var columnModifierList = [];
  modifierList.forEach(function (modifier) {
    for (var _i = 0; _i <= gridColumns; _i += 1) {
      var columnModifier = '\n        &.' + modifier + infix + '-' + _i + ',\n         & .' + modifier + infix + '-' + _i + '{\n          ' + makeColModifier(modifier, _i, gridColumns) + '\n        }\n      ';
      columnModifierList.push(columnModifier);
    }
  });
  var offsetColumnList = [];
  for (var _i2 = 0; _i2 <= gridColumns - 1; _i2 += 1) {
    if (infix !== 1 || _i2 !== 0) {
      var offsetColumn = '\n        &.offset' + infix + '-' + _i2 + ',\n         & .offset' + infix + '-' + _i2 + '{\n          ' + makeColModifier('offset', _i2, gridColumns) + '\n        }\n      ';
      offsetColumnList.push(offsetColumn);
    }
  }
  return mediaBreakpointUp(breakpoint, gridBreakpoints, '\n    ' + basic + '\n    ' + columnList.join('\n') + '\n    ' + columnModifierList.join('\n') + '\n    ' + offsetColumnList.join('\n') + '\n  ');
}
function makeGridColumns() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$enable-grid-classes'];
  var gridColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-columns'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$14['$grid-gutter-widths'];
  var gridBreakpoints = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$14['$grid-breakpoints'];
  if (enableGridClasses) {
    var gridColumnList = [];
    Object.keys(gridBreakpoints).forEach(function (breakpoint) {
      var gridColumn = '\n        ' + getColumnGridColumn(gridColumns, gridBreakpoints, gridGutterWidths, breakpoint) + '\n        ' + getMediaBreakpointUp(gridColumns, gridBreakpoints, breakpoint) + '\n      ';
      gridColumnList.push(gridColumn);
    });
    return '\n      ' + gridColumnList.join('\n') + '\n    ';
  }
  return '';
}
var gridFramework = {
  defaultProps: defaultProps$14,
  getGridColumn: getGridColumn,
  getColumnGridColumn: getColumnGridColumn,
  getMediaBreakpointUp: getMediaBreakpointUp,
  makeGridColumns: makeGridColumns
};

var defaultProps$15 = {
  '$enable-hover-media-query': false
};
function listGroupItemVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$15['$enable-hover-media-query'];
  var state = arguments[1];
  var background = arguments[2];
  var listColor = arguments[3];
  return '\n    & .list-group-item-' + state + ' {\n      color: ' + listColor + ';\n      background-color: ' + background + ';\n    }\n  \n    & a.list-group-item-' + state + ',\n    button.list-group-item-' + state + ' {\n      color: ' + listColor + ';\n  \n      .list-group-item-heading {\n        color: inherit;\n      }\n  \n      ' + hoverFocus(enableHoverMediaQuery, '\n        color: ' + listColor + ';\n        background-color: ' + color(background).darken(0.05).toString() + ';\n      ') + '\n  \n      &.active {\n        ' + plainHoverFocus(enableHoverMediaQuery, '\n          color: #fff;\n          background-color: ' + listColor + ';\n          border-color: ' + listColor + ';\n        ') + '\n      }\n    }\n  ';
}
var listGroup = {
  defaultProps: defaultProps$15,
  listGroupItemVariant: listGroupItemVariant
};

var defaultProps$16 = {
  '$list-inline-padding': '5px'
};
function listUnstyled() {
  return '\n    padding-left: 0;\n    list-style: none;\n  ';
}
function listInline() {
  return listUnstyled();
}

var lists = {
  defaultProps: defaultProps$16,
  listInline: listInline,
  listUnstyled: listUnstyled
};

var defaultProps$17 = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$nav-link-padding': '.5em 1em',
  '$nav-disabled-link-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$nav-tabs-border-width': '1px',
  '$nav-tabs-border-color': '#ddd',
  '$nav-tabs-border-radius': '.25rem',
  '$nav-tabs-link-hover-border-color': '#eceeef',
  '$nav-tabs-active-link-hover-color': '#464a4c',
  '$nav-tabs-active-link-hover-bg': '#fff',
  '$nav-tabs-active-link-hover-border-color': '#ddd',
  '$nav-pills-border-radius': '.25rem',
  '$nav-pills-active-link-color': '#fff',
  '$nav-pills-active-link-bg': '#0275d8'
};
function nav() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$17['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$17['$enable-hover-media-query'];
  var $navLinkPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$17['$nav-link-padding'];
  var $navDisabledLinkColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$17['$nav-disabled-link-color'];
  var $cursorDisabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$17['$cursor-disabled'];
  var $navTabBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$17['$nav-tabs-border-width'];
  var $navTabsBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$17['$nav-tabs-border-color'];
  var $navTabsBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$17['$nav-tabs-border-radius'];
  var $navTabsLinkHoverBorderColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$17['$nav-tabs-link-hover-border-color'];
  var $navTabsActiveLinkHoverColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$17['$nav-tabs-active-link-hover-color'];
  var $navTabsActiveLinkHoverBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$17['$nav-tabs-active-link-hover-bg'];
  var $navTabsActiveLinkHoverBorderColor = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$17['$nav-tabs-active-link-hover-border-color'];
  var $navPillsBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$17['$nav-pills-border-radius'];
  var $navPillsActiveLinkColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$17['$nav-pills-active-link-color'];
  var $navPillsActiveLinkBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$17['$nav-pills-active-link-bg'];
  return '\n    &.nav {\n      display: flex;\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    }\n    \n    & .nav-link {\n      display: block;\n      padding: ' + $navLinkPadding + ';\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n      /* Disabled state lightens text and removes hover tab effects */\n      &.disabled {\n        color: ' + $navDisabledLinkColor + ';\n        cursor: ' + $cursorDisabled + '; \n      }\n    }\n        \n    /*\n     Tabs\n    */\n    \n    &.nav-tabs {\n      border-bottom: ' + $navTabBorderWidth + ' solid ' + $navTabsBorderColor + ';\n      & .nav-item {\n        margin-bottom: -' + $navTabBorderWidth + ';\n      }\n   \n      & .nav-link {\n        border: ' + $navTabBorderWidth + ' solid transparent;\n        ' + borderTopRadius($enableRounded, $navTabsBorderRadius) + '\n        ' + hoverFocus($enableHoverMediaQuery, '\n          border-color: ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsBorderColor + ';\n        ') + '\n      \n        &.disabled {\n          color: ' + $navDisabledLinkColor + ';\n          background-color: transparent;\n          border-color: transparent;\n        }\n      }\n      \n      & .nav-link.active,\n      .nav-item.open .nav-link {\n        color: ' + $navTabsActiveLinkHoverColor + ';\n        background-color: ' + $navTabsActiveLinkHoverBg + ';\n        border-color: ' + $navTabsActiveLinkHoverBorderColor + ' ' + $navTabsActiveLinkHoverBorderColor + ' transparent;\n      }\n      \n      & .dropdown-menu {\n        /* Make dropdown border overlap tab border */\n        margin-top: -' + $navTabBorderWidth + ';\n        /* Remove the top rounded corners here since there is a hard edge above the menu */\n        ' + borderTopRadius($enableRounded, '0') + '\n      }\n    }\n    \n    /*\n     Pills\n    */\n    \n    &.nav-pills {\n      .nav-link {\n        ' + borderRadius($enableRounded, $navPillsBorderRadius) + '\n      }\n\n      .nav-link.active,\n      .nav-item.show .nav-link {\n        color: ' + $navPillsActiveLinkColor + ';\n        background-color: ' + $navPillsActiveLinkBg + ';\n      }\n    }\n\n    /*\n      Justified variants\n    */\n    \n    &.nav-fill {\n      .nav-item {\n        flex: 1 1 auto;\n        text-align: center;\n      }\n    }\n    \n    &.nav-justified {\n      .nav-item {\n        flex: 1 1 100%;\n        text-align: center;\n      }\n    }\n    \n    /* Hide tabbable panes to start, show them when .active */\n    &.tab-content {\n      > .tab-pane {\n        display: none;\n      }\n      > .active {\n        display: block;\n      }\n    }\n  ';
}
var nav$1 = {
  nav: nav
};

var defaultProps$19 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$19['$grid-breakpoints'];
  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = breakpointNext(breakpoint, gridBreakpoints);
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + mediaBreakpointDown(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + mediaBreakpointUp(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n\n           }\n           \n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}
var navbarToggleable$1 = {
  defaultProps: defaultProps$19,
  navbarToggleable: navbarToggleable
};

var defaultProps$18 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$navbar-padding-y': '0.5rem',
  '$navbar-padding-x': '1rem',
  '$zindex-navbar': '1000',
  '$zindex-navbar-fixed': '1030',
  '$zindex-navbar-sticky': '1030',
  '$navbar-brand-padding-y': '.25rem',
  '$font-size-lg': '1.25rem',
  '$navbar-divider-padding-y': '.425rem',
  '$navbar-toggler-padding-y': '.5rem',
  '$navbar-toggler-padding-x': '.75rem',
  '$navbar-toggler-font-size': '1.25rem',
  '$border-width': '1px',
  '$navbar-toggler-border-radius': '.25rem',
  '$navbar-light-active-color': 'rgba(0,0,0,.9)',
  '$navbar-light-color': 'rgba(0,0,0,.5)',
  '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
  '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
  '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
  '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
  '$navbar-inverse-color': 'rgba(255,255,255,.5)',
  '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
  '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
  '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
};
function navbar() {
  var $gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$18['$grid-breakpoints'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$18['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$18['$enable-hover-media-query'];
  var $navbarPaddingY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$18['$navbar-padding-y'];
  var $navbarPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$18['$navbar-padding-x'];
  var $zindexNavbar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$18['$zindex-navbar'];
  var $zindexNavbarFixed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$18['$zindex-navbar-fixed'];
  var $zindexNavbarSticky = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$18['$zindex-navbar-sticky'];
  var $navbarBrandPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$18['$navbar-brand-padding-y'];
  var $fontSizeLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$18['$font-size-lg'];
  var $navbarDividerPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$18['$navbar-divider-padding-y'];
  var $navbarTogglerPaddingY = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$18['$navbar-toggler-padding-y'];
  var $navbarTogglerPaddingX = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$18['$navbar-toggler-padding-x'];
  var $navbarTogglerFontSize = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$18['$navbar-toggler-font-size'];
  var $borderWidth = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$18['$border-width'];
  var $navbarTogglerBorderRadius = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$18['$navbar-toggler-border-radius'];
  var $navbarLightActiveColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$18['$navbar-light-active-color'];
  var $navbarLightColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$18['$navbar-light-color'];
  var $navbarLightHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$18['$navbar-light-hover-color'];
  var $navbarLightTogglerBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$18['$navbar-light-toggler-border'];
  var $navbarLightDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$18['$navbar-light-disabled-color'];
  var $navbarLightTogglerBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$18['$navbar-light-toggler-bg'];
  var $navbarInverseActiveColor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$18['$navbar-inverse-active-color'];
  var $navbarInverseColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$18['$navbar-inverse-color'];
  var $navbarInverseHoverColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$18['$navbar-inverse-hover-color'];
  var $navbarInverseTogglerBorder = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$18['$navbar-inverse-toggler-border'];
  var $navbarInverseTogglerBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$18['$navbar-inverse-toggler-bg'];
  var $navbarInverseDisabledColor = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$18['$navbar-inverse-disabled-color'];
  return '\n    /* Wrapper and base class\n\n     Provide a static navbar from which we expand to create full-width, fixed, and\n     other navbar variations.\n    */\n\n    &.navbar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      padding: ' + $navbarPaddingY + ' ' + $navbarPaddingX + ';\n    }\n    \n    /*\n     Brand/project name\n    */\n\n    & .navbar-brand {\n      display: inline-block;\n      padding-top: ' + $navbarBrandPaddingY + ';\n      padding-bottom: ' + $navbarBrandPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      font-size: ' + $fontSizeLg + ';\n      line-height: inherit;\n      white-space: nowrap;\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Navigation\n\n     Custom navbar navigation built on the base .nav styles.\n    */\n\n    &.navbar-nav,\n    & .navbar-nav {\n      display: flex;\n      flex-direction: column; /* cannot use inherit to get the .navbars value */\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    \n      .nav-link {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n    \n    /* Navbar text  */\n\n    & .navbar-text {\n      display: inline-block;\n      padding-top:    .425rem;\n      padding-bottom: .425rem;\n    }\n\n\n    /* Navbar toggle\n\n     Custom button for toggling the .navbar-collapse, powered by the collapse\n     Bootstrap JavaScript plugin.\n    */\n\n    & .navbar-toggler {\n      align-self: flex-start; \n      padding: ' + $navbarTogglerPaddingY + ' ' + $navbarTogglerPaddingX + ';\n      font-size: ' + $navbarTogglerFontSize + ';\n      line-height: 1;\n      background: transparent;\n      border: ' + $borderWidth + ' solid transparent;\n      ' + borderRadius($enableRounded, $navbarTogglerBorderRadius) + '\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */\n    & .navbar-toggler-icon {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      vertical-align: middle;\n      content: "";\n      background: no-repeat center center;\n      background-size: 100% 100%;\n    }\n    \n    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */\n    & .navbar-toggler-left {\n      position: absolute;\n      left: ' + $navbarPaddingX + ';\n    }\n    & .navbar-toggler-right {\n      position: absolute;\n      right: ' + $navbarPaddingX + ';\n    }\n\n    /* Dark links against a light background */\n    &.navbar-light {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarLightActiveColor + ';\n\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarLightColor + ';\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarLightDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarLightActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarLightTogglerBorder + ';\n      }\n      .navbar-toggler-icon {\n        background-image: ' + $navbarLightTogglerBg + ';\n      }\n  \n      .navbar-text {\n        color: ' + $navbarLightColor + ';\n      }\n    }\n      \n\n    /* White links against a dark background */\n    &.navbar-inverse {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarInverseActiveColor + ';\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarInverseActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarInverseColor + ';\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarInverseHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarInverseDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarInverseActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarInverseTogglerBorder + ';\n      }\n      \n      .navbar-toggler-icon {\n        background-image: ' + $navbarInverseTogglerBg + ';\n      }\n    \n      .navbar-text {\n        color: ' + $navbarInverseColor + ';\n      }\n    }\n    \n\n    ' + navbarToggleable($gridBreakpoints) + '\n    \n    /* DELETED IN LATEST BOOTSTRAP VERSINO */\n    \n    /* Navbar alignment options\n\n     Display the navbar across the entirety of the page or fixed it to the top or\n     bottom of the page.\n    */\n\n    /* A static, full width modifier with no rounded corners. */\n    &.navbar-full {\n      z-index: ' + $zindexNavbar + ';\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n      /* Fix the top/bottom navbars when screen real estate supports it */\n    &.navbar-fixed-top,\n    &.navbar-fixed-bottom {\n      position: fixed;\n      right: 0;\n      left: 0;\n      z-index: ' + $zindexNavbarFixed + ';\n      /*  Undo the rounded corners */\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    &.navbar-fixed-top {\n      top: 0;\n    }\n\n    &.navbar-fixed-bottom {\n      bottom: 0;\n    }\n\n    /* position sticky does not seem to be working AJT*/\n\n    &.navbar-sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + $zindexNavbarSticky + ';\n      width: 100%;\n\n        /*  Undo the rounded corners */\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    & .navbar-divider {\n      float: left;\n      width: ' + $borderWidth + ';\n      padding-top: ' + $navbarDividerPaddingY + ';\n      padding-bottom: ' + $navbarDividerPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      margin-left:  ' + $navbarPaddingX + ';\n      overflow: hidden;\n\n      &::before {\n        content: \'\0a0\';\n      }\n    }\n  ';
}
var navbar$1 = {
  defaultProps: defaultProps$18,
  navbar: navbar
};

var defaultProps$20 = {
  '$spacer-y': '1rem'
};
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$20['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';
  var marginY = '' + unitUtils$1.rmUnit(spacerY, unitUtils$1.UNIT.REM) / 2 + unitUtils$1.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}
var navDivider$1 = {
  defaultProps: defaultProps$20,
  navDivider: navDivider
};

var defaultProps$21 = {
  '$navbar-height': '50px'
};
function navbarVerticalAlign() {
  var navbarHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$21['$navbar-height'];
  var elementHeight = arguments[1];
  var marginTop = '' + (unitUtils$1.rmUnit(navbarHeight, unitUtils$1.UNIT.PX) - unitUtils$1.rmUnit(elementHeight, unitUtils$1.UNIT.PX)) / 2 + unitUtils$1.UNIT.PX;
  var marginBottom = '' + (unitUtils$1.rmUnit(navbarHeight, unitUtils$1.UNIT.PX) - unitUtils$1.rmUnit(elementHeight, unitUtils$1.UNIT.PX)) / 2 + unitUtils$1.UNIT.PX;
  return '\n    margin-top: ' + marginTop + ';\n    margin-bottom: ' + marginBottom + ';  \n  ';
}
var navbarAlign = {
  defaultProps: defaultProps$21,
  navbarVerticalAlign: navbarVerticalAlign
};

var defaultProps$22 = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$border-radius': '.25rem',
  '$pagination-active-color': '#fff',
  '$pagination-active-bg': '#0275d8',
  '$pagination-active-border': '#0275d8',
  '$pagination-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$pagination-disabled-bg': '#fff',
  '$pagination-disabled-border': '#ddd',
  '$pagination-padding-y': '.5rem',
  '$pagination-padding-x': '.75rem',
  '$pagination-line-height': '1.25',
  '$pagination-color': '#0275d8',
  '$pagination-bg': '#fff',
  '$pagination-border-width': '1px',
  '$pagination-border-color': '#ddd',
  '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$pagination-hover-bg': '#eceeef',
  '$pagination-hover-border': '#ddd',
  '$pagination-padding-y-lg': '.75rem',
  '$pagination-padding-x-lg': '1.5rem',
  '$font-size-lg': '1.25rem',
  '$line-height-lg': '1.3',
  '$border-radius-lg': '.3rem',
  '$pagination-padding-y-sm': '.25rem',
  '$pagination-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$line-height-sm': '1.5',
  '$border-radius-sm': '.2rem'
};
var paginationSize = function paginationSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$22['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadiusPagination = arguments[4];
  return '\n  .page-link {\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n  }\n\n  .page-item {\n    &:first-child {\n      .page-link {\n        ' + borderLeftRadius(enableRounded, borderRadiusPagination) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n        ' + borderRightRadius(enableRounded, borderRadiusPagination) + '\n      }\n    }\n  }\n';
};
function pagination() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$22['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$22['$enable-hover-media-query'];
  var $borderRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$22['$border-radius'];
  var $paginationActiveColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$22['$pagination-active-color'];
  var $paginationActiveBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$22['$pagination-active-bg'];
  var $paginationActiveBorder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$22['$pagination-active-border'];
  var $paginationDisabledColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$22['$pagination-disabled-color'];
  var $cursorDisabled = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$22['$cursor-disabled'];
  var $paginationDisabledBg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$22['$pagination-disabled-bg'];
  var $paginationDisabledBorder = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$22['$pagination-disabled-border'];
  var $paginationPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$22['$pagination-padding-y'];
  var $paginationPaddingX = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$22['$pagination-padding-x'];
  var $paginationLineHeight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$22['$pagination-line-height'];
  var $paginationColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$22['$pagination-color'];
  var $paginationBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$22['$pagination-bg'];
  var $paginationBorderWidth = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$22['$pagination-border-width'];
  var $paginationBorderColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$22['$pagination-border-color'];
  var $paginationHoverColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$22['$pagination-hover-color'];
  var $paginationHoverBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$22['$pagination-hover-bg'];
  var $paginationHoverBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$22['$pagination-hover-border'];
  var $paginationPaddingYLg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$22['$pagination-padding-y-lg'];
  var $paginationPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$22['$pagination-padding-x-lg'];
  var $fontSizeLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$22['$font-size-lg'];
  var $lineHeightLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$22['$line-height-lg'];
  var $borderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$22['$border-radius-lg'];
  var $paginationPaddingYSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$22['$pagination-padding-y-sm'];
  var $paginationPaddingXSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$22['$pagination-padding-x-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$22['$font-size-sm'];
  var $lineHeightSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps$22['$line-height-sm'];
  var $borderRadiusSm = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps$22['$border-radius-sm'];
  return '\n  &.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none; \n    ' + borderRadius($enableRounded) + '\n  }\n  \n  & .page-item {\n    &:first-child {\n      .page-link {\n        margin-left: 0;\n        ' + borderLeftRadius($enableRounded, $borderRadius) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n      ' + borderRightRadius($enableRounded, $borderRadius) + '\n      }\n    }\n  \n    &.active .page-link {\n      z-index: 2;\n      color: ' + $paginationActiveColor + ';\n      background-color: ' + $paginationActiveBg + ';\n      border-color: ' + $paginationActiveBorder + ';\n    }\n  \n    &.disabled .page-link {\n      color: ' + $paginationDisabledColor + ';\n      pointer-events: none;\n      cursor: ' + $cursorDisabled + ';\n      background-color: ' + $paginationDisabledBg + ';\n      border-color: ' + $paginationDisabledBorder + ';\n    }\n  }\n  \n  & .page-link {\n    position: relative;\n    display: block;\n    padding: ' + $paginationPaddingY + ' ' + $paginationPaddingX + ';\n    margin-left: -1px;\n    line-height: ' + $paginationLineHeight + ';\n    color: ' + $paginationColor + ';\n    background-color: ' + $paginationBg + ';\n    border: ' + $paginationBorderWidth + ' solid ' + $paginationBorderColor + ';\n    \n    ' + hoverFocus($enableHoverMediaQuery, '\n      color: ' + $paginationHoverColor + ';\n      text-decoration: none;\n      background-color: ' + $paginationHoverBg + ';\n      border-color: ' + $paginationHoverBorder + ';\n    ') + '\n  }\n  \n  /* Sizing */\n  &.pagination-lg {\n  ' + paginationSize($enableRounded, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg) + '\n  }\n  \n  &.pagination-sm {\n  ' + paginationSize($enableRounded, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) + '\n  }\n  ';
}
var paginations = {
  defaultProps: defaultProps$22,
  paginationSize: paginationSize,
  pagination: pagination
};

function progressVariant(bgColor) {
  return "\n    &[value]::-webkit-progress-value {\n      background-color: " + bgColor + ";\n    }\n    \n    &[value]::-moz-progress-bar {\n      background-color: " + bgColor + ";\n    }\n    \n    /* IE10+, Microsoft Edge */\n    &[value]::-ms-fill {\n      background-color: " + bgColor + ";\n    }\n    \n    /* IE9 */\n    @media screen and (min-width:0\\0) {\n    .progress-bar {\n        background-color: " + bgColor + ";\n      }\n    }\n  ";
}
var progress = {
  progressVariant: progressVariant
};

function resetFilter() {
  return "\n    filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\";\n  ";
}
var resetFilter$1 = {
  resetFilter: resetFilter
};

var defaultProps$23 = {
  '$font-family-base': true,
  '$font-weight-normal': true,
  '$line-height-base': true
};
function resetText() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$23['$font-family-base'];
  var fontWeightNormal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$23['$font-weight-normal'];
  var lineHeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$23['$line-height-base'];
  return '\n    font-family: ' + fontFamilyBase + ';\n    /* We deliberately do NOT reset font-size or word-wrap. */\n    font-style: normal;\n    font-weight: ' + fontWeightNormal + ';\n    letter-spacing: normal;\n    line-break: auto;\n    line-height: ' + lineHeightBase + ';\n    text-align: left; /* Fallback for where \'start\' is not supported */\n    text-align: start;\n    text-decoration: none;\n    text-shadow: none;\n    text-transform: none;\n    white-space: normal;\n    word-break: normal;\n    word-spacing: normal;\n  ';
}
var resetText$1 = {
  defaultProps: defaultProps$23,
  resetText: resetText
};

function resizable(direction) {
  var available = ['horizontal', 'vertical', 'both'];
  if (available.indexOf(direction) === -1) {
    throw new Error('Wrong resize value. Available are ' + available.join(','));
  }
  return '\n    resize: ' + direction + '; /* Options: horizontal, vertical, both */\n    overflow: auto; /* Per CSS3 UI, \'resize\' only applies when \'overflow\' isn\'t \'visible\' */\n  ';
}
var resize = {
  resizable: resizable
};

function srOnly() {
  return "\n    position: absolute !important;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  ";
}
function srOnlyFocusable() {
  return "\n    &:active,\n    &:focus {\n      position: static;\n      width: auto;\n      height: auto;\n      margin: 0;\n      overflow: visible;\n      clip: auto;\n    }\n  ";
}

function size(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  return "\n    width: " + width + ";\n    height: " + height + ";\n  ";
}

function tableRowVariant(state, background) {
  var hoverBackground = color(background).darken(0.05).toString();
  return '\n  /* Exact selectors below required to override \'.table-striped\' and prevent */\n  /* inheritance to nested tables. */\n  & .table-' + state + ' {\n    &,\n    > th,\n    > td {\n      background-color: ' + background + ';\n    }\n  }\n\n  /* Hover states for \'.table-hover\' */\n  /* Note: this is not available for cells or rows within \'thead\' or \'tfoot\'. */\n  &.table-hover {\n\n    .table-' + state + ' {\n      ' + hover('\n        background-color: ' + hoverBackground + ';\n\n        > td,\n        > th {\n          background-color: ' + hoverBackground + ';\n        }\n      ') + '\n    }\n  }\n  ';
}
var tableRow = {
  tableRowVariant: tableRowVariant
};

var defaultProps$24 = {
  '$enable-hover-media-query': false
};
function textEmphasisVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$24['$enable-hover-media-query'];
  var parent = arguments[1];
  var textColor = arguments[2];
  return '\n  ' + parent + ' {\n    color: ' + textColor + ' !important;\n  }\n  a' + parent + ' {\n  ' + hoverFocus(enableHoverMediaQuery, 'color: ' + color(textColor).darken(0.20).rgb() + ' !important;') + '\n  }\n';
}
var textEmphasis = {
  defaultProps: defaultProps$24,
  textEmphasisVariant: textEmphasisVariant
};

function textHide() {
  return "\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ";
}
var textHide$1 = {
  textHide: textHide
};

function textTruncate() {
  return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}

var defaultProps$25 = {
  '$headings-margin-bottom': '0.5rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '1.1',
  '$headings-color': 'inherit',
  '$display1-size': '6rem',
  '$display2-size': '5.5rem',
  '$display3-size': '4.5rem',
  '$display4-size': '3.5rem',
  '$display1-weight': '300',
  '$display2-weight': '300',
  '$display3-weight': '300',
  '$display4-weight': '300'
};
function typography() {
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$25['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$25['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$25['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$25['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$25['$headings-color'];
  var $display1Size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$25['$display1-size'];
  var $display2Size = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$25['$display2-size'];
  var $display3Size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$25['$display3-size'];
  var $display4Size = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$25['$display4-size'];
  var $display1Weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$25['$display1-weight'];
  var $display2Weight = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$25['$display2-weight'];
  var $display3Weight = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$25['$display3-weight'];
  var $display4Weight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$25['$display4-weight'];
  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}
var typography$1 = {
  defaultProps: defaultProps$25,
  typography: typography
};

var process = { argv: [], env: {} };

function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
    } else if (!comparable(unitUtils$1.rmUnit(prevNum), unitUtils$1.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    } else if (unitUtils$1.rmUnit(prevNum) >= unitUtils$1.rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
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
  var firstValue = unitUtils$1.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.');
    }
    asserted = false;
  }
  return asserted;
}
function comparable(a, b) {
  return !isNaN(a + b);
}
var variables = {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};

function invisible(visibility) {
  return "\n    visibility: " + visibility + " !important;\n  ";
}

function getAlignUtilities() {
  return "\n   " + alignBaseline() + "\n   " + alignTop() + "\n   " + alignMiddle() + "\n   " + alignBottom() + "\n   " + alignTextBottom() + "\n   " + alignTextTop() + "\n  ";
}
function alignBaseline() {
  return "\n    .align-baseline { vertical-align: baseline !important; } /* Browser default */\n  ";
}
function alignTop() {
  return "\n    .align-top { vertical-align: top !important; }\n  ";
}
function alignMiddle() {
  return "\n    .align-middle { vertical-align: middle !important; }\n  ";
}
function alignBottom() {
  return "\n    .align-bottom { vertical-align: bottom !important; }\n  ";
}
function alignTextBottom() {
  return "\n    .align-text-bottom { vertical-align: text-bottom !important; }\n  ";
}
function alignTextTop() {
  return "\n    .align-text-top { vertical-align: text-top !important; }\n  ";
}
var align = {
  getAlignUtilities: getAlignUtilities,
  alignBaseline: alignBaseline,
  alignTop: alignTop,
  alignMiddle: alignMiddle,
  alignBottom: alignBottom,
  alignTextBottom: alignTextBottom,
  alignTextTop: alignTextTop
};

var defaultProps$26 = {
  '$enable-hover-media-query': false,
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9543f',
  '$brand-inverse': '#373a3c',
  '$gray-lightest': '#f7f7f9'
};
function getBackgroundUtilities() {
  var $enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$26['$enable-hover-media-query'];
  var $brandPrimary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-primary'];
  var $brandSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$26['$brand-success'];
  var $brandInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$26['$brand-info'];
  var $brandWarning = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$26['$brand-warning'];
  var $brandDanger = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$26['$brand-danger'];
  var $brandInverse = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$26['$brand-inverse'];
  var $grayLightest = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$26['$gray-lightest'];
  return '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-primary', $brandPrimary) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-success', $brandSuccess) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-info', $brandInfo) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-warning', $brandWarning) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-danger', $brandDanger) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-inverse', $brandInverse) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-faded', $grayLightest) + '\n  ';
}
var bgPrimary = function bgPrimary($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-primary'];
  return bgVariant($enableHoverMediaQuery, '.bg-primary', bgColor);
};
var bgSuccess = function bgSuccess($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-success'];
  return bgVariant($enableHoverMediaQuery, '.bg-success', bgColor);
};
var bgInfo = function bgInfo($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-info'];
  return bgVariant($enableHoverMediaQuery, '.bg-info', bgColor);
};
var bgWarning = function bgWarning($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-warning'];
  return bgVariant($enableHoverMediaQuery, '.bg-warning', bgColor);
};
var bgDanger = function bgDanger($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-danger'];
  return bgVariant($enableHoverMediaQuery, '.bg-danger', bgColor);
};
var bgInverse = function bgInverse($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-inverse'];
  return bgVariant($enableHoverMediaQuery, '.bg-inverse', bgColor);
};
var bgFaded = function bgFaded($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$gray-lightest'];
  return bgVariant($enableHoverMediaQuery, '.bg-faded', bgColor);
};
var background = {
  defaultProps: defaultProps$26,
  getBackgroundUtilities: getBackgroundUtilities,
  bgFaded: bgFaded,
  bgPrimary: bgPrimary,
  bgSuccess: bgSuccess,
  bgInfo: bgInfo,
  bgWarning: bgWarning,
  bgDanger: bgDanger,
  bgInverse: bgInverse
};

var defaultProps$27 = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function getBordersUtilities() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    ' + rounded(enableRounded, radius) + '\n    ' + roundedTop(enableRounded, radius) + '\n    ' + roundedRight(enableRounded, radius) + '\n    ' + roundedBottom(enableRounded, radius) + '\n    ' + roundedLeft(enableRounded, radius) + '\n    ' + roundedCircle() + '\n    ' + resetRounded() + '\n    ' + resetRoundedTop() + '\n    ' + resetRoundedRight() + '\n    ' + resetRoundedLeft() + '\n    ' + resetRoundedBottom() + '\n    ' + resetBorder() + '\n    ' + resetBorderTop() + '\n    ' + resetBorderRight() + '\n    ' + resetBorderLeft() + '\n    ' + resetBorderBottom() + '\n  ';
}
function rounded() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded {\n      ' + borderRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedTop() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-top {\n      ' + borderTopRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedRight() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-right {\n      ' + borderRightRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedBottom() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-bottom {\n      ' + borderBottomRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedLeft() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-left {\n      ' + borderLeftRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedCircle() {
  return '\n    .rounded-circle {\n      border-radius: 50%;\n    }\n  ';
}
function resetBorder() {
  return '\n    .border-0 {\n      border: 0 !important;\n    }\n  ';
}
function resetBorderTop() {
  return '\n    .border-top-0 {\n      border-top: 0 !important;\n    }\n  ';
}
function resetBorderRight() {
  return '\n    .border-right-0 {\n      border-right: 0 !important;\n    }\n  ';
}
function resetBorderBottom() {
  return '\n    .border-bottom-0 {\n      border-bottom: 0 !important;\n    }\n  ';
}
function resetBorderLeft() {
  return '\n    .border-left-0 {\n      border-left: 0 !important;\n    }\n  ';
}
function resetRounded() {
  return '\n    .rounded-0 {\n      border-radius: 0 !important;\n    }\n  ';
}
function resetRoundedTop() {
  return '\n    .rounded-top-0 {\n      border-top-left-radius: 0 !important;\n      border-top-right-radius: 0 !important;\n    }\n  ';
}
function resetRoundedBottom() {
  return '\n    .rounded-bottom-0 {\n      border-bottom-left-radius: 0 !important;\n      border-bottom-right-radius: 0 !important;\n    }\n  ';
}
function resetRoundedLeft() {
  return '\n    .rounded-left-0 {\n      border-bottom-left-radius: 0 !important;\n      border-top-left-radius: 0 !important;\n    }\n  ';
}
function resetRoundedRight() {
  return '\n    .rounded-right-0 {\n      border-bottom-right-radius: 0 !important;\n      border-top-right-radius: 0 !important;\n    }\n  ';
}
var borders = {
  defaultProps: defaultProps$27,
  getBordersUtilities: getBordersUtilities,
  rounded: rounded,
  roundedTop: roundedTop,
  roundedRight: roundedRight,
  roundedBottom: roundedBottom,
  roundedLeft: roundedLeft,
  roundedCircle: roundedCircle
};

function getClearfixUtilities() {
  return '\n   ' + getClearfix() + '\n  ';
}
function getClearfix() {
  return '\n    .clearfix {\n      ' + clearfix() + '\n    }\n  ';
}
var clearfix$2 = {
  getClearfixUtilities: getClearfixUtilities,
  getClearfix: getClearfix
};

function getCursorUtilities() {
  return "\n    .cursor-alias {\n      cursor: alias;\n    }\n    \n    .cursor-all-scroll {\n      cursor: all-scroll;\n    }\n    \n    .cursor-auto {\n      cursor: auto;\n    }\n    \n    .cursor-cell {\n      cursor: cell;\n    }\n    \n    .cursor-context-menu {\n      cursor: context-menu;\n    }\n    \n    .cursor-col-resize {\n      cursor: col-resize;\n    }\n    \n    .cursor-copy {\n      cursor: copy;\n    }\n    \n    .cursor-crosshair {\n      cursor: crosshair;\n    }\n    \n    .cursor-default {\n      cursor: default;\n    }\n    \n    .cursor-e-resize {\n      cursor: e-resize;\n    }\n    \n    .cursor-ew-resize {\n      cursor: ew-resize;\n    }\n    \n    .cursor-grab {\n      cursor: grab;\n    }\n    \n    .cursor-grabbing {\n      cursor: grabbing;\n    }\n    \n    .cursor-help {\n      cursor: help;\n    }\n    \n    .cursor-move {\n      cursor: move;\n    }\n    \n    .cursor-n-resize {\n      cursor: n-resize;\n    }\n    \n    .cursor-ne-resize {\n      cursor: ne-resize;\n    }\n    \n    .cursor-nesw-resize {\n      cursor: nesw-resize;\n    }\n    \n    .cursor-ns-resize {\n      cursor: ns-resize;\n    }\n    \n    .cursor-nw-resize {\n      cursor: nw-resize;\n    }\n    \n    .cursor-nwse-resize {\n      cursor: nwse-resize;\n    }\n    \n    .cursor-no-drop {\n      cursor: no-drop;\n    }\n    \n    .cursor-none {\n      cursor: none;\n    }\n    \n    .cursor-not-allowed {\n      cursor: not-allowed;\n    }\n    \n    .cursor-pointer {\n      cursor: pointer;\n    }\n    \n    .cursor-progress {\n      cursor: progress;\n    }\n    \n    .cursor-row-resize {\n      cursor: row-resize;\n    }\n    \n    .cursor-s-resize {\n      cursor: s-resize;\n    }\n    \n    .cursor-se-resize {\n      cursor: se-resize;\n    }\n    \n    .cursor-sw-resize {\n      cursor: sw-resize;\n    }\n    \n    .cursor-text {\n      cursor: text;\n    }\n    \n    .cursor-vertical-text {\n      cursor: vertical-text;\n    }\n    \n    .cursor-w-resize {\n      cursor: w-resize;\n    }\n    \n    .cursor-wait {\n      cursor: wait;\n    }\n    \n    .cursor-zoom-in {\n      cursor: zoom-in;\n    }\n    \n    .cursor-zoom-out {\n      cursor: zoom-out;\n    }\n    \n    .cursor-initial {\n      cursor: initial;\n    }\n  ";
}
var cursor = {
  getCursorUtilities: getCursorUtilities
};

var defaultProps$28 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getDisplayUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$28['$grid-breakpoints'];
  var utilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    utilityList.push('\n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .d' + infix + '-none { display: none !important; }\n        .d' + infix + '-inline { display: inline !important; }\n        .d' + infix + '-inline-block { display: inline-block !important; }\n        .d' + infix + '-block { display: block !important; }\n        .d' + infix + '-table { display: table !important; }\n        .d' + infix + '-table-cell { display: table-cell !important; }\n        .d' + infix + '-flex { display: flex !important; }\n        .d' + infix + '-inline-flex { display: inline-flex !important; }\n      ') + '\n    ');
  });
  utilityList.push('\n    .d-print-block {\n      display: none !important;\n    \n      @media print {\n        display: block !important;\n      }\n    }\n    \n    .d-print-inline {\n      display: none !important;\n    \n      @media print {\n        display: inline !important;\n      }\n    }\n    \n    .d-print-inline-block {\n      display: none !important;\n    \n      @media print {\n        display: inline-block !important;\n      }\n    }\n    \n    .d-print-none {\n      @media print {\n        display: none !important;\n      }\n    }\n  ');
  return utilityList.join('\n');
}
var display = {
  defaultProps: defaultProps$28,
  getDisplayUtilities: getDisplayUtilities
};

var defaultProps$29 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFlexUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$29['$grid-breakpoints'];
  var flexUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    flexUtilityList.push('\n      /* Flex column reordering */\n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-first { order: -1; }\n        .flex' + infix + '-last { order: 1; }\n        .flex' + infix + '-unordered { order: 0; }\n      ') + '\n  \n      /* Flex direction */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-row            { flex-direction: row !important; }\n        .flex' + infix + '-column         { flex-direction: column !important; }\n        .flex' + infix + '-row-reverse    { flex-direction: row-reverse !important; }\n        .flex' + infix + '-column-reverse { flex-direction: column-reverse !important; }\n      ') + '\n      \n      /* Flex wrap */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-wrap         { flex-wrap: wrap !important; }\n        .flex' + infix + '-nowrap       { flex-wrap: nowrap !important; }\n        .flex' + infix + '-wrap-reverse { flex-wrap: wrap-reverse !important; }\n      ') + '\n      /* Flex justify-content */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .justify-content' + infix + '-start   { justify-content: flex-start !important; }\n        .justify-content' + infix + '-end     { justify-content: flex-end !important; }\n        .justify-content' + infix + '-center  { justify-content: center !important; }\n        .justify-content' + infix + '-between { justify-content: space-between !important; }\n        .justify-content' + infix + '-around  { justify-content: space-around !important; }\n        .justify-content' + infix + '-evenly  { justify-content: space-evenly !important; }\n      ') + '\n      /* Flex align-items */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-items' + infix + '-start    { align-items: flex-start !important; }\n        .align-items' + infix + '-end      { align-items: flex-end !important; }\n        .align-items' + infix + '-center   { align-items: center !important; }\n        .align-items' + infix + '-baseline { align-items: baseline !important; }\n        .align-items' + infix + '-stretch  { align-items: stretch !important; }\n      ') + '\n      /* Flex align-content */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-content' + infix + '-start   { align-content: flex-start !important; }\n        .align-content' + infix + '-end     { align-content: flex-end !important; }\n        .align-content' + infix + '-center  { align-content: center !important; }\n        .align-content' + infix + '-between { align-content: space-between !important; }\n        .align-content' + infix + '-around  { align-content: space-around !important; }\n        .align-content' + infix + '-stretch { align-content: stretch !important; }\n      ') + '\n      /* Flex align-self */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-self' + infix + '-auto     { align-self: auto !important; }\n        .align-self' + infix + '-start    { align-self: flex-start !important; }\n        .align-self' + infix + '-end      { align-self: flex-end !important; }\n        .align-self' + infix + '-center   { align-self: center !important; }\n        .align-self' + infix + '-baseline { align-self: baseline !important; }\n        .align-self' + infix + '-stretch  { align-self: stretch !important; }\n      ') + ' \n    ');
  });
  return flexUtilityList.join('\n');
}
var flex = {
  defaultProps: defaultProps$29,
  getFlexUtilities: getFlexUtilities
};

var defaultProps$30 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFloatUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$30['$grid-breakpoints'];
  var floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    var floatUtility = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n      .float' + infix + '-left {\n        ' + floatLeft() + '\n      }\n      .float' + infix + '-right {\n        ' + floatRight() + '\n      }\n      .float' + infix + '-none {\n        ' + floatNone() + '\n      }\n    ');
    floatUtilityList.push(floatUtility);
  });
  return floatUtilityList.join('\n');
}
var float$1 = {
  defaultProps: defaultProps$30,
  getFloatUtilities: getFloatUtilities
};

var defaultProps$31 = {
  '$zindex-fixed': '1030',
  '$zindex-sticky': '1030'
};
function getPositionUtilities() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  var zindexSticky = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$31['$zindex-sticky'];
  return '\n    ' + fixedTop(zindexFixed) + '\n    ' + fixedBottom(zindexFixed) + '\n    ' + stickTop(zindexSticky) + '\n  ';
}
function fixedTop() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  return '\n  .fixed-top {\n    position: fixed !important;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: ' + zindexFixed + ';\n  }\n  ';
}
function fixedBottom() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  return '\n    .fixed-bottom {\n      position: fixed !important;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + zindexFixed + ';\n    }\n  ';
}
function stickTop() {
  var zindexSticky = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-sticky'];
  return '\n    .sticky-top {\n      position: sticky !important;\n      top: 0;\n      z-index: ' + zindexSticky + ';\n    }\n  ';
}
var position = {
  defaultProps: defaultProps$31,
  getPositionUtilities: getPositionUtilities,
  fixedTop: fixedTop,
  fixedBottom: fixedBottom,
  stickTop: stickTop
};

var defaultProps$32 = {
  '$font-family-base': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  '$font-size-base': '1rem',
  '$font-weight-base': '1.5',
  '$line-height-base': '1.5',
  '$body-color': '#292b2c',
  '$body-bg': '#fff'
};
function getGlobalStyles() {
  return '\n    html {\n      ' + html() + '\n    }\n    *,\n    *::before,\n    *::after {\n      ' + boxSizing() + '\n    }\n    @-ms-viewport { \n      ' + ie10FixViewport() + ' \n    }\n    body {\n      ' + bodyUtils() + '\n    }\n  ';
}
function getGlobalStyleNoBootstrapProvider() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$32['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$32['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$32['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$32['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$32['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$32['$body-bg'];
  return '\n  ' + getGlobalStyles() + '\n  body {\n  ' + body(fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, bodyColor, bodyBg) + ' \n}';
}
function html() {
  return '\n    box-sizing: border-box;\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  ';
}
function boxSizing() {
  return '\n    box-sizing: inherit;\n  ';
}
function ie10FixViewport() {
  return '\n    width: device-width;\n  ';
}
function body() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$32['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$32['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$32['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$32['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$32['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$32['$body-bg'];
  return '\n    margin: 0;\n    font-family: ' + fontFamilyBase + ';\n    font-size: ' + fontSizeBase + ';\n    font-weight: ' + fontWeightBase + ';\n    line-height: ' + lineHeightBase + ';\n    color: ' + bodyColor + ';\n    background-color: ' + bodyBg + ';\n    \n    ' + bodyUtils() + '\n    \n    [tabindex="-1"]:focus {\n      ' + tabIndex() + '\n    }\n    svg:not(:root) {\n      ' + svg() + '\n    }\n    [hidden] {\n      ' + ie10FixHidden() + '\n    }\n    ::-webkit-file-upload-button {\n      ' + webkitFileUploadButton() + '\n    }\n  ';
}
function bodyUtils() {
  return '\n    &.overflow {\n      overflow: hidden;\n    }\n  ';
}
function tabIndex() {
  return '\n    outline: none !important;\n  ';
}
function svg() {
  return '\n    overflow: hidden;\n  ';
}
function ie10FixHidden() {
  return '\n    display: none !important;\n  ';
}
function webkitFileUploadButton() {
  return '\n    font: inherit;\n    -webkit-appearance: button;\n  ';
}
var reboot = {
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

function getScreenReadersUtilities() {
  return '\n    .sr-only {\n      ' + srOnly() + '\n    }\n    \n    .sr-only-focusable {\n      ' + srOnlyFocusable() + '\n    }\n  ';
}
var screenreaders = {
  getScreenReadersUtilities: getScreenReadersUtilities
};

var defaultProps$33 = {
  $sizes: {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  }
};
function getSizingUtilities() {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$33['$sizes'];
  var abbrev = {
    width: 'w',
    height: 'h'
  };
  var sizingList = [];
  Object.keys(abbrev).forEach(function (cssProp) {
    Object.keys(sizes).forEach(function (size) {
      sizingList.push('\n        .' + abbrev[cssProp] + '-' + size + ' { ' + cssProp + ': ' + sizes[size] + ' !important; }\n      ');
    });
  });
  return '\n    ' + sizingList.join('\n') + '\n    .mw-100 { max-width: 100% !important; }\n    .mh-100 { max-height: 100% !important; }\n  ';
}
var sizing = {
  defaultProps: defaultProps$33,
  getSizingUtilities: getSizingUtilities
};

var defaultProps$34 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$spacers': {
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: '0.25rem',
      y: '0.25rem'
    },
    2: {
      x: '0.5rem',
      y: '0.5rem'
    },
    3: {
      x: '1rem',
      y: '1rem'
    },
    4: {
      x: '1.5rem',
      y: '1.5rem'
    },
    5: {
      x: '3rem',
      y: '3rem'
    }
  }
};
function getSpacingUtilities()
{
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$34['$grid-breakpoints'];
  var spacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$34['$spacers'];
  var abbrevs = {
    margin: 'm',
    padding: 'p'
  };
  var spacingUtilityList = [];
  var infixList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    infixList.push(infix);
    Object.keys(abbrevs).forEach(function (prop) {
      var abbrev = abbrevs[prop];
      Object.keys(spacers).forEach(function (size) {
        var lengths = spacers[size];
        spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .' + abbrev + infix + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n          .' + abbrev + 't' + infix + '-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n          .' + abbrev + 'r' + infix + '-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n          .' + abbrev + 'b' + infix + '-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n          .' + abbrev + 'l' + infix + '-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n          .' + abbrev + 'x' + infix + '-' + size + ' {\n            ' + prop + '-right:  ' + lengths.x + ' !important;\n            ' + prop + '-left:   ' + lengths.x + ' !important;\n          }\n          .' + abbrev + 'y' + infix + '-' + size + ' {\n            ' + prop + '-top:    ' + lengths.y + ' !important;\n            ' + prop + '-bottom: ' + lengths.y + ' !important;\n          }\n        '));
      });
    });
  });
  var infixUtilityList = infixList.map(function (infix) {
    return '\n    .m' + infix + '-auto  { margin:        auto !important; }\n    .mt' + infix + '-auto { margin-top:    auto !important; }\n    .mr' + infix + '-auto { margin-right:  auto !important; }\n    .mb' + infix + '-auto { margin-bottom: auto !important; }\n    .ml' + infix + '-auto { margin-left:   auto !important; }\n    .mx' + infix + '-auto {\n      margin-right: auto !important;\n      margin-left:  auto !important;\n    }\n    .my' + infix + '-auto {\n      margin-top:    auto !important;\n      margin-bottom: auto !important;\n    }\n  ';
  });
  return '\n    ' + infixUtilityList.join('\n') + '\n    ' + spacingUtilityList.join('\n') + '\n  ';
}
var spacing = {
  defaultProps: defaultProps$34,
  getSpacingUtilities: getSpacingUtilities
};

var parseTransition_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTransition = function parseTransition(transitions) {
  if (!transitions) {
    return [];
  }
  var sample = transitions;
  var RULE_DELIMITER = ',';
  var PROPERTY_DELIMITER = ' ';
  var MS_UNIT = 'ms';
  var TMP_STR = 'TMP';
  var DEFAULT_PROPERTY = 'all';
  var DEFAULT_DURATION = 0;
  var DEFAULT_TIMING_FUNCTION = 'ease';
  var DEFAULT_DELAY = 0;
  var BEZIER_REGEX = /cubic-bezier\([^\)]+\)/gi;
  var cubicBezierList = transitions.match(BEZIER_REGEX);
  if (cubicBezierList) {
    sample = sample.replace(BEZIER_REGEX, TMP_STR);
  }
  var transitionList = sample.split(RULE_DELIMITER).map(function (rule) {
    var properties = rule.trim().split(PROPERTY_DELIMITER);
    return {
      property: properties[0] || DEFAULT_PROPERTY,
      duration: properties[1] && !(properties[1].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[1]) * 1000 : parseFloat(properties[1]) || DEFAULT_DURATION,
      timingFunction: properties[2] && properties[2] !== TMP_STR ? properties[2] : cubicBezierList ? cubicBezierList.shift() : DEFAULT_TIMING_FUNCTION,
      delay: properties[3] && !(properties[3].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[3]) * 1000 : parseFloat(properties[3]) || DEFAULT_DELAY
    };
  });
  return transitionList;
};
exports.default = parseTransition;
module.exports = exports['default'];
});
var parseTransition = unwrapExports(parseTransition_1);

var defaultProps$35 = {
  '$enable-transitions': true,
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease'
};
function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$35['$transition-collapse'];
  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}
function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-fade'];
  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + transition(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}
function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$transition-collapse'];
  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + transition(enableTransitions, transitionCollapse) + '\n    }\n  ';
}
function getReactTransition(enableTransition, transition$$1) {
  var transitionList = parseTransition(transition$$1);
  var _transitionList$ = transitionList[0],
      property = _transitionList$.property,
      duration = _transitionList$.duration,
      timingFunction = _transitionList$.timingFunction,
      delay = _transitionList$.delay;
  return transition(enableTransition, property + ' ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms');
}
var transition$2 = {
  defaultProps: defaultProps$35,
  getTransitionUtilities: getTransitionUtilities,
  getReactTransition: getReactTransition,
  fade: fade,
  collapse: collapse
};

var defaultProps$36 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-hover-media-query': false,
  '$font-weight-normal': 'normal',
  '$font-weight-bold': 'bold',
  '$text-muted': '#818a91',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$gray-dark': '#373a3c'
};
function getTextUtilities() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$36['$enable-hover-media-query'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$36['$grid-breakpoints'];
  var fontWeightNormal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$36['$font-weight-normal'];
  var fontWeightBold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$36['$font-weight-bold'];
  var textMuted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$36['$text-muted'];
  var brandPrimary = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$36['$brand-primary'];
  var brandSuccess = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$36['$brand-success'];
  var brandInfo = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$36['$brand-info'];
  var brandWarning = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$36['$brand-warning'];
  var brandDanger = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$36['$brand-danger'];
  var grayDark = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$36['$gray-dark'];
  var responseAlignmentList = [];
  Object.keys(gridBreakpoints).forEach(function (bp) {
    var infix = breakpointInfix(bp, gridBreakpoints);
    var responsiveAlignement = mediaBreakpointUp(bp, gridBreakpoints, '\n      .text' + infix + '-left { text-align: left !important; }\n      .text' + infix + '-right  { text-align: right !important; }\n      .text' + infix + '-center { text-align: center !important; }\n    ');
    responseAlignmentList.push(responsiveAlignement);
  });
  return '\n    /* Text */\n\n    /* Alignment */\n\n    .text-justify        { text-align: justify !important; }\n    .text-nowrap         { white-space: nowrap !important; }\n    .text-truncate       { ' + textTruncate() + ' }\n\n    /* Responsive alignment */\n\n    ' + responseAlignmentList.join('\n') + '\n\n    /* Transformation */\n\n    .text-lowercase      { text-transform: lowercase !important; }\n    .text-uppercase      { text-transform: uppercase !important; }\n    .text-capitalize     { text-transform: capitalize !important; }\n\n    /* Weight and italics */\n\n    .font-weight-normal  { font-weight: ' + fontWeightNormal + '; }\n    .font-weight-bold    { font-weight: ' + fontWeightBold + '; }\n    .font-italic         { font-style: italic; }\n\n    /* Contextual colors */\n\n    .text-white {\n      color: #fff !important;\n    }\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-muted', textMuted) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-primary', brandPrimary) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-success', brandSuccess) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-info', brandInfo) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-warning', brandWarning) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-danger', brandDanger) + '\n\n    /* Font color */\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-gray-dark', grayDark) + '\n\n    /* Misc */\n\n    .text-hide {\n      ' + textHide() + '\n    }\n\n  ';
}
var text = {
  defaultProps: defaultProps$36,
  getTextUtilities: getTextUtilities
};

function getVisibilityUtilities() {
  return '\n    .visible {\n      ' + invisible('visible') + '\n    }\n    \n    .invisible {\n      ' + invisible('hidden') + '\n    }\n   \n  ';
}
var visibility$1 = {
  getVisibilityUtilities: getVisibilityUtilities
};

export { a$1 as aMixins, alert as alertMixins, backgroundVariant as backgroundVariantMixins, badge as badgeMixins, borderRadius$1 as radius, boxShadow, breakpoints as bp, buttons as buttonsMixins, buttonGroup$1 as buttonGroupMixins, cards as cardsMixins, clearfix, ifElse, ifThen, float as floatMixins, forms as formsMixins, customForms$1 as customformsMixins, gradients as gradient, grid as gridMixins, gridFramework as gridFrameworkMixins, hover, listGroup as listGroupMixins, lists as listsMixins, nav$1 as navMixins, navbar$1 as navbarMixins, navDivider$1 as navDividerMixins, navbarAlign as navbarAlignMixins, navbarToggleable$1 as navbarToggleableMixins, paginations as paginationsMixins, progress as progressMixins, resetFilter$1 as resetFilterMixins, resetText$1 as resetTextMixins, resize as resizeMixins, srOnly, srOnlyFocusable, size, tabFocus$1 as tabFocusMixins, tableRow as tableRowMixins, textEmphasis as textEmphasisMixins, textHide$1 as textHideMixins, textTruncate, transition, typography$1 as typographyMixins, variables as variablesMixins, invisible, align as alignUtils, background as backgroundUtils, borders as bordersUtils, clearfix$2 as clearfixUtils, cursor as cursorUtils, display as displayUtils, flex as flexUtils, float$1 as floatUtils, position as positionUtils, reboot as rebootUtils, getGlobalStyleNoBootstrapProvider, getGlobalStyles, screenreaders as screenreadersUtils, sizing as sizingUtils, spacing as spacingUtils, transition$2 as transitionUtils, text as textUtils, visibility$1 as visibilityUtils, unitUtils$1 as unit };
//# sourceMappingURL=bootstrap-styled-mixins.es.js.map
