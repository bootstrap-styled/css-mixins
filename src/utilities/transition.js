import { parseTransition } from 'bootstrap-styled-utils';
import { transition as transitionMixin } from '../transition';

export const defaultProps = {
  '$enable-transitions': true,
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease',
};

export function getTransitionUtilities(
  enableTransitions = defaultProps['$enable-transitions'],
  transitionFade = defaultProps['$transition-fade'],
  transitionCollapse = defaultProps['$transition-collapse'],
) {
  return `
    ${fade(enableTransitions, transitionFade)}
    ${collapse(enableTransitions, transitionCollapse)}
  `;
}

export function fade(enableTransitions = defaultProps['$enable-transitions'], transitionFade = defaultProps['$transition-fade']) {
  return `
    .fade,
     &.fade {
      opacity: 0;
      ${transitionMixin(enableTransitions, transitionFade)}
    
      &.show {
        opacity: 1;
      }
    }
  `;
}

export function collapse(enableTransitions = defaultProps['$enable-transitions'], transitionCollapse = defaultProps['$transition-collapse']) {
  return `
    .collapse {
      display: none;
      &.show {
        display: block;
      }
    }
    
    tr {
      &.collapse.show {
        display: table-row;
      }
    }
    
    tbody {
      &.collapse.show {
        display: table-row-group;
      }
    }
    
    .collapsing {
      position: relative;
      height: 0;
      overflow: hidden;
      ${transitionMixin(enableTransitions, transitionCollapse)}
    }
  `;
}


// function for get react transition (could even use filter and transform from mixin transition)
export function getReactTransition(enableTransition, transition) {
  const transitionList = parseTransition(transition);
  const {
    property,
    duration,
    timingFunction,
    delay,
  } = transitionList[0];
  return transitionMixin(enableTransition, `${property} ${duration}ms ${timingFunction} ${delay}ms`);
}

export default {
  defaultProps,
  getReactTransition,
  fade,
  collapse,
};
