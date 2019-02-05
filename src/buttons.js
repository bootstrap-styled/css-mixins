import color from '@bootstrap-styled/color';
import { borderRadius } from './border-radius';
import { hover, hoverFocus } from './hover';
import { boxShadow } from './box-shadow';
import { transition } from './transition';
import { ifElse } from './conditional';
import { linearGradientRe } from './regex';

export const defaultProps = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': true,
  '$enable-rounded': true,
  '$font-weight-normal': 'normal',
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$btn-transition': 'all .2s ease-in-out',
  '$btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5refm',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
  '$btn-disabled-opacity': '.65',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#636c72',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#292b2c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f',
};

export function buttonVariant(
  enableShadows = defaultProps['$enable-shadows'],
  buttonColor,
  background,
  border,
  btnActiveBoxShadow = defaultProps['$btn-active-box-shadow'],
  btnBoxShadow = defaultProps['$btn-box-shadow']
) {
  let activeBackground = color(background).darken(0.2).toString();
  if (background && background.includes('linear-gradient')) {
    const res = background.match(linearGradientRe);
    activeBackground = `linear-gradient(${res.map((v) => color(v).darken(0.2).toString()).join(', ')})`;
  }
  const activeBorder = color(border).darken(0.12).toString();
  return `
    color: ${buttonColor};
    background: ${background};
    border-color: ${border};
    ${boxShadow(enableShadows, btnBoxShadow)}
  
    ${hover(`
      color: ${buttonColor};
      background-color: ${activeBackground};
      border-color: ${activeBorder};
    `)}
  
    &:focus,
    &.focus {
      ${ifElse(enableShadows, `
        box-shadow: ${btnBoxShadow}, 0 0 0 2px ${color(border).alpha(0.5).toString()};
      `, `
        box-shadow: 0 0 0 2px ${color(border).alpha(0.5).toString()};
      `)}
    }
  
    /* Disabled comes first so active can properly restyle */
    &.disabled,
    &:disabled {
      background-color: ${background};
      border-color: ${border};
    }
    
    &:active,
    &.active,
    .show > &.dropdown-toggle {
      color: ${buttonColor};
      ${ifElse(activeBackground.includes('linear-gradient'), `
        background: ${activeBackground};
      `, `
        background-color: ${activeBackground};
        background-image: none;
      `)}
      
      border-color: ${activeBorder};
      ${boxShadow(enableShadows, btnActiveBoxShadow)}
    }
  `;
}

export function buttonOutlineVariant(buttonColor, buttonColorHover = '#fff') {
  return `
    color: ${buttonColor};
    background-image: none;
    background-color: transparent;
    border-color: ${buttonColor};
  
    ${hover(`
      color: ${buttonColorHover};
      background-color: ${buttonColor};
      border-color: ${buttonColor};
    `)}
  
    &:focus,
    &.focus {
      box-shadow: 0 0 0 2px ${color(buttonColor).alpha(0.5).toString()};
    }
  
    &.disabled,
    &:disabled {
      color: ${buttonColor};
      border-color: transparent;
    }
    
    &:active,
    &.active,
    & .open > &.dropdown-toggle {
      color: ${buttonColorHover};
      background-color: ${buttonColor};
      border-color: ${buttonColor};
    }
  `;
}

// Button sizes
export function buttonSize(enableRounded = defaultProps['$enable-rounded'], paddingY, paddingX, fontSize, btnBorderRadius) {
  return `
    padding: ${paddingY} ${paddingX};
    font-size: ${fontSize};
    ${borderRadius(enableRounded, btnBorderRadius)}
  `;
}

