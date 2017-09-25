import { fromJS } from 'immutable';
import { defaultProps, textEmphasisVariant } from '../text-emphasis';

describe('bootstrap text-emphasis mixins', () => {
  it('textEmphasisVariant should return a css without hover media query', () => {
    const css = textEmphasisVariant(defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(19981378);
  });
  it('textEmphasisVariant should return a css with hover media query', () => {
    const css = textEmphasisVariant(!defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(fromJS({ css }).hashCode()).toEqual(-281847219);
  });
  it('textEmphasisVariant should have arguments', () => {
    const css = textEmphasisVariant();
    expect(fromJS({ css }).hashCode()).toEqual(99672463);
  });
});
