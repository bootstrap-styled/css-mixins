import { defaultProps, textEmphasisVariant } from '../text-emphasis';

describe('bootstrap text-emphasis mixins', () => {
  it('textEmphasisVariant should return a css without hover media query', () => {
    const css = textEmphasisVariant(defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).toContain('.toto {');
    expect(css).toContain('color: #f00 !important;');
    expect(css).toContain('}');
    expect(css).toContain('a.toto {');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: rgb(204, 0, 0) !important;');
    expect(css).toContain('}');
  });
  it('textEmphasisVariant should return a css with hover media query', () => {
    const css = textEmphasisVariant(!defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).toContain('.toto {');
    expect(css).toContain('color: #f00 !important;');
    expect(css).toContain('a.toto {');
    expect(css).toContain('&:focus, &.focus { color: rgb(204, 0, 0) !important; }');
    expect(css).toContain('&:hover, &.hover { color: rgb(204, 0, 0) !important; }');
  });
  it('textEmphasisVariant should have arguments', () => {
    const css = textEmphasisVariant(undefined, undefined, undefined);
    expect(css).toContain('undefined {');
    expect(css).toContain('color: undefined !important;');
    expect(css).toContain('}');
    expect(css).toContain('aundefined {');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: rgb(0, 0, 0) !important;');
    expect(css).toContain('}');
  });
});
