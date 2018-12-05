import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';

export const defaultProps = {
  '$navbar-height': '50px',
};

/**
 * @public
 * @description Vertically center elements in the navbar depending on the value of its height.
 * @param {string} navbarHeight
 * @param {string} elementHeight
 * @returns {string}
 */
export function navbarVerticalAlign(navbarHeight = defaultProps['$navbar-height'], elementHeight) {
  const marginTop = `${(unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2}${unitUtils.UNIT.PX}`;
  const marginBottom = `${(unitUtils.rmUnit(navbarHeight, unitUtils.UNIT.PX) - unitUtils.rmUnit(elementHeight, unitUtils.UNIT.PX)) / 2}${unitUtils.UNIT.PX}`;
  return `
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};  
  `;
}

export default {
  defaultProps,
  navbarVerticalAlign,
};
