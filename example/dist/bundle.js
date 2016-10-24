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
			end: this.props.end
		};
	},

	//status: undefined, 	//React.PropTypes.oneOf(['start', 'end'])
	//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
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

		var _input$handlePosition = input.handlePosition();

		var left = _input$handlePosition.left;
		var top = _input$handlePosition.top;
		var height = _input$handlePosition.height;

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
		var _state3$status = _state3.status;
		var status = _state3$status === undefined ? 'selected' : _state3$status;
		var selected = _state3.selected;

		var getSelected = !isMonth ? dateinfo.date : this.state[status];
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

},{"./date-calendar.jsx":1,"./date-header.jsx":4,"./date-in-body.jsx":6,"./date-input.jsx":7,"react":undefined,"react-dom":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1jYWxlbmRhci5qc3giLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1kYXkuanN4IiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZm9ybWF0LmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaGVhZGVyLmpzeCIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWhvbGlkYXlzLmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qc3giLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1pbnB1dC5qc3giLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1sdW5hci5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLW1vbnRoLmpzeCIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRlcm0uanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10aW1lLmpzeCIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9SZWFjdERhdGVwaWNrZXJQbHVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7NEJBRUgsa0JBQWtCOzs7OzJCQUNuQixpQkFBaUI7Ozs7QUFFdEMsSUFBSSxZQUFZLEdBQUcsbUJBQU0sV0FBVyxDQUFDOzs7QUFDcEMsT0FBTSxFQUFDLGtCQUFHO0FBQ1QsTUFBTSxPQUFPLEdBQUksNERBQWUsSUFBSSxDQUFDLEtBQUssQ0FBSSxDQUFBO0FBQzlDLE1BQU0sUUFBUSxHQUFHLDJEQUFjLElBQUksQ0FBQyxLQUFLLENBQUksQ0FBQTtBQUM3QyxNQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxD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LEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8s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S0FBSyxJQUFJLEdBQUcsR0FBRzs7S0FBSyxTQUFTLEVBQUMsYUFBYTtHQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0dBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7R0FBTyxHQUFHLEVBQUUsRUFBRSxDQUFBO0FBQ3pHLFNBQU87O0tBQUssU0FBUyxFQUFDLGlCQUFpQjtHQUNuQyxLQUFLO0dBQ0wsTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZO0dBQzFCLENBQUE7RUFDUjtDQUNELENBQUMsQ0FBQzs7cUJBRVksbUJBQW1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBEYXRlTW9udGggZnJvbSAnLi9kYXRlLW1vbnRoLmpzeCdcclxuaW1wb3J0IERhdGVUaW1lIGZyb20gJy4vZGF0ZS10aW1lLmpzeCc7XHJcblxyXG52YXIgRGF0ZUNhbGVuZGFyID0gUmVhY3QuY3JlYXRlQ2xhc3MoeyBcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgZGF0ZWNsZCAgPSA8RGF0ZU1vbnRoIHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0Y29uc3QgZGF0ZXRpbWUgPSA8RGF0ZVRpbWUgey4uLnRoaXMucHJvcHN9IC8+XHJcblx0XHRsZXQgcGlja2VyID0gdGhpcy5wcm9wcy50aW1lID8gZGF0ZWNsZCtkYXRldGltZTogZGF0ZWNsZDtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY2FsZW5kYXIgYW5pbWF0ZWQgaW5maW5pdGUgZmFkZUluUmlnaHRcIj5cclxuXHRcdFx0e3BpY2tlcn1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlQ2FsZW5kYXIiLCJpbXBvcnQgIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3RvTHVuYXJEYXRlLCB0b0x1bmFyRGF5fSBmcm9tICcuL2RhdGUtbHVuYXInXHJcbmltcG9ydCB7Z2V0U29sYXJUZXJtSW5kZXgsIGdldE1vbnRoU29sYXJUZXJtc30gZnJvbSAnLi9kYXRlLXRlcm0nXHJcbmltcG9ydCB7c2FsYXJIb2xpZGF5cywgbHVuYXJIb2xpZGF5c30gZnJvbScuL2RhdGUtaG9saWRheXMnXHJcbi8vcmVuZGVyIG1vbnRoIFxyXG4vL2N1cnJlbnQgbW9udGggXHJcbnZhciBEYXRlRGF5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgLypwcm9wVHlwZXM6IHtcclxuICAgICAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0sKi9cclxuICAgIC8v6I635Y+W5p+Q5aSp55qE5omA5pyJ5L+h5oGvIG0rMeaJjeaYr+aYvuekuueUqOeahOaciOWIhlxyXG4gICAgZ2V0RGF5SW5mbzogZnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCB7ZGF0ZSwgZWRhdGUsIG1pbiwgbWF4LCBzdGFydCwgZW5kLCBzZWxlY3RlZCwgc2VsZWN0aW5nLCBzdGF0dXMsIGRheUFkZG9uIH0gPSB0aGlzLnByb3BzIC8vc2VsZWN0ZWQgZGF0ZSwgcmVuZGVyIGRhdGUsIGVhY2ggZGF0ZVxyXG4gICAgICAgIGNvbnN0IFtzeSwgc20sIHNkXSA9IFtzZWxlY3RlZC5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZC5nZXRNb250aCgpLCBzZWxlY3RlZC5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW2N5LCBjbSwgY2RdID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKV1cclxuICAgICAgICBjb25zdCBbeSwgbSwgZF0gPSBbZWRhdGUuZ2V0RnVsbFllYXIoKSwgZWRhdGUuZ2V0TW9udGgoKSwgZWRhdGUuZ2V0RGF0ZSgpXVxyXG4gICAgICAgIGxldCBlZGF0YU5vID0gK2VkYXRlXHJcbiAgICAgICAgbGV0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IGVkYXRhTm8gPj0gK3N0YXJ0ICYmIGVkYXRhTm8gPD0gK2VuZFxyXG4gICAgICAgIHZhciBkYXlpbmZvID0ge1xyXG4gICAgICAgICAgICBkYXRlOiBlZGF0ZSxcclxuICAgICAgICAgICAgbHVuYXI6IHRvTHVuYXJEYXRlKGVkYXRlKSxcclxuICAgICAgICAgICAgdGVybTogZ2V0TW9udGhTb2xhclRlcm1zKHksIG0pW2RdLFxyXG4gICAgICAgICAgICBzYWxhcmZlc3Q6IHNhbGFySG9saWRheXNbdGhpcy56ZXJvKG0rMSkrdGhpcy56ZXJvKGQpXSwgIC8v6L+Z6YeM55qE5pyI5Lu955So55qE5piv6KeG5Zu+55qEXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aDogbSA9PT0gY20sXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IHkgPT09IHN5ICYmIG0gPT09IHNtICYmIGQgPT09IHNkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZihtaW4gfHwgbWF4KSBkYXlpbmZvLmRpc2FibGVkID0gIXJhbmdlKG1pbiwgbWF4KSAgICAvL+aYr+WQpuWcqOmZkOWItueahOiMg+WbtOWGhVxyXG4gICAgICAgIGlmKHN0YXJ0ICYmIGVuZCkgZGF5aW5mby5pbnJhbmdlID0gcmFuZ2Uoc3RhcnQsIGVuZCkgLy/mmK/lkKblnKjpgInmi6nnu5PmnpznmoTojIPlm7TlhoVcclxuICAgICAgICBpZihzZWxlY3RpbmcgJiYgc3RhdHVzKSBkYXlpbmZvLmluc2VsZWN0ID0gc3RhdHVzPT09J3N0YXJ0JyA/IHJhbmdlKHNlbGVjdGluZywgZW5kKSA6IHJhbmdlKHN0YXJ0LCBzZWxlY3RpbmcpXHJcblxyXG4gICAgICAgIGlmKGRheUFkZG9uKXtcclxuICAgICAgICAgICAgZGF5aW5mby5hZGRvbiA9IGRheUFkZG9uKGRheWluZm8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRheWluZm8ubHVuYXJmZXN0ID0gbHVuYXJIb2xpZGF5c1t0aGlzLnplcm8oZGF5aW5mby5sdW5hci5tb250aCkgKyB0aGlzLnplcm8oZGF5aW5mby5sdW5hci5kYXkpXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlpbmZvLCBlZGF0YU5vLCBzdGFydCwgZW5kLCAnc3RhcnRlbmQnKVxyXG4gICAgICAgIHJldHVybiBkYXlpbmZvO1xyXG4gICAgfSxcclxuICAgIHplcm8gKG4pIHtcclxuICAgICAgICByZXR1cm4gbjwxMCA/ICcwJytuIDogblxyXG4gICAgfSxcclxuXHJcbiAgICBzZXREYXRlKGRhdGVpbmZvKSB7XHJcbiAgICAgICAgaWYoZGF0ZWluZm8uZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGVpbmZvKTtcclxuICAgIH0sXHJcbiAgICBzZXRNb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyKGRhdGVpbmZvKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmdldERheUluZm8oKVxyXG4gICAgICAgIGxldCB7IGRhdGUsIHNhbGFyZmVzdCwgbHVuYXJmZXN0LCB0ZXJtLCBsdW5hciwgY3VycmVudERheSwgY3VycmVudE1vbnRoLCBkaXNhYmxlZCwgaW5yYW5nZSwgaW5zZWxlY3QsIGFkZG9ufSA9IGluZm9cclxuICAgICAgICBsZXQgZmVzdERvbSwge2Zlc3RpdmFsLCBoYXNsdW5hcn0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKGZlc3RpdmFsICYmIChzYWxhcmZlc3R8fGx1bmFyZmVzdCkpe1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtZmVzdFwiPnsoc2FsYXJmZXN0P3NhbGFyZmVzdDonJykgKyAobHVuYXJmZXN0P2x1bmFyZmVzdDonJyl9PC9zcGFuPlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1kXCI+e2RhdGUuZ2V0RGF0ZSgpfTwvc3Bhbj57YWRkb259PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGhhc2x1bmFyKXsgICAvL2hhcyBsdW5hciBhbmQgbXVzdCBoYXMgdGVybVxyXG4gICAgICAgICAgICBmZXN0RG9tID0gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWRheS1zZXRzXCI+e2Zlc3REb219PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1sdW5hclwiPnt0ZXJtID8gdGVybSA6IHRvTHVuYXJEYXkobHVuYXIuZGF5KX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLWRheVwiICsgKCFjdXJyZW50TW9udGggPyBcIiBkYXRlLW5vY3VycmVudCBcIiA6IFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChjdXJyZW50RGF5ID8gJ2RhdGUtc2VsZWN0ZWQnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoZGlzYWJsZWQgPyAnIGRhdGUtZGlzYWJsZWQnIDogXCJcIikgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGlucmFuZ2UgPyAnIGRhdGUtcmFuZ2UnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoaW5zZWxlY3QgPyAnIGRhdGUtaG92ZXInIDogXCJcIikgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5zZXREYXRlLmJpbmQodGhpcywgaW5mbykgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRNb3VzZUVudGVyLmJpbmQodGhpcywgaW5mbyl9PlxyXG4gICAgICAgICAgICB7ZmVzdERvbX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRGF5XHJcblxyXG4gICAgICAgICIsIi8qKlxyXG4gKiBkYXRlIGFwaeWwgeijhVxyXG4gKiBAYXV0aG9yIEpvZSBMaXVcclxuICogQGVtYWlsIGljYXJldS5qb2VAZ21haWwuY29tXHJcbiAqL1xyXG5mdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsIGZvcm1hdCl7XHJcbiAgaWYoIWRhdGUpIHJldHVybjsgIFxyXG4gIHZhciB3ZWVrcyA9IFsn5pelJywn5LiAJywn5LqMJywn5LiJJywn5ZubJywn5LqUJywn5YWtJ107XHJcbiAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGZvcm1hdCA9IGRhdGU7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gbmV3IERhdGUoZGF0ZSkgOiBkYXRlO1xyXG4gICAgdmFyIG1hcCA9IHtcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku70gXHJcbiAgICAgICAgXCJkXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpSBcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtiBcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGIFxyXG4gICAgICAgIFwic1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5IgXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmIFxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAvL+avq+enkiBcclxuICAgICAgICBcIldcIjogd2Vla3NbZGF0ZS5nZXREYXkoKV0gLy/lkahcclxuICAgIH07XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU1ddKSsvZywgZnVuY3Rpb24oYWxsLCB0KXtcclxuICAgICAgICB2YXIgdiA9IG1hcFt0XTtcclxuICAgICAgICBpZih2ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihhbGwubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aC0yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0ID09PSAneScpe1xyXG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIGFsbC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0OyBcclxufVxyXG5cclxubGV0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsMCwwLDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcbiAgICBkYXRlRGlmZixcclxuICAgIHRvZGF5U3RhcnRcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuY29uc3QgY2hhcnMgPSB7XHJcblx0d2Vla3NDbjpbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxyXG4gICAgd2Vla3NFbkY6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcclxuICAgIHdlZWtzRW5TOiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXHJcbiAgICBtb250aHNDbjpbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXHJcbiAgICBtb250aHNFbjogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cclxufVxyXG52YXIgZGF0ZUhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHRwcm9wVHlwZXM6IHtcclxuXHQgICAgdXBkYXRlTW9udGg6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcblx0fSxcclxuXHRnZXREYXRlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5kYXRlXHJcblx0fSxcclxuXHRjaGFuZ2VNb250aChudW0pe1xyXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVNb250aChudW0pXHJcblx0fSxcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3Qge2xhbmd9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgY24gPSBsYW5nID09PSAnY24nXHJcblx0XHRsZXQgeWVhcj10aGlzLmdldERhdGUoKS5nZXRGdWxsWWVhcigpLCBtb250aD10aGlzLmdldERhdGUoKS5nZXRNb250aCgpKzE7XHJcblxyXG5cdFx0bGV0IG1vbnRoc3RyID0gY24/KHllYXIrJyAnK21vbnRoKyfmnIgnKSA6IGNoYXJzLm1vbnRoc0VuW21vbnRoLTFdKycgJyt5ZWFyO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpdGxlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1wcmV2XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgLTEpIH0+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbVwiPnttb250aHN0cn08L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1uZXh0XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgMSkgfT48L3NwYW4+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS13dGl0bGVcIj5cclxuXHRcdFx0XHR7Y2hhcnNbY24/J3dlZWtzQ24nOid3ZWVrc0VuUyddLm1hcCgod2Vlaywga2V5KSA9PiA8c3BhbiBrZXk9e2tleX0+e3dlZWt9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGVIZWFkZXIiLCJ2YXIgc2FsYXJIb2xpZGF5cyA9IHtcclxuICAgICcwMTAxJzogJ+WFg+aXpicsXHJcbiAgICAnMDIxNCc6ICfmg4XkuronLFxyXG4gICAgJzAzMDgnOiAn5aaH5aWzJyxcclxuICAgICcwMzEyJzogJ+akjeagkScsXHJcbiAgICAnMDQwMSc6ICfmhJrkuronLFxyXG4gICAgJzA1MDEnOiAn5Yqz5YqoJyxcclxuICAgICcwNTA0JzogJ+mdkuW5tCcsXHJcbiAgICAnMDYwMSc6ICflhL/nq6UnLFxyXG4gICAgJzA3MDEnOiAn5bu65YWaJyxcclxuICAgICcwODAxJzogJ+W7uuWGmycsXHJcbiAgICAnMDkxMCc6ICfmlZnluIgnLFxyXG4gICAgJzEwMDEnOiAn5Zu95bqGJyxcclxuICAgICcxMjI0JzogJ+W5s+WuieWknCcsXHJcbiAgICAnMTIyNSc6ICflnKPor54nXHJcbn1cclxuXHJcbnZhciBsdW5hckhvbGlkYXlzID0ge1xyXG4gICAgJzAxMDEnOiAn5pil6IqCJyxcclxuICAgICcwMTE1JzogJ+WFg+WutScsXHJcbiAgICAnMDUwNSc6ICfnq6/ljYgnLFxyXG4gICAgJzA3MDcnOiAn5LiD5aSVJyxcclxuICAgICcwNzE1JzogJ+S4reWFgycsXHJcbiAgICAnMDgxNSc6ICfkuK3np4snLFxyXG4gICAgJzA5MDknOiAn6YeN6ZizJyxcclxuICAgICcxMjA4JzogJ+iFiuWFqycsXHJcbiAgICAnMTIyNCc6ICflsI/lubQnXHJcbn1cclxuXHJcbmV4cG9ydCB7c2FsYXJIb2xpZGF5cywgbHVuYXJIb2xpZGF5c31cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbnZhciBEYXRlSW5Cb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3MoeyBcclxuICBwcm9wVHlwZXM6IHtcclxuICAgIGNsYXNzZXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vY2xhc3Mgc3BsaXQgYnkgc3BhY2luZ1xyXG4gICAgb2Zmc2V0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGhpcy5wb3B1cC5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzZXNcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cClcclxuICAgIHRoaXMucmVuZGVyTGF5ZXIoKVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyTGF5ZXIoKVxyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vIHRoaXMucmVtb3ZlUGlja2VyKClcclxuICB9LFxyXG4gIHJlbW92ZVBpY2tlcihjdXJyZW50KXtcclxuICAgIHRoaXMucG9wdXAgPSBjdXJyZW50ID8gdGhpcy5wb3B1cCA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGUtcGlja2VyLXdyYXBwZXInKVswXVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wb3B1cCwgJ3BvcHVwJylcclxuICAgIGlmKHRoaXMucG9wdXApe1xyXG4gICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXApXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5wb3B1cClcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlckxheWVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgUmVhY3RET00ucmVuZGVyKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucG9wdXApXHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgey4uLnRoaXMucHJvcHN9IGNoaWxkcmVuPXtudWxsfSBzdHlsZT17dGhpcy5wcm9wcy5vZmZzZXR9Lz5cclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5Cb2R5OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxyXG5pbXBvcnQge2RhdGVGb3JtYXR9IGZyb20gJy4vZGF0ZS1mb3JtYXQnXHJcblxyXG52YXIgRGF0ZUlucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cdCBwcm9wVHlwZXM6IHtcclxuXHQgICAgLy8gZWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXHJcblx0ICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxyXG5cdCAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcblx0ICAgIG9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcblx0ICAgIG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdCAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuXHR9LFxyXG5cdGdldERlZmF1bHRQcm9wcygpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAgIHN0YXR1czogJycgIFxyXG5cdCAgICB9O1xyXG5cdH0sXHJcbi8qXHRnZXRJbml0aWFsU3RhdGUgKCkge1xyXG5cdCAgICByZXR1cm4ge1xyXG5cdCAgICAgIC8vIHZhbHVlOiAgdGhpcy5kYXRlU3RyaW5nKClcclxuXHQgICAgICAgIHN0eWxlczoge1xyXG5cdFx0ICAgICAgdG9wOiAwLFxyXG5cdFx0ICAgICAgbGVmdDogMFxyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cdH0sXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHtcclxuXHQgICAgLy8gc3R5bGVzOiBcclxuXHQgIH0pXHJcblx0fSwqL1xyXG5cdGRhdGVTdHJpbmcoKXtcclxuXHRcdGNvbnN0IHtmb3JtYXQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHNcclxuXHRcdHJldHVybiBmb3JtYXQgPyBkYXRlRm9ybWF0KHNlbGVjdGVkLCBmb3JtYXQpIDogc2VsZWN0ZWRcclxuXHR9LFxyXG5cdGhhbmRsZUJsdXIoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpXHJcblx0fSxcdFxyXG5cdGhhbmRsZUZvY3VzKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcylcclxuXHR9LFxyXG5cdGZvY3VzICgpIHtcclxuXHQgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKClcclxuXHR9LFxyXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KVxyXG5cdH0sXHJcblx0Z2V0SW5wdXQoKXtcclxuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcylcclxuXHR9LFx0XHJcblx0aGFuZGxlUG9zaXRpb24oKXtcclxuXHRcdC8vIEZpeCBmb3IgSUU4LSdzIEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHQgIGlmICgnVGV4dFJlY3RhbmdsZScgaW4gd2luZG93ICYmICEoJ3dpZHRoJyBpbiBUZXh0UmVjdGFuZ2xlLnByb3RvdHlwZSkpIHtcclxuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVGV4dFJlY3RhbmdsZS5wcm90b3R5cGUsIHtcclxuXHQgICAgICAnd2lkdGgnOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0OyB9IH0sXHJcblx0ICAgICAgJ2hlaWdodCc6IHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuYm90dG9tIC0gdGhpcy50b3A7IH0gfVxyXG5cdCAgICB9KTtcclxuXHQgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5wdXQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdH0sXHJcblx0XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHsgY3VzdG9tSW5wdXQsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BzXHJcblx0XHRyZXR1cm4gPGlucHV0IHJlZj1cImlucHV0XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZD17ZGlzYWJsZWR9IHZhbHVlPXt0aGlzLmRhdGVTdHJpbmcoKX0gb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c30gb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuXHR9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0IiwiLy8g5Yac5Y6G5pyI5Lu95L+h5oGv6KGoXHJcbnZhciBsdW5hckluZm8gPSBbXHJcbiAgICAweDA0YmQ4LDB4MDRhZTAsMHgwYTU3MCwweDA1NGQ1LDB4MGQyNjAsMHgwZDk1MCwweDE2NTU0LDB4MDU2YTAsMHgwOWFkMCwweDA1NWQyLFxyXG4gICAgMHgwNGFlMCwweDBhNWI2LDB4MGE0ZDAsMHgwZDI1MCwweDFkMjU1LDB4MGI1NDAsMHgwZDZhMCwweDBhZGEyLDB4MDk1YjAsMHgxNDk3NyxcclxuICAgIDB4MDQ5NzAsMHgwYTRiMCwweDBiNGI1LDB4MDZhNTAsMHgwNmQ0MCwweDFhYjU0LDB4MDJiNjAsMHgwOTU3MCwweDA1MmYyLDB4MDQ5NzAsXHJcbiAgICAweDA2NTY2LDB4MGQ0YTAsMHgwZWE1MCwweDA2ZTk1LDB4MDVhZDAsMHgwMmI2MCwweDE4NmUzLDB4MDkyZTAsMHgxYzhkNywweDBjOTUwLFxyXG4gICAgMHgwZDRhMCwweDFkOGE2LDB4MGI1NTAsMHgwNTZhMCwweDFhNWI0LDB4MDI1ZDAsMHgwOTJkMCwweDBkMmIyLDB4MGE5NTAsMHgwYjU1NyxcclxuICAgIDB4MDZjYTAsMHgwYjU1MCwweDE1MzU1LDB4MDRkYTAsMHgwYTVkMCwweDE0NTczLDB4MDUyZDAsMHgwYTlhOCwweDBlOTUwLDB4MDZhYTAsXHJcbiAgICAweDBhZWE2LDB4MGFiNTAsMHgwNGI2MCwweDBhYWU0LDB4MGE1NzAsMHgwNTI2MCwweDBmMjYzLDB4MGQ5NTAsMHgwNWI1NywweDA1NmEwLFxyXG4gICAgMHgwOTZkMCwweDA0ZGQ1LDB4MDRhZDAsMHgwYTRkMCwweDBkNGQ0LDB4MGQyNTAsMHgwZDU1OCwweDBiNTQwLDB4MGI1YTAsMHgxOTVhNixcclxuICAgIDB4MDk1YjAsMHgwNDliMCwweDBhOTc0LDB4MGE0YjAsMHgwYjI3YSwweDA2YTUwLDB4MDZkNDAsMHgwYWY0NiwweDBhYjYwLDB4MDk1NzAsXHJcbiAgICAweDA0YWY1LDB4MDQ5NzAsMHgwNjRiMCwweDA3NGEzLDB4MGVhNTAsMHgwNmI1OCwweDA1NWMwLDB4MGFiNjAsMHgwOTZkNSwweDA5MmUwLFxyXG4gICAgMHgwYzk2MCwweDBkOTU0LDB4MGQ0YTAsMHgwZGE1MCwweDA3NTUyLDB4MDU2YTAsMHgwYWJiNywweDAyNWQwLDB4MDkyZDAsMHgwY2FiNSxcclxuICAgIDB4MGE5NTAsMHgwYjRhMCwweDBiYWE0LDB4MGFkNTAsMHgwNTVkOSwweDA0YmEwLDB4MGE1YjAsMHgxNTE3NiwweDA1MmIwLDB4MGE5MzAsXHJcbiAgICAweDA3OTU0LDB4MDZhYTAsMHgwYWQ1MCwweDA1YjUyLDB4MDRiNjAsMHgwYTZlNiwweDBhNGUwLDB4MGQyNjAsMHgwZWE2NSwweDBkNTMwLFxyXG4gICAgMHgwNWFhMCwweDA3NmEzLDB4MDk2ZDAsMHgwNGJkNywweDA0YWQwLDB4MGE0ZDAsMHgxZDBiNiwweDBkMjUwLDB4MGQ1MjAsMHgwZGQ0NSxcclxuICAgIDB4MGI1YTAsMHgwNTZkMCwweDA1NWIyLDB4MDQ5YjAsMHgwYTU3NywweDBhNGIwLDB4MGFhNTAsMHgxYjI1NSwweDA2ZDIwLDB4MGFkYTBcclxuXTtcclxuIFxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOeahOaAu+WkqeaVsFxyXG5mdW5jdGlvbiBsdW5hclllYXJEYXlzKHkpIHtcclxuICAgIHZhciBpLCBzdW0gPSAzNDhcclxuICAgIGZvciAoaSA9IDB4ODAwMDsgaSA+IDB4ODsgaSA+Pj0gMSkgc3VtICs9IChsdW5hckluZm9beSAtIDE5MDBdICYgaSkgPyAxIDogMFxyXG4gICAgcmV0dXJuIChzdW0gKyBsZWFwRGF5cyh5KSlcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubRt5pyI55qE5oC75aSp5pWwXHJcbmZ1bmN0aW9uIGx1bmFyTW9udGhEYXlzKHksIG0pIHtcclxuICAgIHJldHVybiAoKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAoMHgxMDAwMCA+PiBtKSkgPyAzMCA6IDI5KVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOmXsOaciOeahOWkqeaVuFxyXG5mdW5jdGlvbiBsZWFwRGF5cyh5KSB7XHJcbiAgICBpZiAobGVhcE1vbnRoKHkpKSByZXR1cm4gKChsdW5hckluZm9beSAtIDE5MDBdICYgMHgxMDAwMCkgPyAzMCA6IDI5KVxyXG4gICAgZWxzZSByZXR1cm4gKDApXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm06Zew5ZOq5Liq5pyIIDEtMTIgLCDmspLpl7DkvKDlm54gMFxyXG5mdW5jdGlvbiBsZWFwTW9udGgoeSkge1xyXG4gICAgcmV0dXJuIChsdW5hckluZm9beSAtIDE5MDBdICYgMHhmKVxyXG59XHJcblxyXG5cclxuLy/lhazljobovazlhpzljoZcclxuZnVuY3Rpb24gdG9MdW5hckRhdGUob2JqRGF0ZSkge1xyXG4gICAgdmFyIGksIGxlYXAgPSAwLFxyXG4gICAgICAgIHRlbXAgPSAwO1xyXG4gICAgdmFyIGJhc2VEYXRlID0gbmV3IERhdGUoMTkwMCwgMCwgMzEpO1xyXG4gICAgdmFyIG9mZnNldCA9IChvYmpEYXRlIC0gYmFzZURhdGUpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgcmVzdWx0LmRheUN5bCA9IG9mZnNldCArIDQwO1xyXG4gICAgcmVzdWx0Lm1vbkN5bCA9IDE0O1xyXG5cclxuICAgIGZvciAoaSA9IDE5MDA7IGkgPCAyMDUwICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIHRlbXAgPSBsdW5hclllYXJEYXlzKGkpO1xyXG4gICAgICAgIG9mZnNldCAtPSB0ZW1wO1xyXG4gICAgICAgIHJlc3VsdC5tb25DeWwgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgKz0gdGVtcDtcclxuICAgICAgICBpLS07XHJcbiAgICAgICAgcmVzdWx0Lm1vbkN5bCAtPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQueWVhciA9IGk7XHJcbiAgICByZXN1bHQueWVhckN5bCA9IGkgLSAxODY0O1xyXG5cclxuICAgIGxlYXAgPSBsZWFwTW9udGgoaSk7IC8v6Zew5ZOq5Liq5pyIXHJcbiAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChpID0gMTsgaSA8IDEzICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIC8v6Zew5pyIXHJcbiAgICAgICAgaWYgKGxlYXAgPiAwICYmIGkgPT0gKGxlYXAgKyAxKSAmJiByZXN1bHQuaXNMZWFwID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlbXAgPSBsZWFwRGF5cyhyZXN1bHQueWVhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGx1bmFyTW9udGhEYXlzKHJlc3VsdC55ZWFyLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6Kej6Zmk6Zew5pyIXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXAgPT0gdHJ1ZSAmJiBpID09IChsZWFwICsgMSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0IC09IHRlbXBcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXN1bHQubW9uQ3lsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPT0gMCAmJiBsZWFwID4gMCAmJiBpID09IGxlYXAgKyAxKVxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAtLXJlc3VsdC5tb25DeWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ICs9IHRlbXA7XHJcbiAgICAgICAgLS1pO1xyXG4gICAgICAgIC0tcmVzdWx0Lm1vbkN5bDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQubW9udGggPSBpO1xyXG4gICAgcmVzdWx0LmRheSA9IG9mZnNldCArIDE7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL+WGnOWOhuaVsOWtl+i9rOWtl+esplxyXG5mdW5jdGlvbiB0b0x1bmFyRGF5IChkKXtcclxuICAgIHZhciBsdW5hckRheSA9IFsn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn5Y2BJywgJ+WNgeS4gCcsICfljYHkuownXTtcclxuICAgIHZhciBsdW5hclRlZW4gPSBbJ+WInScsICfljYEnLCAn5bu/JywgJ+S4iSddO1xyXG4gICAgdmFyIGRzdHIgPSBkKycnLFxyXG4gICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMF0sIFxyXG4gICAgICAgIHJpZ2h0TnVtID0gZHN0ci5sZW5ndGggPCAyID8gJycgOiBkc3RyLnN1YnN0cmluZygxKSxcclxuICAgICAgICByaWdodERlY28gPSByaWdodE51bT09PScwJyA/ICfljYEnIDogbHVuYXJEYXlbTnVtYmVyKHJpZ2h0TnVtKS0xXTtcclxuICAgIGlmKGQgPiAxMCl7XHJcbiAgICAgICAgdGVlbiA9IGx1bmFyVGVlblsxXTtcclxuICAgICAgICBpZihkPj0yMCl7XHJcbiAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMl07XHJcbiAgICAgICAgICAgIGlmKGQ+PTMwKXtcclxuICAgICAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIHRlZW4gKyAoZHN0ci5sZW5ndGggPCAyID8gbHVuYXJEYXlbZC0xXSA6IHJpZ2h0RGVjbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtsdW5hclllYXJEYXlzLCBsdW5hck1vbnRoRGF5cywgbGVhcERheXMsIGxlYXBNb250aCwgdG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlRGF5IGZyb20gJy4vZGF0ZS1kYXkuanN4J1xyXG5cclxudmFyIERhdGVNb250aCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHQvKnByb3BUeXBlczoge1xyXG5cdFx0ZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG5cdFx0Zm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcblx0fSwqL1xyXG5cdGdldEluaXRpYWxTdGF0ZSgpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgXHRzZWxlY3Rpbmc6IG51bGxcclxuXHQgICAgfVxyXG5cdH0sXHJcblx0Z2V0TW9udGhJbmZvICgpIHtcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRlLCAnZGF0ZW1vbnRoJylcclxuXHRcdGxldCB5ID0gdGhpcy5wcm9wcy5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0ICAgIGxldCBtID0gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCk7XHJcblx0XHR2YXIgZGF0ZWRheSwgbGluZT0wLCB0ZW1wPVtdLCBpc2ZpbGwgPSB0aGlzLnByb3BzLmlzZmlsbDtcclxuXHRcdC8vIGNvbnNvbGUudGltZSgn6K6h566X5LiA5pyI5omA55So5pe26Ze0JylcclxuICAgICAgICB2YXIgcHJldk1EYXkgPSBuZXcgRGF0ZSh5LCBtLCAwKSwgcHJldk1EYXlMYXN0ID0gcHJldk1EYXkuZ2V0RGF0ZSgpOyAgICAvL3ByZXYgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgbmV4dE1EYXkgPSBuZXcgRGF0ZSh5LCBtKzEsIDApLCBjdXJyTURheUxhc3QgPSBuZXh0TURheS5nZXREYXRlKCk7ICAvL2N1cnJlbnQgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgY3Vyck1EYXkgPSBuZXcgRGF0ZSh5LCBtKzAsIDEpLCBjdXJyTURheUZpcnN0PSBjdXJyTURheS5nZXREYXkoKTsgICAvL2N1cnJlbnQgTW9udGggRmlyc3QgRGF5IFdlZWtcclxuICAgICAgIFxyXG4gICAgICAgdGVtcFtsaW5lXT1bXTsgXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNMaW5lKGRhdGUpe1xyXG5cdCAgICBcdHZhciB3ZWVrbm8gPSBkYXRlLmdldERheSgpOyAgIC8vd2Vla1xyXG5cdCAgICAgICAgaWYod2Vla25vID09IDApIHRlbXBbbGluZV09W11cclxuXHQgICAgICAgIHRlbXBbbGluZV0ucHVzaChkYXRlKTtcclxuXHQgICAgICAgIHdlZWtubyA9PSA2ICYmIGxpbmUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2cocHJldk1EYXksIGN1cnJNRGF5LCBwcmV2TURheUxhc3QsIGN1cnJNRGF5TGFzdCwgY3Vyck1EYXlGaXJzdClcclxuICAgICAgIGlmKGN1cnJNRGF5Rmlyc3QgJiYgaXNmaWxsKXsgLy9wcmV2IE1vbnRoIGNhbGVuZGFyIHJvdyBmaXJzdFxyXG4gICAgICAgICAgICB2YXIgayA9IHByZXZNRGF5TGFzdCAtIGN1cnJNRGF5Rmlyc3QgKyAxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1cnJNRGF5Rmlyc3Q7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZWRheSA9IG5ldyBEYXRlKHksIG0tMSwgaylcclxuICAgICAgICAgICAgICAgIFx0dGVtcFtsaW5lXS5wdXNoKGRhdGVkYXkpXHJcbiAgICAgICAgICAgICAgICBrKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmb3IodmFyIGk9MTsgaSA8PSBjdXJyTURheUxhc3Q7IGkrKykgeyAvL2N1cnJlbnQgbW9udGhcclxuICAgICAgICBcdGRhdGVkYXkgPSBuZXcgRGF0ZSh5LCBtLCBpKVxyXG4gICAgICAgIFx0Y2FsY0xpbmUoZGF0ZWRheSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaXNmaWxsKXtcclxuXHQgICAgICAgIGZvciAoaj0xOyBqIDwgMTI7IGorKykge1xyXG5cdCAgICAgICAgXHRpZihsaW5lPDYpe1xyXG5cdCAgICAgICAgXHRcdC8vIGNvbnNvbGUubG9nKGxpbmUsICdsaW5lJylcclxuXHRcdCAgICAgICAgICAgIGRhdGVkYXkgPSAgbmV3IERhdGUoeSwgbSsxLCBqKTtcclxuXHRcdCAgICAgICAgICAgIGNhbGNMaW5lKGRhdGVkYXkpXHJcblx0ICAgICAgIFx0XHR9XHJcblx0ICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS50aW1lRW5kKCforqHnrpfkuIDmnIjmiYDnlKjml7bpl7QnKVxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG5cdH0sXHJcblxyXG5cdHdlZWtzKG1vbnRocyl7XHJcblx0XHR2YXIgd2Vla3MgPSBbXSwgdGhhdCA9IHRoaXM7XHJcblx0XHRtb250aHMubWFwKGZ1bmN0aW9uKHdlZWssIHdrZXkpIHtcclxuXHRcdFx0d2Vla3MucHVzaCg8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLXdlZWsgZGF0ZS13ZWVrLVwiK3drZXl9IGtleT17d2tleX0+XHJcblx0XHRcdFx0e3RoYXQuZGF5cyh3ZWVrKX1cclxuXHRcdFx0PC9kaXY+KVxyXG5cdFx0fSkgXHJcblx0XHRyZXR1cm4gd2Vla3NcclxuXHR9LFxyXG5cdGRheXMod2Vlayl7XHJcblx0XHR2YXIgZGF5cyA9IFtdLCB0aGF0ID0gdGhpcztcclxuXHRcdHdlZWsubWFwKGZ1bmN0aW9uKGRheSwgZGtleSl7XHJcblx0XHRcdGRheXMucHVzaCggPERhdGVEYXkgey4uLnRoYXQucHJvcHN9IG9uTW91c2VFbnRlcj17dGhhdC5vbk1vdXNlRW50ZXJ9IHNlbGVjdGluZz17dGhhdC5zdGF0ZS5zZWxlY3Rpbmd9IGVkYXRlPXtkYXl9IGtleT17ZGtleX0vPiApIFxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBkYXlzXHJcblx0fSxcclxuXHRvbk1vdXNlRW50ZXIoZGF0ZWluZm8pe1xyXG5cdFx0bGV0IHtzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmKHN0YXJ0ICYmIGVuZCkgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW5nOiBkYXRlaW5mby5kYXRlfSlcclxuXHR9LFxyXG5cdG9uTW91c2VMZWF2ZSgpe1xyXG5cdFx0bGV0IHtzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmKHN0YXJ0ICYmIGVuZCkgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW5nOiBudWxsfSlcclxuXHR9LFxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygncmVuZGVyIHRpbWVzJylcclxuXHRcdGNvbnN0IG1vbnRocyA9IHRoaXMuZ2V0TW9udGhJbmZvKCksIHRoYXQ9dGhpcztcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLW1vbnRoXCIgKyAodGhhdC5zdGF0ZS5zZWxlY3RpbmcgPyBcIiBkYXRlLXNlbGVjdGluZyBcIiA6IFwiIFwiKX0gb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZX0+IFxyXG5cdFx0XHRcdHt0aGlzLndlZWtzKG1vbnRocyl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVNb250aCIsIi8vIOWGnOWOhuS6jOWNgeWbm+iKguawlFxyXG52YXIgY2FjaGUgPSB7fTtcclxudmFyIGNhY2hla2V5cyA9IFtdO1xyXG52YXIgc29sYXJUZXJtID0gWyflsI/lr5InLCAn5aSn5a+SJywgJ+eri+aYpScsICfpm6jmsLQnLCAn5oOK6JuwJywgJ+aYpeWIhicsICfmuIXmmI4nLCAn6LC36ZuoJywgJ+eri+WkjycsICflsI/mu6EnLCAn6IqS56eNJywgJ+Wkj+iHsycsICflsI/mmpEnLCAn5aSn5pqRJywgJ+eri+eniycsICflpITmmpEnLCAn55m96ZyyJywgJ+eni+WIhicsICflr5LpnLInLCAn6Zyc6ZmNJywgJ+eri+WGrCcsICflsI/pm6onLCAn5aSn6ZuqJywgJ+WGrOiHsyddO1xyXG52YXIgc1Rlcm1JbmZvID0gWzAsIDIxMjA4LCA0MjQ2NywgNjM4MzYsIDg1MzM3LCAxMDcwMTQsIDEyODg2NywgMTUwOTIxLCAxNzMxNDksIDE5NTU1MSwgMjE4MDcyLCAyNDA2OTMsIDI2MzM0MywgMjg1OTg5LCAzMDg1NjMsIDMzMTAzMywgMzUzMzUwLCAzNzU0OTQsIDM5NzQ0NywgNDE5MjEwLCA0NDA3OTUsIDQ2MjIyNCwgNDgzNTMyLCA1MDQ3NThdO1xyXG4vLyDov5Tlm57mn5DlubTnmoTnrKxu5Liq6IqC5rCU5Li65Yeg5pelKOS7jjDlsI/lr5LotbfnrpcpXHJcbnZhciBnZXRTb2xhclRlcm1JbmRleCA9IGZ1bmN0aW9uKHllYXIsIGluZGV4KSB7XHJcbiAgICB2YXIgb2ZmRGF0ZSA9IG5ldyBEYXRlKCgzMTU1NjkyNTk3NC43ICogKHllYXIgLSAxOTAwKSArIHNUZXJtSW5mb1tpbmRleF0gKiA2MDAwMCkgKyBEYXRlLlVUQygxOTAwLCAwLCA2LCAyLCA1KSk7XHJcbiAgICByZXR1cm4gb2ZmRGF0ZS5nZXRVVENEYXRlKCk7XHJcbn07XHJcblxyXG4vLyDov5Tlm57or6XmnIjnmoToioLmsJTkv6Hmga9cclxudmFyIGdldE1vbnRoU29sYXJUZXJtcyA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XHJcbiAgICBpZiAoeWVhciBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBtb250aCA9IHllYXIuZ2V0TW9udGgoKTtcclxuICAgICAgICB5ZWFyID0geWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGtleSA9ICcnICsgeWVhciArIG1vbnRoO1xyXG4gICAgaWYgKGtleSBpbiBjYWNoZSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFyIHJldCA9IGNhY2hlW2tleV0gPSB7fTtcclxuICAgIHZhciBpbmRleDtcclxuICAgIGluZGV4ID0gZ2V0U29sYXJUZXJtSW5kZXgoeWVhciAtIDE5MDAsIG1vbnRoICogMik7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDJdO1xyXG4gICAgaW5kZXggPSBnZXRTb2xhclRlcm1JbmRleCh5ZWFyIC0gMTkwMCwgbW9udGggKiAyICsgMSk7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDIgKyAxXTtcclxuICAgIGNhY2hla2V5cy5wdXNoKGtleSk7XHJcbiAgICBpZiAoY2FjaGVrZXlzLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgZGVsZXRlIGNhY2hlW2NhY2hla2V5cy5zaGlmdCgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0U29sYXJUZXJtSW5kZXgsIGdldE1vbnRoU29sYXJUZXJtc30iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG52YXIgRGF0ZVRpbWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7IFxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cclxuXHRcdFx0e25ldyBEYXRlKCkuZ2V0SG91cnMoKSsgJzonICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCBEYXRlSGVhZGVyIGZyb20gJy4vZGF0ZS1oZWFkZXIuanN4J1xuaW1wb3J0IERhdGVDYWxlbmRhciBmcm9tICcuL2RhdGUtY2FsZW5kYXIuanN4J1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuL2RhdGUtaW5wdXQuanN4J1xuaW1wb3J0IERhdGVJbkJvZHkgZnJvbSAnLi9kYXRlLWluLWJvZHkuanN4J1xuXG52YXIgbm93ID0gbmV3IERhdGUoKVxudmFyIFJlYWN0RGF0ZXBpY2tlclBsdXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdHByb3BUeXBlczoge1xuXHRcdHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0Ly9kZWZhdWx0IGRhdGVcblx0XHRmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAgICAvL2Zvcm1hdCBkYXRlXG5cdFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcdCAgICAvL3Nob3cgcHJlZml4LXByZXYgcHJlZml4LW5leHQgbW9udGggXG5cdFx0bW9udGhzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFx0XHQvL3Nob3cgbXVsdGktcGFuZXMgYnkgbW9udGhzXG5cblx0XHR0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgICAvL3Nob3cgdGltZSBzZWxlY3QgQHRvZG9cblxuXHRcdG1pbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWluXG5cdFx0bWF4OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtYXhcblxuXHRcdHN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5cdFx0ZW5kOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5cblx0XHRjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAvLyBjdXN0b20gY2xhc3Ncblx0XHRkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL2lucHV0IGNhbid0IGNoYW5nZVxuXHRcdGF1dG9IaWRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vc2VsZWN0ZWQgYXV0byBoaWRlXG5cdFx0aW5saW5lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgLy9pbmxpbmVcblx0XHRsYW5nOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydjbicsICdlbiddKSxcblxuXHRcdGZlc3RpdmFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgZmVzdGl2YWxcblx0XHRoYXNsdW5hcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGx1bmFyXG5cblx0XHRvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxuXHRcdG9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcblx0XHRvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZGF5aW5mbywgcGlja2VyKVxuXHRcdGRheUFkZG9uOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyBcdFx0Ly9hcmdzIChkYXlpbmZvKVxuXHRcdC8vZGF5QWRkb24sIGFkZCBkYXRhIGZvciBkYXksIGFuZCBuZWVkIHRvIHJldHVybiBkb20sIFxuXHRcdC8vdGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIGluc2VydCB0byBkYXkgZWFjaCBlbGVtZW50LiBwbHMgc2VlIGxhc3QgZGVtb1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGUoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgXHRkYXRlOiBub3csXHRcdC8vcmVuZGVyIG1vbnRoIGJ5IGRhdGVcblx0ICAgICAgICBzaG93OiB0aGlzLnByb3BzLmlubGluZSA/IHRydWUgOiBmYWxzZSxcblx0ICAgICAgICBmb2N1czogZmFsc2UsXHQvL2ZvY3VzIHN0YXRlXG5cdCAgICAgICAgb2Zmc2V0OiB7fSxcdFx0Ly9kYXRlcGlja2VyIHBvc2l0aW9uXG5cdCAgICBcdHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkLFxuXHQgICAgICAgIHN0YXJ0OiB0aGlzLnByb3BzLnN0YXJ0LFxuXHRcdFx0ZW5kOiB0aGlzLnByb3BzLmVuZCxcblx0ICAgICAgIFx0Ly9zdGF0dXM6IHVuZGVmaW5lZCwgXHQvL1JlYWN0LlByb3BUeXBlcy5vbmVPZihbJ3N0YXJ0JywgJ2VuZCddKSBcblx0ICAgICAgIFx0XHRcdFx0XHQvLydzdGFydCcgYW5kICdlbmQnIHVzZSBieSBiaS1kYXRlcGlja2VyIHJhbmdlIHZhbHVlLCBhbmQgdW5kZWZpbmVkIHVzZSBieSBzaW5nbGUgZGF0ZXBpY2tlciBzaW5nbGUgZGF0ZVxuXHQgICAgfTtcblx0fSxcblxuXHRnZXREZWZhdWx0UHJvcHMoKSB7XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIGlzZmlsbDogZmFsc2UsXG5cdCAgICAgICAgZm9ybWF0OiAneXl5eS1NTS1kZCcsXG5cdCAgICAgICAgc2VsZWN0ZWQ6IG5vdyxcblx0ICAgICAgICBtb250aHM6IDEsXG5cdCAgICAgICAgbGFuZzogJ2VuJ1xuXHQgICAgfTtcblx0fSxcblx0b25Gb2N1cyhldmVudCwgaW5wdXQpe1xuXHRcdGxldCB7c2hvdywgZm9jdXMsIHNlbGVjdGVkfSA9IHRoaXMuc3RhdGVcblx0XHRpZihzaG93ICYmICFmb2N1cyl7XG5cdFx0XHR0aGlzLnN0YXRlLmZvY3VzID0gdHJ1ZS8vanVzdCBjaGFuZ2Ugc3RhdGUgbm90IHRyaWdnZXIgcmVuZGVyXG5cdFx0XHRyZXR1cm5cblx0XHR9IFxuXHRcdGxldCBzdGF0dXMgPSBpbnB1dC5wcm9wcy5zdGF0dXM7IHNlbGVjdGVkID0gc3RhdHVzP3RoaXMuc3RhdGVbc3RhdHVzXTpzZWxlY3RlZDtcblx0XHRsZXQge2xlZnQsIHRvcCwgaGVpZ2h0fSA9IGlucHV0LmhhbmRsZVBvc2l0aW9uKCk7ICBcblx0XHRcdHRvcCArPSAoaGVpZ2h0KyAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkpXG5cdFx0bGV0IHtvbkZvY3VzfSA9IHRoaXMucHJvcHNcblx0XHRcblx0XHR0aGlzLnNob3codHJ1ZSwge2xlZnQsIHRvcH0sIHRydWUsIHN0YXR1cylcblx0XHRvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQsIHRoaXMpXG5cdFx0aWYoc3RhdHVzKSB0aGlzLnNldFN0YXRlKHtkYXRlOiBzZWxlY3RlZH0pXG5cdH0sXG5cdG9uQmx1cihldmVudCwgaW5wdXQpe1xuXHRcdGNvbnN0IHtzaG93LCBmb2N1c30gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3Qge2lubGluZSwgb25CbHVyfSA9IHRoaXMucHJvcHNcblx0XHRpZighc2hvdykgcmV0dXJuO1xuXHRcdGlmICghZm9jdXMpIHtcblx0ICAgICAgXHRpbnB1dC5mb2N1cygpXHQvL3doZW4gc2hvdyAmJiAhZm9jdXMsIHRyaWdnZXIgZm9jdXMgICBcblx0ICAgIH0gZWxzZSBpZighaW5saW5lKSB7XG5cdCAgICAgIG9uQmx1ciAmJiBvbkJsdXIoZXZlbnQsIHRoaXMpXG5cdCAgICAgIGZvY3VzICYmIHRoaXMucmVtb3ZlUGlja2VyKClcblx0ICAgIH0gXG5cdH0sXG5cdHNob3cgKHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1cykge1xuXHQgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1c30pXG5cdH0sXG5cdHVwZGF0ZU1vbnRoKG51bSl7XG5cdFx0Y29uc3Qge2RhdGV9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IGNkYXRlID0gdGhpcy5udW1Nb250aChkYXRlLCBudW0pXG5cdFx0dGhpcy51cGRhdGVEYXRlKHtkYXRlOiBjZGF0ZX0sIHRydWUpXG5cdH0sXG5cdG51bU1vbnRoKGRhdGUsIG51bSl7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgbnVtLCBkYXRlLmdldERhdGUoKSlcblx0fSxcblx0dXBkYXRlRGF5KGRhdGVpbmZvKXtcblx0XHR0aGlzLnVwZGF0ZURhdGUoZGF0ZWluZm8pXG5cdH0sXG5cdHVwZGF0ZURhdGUoZGF0ZWluZm8sIGlzTW9udGgpe1xuXHRcdGxldCB7b25DaGFuZ2UsIGF1dG9IaWRlfSA9IHRoaXMucHJvcHNcblx0XHRsZXQge3N0YXR1cz0nc2VsZWN0ZWQnLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGdldFNlbGVjdGVkID0gIWlzTW9udGggPyBkYXRlaW5mby5kYXRlIDogdGhpcy5zdGF0ZVtzdGF0dXNdXG5cdFx0Ly8gbGV0IHRlbXAgPSB7fTsgdGVtcFtzdGF0dXNdID0gZ2V0U2VsZWN0ZWRcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlLCBkYXRlOiBkYXRlaW5mby5kYXRlLCBzZWxlY3RlZDogZ2V0U2VsZWN0ZWQsIGZvY3VzOiBmYWxzZSwgW3N0YXR1c106IGdldFNlbGVjdGVkfSlcblx0XHRvbkNoYW5nZSAmJiBvbkNoYW5nZShkYXRlaW5mbywgdGhpcylcblx0XHQhaXNNb250aCAmJiBhdXRvSGlkZSAmJiB0aGlzLnJlbW92ZVBpY2tlcigpXG5cdH0sXG5cdHJlbW92ZVBpY2tlcigpe1xuXHRcdHRoaXMuc2hvdyhmYWxzZSlcblx0XHR0aGlzLnJlZnMuaW5zRGF0ZUluQm9keSAmJiB0aGlzLnJlZnMuaW5zRGF0ZUluQm9keS5yZW1vdmVQaWNrZXIodHJ1ZSlcblx0fSxcblxuICAgIHBpY2tlcnMoc3RhdHVzKSB7XG5cdFx0bGV0ICRwaWNrZXJzID0gW10sIG9mZnNldHMgPSBbXSwgZGgsIGRjLCBpZGF0ZVxuXHRcdGxldCB7ZGF0ZSwgIHN0YXJ0LCBlbmQsIG9mZnNldH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IHtpbmxpbmUsIG1vbnRocywgbGFuZywgaGFzbHVuYXIsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHNlbGVjdGVkID0gdGhpcy5zdGF0ZVtzdGF0dXM/c3RhdHVzOidzZWxlY3RlZCddXG5cdFx0bGV0IGNsYXNzZXMgPSBgZGF0ZS1waWNrZXIgZGF0ZS1waWNrZXItJHtpbmxpbmU/J2lubGluZSc6J2Jsb2NrJ30gJHtjbGFzc05hbWU/Y2xhc3NOYW1lOicnfSAke2hhc2x1bmFyPydkYXRlLXBpY2tlci1sdW5hcic6Jyd9YFxuXHRcdGZvcih2YXIgaT0wOyBpPG1vbnRoczsgaSsrKXtcblx0XHRcdG9mZnNldHMucHVzaCh7bGVmdDogaSoyMTUrb2Zmc2V0LmxlZnQsIHRvcDogb2Zmc2V0LnRvcH0pXG5cdFx0XHRpZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgaSlcblx0XHRcdGRoID0gPERhdGVIZWFkZXIgZGF0ZT17aWRhdGV9IGxhbmc9e2hhc2x1bmFyPydjbic6bGFuZ30gdXBkYXRlTW9udGg9e3RoaXMudXBkYXRlTW9udGh9Lz5cblx0XHRcdGRjID0gPERhdGVDYWxlbmRhciB7Li4udGhpcy5wcm9wc30gZGF0ZT17aWRhdGV9IHN0YXR1cz17c3RhdHVzfSBzdGFydD17c3RhcnR9IGVuZD17ZW5kfSBzZWxlY3RlZD17c2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZURheX0vPlxuXHRcdFx0IFxuXHRcdFx0JHBpY2tlcnMucHVzaChpbmxpbmUgP1xuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30ga2V5PXtpfT57ZGh9e2RjfTwvZGl2PiA6XG5cdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17b2Zmc2V0c1tpXX0ga2V5PXtpfT57ZGh9e2RjfTwvZGl2Pilcblx0XHR9XG5cdFx0cmV0dXJuICRwaWNrZXJzXG4gICAgfSxcblx0cmVuZGVyICgpIHtcblx0XHRsZXQge3Nob3csIHNlbGVjdGVkLCBzdGFydCwgZW5kLCBzdGF0dXN9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCB7Zm9ybWF0LCBpbmxpbmUsIG1vbnRocywgZGlzYWJsZWR9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBwaWNrZXIsIHBpY2tlcnMsIHBpY2tlckluQm9keVxuXHRcdGxldCBkaSA9ICh2YWwsIHN0YXQpID0+IDxEYXRlSW5wdXQgc2VsZWN0ZWQ9eyF2YWwgPyBzZWxlY3RlZCA6IHZhbH0gZm9ybWF0PXtmb3JtYXR9IGRpc2FibGVkPXtkaXNhYmxlZH1cblx0XHRcdFx0XHRcdFx0ICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBzdGF0dXM9e3N0YXR9Lz5cblx0XHRpZihzaG93KXtcblx0XHRcdHBpY2tlcnMgPSB0aGlzLnBpY2tlcnMoc3RhdHVzKVxuXHRcdFx0cGlja2VyID0gPGRpdiBjbGFzc05hbWU9e21vbnRocz4xPydkYXRlLW11bHRpIGNsZWFyZml4JzonJ30+e3BpY2tlcnN9PC9kaXY+XG5cdFx0XHRwaWNrZXJJbkJvZHkgPSA8RGF0ZUluQm9keSBjbGFzc2VzPVwiZGF0ZS1waWNrZXItd3JhcHBlclwiIHJlZj1cImluc0RhdGVJbkJvZHlcIj57cGlja2VyfTwvRGF0ZUluQm9keT5cblx0XHR9XG5cdFx0bGV0IGRpZG9tID0gc3RhcnQgJiYgZW5kID8gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWlucHV0c1wiPntkaShzdGFydCwgJ3N0YXJ0Jyl9e2RpKGVuZCwgJ2VuZCcpfTwvZGl2PiA6IGRpKClcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNvbXBvbmVudHNcIj5cblx0XHRcdFx0XHR7ZGlkb219XG5cdFx0XHRcdFx0e2lubGluZSA/IHBpY2tlciA6IHBpY2tlckluQm9keX1cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdERhdGVwaWNrZXJQbHVzO1xuIl19
