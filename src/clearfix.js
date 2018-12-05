/**
 * @public
 * @decription  Basic css for clearfix feature.
 * @returns {string}
 */
export function clearfix() {
  return `
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `;
}

export default {
  clearfix,
};
