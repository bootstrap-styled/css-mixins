'use strict';

var _immutable = require('immutable');

var _reboot = require('../reboot');

describe('bootstrap reboot utility', function () {
  it('getGlobalStyleNoBootstrapProvider should return a set of global styles', function () {
    var css = (0, _reboot.getGlobalStyleNoBootstrapProvider)(_reboot.defaultProps['$font-family-base'], _reboot.defaultProps['$font-size-base'], _reboot.defaultProps['$font-weight-base'], _reboot.defaultProps['$line-height-base'], _reboot.defaultProps['$body-color'], _reboot.defaultProps['$body-bg']);
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(95777949);
  });
  it('getGlobalStyles should return a set of global styles', function () {
    var css = (0, _reboot.getGlobalStyles)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(739745613);
  });
  it('getGlobalStyles should return a set of global styles without params', function () {
    var css = (0, _reboot.getGlobalStyles)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(739745613);
  });
  it('body should return a css with default values', function () {
    var css = (0, _reboot.body)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(188062214);
  });
  it('body should return a css with custom values', function () {
    var css = (0, _reboot.body)('arial', '1.2rem', 'bold', '1.5rem', 'red', 'blue');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(223379908);
  });
  it('bodyUtils should return a css with default values', function () {
    var css = (0, _reboot.bodyUtils)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-539439755);
  });
  it('boxSizing should return a css', function () {
    var css = (0, _reboot.boxSizing)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(680872989);
  });
  it('html should return a css', function () {
    var css = (0, _reboot.html)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-401909997);
  });
  it('ie10FixHidden should return a css', function () {
    var css = (0, _reboot.ie10FixHidden)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-1008903539);
  });
  it('ie10FixViewport should return a css', function () {
    var css = (0, _reboot.ie10FixViewport)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-966787180);
  });
  it('svg should return a css', function () {
    var css = (0, _reboot.svg)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(15932031);
  });
  it('tabIndex should return a css', function () {
    var css = (0, _reboot.tabIndex)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(972266682);
  });
  it('webkitFileUploadButton should return a css', function () {
    var css = (0, _reboot.webkitFileUploadButton)();
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(764020772);
  });
});