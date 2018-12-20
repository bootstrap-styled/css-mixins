import {
  defaultProps,
  breakpointNext,
  breakpointMin,
  breakpointMax,
  breakpointInfix,
  mediaBreakpointUp,
  mediaBreakpointDown,
  mediaBreakpointBetween,
  mediaBreakpointOnly,
} from '../breakpoints';

describe('bootstrap breakpoints mixins', () => {
  it('breakpointNext should return a css', () => {
    let breakpoint = breakpointNext('xs', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('sm');
    breakpoint = breakpointNext('sm', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('md');
    breakpoint = breakpointNext('md', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('lg');
    breakpoint = breakpointNext('lg', defaultProps['$grid-breakpoints'], Object.keys(defaultProps['$grid-breakpoints']));
    expect(breakpoint).toEqual('xl');
  });
  it('breakpointNext should return null if not arguments are passed', () => {
    const css = breakpointNext();
    expect(css).toBeNull();
  });
  it('breakpointMin should be null', () => {
    const css = breakpointMin('xs', defaultProps['$grid-breakpoints']);
    expect(css).toBeNull();
  });
  it('breakpointMin should be not null', () => {
    const css = breakpointMin('sm', defaultProps['$grid-breakpoints']);
    expect(css).toEqual('576px');
  });
  it('breakpointMin should return null if no arguments are passed', () => {
    const css = breakpointMin();
    expect(css).toBeUndefined();
  });
  it('breakpointMax should be not null', () => {
    const css = breakpointMax('sm', defaultProps['$grid-breakpoints']);
    expect(css).toEqual('767px');
  });
  it('breakpointMax should be null', () => {
    const css = breakpointMax('xl', defaultProps['$grid-breakpoints']);
    expect(css).toBeNull();
  });
  it('breakpointMax should return null if no arguments are passed', () => {
    const css = breakpointMax();
    expect(css).toBeNull();
  });
  it('mediaBreakpointInfix should return ""', () => {
    const css = breakpointInfix('xs', defaultProps['$grid-breakpoints']);
    expect(css).toEqual('');
  });
  it('mediaBreakpointInfix should return null', () => {
    const css = breakpointInfix('md', defaultProps['$grid-breakpoints']);
    expect(css).toEqual('-md');
  });
  it('breakpointInfix should return an empty string if no arguments are passed', () => {
    const css = breakpointInfix();
    expect(css).toEqual('');
  });
  it('mediaBreakpointUp should return a media query', () => {
    const css = mediaBreakpointUp('md', defaultProps['$grid-breakpoints'], 'content: \'awesome!\';');
    expect(css).toContain('@media (min-width: 768px) {');
    expect(css).toContain('content: \'awesome!\';');
  });
  it('mediaBreakpointUp should return an empty string if no arguments are passed', () => {
    const css = mediaBreakpointUp();
    expect(css).toEqual('');
  });
  it('mediaBreakpointDown should return a media query', () => {
    const css = mediaBreakpointDown('md', defaultProps['$grid-breakpoints'], 'content: \'awesome!\';');
    expect(css).toContain('@media (max-width: 991px) {');
    expect(css).toContain('content: \'awesome!\';');
  });
  it('mediaBreakpointDown should return null if no arguments are passed', () => {
    const css = mediaBreakpointDown();
    expect(css).toBeUndefined();
  });
  it('mediaBreakpointBetween should return a media query', () => {
    const css = mediaBreakpointBetween('md', 'lg', defaultProps['$grid-breakpoints'], 'content: \'awesome!\';');
    expect(css).toContain('@media (min-width: 768px) and (max-width: 1199px) {');
    expect(css).toContain('content: \'awesome!\';');
  });
  it('mediaBreakpointBetween should return a max media query', () => {
    const css = mediaBreakpointBetween('xs', 'lg', defaultProps['$grid-breakpoints'], 'content: \'awesome!\';');
    expect(css).toContain('@media (max-width: 1199px) {');
    expect(css).toContain('content: \'awesome!\';');
  });
  it('mediaBreakpointBetween should return a min media query', () => {
    const css = mediaBreakpointBetween('md', 'xl', defaultProps['$grid-breakpoints'], 'content: \'awesome!\';');
    expect(css).toContain('@media (min-width: 768px) {');
    expect(css).toContain('  content: \'awesome!\';');
  });
  it('mediaBreakpointBetween should return null if no arguments are passed', () => {
    const css = mediaBreakpointBetween();
    expect(css).toBeUndefined();
  });
  it('mediaBreakpointOnly should return a media query', () => {
    const css = mediaBreakpointOnly('md', defaultProps['$grid-breakpoints'], `
      content: 'awesome!';
    `);
    expect(css).toContain('@media (min-width: 768px) and (max-width: 991px) {');
    expect(css).toContain('  content: \'awesome!\';');
  });
  it('mediaBreakpointOnly should return null if no arguments are passed', () => {
    const css = mediaBreakpointOnly();
    expect(css).toBeUndefined();
  });
});
