'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var DateHeader = require('./date-header.jsx');
var DateCalendar = require('./date-calendar.jsx');
var DateInput = require('./date-input.jsx');
var DateInBody = require('./date-in-body.jsx');

var now = new Date();
var ReactDatepickerPlus = _react2['default'].createClass({
	displayName: 'ReactDatepickerPlus',

	propTypes: {
		selected: _react2['default'].PropTypes.any, //default date
		format: _react2['default'].PropTypes.string, //format date
		isfill: _react2['default'].PropTypes.bool, //show prefix-prev prefix-next month
		months: _react2['default'].PropTypes.number,
		time: _react2['default'].PropTypes.bool, //show time select?
		festival: _react2['default'].PropTypes.bool, //show festival
		haslunar: _react2['default'].PropTypes.bool, //show lunar
		onChange: _react2['default'].PropTypes.func,
		onFocus: _react2['default'].PropTypes.func,
		onBlur: _react2['default'].PropTypes.func,
		autoHide: _react2['default'].PropTypes.bool, //selected auto hide
		inline: _react2['default'].PropTypes.bool //inline
	},
	getInitialState: function getInitialState() {
		return {
			date: now,
			selected: this.props.selected,
			show: this.props.inline ? true : false,
			focus: false, //focus state
			offset: {} //datepicker position
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			isfill: false,
			format: 'yyyy-MM-dd',
			selected: now,
			months: 1
		};
	},
	onFocus: function onFocus(event) {
		var _state = this.state;
		var show = _state.show;
		var focus = _state.focus;

		if (show && !focus) {
			this.state.focus = true; //just change state not trigger render
			return;
		}
		var size = this.refs.insDateInput.handlePosition();
		var left = size.left;
		var top = size.top;
		var height = size.height;

		top += height + document.body.scrollTop;
		this.show(true, { left: left, top: top }, true);

		var onFocus = this.props.onFocus;

		if (onFocus) onFocus(event);
	},
	onBlur: function onBlur(event) {
		var _state2 = this.state;
		var show = _state2.show;
		var focus = _state2.focus;
		var _props = this.props;
		var inline = _props.inline;
		var onBlur = _props.onBlur;

		if (!show) return;
		if (!focus) {
			this.refs.insDateInput.focus(); //when show && !focus, trigger focus 
		} else if (!inline) {
				focus && this.removePicker();
				onBlur && onBlur(event);
			}
	},
	onMouseDown: function onMouseDown(event) {
		/*		event.stopPropagation()
  		event.preventDefault()*/
	},
	onInputChange: function onInputChange(event) {},
	show: function show(_show, offset, focus) {
		this.setState({ show: _show, offset: offset, focus: focus });
	},
	updateMonth: function updateMonth(num) {
		var date = this.state.date;

		var cdate = this.numMonth(date, num);
		this.updateDate({ date: cdate }, true);
	},
	numMonth: function numMonth(date, num) {
		return new Date(date.getFullYear(), date.getMonth() + num, 1);
	},
	updateDay: function updateDay(dateinfo) {
		this.updateDate(dateinfo);
	},
	updateDate: function updateDate(dateinfo, isMonth) {
		var _props2 = this.props;
		var onChange = _props2.onChange;
		var autoHide = _props2.autoHide;

		this.setState({ show: true, date: dateinfo.date, selected: !isMonth ? dateinfo.date : this.state.selected, focus: false });
		onChange && onChange(dateinfo);
		!isMonth && autoHide && this.removePicker();
	},
	removePicker: function removePicker() {
		this.show(false);
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker(true);
	},

	/*
 componentWillMount(){
 	// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.insDateInBody))
 },
 componentDidMount() {
   this.setState({
     styles: offset
   }) 
 }*/
	/* componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'componentWillReceiveProps')
    },
    shouldComponentUpdate(nextProps){
    	console.log(nextProps, this.state.show, 'nextProps')
    	// if(nextProps.date === this.props.date) return false
    	return true
    },
     */
	pickers: function pickers() {
		var $pickers = [],
		    offsets = [],
		    dh = undefined,
		    dc = undefined,
		    idate = undefined;
		var _state3 = this.state;
		var date = _state3.date;
		var selected = _state3.selected;
		var offset = _state3.offset;
		var _props3 = this.props;
		var inline = _props3.inline;
		var months = _props3.months;

		for (var i = 0; i < months; i++) {
			offsets.push({ left: i * 215 + offset.left, top: offset.top });
			idate = this.numMonth(date, i);
			dh = _react2['default'].createElement(DateHeader, { date: idate, updateMonth: this.updateMonth });
			dc = _react2['default'].createElement(DateCalendar, _extends({}, this.props, { date: idate, selected: selected, onChange: this.updateDay }));
			$pickers.push(inline ? _react2['default'].createElement(
				'div',
				{ className: 'date-picker date-picker-inline', key: i },
				dh,
				dc
			) : _react2['default'].createElement(
				'div',
				{ className: 'date-picker date-picker-block', style: offsets[i], onMouseDown: this.onMouseDown, key: i },
				dh,
				dc
			));
		}
		return $pickers;
	},
	render: function render() {
		var _state4 = this.state;
		var date = _state4.date;
		var show = _state4.show;
		var selected = _state4.selected;
		var _props4 = this.props;
		var format = _props4.format;
		var inline = _props4.inline;
		var months = _props4.months;

		var picker = undefined,
		    pickers = undefined,
		    pickerInBody = undefined;
		var dh = _react2['default'].createElement(DateHeader, { date: date, updateMonth: this.updateMonth });
		var dc = _react2['default'].createElement(DateCalendar, _extends({}, this.props, { date: date, selected: selected, onChange: this.updateDay }));

		if (show) {
			pickers = this.pickers();
			picker = _react2['default'].createElement(
				'div',
				{ className: months > 1 ? 'date-multi' : '' },
				pickers
			);
			pickerInBody = _react2['default'].createElement(
				DateInBody,
				{ classList: 'date-picker-wrapper', ref: 'insDateInBody' },
				picker
			);
		}
		// console.log(inline, show, datepicker, 'datepicker')
		return _react2['default'].createElement(
			'div',
			{ className: 'date-components' },
			_react2['default'].createElement(DateInput, { selected: selected, format: format,
				onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.onInputChange,
				ref: 'insDateInput' }),
			inline ? picker : pickerInBody
		);
	}
});

exports['default'] = ReactDatepickerPlus;
module.exports = exports['default'];