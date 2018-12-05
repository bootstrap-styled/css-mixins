/**
 * @public
 * @description Horizontal gradient, from left to right.
 * @param {string} startColor
 * @param {string} endColor
 * @param {string} startPercent
 * @param {string} endPercent
 * @returns {string}
 */
export function gradientX(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
  return `
    background-image: linear-gradient(to right, ${startColor} ${startPercent}, ${endColor} ${endPercent});
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=1); // IE9
  `;
}

/**
 * @public
 * @description Vertical gradient, from top to bottom.
 * @param {string} startColor
 * @param {string} endColor
 * @param {string} startPercent
 * @param {string} endPercent
 * @returns {string}
 */
export function gradientY(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
  return `
    background-image: linear-gradient(to bottom, ${startColor} ${startPercent}, ${endColor} ${endPercent});
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=0); // IE9
  `;
}

/**
 * @public
 * @description Directional gradient.
 * @param {string} startColor
 * @param {string} endColor
 * @param {string} deg
 * @returns {string}
 */
export function gradientDirectional(startColor = '#555', endColor = '#333', deg = '45deg') {
  return `
    background-repeat: repeat-x;
    background-image: linear-gradient(${deg}, ${startColor}, ${endColor});
  `;
}

/**
 * @public
 * @description Three colours gradient.
 * @param {string} startColor
 * @param {string} midColor
 * @param {string} colorStop
 * @param {string} endColor
 * @returns {string}
 */
export function gradientXThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
  return `
    background-image: linear-gradient(to right, ${startColor}, ${midColor} ${colorStop}, ${endColor});
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=1); // IE9 gets no color-stop at all for proper fallback
  `;
}

/**
 * @public
 * @description Vertical three colours gradient.
 * @param {string} startColor
 * @param {string} midColor
 * @param {string} colorStop
 * @param {string} endColor
 * @returns {string}
 */
export function gradientYThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
  return `
    background-image: linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor});
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=0); // IE9 gets no color-stop at all for proper fallback
  `;
}

/**
 * @public
 * @description Radial gradient.
 * @param {string} innerColor
 * @param {string} outerColor
 * @returns {string}
 */
export function gradientRadial(innerColor = '#555', outerColor = '#333') {
  return `
    background-image: radial-gradient(circle, ${innerColor}, ${outerColor});
    background-repeat: no-repeat;
  `;
}

/**
 * @public
 * @description Striped angled gradient.
 * @param {string} color
 * @param {string} angle
 * @returns {string}
 */
export function gradientStriped(color = 'rgba(255,255,255,.15)', angle = '45deg') {
  return `
    background-image: linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent);
  `;
}

export default {
  x: gradientX,
  y: gradientY,
  directional: gradientDirectional,
  xThreeColors: gradientXThreeColors,
  yThreeColors: gradientYThreeColors,
  radial: gradientRadial,
  striped: gradientStriped,
};