export function button(
  $enableShadows = defaultProps['$enable-shadows'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $enableTransitions = defaultProps['$enable-transitions'],
  $enableRounded = defaultProps['$enable-rounded'],
  $fontWeightNormal = defaultProps['$font-weight-normal'],
  $btnFontWeight = defaultProps['$btn-font-weight'],
  $btnLineHeight = defaultProps['$btn-line-height'],
  $btnTransition = defaultProps['$btn-transition'],
  $btnBorderWidth = defaultProps['$btn-border-width'],
  $btnPaddingX = defaultProps['$btn-padding-x'],
  $btnPaddingY = defaultProps['$btn-padding-y'],
  $fontSizeBase = defaultProps['$font-size-base'],
  $btnBorderRadius = defaultProps['$btn-border-radius'],
  $btnBoxShadow = defaultProps['$btn-box-shadow'],
  $btnFocusBoxShadow = defaultProps['$btn-focus-box-shadow'],
  $btnActiveBoxShadow = defaultProps['$btn-active-box-shadow'],
  $cursorDisabled = defaultProps['$cursor-disabled'],
  $linkColor = defaultProps['$link-color'],
  $linkHoverColor = defaultProps['$link-hover-color'],
  $linkHoverDecoration = defaultProps['$link-hover-decoration'],
  $btnLinkDisabledColor = defaultProps['$btn-link-disabled-color'],
  $btnPaddingXLg = defaultProps['$btn-padding-x-lg'],
  $btnPaddingYLg = defaultProps['$btn-padding-y-lg'],
  $fontSizeLg = defaultProps['$font-size-lg'],
  $btnBorderRadiusLg = defaultProps['$btn-border-radius-lg'],
  $btnPaddingXSm = defaultProps['$btn-padding-x-sm'],
  $btnPaddingYSm = defaultProps['$btn-padding-y-sm'],
  $fontSizeSm = defaultProps['$font-size-sm'],
  $btnBorderRadiusSm = defaultProps['$btn-border-radius-sm'],
  $btnBlockSpacingY = defaultProps['$btn-block-spacing-y'],
  $btnPrimaryColor = defaultProps['$btn-primary-color'],
  $btnPrimaryBg = defaultProps['$btn-primary-bg'],
  $btnPrimaryBorder = defaultProps['$btn-primary-border'],
  $btnSecondaryColor = defaultProps['$btn-secondary-color'],
  $btnSecondaryBg = defaultProps['$btn-secondary-bg'],
  $btnSecondaryBorder = defaultProps['$btn-secondary-border'],
  $btnInfoColor = defaultProps['$btn-info-color'],
  $btnInfoBg = defaultProps['$btn-info-bg'],
  $btnInfoBorder = defaultProps['$btn-info-border'],
  $btnSuccessColor = defaultProps['$btn-success-color'],
  $btnSuccessBg = defaultProps['$btn-success-bg'],
  $btnSuccessBorder = defaultProps['$btn-success-border'],
  $btnWarningColor = defaultProps['$btn-warning-color'],
  $btnWarningBg = defaultProps['$btn-warning-bg'],
  $btnWarningBorder = defaultProps['$btn-warning-border'],
  $btnDangerColor = defaultProps['$btn-danger-color'],
  $btnDangerBg = defaultProps['$btn-danger-bg'],
  $btnDangerBorder = defaultProps['$btn-danger-border'],
  $btnDisabledOpacity = defaultProps['$btn-disabled-opacity'],
) {
  return `
  
    font-family: inherit;
    
    &.btn {
      display: inline-block;
      font-weight: ${$btnFontWeight};
      line-height: ${$btnLineHeight};
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      user-select: none;
      border: ${$btnBorderWidth} solid transparent;
      ${buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius)}
      ${transition($enableTransitions, $btnTransition)}
      ${hoverFocus($enableHoverMediaQuery, 'text-decoration: none;')}

      &:focus,
      &.focus {
        outline: 0;
        box-shadow: ${$btnFocusBoxShadow};
      }

      /* Disabled comes first so active can properly restyle */
      &.disabled,
      &:disabled {
        cursor: ${$cursorDisabled};
        opacity: ${$btnDisabledOpacity};
        ${boxShadow($enableShadows, 'none')}
      }  

      // Opinionated: add "hand" cursor to non-disabled .btn elements
      &:not(:disabled):not(.disabled) {
        cursor: pointer;
      }
      &:not(:disabled):not(.disabled):active,
      &:not(:disabled):not(.disabled).active {
        ${boxShadow($enableShadows, $btnActiveBoxShadow)}
    
        &:focus {
          ${boxShadow($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow)}
        }
      }
    }
    
    a.btn.disabled,
    fieldset[disabled] a.btn {
      pointer-events: none;
    }
   
   
    /* Alternate buttons */
   
    &.btn-primary {
      ${buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
    &.btn-secondary {
      ${buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
    &.btn-info {
      ${buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
    &.btn-success {
      ${buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
    &.btn-warning {
      ${buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
    &.btn-danger {
      ${buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow)}
    }
   
    &.btn-outline-primary {
      ${buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor)}
    }    
    &.btn-outline-secondary {
      ${buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor)}
    }    
    &.btn-outline-info {
      ${buttonOutlineVariant($btnInfoBg, $btnInfoColor)}
    }    
    &.btn-outline-success {
      ${buttonOutlineVariant($btnSuccessBg, $btnSuccessColor)}
    }
    &.btn-outline-warning {
      ${buttonOutlineVariant($btnWarningBg, $btnWarningColor)}
    }
    &.btn-outline-danger {
      ${buttonOutlineVariant($btnDangerBg, $btnDangerColor)}
    }
   
    /*
     Link buttons
    */
   
    &.btn-link {
      font-weight: ${$fontWeightNormal};
      color: ${$linkColor};
      border-radius: 0;
   
      &,
      &:active,
      &.active,
      &:disabled {
        background-color: transparent;
        ${boxShadow($enableShadows, 'none')}
      }
     
      &,
      &:focus,
      &:active {
        border-color: transparent;
      }
     
      ${hover('border-color: transparent;')}
     
      ${hoverFocus($enableHoverMediaQuery, `
        color: ${$linkHoverColor};
        text-decoration: ${$linkHoverDecoration};
        background-color: transparent;
      `)}
     
      &:disabled {
        color: ${$btnLinkDisabledColor};
        ${hoverFocus($enableHoverMediaQuery, `
          text-decoration: none;
        `)}
      }
    }
  
  
    /*
     Button Sizes
    */
   
    &.btn-lg {
      /* line-height: ensure even-numbered height of button next to large input */
      ${buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg)}
    }
   
    &.btn-sm {
      /* line-height: ensure proper height of button next to small input */
      ${buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm)}
    }
   
   
    /*
     Block button
    */
   
    &.btn-block {
      display: block;
      width: 100%;
    }
   
    /* Vertically space out multiple block buttons */
    &.btn-block + .btn-block {
      margin-top: ${$btnBlockSpacingY};
    }
   
    /* Specificity overrides */
    input[type="submit"],
    input[type="reset"],
    input[type="button"] {
      &.btn-block {
        width: 100%;
      }
    }
   
    /* Reboot Scss */
    touch-action: manipulation;
    line-height: inherit;
    &:focus{
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
    
    &[type="button"],
    &[type="reset"],
    &[type="submit"] {
      -webkit-appearance: button;
    }
    
    &::-moz-focus-inner,
    &[type="button"]::-moz-focus-inner,
    &[type="reset"]::-moz-focus-inner,
    &[type="submit"]::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

  `;
}

export default {
  defaultProps,
  buttonVariant,
  buttonOutlineVariant,
  buttonSize,
  button,
};
