export const defaultProps = {
  '$enable-transitions': true,
};

/**
 * @public
 * @description Enables transition if enableTransitions is true.
 * @param {boolean} enableTransitions
 * @param {array} args
 * @returns {string}
 */
// eslint-disable-next-line consistent-return
export function transition(enableTransitions = defaultProps['$enable-transitions'], ...args) {
  if (enableTransitions && args.length) {
    return `
      transition: ${args.join(' ')};
    `;
  }
  return '';
}

export default {
  transition,
};
