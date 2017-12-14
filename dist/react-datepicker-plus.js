(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactDatepickerPlus = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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
		};
	}

	_createClass(ReactDatepickerPlus, [{
		key: 'onFocus',
		// status: ''   	//React.PropTypes.oneOf(['start', 'end'])
		//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
		value: function onFocus(event, input) {
			var _state = this.state;
			var show = _state.show;
			var focus = _state.focus;
			var selected = _state.selected;

			if (show && !focus || focus === 'blank') {
				this.state.focus = true; //just change state not trigger render
				return;
			}
			var status = input.props.status;selected = status ? this.state[status] : selected;

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
			return new Date(date.getFullYear(), date.getMonth() + num, date.getDate());
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
				dh = _react2['default'].createElement(_dateHeaderJs2['default'], { date: idate, lang: haslunar ? 'cn' : lang, updateMonth: this.updateMonth.bind(this) });
				dc = _react2['default'].createElement(_dateCalendarJs2['default'], _extends({}, this.props, { min: min, max: max, date: idate, status: status, start: start, end: end, selected: selected, onChange: this.updateDay.bind(this) }));

				$pickers.push(inline ? _react2['default'].createElement(
					'div',
					{ onMouseDown: this.clickPane.bind(this), className: classes, key: i },
					dh,
					dc
				) : _react2['default'].createElement(
					'div',
					{ onMouseDown: this.clickPane.bind(this), className: classes, style: offsets[i], key: i },
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
				this.setState({ offset: { left: offset.left + this.inputWidth - 2 * w, top: offset.top }, width: w });
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
				return _react2['default'].createElement(_dateInputJs2['default'], { selected: val === void 0 ? selected : val,
					format: format, disabled: disabled,
					placeholder: stat == 'end' ? placeholderEnd : placeholder, children: children,
					onFocus: _this.onFocus.bind(_this),
					onBlur: _this.onBlur.bind(_this), status: stat,
					ref: stat });
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
					{ onUpdate: this.updateSize.bind(this), className: 'date-picker-wrapper', ref: 'insDateInBody' },
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

;

ReactDatepickerPlus.defaultProps = {
	isfill: false,
	format: 'yyyy-MM-dd',
	selected: _dateFormatJs.today,
	months: 1,
	lang: 'en'
};

exports['default'] = ReactDatepickerPlus;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-calendar.js":2,"./date-format.js":4,"./date-header.js":5,"./date-in-body.js":7,"./date-input.js":8}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _dateMonthJs = require('./date-month.js');

var _dateMonthJs2 = _interopRequireDefault(_dateMonthJs);

var _dateTimeJs = require('./date-time.js');

var _dateTimeJs2 = _interopRequireDefault(_dateTimeJs);

var DateCalendar = (function (_Component) {
	_inherits(DateCalendar, _Component);

	function DateCalendar(props) {
		_classCallCheck(this, DateCalendar);

		_get(Object.getPrototypeOf(DateCalendar.prototype), 'constructor', this).call(this, props);
	}

	_createClass(DateCalendar, [{
		key: 'render',
		value: function render() {
			var datecld = _react2['default'].createElement(_dateMonthJs2['default'], this.props);
			var datetime = _react2['default'].createElement(_dateTimeJs2['default'], this.props);
			var picker = this.props.time ? datecld + datetime : datecld;
			return _react2['default'].createElement(
				'div',
				{ className: 'date-calendar animated infinite fadeInRight' },
				picker
			);
		}
	}]);

	return DateCalendar;
})(_react.Component);

;

exports['default'] = DateCalendar;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-month.js":10,"./date-time.js":12}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _dateLunar = require('./date-lunar');

var _dateTerm = require('./date-term');

var _dateHolidays = require('./date-holidays');

//render month
//current month

var DateDay = (function (_Component) {
    _inherits(DateDay, _Component);

    /*propTypes: {
        date: React.PropTypes.object,
        format: React.PropTypes.string,
    }*/

    function DateDay(props) {
        _classCallCheck(this, DateDay);

        _get(Object.getPrototypeOf(DateDay.prototype), 'constructor', this).call(this, props);
        // console.log(this.props.selected, props.selected, 'selected')
    }

    //获取某天的所有信息 m+1才是显示用的月分

    _createClass(DateDay, [{
        key: 'getDayInfo',
        value: function getDayInfo() {
            var _props = this.props;
            var date = _props.date;
            var edate = _props.edate;
            var min = _props.min;
            var max = _props.max;
            var start = _props.start;
            var end = _props.end;
            var selected = _props.selected;
            var selecting = _props.selecting;
            var status = _props.status;
            var dayAddon = _props.dayAddon;
            //selected date, render date, each date
            selected = selected || new Date();
            // selected = selected instanceof Date ? selected : new Date(selected)
            // date = date instanceof Date ? date : new Date(date)
            // edate = edate instanceof Date ? edate : new Date(edate)
            var sy = selected.getFullYear();
            var sm = selected.getMonth();
            var sd = selected.getDate();
            var cy = date.getFullYear();
            var cm = date.getMonth();
            var cd = date.getDate();
            var y = edate.getFullYear();
            var m = edate.getMonth();
            var d = edate.getDate();

            var toNo = function toNo(x) {
                return x ? +x : 0;
            };
            var edateNo = toNo(edate),
                minNo = toNo(min),
                maxNo = toNo(max),
                startNo = toNo(start),
                endNo = toNo(end);
            var range = function range(startNo, endNo) {
                return edateNo >= startNo && edateNo <= endNo;
            };
            var minmax = function minmax(minNo, maxNo) {
                return minNo && edateNo < minNo || maxNo && edateNo > maxNo;
            };

            var realMin = min && minNo > startNo ? minNo : startNo;
            var realMax = !max || maxNo > endNo ? endNo : maxNo;

            var dayinfo = {
                date: edate,
                lunar: (0, _dateLunar.toLunarDate)(edate),
                term: (0, _dateTerm.getMonthSolarTerms)(y, m)[d],
                salarfest: _dateHolidays.salarHolidays[this.zero(m + 1) + this.zero(d)], //这里的月份用的是视图的
                currentMonth: m === cm,
                currentDay: y === sy && m === sm && d === sd,
                currentPoint: edateNo === realMin || edateNo === realMax
            };
            //需要区分 start(不能大于end)与end(水能小于start), 没有则直接看min max @todo
            //是否在限制的范围内
            var isStart = status === 'start',
                isEnd = status === 'end';

            if (isStart) {
                dayinfo.disabled = minmax(minNo, realMax);
            } else if (isEnd) {
                dayinfo.disabled = minmax(realMin, maxNo);
            } else if (min || max) {
                dayinfo.disabled = minmax(minNo, maxNo);
            }

            if (start && end) dayinfo.inrange = range(start, end); //是否在选择结果的范围内
            if (selecting && status) dayinfo.inselect = isStart ? range(selecting, end) : range(start, selecting);

            if (dayAddon) {
                dayinfo.addon = dayAddon(dayinfo);
            }
            dayinfo.lunarfest = _dateHolidays.lunarHolidays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
            // console.log(dayinfo, edateNo, start, end, 'startend')
            return dayinfo;
        }
    }, {
        key: 'zero',
        value: function zero(n) {
            return n < 10 ? '0' + n : n;
        }
    }, {
        key: 'setDate',
        value: function setDate(dateinfo) {
            if (dateinfo.disabled) return;
            this.props.onChange(dateinfo);
        }
    }, {
        key: 'setMouseEnter',
        value: function setMouseEnter(dateinfo) {
            if (dateinfo.disabled) return;
            this.props.onMouseEnter.bind(this, dateinfo);
        }
    }, {
        key: 'render',
        value: function render() {
            var info = this.getDayInfo();
            var date = info.date;
            var salarfest = info.salarfest;
            var lunarfest = info.lunarfest;
            var term = info.term;
            var lunar = info.lunar;
            var currentDay = info.currentDay;
            var currentPoint = info.currentPoint;
            var currentMonth = info.currentMonth;
            var disabled = info.disabled;
            var inrange = info.inrange;
            var inselect = info.inselect;
            var addon = info.addon;
            var festDom = undefined;var _props2 = this.props;
            var festival = _props2.festival;
            var haslunar = _props2.haslunar;

            if (festival && (salarfest || lunarfest)) {
                festDom = _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'span',
                        { className: 'date-fest' },
                        (salarfest ? salarfest : '') + (lunarfest ? lunarfest : '')
                    ),
                    addon
                );
            } else {
                festDom = _react2['default'].createElement(
                    'div',
                    null,
                    _react2['default'].createElement(
                        'span',
                        { className: 'date-d' },
                        date.getDate()
                    ),
                    addon
                );
            }
            if (haslunar) {
                //has lunar and must has term
                festDom = _react2['default'].createElement(
                    'div',
                    { className: 'date-day-sets' },
                    festDom,
                    _react2['default'].createElement(
                        'span',
                        { className: 'date-lunar' },
                        term ? term : (0, _dateLunar.toLunarDay)(lunar.day)
                    )
                );
            }
            return _react2['default'].createElement(
                'div',
                { className: "date-day" + (!currentMonth ? " date-nocurrent " : " ") + (currentPoint ? ' date-point' : "") + (currentDay ? ' date-selected' : "") + (disabled ? ' date-disabled' : "") + (inrange ? ' date-range' : "") + (inselect ? ' date-hover' : ""),
                    onMouseDown: this.setDate.bind(this, info),
                    onMouseEnter: this.setMouseEnter.bind(this, info) },
                festDom
            );
        }
    }]);

    return DateDay;
})(_react.Component);

;

exports['default'] = DateDay;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-holidays":6,"./date-lunar":9,"./date-term":11}],4:[function(require,module,exports){
/**
 * date api封装
 * @author Joe Liu
 * @email icareu.joe@gmail.com
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function dateObject(date) {
    if (!date) return date;
    if (typeof date === 'string') {
        //"2017-11-28T11:01:14.025Z" len=24
        //'2017-10-10 00:00:00' len=19
        //'2017-10-10' len=10
        if (date.indexOf('/') && date.length < 24) {
            date = date.replace(/-/g, '/');
        }
        date.length <= 10 ? new Date(date + ' 00:00:00') : new Date(date);
    }
    return date instanceof Date ? date : new Date(date);
}

function dateFormat(date, format) {
    if (!date) return '';
    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
    if (format === undefined) {
        format = date;
        date = new Date();
    }
    date = dateObject(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds(), //毫秒
        "W": weeks[date.getDay()] //周
    };
    format = format.replace(/([yMdhmsqSW])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        } else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}
var today = new Date();
var todayStart = today.setHours(0, 0, 0, 0);
var dateDiff = function dateDiff(timestape, time) {
    return Math.ceil((timestape - (time ? time : +todayStart)) / (3600 * 1000 * 24));
};

var plusDay = function plusDay(date, num) {
    num = num !== void 0 ? num : 1;
    return new Date(+date + 3600000 * 24 * num);
};

var minusDay = function minusDay(date, num) {
    return plusDay(-num);
};

exports.dateFormat = dateFormat;
exports.dateDiff = dateDiff;
exports.today = today;
exports.todayStart = todayStart;
exports.dateObject = dateObject;
exports.plusDay = plusDay;
exports.minusDay = minusDay;

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var chars = {
	weeksCn: ['日', '一', '二', '三', '四', '五', '六'],
	weeksEnF: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	weeksEnS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	monthsCn: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	monthsEn: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

var dateHeader = (function (_Component) {
	_inherits(dateHeader, _Component);

	// propTypes: {
	//     updateMonth: React.PropTypes.func
	// },

	function dateHeader(props) {
		_classCallCheck(this, dateHeader);

		_get(Object.getPrototypeOf(dateHeader.prototype), 'constructor', this).call(this, props);
	}

	_createClass(dateHeader, [{
		key: 'getDate',
		value: function getDate() {
			return this.props.date;
		}
	}, {
		key: 'changeMonth',
		value: function changeMonth(num) {
			this.props.updateMonth(num);
		}
	}, {
		key: 'render',
		value: function render() {
			var lang = this.props.lang;

			var cn = lang === 'cn';
			var year = this.getDate().getFullYear(),
			    month = this.getDate().getMonth() + 1;

			var monthstr = cn ? year + ' ' + month + '月' : chars.monthsEn[month - 1] + ' ' + year;
			return _react2['default'].createElement(
				'div',
				{ className: 'date-header' },
				_react2['default'].createElement(
					'div',
					{ className: 'date-title' },
					_react2['default'].createElement('span', { className: 'date-prev', onMouseDown: this.changeMonth.bind(this, -1) }),
					_react2['default'].createElement(
						'span',
						{ className: 'date-m' },
						monthstr
					),
					_react2['default'].createElement('span', { className: 'date-next', onMouseDown: this.changeMonth.bind(this, 1) })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'date-wtitle' },
					chars[cn ? 'weeksCn' : 'weeksEnS'].map(function (week, key) {
						return _react2['default'].createElement(
							'span',
							{ key: key },
							week
						);
					})
				)
			);
		}
	}]);

	return dateHeader;
})(_react.Component);

;

exports['default'] = dateHeader;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var salarHolidays = {
    '0101': '元旦',
    '0214': '情人',
    '0308': '妇女',
    '0312': '植树',
    '0401': '愚人',
    '0501': '劳动',
    '0504': '青年',
    '0601': '儿童',
    '0701': '建党',
    '0801': '建军',
    '0910': '教师',
    '1001': '国庆',
    '1224': '平安夜',
    '1225': '圣诞'
};

var lunarHolidays = {
    '0101': '春节',
    '0115': '元宵',
    '0505': '端午',
    '0707': '七夕',
    '0715': '中元',
    '0815': '中秋',
    '0909': '重阳',
    '1208': '腊八',
    '1224': '小年'
};

exports.salarHolidays = salarHolidays;
exports.lunarHolidays = lunarHolidays;

},{}],7:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var DateInBody = (function (_Component) {
  _inherits(DateInBody, _Component);

  function DateInBody() {
    _classCallCheck(this, DateInBody);

    _get(Object.getPrototypeOf(DateInBody.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DateInBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.popup = document.createElement("div");
      // this.popup.className = this.props.classes
      document.body.appendChild(this.popup);
      this.renderLayer();
      if (!this.props.inline) {
        var adjustSize = this.popup.getElementsByClassName('date-picker')[0].clientWidth;
        this.props.onUpdate && this.props.onUpdate(adjustSize);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderLayer();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // this.removePicker()
    }
  }, {
    key: "removePicker",
    value: function removePicker() {
      // this.popup = current ? this.popup : document.getElementsByClassName('date-picker-wrapper')[0]
      if (this.popup) {
        _reactDom2["default"].unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
        this.popup = null;
      }
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      if (this.props.children) _reactDom2["default"].render(this.props.children, this.popup);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement("div", { className: this.props.className, children: null, style: this.props.offset });
    }
  }]);

  return DateInBody;
})(_react.Component);

exports["default"] = DateInBody;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"react-dom":undefined}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dateFormat = require('./date-format');

var DateInput = (function (_Component) {
	_inherits(DateInput, _Component);

	//  propTypes: {
	//     // element: React.PropTypes.element,
	//     selected: React.PropTypes.any,
	//     disabled: React.PropTypes.bool,
	//     onBlur: React.PropTypes.func,
	//     onFocus: React.PropTypes.func,
	//     onChange: React.PropTypes.func
	// }

	function DateInput(props) {
		_classCallCheck(this, DateInput);

		_get(Object.getPrototypeOf(DateInput.prototype), 'constructor', this).call(this, props);
	}

	/*	getInitialState () {
 	    return {
 	      // value:  this.dateString()
 	        styles: {
 		      top: 0,
 		      left: 0
 		    }
 	    }
 	}
 	componentDidMount() {
 	  this.setState({
 	    // styles:
 	  })
 	}*/

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
					'width': { get: function get() {
							return this.right - this.left;
						} },
					'height': { get: function get() {
							return this.bottom - this.top;
						} }
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
				/* 			return <div>
    				{React.Children.map(children, child => {
    					return child.type === 'input' ? inputElem : child
    				})}
    			</div> */
			}

			// else if(children){
			// 	return React.Children.map(children, child => {
			// 		return child.type === 'input' ? inputElem : child
			// 	})
			// }
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props;
			var disabled = _props2.disabled;
			var placeholder = _props2.placeholder;
			var children = _props2.children;

			var inputElem = _react2['default'].createElement('input', { ref: 'input', type: 'text', placeholder: placeholder, disabled: disabled, value: this.dateString(), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this) });
			return children ? this.recursiveMap(children, inputElem) : inputElem;
		}
	}]);

	return DateInput;
})(_react.Component);

