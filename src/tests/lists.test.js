import {
  defaultProps, listUnstyled, listInlineItem, listInline,
} from '../lists';

describe('bootstrap lists mixins', () => {
  it('listUnstyled should return a css', () => {
    const css = listUnstyled();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('padding-left: 0;');
    expect(css).toContain('list-style: none;');
  });
  it('listInlineItem should return a css', () => {
    const css = listInlineItem(defaultProps['$list-inline-padding']);
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('display: inline-block;');
    expect(css).toContain('&:not(:last-child) {');
    expect(css).toContain('margin-right: 5px;');
  });
  it('listInlineItem should have arguments', () => {
    const css = listInlineItem();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('display: inline-block;');
    expect(css).toContain('&:not(:last-child) {');
    expect(css).toContain('margin-right: 5px');
  });
  it('listInline should return a css', () => {
    const css = listInline();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect(css).toContain('padding-left: 0;');
    expect(css).toContain('list-style: none;');
  });
});
