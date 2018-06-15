'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dateFormat = require('./date-format');

var DateInput = (function (_Component) {
	_inherits(DateInput, _Component);

	function DateInput(props) {
		_classCallCheck(this, DateInput);

		_get(Object.getPrototypeOf(DateInput.prototype), 'constructor', this).call(this, props);
	}

	_createClass(DateInput, [{
		key: 'dateString',
		value: function dateString() {
			var _props = this.props;
			var format = _props.format;
			var selected = _props.selected;

			return format ? (0, _dateFormat.dateFormat)(selected, format) : selected;
		}
	}, {
		key: 'handleBlur',
		value: function handleBlur(event) {
			this.props.onBlur(event, this);
		}
	}, {
		key: 'handleFocus',
		value: function handleFocus(event) {
			this.props.onFocus(event, this);
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.refs.input.focus();
		}
	}, {
		key: 'handleChange',
		value: function handleChange() {
			// this.props.onChange(event, this)
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return _reactDom2['default'].findDOMNode(this);
		}
	}, {
		key: 'handlePosition',
		value: function handlePosition() {
			// Fix for IE8-'s Element.getBoundingClientRect()
			if ('TextRectangle' in window && !('width' in TextRectangle.prototype)) {
				Object.defineProperties(TextRectangle.prototype, {
					width: {
						get: function get() {
							return this.right - this.left;
						}
					},
					height: {
						get: function get() {
							return this.bottom - this.top;
						}
					}
				});
			}
			return this.getInput().getBoundingClientRect();
		}
	}, {
		key: 'recursiveMap',
		value: function recursiveMap(childs, inputElem) {
			var _this = this;

			var copyHasChildElem = function copyHasChildElem(child) {
				return _react2['default'].cloneElement(child, {
					children: _this.recursiveMap(child.props.children, inputElem)
				});
			};

			if (childs.props && childs.props.children) {
				return copyHasChildElem(childs);
			}

			return _react2['default'].Children.map(childs, function (child) {
				if (_react2['default'].isValidElement(child)) {
					return child.type !== 'input' ? child : inputElem;
				}
				if (child.props.children) {
					child = copyHasChildElem(child);
				}
				return child;
			});
		}
	}, {
		key: 'setChildInput',
		value: function setChildInput(children, inputElem) {
			if (children && children.props) {
				return _react2['default'].createElement(
					'children',
					null,
					this.setChildInput(children.props.children, inputElem)
				);
			} else {
				return _react2['default'].Children.map(children, function (child) {
					return child.type === 'input' ? inputElem : child;
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props;
			var disabled = _props2.disabled;
			var placeholder = _props2.placeholder;
			var children = _props2.children;

			var inputElem = _react2['default'].createElement('input', {
				ref: 'input',
				type: 'text',
				placeholder: placeholder,
				disabled: disabled,
				value: this.dateString(),
				onFocus: this.handleFocus.bind(this),
				onBlur: this.handleBlur.bind(this),
				onChange: this.handleChange.bind(this)
			});
			return children ? this.recursiveMap(children, inputElem) : inputElem;
		}
	}]);

	return DateInput;
})(_react.Component);

exports['default'] = DateInput;
module.exports = exports['default'];