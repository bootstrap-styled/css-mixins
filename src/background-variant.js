import color from '@bootstrap-styled/color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

/**
 * @public
 * @description Css helper for component backgrounds.
 * @param {boolean} enableHoverMediaQuery Toggles hovering coloring if anchor is present.
 * @param {string} selector
 * @param {string} bgColor
 * @returns {string}
 */
export function bgVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], selector, bgColor) {
  return `
    ${selector} {
      background-color: ${bgColor} !important;
    }
    a${selector} {
      ${hoverFocus(enableHoverMediaQuery, `background-color: ${color(bgColor).darken(0.2).rgb()} !important;`)}
    }
  `;
}

export default {
  bgVariant,
};
