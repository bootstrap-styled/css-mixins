/**
 * @public
 * @description Text truncate. Requires inline-block or block for proper styling.
 * @returns {string}
 */
export function textTruncate() {
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;
}

export default {
  textTruncate,
};
