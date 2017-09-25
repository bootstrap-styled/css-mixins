import { fromJS } from 'immutable';
import { defaultProps, listGroupItemVariant } from '../list-group';

describe('bootstrap list-group mixins', () => {
  it('listGroupItemVariant should return a css without hover media query', () => {
    const css = listGroupItemVariant(defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(383134550);
  });
  it('listGroupItemVariant should return a css with hover media query', () => {
    const css = listGroupItemVariant(!defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(921513432);
  });
  it('listGroupItemVariant should return a css with hover media query', () => {
    const css = listGroupItemVariant();
    expect(fromJS({ css }).hashCode()).toEqual(-593336641);
  });
});
