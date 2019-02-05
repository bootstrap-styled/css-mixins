import { fromJS } from 'immutable';
import { makeGridColumns } from '../grid-framework';
import { defaultProps } from '../grid';

describe('bootstrap grid-framework mixins', () => {
  it('makeGridColumns should return an empty css', () => {
    const css = makeGridColumns(
      !defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-width'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).toEqual('');
  });
  it('makeGridColumns should return a css', () => {
    const css = makeGridColumns(
      defaultProps['$enable-grid-classes'],
      defaultProps['$grid-columns'],
      defaultProps['$grid-gutter-width'],
      defaultProps['$grid-breakpoints']
    );
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-672260335);
  });
  it('makeGridColumns should have arguments', () => {
    const css = makeGridColumns();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-672260335);
  });
});
