require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./date-month.js":9,"./date-time.js":11,"react":undefined}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

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

},{"react":undefined,"react-dom":undefined}],7:[function(require,module,exports){
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

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

},{"./date-day.js":2,"react":undefined}],10:[function(require,module,exports){
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

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

},{"./date-day.js":2,"react":undefined}],"react-datepicker-plus":[function(require,module,exports){
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

},{"./date-calendar.js":1,"./date-format.js":3,"./date-header.js":4,"./date-in-body.js":6,"./date-input.js":7,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtY2FsZW5kYXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZGF5LmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWZvcm1hdC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1oZWFkZXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaG9saWRheXMuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1pbnB1dC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1sdW5hci5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1tb250aC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10ZXJtLmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRpbWUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL1JlYWN0RGF0ZXBpY2tlclBsdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzJCQUVsQixpQkFBaUI7Ozs7MEJBQ2xCLGdCQUFnQjs7OztJQUMvQixZQUFZO1dBQVosWUFBWTs7QUFDTixVQUROLFlBQVksQ0FDTCxLQUFLLEVBQUU7d0JBRGQsWUFBWTs7QUFFViw2QkFGRixZQUFZ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QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQ2xGLENBQUM7OztBQUdGLFNBQVMsYUFBYSxDQUFDLENBQUMsRUFBRTtBQUN0QixRQUFJLENBQUM7UUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFBO0FBQ2hCLFNBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLEFBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUMzRSxXQUFRLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDN0I7OztBQUdELFNBQVMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7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QUc7O09BQUssU0FBUyxFQUFFLENBQUMsTUFBTSxHQUFDLENBQUMsR0FBQyxxQkFBcUIsR0FBQyxhQUFhLENBQUEsR0FBSSxjQUFjLEFBQUM7S0FBRSxPQUFPO0tBQU8sQ0FBQTtBQUN6RyxnQkFBWSxHQUFHOztPQUFhLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxHQUFHLEVBQUMsZUFBZTtLQUFFLE1BQU07S0FBYyxDQUFBO0lBQzNJO0FBQ0QsT0FBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEdBQUcsR0FBRzs7TUFBSyxTQUFTLEVBQUMsYUFBYTtJQUFFLEtBQUssS0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztJQUFFLEdBQUcsS0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUFPLEdBQUcsRUFBRSxFQUFFLENBQUE7QUFDM0ksVUFBTzs7TUFBSyxTQUFTLEVBQUUsa0JBQWtCLEdBQUUsT0FBTyxBQUFDO0lBQy9DLEtBQUs7SUFDTCxNQUFNLEdBQUcsTUFBTSxHQUFHLFlBQVk7SUFDMUIsQ0FBQTtHQUNSOzs7UUE1TUksbUJBQW1COzs7QUE2TXhCLENBQUM7O0FBRUYsbUJBQW1CLENBQUMsWUFBWSxHQUFHO0FBQ2xDLE9BQU0sRUFBRSxLQUFLO0FBQ2IsT0FBTSxFQUFFLFlBQVk7QUFDcEIsU0FBUSxxQkFBTztBQUNmLE9BQU0sRUFBRSxDQUFDO0FBQ1QsS0FBSSxFQUFFLElBQUk7Q0FDVixDQUFBOztxQkFFYyxtQkFBbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IERhdGVNb250aCBmcm9tICcuL2RhdGUtbW9udGguanMnXHJcbmltcG9ydCBEYXRlVGltZSBmcm9tICcuL2RhdGUtdGltZS5qcyc7XHJcbmNsYXNzIERhdGVDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IGRhdGVjbGQgID0gPERhdGVNb250aCB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdGNvbnN0IGRhdGV0aW1lID0gPERhdGVUaW1lIHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0bGV0IHBpY2tlciA9IHRoaXMucHJvcHMudGltZSA/IGRhdGVjbGQrZGF0ZXRpbWU6IGRhdGVjbGQ7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNhbGVuZGFyIGFuaW1hdGVkIGluZmluaXRlIGZhZGVJblJpZ2h0XCI+XHJcblx0XHRcdHtwaWNrZXJ9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlQ2FsZW5kYXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9IGZyb20gJy4vZGF0ZS1sdW5hcidcclxuaW1wb3J0IHtnZXRTb2xhclRlcm1JbmRleCwgZ2V0TW9udGhTb2xhclRlcm1zfSBmcm9tICcuL2RhdGUtdGVybSdcclxuaW1wb3J0IHtzYWxhckhvbGlkYXlzLCBsdW5hckhvbGlkYXlzfSBmcm9tJy4vZGF0ZS1ob2xpZGF5cydcclxuLy9yZW5kZXIgbW9udGhcclxuLy9jdXJyZW50IG1vbnRoXHJcbmNsYXNzIERhdGVEYXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLypwcm9wVHlwZXM6IHtcclxuICAgICAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0qL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5zZWxlY3RlZCwgcHJvcHMuc2VsZWN0ZWQsICdzZWxlY3RlZCcpXHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluafkOWkqeeahOaJgOacieS/oeaBryBtKzHmiY3mmK/mmL7npLrnlKjnmoTmnIjliIZcclxuICAgIGdldERheUluZm8oKXtcclxuICAgICAgICB2YXIge2RhdGUsIGVkYXRlLCBtaW4sIG1heCwgc3RhcnQsIGVuZCwgc2VsZWN0ZWQsIHNlbGVjdGluZywgc3RhdHVzLCBkYXlBZGRvbiB9ID0gdGhpcy5wcm9wcyAvL3NlbGVjdGVkIGRhdGUsIHJlbmRlciBkYXRlLCBlYWNoIGRhdGVcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkIHx8IG5ldyBEYXRlKClcclxuICAgICAgICAvLyBzZWxlY3RlZCA9IHNlbGVjdGVkIGluc3RhbmNlb2YgRGF0ZSA/IHNlbGVjdGVkIDogbmV3IERhdGUoc2VsZWN0ZWQpXHJcbiAgICAgICAgLy8gZGF0ZSA9IGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpXHJcbiAgICAgICAgLy8gZWRhdGUgPSBlZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBlZGF0ZSA6IG5ldyBEYXRlKGVkYXRlKVxyXG4gICAgICAgIGNvbnN0IFtzeSwgc20sIHNkXSA9IFtzZWxlY3RlZC5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZC5nZXRNb250aCgpLCBzZWxlY3RlZC5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW2N5LCBjbSwgY2RdID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKV1cclxuXHRcdGNvbnN0IFt5LCBtLCBkXSA9IFtlZGF0ZS5nZXRGdWxsWWVhcigpLCBlZGF0ZS5nZXRNb250aCgpLCBlZGF0ZS5nZXREYXRlKCldXHJcblx0XHRsZXQgdG9ObyA9IHggPT4geCA/ICt4IDogMFxyXG4gICAgICAgIGxldCBlZGF0ZU5vID0gdG9ObyhlZGF0ZSksIG1pbk5vID0gdG9ObyhtaW4pLCBtYXhObyA9IHRvTm8obWF4KSwgc3RhcnRObz10b05vKHN0YXJ0KSwgZW5kTm89dG9ObyhlbmQpO1xyXG5cdFx0bGV0IHJhbmdlID0gKHN0YXJ0Tm8sIGVuZE5vKSA9PiBlZGF0ZU5vID49IHN0YXJ0Tm8gJiYgZWRhdGVObyA8PSBlbmROb1xyXG5cdFx0bGV0IG1pbm1heCA9IChtaW5ObywgbWF4Tm8pID0+IChtaW5ObyAmJiBlZGF0ZU5vIDwgbWluTm8pIHx8IChtYXhObyAmJiBlZGF0ZU5vID4gbWF4Tm8pXHJcblxyXG5cdFx0bGV0IHJlYWxNaW4gPSBtaW4mJm1pbk5vPnN0YXJ0Tm8/bWluTm86c3RhcnROb1xyXG5cdFx0bGV0IHJlYWxNYXggPSAhbWF4fHxtYXhObz5lbmRObz9lbmRObzptYXhOb1xyXG5cclxuICAgICAgICB2YXIgZGF5aW5mbyA9IHtcclxuICAgICAgICAgICAgZGF0ZTogZWRhdGUsXHJcbiAgICAgICAgICAgIGx1bmFyOiB0b0x1bmFyRGF0ZShlZGF0ZSksXHJcbiAgICAgICAgICAgIHRlcm06IGdldE1vbnRoU29sYXJUZXJtcyh5LCBtKVtkXSxcclxuICAgICAgICAgICAgc2FsYXJmZXN0OiBzYWxhckhvbGlkYXlzW3RoaXMuemVybyhtKzEpK3RoaXMuemVybyhkKV0sICAvL+i/memHjOeahOaciOS7veeUqOeahOaYr+inhuWbvueahFxyXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG0gPT09IGNtLFxyXG5cdFx0XHRjdXJyZW50RGF5OiB5ID09PSBzeSAmJiBtID09PSBzbSAmJiBkID09PSBzZCxcclxuXHRcdFx0Y3VycmVudFBvaW50OiBlZGF0ZU5vID09PSByZWFsTWluIHx8IGVkYXRlTm8gPT09IHJlYWxNYXhcclxuICAgICAgICB9O1xyXG5cdFx0Ly/pnIDopoHljLrliIYgc3RhcnQo5LiN6IO95aSn5LqOZW5kKeS4jmVuZCjmsLTog73lsI/kuo5zdGFydCksIOayoeacieWImeebtOaOpeeci21pbiBtYXggQHRvZG9cclxuXHRcdC8v5piv5ZCm5Zyo6ZmQ5Yi255qE6IyD5Zu05YaFXHJcblx0XHRsZXQgaXNTdGFydCA9IHN0YXR1cz09PSdzdGFydCcsIGlzRW5kID0gc3RhdHVzPT09J2VuZCdcclxuXHJcblx0XHRpZihpc1N0YXJ0KXtcclxuXHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IG1pbm1heChtaW5ObywgcmVhbE1heClcclxuXHRcdH1lbHNlIGlmKGlzRW5kKXtcclxuXHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IG1pbm1heChyZWFsTWluLCBtYXhObylcclxuXHRcdH1lbHNlIGlmKG1pbiB8fCBtYXgpe1xyXG5cdFx0XHRkYXlpbmZvLmRpc2FibGVkID0gbWlubWF4KG1pbk5vLCBtYXhObylcclxuXHRcdH1cclxuXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIGRheWluZm8uaW5yYW5nZSA9IHJhbmdlKHN0YXJ0LCBlbmQpIC8v5piv5ZCm5Zyo6YCJ5oup57uT5p6c55qE6IyD5Zu05YaFXHJcbiAgICAgICAgaWYoc2VsZWN0aW5nICYmIHN0YXR1cykgZGF5aW5mby5pbnNlbGVjdCA9IGlzU3RhcnQgPyByYW5nZShzZWxlY3RpbmcsIGVuZCkgOiByYW5nZShzdGFydCwgc2VsZWN0aW5nKVxyXG5cclxuICAgICAgICBpZihkYXlBZGRvbil7XHJcbiAgICAgICAgICAgIGRheWluZm8uYWRkb24gPSBkYXlBZGRvbihkYXlpbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXlpbmZvLmx1bmFyZmVzdCA9IGx1bmFySG9saWRheXNbdGhpcy56ZXJvKGRheWluZm8ubHVuYXIubW9udGgpICsgdGhpcy56ZXJvKGRheWluZm8ubHVuYXIuZGF5KV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF5aW5mbywgZWRhdGVObywgc3RhcnQsIGVuZCwgJ3N0YXJ0ZW5kJylcclxuICAgICAgICByZXR1cm4gZGF5aW5mbztcclxuICAgIH1cclxuICAgIHplcm8gKG4pIHtcclxuICAgICAgICByZXR1cm4gbjwxMCA/ICcwJytuIDogblxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGUoZGF0ZWluZm8pIHtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlaW5mbyk7XHJcbiAgICB9XHJcbiAgICBzZXRNb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyLmJpbmQodGhpcywgZGF0ZWluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5nZXREYXlJbmZvKClcclxuICAgICAgICBsZXQgeyBkYXRlLCBzYWxhcmZlc3QsIGx1bmFyZmVzdCwgdGVybSwgbHVuYXIsIGN1cnJlbnREYXksIGN1cnJlbnRQb2ludCwgY3VycmVudE1vbnRoLCBkaXNhYmxlZCwgaW5yYW5nZSwgaW5zZWxlY3QsIGFkZG9ufSA9IGluZm9cclxuICAgICAgICBsZXQgZmVzdERvbSwge2Zlc3RpdmFsLCBoYXNsdW5hcn0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKGZlc3RpdmFsICYmIChzYWxhcmZlc3R8fGx1bmFyZmVzdCkpe1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1mZXN0XCI+eyhzYWxhcmZlc3Q/c2FsYXJmZXN0OicnKSArIChsdW5hcmZlc3Q/bHVuYXJmZXN0OicnKX08L3NwYW4+e2FkZG9ufTwvZGl2PlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1kXCI+e2RhdGUuZ2V0RGF0ZSgpfTwvc3Bhbj57YWRkb259PC9kaXY+XHJcblx0XHR9XHJcbiAgICAgICAgaWYoaGFzbHVuYXIpeyAgIC8vaGFzIGx1bmFyIGFuZCBtdXN0IGhhcyB0ZXJtXHJcbiAgICAgICAgICAgIGZlc3REb20gPSA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtZGF5LXNldHNcIj57ZmVzdERvbX08c3BhbiBjbGFzc05hbWU9XCJkYXRlLWx1bmFyXCI+e3Rlcm0gPyB0ZXJtIDogdG9MdW5hckRheShsdW5hci5kYXkpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtZGF5XCIgKyAoIWN1cnJlbnRNb250aCA/IFwiIGRhdGUtbm9jdXJyZW50IFwiIDogXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGN1cnJlbnRQb2ludCA/ICcgZGF0ZS1wb2ludCcgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChjdXJyZW50RGF5ID8gJyBkYXRlLXNlbGVjdGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGRpc2FibGVkID8gJyBkYXRlLWRpc2FibGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGlucmFuZ2UgPyAnIGRhdGUtcmFuZ2UnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoaW5zZWxlY3QgPyAnIGRhdGUtaG92ZXInIDogXCJcIikgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5zZXREYXRlLmJpbmQodGhpcywgaW5mbykgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRNb3VzZUVudGVyLmJpbmQodGhpcywgaW5mbyl9PlxyXG4gICAgICAgICAgICB7ZmVzdERvbX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVEYXlcclxuIiwiLyoqXHJcbiAqIGRhdGUgYXBp5bCB6KOFXHJcbiAqIEBhdXRob3IgSm9lIExpdVxyXG4gKiBAZW1haWwgaWNhcmV1LmpvZUBnbWFpbC5jb21cclxuICovXHJcbmZ1bmN0aW9uIGRhdGVPYmplY3QoZGF0ZSl7XHJcblx0aWYoIWRhdGUpIHJldHVybiBkYXRlXHJcblx0aWYodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKXtcclxuXHRcdC8vXCIyMDE3LTExLTI4VDExOjAxOjE0LjAyNVpcIiBsZW49MjRcclxuXHRcdC8vJzIwMTctMTAtMTAgMDA6MDA6MDAnIGxlbj0xOVxyXG5cdFx0Ly8nMjAxNy0xMC0xMCcgbGVuPTEwXHJcblx0XHRpZihkYXRlLmluZGV4T2YoJy8nKSAmJiBkYXRlLmxlbmd0aDwyNCl7XHJcblx0XHRcdGRhdGUgPSBkYXRlLnJlcGxhY2UoLy0vZywgJy8nKVxyXG5cdFx0fVxyXG5cdFx0ZGF0ZS5sZW5ndGg8PTEwID8gbmV3IERhdGUoZGF0ZSArICcgMDA6MDA6MDAnKTogbmV3IERhdGUoZGF0ZSlcclxuXHR9XHJcblx0cmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSwgZm9ybWF0KXtcclxuICBpZighZGF0ZSkgcmV0dXJuICcnO1xyXG4gIHZhciB3ZWVrcyA9IFsn5pelJywn5LiAJywn5LqMJywn5LiJJywn5ZubJywn5LqUJywn5YWtJ107XHJcbiAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGZvcm1hdCA9IGRhdGU7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gZGF0ZU9iamVjdChkYXRlKTtcclxuICAgIHZhciBtYXAgPSB7XHJcbiAgICAgICAgXCJNXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9XHJcbiAgICAgICAgXCJkXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpVxyXG4gICAgICAgIFwiaFwiOiBkYXRlLmdldEhvdXJzKCksIC8v5bCP5pe2XHJcbiAgICAgICAgXCJtXCI6IGRhdGUuZ2V0TWludXRlcygpLCAvL+WIhlxyXG4gICAgICAgIFwic1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5JcclxuICAgICAgICBcInFcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgLy/mr6vnp5JcclxuICAgICAgICBcIldcIjogd2Vla3NbZGF0ZS5nZXREYXkoKV0gLy/lkahcclxuICAgIH07XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU1ddKSsvZywgZnVuY3Rpb24oYWxsLCB0KXtcclxuICAgICAgICB2YXIgdiA9IG1hcFt0XTtcclxuICAgICAgICBpZih2ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihhbGwubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aC0yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0ID09PSAneScpe1xyXG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIGFsbC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG59XHJcbnZhciB0b2RheSA9IG5ldyBEYXRlKClcclxudmFyIHRvZGF5U3RhcnQgPSB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG5sZXQgZGF0ZURpZmYgPSAodGltZXN0YXBlLCB0aW1lKSA9PiBNYXRoLmNlaWwoKHRpbWVzdGFwZSAtICh0aW1lP3RpbWU6K3RvZGF5U3RhcnQpKS8oMzYwMCoxMDAwKjI0KSlcclxuXHJcbnZhciBwbHVzRGF5ID0gZnVuY3Rpb24oZGF0ZSwgbnVtKXtcclxuICAgIG51bSA9IG51bSAhPT0gdm9pZCAwID8gbnVtIDogMVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCtkYXRlICsgMzYwMDAwMCoyNCpudW0pXHJcbn1cclxuXHJcbnZhciBtaW51c0RheSA9IGZ1bmN0aW9uKGRhdGUsIG51bSl7XHJcbiAgICByZXR1cm4gcGx1c0RheSgtbnVtKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZGF0ZUZvcm1hdCxcclxuXHRkYXRlRGlmZixcclxuXHR0b2RheSxcclxuXHR0b2RheVN0YXJ0LFxyXG5cdGRhdGVPYmplY3QsXHJcblx0cGx1c0RheSxcclxuXHRtaW51c0RheVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBjaGFycyA9IHtcclxuXHR3ZWVrc0NuOlsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXHJcbiAgICB3ZWVrc0VuRjogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxyXG4gICAgd2Vla3NFblM6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXHJcbiAgICBtb250aHNDbjpbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ10sXHJcbiAgICBtb250aHNFbjogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cclxufVxyXG5jbGFzcyBkYXRlSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHQvLyBwcm9wVHlwZXM6IHtcclxuXHQvLyAgICAgdXBkYXRlTW9udGg6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcblx0Ly8gfSxcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHRnZXREYXRlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5kYXRlXHJcblx0fVxyXG5cdGNoYW5nZU1vbnRoKG51bSl7XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZU1vbnRoKG51bSlcclxuXHR9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHtsYW5nfSA9IHRoaXMucHJvcHNcclxuXHRcdGNvbnN0IGNuID0gbGFuZyA9PT0gJ2NuJ1xyXG5cdFx0bGV0IHllYXI9dGhpcy5nZXREYXRlKCkuZ2V0RnVsbFllYXIoKSwgbW9udGg9dGhpcy5nZXREYXRlKCkuZ2V0TW9udGgoKSsxO1xyXG5cclxuXHRcdGxldCBtb250aHN0ciA9IGNuPyh5ZWFyKycgJyttb250aCsn5pyIJykgOiBjaGFycy5tb250aHNFblttb250aC0xXSsnICcreWVhcjtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtaGVhZGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aXRsZVwiPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtcHJldlwiIG9uTW91c2VEb3duPXsgdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMsIC0xKSB9Pjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlLW1cIj57bW9udGhzdHJ9PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbmV4dFwiIG9uTW91c2VEb3duPXsgdGhpcy5jaGFuZ2VNb250aC5iaW5kKHRoaXMsIDEpIH0+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlLXd0aXRsZVwiPlxyXG5cdFx0XHRcdHtjaGFyc1tjbj8nd2Vla3NDbic6J3dlZWtzRW5TJ10ubWFwKCh3ZWVrLCBrZXkpID0+IDxzcGFuIGtleT17a2V5fT57d2Vla308L3NwYW4+KX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRlSGVhZGVyIiwidmFyIHNhbGFySG9saWRheXMgPSB7XHJcbiAgICAnMDEwMSc6ICflhYPml6YnLFxyXG4gICAgJzAyMTQnOiAn5oOF5Lq6JyxcclxuICAgICcwMzA4JzogJ+Wmh+WlsycsXHJcbiAgICAnMDMxMic6ICfmpI3moJEnLFxyXG4gICAgJzA0MDEnOiAn5oSa5Lq6JyxcclxuICAgICcwNTAxJzogJ+WKs+WKqCcsXHJcbiAgICAnMDUwNCc6ICfpnZLlubQnLFxyXG4gICAgJzA2MDEnOiAn5YS/56ulJyxcclxuICAgICcwNzAxJzogJ+W7uuWFmicsXHJcbiAgICAnMDgwMSc6ICflu7rlhpsnLFxyXG4gICAgJzA5MTAnOiAn5pWZ5biIJyxcclxuICAgICcxMDAxJzogJ+WbveW6hicsXHJcbiAgICAnMTIyNCc6ICflubPlronlpJwnLFxyXG4gICAgJzEyMjUnOiAn5Zyj6K+eJ1xyXG59XHJcblxyXG52YXIgbHVuYXJIb2xpZGF5cyA9IHtcclxuICAgICcwMTAxJzogJ+aYpeiKgicsXHJcbiAgICAnMDExNSc6ICflhYPlrrUnLFxyXG4gICAgJzA1MDUnOiAn56uv5Y2IJyxcclxuICAgICcwNzA3JzogJ+S4g+WklScsXHJcbiAgICAnMDcxNSc6ICfkuK3lhYMnLFxyXG4gICAgJzA4MTUnOiAn5Lit56eLJyxcclxuICAgICcwOTA5JzogJ+mHjemYsycsXHJcbiAgICAnMTIwOCc6ICfohYrlhasnLFxyXG4gICAgJzEyMjQnOiAn5bCP5bm0J1xyXG59XHJcblxyXG5leHBvcnQge3NhbGFySG9saWRheXMsIGx1bmFySG9saWRheXN9XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxyXG5jbGFzcyBEYXRlSW5Cb2R5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAvLyB0aGlzLnBvcHVwLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3Nlc1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKVxyXG4gICAgdGhpcy5yZW5kZXJMYXllcigpXHJcbiAgICBpZighdGhpcy5wcm9wcy5pbmxpbmUpe1xyXG4gICAgICBsZXQgYWRqdXN0U2l6ZSA9IHRoaXMucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZS1waWNrZXInKVswXS5jbGllbnRXaWR0aFxyXG5cdFx0XHR0aGlzLnByb3BzLm9uVXBkYXRlICYmIHRoaXMucHJvcHMub25VcGRhdGUoYWRqdXN0U2l6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnJlbmRlckxheWVyKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vIHRoaXMucmVtb3ZlUGlja2VyKClcclxuICB9XHJcbiAgcmVtb3ZlUGlja2VyKCl7XHJcbiAgICAvLyB0aGlzLnBvcHVwID0gY3VycmVudCA/IHRoaXMucG9wdXAgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlLXBpY2tlci13cmFwcGVyJylbMF1cclxuICAgIGlmKHRoaXMucG9wdXApe1xyXG5cdFx0XHRcdFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cClcclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucG9wdXApXHJcblx0XHRcdFx0dGhpcy5wb3B1cCA9IG51bGxcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyTGF5ZXIoKSB7XHJcbiAgICBpZih0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG4gICAgICBSZWFjdERPTS5yZW5kZXIodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5wb3B1cClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IGNoaWxkcmVuPXtudWxsfSBzdHlsZT17dGhpcy5wcm9wcy5vZmZzZXR9Lz5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVJbkJvZHk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7ZGF0ZUZvcm1hdH0gZnJvbSAnLi9kYXRlLWZvcm1hdCdcclxuY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHQvLyAgcHJvcFR5cGVzOiB7XHJcblx0Ly8gICAgIC8vIGVsZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxyXG5cdC8vICAgICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmFueSxcclxuXHQvLyAgICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG5cdC8vICAgICBvbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdC8vICAgICBvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuXHQvLyAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcblx0Ly8gfVxyXG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHQgfVxyXG4vKlx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAvLyB2YWx1ZTogIHRoaXMuZGF0ZVN0cmluZygpXHJcblx0ICAgICAgICBzdHlsZXM6IHtcclxuXHRcdCAgICAgIHRvcDogMCxcclxuXHRcdCAgICAgIGxlZnQ6IDBcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHtcclxuXHQgICAgLy8gc3R5bGVzOlxyXG5cdCAgfSlcclxuXHR9Ki9cclxuXHRkYXRlU3RyaW5nKCl7XHJcblx0XHRjb25zdCB7Zm9ybWF0LCBzZWxlY3RlZH0gPSB0aGlzLnByb3BzXHJcblx0XHRyZXR1cm4gZm9ybWF0ID8gZGF0ZUZvcm1hdChzZWxlY3RlZCwgZm9ybWF0KSA6IHNlbGVjdGVkXHJcblx0fVxyXG5cdGhhbmRsZUJsdXIoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpXHJcblx0fVxyXG5cdGhhbmRsZUZvY3VzKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcylcclxuXHR9XHJcblx0Zm9jdXMgKCkge1xyXG5cdCAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKVxyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2UoKXtcclxuXHRcdC8vIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpXHJcblx0fVxyXG5cdGdldElucHV0KCl7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpXHJcblx0fVxyXG5cdGhhbmRsZVBvc2l0aW9uKCl7XHJcblx0XHQvLyBGaXggZm9yIElFOC0ncyBFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0ICBpZiAoJ1RleHRSZWN0YW5nbGUnIGluIHdpbmRvdyAmJiAhKCd3aWR0aCcgaW4gVGV4dFJlY3RhbmdsZS5wcm90b3R5cGUpKSB7XHJcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHRSZWN0YW5nbGUucHJvdG90eXBlLCB7XHJcblx0ICAgICAgJ3dpZHRoJzogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdDsgfSB9LFxyXG5cdCAgICAgICdoZWlnaHQnOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wOyB9IH1cclxuXHQgICAgfSk7XHJcblx0ICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldElucHV0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHR9XHJcblxyXG5cdHJlY3Vyc2l2ZU1hcChjaGlsZHMsIGlucHV0RWxlbSkge1xyXG5cdFx0dmFyIGNvcHlIYXNDaGlsZEVsZW0gPSAoY2hpbGQpID0+ICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuXHRcdFx0XHRjaGlsZHJlbjogdGhpcy5yZWN1cnNpdmVNYXAoY2hpbGQucHJvcHMuY2hpbGRyZW4sIGlucHV0RWxlbSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChjaGlsZHMucHJvcHMgJiYgY2hpbGRzLnByb3BzLmNoaWxkcmVuKSB7XHJcblx0XHRcdHJldHVybiBjb3B5SGFzQ2hpbGRFbGVtKGNoaWxkcylcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcywgY2hpbGQgPT4ge1xyXG5cdFx0XHRpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNoaWxkLnR5cGUgIT09ICdpbnB1dCcgPyBjaGlsZCA6IGlucHV0RWxlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRjaGlsZCA9IGNvcHlIYXNDaGlsZEVsZW0oY2hpbGQpXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNoaWxkO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHNldENoaWxkSW5wdXQoY2hpbGRyZW4sIGlucHV0RWxlbSl7XHJcblx0XHRpZihjaGlsZHJlbiAmJiBjaGlsZHJlbi5wcm9wcyl7XHJcblx0XHRcdHJldHVybiA8Y2hpbGRyZW4+e3RoaXMuc2V0Q2hpbGRJbnB1dChjaGlsZHJlbi5wcm9wcy5jaGlsZHJlbiwgaW5wdXRFbGVtKX08L2NoaWxkcmVuPlxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gY2hpbGQudHlwZSA9PT0gJ2lucHV0JyA/IGlucHV0RWxlbSA6IGNoaWxkXHJcblx0XHRcdH0pXHJcbi8qIFx0XHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHRcdHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGlsZC50eXBlID09PSAnaW5wdXQnID8gaW5wdXRFbGVtIDogY2hpbGRcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+ICovXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZWxzZSBpZihjaGlsZHJlbil7XHJcblx0XHQvLyBcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdC8vIFx0XHRyZXR1cm4gY2hpbGQudHlwZSA9PT0gJ2lucHV0JyA/IGlucHV0RWxlbSA6IGNoaWxkXHJcblx0XHQvLyBcdH0pXHJcblx0XHQvLyB9XHJcblxyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHsgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgaW5wdXRFbGVtID0gPGlucHV0IHJlZj1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IGRpc2FibGVkPXtkaXNhYmxlZH0gdmFsdWU9e3RoaXMuZGF0ZVN0cmluZygpfSBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuID8gdGhpcy5yZWN1cnNpdmVNYXAoY2hpbGRyZW4sIGlucHV0RWxlbSkgOiBpbnB1dEVsZW1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5wdXQiLCIvLyDlhpzljobmnIjku73kv6Hmga/ooahcclxudmFyIGx1bmFySW5mbyA9IFtcclxuICAgIDB4MDRiZDgsMHgwNGFlMCwweDBhNTcwLDB4MDU0ZDUsMHgwZDI2MCwweDBkOTUwLDB4MTY1NTQsMHgwNTZhMCwweDA5YWQwLDB4MDU1ZDIsXHJcbiAgICAweDA0YWUwLDB4MGE1YjYsMHgwYTRkMCwweDBkMjUwLDB4MWQyNTUsMHgwYjU0MCwweDBkNmEwLDB4MGFkYTIsMHgwOTViMCwweDE0OTc3LFxyXG4gICAgMHgwNDk3MCwweDBhNGIwLDB4MGI0YjUsMHgwNmE1MCwweDA2ZDQwLDB4MWFiNTQsMHgwMmI2MCwweDA5NTcwLDB4MDUyZjIsMHgwNDk3MCxcclxuICAgIDB4MDY1NjYsMHgwZDRhMCwweDBlYTUwLDB4MDZlOTUsMHgwNWFkMCwweDAyYjYwLDB4MTg2ZTMsMHgwOTJlMCwweDFjOGQ3LDB4MGM5NTAsXHJcbiAgICAweDBkNGEwLDB4MWQ4YTYsMHgwYjU1MCwweDA1NmEwLDB4MWE1YjQsMHgwMjVkMCwweDA5MmQwLDB4MGQyYjIsMHgwYTk1MCwweDBiNTU3LFxyXG4gICAgMHgwNmNhMCwweDBiNTUwLDB4MTUzNTUsMHgwNGRhMCwweDBhNWQwLDB4MTQ1NzMsMHgwNTJkMCwweDBhOWE4LDB4MGU5NTAsMHgwNmFhMCxcclxuICAgIDB4MGFlYTYsMHgwYWI1MCwweDA0YjYwLDB4MGFhZTQsMHgwYTU3MCwweDA1MjYwLDB4MGYyNjMsMHgwZDk1MCwweDA1YjU3LDB4MDU2YTAsXHJcbiAgICAweDA5NmQwLDB4MDRkZDUsMHgwNGFkMCwweDBhNGQwLDB4MGQ0ZDQsMHgwZDI1MCwweDBkNTU4LDB4MGI1NDAsMHgwYjVhMCwweDE5NWE2LFxyXG4gICAgMHgwOTViMCwweDA0OWIwLDB4MGE5NzQsMHgwYTRiMCwweDBiMjdhLDB4MDZhNTAsMHgwNmQ0MCwweDBhZjQ2LDB4MGFiNjAsMHgwOTU3MCxcclxuICAgIDB4MDRhZjUsMHgwNDk3MCwweDA2NGIwLDB4MDc0YTMsMHgwZWE1MCwweDA2YjU4LDB4MDU1YzAsMHgwYWI2MCwweDA5NmQ1LDB4MDkyZTAsXHJcbiAgICAweDBjOTYwLDB4MGQ5NTQsMHgwZDRhMCwweDBkYTUwLDB4MDc1NTIsMHgwNTZhMCwweDBhYmI3LDB4MDI1ZDAsMHgwOTJkMCwweDBjYWI1LFxyXG4gICAgMHgwYTk1MCwweDBiNGEwLDB4MGJhYTQsMHgwYWQ1MCwweDA1NWQ5LDB4MDRiYTAsMHgwYTViMCwweDE1MTc2LDB4MDUyYjAsMHgwYTkzMCxcclxuICAgIDB4MDc5NTQsMHgwNmFhMCwweDBhZDUwLDB4MDViNTIsMHgwNGI2MCwweDBhNmU2LDB4MGE0ZTAsMHgwZDI2MCwweDBlYTY1LDB4MGQ1MzAsXHJcbiAgICAweDA1YWEwLDB4MDc2YTMsMHgwOTZkMCwweDA0YmQ3LDB4MDRhZDAsMHgwYTRkMCwweDFkMGI2LDB4MGQyNTAsMHgwZDUyMCwweDBkZDQ1LFxyXG4gICAgMHgwYjVhMCwweDA1NmQwLDB4MDU1YjIsMHgwNDliMCwweDBhNTc3LDB4MGE0YjAsMHgwYWE1MCwweDFiMjU1LDB4MDZkMjAsMHgwYWRhMFxyXG5dO1xyXG4gXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm055qE5oC75aSp5pWwXHJcbmZ1bmN0aW9uIGx1bmFyWWVhckRheXMoeSkge1xyXG4gICAgdmFyIGksIHN1bSA9IDM0OFxyXG4gICAgZm9yIChpID0gMHg4MDAwOyBpID4gMHg4OyBpID4+PSAxKSBzdW0gKz0gKGx1bmFySW5mb1t5IC0gMTkwMF0gJiBpKSA/IDEgOiAwXHJcbiAgICByZXR1cm4gKHN1bSArIGxlYXBEYXlzKHkpKVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tG3mnIjnmoTmgLvlpKnmlbBcclxuZnVuY3Rpb24gbHVuYXJNb250aERheXMoeSwgbSkge1xyXG4gICAgcmV0dXJuICgobHVuYXJJbmZvW3kgLSAxOTAwXSAmICgweDEwMDAwID4+IG0pKSA/IDMwIDogMjkpXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm06Zew5pyI55qE5aSp5pW4XHJcbmZ1bmN0aW9uIGxlYXBEYXlzKHkpIHtcclxuICAgIGlmIChsZWFwTW9udGgoeSkpIHJldHVybiAoKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAweDEwMDAwKSA/IDMwIDogMjkpXHJcbiAgICBlbHNlIHJldHVybiAoMClcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubTpl7Dlk6rkuKrmnIggMS0xMiAsIOaykumXsOS8oOWbniAwXHJcbmZ1bmN0aW9uIGxlYXBNb250aCh5KSB7XHJcbiAgICByZXR1cm4gKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAweGYpXHJcbn1cclxuXHJcblxyXG4vL+WFrOWOhui9rOWGnOWOhlxyXG5mdW5jdGlvbiB0b0x1bmFyRGF0ZShvYmpEYXRlKSB7XHJcbiAgICB2YXIgaSwgbGVhcCA9IDAsXHJcbiAgICAgICAgdGVtcCA9IDA7XHJcbiAgICB2YXIgYmFzZURhdGUgPSBuZXcgRGF0ZSgxOTAwLCAwLCAzMSk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gKG9iakRhdGUgLSBiYXNlRGF0ZSkgLyA4NjQwMDAwMDtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICByZXN1bHQuZGF5Q3lsID0gb2Zmc2V0ICsgNDA7XHJcbiAgICByZXN1bHQubW9uQ3lsID0gMTQ7XHJcblxyXG4gICAgZm9yIChpID0gMTkwMDsgaSA8IDIwNTAgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcCA9IGx1bmFyWWVhckRheXMoaSk7XHJcbiAgICAgICAgb2Zmc2V0IC09IHRlbXA7XHJcbiAgICAgICAgcmVzdWx0Lm1vbkN5bCArPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICAgIG9mZnNldCArPSB0ZW1wO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICByZXN1bHQubW9uQ3lsIC09IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC55ZWFyID0gaTtcclxuICAgIHJlc3VsdC55ZWFyQ3lsID0gaSAtIDE4NjQ7XHJcblxyXG4gICAgbGVhcCA9IGxlYXBNb250aChpKTsgLy/pl7Dlk6rkuKrmnIhcclxuICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGkgPSAxOyBpIDwgMTMgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XHJcbiAgICAgICAgLy/pl7DmnIhcclxuICAgICAgICBpZiAobGVhcCA+IDAgJiYgaSA9PSAobGVhcCArIDEpICYmIHJlc3VsdC5pc0xlYXAgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGVtcCA9IGxlYXBEYXlzKHJlc3VsdC55ZWFyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wID0gbHVuYXJNb250aERheXMocmVzdWx0LnllYXIsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/op6PpmaTpl7DmnIhcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCA9PSB0cnVlICYmIGkgPT0gKGxlYXAgKyAxKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgLT0gdGVtcFxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5tb25DeWwrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA9PSAwICYmIGxlYXAgPiAwICYmIGkgPT0gbGVhcCArIDEpXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgIC0tcmVzdWx0Lm1vbkN5bDtcclxuICAgICAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgKz0gdGVtcDtcclxuICAgICAgICAtLWk7XHJcbiAgICAgICAgLS1yZXN1bHQubW9uQ3lsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5tb250aCA9IGk7XHJcbiAgICByZXN1bHQuZGF5ID0gb2Zmc2V0ICsgMTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8v5Yac5Y6G5pWw5a2X6L2s5a2X56ymXHJcbmZ1bmN0aW9uIHRvTHVuYXJEYXkgKGQpe1xyXG4gICAgdmFyIGx1bmFyRGF5ID0gWyfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfljYEnLCAn5Y2B5LiAJywgJ+WNgeS6jCddO1xyXG4gICAgdmFyIGx1bmFyVGVlbiA9IFsn5YidJywgJ+WNgScsICflu78nLCAn5LiJJ107XHJcbiAgICB2YXIgZHN0ciA9IGQrJycsXHJcbiAgICAgICAgdGVlbiA9IGx1bmFyVGVlblswXSwgXHJcbiAgICAgICAgcmlnaHROdW0gPSBkc3RyLmxlbmd0aCA8IDIgPyAnJyA6IGRzdHIuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgIHJpZ2h0RGVjbyA9IHJpZ2h0TnVtPT09JzAnID8gJ+WNgScgOiBsdW5hckRheVtOdW1iZXIocmlnaHROdW0pLTFdO1xyXG4gICAgaWYoZCA+IDEwKXtcclxuICAgICAgICB0ZWVuID0gbHVuYXJUZWVuWzFdO1xyXG4gICAgICAgIGlmKGQ+PTIwKXtcclxuICAgICAgICAgICAgdGVlbiA9IGx1bmFyVGVlblsyXTtcclxuICAgICAgICAgICAgaWYoZD49MzApe1xyXG4gICAgICAgICAgICAgICAgdGVlbiA9IGx1bmFyVGVlblszXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAgdGVlbiArIChkc3RyLmxlbmd0aCA8IDIgPyBsdW5hckRheVtkLTFdIDogcmlnaHREZWNvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2x1bmFyWWVhckRheXMsIGx1bmFyTW9udGhEYXlzLCBsZWFwRGF5cywgbGVhcE1vbnRoLCB0b0x1bmFyRGF0ZSwgdG9MdW5hckRheX07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERhdGVEYXkgZnJvbSAnLi9kYXRlLWRheS5qcydcclxuY2xhc3MgRGF0ZU1vbnRoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHQvKnByb3BUeXBlczoge1xyXG5cdFx0ZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG5cdFx0Zm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcblx0fSovXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge3NlbGVjdGluZzogcHJvcHMuc2VsZWN0aW5nfTtcclxuXHQgfVxyXG5cdGdldE1vbnRoSW5mbyAoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGUsICdkYXRlbW9udGgnKVxyXG5cdFx0bGV0IHkgPSB0aGlzLnByb3BzLmRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHQgICAgbGV0IG0gPSB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdHZhciBkYXRlZGF5LCBsaW5lPTAsIHRlbXA9W10sIGlzZmlsbCA9IHRoaXMucHJvcHMuaXNmaWxsO1xyXG5cdFx0Ly8gY29uc29sZS50aW1lKCforqHnrpfkuIDmnIjmiYDnlKjml7bpl7QnKVxyXG4gICAgICAgIHZhciBwcmV2TURheSA9IG5ldyBEYXRlKHksIG0sIDApLCBwcmV2TURheUxhc3QgPSBwcmV2TURheS5nZXREYXRlKCk7ICAgIC8vcHJldiBNb250aCBMYXN0IERheVxyXG4gICAgICAgIHZhciBuZXh0TURheSA9IG5ldyBEYXRlKHksIG0rMSwgMCksIGN1cnJNRGF5TGFzdCA9IG5leHRNRGF5LmdldERhdGUoKTsgIC8vY3VycmVudCBNb250aCBMYXN0IERheVxyXG4gICAgICAgIHZhciBjdXJyTURheSA9IG5ldyBEYXRlKHksIG0rMCwgMSksIGN1cnJNRGF5Rmlyc3Q9IGN1cnJNRGF5LmdldERheSgpOyAgIC8vY3VycmVudCBNb250aCBGaXJzdCBEYXkgV2Vla1xyXG5cclxuICAgICAgIHRlbXBbbGluZV09W107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNMaW5lKGRhdGUpe1xyXG5cdCAgICBcdHZhciB3ZWVrbm8gPSBkYXRlLmdldERheSgpOyAgIC8vd2Vla1xyXG5cdCAgICAgICAgaWYod2Vla25vID09IDApIHRlbXBbbGluZV09W11cclxuXHQgICAgICAgIHRlbXBbbGluZV0ucHVzaChkYXRlKTtcclxuXHQgICAgICAgIHdlZWtubyA9PSA2ICYmIGxpbmUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2cocHJldk1EYXksIGN1cnJNRGF5LCBwcmV2TURheUxhc3QsIGN1cnJNRGF5TGFzdCwgY3Vyck1EYXlGaXJzdClcclxuICAgICAgIGlmKGN1cnJNRGF5Rmlyc3QgJiYgaXNmaWxsKXsgLy9wcmV2IE1vbnRoIGNhbGVuZGFyIHJvdyBmaXJzdFxyXG4gICAgICAgICAgICB2YXIgayA9IHByZXZNRGF5TGFzdCAtIGN1cnJNRGF5Rmlyc3QgKyAxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1cnJNRGF5Rmlyc3Q7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZWRheSA9IG5ldyBEYXRlKHksIG0tMSwgaylcclxuICAgICAgICAgICAgICAgIFx0dGVtcFtsaW5lXS5wdXNoKGRhdGVkYXkpXHJcbiAgICAgICAgICAgICAgICBrKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTE7IGkgPD0gY3Vyck1EYXlMYXN0OyBpKyspIHsgLy9jdXJyZW50IG1vbnRoXHJcbiAgICAgICAgXHRkYXRlZGF5ID0gbmV3IERhdGUoeSwgbSwgaSlcclxuICAgICAgICBcdGNhbGNMaW5lKGRhdGVkYXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlzZmlsbCl7XHJcblx0ICAgICAgICBmb3IgKGo9MTsgaiA8IDEyOyBqKyspIHtcclxuXHQgICAgICAgIFx0aWYobGluZTw2KXtcclxuXHQgICAgICAgIFx0XHQvLyBjb25zb2xlLmxvZyhsaW5lLCAnbGluZScpXHJcblx0XHQgICAgICAgICAgICBkYXRlZGF5ID0gIG5ldyBEYXRlKHksIG0rMSwgaik7XHJcblx0XHQgICAgICAgICAgICBjYWxjTGluZShkYXRlZGF5KVxyXG5cdCAgICAgICBcdFx0fVxyXG5cdCAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUudGltZUVuZCgn6K6h566X5LiA5pyI5omA55So5pe26Ze0JylcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuXHR9XHJcblxyXG5cdHdlZWtzKG1vbnRocyl7XHJcblx0XHR2YXIgd2Vla3MgPSBbXSwgdGhhdCA9IHRoaXM7XHJcblx0XHRtb250aHMubWFwKGZ1bmN0aW9uKHdlZWssIHdrZXkpIHtcclxuXHRcdFx0d2Vla3MucHVzaCg8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLXdlZWsgZGF0ZS13ZWVrLVwiK3drZXl9IGtleT17d2tleX0+XHJcblx0XHRcdFx0e3RoYXQuZGF5cyh3ZWVrKX1cclxuXHRcdFx0PC9kaXY+KVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiB3ZWVrc1xyXG5cdH1cclxuXHRkYXlzKHdlZWspe1xyXG5cdFx0dmFyIGRheXMgPSBbXSwgdGhhdCA9IHRoaXM7XHJcblx0XHR3ZWVrLm1hcChmdW5jdGlvbihkYXksIGRrZXkpe1xyXG5cdFx0XHRkYXlzLnB1c2goIDxEYXRlRGF5IHsuLi50aGF0LnByb3BzfSBvbk1vdXNlRW50ZXI9e3RoYXQub25Nb3VzZUVudGVyLmJpbmQodGhpcyl9IHNlbGVjdGluZz17dGhhdC5zdGF0ZS5zZWxlY3Rpbmd9IGVkYXRlPXtkYXl9IGtleT17ZGtleX0vPiApXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIGRheXNcclxuXHR9XHJcblx0b25Nb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuXHRcdGxldCB7c3RhcnQsIGVuZH0gPSB0aGlzLnByb3BzXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGluZzogZGF0ZWluZm8uZGF0ZX0pXHJcblx0fVxyXG5cdG9uTW91c2VMZWF2ZSgpe1xyXG5cdFx0bGV0IHtzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmKHN0YXJ0ICYmIGVuZCkgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW5nOiBudWxsfSlcclxuXHR9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZW5kZXIgdGltZXMnKVxyXG5cdFx0Y29uc3QgbW9udGhzID0gdGhpcy5nZXRNb250aEluZm8oKSwgdGhhdD10aGlzO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtbW9udGhcIiArICh0aGF0LnN0YXRlLnNlbGVjdGluZyA/IFwiIGRhdGUtc2VsZWN0aW5nIFwiIDogXCIgXCIpfSBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyl9PlxyXG5cdFx0XHRcdHt0aGlzLndlZWtzKG1vbnRocyl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdH1cclxufVxyXG5cclxuRGF0ZU1vbnRoLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRzZWxlY3Rpbmc6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZU1vbnRoXHJcbiIsIi8vIOWGnOWOhuS6jOWNgeWbm+iKguawlFxyXG52YXIgY2FjaGUgPSB7fTtcclxudmFyIGNhY2hla2V5cyA9IFtdO1xyXG52YXIgc29sYXJUZXJtID0gWyflsI/lr5InLCAn5aSn5a+SJywgJ+eri+aYpScsICfpm6jmsLQnLCAn5oOK6JuwJywgJ+aYpeWIhicsICfmuIXmmI4nLCAn6LC36ZuoJywgJ+eri+WkjycsICflsI/mu6EnLCAn6IqS56eNJywgJ+Wkj+iHsycsICflsI/mmpEnLCAn5aSn5pqRJywgJ+eri+eniycsICflpITmmpEnLCAn55m96ZyyJywgJ+eni+WIhicsICflr5LpnLInLCAn6Zyc6ZmNJywgJ+eri+WGrCcsICflsI/pm6onLCAn5aSn6ZuqJywgJ+WGrOiHsyddO1xyXG52YXIgc1Rlcm1JbmZvID0gWzAsIDIxMjA4LCA0MjQ2NywgNjM4MzYsIDg1MzM3LCAxMDcwMTQsIDEyODg2NywgMTUwOTIxLCAxNzMxNDksIDE5NTU1MSwgMjE4MDcyLCAyNDA2OTMsIDI2MzM0MywgMjg1OTg5LCAzMDg1NjMsIDMzMTAzMywgMzUzMzUwLCAzNzU0OTQsIDM5NzQ0NywgNDE5MjEwLCA0NDA3OTUsIDQ2MjIyNCwgNDgzNTMyLCA1MDQ3NThdO1xyXG4vLyDov5Tlm57mn5DlubTnmoTnrKxu5Liq6IqC5rCU5Li65Yeg5pelKOS7jjDlsI/lr5LotbfnrpcpXHJcbnZhciBnZXRTb2xhclRlcm1JbmRleCA9IGZ1bmN0aW9uKHllYXIsIGluZGV4KSB7XHJcbiAgICB2YXIgb2ZmRGF0ZSA9IG5ldyBEYXRlKCgzMTU1NjkyNTk3NC43ICogKHllYXIgLSAxOTAwKSArIHNUZXJtSW5mb1tpbmRleF0gKiA2MDAwMCkgKyBEYXRlLlVUQygxOTAwLCAwLCA2LCAyLCA1KSk7XHJcbiAgICByZXR1cm4gb2ZmRGF0ZS5nZXRVVENEYXRlKCk7XHJcbn07XHJcblxyXG4vLyDov5Tlm57or6XmnIjnmoToioLmsJTkv6Hmga9cclxudmFyIGdldE1vbnRoU29sYXJUZXJtcyA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XHJcbiAgICBpZiAoeWVhciBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBtb250aCA9IHllYXIuZ2V0TW9udGgoKTtcclxuICAgICAgICB5ZWFyID0geWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGtleSA9ICcnICsgeWVhciArIG1vbnRoO1xyXG4gICAgaWYgKGtleSBpbiBjYWNoZSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFyIHJldCA9IGNhY2hlW2tleV0gPSB7fTtcclxuICAgIHZhciBpbmRleDtcclxuICAgIGluZGV4ID0gZ2V0U29sYXJUZXJtSW5kZXgoeWVhciAtIDE5MDAsIG1vbnRoICogMik7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDJdO1xyXG4gICAgaW5kZXggPSBnZXRTb2xhclRlcm1JbmRleCh5ZWFyIC0gMTkwMCwgbW9udGggKiAyICsgMSk7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDIgKyAxXTtcclxuICAgIGNhY2hla2V5cy5wdXNoKGtleSk7XHJcbiAgICBpZiAoY2FjaGVrZXlzLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgZGVsZXRlIGNhY2hlW2NhY2hla2V5cy5zaGlmdCgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0U29sYXJUZXJtSW5kZXgsIGdldE1vbnRoU29sYXJUZXJtc30iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlRGF5IGZyb20gJy4vZGF0ZS1kYXkuanMnXHJcbmNsYXNzIERhdGVUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHsgXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxyXG5cdFx0XHR7bmV3IERhdGUoKS5nZXRIb3VycygpKyAnOicgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKX1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWUiLCIvL0B0b2RvIOino+WGs+WIh+aNouaciOS7veaXtu+8jCDpgInmi6nnmoTlgLzmnInlj5jvvJsyLuWklumDqOWAvOWPmOWMluWQju+8jGlucHV05YC85LiOdWnmsqHmnInlj5jljJYgMyBrZXkgaW5wdXRcbi8vIGltcG9ydCAnLi9kYXRlcGlja2VyLmxlc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRGF0ZUhlYWRlciBmcm9tICcuL2RhdGUtaGVhZGVyLmpzJ1xuaW1wb3J0IERhdGVDYWxlbmRhciBmcm9tICcuL2RhdGUtY2FsZW5kYXIuanMnXG5pbXBvcnQgRGF0ZUlucHV0IGZyb20gJy4vZGF0ZS1pbnB1dC5qcydcbmltcG9ydCBEYXRlSW5Cb2R5IGZyb20gJy4vZGF0ZS1pbi1ib2R5LmpzJ1xuaW1wb3J0IHtkYXRlT2JqZWN0LCB0b2RheX0gZnJvbSAnLi9kYXRlLWZvcm1hdC5qcydcblxuY2xhc3MgUmVhY3REYXRlcGlja2VyUGx1cyBleHRlbmRzIENvbXBvbmVudCB7XG5cdC8vIHByb3BUeXBlczoge1xuXHQvLyBcdHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0Ly9kZWZhdWx0IGRhdGVcblx0Ly8gXHRmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAgICAvL2Zvcm1hdCBkYXRlXG5cdC8vIFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcdCAgICAvL3Nob3cgcHJlZml4LXByZXYgcHJlZml4LW5leHQgbW9udGhcblx0Ly8gXHRtb250aHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHRcdC8vc2hvdyBtdWx0aS1wYW5lcyBieSBtb250aHNcblxuXHQvLyBcdHRpbWU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAgIC8vc2hvdyB0aW1lIHNlbGVjdCBAdG9kb1xuXG5cdC8vIFx0bWluOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtaW5cblx0Ly8gXHRtYXg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1heFxuXG5cdC8vIFx0c3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblx0Ly8gXHRlbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblxuXHQvLyBcdGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgIC8vIGN1c3RvbSBjbGFzc1xuXHQvLyBcdGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vaW5wdXQgY2FuJ3QgY2hhbmdlXG5cdC8vIFx0YXV0b0hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9zZWxlY3RlZCBhdXRvIGhpZGVcblx0Ly8gXHRpbmxpbmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAvL2lubGluZVxuXHQvLyBcdGxhbmc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NuJywgJ2VuJ10pLFxuXG5cdC8vIFx0ZmVzdGl2YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBmZXN0aXZhbFxuXHQvLyBcdGhhc2x1bmFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgbHVuYXJcblxuXHQvLyBcdG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5cdC8vIFx0b25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxuXHQvLyBcdG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChkYXlpbmZvLCBwaWNrZXIpXG5cdC8vIFx0ZGF5QWRkb246IFJlYWN0LlByb3BUeXBlcy5mdW5jIFx0XHQvL2FyZ3MgKGRheWluZm8pXG5cdC8vIFx0Ly9kYXlBZGRvbiwgYWRkIGRhdGEgZm9yIGRheSwgYW5kIG5lZWQgdG8gcmV0dXJuIGRvbSxcblx0Ly8gXHQvL3RoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSBpbnNlcnQgdG8gZGF5IGVhY2ggZWxlbWVudC4gcGxzIHNlZSBsYXN0IGRlbW9cblx0Ly8gIHBsYWNlaG9sZGVyXG5cdC8vICBwbGFjZWhvbGRlckVuZFxuXHQvLyAgc3VwcG9ydCBjaGlsZHJlbiB0byBkZWZpbmVkIHlvdXIgaW5wdXQgZG9tIHN0cnVjdCwgcGxzIHNlYXJjaCBgZGVmaW5lZCB5b3VyIGlucHV0IGRvbWAgYXQgdGhpcyBwYWdlXG5cdC8vIH1cblx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHZhciBzZWxlY3RlZCA9ICBkYXRlT2JqZWN0KHByb3BzLnNlbGVjdGVkKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXHRcdFx0XHRkYXRlOiBzZWxlY3RlZCxcdFx0Ly9yZW5kZXIgbW9udGggYnkgZGF0ZVxuXHRcdFx0XHRzaG93OiBwcm9wcy5pbmxpbmUgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGZvY3VzOiBmYWxzZSxcdC8vZm9jdXMgc3RhdGUgdHJ1ZS9mYWxzZS8nYmxhbmsnXG5cdFx0XHRcdG9mZnNldDoge30sXHRcdC8vZGF0ZXBpY2tlciBwb3NpdGlvblxuXHRcdFx0XHRzZWxlY3RlZDogc2VsZWN0ZWQsXG5cdFx0XHRcdHN0YXJ0OiBkYXRlT2JqZWN0KHByb3BzLnN0YXJ0KSxcblx0XHRcdFx0ZW5kOiBkYXRlT2JqZWN0KHByb3BzLmVuZCksXG5cdFx0XHRcdG1pbjogZGF0ZU9iamVjdChwcm9wcy5taW4pLFxuXHRcdFx0XHRtYXg6IGRhdGVPYmplY3QocHJvcHMubWF4KSxcblx0XHRcdFx0Ly8gc3RhdHVzOiAnJyAgIFx0Ly9SZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdlbmQnXSlcblx0XHRcdFx0Ly8nc3RhcnQnIGFuZCAnZW5kJyB1c2UgYnkgYmktZGF0ZXBpY2tlciByYW5nZSB2YWx1ZSwgYW5kIHVuZGVmaW5lZCB1c2UgYnkgc2luZ2xlIGRhdGVwaWNrZXIgc2luZ2xlIGRhdGVcblx0XHR9XG4gICAgfVxuXG5cdG9uRm9jdXMoZXZlbnQsIGlucHV0KXtcblx0XHRsZXQge3Nob3csIGZvY3VzLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0aWYoKHNob3cgJiYgIWZvY3VzKSB8fCBmb2N1cyA9PT0gJ2JsYW5rJyl7XG5cdFx0XHR0aGlzLnN0YXRlLmZvY3VzID0gdHJ1ZS8vanVzdCBjaGFuZ2Ugc3RhdGUgbm90IHRyaWdnZXIgcmVuZGVyXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0bGV0IHN0YXR1cyA9IGlucHV0LnByb3BzLnN0YXR1czsgc2VsZWN0ZWQgPSBzdGF0dXM/dGhpcy5zdGF0ZVtzdGF0dXNdOnNlbGVjdGVkO1xuXHRcdGxldCB7bGVmdCwgdG9wLCBoZWlnaHQsIHdpZHRofSA9IGlucHV0LmhhbmRsZVBvc2l0aW9uKCk7XG5cdFx0XHR0b3AgKz0gKGhlaWdodCsgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKVxuXHRcdGxldCB7b25Gb2N1c30gPSB0aGlzLnByb3BzXG5cdFx0dGhpcy5pbnB1dFdpZHRoID0gd2lkdGhcblx0XHR0aGlzLnNob3codHJ1ZSwge2xlZnQsIHRvcH0sIHRydWUsIHN0YXR1cylcblxuXHRcdG9uRm9jdXMgJiYgb25Gb2N1cyhldmVudCwgdGhpcylcblxuXHRcdHRoaXMuc2V0U3RhdGUoe2RhdGU6IHNlbGVjdGVkfSlcblx0fVxuXG5cdG9uQmx1cihldmVudCwgaW5wdXQpe1xuXHRcdGNvbnN0IHtzaG93LCBmb2N1c30gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3Qge2lubGluZSwgb25CbHVyLCBhdXRvSGlkZX0gPSB0aGlzLnByb3BzXG5cdFx0aWYoYXV0b0hpZGUpe1xuXHRcdFx0aWYoIWZvY3VzKXtcblx0XHRcdFx0dGhpcy5yZW1vdmVQaWNrZXIoKVxuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoIXNob3cpIHJldHVybjtcblx0XHRpZiAoIWZvY3VzIHx8ICBmb2N1cz09PSdibGFuaycpIHtcblx0XHRcdC8vdXNlIHNldFRpbWVvdXQgZm9yIGZpcmVmb3ggd2lsbCBsb3N0IGZvY3VzIGJlY2F1c2Ugb25Nb3VzZURvd24gdGhlbiB0cmlnZ2VyIG9uQ2xpY2ssIGZ1Y2tcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBpbnB1dC5mb2N1cygpIH0sIDApXHQvL3doZW4gc2hvdyAmJiAhZm9jdXMsIHRyaWdnZXIgZm9jdXMsXG5cdFx0fWVsc2UgaWYoIWlubGluZSAmJiBmb2N1cyE9PSdibGFuaycpIHtcblx0XHRcdG9uQmx1ciAmJiBvbkJsdXIoZXZlbnQsIHRoaXMpXG5cdFx0XHRmb2N1cyAmJiB0aGlzLnJlbW92ZVBpY2tlcigpXG5cdFx0fVxuXG5cdH1cblxuXHRjbGlja1BhbmUoKXtcblx0XHRpZih0aGlzLnN0YXRlLmZvY3VzKVxuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9ICdibGFuaydcblx0fVxuXG5cdHNob3cgKHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1cykge1xuXHQgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1c30pXG5cdH1cblxuXHR1cGRhdGVNb250aChudW0pe1xuXHRcdGNvbnN0IHtkYXRlfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBjZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgbnVtKVxuXHRcdHRoaXMudXBkYXRlRGF0ZSh7ZGF0ZTogY2RhdGV9LCB0cnVlKVxuXHR9XG5cblx0bnVtTW9udGgoZGF0ZSwgbnVtKXtcblx0XHRkYXRlID0gZGF0ZU9iamVjdChkYXRlKSB8fCB0b2RheVxuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG51bSwgZGF0ZS5nZXREYXRlKCkpXG5cdH1cblxuXHR1cGRhdGVEYXkoZGF0ZWluZm8pe1xuXHRcdHRoaXMudXBkYXRlRGF0ZShkYXRlaW5mbylcblx0fVxuXG5cdHVwZGF0ZURhdGUoZGF0ZWluZm8sIGlzTW9udGgpe1xuXHRcdGxldCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCB7c3RhdHVzPSdzZWxlY3RlZCd9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBnZXRTZWxlY3RlZCA9IGRhdGVPYmplY3QoIWlzTW9udGggPyBkYXRlaW5mby5kYXRlIDogdGhpcy5zdGF0ZVtzdGF0dXNdKVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZSwgZGF0ZTogZGF0ZWluZm8uZGF0ZSwgc2VsZWN0ZWQ6IGdldFNlbGVjdGVkLCBbc3RhdHVzXTogZ2V0U2VsZWN0ZWR9KVxuXG5cdFx0aWYoIWlzTW9udGgpe1xuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9IGZhbHNlXG5cdFx0XHRkYXRlaW5mby5zdGF0dXMgPSBzdGF0dXNcblx0XHRcdG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGRhdGVpbmZvLCB0aGlzKVxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9ICdibGFuaydcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVQaWNrZXIoKXtcblx0XHR0aGlzLnNob3coZmFsc2UpXG5cdFx0dGhpcy5yZWZzLmluc0RhdGVJbkJvZHkgJiYgdGhpcy5yZWZzLmluc0RhdGVJbkJvZHkucmVtb3ZlUGlja2VyKClcblx0fVxuXG4gICAgcGlja2VycyhzdGF0dXMpIHtcblx0XHRsZXQgJHBpY2tlcnMgPSBbXSwgb2Zmc2V0cyA9IFtdLCBkaCwgZGMsIGlkYXRlXG5cdFx0bGV0IHtkYXRlLCAgc3RhcnQsIGVuZCwgbWluLCBtYXgsIG9mZnNldH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IHtpbmxpbmUsIG1vbnRocywgbGFuZywgaGFzbHVuYXIsIGNsYXNzTmFtZX0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHNlbGVjdGVkID0gdGhpcy5zdGF0ZVtzdGF0dXM/c3RhdHVzOidzZWxlY3RlZCddXG5cdFx0bGV0IGNsYXNzZXMgPSBgZGF0ZS1waWNrZXIgZGF0ZS1waWNrZXItJHtpbmxpbmU/J2lubGluZSc6J2Jsb2NrJ30gJHtjbGFzc05hbWU/Y2xhc3NOYW1lOicnfSAke2hhc2x1bmFyPydkYXRlLXBpY2tlci1sdW5hcic6Jyd9YFxuXHRcdGxldCBwaWNrZXJXaWR0aCA9IHRoaXMuc3RhdGUud2lkdGggfHwgMjE1O1xuXHRcdGZvcih2YXIgaT0wOyBpPG1vbnRoczsgaSsrKXtcblx0XHRcdG9mZnNldHMucHVzaCh7bGVmdDogaSpwaWNrZXJXaWR0aCArIG9mZnNldC5sZWZ0LCB0b3A6IG9mZnNldC50b3B9KVxuXHRcdFx0aWRhdGUgPSB0aGlzLm51bU1vbnRoKGRhdGUsIGkpXG5cdFx0XHRkaCA9IDxEYXRlSGVhZGVyIGRhdGU9e2lkYXRlfSBsYW5nPXtoYXNsdW5hcj8nY24nOmxhbmd9IHVwZGF0ZU1vbnRoPXt0aGlzLnVwZGF0ZU1vbnRoLmJpbmQodGhpcyl9Lz5cblx0XHRcdGRjID0gPERhdGVDYWxlbmRhciB7Li4udGhpcy5wcm9wc30gbWluPXttaW59IG1heD17bWF4fSBkYXRlPXtpZGF0ZX0gc3RhdHVzPXtzdGF0dXN9IHN0YXJ0PXtzdGFydH0gZW5kPXtlbmR9IHNlbGVjdGVkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlRGF5LmJpbmQodGhpcyl9Lz5cblxuXHRcdFx0JHBpY2tlcnMucHVzaChpbmxpbmUgP1xuXHRcdFx0XHRcdCA8ZGl2IG9uTW91c2VEb3duPXt0aGlzLmNsaWNrUGFuZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e2NsYXNzZXN9IGtleT17aX0+e2RofXtkY308L2Rpdj4gOlxuXHRcdFx0XHRcdCA8ZGl2IG9uTW91c2VEb3duPXt0aGlzLmNsaWNrUGFuZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9e2NsYXNzZXN9IHN0eWxlPXtvZmZzZXRzW2ldfSBrZXk9e2l9PntkaH17ZGN9PC9kaXY+KVxuXHRcdH1cblx0XHRyZXR1cm4gJHBpY2tlcnNcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplICh3KSB7XG5cdFx0IXRoaXMucHJvcHMuaW5saW5lICYmIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3fSlcblx0XHR2YXIgb2Zmc2V0ID0gdGhpcy5zdGF0ZS5vZmZzZXRcblx0XHQvL+WPs+S+p+i3neemu+WIpOaWrVxuXHRcdHZhciBmdWxsV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcblx0XHRpZigyKncrb2Zmc2V0LmxlZnQgPiBmdWxsV2lkdGgpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7b2Zmc2V0OiB7bGVmdDogIG9mZnNldC5sZWZ0ICsgdGhpcy5pbnB1dFdpZHRoIC0gMip3LCB0b3A6IG9mZnNldC50b3B9LCB3aWR0aDogd30pXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuXHRcdGlmKHByb3BzLnNlbGVjdGVkICE9PSB0aGlzLnByb3BzLnNlbGVjdGVkKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiBkYXRlT2JqZWN0KHByb3BzLnNlbGVjdGVkKX0pXG5cdFx0fVxuXHRcdGlmKHByb3BzLnN0YXJ0ICE9PSB0aGlzLnByb3BzLnN0YXJ0KXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3N0YXJ0OiBkYXRlT2JqZWN0KHByb3BzLnN0YXJ0KX0pXG5cdFx0fVxuXHRcdGlmKHByb3BzLmVuZCAhPT0gdGhpcy5wcm9wcy5lbmQpe1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZW5kOiBkYXRlT2JqZWN0KHByb3BzLmVuZCl9KVxuXHRcdH1cblx0XHRpZihwcm9wcy5taW4gIT09IHRoaXMucHJvcHMubWluKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe21pbjogZGF0ZU9iamVjdChwcm9wcy5taW4pfSlcblx0XHR9XG5cdFx0aWYocHJvcHMubWF4ICE9PSB0aGlzLnByb3BzLm1heCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHttYXg6IGRhdGVPYmplY3QocHJvcHMubWF4KX0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRsZXQge3Nob3csIHNlbGVjdGVkLCBzdGFydCwgZW5kLCBzdGF0dXN9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCB7Zm9ybWF0LCBpbmxpbmUsIG1vbnRocywgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCBwbGFjZWhvbGRlckVuZCwgY2hpbGRyZW59ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBwaWNrZXIsIHBpY2tlcnMsIHBpY2tlckluQm9keTtcblx0XHRsZXQgY2xzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBjbHNXcmFwcGVyTmFtZSA9IGNsc05hbWU/JyAnK2Nsc05hbWUrJy1wYW5lcyc6ICcnXG5cdFx0bGV0IGRpID0gKHZhbCwgc3RhdCkgPT4gPERhdGVJbnB1dCBzZWxlY3RlZD17dmFsPT09dm9pZCAwID8gc2VsZWN0ZWQgOiB2YWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvcm1hdD17Zm9ybWF0fSBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtzdGF0PT0nZW5kJz9wbGFjZWhvbGRlckVuZDpwbGFjZWhvbGRlcn0gIGNoaWxkcmVuPXtjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gc3RhdHVzPXtzdGF0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZWY9e3N0YXR9Lz5cblx0XHRpZihzaG93KXtcblx0XHRcdHBpY2tlcnMgPSB0aGlzLnBpY2tlcnMoc3RhdHVzKVxuXHRcdFx0cGlja2VyID0gPGRpdiBjbGFzc05hbWU9eyhtb250aHM+MT8nZGF0ZS1tdWx0aSBjbGVhcmZpeCc6J2RhdGUtc2luZ2xlJykgKyBjbHNXcmFwcGVyTmFtZX0+e3BpY2tlcnN9PC9kaXY+XG5cdFx0XHRwaWNrZXJJbkJvZHkgPSA8RGF0ZUluQm9keSAgb25VcGRhdGU9e3RoaXMudXBkYXRlU2l6ZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9J2RhdGUtcGlja2VyLXdyYXBwZXInIHJlZj1cImluc0RhdGVJbkJvZHlcIj57cGlja2VyfTwvRGF0ZUluQm9keT5cblx0XHR9XG5cdFx0bGV0IGRpZG9tID0gc3RhcnQgfHwgZW5kID8gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWlucHV0c1wiPntzdGFydCE9PXZvaWQgMCAmJiBkaShzdGFydCwgJ3N0YXJ0Jyl9e2VuZCE9PXZvaWQgMCAmJiBkaShlbmQsICdlbmQnKX08L2Rpdj4gOiBkaSgpXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXsnZGF0ZS1jb21wb25lbnRzICcrIGNsc05hbWV9PlxuXHRcdFx0XHRcdHtkaWRvbX1cblx0XHRcdFx0XHR7aW5saW5lID8gcGlja2VyIDogcGlja2VySW5Cb2R5fVxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufTtcblxuUmVhY3REYXRlcGlja2VyUGx1cy5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzZmlsbDogZmFsc2UsXG5cdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRzZWxlY3RlZDogdG9kYXksXG5cdG1vbnRoczogMSxcblx0bGFuZzogJ2VuJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdERhdGVwaWNrZXJQbHVzO1xuIl19
