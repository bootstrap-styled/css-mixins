import unitUtils from '@bootstrap-styled/utils/lib/unitUtils';

import { hover, hoverFocus } from './hover';
import { borderRadius, borderTopRadius, borderBottomRadius } from './border-radius';

const { detectUnit, rmUnit } = unitUtils;

export const defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$card-spacer-x': '1.25rem',
  '$card-spacer-y': '.75rem',
  '$card-bg': '#fff',
  '$card-border-width': '1px',
  '$card-border-color': 'rgba(0, 0, 0, 0.125)',
  '$card-border-radius': '.25rem',
  '$card-cap-bg': '#f7f7f9',
  '$card-border-radius-inner': 'calc(.25rem - 1px)',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$btn-primary-bg': '#0275d8',
  '$btn-secondary-border': '#ccc',
  '$btn-info-bg': '#5bc0de',
  '$btn-success-bg': '#5cb85c',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-danger-bg': '#d9534f',
  '$card-link-hover-color': '#fff',
  '$card-img-overlay-padding': '1.25rem',
};

export function cardVariant(cardBackground, cardBorder) {
  return `
    background-color: ${cardBackground};
    border-color: ${cardBorder};
  
    & .card-header,
    & .card-footer {
      background-color: transparent;
    }
  `;
}

export function cardOutlineVariant(cardColor) {
  return `
    background-color: transparent;
    border-color: ${cardColor};
  `;
}

export function cardInverse(enableHoverMediaQuery = defaultProps['$enable-hover-media-query'], cardLinkHoverColor = defaultProps['$card-link-hover-color']) {
  return `
    color: rgba(255,255,255,.65);
    & .card-header,
    & .card-footer {
      background-color: transparent;
      border-color: rgba(255,255,255,.2);
    }
    & .card-header,
    & .card-footer,
    & .card-title,
    & .card-blockquote {
      color: #fff;
    }
    & .card-link,
    & .card-text,
    & .card-subtitle,
    & .card-blockquote .blockquote-footer {
      color: rgba(255,255,255,.65);
    }
    
    & .card-link {
      ${hoverFocus(enableHoverMediaQuery, `color: ${cardLinkHoverColor};`)}
    }
  `;
}

