// Breakpoint viewport sizes and media queries.
//
// Breakpoints are defined as a map of (name: minimum width), order from small to large:
//
//    (xs: 0, sm: 544px, md: 768px)
//
// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.

import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

/**
 * @private
 * @description Name of the next breakpoint, or null for the last breakpoint.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @param {array} breakpointNames
 * @example
 * breakpointNext('sm')
 * // md
 * @example
 * breakpointNext('sm', { xs: 0, sm: '544px', md: '768px' })
 * // md
 * @example
 * breakpointNext('sm', null, ['xs', 'sm', 'md'])
 * // md
 * @returns {*}
 */
export function breakpointNext(name, breakpoints = defaultProps['$grid-breakpoints'], breakpointNames = Object.keys(breakpoints)) {
  const n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}

/**
 * @private
 * @description Minimum breakpoint width. Null for the smallest (first) breakpoint.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @example
 * breakpointMin('sm', { xs: '0', sm: '544px', md: '768px' });
 * // 544px
 * @returns {*}
 */
export function breakpointMin(name, breakpoints = defaultProps['$grid-breakpoints']) {
  const min = breakpoints[name];
  return min !== '0' ? min : null;
}

/**
 * @private
 * @description Maximum breakpoint width. Null for the largest (last) breakpoint.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @example
 * breakpointMax('sm', { xs: 0, sm: '544px', md: '768px' })
 * // 767px
 * @returns {string|null}
 */
export function breakpointMax(name, breakpoints = defaultProps['$grid-breakpoints']) {
  const next = breakpointNext(name, breakpoints);
  if (next) {
    const min = unitUtils.rmUnit(breakpointMin(next, breakpoints), unitUtils.UNIT.PX);
    return (min - 1).toString() + unitUtils.UNIT.PX;
  }
  return null;
}

/**
 * @private
 * @description Returns a blank string if smallest breakpoint, otherwise returns the name with a dash infront.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @example
 * breakpointInfix('xs', { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' })
 * // (return a blank string)
 * @example
 * breakpointInfix('sm', { xs: 0, sm: '576px', md: '768px', lg: '992px', xl: '1200px' })
 * // -sm
 * @returns {string}
 */
export function breakpointInfix(name, breakpoints = defaultProps['$grid-breakpoints']) {
  return !name || breakpointMin(name, breakpoints) === null ? '' : `-${name}`;
}

/**
 * @public
 * @description Media of at least the minimum breakpoint width. No query for the smallest breakpoint. Makes the @content apply to the given breakpoint and wider.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @param {string} [content=""] - css
 * @returns {string} media css rules
 */
export function mediaBreakpointUp(name, breakpoints = defaultProps['$grid-breakpoints'], content = '') {
  const min = breakpointMin(name, breakpoints);
  if (min) {
    return `
      @media (min-width: ${min}) {
        ${content}
      }
    `;
  }
  return content;
}

/**
 * @public
 * @description Media of at most the maximum breakpoint width. No query for the largest breakpoint. MMakes the @content apply to the given breakpoint and narrower.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @param {string} [content=""] - css
 * @returns {string}
 */
export function mediaBreakpointDown(name, breakpoints = defaultProps['$grid-breakpoints'], content) {
  const max = breakpointMax(name, breakpoints);
  if (max) {
    return `
      @media (max-width: ${max}) {
        ${content}
      }
    `;
  }
  return content;
}


/**
 * @public
 * @description Media that spans multiple breakpoint widths. Makes the @content apply between the min and max breakpoints.
 * @param {string} lower
 * @param {string} upper
 * @param {object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @param {string} [content=""] - css
 * @returns {string}
 */
export function mediaBreakpointBetween(lower, upper, breakpoints = defaultProps['$grid-breakpoints'], content) {
  const min = breakpointMin(lower, breakpoints);
  const max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return `
      @media (min-width: ${min}) and (max-width: ${max}) {
        ${content}
      }
    `;
  } else if (min) {
    return `
      @media (min-width: ${min}) {
        ${content}
      }
    `;
  } else if (max) {
    return `
      @media (max-width: ${max}) {
        ${content}
      }
    `;
  }
  return content;
}

/**
 * @public
 * @description Media between the breakpoint's minimum and maximum widths.
 * No minimum for the smallest breakpoint, and no maximum for the largest one.
 * Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.
 * @param {string} name - the breakpoint name (xs, sm, ...)
 * @param {object} breakpoints [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Layout grid breakpoints
 * @param {string} content [content=""] - css
 * @returns {string}
 */
export function mediaBreakpointOnly(name, breakpoints = defaultProps['$grid-breakpoints'], content) {
  return mediaBreakpointBetween(name, name, breakpoints, content);
}

export default {
  defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly,
};
