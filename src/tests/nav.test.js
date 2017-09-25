import { fromJS } from 'immutable';
import { defaultProps, nav } from '../nav';

describe('bootstrap nav utility', () => {
  it('nav should return a nav utility css', () => {
    const css = nav(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$nav-link-padding'],
      defaultProps['$nav-disabled-link-color'],
      defaultProps['$cursor-disabled'],
      defaultProps['$nav-tabs-border-width'],
      defaultProps['$nav-tabs-border-color'],
      defaultProps['$nav-tabs-border-radius'],
      defaultProps['$nav-tabs-link-hover-border-color'],
      defaultProps['$nav-tabs-active-link-hover-color'],
      defaultProps['$nav-tabs-active-link-hover-bg'],
      defaultProps['$nav-tabs-active-link-hover-border-color'],
      defaultProps['$nav-pills-border-radius'],
      defaultProps['$nav-pills-active-link-color'],
      defaultProps['$nav-pills-active-link-bg'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(605683652);
  });
  it('nav should return a a css by default', () => {
    const css = nav();
    expect(fromJS({ css }).hashCode()).toEqual(605683652);
  });
});
