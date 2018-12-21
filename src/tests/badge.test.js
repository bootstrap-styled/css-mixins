import { defaultProps, badgeVariant } from '../badge';

describe('bootstrap badge mixins', () => {
  it('badgeVariant should return css without hover media query ', () => {
    const css = badgeVariant(defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).toContain('background-color: #f00;');
    expect(css).toContain('&[href] {');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('background-color: hsl(0, 100%, 45%);');
  });
  it('badgeVariant should return css with hover media query', () => {
    const css = badgeVariant(!defaultProps['$enable-hover-mediaQuery'], '#f00');
    expect(css).toContain('&[href] {');
    expect(css).toContain('&:focus, &.focus { background-color: hsl(0, 100%, 45%); }');
    expect(css).toContain('&:hover, &.hover { background-color: hsl(0, 100%, 45%); }');
    expect(css).toContain('}');
  });
  it('badgeVariant should return css by default ', () => {
    const css = badgeVariant();
    expect(css).toContain('&[href] {');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('background-color: hsl(0, 0%, 0%);');
  });
});
