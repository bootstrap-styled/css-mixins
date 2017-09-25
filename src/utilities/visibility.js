import { invisible } from '../visibility';


export function getVisibilityUtilities() {
  return `
    .visible {
      ${invisible('visible')}
    }
    
    .invisible {
      ${invisible('hidden')}
    }
   
  `;
}

export default {
  getVisibilityUtilities,
};
