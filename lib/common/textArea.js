'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TextAreaComponent = function TextAreaComponent(_ref) {
  var gridClassName = _ref.gridClassName;
  var labelClassName = _ref.labelClassName;
  var id = _ref.id;
  var label = _ref.label;
  var onChange = _ref.onChange;
  var value = _ref.value;
  var placeholder = _ref.placeholder;
  var type = _ref.type;
  return _react2['default'].createElement(
    'div',
    { className: gridClassName },
    _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'label',
        { className: labelClassName, htmlFor: id },
        label
      ),
      _react2['default'].createElement('textarea', { id: id, type: type, placeholder: placeholder, value: value, onChange: onChange })
    )
  );
};

exports.TextAreaComponent = TextAreaComponent;