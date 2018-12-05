/**
 * @public
 * @description Forces float left with !important.
 * @returns {string}
 */
export function floatLeft() {
  return `
    float: left !important;
  `;
}

/**
 * @public
 * @description Forces float right with !important.
 * @returns {string}
 */
export function floatRight() {
  return `
    float: right !important;
  `;
}

/**
 * @public
 * @description Forces float none with !important.
 * @returns {string}
 */
export function floatNone() {
  return `
    float: none !important;
  `;
}

export default {
  floatLeft,
  floatRight,
  floatNone,
};