export function card(
  $enableRounded = defaultProps['$enable-rounded'],
  $enableHoverMediaQuery = defaultProps['$enable-hover-media-query'],
  $cardSpacerY = defaultProps['$card-spacer-y'],
  $cardSpacerX = defaultProps['$card-spacer-x'],
  $cardBg = defaultProps['$card-bg'],
  $cardBorderWidth = defaultProps['$card-border-width'],
  $cardBorderColor = defaultProps['$card-border-color'],
  $cardBorderRadius = defaultProps['$card-border-radius'],
  $cardCapBg = defaultProps['$card-cap-bg'],
  $cardBorderRadiusInner = defaultProps['$card-border-radius-inner'],
  $brandPrimary = defaultProps['$brand-primary'],
  $brandSuccess = defaultProps['$brand-success'],
  $brandInfo = defaultProps['$brand-info'],
  $brandWarning = defaultProps['$brand-warning'],
  $brandDanger = defaultProps['$brand-danger'],
  $btnPrimaryBg = defaultProps['$btn-primary-bg'],
  $btnSecondaryBorder = defaultProps['$btn-secondary-border'],
  $btnInfoBg = defaultProps['$btn-info-bg'],
  $btnSuccessBg = defaultProps['$btn-success-bg'],
  $btnWarningBg = defaultProps['$btn-warning-bg'],
  $btnDangerBg = defaultProps['$btn-danger-bg'],
  $cardLinkHoverColor = defaultProps['$card-link-hover-color'],
  $cardImgOverlayPadding = defaultProps['$card-img-overlay-padding'],
) {
  return `
    & .card {
      position: relative;
      display: flex;
      flex-direction: column;
      background-color: ${$cardBg};
      border: ${$cardBorderWidth} solid ${$cardBorderColor};
      ${borderRadius($enableRounded, $cardBorderRadius)}
    }
    
    & .card-block {
      flex: 1 1 auto;

      padding: ${$cardSpacerX};
    }
    
    & .card-title {
      margin-bottom: ${$cardSpacerY};
    }
    
    & .card-subtitle {
      margin-top: -${((rmUnit($cardSpacerY, detectUnit($cardSpacerY)) / 2) + detectUnit($cardSpacerY))};
      margin-bottom: 0;
    }
    
    & .card-text:last-child {
      margin-bottom: 0;
    }
   
    & .card-link {
      ${hover('text-decoration: none;')}
    
      + .card-link {
        margin-left: ${$cardSpacerX};
      }
    }
    
    & .card{
      > .list-group:first-child {
        .list-group-item:first-child {
          ${borderTopRadius($enableRounded, $cardBorderRadius)}
        }
      }
    
      > .list-group:last-child {
        .list-group-item:last-child {
          ${borderBottomRadius($enableRounded, $cardBorderRadius)}
        }
      }
    }
    
    & .card-header {
      padding: ${$cardSpacerY} ${$cardSpacerX};
      margin-bottom: 0;
      background-color: ${$cardCapBg};
      border-bottom: ${$cardBorderWidth} solid ${$cardBorderColor};
    
      &:first-child {
        ${borderRadius($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0')}
      }
    }
    
    & .card-footer {
      padding: ${$cardSpacerY} ${$cardSpacerX};
      background-color: ${$cardCapBg};
      border-top: ${$cardBorderWidth} solid ${$cardBorderColor};
    
      &:last-child {
        ${borderRadius($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner)}
      }
    }

    & .card-header-tabs {
      margin-right: -${((rmUnit($cardSpacerX, detectUnit($cardSpacerX)) / 2) + detectUnit($cardSpacerX))};
      margin-bottom: -${$cardSpacerY};
      margin-left: -${((rmUnit($cardSpacerX, detectUnit($cardSpacerX)) / 2) + detectUnit($cardSpacerX))};
      border-bottom: 0;
    }
    
    & .card-header-pills {
      margin-right: -${((rmUnit($cardSpacerX, detectUnit($cardSpacerX)) / 2) + detectUnit($cardSpacerX))};
      margin-left: -${((rmUnit($cardSpacerX, detectUnit($cardSpacerX)) / 2) + detectUnit($cardSpacerX))};
    }
    
    & .card-primary {
      ${cardVariant($brandPrimary, $brandPrimary)}
    }
    & .card-success {
      ${cardVariant($brandSuccess, $brandSuccess)}
    }
    & .card-info {
      ${cardVariant($brandInfo, $brandInfo)}
    }
    & .card-warning {
      ${cardVariant($brandWarning, $brandWarning)}
    }
    & .card-danger {
      ${cardVariant($brandDanger, $brandDanger)}
    }
    
    & .card-outline-primary {
      ${cardOutlineVariant($btnPrimaryBg)}
    }
    & .card-outline-secondary {
      ${cardOutlineVariant($btnSecondaryBorder)}
    }
    & .card-outline-info {
      ${cardOutlineVariant($btnInfoBg)}
    }
    & .card-outline-success {
      ${cardOutlineVariant($btnSuccessBg)}
    }
    & .card-outline-warning {
      ${cardOutlineVariant($btnWarningBg)}
    }
    & .card-outline-danger {
      ${cardOutlineVariant($btnDangerBg)}
    }
        
    & .card-inverse {
      ${cardInverse($enableHoverMediaQuery, $cardLinkHoverColor)}
    }

    & .card-blockquote {
      padding: 0;
      margin-bottom: 0;
      border-left: 0;
    }
    
    & .card-img {
      ${borderRadius($enableRounded, $cardBorderRadiusInner)}
    }
    
    & .card-img-overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: ${$cardImgOverlayPadding};
    }

    & .card-img-top {
      ${borderTopRadius($enableRounded, $cardBorderRadiusInner)}
    }
    
    & .card-img-bottom {
      ${borderBottomRadius($enableRounded, $cardBorderRadiusInner)}
    }
  `;
}


export default {
  defaultProps,
  cardVariant,
  cardOutlineVariant,
  cardInverse,
  card,
};