;

exports['default'] = DateInput;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-format":4,"react-dom":undefined}],9:[function(require,module,exports){
// 农历月份信息表
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];

//传回农历 y 年的总天数
function lunarYearDays(y) {
    var i,
        sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) sum += lunarInfo[y - 1900] & i ? 1 : 0;
    return sum + leapDays(y);
}

//传回农历 y 年m月的总天数
function lunarMonthDays(y, m) {
    return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
}

//传回农历 y 年闰月的天數
function leapDays(y) {
    if (leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;else return 0;
}

//传回农历 y 年闰哪个月 1-12 , 沒闰传回 0
function leapMonth(y) {
    return lunarInfo[y - 1900] & 0xf;
}

//公历转农历
function toLunarDate(objDate) {
    var i,
        leap = 0,
        temp = 0;
    var baseDate = new Date(1900, 0, 31);
    var offset = (objDate - baseDate) / 86400000;

    var result = {};
    result.dayCyl = offset + 40;
    result.monCyl = 14;

    for (i = 1900; i < 2050 && offset > 0; i++) {
        temp = lunarYearDays(i);
        offset -= temp;
        result.monCyl += 12;
    }

    if (offset < 0) {
        offset += temp;
        i--;
        result.monCyl -= 12;
    }

    result.year = i;
    result.yearCyl = i - 1864;

    leap = leapMonth(i); //闰哪个月
    result.isLeap = false;

    for (i = 1; i < 13 && offset > 0; i++) {
        //闰月
        if (leap > 0 && i == leap + 1 && result.isLeap == false) {
            --i;
            result.isLeap = true;
            temp = leapDays(result.year);
        } else {
            temp = lunarMonthDays(result.year, i);
        }

        //解除闰月
        if (result.isLeap == true && i == leap + 1) {
            result.isLeap = false;
        }

        offset -= temp;
        if (result.isLeap == false) {
            result.monCyl++;
        }
    }

    if (offset == 0 && leap > 0 && i == leap + 1) if (result.isLeap) {
        result.isLeap = false;
    } else {
        result.isLeap = true;
        --i;
        --result.monCyl;
    }

    if (offset < 0) {
        offset += temp;
        --i;
        --result.monCyl;
    }

    result.month = i;
    result.day = offset + 1;
    return result;
}

//农历数字转字符
function toLunarDay(d) {
    var lunarDay = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    var lunarTeen = ['初', '十', '廿', '三'];
    var dstr = d + '',
        teen = lunarTeen[0],
        rightNum = dstr.length < 2 ? '' : dstr.substring(1),
        rightDeco = rightNum === '0' ? '十' : lunarDay[Number(rightNum) - 1];
    if (d > 10) {
        teen = lunarTeen[1];
        if (d >= 20) {
            teen = lunarTeen[2];
            if (d >= 30) {
                teen = lunarTeen[3];
            }
        }
    }
    return teen + (dstr.length < 2 ? lunarDay[d - 1] : rightDeco);
}

exports['default'] = { lunarYearDays: lunarYearDays, lunarMonthDays: lunarMonthDays, leapDays: leapDays, leapMonth: leapMonth, toLunarDate: toLunarDate, toLunarDay: toLunarDay };
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _dateDayJs = require('./date-day.js');

var _dateDayJs2 = _interopRequireDefault(_dateDayJs);

var DateMonth = (function (_Component) {
	_inherits(DateMonth, _Component);

	/*propTypes: {
 	date: React.PropTypes.object.isRequired,
 	format: React.PropTypes.string
 }*/

	function DateMonth(props) {
		_classCallCheck(this, DateMonth);

		_get(Object.getPrototypeOf(DateMonth.prototype), 'constructor', this).call(this, props);
		this.state = { selecting: props.selecting };
	}

	_createClass(DateMonth, [{
		key: 'getMonthInfo',
		value: function getMonthInfo() {
			// console.log(this.props.date, 'datemonth')
			var y = this.props.date.getFullYear();
			var m = this.props.date.getMonth();
			var dateday,
			    line = 0,
			    temp = [],
			    isfill = this.props.isfill;
			// console.time('计算一月所用时间')
			var prevMDay = new Date(y, m, 0),
			    prevMDayLast = prevMDay.getDate(); //prev Month Last Day
			var nextMDay = new Date(y, m + 1, 0),
			    currMDayLast = nextMDay.getDate(); //current Month Last Day
			var currMDay = new Date(y, m + 0, 1),
			    currMDayFirst = currMDay.getDay(); //current Month First Day Week

			temp[line] = [];

			function calcLine(date) {
				var weekno = date.getDay(); //week
				if (weekno == 0) temp[line] = [];
				temp[line].push(date);
				weekno == 6 && line++;
			}

			// console.log(prevMDay, currMDay, prevMDayLast, currMDayLast, currMDayFirst)
			if (currMDayFirst && isfill) {
				//prev Month calendar row first
				var k = prevMDayLast - currMDayFirst + 1;
				for (var j = 0; j < currMDayFirst; j++) {
					dateday = new Date(y, m - 1, k);
					temp[line].push(dateday);
					k++;
				}
			}

			for (var i = 1; i <= currMDayLast; i++) {
				//current month
				dateday = new Date(y, m, i);
				calcLine(dateday);
			}
			if (isfill) {
				for (j = 1; j < 12; j++) {
					if (line < 6) {
						// console.log(line, 'line')
						dateday = new Date(y, m + 1, j);
						calcLine(dateday);
					}
				}
			}
			//console.timeEnd('计算一月所用时间')
			return temp;
		}
	}, {
		key: 'weeks',
		value: function weeks(months) {
			var weeks = [],
			    that = this;
			months.map(function (week, wkey) {
				weeks.push(_react2['default'].createElement(
					'div',
					{ className: "date-week date-week-" + wkey, key: wkey },
					that.days(week)
				));
			});
			return weeks;
		}
	}, {
		key: 'days',
		value: function days(week) {
			var days = [],
			    that = this;
			week.map(function (day, dkey) {
				days.push(_react2['default'].createElement(_dateDayJs2['default'], _extends({}, that.props, { onMouseEnter: that.onMouseEnter.bind(this), selecting: that.state.selecting, edate: day, key: dkey })));
			});
			return days;
		}
	}, {
		key: 'onMouseEnter',
		value: function onMouseEnter(dateinfo) {
			var _props = this.props;
			var start = _props.start;
			var end = _props.end;

			if (start && end) this.setState({ selecting: dateinfo.date });
		}
	}, {
		key: 'onMouseLeave',
		value: function onMouseLeave() {
			var _props2 = this.props;
			var start = _props2.start;
			var end = _props2.end;

			if (start && end) this.setState({ selecting: null });
		}
	}, {
		key: 'render',
		value: function render() {
			// console.log('render times')
			var months = this.getMonthInfo(),
			    that = this;
			return _react2['default'].createElement(
				'div',
				{ className: "date-month" + (that.state.selecting ? " date-selecting " : " "), onMouseLeave: this.onMouseLeave.bind(this) },
				this.weeks(months)
			);
		}
	}]);

	return DateMonth;
})(_react.Component);

DateMonth.defaultProps = {
	selecting: null
};

exports['default'] = DateMonth;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-day.js":3}],11:[function(require,module,exports){
// 农历二十四节气
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var cache = {};
var cachekeys = [];
var solarTerm = ['小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至'];
var sTermInfo = [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758];
// 返回某年的第n个节气为几日(从0小寒起算)
var getSolarTermIndex = function getSolarTermIndex(year, index) {
    var offDate = new Date(31556925974.7 * (year - 1900) + sTermInfo[index] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
    return offDate.getUTCDate();
};

// 返回该月的节气信息
var getMonthSolarTerms = function getMonthSolarTerms(year, month) {
    if (year instanceof Date) {
        month = year.getMonth();
        year = year.getFullYear();
    }
    var key = '' + year + month;
    if (key in cache) {
        return cache[key];
    }
    var ret = cache[key] = {};
    var index;
    index = getSolarTermIndex(year - 1900, month * 2);
    ret[index - 1] = solarTerm[month * 2];
    index = getSolarTermIndex(year - 1900, month * 2 + 1);
    ret[index - 1] = solarTerm[month * 2 + 1];
    cachekeys.push(key);
    if (cachekeys.length > 12) {
        delete cache[cachekeys.shift()];
    }
    return ret;
};

exports.getSolarTermIndex = getSolarTermIndex;
exports.getMonthSolarTerms = getMonthSolarTerms;

},{}],12:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _dateDayJs = require('./date-day.js');

var _dateDayJs2 = _interopRequireDefault(_dateDayJs);

var DateTime = (function (_Component) {
	_inherits(DateTime, _Component);

	function DateTime() {
		_classCallCheck(this, DateTime);

		_get(Object.getPrototypeOf(DateTime.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(DateTime, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'date-time' },
				new Date().getHours() + ':' + new Date().getMinutes()
			);
		}
	}]);

	return DateTime;
})(_react.Component);

exports['default'] = DateTime;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./date-day.js":3}]},{},[1])(1)
});