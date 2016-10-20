require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateMonthJsx = require('./date-month.jsx');

var _dateMonthJsx2 = _interopRequireDefault(_dateMonthJsx);

var _dateTimeJsx = require('./date-time.jsx');

var _dateTimeJsx2 = _interopRequireDefault(_dateTimeJsx);

var DateCalendar = _react2['default'].createClass({
	displayName: 'DateCalendar',

	render: function render() {
		var datecld = _react2['default'].createElement(_dateMonthJsx2['default'], this.props);
		var datetime = _react2['default'].createElement(_dateTimeJsx2['default'], this.props);
		var picker = this.props.time ? datecld + datetime : datecld;
		return _react2['default'].createElement(
			'div',
			{ className: 'date-calendar animated infinite fadeInRight' },
			picker
		);
	}
});

exports['default'] = DateCalendar;
module.exports = exports['default'];

},{"./date-month.jsx":9,"./date-time.jsx":11,"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateLunar = require('./date-lunar');

var _dateTerm = require('./date-term');

var _dateHolidays = require('./date-holidays');

//render month
//current month
var DateDay = _react2['default'].createClass({
    displayName: 'DateDay',

    /*propTypes: {
        date: React.PropTypes.object,
        format: React.PropTypes.string,
    },*/
    //获取某天的所有信息 m+1才是显示用的月分
    getDayInfo: function getDayInfo() {
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
        var sy = selected.getFullYear();
        var sm = selected.getMonth();
        var sd = selected.getDate();
        var cy = date.getFullYear();
        var cm = date.getMonth();
        var cd = date.getDate();
        var y = edate.getFullYear();
        var m = edate.getMonth();
        var d = edate.getDate();

        var edataNo = +edate;
        var range = function range(start, end) {
            return edataNo >= +start && edataNo <= +end;
        };
        var dayinfo = {
            date: edate,
            lunar: (0, _dateLunar.toLunarDate)(edate),
            term: (0, _dateTerm.getMonthSolarTerms)(y, m)[d],
            salarfest: _dateHolidays.salarHolidays[this.zero(m + 1) + this.zero(d)], //这里的月份用的是视图的
            currentMonth: m === cm,
            currentDay: y === sy && m === sm && d === sd
        };
        if (min || max) dayinfo.disabled = !range(min, max); //是否在限制的范围内
        if (start && end) dayinfo.inrange = range(start, end); //是否在选择结果的范围内
        if (selecting && status) dayinfo.inselect = status === 'start' ? range(selecting, end) : range(start, selecting);

        if (dayAddon) {
            dayinfo.addon = dayAddon(dayinfo);
        }
        dayinfo.lunarfest = _dateHolidays.lunarHolidays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
        // console.log(dayinfo, edataNo, start, end, 'startend')
        return dayinfo;
    },
    zero: function zero(n) {
        return n < 10 ? '0' + n : n;
    },

    setDate: function setDate(dateinfo) {
        if (dateinfo.disabled) return;
        this.props.onChange(dateinfo);
    },
    setMouseEnter: function setMouseEnter(dateinfo) {
        if (dateinfo.disabled) return;
        this.props.onMouseEnter(dateinfo);
    },

    render: function render() {
        var info = this.getDayInfo();
        var date = info.date;
        var salarfest = info.salarfest;
        var lunarfest = info.lunarfest;
        var term = info.term;
        var lunar = info.lunar;
        var currentDay = info.currentDay;
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
                'span',
                { className: 'date-fest' },
                (salarfest ? salarfest : '') + (lunarfest ? lunarfest : '')
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
            { className: "date-day" + (!currentMonth ? " date-nocurrent " : " ") + (currentDay ? 'date-selected' : "") + (disabled ? ' date-disabled' : "") + (inrange ? ' date-range' : "") + (inselect ? ' date-hover' : ""),
                onMouseDown: this.setDate.bind(this, info),
                onMouseEnter: this.setMouseEnter.bind(this, info) },
            festDom
        );
    }
});

