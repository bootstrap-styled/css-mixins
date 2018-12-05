
// Visibility

/**
 * @public
 * @description Forces visibility value with !important
 * @param visibility
 * @returns {string}
 */
export function invisible(visibility) {
  return `
    visibility: ${visibility} !important;
  `;
}

export default {
  invisible,
};
