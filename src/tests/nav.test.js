import { defaultProps, nav } from '../nav';

describe('bootstrap nav utility', () => {
  it('nav should return a nav utility css', () => {
    const css = nav(
      defaultProps['$enable-rounded'],
      defaultProps['$enable-hover-media-query'],
      defaultProps['$nav-link-padding'],
      defaultProps['$nav-disabled-link-color'],
      defaultProps['$cursor-disabled'],
      defaultProps['$nav-tabs-border-width'],
      defaultProps['$nav-tabs-border-color'],
      defaultProps['$nav-tabs-border-radius'],
      defaultProps['$nav-tabs-link-hover-border-color'],
      defaultProps['$nav-tabs-active-link-hover-color'],
      defaultProps['$nav-tabs-active-link-hover-bg'],
      defaultProps['$nav-tabs-active-link-hover-border-color'],
      defaultProps['$nav-pills-border-radius'],
      defaultProps['$nav-pills-active-link-color'],
      defaultProps['$nav-pills-active-link-bg'],
    );
    expect(css).toContain('&.nav {');
    expect(css).toContain('display: flex;');
    expect(css).toContain('padding-left: 0;');
    expect(css).toContain('margin-bottom: 0;');
    expect(css).toContain('list-style: none;');
    expect(css).toContain('& .nav-link {');
    expect(css).toContain('display: block;');
    expect(css).toContain('padding: .5em 1em;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('/* Disabled state lightens text and removes hover tab effects */');
    expect(css).toContain('&.disabled {');
    expect(css).toContain('color: #636c72;');
    expect(css).toContain('cursor: not-allowed; ');
    expect(css).toContain('/*');
    expect(css).toContain('Tabs');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-tabs {');
    expect(css).toContain('border-bottom: 1px solid #ddd;');
    expect(css).toContain('& .nav-item {');
    expect(css).toContain('margin-bottom: -1px;');
    expect(css).toContain('& .nav-link {');
    expect(css).toContain('border: 1px solid transparent;');
    expect(css).toContain('border-top-right-radius: .25rem;');
    expect(css).toContain('border-top-left-radius: .25rem;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('border-color: #eceeef #eceeef #ddd;');
    expect(css).toContain('&.disabled {');
    expect(css).toContain('color: #636c72;');
    expect(css).toContain('background-color: transparent;');
    expect(css).toContain('border-color: transparent;');
    expect(css).toContain('& .nav-link.active,');
    expect(css).toContain('.nav-item.open .nav-link {');
    expect(css).toContain('color: #464a4c;');
    expect(css).toContain('background-color: #fff;');
    expect(css).toContain('border-color: #ddd #ddd transparent;');
    expect(css).toContain('& .dropdown-menu {');
    expect(css).toContain('/* Make dropdown border overlap tab border */');
    expect(css).toContain('margin-top: -1px;');
    expect(css).toContain('border-top-right-radius: 0;');
    expect(css).toContain('border-top-left-radius: 0;');
    expect(css).toContain('/*');
    expect(css).toContain('Pills');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-pills {');
    expect(css).toContain('.nav-link {');
    expect(css).toContain('border-radius: .25rem;');
    expect(css).toContain('.nav-link.active,');
    expect(css).toContain('.nav-item.show .nav-link {');
    expect(css).toContain('color: #fff;');
    expect(css).toContain('background-color: #0275d8;');
    expect(css).toContain('/*');
    expect(css).toContain('Justified variants');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-fill {');
    expect(css).toContain('.nav-item {');
    expect(css).toContain('flex: 1 1 auto;');
    expect(css).toContain('text-align: center;');
    expect(css).toContain('&.nav-justified {');
    expect(css).toContain('.nav-item {');
    expect(css).toContain('flex: 1 1 100%;');
    expect(css).toContain('text-align: center;');
    expect(css).toContain('/* Hide tabbable panes to start, show them when .active */');
    expect(css).toContain('&.tab-content {');
    expect(css).toContain('> .tab-pane {');
    expect(css).toContain('display: none;');
    expect(css).toContain('> .active {');
    expect(css).toContain('display: block;');
  });
  it('nav should return a a css by default', () => {
    const css = nav();
    expect(css).toContain('&.nav {');
    expect(css).toContain('display: flex;');
    expect(css).toContain('padding-left: 0;');
    expect(css).toContain('margin-bottom: 0;');
    expect(css).toContain('list-style: none;');
    expect(css).toContain('& .nav-link {');
    expect(css).toContain('display: block;');
    expect(css).toContain('padding: .5em 1em;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('text-decoration: none;');
    expect(css).toContain('/* Disabled state lightens text and removes hover tab effects */');
    expect(css).toContain('&.disabled {');
    expect(css).toContain('color: #636c72;');
    expect(css).toContain('cursor: not-allowed; ');
    expect(css).toContain('/*');
    expect(css).toContain('Tabs');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-tabs {');
    expect(css).toContain('border-bottom: 1px solid #ddd;');
    expect(css).toContain('& .nav-item {');
    expect(css).toContain('margin-bottom: -1px;');
    expect(css).toContain('& .nav-link {');
    expect(css).toContain('border: 1px solid transparent;');
    expect(css).toContain('border-top-right-radius: .25rem;');
    expect(css).toContain('border-top-left-radius: .25rem;');
    expect(css).toContain('&:focus,');
    expect(css).toContain('&.focus,');
    expect(css).toContain('&:hover,');
    expect(css).toContain('&.hover {');
    expect(css).toContain('border-color: #eceeef #eceeef #ddd;');
    expect(css).toContain('&.disabled {');
    expect(css).toContain('color: #636c72;');
    expect(css).toContain('background-color: transparent;');
    expect(css).toContain('border-color: transparent;');
    expect(css).toContain('& .nav-link.active,');
    expect(css).toContain('.nav-item.open .nav-link {');
    expect(css).toContain('color: #464a4c;');
    expect(css).toContain('background-color: #fff;');
    expect(css).toContain('border-color: #ddd #ddd transparent;');
    expect(css).toContain('& .dropdown-menu {');
    expect(css).toContain('/* Make dropdown border overlap tab border */');
    expect(css).toContain('margin-top: -1px;');
    expect(css).toContain('border-top-right-radius: 0;');
    expect(css).toContain('border-top-left-radius: 0;');
    expect(css).toContain('/*');
    expect(css).toContain('Pills');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-pills {');
    expect(css).toContain('.nav-link {');
    expect(css).toContain('border-radius: .25rem;');
    expect(css).toContain('.nav-link.active,');
    expect(css).toContain('.nav-item.show .nav-link {');
    expect(css).toContain('color: #fff;');
    expect(css).toContain('background-color: #0275d8;');
    expect(css).toContain('/*');
    expect(css).toContain('Justified variants');
    expect(css).toContain('*/');
    expect(css).toContain('&.nav-fill {');
    expect(css).toContain('.nav-item {');
    expect(css).toContain('flex: 1 1 auto;');
    expect(css).toContain('text-align: center;');
    expect(css).toContain('&.nav-justified {');
    expect(css).toContain('.nav-item {');
    expect(css).toContain('flex: 1 1 100%;');
    expect(css).toContain('text-align: center;');
    expect(css).toContain('/* Hide tabbable panes to start, show them when .active */');
    expect(css).toContain('&.tab-content {');
    expect(css).toContain('> .tab-pane {');
    expect(css).toContain('display: none;');
    expect(css).toContain('> .active {');
    expect(css).toContain('display: block;');
  });
});
