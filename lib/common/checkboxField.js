'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CheckboxField = function CheckboxField(_ref) {
  var gridClassName = _ref.gridClassName;
  var label = _ref.label;
  var id = _ref.id;
  var value = _ref.value;
  var checked = _ref.checked;
  var disabled = _ref.disabled;
  var onChange = _ref.onChange;
  return _react2['default'].createElement(
    'div',
    { className: gridClassName },
    _react2['default'].createElement('input', { type: 'checkbox',
      id: id,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: onChange
    }),
    _react2['default'].createElement(
      'label',
      { htmlFor: id },
      label
    )
  );
};

exports.CheckboxField = CheckboxField;