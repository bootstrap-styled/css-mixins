/**
 * @public
 * @description Basic css helper for Media components.
 * @returns {string}
 */
export function media() {
  return `
   &.media {
    display: flex;
    align-items: flex-start;
  }
  
  & .media-body {
    flex: 1;
  }
  `;
}

export default {
  media,
};
