import { fromJS } from 'immutable';

import {
  defaultProps, hover, hoverFocus, hoverFocusActive, plainHoverFocus,
} from '../hover';
import MixinError from '../MixinError';

describe('bootstrap hover mixins', () => {
  it('hover should return a css', () => {
    const css = hover(`
      cursor: pointer;
      opacity: .5;
    `);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&:hover, &.hover { ');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
  });
  it('hover should have arguments', () => {
    expect(hover).toThrowError(new MixinError('content is required'));
  });
  it('hoverFocus should return a css without media query', () => {
    const css = hoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
  });
  it('hoverFocus should return a css with media query', () => {
    const css = hoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&:focus, &.focus { cursor: pointer;');
    expect(css).toContain('opacity: .5; }');
    expect(css).toContain('&:hover, &.hover { cursor: pointer;');
    expect(css).toContain('opacity: .5; }');
  });
  it('hoverFocus should have arguments', () => {
    const css = hoverFocus();
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('undefined');
    expect(css).toContain('}');
  });
  it('hoverFocusActive should return a css without media query', () => {
    const css = hoverFocusActive(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&:focus, ');
    expect(css).toContain('&.focus, ');
    expect(css).toContain('&:active, ');
    expect(css).toContain('&.active,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
  });
  it('hoverFocusActive should return a css with media query', () => {
    const css = hoverFocusActive(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:active,');
    expect(css).toContain('&.active {');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
    expect(css).toContain('&:hover, &.hover { cursor: pointer;');
    expect(css).toContain('opacity: .5; }');
  });
  it('hoverFocusActive should have arguments', () => {
    const css = hoverFocusActive();
    expect(css).toContain('&:focus, ');
    expect(css).toContain('&.focus, ');
    expect(css).toContain('&:active, ');
    expect(css).toContain('&.active,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain(' undefined');
    expect(css).toContain('}');
  });
  it('plainHoverFocus should return a css without media query', () => {
    const css = plainHoverFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&,');
    expect(css).toContain('&:focus, ');
    expect(css).toContain('&.focus, ');
    expect(css).toContain('&:hover, ');
    expect(css).toContain('&.hover {');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
  });
  it('plainHoverFocus should return a css with media query', () => {
    const css = plainHoverFocus(
      !defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('&,');
    expect(css).toContain('&:focus, ');
    expect(css).toContain('&.focus {');
    expect(css).toContain('cursor: pointer;');
    expect(css).toContain('opacity: .5;');
    expect(css).toContain('}');
    expect(css).toContain('&:hover, &.hover { cursor: pointer;');
    expect(css).toContain('opacity: .5; }');
  });
  it('plainHoverFocus should have arguments', () => {
    const css = plainHoverFocus();
    expect(fromJS({ css }).hashCode()).toEqual(-136472967);
  });
  it('hover should have hoverFocus', () => {
    const css = hover.focus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(1054832218);
  });
  it('hover should have plainHoverFocus', () => {
    const css = hover.plainFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(1058096530);
  });
  it('hover should have hoverFocusActive', () => {
    const css = hover.activeFocus(
      defaultProps['$enable-hover-media-query'],
      `cursor: pointer;
      opacity: .5;`
    );
    expect(fromJS({ css }).hashCode()).toEqual(268514486);
  });
});
