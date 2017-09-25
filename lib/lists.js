'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUnstyled = listUnstyled;
exports.listInline = listInline;
exports.listInlineItem = listInlineItem;
var defaultProps = exports.defaultProps = {
  '$list-inline-padding': '5px'
};
// Unstyled keeps list items block level, just removes default browser padding and list-style
function listUnstyled() {
  return '\n    padding-left: 0;\n    list-style: none;\n  ';
}

function listInline() {
  return listUnstyled();
}

function listInlineItem() {
  var listInlinePadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$list-inline-padding'];

  return '\n    display: inline-block;\n  \n    &:not(:last-child) {\n      margin-right: ' + listInlinePadding + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  listInline: listInline,
  listUnstyled: listUnstyled
};