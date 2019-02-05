import { defaultProps, bgVariant } from '../background-variant';

describe('bootstrap background-variant mixins', () => {
  it('bgVariant should return a css', () => {
    const css = bgVariant(defaultProps['$enable-hover-media-query'], '.toto', '#f00');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('.toto');
    expect(css).toContain('background-color: #f00 !important;');
    expect(css).toContain('a.toto');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover');
    expect(css).toContain('background-color: rgb(204, 0, 0) !important;');
  });
  it('bgVariant should have parameters', () => {
    const css = bgVariant(!defaultProps['$enable-hover-media-query'], undefined, undefined);
    expect(css).toContain('undefined');
    expect(css).toContain('background-color: undefined !important;');
    expect(css).toContain('aundefined');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover');
    expect(css).toContain('background-color: rgb(0, 0, 0) !important;');
  });
});
