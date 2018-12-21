import { a, defaultProps } from '../a';

describe('bootstrap a mixin', () => {
  it('should return a a mixin css', () => {
    const css = a(
      defaultProps['$link-color'],
      defaultProps['$link-decoration'],
      defaultProps['$link-hover-color'],
      defaultProps['$link-hover-decoration'],
      defaultProps['$enable-hover-media-query'],
    );
    expect(css).toContain('color: #0275d8;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('background-color: transparent;');
    expect(css).toContain('-webkit-text-decoration-skip: objects;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: #014C8D;');
    expect(css).toContain('text-decoration: underline;');
    expect(css).toContain('&:focus {');
    expect(css).toContain('outline: 5px auto -webkit-focus-ring-color;');
    expect(css).toContain('outline-offset: -2px;');
    expect(css).toContain('a:not([href]):not([tabindex]) {');
    expect(css).toContain('color: inherit;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: inherit;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('&:focus {');
    expect(css).toContain('outline: 0;');
  });
  it('should return a a utility css by default', () => {
    const css = a();
    expect(css).toContain('color: #0275d8;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('background-color: transparent;');
    expect(css).toContain('-webkit-text-decoration-skip: objects;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: #014C8D;');
    expect(css).toContain('text-decoration: underline;');
    expect(css).toContain('&:focus {');
    expect(css).toContain('outline: 5px auto -webkit-focus-ring-color;');
    expect(css).toContain('outline-offset: -2px;');
    expect(css).toContain('a:not([href]):not([tabindex]) {');
    expect(css).toContain('color: inherit;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('color: inherit;');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('&:focus {');
    expect(css).toContain('outline: 0;');
  });
});
