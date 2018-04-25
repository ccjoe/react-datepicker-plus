//@todo 解决切换月份时， 选择的值有变；2.外部值变化后，input值与ui没有变化 3 key input
// import './datepicker.less'
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateHeaderJs = require('./date-header.js');

var _dateHeaderJs2 = _interopRequireDefault(_dateHeaderJs);

var _dateCalendarJs = require('./date-calendar.js');

var _dateCalendarJs2 = _interopRequireDefault(_dateCalendarJs);

var _dateInputJs = require('./date-input.js');

var _dateInputJs2 = _interopRequireDefault(_dateInputJs);

var _dateInBodyJs = require('./date-in-body.js');

var _dateInBodyJs2 = _interopRequireDefault(_dateInBodyJs);

var _dateFormatJs = require('./date-format.js');

var ReactDatepickerPlus = (function (_Component) {
	_inherits(ReactDatepickerPlus, _Component);

	// propTypes: {
	// 	selected: React.PropTypes.object,	//default date
	// 	format: React.PropTypes.string,     //format date
	// 	isfill: React.PropTypes.bool,	    //show prefix-prev prefix-next month
	// 	months: React.PropTypes.number,		//show multi-panes by months

	// 	time: React.PropTypes.bool,         //show time select @todo

	// 	min: React.PropTypes.object,        //select date range min
	// 	max: React.PropTypes.object,        //select date range max

	// 	start: React.PropTypes.object,	    //selected time is a range, start date
	// 	end: React.PropTypes.object,	    //selected time is a range, start date

	// 	className: React.PropTypes.string,  // custom class
	// 	disabled: React.PropTypes.bool,     //input can't change
	// 	autoHide: React.PropTypes.bool,     //selected auto hide
	// 	inline: React.PropTypes.bool,       //inline
	// 	lang: React.PropTypes.oneOf(['cn', 'en']),

	// 	festival: React.PropTypes.bool, 	//show festival
	// 	haslunar: React.PropTypes.bool, 	//show lunar

	// 	onFocus: React.PropTypes.func,		//args (event, picker)
	// 	onBlur: React.PropTypes.func,		//args (event, picker)
	// 	onChange: React.PropTypes.func,		//args (dayinfo, picker)
	// 	dayAddon: React.PropTypes.func 		//args (dayinfo)
	// 	//dayAddon, add data for day, and need to return dom,
	// 	//the return value will be insert to day each element. pls see last demo
	//  placeholder
	//  placeholderEnd
	//  support children to defined your input dom struct, pls search `defined your input dom` at this page

	// salarHolidays: null,  holiday by solar date mmdd
	// lunarHolidays: null,  holiday by lunar date mmdd
	// dayHolidays: null,  lunar holiday by solar date yyyymmdd
	// }

	function ReactDatepickerPlus(props) {
		_classCallCheck(this, ReactDatepickerPlus);

		_get(Object.getPrototypeOf(ReactDatepickerPlus.prototype), 'constructor', this).call(this, props);
		var selected = (0, _dateFormatJs.dateObject)(props.selected);
		this.state = {
			date: selected, //render month by date
			show: props.inline ? true : false,
			focus: false, //focus state true/false/'blank'
			offset: {}, //datepicker position
			selected: selected,
			start: (0, _dateFormatJs.dateObject)(props.start),
			end: (0, _dateFormatJs.dateObject)(props.end),
			min: (0, _dateFormatJs.dateObject)(props.min),
			max: (0, _dateFormatJs.dateObject)(props.max)
			// status: ''   	//React.PropTypes.oneOf(['start', 'end'])
			//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
		};
	}

	_createClass(ReactDatepickerPlus, [{
		key: 'onFocus',
		value: function onFocus(event, input) {
			var _state = this.state;
			var show = _state.show;
			var focus = _state.focus;
			var selected = _state.selected;

			if (show && !focus || focus === 'blank') {
				this.state.focus = true; //just change state not trigger render
				return;
			}
			var status = input.props.status;
			selected = status ? this.state[status] : selected;

			var _input$handlePosition = input.handlePosition();

			var left = _input$handlePosition.left;
			var top = _input$handlePosition.top;
			var height = _input$handlePosition.height;
			var width = _input$handlePosition.width;

			top += height + (document.body.scrollTop || document.documentElement.scrollTop);
			var onFocus = this.props.onFocus;

			this.inputWidth = width;
			this.show(true, { left: left, top: top }, true, status);

			onFocus && onFocus(event, this);

			this.setState({ date: selected });
		}
	}, {
		key: 'onBlur',
		value: function onBlur(event, input) {
			var _state2 = this.state;
			var show = _state2.show;
			var focus = _state2.focus;
			var _props = this.props;
			var inline = _props.inline;
			var onBlur = _props.onBlur;
			var autoHide = _props.autoHide;

			if (autoHide) {
				if (!focus) {
					this.removePicker();
					return;
				}
			}
			if (!show) return;
			if (!focus || focus === 'blank') {
				//use setTimeout for firefox will lost focus because onMouseDown then trigger onClick, fuck
				setTimeout(function () {
					input.focus();
				}, 0); //when show && !focus, trigger focus,
			} else if (!inline && focus !== 'blank') {
					onBlur && onBlur(event, this);
					focus && this.removePicker();
				}
		}
	}, {
		key: 'clickPane',
		value: function clickPane() {
			if (this.state.focus) this.state.focus = 'blank';
		}
	}, {
		key: 'show',
		value: function show(_show, offset, focus, status) {
			this.setState({ show: _show, offset: offset, focus: focus, status: status });
		}
	}, {
		key: 'updateMonth',
		value: function updateMonth(num) {
			var date = this.state.date;

			var cdate = this.numMonth(date, num);
			this.updateDate({ date: cdate }, true);
		}
	}, {
		key: 'numMonth',
		value: function numMonth(date, num) {
			date = (0, _dateFormatJs.dateObject)(date) || _dateFormatJs.today;
			var y = date.getFullYear(),
			    m = date.getMonth() + num,
			    d = date.getDate();
			var maxd = new Date(y, m + 1, 0).getDate(); //判断某月为共多少天
			return new Date(y, m, d > maxd ? maxd : d);
		}
	}, {
		key: 'updateDay',
		value: function updateDay(dateinfo) {
			this.updateDate(dateinfo);
		}
	}, {
		key: 'updateDate',
		value: function updateDate(dateinfo, isMonth) {
			var onChange = this.props.onChange;
			var _state$status = this.state.status;
			var status = _state$status === undefined ? 'selected' : _state$status;

			var getSelected = (0, _dateFormatJs.dateObject)(!isMonth ? dateinfo.date : this.state[status]);

			this.setState(_defineProperty({ show: true, date: dateinfo.date, selected: getSelected }, status, getSelected));

			if (!isMonth) {
				this.state.focus = false;
				dateinfo.status = status;
				onChange && onChange(dateinfo, this);
			} else {
				this.state.focus = 'blank';
			}
		}
	}, {
		key: 'removePicker',
		value: function removePicker() {
			this.show(false);
			this.refs.insDateInBody && this.refs.insDateInBody.removePicker();
		}
	}, {
		key: 'pickers',
		value: function pickers(status) {
			var $pickers = [],
			    offsets = [],
			    dh = undefined,
			    dc = undefined,
			    idate = undefined;
			var _state3 = this.state;
			var date = _state3.date;
			var start = _state3.start;
			var end = _state3.end;
			var min = _state3.min;
			var max = _state3.max;
			var offset = _state3.offset;
			var _props2 = this.props;
			var inline = _props2.inline;
			var months = _props2.months;
			var lang = _props2.lang;
			var haslunar = _props2.haslunar;
			var className = _props2.className;

			var selected = this.state[status ? status : 'selected'];
			var classes = 'date-picker date-picker-' + (inline ? 'inline' : 'block') + ' ' + (className ? className : '') + ' ' + (haslunar ? 'date-picker-lunar' : '');
			var pickerWidth = this.state.width || 215;
			for (var i = 0; i < months; i++) {
				offsets.push({ left: i * pickerWidth + offset.left, top: offset.top });
				idate = this.numMonth(date, i);
				dh = _react2['default'].createElement(_dateHeaderJs2['default'], {
					date: idate,
					lang: haslunar ? 'cn' : lang,
					updateMonth: this.updateMonth.bind(this)
				});
				dc = _react2['default'].createElement(_dateCalendarJs2['default'], _extends({}, this.props, {
					min: min,
					max: max,
					date: idate,
					status: status,
					start: start,
					end: end,
					selected: selected,
					onChange: this.updateDay.bind(this)
				}));

				$pickers.push(inline ? _react2['default'].createElement(
					'div',
					{ onMouseDown: this.clickPane.bind(this), className: classes, key: i },
					dh,
					dc
				) : _react2['default'].createElement(
					'div',
					{
						onMouseDown: this.clickPane.bind(this),
						className: classes,
						style: offsets[i],
						key: i
					},
					dh,
					dc
				));
			}
			return $pickers;
		}
	}, {
		key: 'updateSize',
		value: function updateSize(w) {
			!this.props.inline && this.setState({ width: w });
			var offset = this.state.offset;
			//右侧距离判断
			var fullWidth = document.documentElement.clientWidth;
			if (2 * w + offset.left > fullWidth) {
				this.setState({
					offset: { left: offset.left + this.inputWidth - 2 * w, top: offset.top },
					width: w
				});
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props) {
			if (props.selected !== this.props.selected) {
				this.setState({ selected: (0, _dateFormatJs.dateObject)(props.selected) });
			}
			if (props.start !== this.props.start) {
				this.setState({ start: (0, _dateFormatJs.dateObject)(props.start) });
			}
			if (props.end !== this.props.end) {
				this.setState({ end: (0, _dateFormatJs.dateObject)(props.end) });
			}
			if (props.min !== this.props.min) {
				this.setState({ min: (0, _dateFormatJs.dateObject)(props.min) });
			}
			if (props.max !== this.props.max) {
				this.setState({ max: (0, _dateFormatJs.dateObject)(props.max) });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			var _state4 = this.state;
			var show = _state4.show;
			var selected = _state4.selected;
			var start = _state4.start;
			var end = _state4.end;
			var status = _state4.status;
			var _props3 = this.props;
			var format = _props3.format;
			var inline = _props3.inline;
			var months = _props3.months;
			var disabled = _props3.disabled;
			var placeholder = _props3.placeholder;
			var placeholderEnd = _props3.placeholderEnd;
			var children = _props3.children;

			var picker = undefined,
			    pickers = undefined,
			    pickerInBody = undefined;
			var clsName = this.props.className || '',
			    clsWrapperName = clsName ? ' ' + clsName + '-panes' : '';
			var di = function di(val, stat) {
				return _react2['default'].createElement(_dateInputJs2['default'], {
					selected: val === void 0 ? selected : val,
					format: format,
					disabled: disabled,
					placeholder: stat == 'end' ? placeholderEnd : placeholder,
					children: children,
					onFocus: _this.onFocus.bind(_this),
					onBlur: _this.onBlur.bind(_this),
					status: stat,
					ref: stat
				});
			};
			if (show) {
				pickers = this.pickers(status);
				picker = _react2['default'].createElement(
					'div',
					{ className: (months > 1 ? 'date-multi clearfix' : 'date-single') + clsWrapperName },
					pickers
				);
				pickerInBody = _react2['default'].createElement(
					_dateInBodyJs2['default'],
					{
						onUpdate: this.updateSize.bind(this),
						className: 'date-picker-wrapper',
						ref: 'insDateInBody'
					},
					picker
				);
			}
			var didom = start || end ? _react2['default'].createElement(
				'div',
				{ className: 'date-inputs' },
				start !== void 0 && di(start, 'start'),
				end !== void 0 && di(end, 'end')
			) : di();
			return _react2['default'].createElement(
				'div',
				{ className: 'date-components ' + clsName },
				didom,
				inline ? picker : pickerInBody
			);
		}
	}]);

	return ReactDatepickerPlus;
})(_react.Component);

ReactDatepickerPlus.defaultProps = {
	isfill: false,
	format: 'yyyy-MM-dd',
	selected: _dateFormatJs.today,
	months: 1,
	lang: 'en',
	salarHolidays: null,
	lunarHolidays: null,
	dayHolidays: null
};

exports['default'] = ReactDatepickerPlus;
module.exports = exports['default'];