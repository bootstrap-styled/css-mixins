export const defaultProps = {
  '$list-inline-padding': '5px',
};

/**
 * @public
 * @description Unstyled keeps list items block level, just removes default browser padding and list-style.
 * @returns {string}
 */
export function listUnstyled() {
  return `
    padding-left: 0;
    list-style: none;
  `;
}

export function listInline() {
  return listUnstyled();
}

/**
 * @public
 * @description Inline list and removes margin for last child.
 * @param listInlinePadding
 * @returns {string}
 */
export function listInlineItem(listInlinePadding = defaultProps['$list-inline-padding']) {
  return `
    display: inline-block;
  
    &:not(:last-child) {
      margin-right: ${listInlinePadding};
    }
  `;
}
export default {
  defaultProps,
  listInline,
  listUnstyled,
};
