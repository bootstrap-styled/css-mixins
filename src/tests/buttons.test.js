import { fromJS } from 'immutable';
import {
  defaultProps, buttonVariant, buttonOutlineVariant, buttonSize, button,
} from '../buttons';

describe('bootstrap button mixins', () => {
  it('buttonVariant should return a css without shadows', () => {
    const css = buttonVariant(defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow'], defaultProps['$btn-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(657616858);
  });
  it('buttonVariant should return a css with shadows', () => {
    const css = buttonVariant(!defaultProps['$enable-shadows'], '#f00', '#0f0', '#0ff', defaultProps['$btn-active-box-shadow'], defaultProps['$btn-box-shadow']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-276107851);
  });
  it('buttonVariant should return a css with gradient colors', () => {
    const css = buttonVariant(!defaultProps['$enable-shadows'], '#f00', 'linear-gradient(#B21255, #790A68)', '#0ff', defaultProps['$btn-active-box-shadow'], false);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(989192686);
  });
  it('buttonVariant should return a css by default', () => {
    const css = buttonVariant();
    expect(fromJS({ css }).hashCode()).toEqual(461863357);
  });
  it('buttonOutlineVariant should return a css', () => {
    const css = buttonOutlineVariant('#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-580680997);
  });
  it('buttonOutlineVariant should return a css by default', () => {
    const css = buttonOutlineVariant();
    expect(fromJS({ css }).hashCode()).toEqual(57374718);
  });
  it('buttonSize should return a css with rounded', () => {
    const css = buttonSize(defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-294360164);
  });
  it('buttonSize should return a css without rounded', () => {
    const css = buttonSize(!defaultProps['$enable-rounded'], '#f00', '#00f', '#eee', '3px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-496542589);
  });
  it('buttonSize should return a css by default', () => {
    const css = buttonSize();
    expect(fromJS({ css }).hashCode()).toEqual(813225771);
  });
  it('button should return a a css', () => {
    const css = button(
      defaultProps['$enable-shadows'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$enable-transitions'],
      defaultProps['$enable-rounded'],
      defaultProps['$btn-font-weight'],
      defaultProps['$btn-line-height'],
      defaultProps['$btn-transition'],
      defaultProps['$input-btn-border-width'],
      defaultProps['$btn-padding-x'],
      defaultProps['$btn-padding-y'],
      defaultProps['$font-size-base'],
      defaultProps['$btn-border-radius'],
      defaultProps['$btn-active-box-shadow'],
      defaultProps['$cursor-disabled'],
      defaultProps['$link-color'],
      defaultProps['$link-hover-color'],
      defaultProps['$link-hover-decoration'],
      defaultProps['$btn-link-disabled-color'],
      defaultProps['$btn-padding-x-lg'],
      defaultProps['$btn-padding-y-lg'],
      defaultProps['$font-size-lg'],
      defaultProps['$btn-border-radius-lg'],
      defaultProps['$btn-padding-x-sm'],
      defaultProps['$btn-padding-y-sm'],
      defaultProps['$font-size-sm'],
      defaultProps['$btn-border-radius-sm'],
      defaultProps['$btn-block-spacing-y'],
      defaultProps['$btn-primary-color'],
      defaultProps['$btn-primary-bg'],
      defaultProps['$btn-primary-border'],
      defaultProps['$btn-secondary-color'],
      defaultProps['$btn-secondary-bg'],
      defaultProps['$btn-secondary-border'],
      defaultProps['$btn-info-color'],
      defaultProps['$btn-info-bg'],
      defaultProps['$btn-info-border'],
      defaultProps['$btn-success-color'],
      defaultProps['$btn-success-bg'],
      defaultProps['$btn-success-border'],
      defaultProps['$btn-warning-color'],
      defaultProps['$btn-warning-bg'],
      defaultProps['$btn-warning-border'],
      defaultProps['$btn-danger-color'],
      defaultProps['$btn-danger-bg'],
      defaultProps['$btn-danger-border'],
      defaultProps['$btn-disabled-opacity'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-323088384);
  });
  it('button should return a button utility by default', () => {
    const css = button();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-515297454);
  });
});