exports['default'] = DateDay;
module.exports = exports['default'];

},{"./date-holidays":5,"./date-lunar":8,"./date-term":10,"react":undefined}],3:[function(require,module,exports){
/**
 * date api封装
 * @author Joe Liu
 * @email icareu.joe@gmail.com
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function dateFormat(date, format) {
    if (!date) return;
    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
    if (format === undefined) {
        format = date;
        date = new Date();
    }
    date = typeof date === 'number' ? new Date(date) : date;
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

var todayStart = new Date().setHours(0, 0, 0, 0);
var dateDiff = function dateDiff(timestape, time) {
    return Math.ceil((timestape - (time ? time : +todayStart)) / (3600 * 1000 * 24));
};

exports.dateFormat = dateFormat;
exports.dateDiff = dateDiff;
exports.todayStart = todayStart;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var chars = {
	weeksCn: ['日', '一', '二', '三', '四', '五', '六'],
	weeksEnF: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	weeksEnS: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	monthsCn: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	monthsEn: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dateHeader = _react2['default'].createClass({
	displayName: 'dateHeader',

	propTypes: {
		updateMonth: _react2['default'].PropTypes.func
	},
	getDate: function getDate() {
		return this.props.date;
	},
	changeMonth: function changeMonth(num) {
		this.props.updateMonth(num);
	},
	render: function render() {
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
});

exports['default'] = dateHeader;
module.exports = exports['default'];

},{"react":undefined}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var DateInBody = _react2["default"].createClass({
  displayName: "DateInBody",

  propTypes: {
    classes: _react2["default"].PropTypes.string, //class split by spacing
    offset: _react2["default"].PropTypes.object
  },
  componentDidMount: function componentDidMount() {
    this.popup = document.createElement("div");
    this.popup.className = this.props.classes;
    document.body.appendChild(this.popup);
    this.renderLayer();
  },

  componentDidUpdate: function componentDidUpdate() {
    this.renderLayer();
  },

  componentWillMount: function componentWillMount() {
    // this.removePicker()
  },
  removePicker: function removePicker(current) {
    this.popup = current ? this.popup : document.getElementsByClassName('date-picker-wrapper')[0];
    // console.log(this.popup, 'popup')
    if (this.popup) {
      _reactDom2["default"].unmountComponentAtNode(this.popup);
      document.body.removeChild(this.popup);
    }
  },
  renderLayer: function renderLayer() {
    if (this.props.children) _reactDom2["default"].render(this.props.children, this.popup);
  },

  render: function render() {
    return _react2["default"].createElement("div", _extends({}, this.props, { children: null, style: this.props.offset }));
  }
});

exports["default"] = DateInBody;
module.exports = exports["default"];

},{"react":undefined,"react-dom":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dateFormat = require('./date-format');

var DateInput = _react2['default'].createClass({
	displayName: 'DateInput',

	propTypes: {
		// element: React.PropTypes.element,
		selected: _react2['default'].PropTypes.any,
		disabled: _react2['default'].PropTypes.bool,
		onBlur: _react2['default'].PropTypes.func,
		onFocus: _react2['default'].PropTypes.func,
		onChange: _react2['default'].PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			status: ''
		};
	},
	/*	getInitialState () {
 	    return {
 	      // value:  this.dateString()
 	        styles: {
 		      top: 0,
 		      left: 0
 		    }
 	    }
 	},
 	componentDidMount() {
 	  this.setState({
 	    // styles: 
 	  })
 	},*/
	dateString: function dateString() {
		var _props = this.props;
		var format = _props.format;
		var selected = _props.selected;

		return format ? (0, _dateFormat.dateFormat)(selected, format) : selected;
	},
	handleBlur: function handleBlur(event) {
		this.props.onBlur(event, this);
	},
	handleFocus: function handleFocus(event) {
		this.props.onFocus(event, this);
	},
	focus: function focus() {
		this.refs.input.focus();
	},
	handleChange: function handleChange(event) {
		this.props.onChange(event);
	},
	getInput: function getInput() {
		return _reactDom2['default'].findDOMNode(this);
	},
	handlePosition: function handlePosition() {
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
	},

	render: function render() {
		var _props2 = this.props;
		var customInput = _props2.customInput;
		var disabled = _props2.disabled;

		return _react2['default'].createElement('input', { ref: 'input', type: 'text', disabled: disabled, value: this.dateString(), onFocus: this.handleFocus, onBlur: this.handleBlur, onChange: this.handleChange });
	}
});

exports['default'] = DateInput;
module.exports = exports['default'];

},{"./date-format":3,"react":undefined,"react-dom":undefined}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dateDayJsx = require('./date-day.jsx');

var _dateDayJsx2 = _interopRequireDefault(_dateDayJsx);

var DateMonth = _react2['default'].createClass({
	displayName: 'DateMonth',

	/*propTypes: {
 	date: React.PropTypes.object.isRequired,
 	format: React.PropTypes.string
 },*/
	getInitialState: function getInitialState() {
		return {
			selecting: null
		};
	},
	getMonthInfo: function getMonthInfo() {
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
	},

	weeks: function weeks(months) {
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
	},
	days: function days(week) {
		var days = [],
		    that = this;
		week.map(function (day, dkey) {
			days.push(_react2['default'].createElement(_dateDayJsx2['default'], _extends({}, that.props, { onMouseEnter: that.onMouseEnter, selecting: that.state.selecting, edate: day, key: dkey })));
		});
		return days;
	},
	onMouseEnter: function onMouseEnter(dateinfo) {
		var _props = this.props;
		var start = _props.start;
		var end = _props.end;

		if (start && end) this.setState({ selecting: dateinfo.date });
	},
	onMouseLeave: function onMouseLeave() {
		var _props2 = this.props;
		var start = _props2.start;
		var end = _props2.end;

		if (start && end) this.setState({ selecting: null });
	},
	render: function render() {
		// console.log('render times')
		var months = this.getMonthInfo(),
		    that = this;
		return _react2['default'].createElement(
			'div',
			{ className: "date-month" + (that.state.selecting ? " date-selecting " : " "), onMouseLeave: this.onMouseLeave },
			this.weeks(months)
		);
	}
});

exports['default'] = DateMonth;
module.exports = exports['default'];

},{"./date-day.jsx":2,"react":undefined}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DateTime = _react2['default'].createClass({
	displayName: 'DateTime',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'date-time' },
			new Date().getHours() + ':' + new Date().getMinutes()
		);
	}
});

exports['default'] = DateTime;
module.exports = exports['default'];

},{"react":undefined}],"react-datepicker-plus":[function(require,module,exports){
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

},{"./date-calendar.jsx":1,"./date-header.jsx":4,"./date-in-body.jsx":6,"./date-input.jsx":7,"react":undefined,"react-dom":undefined}]},{},[]);
