'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dateHeaderJsx = require('./date-header.jsx');

var _dateHeaderJsx2 = _interopRequireDefault(_dateHeaderJsx);

var _dateCalendarJsx = require('./date-calendar.jsx');

var _dateCalendarJsx2 = _interopRequireDefault(_dateCalendarJsx);

var _dateInputJsx = require('./date-input.jsx');

var _dateInputJsx2 = _interopRequireDefault(_dateInputJsx);

var _dateInBodyJsx = require('./date-in-body.jsx');

var _dateInBodyJsx2 = _interopRequireDefault(_dateInBodyJsx);

var now = new Date();
var ReactDatepickerPlus = _react2['default'].createClass({
	displayName: 'ReactDatepickerPlus',

	propTypes: {
		selected: _react2['default'].PropTypes.object, //default date
		format: _react2['default'].PropTypes.string, //format date
		isfill: _react2['default'].PropTypes.bool, //show prefix-prev prefix-next month
		months: _react2['default'].PropTypes.number, //show multi-panes by months

		time: _react2['default'].PropTypes.bool, //show time select @todo

		min: _react2['default'].PropTypes.object, //select date range min
		max: _react2['default'].PropTypes.object, //select date range max

		start: _react2['default'].PropTypes.object, //selected time is a range, start date
		end: _react2['default'].PropTypes.object, //selected time is a range, start date

		className: _react2['default'].PropTypes.string, // custom class
		disabled: _react2['default'].PropTypes.bool, //input can't change
		autoHide: _react2['default'].PropTypes.bool, //selected auto hide
		inline: _react2['default'].PropTypes.bool, //inline
		lang: _react2['default'].PropTypes.oneOf(['cn', 'en']),

		festival: _react2['default'].PropTypes.bool, //show festival
		haslunar: _react2['default'].PropTypes.bool, //show lunar

		onFocus: _react2['default'].PropTypes.func, //args (event, picker)
		onBlur: _react2['default'].PropTypes.func, //args (event, picker)
		onChange: _react2['default'].PropTypes.func, //args (dayinfo, picker)
		dayAddon: _react2['default'].PropTypes.func //args (dayinfo)
		//dayAddon, add data for day, and need to return dom,
		//the return value will be insert to day each element. pls see last demo
	},
	getInitialState: function getInitialState() {
		return {
			date: now, //render month by date
			show: this.props.inline ? true : false,
			focus: false, //focus state
			offset: {}, //datepicker position
			selected: this.props.selected,
			start: this.props.start,
			end: this.props.end,
			status: '' };
	},

	//React.PropTypes.oneOf(['start', 'end', ''])
	//'start' and 'end' use by bi-datepicker range value, and '' use by single datepicker single date
	getDefaultProps: function getDefaultProps() {
		return {
			isfill: false,
			format: 'yyyy-MM-dd',
			selected: now,
			months: 1,
			lang: 'en'
		};
	},
	onFocus: function onFocus(event, input) {
		var _state = this.state;
		var show = _state.show;
		var focus = _state.focus;
		var selected = _state.selected;

		if (show && !focus) {
			this.state.focus = true; //just change state not trigger render
			return;
		}
		var status = input.props.status;selected = status ? this.state[status] : selected;
		var size = input.handlePosition();
		var left = size.left;
		var top = size.top;
		var height = size.height;
		top += height + (document.body.scrollTop || document.documentElement.scrollTop);

		var onFocus = this.props.onFocus;

		this.show(true, { left: left, top: top }, true, status);
		onFocus && onFocus(event, this);
		if (status) this.setState({ date: selected });
	},
	onBlur: function onBlur(event, input) {
		var _state2 = this.state;
		var show = _state2.show;
		var focus = _state2.focus;
		var _props = this.props;
		var inline = _props.inline;
		var onBlur = _props.onBlur;

		if (!show) return;
		if (!focus) {
			input.focus(); //when show && !focus, trigger focus 
		} else if (!inline) {
				onBlur && onBlur(event, this);
				focus && this.removePicker();
			}
	},
	show: function show(_show, offset, focus, status) {
		this.setState({ show: _show, offset: offset, focus: focus, status: status });
	},
	updateMonth: function updateMonth(num) {
		var date = this.state.date;

		var cdate = this.numMonth(date, num);
		this.updateDate({ date: cdate }, true);
	},
	numMonth: function numMonth(date, num) {
		return new Date(date.getFullYear(), date.getMonth() + num, date.getDate());
	},
	updateDay: function updateDay(dateinfo) {
		this.updateDate(dateinfo);
	},
	updateDate: function updateDate(dateinfo, isMonth) {
		var _props2 = this.props;
		var onChange = _props2.onChange;
		var autoHide = _props2.autoHide;
		var _state3 = this.state;
		var status = _state3.status;
		var selected = _state3.selected;

		var getSelected = !isMonth ? dateinfo.date : this.state[status ? status : 'selected'];
		// let temp = {}; temp[status] = getSelected
		this.setState(_defineProperty({ show: true, date: dateinfo.date, selected: getSelected, focus: false }, status, getSelected));
		onChange && onChange(dateinfo, this);
		!isMonth && autoHide && this.removePicker();
	},
	removePicker: function removePicker() {
		this.show(false);
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker(true);
	},

	pickers: function pickers(status) {
		var $pickers = [],
		    offsets = [],
		    dh = undefined,
		    dc = undefined,
		    idate = undefined;
		var _state4 = this.state;
		var date = _state4.date;
		var start = _state4.start;
		var end = _state4.end;
		var offset = _state4.offset;
		var _props3 = this.props;
		var inline = _props3.inline;
		var months = _props3.months;
		var lang = _props3.lang;
		var haslunar = _props3.haslunar;
		var className = _props3.className;

		var selected = this.state[status ? status : 'selected'];
		var classes = 'date-picker date-picker-' + (inline ? 'inline' : 'block') + ' ' + (className ? className : '') + ' ' + (haslunar ? 'date-picker-lunar' : '');
		for (var i = 0; i < months; i++) {
			offsets.push({ left: i * 215 + offset.left, top: offset.top });
			idate = this.numMonth(date, i);
			dh = _react2['default'].createElement(_dateHeaderJsx2['default'], { date: idate, lang: haslunar ? 'cn' : lang, updateMonth: this.updateMonth });
			dc = _react2['default'].createElement(_dateCalendarJsx2['default'], _extends({}, this.props, { date: idate, status: status, start: start, end: end, selected: selected, onChange: this.updateDay }));

			$pickers.push(inline ? _react2['default'].createElement(
				'div',
				{ className: classes, key: i },
				dh,
				dc
			) : _react2['default'].createElement(
				'div',
				{ className: classes, style: offsets[i], key: i },
				dh,
				dc
			));
		}
		return $pickers;
	},
	render: function render() {
		var _this = this;

		var _state5 = this.state;
		var show = _state5.show;
		var selected = _state5.selected;
		var start = _state5.start;
		var end = _state5.end;
		var status = _state5.status;
		var _props4 = this.props;
		var format = _props4.format;
		var inline = _props4.inline;
		var months = _props4.months;
		var disabled = _props4.disabled;

		var picker = undefined,
		    pickers = undefined,
		    pickerInBody = undefined;
		var di = function di(val, stat) {
			return _react2['default'].createElement(_dateInputJsx2['default'], { selected: !val ? selected : val, format: format, disabled: disabled,
				onFocus: _this.onFocus, onBlur: _this.onBlur, status: stat });
		};
		if (show) {
			pickers = this.pickers(status);
			picker = _react2['default'].createElement(
				'div',
				{ className: months > 1 ? 'date-multi clearfix' : '' },
				pickers
			);
			pickerInBody = _react2['default'].createElement(
				_dateInBodyJsx2['default'],
				{ classes: 'date-picker-wrapper', ref: 'insDateInBody' },
				picker
			);
		}
		var didom = start && end ? _react2['default'].createElement(
			'div',
			{ className: 'date-inputs' },
			di(start, 'start'),
			di(end, 'end')
		) : di();
		return _react2['default'].createElement(
			'div',
			{ className: 'date-components' },
			didom,
			inline ? picker : pickerInBody
		);
	}
});

exports['default'] = ReactDatepickerPlus;
module.exports = exports['default'];