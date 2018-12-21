import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';
import { mediaBreakpointUp } from './breakpoints';

const { toPercent } = unitUtils;

export const defaultProps = {
  '$grid-gutter-width': '30px',
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true,
};

// / Grid system

/**
 * @public
 * @description Generate semantic grid columns with these mixins.
 * @param enableGridClasses {boolean} [enableGridClasses=true] - Enable grid system
 * @param gridGutterWidth {string} [gridGutterWidth=30px] - margin between each grid
 * @returns {string}
 */
export function makeContainer(enableGridClasses = defaultProps['$enable-grid-classes'], gridGutterWidth = defaultProps['$grid-gutter-width']) {
  return enableGridClasses ? `
    width: 100%;
    padding-right: calc(${gridGutterWidth} / 2);
    padding-left: calc(${gridGutterWidth} / 2);
    margin-right: auto;
    margin-left: auto;
  ` : '';
}


/**
 * @public
 * @description For each breakpoint, define the maximum width of the container in a media query
 * @param enableGridClasses {boolean} [enableGridClasses=true] - Enable grid system
 * @param maxWidths {Object} [maxWidth={
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  }] - Container max widths
 * @param breakpoints {Object} [breakpoints={
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  }] - Application media breakpoints
 * @returns {string}
 */
export function makeContainerMaxWidths(enableGridClasses = defaultProps['$enable-grid-classes'], maxWidths = defaultProps['$container-max-widths'], breakpoints = defaultProps['$grid-breakpoints']) {
  return enableGridClasses ? Object.keys(breakpoints)
    .map((bp) => maxWidths[bp] ? mediaBreakpointUp(bp, breakpoints, `max-width: ${maxWidths[bp]};`) : '')
    .join('\n') : '';
}

/**
 * @private
 * @description Default <Row /> common css
 * @param enableGridClasses {boolean} [enableGridClasses=true] - Enable grid system
 * @param gridGutterWidth {string} [gridGutterWidth=30px] - margin between each grid
 * @returns {string}
 */
export function makeRow(enableGridClasses = defaultProps['$enable-grid-classes'], gridGutterWidth = defaultProps['$grid-gutter-width']) {
  return enableGridClasses ? `
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(${gridGutterWidth} / -2);
    margin-left: calc(${gridGutterWidth} / -2);
  ` : '';
}

/**
 * @private
 * @description Default <Col /> css
 * @param gridGutterWidth
 * @returns {string}
 */
export function makeColReady(gridGutterWidth = defaultProps['$grid-gutter-width']) {
  // Prevent columns from becoming too narrow when at smaller grid tiers by
  // always setting `width: 100%;`. This works because we use `flex` values
  // later on to override this initial width.
  return `
    position: relative;
    width: 100%;
    min-height: 1px; // Prevent collapsing
    padding-right: calc(${gridGutterWidth} / 2);
    padding-left: calc(${gridGutterWidth} / 2);
  `;
}

/**
 * @private
 * @description  Create max-width and flex position
 * @param {number} [size=0]
 * @param {number} [columns=12] - number of column using $grid-columns variable
 * @returns {string} max-width and flex css rules
 */
export function makeCol(size = 0, columns = defaultProps['$grid-columns']) {
  // Add a `max-width` to ensure content within each column does not blow out
  // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
  // do not appear to require this.
  return `
    flex: 0 0 ${toPercent(size, columns)};
    max-width: ${toPercent(size, columns)};
  `;
}

/**
 * @private
 * @description Create margin-left offset from size
 * @param {number} [size=0]
 * @param {number} [columns=12] - number of column using $grid-columns variable
 * @returns {string} margin-left css rule
 */
export function makeColOffset(size = 0, columns = defaultProps['$grid-columns']) {
  return `margin-left: ${toPercent(size, columns)};`;
}

export default {
  makeRow,
  makeContainer,
  makeContainerMaxWidths,
};
