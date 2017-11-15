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

var layerInBody = (function (_Component) {
		_inherits(layerInBody, _Component);

		function layerInBody(props) {
				_classCallCheck(this, layerInBody);

				_get(Object.getPrototypeOf(layerInBody.prototype), 'constructor', this).call(this, props);
				this.state = {
						show: props.inline ? true : false,
						focus: false, //focus state
						offset: {} //position
				};
		}

		// onUpdate 更新layer内容

		_createClass(layerInBody, [{
				key: 'onRefFocus',
				value: function onRefFocus(event, refs) {
						var _state = this.state;
						var show = _state.show;
						var focus = _state.focus;
						var selected = _state.selected;

						if (show && !focus) {
								this.state.focus = true; //just change state not trigger render
								return;
						}
						var status = refs.props.status;selected = status ? this.state[status] : selected;

						var _refs$handlePosition = refs.handlePosition();

						var left = _refs$handlePosition.left;
						var top = _refs$handlePosition.top;
						var height = _refs$handlePosition.height;

						top += height + (document.body.scrollTop || document.documentElement.scrollTop);

						var onFocus = this.props.onFocus;

						this.show(true, { left: left, top: top }, true, status);
						onFocus && onFocus(event, this);
						// if(status) this.setState({date: selected})
				}
		}, {
				key: 'onRefBlur',
				value: function onRefBlur(event, refs) {
						var _state2 = this.state;
						var show = _state2.show;
						var focus = _state2.focus;
						var _props = this.props;
						var inline = _props.inline;
						var onBlur = _props.onBlur;

						if (!show) return;
						if (!focus) {
								refs.focus(); //when show && !focus, trigger focus
						} else if (!inline) {
										onBlur && onBlur(event, this);
										focus && this.removePicker();
								}
				}
		}, {
				key: 'clickPane',
				value: function clickPane(event, abc) {
						this.state.focus = false; //just change state not trigger render
				}
		}, {
				key: 'getRefElement',
				value: function getRefElement() {
						return _reactDom2['default'].findDOMNode(this.refs.refEle);
				}
		}, {
				key: 'handlePosition',
				value: function handlePosition() {
						// Fix for IE8-'s Element.getBoundingClientRect()
						if ('TextRectangle' in window && !('width' in TextRectangle.prototype)) {
								Object.defineProperties(TextRectangle.prototype, {
										'width': { get: function get() {
														return this.right - this.left;
												} },
										'height': { get: function get() {
														return this.bottom - this.top;
												} }
								});
						}
						return this.getRefElement().getBoundingClientRect();
				}
		}, {
				key: 'componentDidMount',
				value: function componentDidMount() {
						this.layer = document.createElement('div');
						document.body.appendChild(this.layer);
						this.renderLayer();
						if (!this.props.inline) {
								var adjustSize = this.layer.getElementsByClassName('date-picker')[0].clientWidth;
								this.props.onUpdate && this.props.onUpdate(adjustSize);
						}
				}
		}, {
				key: 'componentDidUpdate',
				value: function componentDidUpdate() {
						this.renderLayer();
				}
		}, {
				key: 'componentWillMount',
				value: function componentWillMount() {
						// this.removePicker()
				}
		}, {
				key: 'removePicker',
				value: function removePicker() {
						if (this.layer) {
								_reactDom2['default'].unmountComponentAtNode(this.layer);
								document.body.removeChild(this.layer);
						}
				}
		}, {
				key: 'renderLayer',
				value: function renderLayer() {
						if (this.props.children) _reactDom2['default'].render(this.props.children, this.layer);
				}
		}, {
				key: 'render',
				value: function render() {
						return _react2['default'].createElement('div', { className: this.props.className, children: this.props.children, style: this.props.offset });
				}
		}]);

		return layerInBody;
})(_react.Component);

exports['default'] = layerInBody;
module.exports = exports['default'];