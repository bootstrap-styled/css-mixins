import { srOnly, srOnlyFocusable } from '../screen-reader';

export function getScreenReadersUtilities() {
  return `
    .sr-only {
      ${srOnly()}
    }
    
    .sr-only-focusable {
      ${srOnlyFocusable()}
    }
  `;
}

export default {
  getScreenReadersUtilities,
};
