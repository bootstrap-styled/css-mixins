import MixinError from './MixinError';

export const defaultProps = {
  '$enable-hover-media-query': false,
};

/**
 * @public Css helper for hovering.
 * @description
 * @param {string} content
 * @returns {string}
 */
export function hover(content) {
  if (!content) throw new MixinError('content is required');
  // TODO: re-enable along with mq4-hover-shim
  //  @if $enable-hover-media-query {
  //    // See Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#hover
  //    // Currently shimmed by https://github.com/twbs/mq4-hover-shim
  //    @media (hover: hover) {
  //      &:hover { @content }
  //    }
  //  }
  //  @else {
  return `&:hover, &.hover { ${content} }`;
}

/**
 * @public Css helper for focus and hovering.
 * @description
 * @param {boolean} enableHoverMediaQuery
 * @param {string} content
 * @returns {string}
 */
export function hoverFocus(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return ` 
      &:focus, &.focus { ${content} }
      ${hover(content)}
    `;
  }
  return `
    &:focus,
    &.focus,
    &:hover,
    &.hover {
      ${content}
    }
  `;
}

/**
 * @public Css helper for plain focus and hovering.
 * @description
 * @param {boolean} enableHoverMediaQuery
 * @param {string} content
 * @returns {string}
 */
export function plainHoverFocus(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return `
      &, 
      &:focus, 
      &.focus {
        ${content}
      }
      ${hover(content)}
    `;
  }
  return ` 
    &, 
    &:focus, 
    &.focus, 
    &:hover, 
    &.hover {
      ${content}
    }
  `;
}

/**
 * @public Css helper for focus and active.
 * @description
 * @param {boolean} enableHoverMediaQuery
 * @param {string} content
 * @returns {string}
 */
export function hoverFocusActive(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], content) {
  if (enableHoverMediaQuery) {
    return `
      &:focus,
      &.focus,
      &:active,
      &.active {
        ${content}
      }
      ${hover(content)}
    `;
  }
  return `
    &:focus, 
    &.focus, 
    &:active, 
    &.active,
    &:hover,
    &.hover {
     ${content}
    }
  `;
}


hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;

export default {
  defaultProps,
  hover,
  hoverFocus,
  plainHoverFocus,
  hoverFocusActive,
};
