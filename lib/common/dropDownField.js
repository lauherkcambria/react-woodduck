'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DropDownField = function DropDownField(_ref) {
  var gridClassName = _ref.gridClassName;
  var value = _ref.value;
  var disable = _ref.disable;
  var selectClassName = _ref.selectClassName;
  var optionList = _ref.optionList;
  var onChange = _ref.onChange;
  var label = _ref.label;
  return _react2['default'].createElement(
    'div',
    { className: gridClassName },
    _react2['default'].createElement(
      'label',
      null,
      label
    ),
    _react2['default'].createElement(
      'select',
      { value: value, disabled: disable, onChange: onChange, className: selectClassName },
      !disable && _react2['default'].createElement('option', { key: '', value: '' }),
      optionList.map(function (item) {
        return _react2['default'].createElement(
          'option',
          { key: item.id, value: item.id },
          item.value
        );
      })
    )
  );
};

exports.DropDownField = DropDownField;