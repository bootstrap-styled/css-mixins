export const defaultProps = {
  '$enable-shadows': false,
};

/**
 * @public
 * @description Applies box-shadow if enableShadows is true.
 * @param {boolean} enableShadows
 * @param {array} ...args
 * @returns {string}
 */
export function boxShadow(enableShadows = defaultProps['$enable-shadows'], ...args) {
  if (enableShadows) {
    return `
      box-shadow: ${args.join(' ')};
    `;
  }
  return '';
}

export default {
  defaultProps,
  boxShadow,
};
