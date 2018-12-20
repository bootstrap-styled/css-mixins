import { defaultProps, navbarVerticalAlign } from '../navbar-align';

describe('bootstrap navbar-align mixins', () => {
  it('navbarVerticalAlign should return a css', () => {
    const css = navbarVerticalAlign(defaultProps['$navbar-height'], '30px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('margin-top: 10px;');
    expect(css).toContain('margin-bottom: 10px;');
  });
  it('navbarVerticalAlign should return a css', () => {
    const css = navbarVerticalAlign(undefined, '30px');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('margin-top: 10px;');
    expect(css).toContain('margin-bottom: 10px;');
  });
});
