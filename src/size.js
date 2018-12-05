/**
 * @public
 * @decription Sets both width and height.
 * @param {string} width
 * @param {string} height If unspecified will use width value by default.
 * @returns {string}
 */
export function size(width, height = width) {
  return `
    width: ${width};
    height: ${height};
  `;
}

export default {
  size,
};
