import { fromJS } from 'immutable';
import { defaultProps, paginationSize, pagination } from '../paginations';

describe('bootstrap pagination mixins', () => {
  it('paginationSize should return a css with rounded', () => {
    const css = paginationSize(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-949498531);
  });
  it('paginationSize should return a css without rounded', () => {
    const css = paginationSize(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-955440062);
  });
  it('paginationSize should have arguments', () => {
    const css = paginationSize();
    expect(fromJS({ css }).hashCode()).toEqual(429136650);
  });
  it('paginationSize should return a css with rounded', () => {
    const css = paginationSize(
      defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-111634357);
  });
  it('paginationSize should return a css without rounded', () => {
    const css = paginationSize(
      !defaultProps['$enable-rounded'],
      '.75rem',
      '1.5rem',
      '1.25rem',
      (4 / 3).toString(),
      '.25rem',
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-955440062);
  });
  it('pagination should return a nav utility css', () => {
    const css = pagination(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$border-radius'],
      defaultProps['$pagination-active-color'],
      defaultProps['$pagination-active-bg'],
      defaultProps['$pagination-active-border'],
      defaultProps['$pagination-disabled-color'],
      defaultProps['$cursor-disabled'],
      defaultProps['$pagination-disabled-bg'],
      defaultProps['$pagination-disabled-border'],
      defaultProps['$pagination-padding-y'],
      defaultProps['$pagination-padding-x'],
      defaultProps['$pagination-line-height'],
      defaultProps['$pagination-color'],
      defaultProps['$pagination-bg'],
      defaultProps['$pagination-border-width'],
      defaultProps['$pagination-border-color'],
      defaultProps['$pagination-hover-color'],
      defaultProps['$pagination-hover-bg'],
      defaultProps['$pagination-hover-border'],
      defaultProps['$pagination-padding-y-lg'],
      defaultProps['$pagination-padding-x-lg'],
      defaultProps['$font-size-lg'],
      defaultProps['$line-height-lg'],
      defaultProps['$border-radius-lg'],
      defaultProps['$pagination-padding-y-sm'],
      defaultProps['$pagination-padding-x-sm'],
      defaultProps['$font-size-sm'],
      defaultProps['$line-height-sm'],
      defaultProps['$border-radius-sm'],
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(288894014);
  });
  it('pagination should parameters', () => {
    const css = pagination();
    expect(fromJS({ css }).hashCode()).toEqual(288894014);
  });
});
