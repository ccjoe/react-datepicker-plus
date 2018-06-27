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

var _dateLunar = require('./date-lunar');

var _dateTerm = require('./date-term');

var _dateHolidays = require('./date-holidays');

//render month
//current month
var now = new Date();

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
			var maxLimitDisable = _props.maxLimitDisable;
			//selected date, render date, each date
			selected = selected || now;

			var lastLunarHolidays = this.props.lunarHolidays || _dateHolidays.lunarHolidays;
			var lastSalarHolidays = this.props.salarHolidays || _dateHolidays.salarHolidays;
			var lastDayHolidays = this.props.dayHolidays || _dateHolidays.dayHolidays;
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
			var ty = now.getFullYear();
			var tm = now.getMonth();
			var td = now.getDate();

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

			var lunar = (0, _dateLunar.toLunarDate)(edate);
			var lunarmmdd = '' + this.zero(lunar.month) + this.zero(lunar.day);
			var salarmmdd = '' + this.zero(m + 1) + this.zero(d);
			var salarymd = y + salarmmdd;

			var dayinfo = {
				today: y === ty && m === tm && d === td,
				date: edate,
				lunar: lunar,
				term: (0, _dateTerm.getMonthSolarTerms)(y, m)[d],
				salarfest: lastSalarHolidays[salarmmdd], //这里的月份用的是视图的
				lunarfest: lastLunarHolidays[lunarmmdd] || lastDayHolidays[salarymd],
				currentMonth: m === cm,
				currentDay: y === sy && m === sm && d === sd,
				currentPoint: edateNo === realMin || edateNo === realMax
			};
			//需要区分 start(不能大于end)与end(水能小于start), 没有则直接看min max @todo
			//是否在限制的范围内
			var isStart = status === 'start',
			    isEnd = status === 'end';

			if (isStart) {
				dayinfo.disabled = minmax(minNo, maxLimitDisable ? null : realMax);
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
			var today = info.today;
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
			var _props2 = this.props;
			var festival = _props2.festival;
			var haslunar = _props2.haslunar;
			var hasFest = festival && (salarfest || lunarfest);

			var festDom = _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'span',
					{ className: hasFest ? 'date-fest' : 'date-d' },
					hasFest ? (salarfest ? salarfest : '') + (lunarfest ? lunarfest : '') : today ? '今' : date.getDate()
				),
				addon
			);

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
				{
					className: 'date-day' + (!currentMonth ? ' date-nocurrent ' : ' ') + (currentPoint ? ' date-point' : '') + (currentDay ? ' date-selected' : '') + (disabled ? ' date-disabled' : '') + (inrange ? ' date-range' : '') + (inselect ? ' date-hover' : ''),
					onMouseDown: this.setDate.bind(this, info),
					onMouseEnter: this.setMouseEnter.bind(this, info) },
				festDom
			);
		}
	}]);

	return DateDay;
})(_react.Component);

exports['default'] = DateDay;
module.exports = exports['default'];