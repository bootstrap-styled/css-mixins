export const defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true,
};

/**
 * @public
 * @description Applies border-radius if enableRounded is true.
 * @param {boolean} enableRounded
 * @param {string} radius
 * @returns {string}
 */
export function borderRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-radius: ${radius};
    `;
  }
  return '';
}
/**
 * @public
 * @description Applies border-radius to the top corners if enableRounded is true.
 * @param {boolean} enableRounded
 * @param {string} radius
 * @returns {string}
 */
export function borderTopRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-top-right-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
  return '';
}

/**
 * @public
 * @description Applies border-radius to the right corners if enableRounded is true.
 * @param {boolean} enableRounded
 * @param {string} radius
 * @returns {string}
 */
export function borderRightRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-right-radius: ${radius};
      border-top-right-radius: ${radius};
    `;
  }
  return '';
}

/**
 * @public
 * @description Applies border-radius to the bottom corners if enableRounded is true.
 * @param {boolean} enableRounded
 * @param {string} radius
 * @returns {string}
 */
export function borderBottomRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-right-radius: ${radius};
      border-bottom-left-radius: ${radius};
    `;
  }
  return '';
}

/**
 * @public
 * @description Applies border-radius to the left corners if enableRounded is true.
 * @param {boolean} enableRounded
 * @param {string} radius
 * @returns {string}
 */
export function borderLeftRadius(enableRounded = defaultProps['$enable-rounded'], radius = defaultProps['$border-radius']) {
  if (enableRounded) {
    return `
      border-bottom-left-radius: ${radius};
      border-top-left-radius: ${radius};
    `;
  }
  return '';
}

export default {
  defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius,
};
