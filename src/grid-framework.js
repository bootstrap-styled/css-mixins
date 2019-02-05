// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

import { makeCol, makeColOffset, defaultProps } from './grid';
import { mediaBreakpointUp, breakpointInfix } from './breakpoints';

/**
 * @public
 * @description Used only by Bootstrap to generate the correct number of grid classes given any value of `$grid-columns`.
 * @param {boolean} [enableGridClasses=true] - if `false`, the function will return an empty string
 * @param {number} [columns=12] - the number of columns
 * @param {string|number} [gutter=30px] - the grid gutter width
 * @param {object} [breakpoints={
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    }] - The layout max-width grid breakpoint
 *
 * @returns {string} - css mixins utilities for bootstrap grid system
 */
export function makeGridColumns(
  enableGridClasses = defaultProps['$enable-grid-classes'],
  columns = defaultProps['$grid-columns'],
  gutter = defaultProps['$grid-gutter-width'],
  breakpoints = defaultProps['$grid-breakpoints']
) {
  // Common properties for all breakpoints
  const gridColumn = `
    position: relative;
    width: 100%;
    min-height: 1px; // Prevent columns from collapsing when empty
    padding-right: calc(${gutter} / 2);
    padding-left: calc(${gutter} / 2);
  `;

  return enableGridClasses ? Object.keys(breakpoints).map((bp) => {
    const infix = breakpointInfix(bp, breakpoints);
    // Allow columns to stretch full width below their breakpoints
    return `${Array.from({ length: columns }, (_, ind) => {
      const i = ind + 1;
      return `&.col${infix}-${i}, & .col${infix}-${i} { ${gridColumn} }`;
    }).join('\n')}
      
      &.col${infix},
      & .col${infix}-auto {
        ${gridColumn}
      }
      
${// Provide basic `.col-{bp}` classes for equal-width flexbox columns
  mediaBreakpointUp(bp, breakpoints, `
        &.col${infix},
        & .col${infix} {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        }
        &.col${infix}-auto,
        & .col${infix}-auto {
          flex: 0 0 auto;
          width: auto;
          max-width: none; // reset earlier grid tiers
        }
        
        ${Array.from({ length: columns }, (_, i) => `
          &.col${infix}-${i + 1},
          & .col${infix}-${i + 1} {
            ${makeCol(i + 1, columns)}
          }
        `)}
        
        &.order${infix}-first,
        & .order${infix}-first { order: -1; }
        
        &.order${infix}-last,
        & .order${infix}-last { order: ${columns + 1}; }
        
        ${Array.from({ length: columns }, (_, i) => `
          &.order${infix}-${i},
          & .order${infix}-${i} { 
            order: ${i}; 
          }
        `).join('\n')}
        
        ${// `$columns - 1` because offsetting by the width of an entire row isn't possible
  Array.from({ length: columns - 1 }, (_, i) => `
          &.offset${infix}-${i},
          & .offset${infix}-${i} {
            ${makeColOffset(i, columns)}
          }
        `).join('\n')}
      `)}
`;
  }).join('\n') : '';
}

export default {
  makeGridColumns,
};
