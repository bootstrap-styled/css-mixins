import {
  defaultProps,
  makeContainer,
  makeContainerMaxWidths,
  makeRow,
  makeColReady,
  makeCol,
  makeColOffset,
} from '../grid';

describe('bootstrap grid mixins', () => {
  it('makeContainer should return an empty css', () => {
    const css = makeContainer(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-width']);
    expect(css).toEqual('');
  });
  it('makeContainer should return a css', () => {
    const css = makeContainer(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-width']);
    expect(css).toContain('width: 100%;');
    expect(css).toContain('padding-right: calc(30px / 2);');
    expect(css).toContain('padding-left: calc(30px / 2);');
    expect(css).toContain('margin-right: auto;');
    expect(css).toContain('margin-left: auto;');
  });
  it('makeContainer should have arguments', () => {
    const css = makeContainer();
    expect(css).toContain('width: 100%;');
    expect(css).toContain('padding-right: calc(30px / 2);');
    expect(css).toContain('padding-left: calc(30px / 2);');
    expect(css).toContain('margin-right: auto;');
    expect(css).toContain('margin-left: auto;');
  });
  it('makeContainerMaxWidths should return a css', () => {
    const css = makeContainerMaxWidths(defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).toContain('@media (min-width: 576px) {');
    expect(css).toContain('max-width: 540px');
    expect(css).toContain('@media (min-width: 768px) {');
    expect(css).toContain('max-width: 720px');
    expect(css).toContain('@media (min-width: 992px) {');
    expect(css).toContain('max-width: 960px');
    expect(css).toContain('@media (min-width: 1200px) {');
    expect(css).toContain('max-width: 1140px');
  });
  it('makeContainerMaxWidths should return an empty css', () => {
    const css = makeContainerMaxWidths(!defaultProps['$enable-grid-classes'], defaultProps['$container-max-widths'], defaultProps['$grid-breakpoints']);
    expect(css).toEqual('');
  });
  it('makeContainerMaxWidths should work with default arguments', () => {
    const css = makeContainerMaxWidths();
    expect(css).toContain('@media (min-width: 576px) {');
    expect(css).toContain('max-width: 540px');
    expect(css).toContain('@media (min-width: 768px) {');
    expect(css).toContain('max-width: 720px');
    expect(css).toContain('@media (min-width: 992px) {');
    expect(css).toContain('max-width: 960px');
    expect(css).toContain('@media (min-width: 1200px) {');
    expect(css).toContain('max-width: 1140px');
  });
  it('makeRow should return an empty css', () => {
    const css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-width']);
    expect(css).toEqual('');
  });
  it('makeRow should return an empty css', () => {
    const css = makeRow(!defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-width']);
    expect(css).toEqual('');
  });
  it('makeRow should return a css ', () => {
    const css = makeRow(defaultProps['$enable-grid-classes'], defaultProps['$grid-gutter-width']);
    expect(css).toContain('display: flex;');
    expect(css).toContain('flex-wrap: wrap;');
    expect(css).toContain('margin-right: calc(30px / -2);');
    expect(css).toContain('margin-left: calc(30px / -2);');
  });
  it('makeRow should have arguments', () => {
    const css = makeRow();
    expect(css).toContain('display: flex;');
    expect(css).toContain('flex-wrap: wrap;');
    expect(css).toContain('margin-right: calc(30px / -2);');
    expect(css).toContain('margin-left: calc(30px / -2);');
  });
  it('makeColReady should return a css', () => {
    const css = makeColReady(defaultProps['$grid-gutter-width']);
    expect(css).toContain('position: relative;');
    expect(css).toContain('width: 100%;');
    expect(css).toContain('min-height: 1px; // Prevent collapsing');
    expect(css).toContain('padding-right: calc(30px / 2);');
    expect(css).toContain('padding-left: calc(30px / 2);');
  });
  it('makeColReady should have arguments', () => {
    const css = makeColReady();
    expect(css).toContain('position: relative;');
    expect(css).toContain('width: 100%;');
    expect(css).toContain('min-height: 1px;');
    expect(css).toContain('padding-right: calc(30px / 2);');
    expect(css).toContain('padding-left: calc(30px / 2);');
  });
  it('makeCol should return a css', () => {
    const css = makeCol(2, defaultProps['$grid-columns']);
    expect(css).toContain('flex: 0 0 16.66%;');
    expect(css).toContain('max-width: 16.66%;');
  });
  it('makeCol should have arguments', () => {
    const css = makeCol();
    expect(css).toContain('flex: 0 0 0%;');
    expect(css).toContain('max-width: 0%;');
  });
  it('makeColOffset should return a css', () => {
    const css = makeColOffset(3, defaultProps['$grid-columns']);
    expect(css).toEqual('margin-left: 25%;');
  });
  it('makeColOffset should have arguments', () => {
    const css = makeColOffset();
    expect(css).toEqual('margin-left: 0%;');
  });
});
