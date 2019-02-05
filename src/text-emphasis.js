import color from '@bootstrap-styled/color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

/**
 * @public
 * @description Forces text color and hovering from a parent component.
 * @param {boolean} enableHoverMediaQuery
 * @param {string} parent
 * @param {string} textColor
 * @returns {string}
 */
export function textEmphasisVariant(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], parent, textColor) {
  return `
  ${parent} {
    color: ${textColor} !important;
  }
  a${parent} {
  ${hoverFocus(
    enableHoverMediaQuery,
    `color: ${color(textColor).darken(0.20).rgb()} !important;`
  )}
  }
`;
}

export default {
  defaultProps,
  textEmphasisVariant,
};
