import color from '@bootstrap-styled/color';
import { hoverFocus } from './hover';

export const defaultProps = {
  '$enable-hover-mediaQuery': false,
};

/**
 * @public
 * @description Basic css helper for Badge components background.
 * @param enableHoverMediaQuery
 * @param badgeColor
 * @returns {string}
 */
export function badgeVariant(enableHoverMediaQuery = defaultProps['$enable-hover-mediaQuery'], badgeColor) {
  return `
    background-color: ${badgeColor};
    
    &[href] {
      ${hoverFocus(enableHoverMediaQuery, `background-color: ${color(badgeColor).darken(0.1).toString()};`)}
    }
  `;
}

export default {
  defaultProps,
  badgeVariant,
};
