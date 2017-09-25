'use strict';

var _immutable = require('immutable');

var _listGroup = require('../list-group');

describe('bootstrap list-group mixins', function () {
  it('listGroupItemVariant should return a css without hover media query', function () {
    var css = (0, _listGroup.listGroupItemVariant)(_listGroup.defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(383134550);
  });
  it('listGroupItemVariant should return a css with hover media query', function () {
    var css = (0, _listGroup.listGroupItemVariant)(!_listGroup.defaultProps['$enable-hover-media-query'], 'success', '#f00', '#0f0');
    expect(css).not.toContain('undefined');
    expect(css).not.toContain('null');
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(921513432);
  });
  it('listGroupItemVariant should return a css with hover media query', function () {
    var css = (0, _listGroup.listGroupItemVariant)();
    expect((0, _immutable.fromJS)({ css: css }).hashCode()).toEqual(-593336641);
  });
});