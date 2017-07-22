'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonInputFields = require('./common/inputFields');

var Test = _react2['default'].createClass({
	displayName: 'Test',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			'test'
		);
		_react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(_commonInputFields.InputFields, null)
		);
	}
});

exports['default'] = Test;
module.exports = exports['default'];