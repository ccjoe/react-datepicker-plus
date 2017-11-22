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

    return date instanceof Date ? date :
    //with hours or not
    typeof date === 'string' && date.length <= 10 ? new Date(date + ' 00:00:00') : new Date(date);
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

    // propTypes: {
    //   classes: React.PropTypes.string, //class split by spacing
    //   offset: React.PropTypes.object,
    //   updateSize: React.PropTypes.function
    // }
    // constructor(props) {
    //     super(props);
    // }

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
		value: function handleChange(event) {
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
			var customInput = _props2.customInput;
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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

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
		}
	}, {
		key: 'onBlur',
		value: function onBlur(event, input) {
			var _state2 = this.state;
			var show = _state2.show;
			var focus = _state2.focus;
			var status = _state2.status;
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
			if (!focus) {
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
		value: function clickPane(event) {
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
			var _props2 = this.props;
			var onChange = _props2.onChange;
			var autoHide = _props2.autoHide;
			var start = _props2.start;
			var end = _props2.end;
			var _state3 = this.state;
			var _state3$status = _state3.status;
			var status = _state3$status === undefined ? 'selected' : _state3$status;
			var selected = _state3.selected;

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
			var _state4 = this.state;
			var date = _state4.date;
			var start = _state4.start;
			var end = _state4.end;
			var min = _state4.min;
			var max = _state4.max;
			var offset = _state4.offset;
			var _props3 = this.props;
			var inline = _props3.inline;
			var months = _props3.months;
			var lang = _props3.lang;
			var haslunar = _props3.haslunar;
			var className = _props3.className;

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
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(props, oldprops) {
			if (props.selected !== this.props.selected) {
				this.setState({ selected: (0, _dateFormatJs.dateObject)(props.selected) });
			}
			if (props.start !== this.props.start) {
				this.setState({ start: (0, _dateFormatJs.dateObject)(props.start) });
			}
			if (props.end !== this.props.end) {
				this.setState({ end: (0, _dateFormatJs.dateObject)(props.end) });
			}
		}
	}, {
		key: 'render',
		value: function render() {
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
			var placeholder = _props4.placeholder;
			var placeholderEnd = _props4.placeholderEnd;
			var children = _props4.children;

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
				{ className: "date-components " + clsName },
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

},{"./date-calendar.js":1,"./date-format.js":3,"./date-header.js":4,"./date-in-body.js":6,"./date-input.js":7,"react":undefined,"react-dom":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtY2FsZW5kYXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZGF5LmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWZvcm1hdC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1oZWFkZXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaG9saWRheXMuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1pbnB1dC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1sdW5hci5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1tb250aC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10ZXJtLmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRpbWUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL1JlYWN0RGF0ZXBpY2tlclBsdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzJCQUVsQixpQkFBaUI7Ozs7MEJBQ2xCLGdCQUFnQjs7OztJQUMvQixZQUFZO1dBQVosWUFBWTs7QUFDTixVQUROLFlBQVksQ0FDTCxLQUFLLEVBQUU7d0JBRGQsWUFBWTs7QUFFViw2QkFGRixZQUFZ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RUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxF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ZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IERhdGVNb250aCBmcm9tICcuL2RhdGUtbW9udGguanMnXHJcbmltcG9ydCBEYXRlVGltZSBmcm9tICcuL2RhdGUtdGltZS5qcyc7XHJcbmNsYXNzIERhdGVDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IGRhdGVjbGQgID0gPERhdGVNb250aCB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdGNvbnN0IGRhdGV0aW1lID0gPERhdGVUaW1lIHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0bGV0IHBpY2tlciA9IHRoaXMucHJvcHMudGltZSA/IGRhdGVjbGQrZGF0ZXRpbWU6IGRhdGVjbGQ7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNhbGVuZGFyIGFuaW1hdGVkIGluZmluaXRlIGZhZGVJblJpZ2h0XCI+XHJcblx0XHRcdHtwaWNrZXJ9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlQ2FsZW5kYXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9IGZyb20gJy4vZGF0ZS1sdW5hcidcclxuaW1wb3J0IHtnZXRTb2xhclRlcm1JbmRleCwgZ2V0TW9udGhTb2xhclRlcm1zfSBmcm9tICcuL2RhdGUtdGVybSdcclxuaW1wb3J0IHtzYWxhckhvbGlkYXlzLCBsdW5hckhvbGlkYXlzfSBmcm9tJy4vZGF0ZS1ob2xpZGF5cydcclxuLy9yZW5kZXIgbW9udGhcclxuLy9jdXJyZW50IG1vbnRoXHJcbmNsYXNzIERhdGVEYXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLypwcm9wVHlwZXM6IHtcclxuICAgICAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0qL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5zZWxlY3RlZCwgcHJvcHMuc2VsZWN0ZWQsICdzZWxlY3RlZCcpXHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluafkOWkqeeahOaJgOacieS/oeaBryBtKzHmiY3mmK/mmL7npLrnlKjnmoTmnIjliIZcclxuICAgIGdldERheUluZm8oKXtcclxuICAgICAgICB2YXIge2RhdGUsIGVkYXRlLCBtaW4sIG1heCwgc3RhcnQsIGVuZCwgc2VsZWN0ZWQsIHNlbGVjdGluZywgc3RhdHVzLCBkYXlBZGRvbiB9ID0gdGhpcy5wcm9wcyAvL3NlbGVjdGVkIGRhdGUsIHJlbmRlciBkYXRlLCBlYWNoIGRhdGVcclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkIHx8IG5ldyBEYXRlKClcclxuICAgICAgICAvLyBzZWxlY3RlZCA9IHNlbGVjdGVkIGluc3RhbmNlb2YgRGF0ZSA/IHNlbGVjdGVkIDogbmV3IERhdGUoc2VsZWN0ZWQpXHJcbiAgICAgICAgLy8gZGF0ZSA9IGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpXHJcbiAgICAgICAgLy8gZWRhdGUgPSBlZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBlZGF0ZSA6IG5ldyBEYXRlKGVkYXRlKVxyXG4gICAgICAgIGNvbnN0IFtzeSwgc20sIHNkXSA9IFtzZWxlY3RlZC5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZC5nZXRNb250aCgpLCBzZWxlY3RlZC5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW2N5LCBjbSwgY2RdID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKV1cclxuXHRcdGNvbnN0IFt5LCBtLCBkXSA9IFtlZGF0ZS5nZXRGdWxsWWVhcigpLCBlZGF0ZS5nZXRNb250aCgpLCBlZGF0ZS5nZXREYXRlKCldXHJcblx0XHRsZXQgdG9ObyA9IHggPT4geCA/ICt4IDogMFxyXG4gICAgICAgIGxldCBlZGF0ZU5vID0gdG9ObyhlZGF0ZSksIG1pbk5vID0gdG9ObyhtaW4pLCBtYXhObyA9IHRvTm8obWF4KSwgc3RhcnRObz10b05vKHN0YXJ0KSwgZW5kTm89dG9ObyhlbmQpO1xyXG5cdFx0bGV0IHJhbmdlID0gKHN0YXJ0Tm8sIGVuZE5vKSA9PiBlZGF0ZU5vID49IHN0YXJ0Tm8gJiYgZWRhdGVObyA8PSBlbmROb1xyXG5cdFx0bGV0IG1pbm1heCA9IChtaW5ObywgbWF4Tm8pID0+IChtaW5ObyAmJiBlZGF0ZU5vIDwgbWluTm8pIHx8IChtYXhObyAmJiBlZGF0ZU5vID4gbWF4Tm8pXHJcblxyXG5cdFx0bGV0IHJlYWxNaW4gPSBtaW4mJm1pbk5vPnN0YXJ0Tm8/bWluTm86c3RhcnROb1xyXG5cdFx0bGV0IHJlYWxNYXggPSAhbWF4fHxtYXhObz5lbmRObz9lbmRObzptYXhOb1xyXG5cclxuICAgICAgICB2YXIgZGF5aW5mbyA9IHtcclxuICAgICAgICAgICAgZGF0ZTogZWRhdGUsXHJcbiAgICAgICAgICAgIGx1bmFyOiB0b0x1bmFyRGF0ZShlZGF0ZSksXHJcbiAgICAgICAgICAgIHRlcm06IGdldE1vbnRoU29sYXJUZXJtcyh5LCBtKVtkXSxcclxuICAgICAgICAgICAgc2FsYXJmZXN0OiBzYWxhckhvbGlkYXlzW3RoaXMuemVybyhtKzEpK3RoaXMuemVybyhkKV0sICAvL+i/memHjOeahOaciOS7veeUqOeahOaYr+inhuWbvueahFxyXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG0gPT09IGNtLFxyXG5cdFx0XHRjdXJyZW50RGF5OiB5ID09PSBzeSAmJiBtID09PSBzbSAmJiBkID09PSBzZCxcclxuXHRcdFx0Y3VycmVudFBvaW50OiBlZGF0ZU5vID09PSByZWFsTWluIHx8IGVkYXRlTm8gPT09IHJlYWxNYXhcclxuICAgICAgICB9O1xyXG5cdFx0Ly/pnIDopoHljLrliIYgc3RhcnQo5LiN6IO95aSn5LqOZW5kKeS4jmVuZCjmsLTog73lsI/kuo5zdGFydCksIOayoeacieWImeebtOaOpeeci21pbiBtYXggQHRvZG9cclxuXHRcdC8v5piv5ZCm5Zyo6ZmQ5Yi255qE6IyD5Zu05YaFXHJcblx0XHRsZXQgaXNTdGFydCA9IHN0YXR1cz09PSdzdGFydCcsIGlzRW5kID0gc3RhdHVzPT09J2VuZCdcclxuXHJcblx0XHRpZihpc1N0YXJ0KXtcclxuXHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IG1pbm1heChtaW5ObywgcmVhbE1heClcclxuXHRcdH1lbHNlIGlmKGlzRW5kKXtcclxuXHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IG1pbm1heChyZWFsTWluLCBtYXhObylcclxuXHRcdH1lbHNlIGlmKG1pbiB8fCBtYXgpe1xyXG5cdFx0XHRkYXlpbmZvLmRpc2FibGVkID0gbWlubWF4KG1pbk5vLCBtYXhObylcclxuXHRcdH1cclxuXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIGRheWluZm8uaW5yYW5nZSA9IHJhbmdlKHN0YXJ0LCBlbmQpIC8v5piv5ZCm5Zyo6YCJ5oup57uT5p6c55qE6IyD5Zu05YaFXHJcbiAgICAgICAgaWYoc2VsZWN0aW5nICYmIHN0YXR1cykgZGF5aW5mby5pbnNlbGVjdCA9IGlzU3RhcnQgPyByYW5nZShzZWxlY3RpbmcsIGVuZCkgOiByYW5nZShzdGFydCwgc2VsZWN0aW5nKVxyXG5cclxuICAgICAgICBpZihkYXlBZGRvbil7XHJcbiAgICAgICAgICAgIGRheWluZm8uYWRkb24gPSBkYXlBZGRvbihkYXlpbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXlpbmZvLmx1bmFyZmVzdCA9IGx1bmFySG9saWRheXNbdGhpcy56ZXJvKGRheWluZm8ubHVuYXIubW9udGgpICsgdGhpcy56ZXJvKGRheWluZm8ubHVuYXIuZGF5KV07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF5aW5mbywgZWRhdGVObywgc3RhcnQsIGVuZCwgJ3N0YXJ0ZW5kJylcclxuICAgICAgICByZXR1cm4gZGF5aW5mbztcclxuICAgIH1cclxuICAgIHplcm8gKG4pIHtcclxuICAgICAgICByZXR1cm4gbjwxMCA/ICcwJytuIDogblxyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGUoZGF0ZWluZm8pIHtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlaW5mbyk7XHJcbiAgICB9XHJcbiAgICBzZXRNb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyLmJpbmQodGhpcywgZGF0ZWluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5nZXREYXlJbmZvKClcclxuICAgICAgICBsZXQgeyBkYXRlLCBzYWxhcmZlc3QsIGx1bmFyZmVzdCwgdGVybSwgbHVuYXIsIGN1cnJlbnREYXksIGN1cnJlbnRQb2ludCwgY3VycmVudE1vbnRoLCBkaXNhYmxlZCwgaW5yYW5nZSwgaW5zZWxlY3QsIGFkZG9ufSA9IGluZm9cclxuICAgICAgICBsZXQgZmVzdERvbSwge2Zlc3RpdmFsLCBoYXNsdW5hcn0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKGZlc3RpdmFsICYmIChzYWxhcmZlc3R8fGx1bmFyZmVzdCkpe1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1mZXN0XCI+eyhzYWxhcmZlc3Q/c2FsYXJmZXN0OicnKSArIChsdW5hcmZlc3Q/bHVuYXJmZXN0OicnKX08L3NwYW4+e2FkZG9ufTwvZGl2PlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1kXCI+e2RhdGUuZ2V0RGF0ZSgpfTwvc3Bhbj57YWRkb259PC9kaXY+XHJcblx0XHR9XHJcbiAgICAgICAgaWYoaGFzbHVuYXIpeyAgIC8vaGFzIGx1bmFyIGFuZCBtdXN0IGhhcyB0ZXJtXHJcbiAgICAgICAgICAgIGZlc3REb20gPSA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtZGF5LXNldHNcIj57ZmVzdERvbX08c3BhbiBjbGFzc05hbWU9XCJkYXRlLWx1bmFyXCI+e3Rlcm0gPyB0ZXJtIDogdG9MdW5hckRheShsdW5hci5kYXkpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtZGF5XCIgKyAoIWN1cnJlbnRNb250aCA/IFwiIGRhdGUtbm9jdXJyZW50IFwiIDogXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGN1cnJlbnRQb2ludCA/ICcgZGF0ZS1wb2ludCcgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChjdXJyZW50RGF5ID8gJyBkYXRlLXNlbGVjdGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGRpc2FibGVkID8gJyBkYXRlLWRpc2FibGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGlucmFuZ2UgPyAnIGRhdGUtcmFuZ2UnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoaW5zZWxlY3QgPyAnIGRhdGUtaG92ZXInIDogXCJcIikgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5zZXREYXRlLmJpbmQodGhpcywgaW5mbykgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRNb3VzZUVudGVyLmJpbmQodGhpcywgaW5mbyl9PlxyXG4gICAgICAgICAgICB7ZmVzdERvbX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVEYXlcclxuIiwiLyoqXHJcbiAqIGRhdGUgYXBp5bCB6KOFXHJcbiAqIEBhdXRob3IgSm9lIExpdVxyXG4gKiBAZW1haWwgaWNhcmV1LmpvZUBnbWFpbC5jb21cclxuICovXHJcbmZ1bmN0aW9uIGRhdGVPYmplY3QoZGF0ZSl7XHJcblx0aWYoIWRhdGUpIHJldHVybiBkYXRlXHJcblxyXG5cdHJldHVybiBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUgOiAoXHJcblx0XHQvL3dpdGggaG91cnMgb3Igbm90XHJcblx0XHR0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycgJiYgZGF0ZS5sZW5ndGg8PTEwID9cclxuXHRcdG5ldyBEYXRlKGRhdGUgKyAnIDAwOjAwOjAwJyk6XHJcblx0XHRuZXcgRGF0ZShkYXRlKVxyXG5cdClcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlLCBmb3JtYXQpe1xyXG4gIGlmKCFkYXRlKSByZXR1cm4gJyc7XHJcbiAgdmFyIHdlZWtzID0gWyfml6UnLCfkuIAnLCfkuownLCfkuIknLCflm5snLCfkupQnLCflha0nXTtcclxuICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgZm9ybWF0ID0gZGF0ZTtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIGRhdGUgPSBkYXRlT2JqZWN0KGRhdGUpO1xyXG4gICAgdmFyIG1hcCA9IHtcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelXHJcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enklxyXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAvL+avq+enklxyXG4gICAgICAgIFwiV1wiOiB3ZWVrc1tkYXRlLmdldERheSgpXSAvL+WRqFxyXG4gICAgfTtcclxuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8oW3lNZGhtc3FTV10pKy9nLCBmdW5jdGlvbihhbGwsIHQpe1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmKHYgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGFsbC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgIHYgPSAnMCcgKyB2O1xyXG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoLTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHQgPT09ICd5Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gYWxsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbn1cclxudmFyIHRvZGF5ID0gbmV3IERhdGUoKVxyXG52YXIgdG9kYXlTdGFydCA9IHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxudmFyIHBsdXNEYXkgPSBmdW5jdGlvbihkYXRlLCBudW0pe1xyXG4gICAgbnVtID0gbnVtICE9PSB2b2lkIDAgPyBudW0gOiAxXHJcbiAgICByZXR1cm4gbmV3IERhdGUoK2RhdGUgKyAzNjAwMDAwKjI0Km51bSlcclxufVxyXG5cclxudmFyIG1pbnVzRGF5ID0gZnVuY3Rpb24oZGF0ZSwgbnVtKXtcclxuICAgIHJldHVybiBwbHVzRGF5KC1udW0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkYXRlRm9ybWF0LFxyXG5cdGRhdGVEaWZmLFxyXG5cdHRvZGF5LFxyXG5cdHRvZGF5U3RhcnQsXHJcblx0ZGF0ZU9iamVjdCxcclxuXHRwbHVzRGF5LFxyXG5cdG1pbnVzRGF5XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IGNoYXJzID0ge1xyXG5cdHdlZWtzQ246Wyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcclxuICAgIHdlZWtzRW5GOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXHJcbiAgICB3ZWVrc0VuUzogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuICAgIG1vbnRoc0NuOlsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcclxuICAgIG1vbnRoc0VuOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG59XHJcbmNsYXNzIGRhdGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdC8vIHByb3BUeXBlczoge1xyXG5cdC8vICAgICB1cGRhdGVNb250aDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuXHQvLyB9LFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cdGdldERhdGUoKXtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGVcclxuXHR9XHJcblx0Y2hhbmdlTW9udGgobnVtKXtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlTW9udGgobnVtKVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3Qge2xhbmd9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgY24gPSBsYW5nID09PSAnY24nXHJcblx0XHRsZXQgeWVhcj10aGlzLmdldERhdGUoKS5nZXRGdWxsWWVhcigpLCBtb250aD10aGlzLmdldERhdGUoKS5nZXRNb250aCgpKzE7XHJcblxyXG5cdFx0bGV0IG1vbnRoc3RyID0gY24/KHllYXIrJyAnK21vbnRoKyfmnIgnKSA6IGNoYXJzLm1vbnRoc0VuW21vbnRoLTFdKycgJyt5ZWFyO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpdGxlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1wcmV2XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgLTEpIH0+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbVwiPnttb250aHN0cn08L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1uZXh0XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgMSkgfT48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGUtd3RpdGxlXCI+XHJcblx0XHRcdFx0e2NoYXJzW2NuPyd3ZWVrc0NuJzond2Vla3NFblMnXS5tYXAoKHdlZWssIGtleSkgPT4gPHNwYW4ga2V5PXtrZXl9Pnt3ZWVrfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGVIZWFkZXIiLCJ2YXIgc2FsYXJIb2xpZGF5cyA9IHtcclxuICAgICcwMTAxJzogJ+WFg+aXpicsXHJcbiAgICAnMDIxNCc6ICfmg4XkuronLFxyXG4gICAgJzAzMDgnOiAn5aaH5aWzJyxcclxuICAgICcwMzEyJzogJ+akjeagkScsXHJcbiAgICAnMDQwMSc6ICfmhJrkuronLFxyXG4gICAgJzA1MDEnOiAn5Yqz5YqoJyxcclxuICAgICcwNTA0JzogJ+mdkuW5tCcsXHJcbiAgICAnMDYwMSc6ICflhL/nq6UnLFxyXG4gICAgJzA3MDEnOiAn5bu65YWaJyxcclxuICAgICcwODAxJzogJ+W7uuWGmycsXHJcbiAgICAnMDkxMCc6ICfmlZnluIgnLFxyXG4gICAgJzEwMDEnOiAn5Zu95bqGJyxcclxuICAgICcxMjI0JzogJ+W5s+WuieWknCcsXHJcbiAgICAnMTIyNSc6ICflnKPor54nXHJcbn1cclxuXHJcbnZhciBsdW5hckhvbGlkYXlzID0ge1xyXG4gICAgJzAxMDEnOiAn5pil6IqCJyxcclxuICAgICcwMTE1JzogJ+WFg+WutScsXHJcbiAgICAnMDUwNSc6ICfnq6/ljYgnLFxyXG4gICAgJzA3MDcnOiAn5LiD5aSVJyxcclxuICAgICcwNzE1JzogJ+S4reWFgycsXHJcbiAgICAnMDgxNSc6ICfkuK3np4snLFxyXG4gICAgJzA5MDknOiAn6YeN6ZizJyxcclxuICAgICcxMjA4JzogJ+iFiuWFqycsXHJcbiAgICAnMTIyNCc6ICflsI/lubQnXHJcbn1cclxuXHJcbmV4cG9ydCB7c2FsYXJIb2xpZGF5cywgbHVuYXJIb2xpZGF5c31cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmNsYXNzIERhdGVJbkJvZHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIHByb3BUeXBlczoge1xyXG4gIC8vICAgY2xhc3NlczogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgLy9jbGFzcyBzcGxpdCBieSBzcGFjaW5nXHJcbiAgLy8gICBvZmZzZXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgLy8gICB1cGRhdGVTaXplOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY3Rpb25cclxuICAvLyB9XHJcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAvLyAgICAgc3VwZXIocHJvcHMpO1xyXG4gIC8vIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgLy8gdGhpcy5wb3B1cC5jbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzZXNcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cClcclxuICAgIHRoaXMucmVuZGVyTGF5ZXIoKVxyXG4gICAgaWYoIXRoaXMucHJvcHMuaW5saW5lKXtcclxuICAgICAgbGV0IGFkanVzdFNpemUgPSB0aGlzLnBvcHVwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RhdGUtcGlja2VyJylbMF0uY2xpZW50V2lkdGhcclxuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSAmJiB0aGlzLnByb3BzLm9uVXBkYXRlKGFkanVzdFNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgdGhpcy5yZW5kZXJMYXllcigpXHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvLyB0aGlzLnJlbW92ZVBpY2tlcigpXHJcbiAgfVxyXG4gIHJlbW92ZVBpY2tlcigpe1xyXG4gICAgLy8gdGhpcy5wb3B1cCA9IGN1cnJlbnQgPyB0aGlzLnBvcHVwIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZS1waWNrZXItd3JhcHBlcicpWzBdXHJcbiAgICBpZih0aGlzLnBvcHVwKXtcclxuXHRcdFx0XHRSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKHRoaXMucG9wdXApXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwKVxyXG5cdFx0XHRcdHRoaXMucG9wdXAgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlckxheWVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgUmVhY3RET00ucmVuZGVyKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucG9wdXApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBjaGlsZHJlbj17bnVsbH0gc3R5bGU9e3RoaXMucHJvcHMub2Zmc2V0fS8+XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5Cb2R5OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxyXG5pbXBvcnQge2RhdGVGb3JtYXR9IGZyb20gJy4vZGF0ZS1mb3JtYXQnXHJcbmNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Ly8gIHByb3BUeXBlczoge1xyXG5cdC8vICAgICAvLyBlbGVtZW50OiBSZWFjdC5Qcm9wVHlwZXMuZWxlbWVudCxcclxuXHQvLyAgICAgc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5hbnksXHJcblx0Ly8gICAgIGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuXHQvLyAgICAgb25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuXHQvLyAgICAgb25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcblx0Ly8gICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG5cdC8vIH1cclxuXHQgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblx0IH1cclxuLypcdGdldEluaXRpYWxTdGF0ZSAoKSB7XHJcblx0ICAgIHJldHVybiB7XHJcblx0ICAgICAgLy8gdmFsdWU6ICB0aGlzLmRhdGVTdHJpbmcoKVxyXG5cdCAgICAgICAgc3R5bGVzOiB7XHJcblx0XHQgICAgICB0b3A6IDAsXHJcblx0XHQgICAgICBsZWZ0OiAwXHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblx0fVxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdCAgdGhpcy5zZXRTdGF0ZSh7XHJcblx0ICAgIC8vIHN0eWxlczpcclxuXHQgIH0pXHJcblx0fSovXHJcblx0ZGF0ZVN0cmluZygpe1xyXG5cdFx0Y29uc3Qge2Zvcm1hdCwgc2VsZWN0ZWR9ID0gdGhpcy5wcm9wc1xyXG5cdFx0cmV0dXJuIGZvcm1hdCA/IGRhdGVGb3JtYXQoc2VsZWN0ZWQsIGZvcm1hdCkgOiBzZWxlY3RlZFxyXG5cdH1cclxuXHRoYW5kbGVCbHVyKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKVxyXG5cdH1cclxuXHRoYW5kbGVGb2N1cyhldmVudCl7XHJcblx0XHR0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQsIHRoaXMpXHJcblx0fVxyXG5cdGZvY3VzICgpIHtcclxuXHQgICAgdGhpcy5yZWZzLmlucHV0LmZvY3VzKClcclxuXHR9XHJcblx0aGFuZGxlQ2hhbmdlKGV2ZW50KXtcclxuXHRcdC8vIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHRoaXMpXHJcblx0fVxyXG5cdGdldElucHV0KCl7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpXHJcblx0fVxyXG5cdGhhbmRsZVBvc2l0aW9uKCl7XHJcblx0XHQvLyBGaXggZm9yIElFOC0ncyBFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0ICBpZiAoJ1RleHRSZWN0YW5nbGUnIGluIHdpbmRvdyAmJiAhKCd3aWR0aCcgaW4gVGV4dFJlY3RhbmdsZS5wcm90b3R5cGUpKSB7XHJcblx0ICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHRSZWN0YW5nbGUucHJvdG90eXBlLCB7XHJcblx0ICAgICAgJ3dpZHRoJzogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdDsgfSB9LFxyXG5cdCAgICAgICdoZWlnaHQnOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wOyB9IH1cclxuXHQgICAgfSk7XHJcblx0ICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldElucHV0KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHR9XHJcblxyXG5cdHJlY3Vyc2l2ZU1hcChjaGlsZHMsIGlucHV0RWxlbSkge1xyXG5cdFx0dmFyIGNvcHlIYXNDaGlsZEVsZW0gPSAoY2hpbGQpID0+ICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuXHRcdFx0XHRjaGlsZHJlbjogdGhpcy5yZWN1cnNpdmVNYXAoY2hpbGQucHJvcHMuY2hpbGRyZW4sIGlucHV0RWxlbSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmIChjaGlsZHMucHJvcHMgJiYgY2hpbGRzLnByb3BzLmNoaWxkcmVuKSB7XHJcblx0XHRcdHJldHVybiBjb3B5SGFzQ2hpbGRFbGVtKGNoaWxkcylcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcywgY2hpbGQgPT4ge1xyXG5cdFx0XHRpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGNoaWxkLnR5cGUgIT09ICdpbnB1dCcgPyBjaGlsZCA6IGlucHV0RWxlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY2hpbGQucHJvcHMuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRjaGlsZCA9IGNvcHlIYXNDaGlsZEVsZW0oY2hpbGQpXHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNoaWxkO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdHNldENoaWxkSW5wdXQoY2hpbGRyZW4sIGlucHV0RWxlbSl7XHJcblx0XHRpZihjaGlsZHJlbiAmJiBjaGlsZHJlbi5wcm9wcyl7XHJcblx0XHRcdHJldHVybiA8Y2hpbGRyZW4+e3RoaXMuc2V0Q2hpbGRJbnB1dChjaGlsZHJlbi5wcm9wcy5jaGlsZHJlbiwgaW5wdXRFbGVtKX08L2NoaWxkcmVuPlxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gY2hpbGQudHlwZSA9PT0gJ2lucHV0JyA/IGlucHV0RWxlbSA6IGNoaWxkXHJcblx0XHRcdH0pXHJcbi8qIFx0XHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHRcdHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBjaGlsZC50eXBlID09PSAnaW5wdXQnID8gaW5wdXRFbGVtIDogY2hpbGRcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0PC9kaXY+ICovXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZWxzZSBpZihjaGlsZHJlbil7XHJcblx0XHQvLyBcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcclxuXHRcdC8vIFx0XHRyZXR1cm4gY2hpbGQudHlwZSA9PT0gJ2lucHV0JyA/IGlucHV0RWxlbSA6IGNoaWxkXHJcblx0XHQvLyBcdH0pXHJcblx0XHQvLyB9XHJcblxyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IHsgY3VzdG9tSW5wdXQsIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuXHRcdGNvbnN0IGlucHV0RWxlbSA9IDxpbnB1dCByZWY9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSBkaXNhYmxlZD17ZGlzYWJsZWR9IHZhbHVlPXt0aGlzLmRhdGVTdHJpbmcoKX0gb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cclxuXHRcdHJldHVybiBjaGlsZHJlbiA/IHRoaXMucmVjdXJzaXZlTWFwKGNoaWxkcmVuLCBpbnB1dEVsZW0pIDogaW5wdXRFbGVtXHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0IiwiLy8g5Yac5Y6G5pyI5Lu95L+h5oGv6KGoXHJcbnZhciBsdW5hckluZm8gPSBbXHJcbiAgICAweDA0YmQ4LDB4MDRhZTAsMHgwYTU3MCwweDA1NGQ1LDB4MGQyNjAsMHgwZDk1MCwweDE2NTU0LDB4MDU2YTAsMHgwOWFkMCwweDA1NWQyLFxyXG4gICAgMHgwNGFlMCwweDBhNWI2LDB4MGE0ZDAsMHgwZDI1MCwweDFkMjU1LDB4MGI1NDAsMHgwZDZhMCwweDBhZGEyLDB4MDk1YjAsMHgxNDk3NyxcclxuICAgIDB4MDQ5NzAsMHgwYTRiMCwweDBiNGI1LDB4MDZhNTAsMHgwNmQ0MCwweDFhYjU0LDB4MDJiNjAsMHgwOTU3MCwweDA1MmYyLDB4MDQ5NzAsXHJcbiAgICAweDA2NTY2LDB4MGQ0YTAsMHgwZWE1MCwweDA2ZTk1LDB4MDVhZDAsMHgwMmI2MCwweDE4NmUzLDB4MDkyZTAsMHgxYzhkNywweDBjOTUwLFxyXG4gICAgMHgwZDRhMCwweDFkOGE2LDB4MGI1NTAsMHgwNTZhMCwweDFhNWI0LDB4MDI1ZDAsMHgwOTJkMCwweDBkMmIyLDB4MGE5NTAsMHgwYjU1NyxcclxuICAgIDB4MDZjYTAsMHgwYjU1MCwweDE1MzU1LDB4MDRkYTAsMHgwYTVkMCwweDE0NTczLDB4MDUyZDAsMHgwYTlhOCwweDBlOTUwLDB4MDZhYTAsXHJcbiAgICAweDBhZWE2LDB4MGFiNTAsMHgwNGI2MCwweDBhYWU0LDB4MGE1NzAsMHgwNTI2MCwweDBmMjYzLDB4MGQ5NTAsMHgwNWI1NywweDA1NmEwLFxyXG4gICAgMHgwOTZkMCwweDA0ZGQ1LDB4MDRhZDAsMHgwYTRkMCwweDBkNGQ0LDB4MGQyNTAsMHgwZDU1OCwweDBiNTQwLDB4MGI1YTAsMHgxOTVhNixcclxuICAgIDB4MDk1YjAsMHgwNDliMCwweDBhOTc0LDB4MGE0YjAsMHgwYjI3YSwweDA2YTUwLDB4MDZkNDAsMHgwYWY0NiwweDBhYjYwLDB4MDk1NzAsXHJcbiAgICAweDA0YWY1LDB4MDQ5NzAsMHgwNjRiMCwweDA3NGEzLDB4MGVhNTAsMHgwNmI1OCwweDA1NWMwLDB4MGFiNjAsMHgwOTZkNSwweDA5MmUwLFxyXG4gICAgMHgwYzk2MCwweDBkOTU0LDB4MGQ0YTAsMHgwZGE1MCwweDA3NTUyLDB4MDU2YTAsMHgwYWJiNywweDAyNWQwLDB4MDkyZDAsMHgwY2FiNSxcclxuICAgIDB4MGE5NTAsMHgwYjRhMCwweDBiYWE0LDB4MGFkNTAsMHgwNTVkOSwweDA0YmEwLDB4MGE1YjAsMHgxNTE3NiwweDA1MmIwLDB4MGE5MzAsXHJcbiAgICAweDA3OTU0LDB4MDZhYTAsMHgwYWQ1MCwweDA1YjUyLDB4MDRiNjAsMHgwYTZlNiwweDBhNGUwLDB4MGQyNjAsMHgwZWE2NSwweDBkNTMwLFxyXG4gICAgMHgwNWFhMCwweDA3NmEzLDB4MDk2ZDAsMHgwNGJkNywweDA0YWQwLDB4MGE0ZDAsMHgxZDBiNiwweDBkMjUwLDB4MGQ1MjAsMHgwZGQ0NSxcclxuICAgIDB4MGI1YTAsMHgwNTZkMCwweDA1NWIyLDB4MDQ5YjAsMHgwYTU3NywweDBhNGIwLDB4MGFhNTAsMHgxYjI1NSwweDA2ZDIwLDB4MGFkYTBcclxuXTtcclxuIFxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOeahOaAu+WkqeaVsFxyXG5mdW5jdGlvbiBsdW5hclllYXJEYXlzKHkpIHtcclxuICAgIHZhciBpLCBzdW0gPSAzNDhcclxuICAgIGZvciAoaSA9IDB4ODAwMDsgaSA+IDB4ODsgaSA+Pj0gMSkgc3VtICs9IChsdW5hckluZm9beSAtIDE5MDBdICYgaSkgPyAxIDogMFxyXG4gICAgcmV0dXJuIChzdW0gKyBsZWFwRGF5cyh5KSlcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubRt5pyI55qE5oC75aSp5pWwXHJcbmZ1bmN0aW9uIGx1bmFyTW9udGhEYXlzKHksIG0pIHtcclxuICAgIHJldHVybiAoKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAoMHgxMDAwMCA+PiBtKSkgPyAzMCA6IDI5KVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOmXsOaciOeahOWkqeaVuFxyXG5mdW5jdGlvbiBsZWFwRGF5cyh5KSB7XHJcbiAgICBpZiAobGVhcE1vbnRoKHkpKSByZXR1cm4gKChsdW5hckluZm9beSAtIDE5MDBdICYgMHgxMDAwMCkgPyAzMCA6IDI5KVxyXG4gICAgZWxzZSByZXR1cm4gKDApXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm06Zew5ZOq5Liq5pyIIDEtMTIgLCDmspLpl7DkvKDlm54gMFxyXG5mdW5jdGlvbiBsZWFwTW9udGgoeSkge1xyXG4gICAgcmV0dXJuIChsdW5hckluZm9beSAtIDE5MDBdICYgMHhmKVxyXG59XHJcblxyXG5cclxuLy/lhazljobovazlhpzljoZcclxuZnVuY3Rpb24gdG9MdW5hckRhdGUob2JqRGF0ZSkge1xyXG4gICAgdmFyIGksIGxlYXAgPSAwLFxyXG4gICAgICAgIHRlbXAgPSAwO1xyXG4gICAgdmFyIGJhc2VEYXRlID0gbmV3IERhdGUoMTkwMCwgMCwgMzEpO1xyXG4gICAgdmFyIG9mZnNldCA9IChvYmpEYXRlIC0gYmFzZURhdGUpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgcmVzdWx0LmRheUN5bCA9IG9mZnNldCArIDQwO1xyXG4gICAgcmVzdWx0Lm1vbkN5bCA9IDE0O1xyXG5cclxuICAgIGZvciAoaSA9IDE5MDA7IGkgPCAyMDUwICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIHRlbXAgPSBsdW5hclllYXJEYXlzKGkpO1xyXG4gICAgICAgIG9mZnNldCAtPSB0ZW1wO1xyXG4gICAgICAgIHJlc3VsdC5tb25DeWwgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgKz0gdGVtcDtcclxuICAgICAgICBpLS07XHJcbiAgICAgICAgcmVzdWx0Lm1vbkN5bCAtPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQueWVhciA9IGk7XHJcbiAgICByZXN1bHQueWVhckN5bCA9IGkgLSAxODY0O1xyXG5cclxuICAgIGxlYXAgPSBsZWFwTW9udGgoaSk7IC8v6Zew5ZOq5Liq5pyIXHJcbiAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChpID0gMTsgaSA8IDEzICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIC8v6Zew5pyIXHJcbiAgICAgICAgaWYgKGxlYXAgPiAwICYmIGkgPT0gKGxlYXAgKyAxKSAmJiByZXN1bHQuaXNMZWFwID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlbXAgPSBsZWFwRGF5cyhyZXN1bHQueWVhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGx1bmFyTW9udGhEYXlzKHJlc3VsdC55ZWFyLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6Kej6Zmk6Zew5pyIXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXAgPT0gdHJ1ZSAmJiBpID09IChsZWFwICsgMSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0IC09IHRlbXBcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXN1bHQubW9uQ3lsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPT0gMCAmJiBsZWFwID4gMCAmJiBpID09IGxlYXAgKyAxKVxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAtLXJlc3VsdC5tb25DeWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ICs9IHRlbXA7XHJcbiAgICAgICAgLS1pO1xyXG4gICAgICAgIC0tcmVzdWx0Lm1vbkN5bDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQubW9udGggPSBpO1xyXG4gICAgcmVzdWx0LmRheSA9IG9mZnNldCArIDE7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL+WGnOWOhuaVsOWtl+i9rOWtl+esplxyXG5mdW5jdGlvbiB0b0x1bmFyRGF5IChkKXtcclxuICAgIHZhciBsdW5hckRheSA9IFsn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn5Y2BJywgJ+WNgeS4gCcsICfljYHkuownXTtcclxuICAgIHZhciBsdW5hclRlZW4gPSBbJ+WInScsICfljYEnLCAn5bu/JywgJ+S4iSddO1xyXG4gICAgdmFyIGRzdHIgPSBkKycnLFxyXG4gICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMF0sIFxyXG4gICAgICAgIHJpZ2h0TnVtID0gZHN0ci5sZW5ndGggPCAyID8gJycgOiBkc3RyLnN1YnN0cmluZygxKSxcclxuICAgICAgICByaWdodERlY28gPSByaWdodE51bT09PScwJyA/ICfljYEnIDogbHVuYXJEYXlbTnVtYmVyKHJpZ2h0TnVtKS0xXTtcclxuICAgIGlmKGQgPiAxMCl7XHJcbiAgICAgICAgdGVlbiA9IGx1bmFyVGVlblsxXTtcclxuICAgICAgICBpZihkPj0yMCl7XHJcbiAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMl07XHJcbiAgICAgICAgICAgIGlmKGQ+PTMwKXtcclxuICAgICAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIHRlZW4gKyAoZHN0ci5sZW5ndGggPCAyID8gbHVuYXJEYXlbZC0xXSA6IHJpZ2h0RGVjbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtsdW5hclllYXJEYXlzLCBsdW5hck1vbnRoRGF5cywgbGVhcERheXMsIGxlYXBNb250aCwgdG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlRGF5IGZyb20gJy4vZGF0ZS1kYXkuanMnXHJcbmNsYXNzIERhdGVNb250aCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Lypwcm9wVHlwZXM6IHtcclxuXHRcdGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuXHRcdGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG5cdH0qL1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtzZWxlY3Rpbmc6IHByb3BzLnNlbGVjdGluZ307XHJcblx0IH1cclxuXHRnZXRNb250aEluZm8gKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRlLCAnZGF0ZW1vbnRoJylcclxuXHRcdGxldCB5ID0gdGhpcy5wcm9wcy5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0ICAgIGxldCBtID0gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCk7XHJcblx0XHR2YXIgZGF0ZWRheSwgbGluZT0wLCB0ZW1wPVtdLCBpc2ZpbGwgPSB0aGlzLnByb3BzLmlzZmlsbDtcclxuXHRcdC8vIGNvbnNvbGUudGltZSgn6K6h566X5LiA5pyI5omA55So5pe26Ze0JylcclxuICAgICAgICB2YXIgcHJldk1EYXkgPSBuZXcgRGF0ZSh5LCBtLCAwKSwgcHJldk1EYXlMYXN0ID0gcHJldk1EYXkuZ2V0RGF0ZSgpOyAgICAvL3ByZXYgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgbmV4dE1EYXkgPSBuZXcgRGF0ZSh5LCBtKzEsIDApLCBjdXJyTURheUxhc3QgPSBuZXh0TURheS5nZXREYXRlKCk7ICAvL2N1cnJlbnQgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgY3Vyck1EYXkgPSBuZXcgRGF0ZSh5LCBtKzAsIDEpLCBjdXJyTURheUZpcnN0PSBjdXJyTURheS5nZXREYXkoKTsgICAvL2N1cnJlbnQgTW9udGggRmlyc3QgRGF5IFdlZWtcclxuXHJcbiAgICAgICB0ZW1wW2xpbmVdPVtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYWxjTGluZShkYXRlKXtcclxuXHQgICAgXHR2YXIgd2Vla25vID0gZGF0ZS5nZXREYXkoKTsgICAvL3dlZWtcclxuXHQgICAgICAgIGlmKHdlZWtubyA9PSAwKSB0ZW1wW2xpbmVdPVtdXHJcblx0ICAgICAgICB0ZW1wW2xpbmVdLnB1c2goZGF0ZSk7XHJcblx0ICAgICAgICB3ZWVrbm8gPT0gNiAmJiBsaW5lKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHByZXZNRGF5LCBjdXJyTURheSwgcHJldk1EYXlMYXN0LCBjdXJyTURheUxhc3QsIGN1cnJNRGF5Rmlyc3QpXHJcbiAgICAgICBpZihjdXJyTURheUZpcnN0ICYmIGlzZmlsbCl7IC8vcHJldiBNb250aCBjYWxlbmRhciByb3cgZmlyc3RcclxuICAgICAgICAgICAgdmFyIGsgPSBwcmV2TURheUxhc3QgLSBjdXJyTURheUZpcnN0ICsgMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXJyTURheUZpcnN0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGVkYXkgPSBuZXcgRGF0ZSh5LCBtLTEsIGspXHJcbiAgICAgICAgICAgICAgICBcdHRlbXBbbGluZV0ucHVzaChkYXRlZGF5KVxyXG4gICAgICAgICAgICAgICAgaysrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0xOyBpIDw9IGN1cnJNRGF5TGFzdDsgaSsrKSB7IC8vY3VycmVudCBtb250aFxyXG4gICAgICAgIFx0ZGF0ZWRheSA9IG5ldyBEYXRlKHksIG0sIGkpXHJcbiAgICAgICAgXHRjYWxjTGluZShkYXRlZGF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpc2ZpbGwpe1xyXG5cdCAgICAgICAgZm9yIChqPTE7IGogPCAxMjsgaisrKSB7XHJcblx0ICAgICAgICBcdGlmKGxpbmU8Nil7XHJcblx0ICAgICAgICBcdFx0Ly8gY29uc29sZS5sb2cobGluZSwgJ2xpbmUnKVxyXG5cdFx0ICAgICAgICAgICAgZGF0ZWRheSA9ICBuZXcgRGF0ZSh5LCBtKzEsIGopO1xyXG5cdFx0ICAgICAgICAgICAgY2FsY0xpbmUoZGF0ZWRheSlcclxuXHQgICAgICAgXHRcdH1cclxuXHQgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLnRpbWVFbmQoJ+iuoeeul+S4gOaciOaJgOeUqOaXtumXtCcpXHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcblx0fVxyXG5cclxuXHR3ZWVrcyhtb250aHMpe1xyXG5cdFx0dmFyIHdlZWtzID0gW10sIHRoYXQgPSB0aGlzO1xyXG5cdFx0bW9udGhzLm1hcChmdW5jdGlvbih3ZWVrLCB3a2V5KSB7XHJcblx0XHRcdHdlZWtzLnB1c2goPGRpdiBjbGFzc05hbWU9e1wiZGF0ZS13ZWVrIGRhdGUtd2Vlay1cIit3a2V5fSBrZXk9e3drZXl9PlxyXG5cdFx0XHRcdHt0aGF0LmRheXMod2Vlayl9XHJcblx0XHRcdDwvZGl2PilcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gd2Vla3NcclxuXHR9XHJcblx0ZGF5cyh3ZWVrKXtcclxuXHRcdHZhciBkYXlzID0gW10sIHRoYXQgPSB0aGlzO1xyXG5cdFx0d2Vlay5tYXAoZnVuY3Rpb24oZGF5LCBka2V5KXtcclxuXHRcdFx0ZGF5cy5wdXNoKCA8RGF0ZURheSB7Li4udGhhdC5wcm9wc30gb25Nb3VzZUVudGVyPXt0aGF0Lm9uTW91c2VFbnRlci5iaW5kKHRoaXMpfSBzZWxlY3Rpbmc9e3RoYXQuc3RhdGUuc2VsZWN0aW5nfSBlZGF0ZT17ZGF5fSBrZXk9e2RrZXl9Lz4gKVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBkYXlzXHJcblx0fVxyXG5cdG9uTW91c2VFbnRlcihkYXRlaW5mbyl7XHJcblx0XHRsZXQge3N0YXJ0LCBlbmR9ID0gdGhpcy5wcm9wc1xyXG5cdFx0aWYoc3RhcnQgJiYgZW5kKSB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpbmc6IGRhdGVpbmZvLmRhdGV9KVxyXG5cdH1cclxuXHRvbk1vdXNlTGVhdmUoKXtcclxuXHRcdGxldCB7c3RhcnQsIGVuZH0gPSB0aGlzLnByb3BzXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGluZzogbnVsbH0pXHJcblx0fVxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygncmVuZGVyIHRpbWVzJylcclxuXHRcdGNvbnN0IG1vbnRocyA9IHRoaXMuZ2V0TW9udGhJbmZvKCksIHRoYXQ9dGhpcztcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLW1vbnRoXCIgKyAodGhhdC5zdGF0ZS5zZWxlY3RpbmcgPyBcIiBkYXRlLXNlbGVjdGluZyBcIiA6IFwiIFwiKX0gb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpfT5cclxuXHRcdFx0XHR7dGhpcy53ZWVrcyhtb250aHMpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHR9XHJcbn1cclxuXHJcbkRhdGVNb250aC5kZWZhdWx0UHJvcHMgPSB7XHJcblx0c2VsZWN0aW5nOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVNb250aFxyXG4iLCIvLyDlhpzljobkuozljYHlm5voioLmsJRcclxudmFyIGNhY2hlID0ge307XHJcbnZhciBjYWNoZWtleXMgPSBbXTtcclxudmFyIHNvbGFyVGVybSA9IFsn5bCP5a+SJywgJ+Wkp+WvkicsICfnq4vmmKUnLCAn6Zuo5rC0JywgJ+aDiuibsCcsICfmmKXliIYnLCAn5riF5piOJywgJ+iwt+mbqCcsICfnq4vlpI8nLCAn5bCP5ruhJywgJ+iKkuenjScsICflpI/oh7MnLCAn5bCP5pqRJywgJ+Wkp+aakScsICfnq4vnp4snLCAn5aSE5pqRJywgJ+eZvemcsicsICfnp4vliIYnLCAn5a+S6ZyyJywgJ+mcnOmZjScsICfnq4vlhqwnLCAn5bCP6ZuqJywgJ+Wkp+mbqicsICflhqzoh7MnXTtcclxudmFyIHNUZXJtSW5mbyA9IFswLCAyMTIwOCwgNDI0NjcsIDYzODM2LCA4NTMzNywgMTA3MDE0LCAxMjg4NjcsIDE1MDkyMSwgMTczMTQ5LCAxOTU1NTEsIDIxODA3MiwgMjQwNjkzLCAyNjMzNDMsIDI4NTk4OSwgMzA4NTYzLCAzMzEwMzMsIDM1MzM1MCwgMzc1NDk0LCAzOTc0NDcsIDQxOTIxMCwgNDQwNzk1LCA0NjIyMjQsIDQ4MzUzMiwgNTA0NzU4XTtcclxuLy8g6L+U5Zue5p+Q5bm055qE56ysbuS4quiKguawlOS4uuWHoOaXpSjku44w5bCP5a+S6LW3566XKVxyXG52YXIgZ2V0U29sYXJUZXJtSW5kZXggPSBmdW5jdGlvbih5ZWFyLCBpbmRleCkge1xyXG4gICAgdmFyIG9mZkRhdGUgPSBuZXcgRGF0ZSgoMzE1NTY5MjU5NzQuNyAqICh5ZWFyIC0gMTkwMCkgKyBzVGVybUluZm9baW5kZXhdICogNjAwMDApICsgRGF0ZS5VVEMoMTkwMCwgMCwgNiwgMiwgNSkpO1xyXG4gICAgcmV0dXJuIG9mZkRhdGUuZ2V0VVRDRGF0ZSgpO1xyXG59O1xyXG5cclxuLy8g6L+U5Zue6K+l5pyI55qE6IqC5rCU5L+h5oGvXHJcbnZhciBnZXRNb250aFNvbGFyVGVybXMgPSBmdW5jdGlvbih5ZWFyLCBtb250aCkge1xyXG4gICAgaWYgKHllYXIgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgbW9udGggPSB5ZWFyLmdldE1vbnRoKCk7XHJcbiAgICAgICAgeWVhciA9IHllYXIuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICAgIHZhciBrZXkgPSAnJyArIHllYXIgKyBtb250aDtcclxuICAgIGlmIChrZXkgaW4gY2FjaGUpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcclxuICAgIH1cclxuICAgIHZhciByZXQgPSBjYWNoZVtrZXldID0ge307XHJcbiAgICB2YXIgaW5kZXg7XHJcbiAgICBpbmRleCA9IGdldFNvbGFyVGVybUluZGV4KHllYXIgLSAxOTAwLCBtb250aCAqIDIpO1xyXG4gICAgcmV0W2luZGV4IC0gMV0gPSBzb2xhclRlcm1bbW9udGggKiAyXTtcclxuICAgIGluZGV4ID0gZ2V0U29sYXJUZXJtSW5kZXgoeWVhciAtIDE5MDAsIG1vbnRoICogMiArIDEpO1xyXG4gICAgcmV0W2luZGV4IC0gMV0gPSBzb2xhclRlcm1bbW9udGggKiAyICsgMV07XHJcbiAgICBjYWNoZWtleXMucHVzaChrZXkpO1xyXG4gICAgaWYgKGNhY2hla2V5cy5sZW5ndGggPiAxMikge1xyXG4gICAgICAgIGRlbGV0ZSBjYWNoZVtjYWNoZWtleXMuc2hpZnQoKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQge2dldFNvbGFyVGVybUluZGV4LCBnZXRNb250aFNvbGFyVGVybXN9IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGF0ZURheSBmcm9tICcuL2RhdGUtZGF5LmpzJ1xyXG5jbGFzcyBEYXRlVGltZSBleHRlbmRzIENvbXBvbmVudCB7IFxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cclxuXHRcdFx0e25ldyBEYXRlKCkuZ2V0SG91cnMoKSsgJzonICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lIiwiLy9AdG9kbyDop6PlhrPliIfmjaLmnIjku73ml7bvvIwg6YCJ5oup55qE5YC85pyJ5Y+Y77ybMi7lpJbpg6jlgLzlj5jljJblkI7vvIxpbnB1dOWAvOS4jnVp5rKh5pyJ5Y+Y5YyWIDMga2V5IGlucHV0XG4vLyBpbXBvcnQgJy4vZGF0ZXBpY2tlci5sZXNzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IERhdGVIZWFkZXIgZnJvbSAnLi9kYXRlLWhlYWRlci5qcydcbmltcG9ydCBEYXRlQ2FsZW5kYXIgZnJvbSAnLi9kYXRlLWNhbGVuZGFyLmpzJ1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuL2RhdGUtaW5wdXQuanMnXG5pbXBvcnQgRGF0ZUluQm9keSBmcm9tICcuL2RhdGUtaW4tYm9keS5qcydcbmltcG9ydCB7ZGF0ZU9iamVjdCwgdG9kYXl9IGZyb20gJy4vZGF0ZS1mb3JtYXQuanMnXG5cbmNsYXNzIFJlYWN0RGF0ZXBpY2tlclBsdXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBwcm9wVHlwZXM6IHtcblx0Ly8gXHRzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdC8vZGVmYXVsdCBkYXRlXG5cdC8vIFx0Zm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgICAgLy9mb3JtYXQgZGF0ZVxuXHQvLyBcdGlzZmlsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHQgICAgLy9zaG93IHByZWZpeC1wcmV2IHByZWZpeC1uZXh0IG1vbnRoXG5cdC8vIFx0bW9udGhzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFx0XHQvL3Nob3cgbXVsdGktcGFuZXMgYnkgbW9udGhzXG5cblx0Ly8gXHR0aW1lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgICAvL3Nob3cgdGltZSBzZWxlY3QgQHRvZG9cblxuXHQvLyBcdG1pbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWluXG5cdC8vIFx0bWF4OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtYXhcblxuXHQvLyBcdHN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5cdC8vIFx0ZW5kOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5cblx0Ly8gXHRjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAvLyBjdXN0b20gY2xhc3Ncblx0Ly8gXHRkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL2lucHV0IGNhbid0IGNoYW5nZVxuXHQvLyBcdGF1dG9IaWRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vc2VsZWN0ZWQgYXV0byBoaWRlXG5cdC8vIFx0aW5saW5lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgLy9pbmxpbmVcblx0Ly8gXHRsYW5nOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydjbicsICdlbiddKSxcblxuXHQvLyBcdGZlc3RpdmFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgZmVzdGl2YWxcblx0Ly8gXHRoYXNsdW5hcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGx1bmFyXG5cblx0Ly8gXHRvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxuXHQvLyBcdG9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcblx0Ly8gXHRvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZGF5aW5mbywgcGlja2VyKVxuXHQvLyBcdGRheUFkZG9uOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyBcdFx0Ly9hcmdzIChkYXlpbmZvKVxuXHQvLyBcdC8vZGF5QWRkb24sIGFkZCBkYXRhIGZvciBkYXksIGFuZCBuZWVkIHRvIHJldHVybiBkb20sXG5cdC8vIFx0Ly90aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgaW5zZXJ0IHRvIGRheSBlYWNoIGVsZW1lbnQuIHBscyBzZWUgbGFzdCBkZW1vXG5cdC8vICBwbGFjZWhvbGRlclxuXHQvLyAgcGxhY2Vob2xkZXJFbmRcblx0Ly8gIHN1cHBvcnQgY2hpbGRyZW4gdG8gZGVmaW5lZCB5b3VyIGlucHV0IGRvbSBzdHJ1Y3QsIHBscyBzZWFyY2ggYGRlZmluZWQgeW91ciBpbnB1dCBkb21gIGF0IHRoaXMgcGFnZVxuXHQvLyB9XG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR2YXIgc2VsZWN0ZWQgPSAgZGF0ZU9iamVjdChwcm9wcy5zZWxlY3RlZClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblx0XHRcdFx0ZGF0ZTogc2VsZWN0ZWQsXHRcdC8vcmVuZGVyIG1vbnRoIGJ5IGRhdGVcblx0XHRcdFx0c2hvdzogcHJvcHMuaW5saW5lID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRmb2N1czogZmFsc2UsXHQvL2ZvY3VzIHN0YXRlIHRydWUvZmFsc2UvJ2JsYW5rJ1xuXHRcdFx0XHRvZmZzZXQ6IHt9LFx0XHQvL2RhdGVwaWNrZXIgcG9zaXRpb25cblx0XHRcdFx0c2VsZWN0ZWQ6IHNlbGVjdGVkLFxuXHRcdFx0XHRzdGFydDogZGF0ZU9iamVjdChwcm9wcy5zdGFydCksXG5cdFx0XHRcdGVuZDogZGF0ZU9iamVjdChwcm9wcy5lbmQpLFxuXHRcdFx0XHRtaW46IGRhdGVPYmplY3QocHJvcHMubWluKSxcblx0XHRcdFx0bWF4OiBkYXRlT2JqZWN0KHByb3BzLm1heCksXG5cdFx0XHRcdC8vIHN0YXR1czogJycgICBcdC8vUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pXG5cdFx0XHRcdC8vJ3N0YXJ0JyBhbmQgJ2VuZCcgdXNlIGJ5IGJpLWRhdGVwaWNrZXIgcmFuZ2UgdmFsdWUsIGFuZCB1bmRlZmluZWQgdXNlIGJ5IHNpbmdsZSBkYXRlcGlja2VyIHNpbmdsZSBkYXRlXG5cdFx0fVxuICAgIH1cblxuXHRvbkZvY3VzKGV2ZW50LCBpbnB1dCl7XG5cdFx0bGV0IHtzaG93LCBmb2N1cywgc2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZVxuXHRcdGlmKHNob3cgJiYgIWZvY3VzKXtcblx0XHRcdHRoaXMuc3RhdGUuZm9jdXMgPSB0cnVlLy9qdXN0IGNoYW5nZSBzdGF0ZSBub3QgdHJpZ2dlciByZW5kZXJcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgc3RhdHVzID0gaW5wdXQucHJvcHMuc3RhdHVzOyBzZWxlY3RlZCA9IHN0YXR1cz90aGlzLnN0YXRlW3N0YXR1c106c2VsZWN0ZWQ7XG5cdFx0bGV0IHtsZWZ0LCB0b3AsIGhlaWdodH0gPSBpbnB1dC5oYW5kbGVQb3NpdGlvbigpO1xuXHRcdFx0dG9wICs9IChoZWlnaHQrIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSlcblx0XHRsZXQge29uRm9jdXN9ID0gdGhpcy5wcm9wc1xuXG5cdFx0dGhpcy5zaG93KHRydWUsIHtsZWZ0LCB0b3B9LCB0cnVlLCBzdGF0dXMpXG5cdFx0b25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50LCB0aGlzKVxuXHRcdGlmKHN0YXR1cykgdGhpcy5zZXRTdGF0ZSh7ZGF0ZTogc2VsZWN0ZWR9KVxuXHR9XG5cblx0b25CbHVyKGV2ZW50LCBpbnB1dCl7XG5cdFx0Y29uc3Qge3Nob3csIGZvY3VzLCBzdGF0dXN9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IHtpbmxpbmUsIG9uQmx1ciwgYXV0b0hpZGV9ID0gdGhpcy5wcm9wc1xuXHRcdGlmKGF1dG9IaWRlKXtcblx0XHRcdGlmKCFmb2N1cyl7XG5cdFx0XHRcdHRoaXMucmVtb3ZlUGlja2VyKClcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKCFzaG93KSByZXR1cm47XG5cdFx0aWYgKCFmb2N1cykge1xuXHRcdFx0Ly91c2Ugc2V0VGltZW91dCBmb3IgZmlyZWZveCB3aWxsIGxvc3QgZm9jdXMgYmVjYXVzZSBvbk1vdXNlRG93biB0aGVuIHRyaWdnZXIgb25DbGljaywgZnVja1xuXHQgICAgICBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgaW5wdXQuZm9jdXMoKSB9LCAwKVx0Ly93aGVuIHNob3cgJiYgIWZvY3VzLCB0cmlnZ2VyIGZvY3VzLFxuXHQgICAgfWVsc2UgaWYoIWlubGluZSAmJiBmb2N1cyE9PSdibGFuaycpIHtcblx0ICAgICAgb25CbHVyICYmIG9uQmx1cihldmVudCwgdGhpcylcblx0ICAgICAgZm9jdXMgJiYgdGhpcy5yZW1vdmVQaWNrZXIoKVxuXHRcdH1cblxuXHR9XG5cblx0Y2xpY2tQYW5lKGV2ZW50KXtcblx0XHRpZih0aGlzLnN0YXRlLmZvY3VzKVxuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9ICdibGFuaydcblx0fVxuXG5cdHNob3cgKHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1cykge1xuXHQgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1c30pXG5cdH1cblxuXHR1cGRhdGVNb250aChudW0pe1xuXHRcdGNvbnN0IHtkYXRlfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBjZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgbnVtKVxuXHRcdHRoaXMudXBkYXRlRGF0ZSh7ZGF0ZTogY2RhdGV9LCB0cnVlKVxuXHR9XG5cblx0bnVtTW9udGgoZGF0ZSwgbnVtKXtcblx0XHRkYXRlID0gZGF0ZU9iamVjdChkYXRlKSB8fCB0b2RheVxuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG51bSwgZGF0ZS5nZXREYXRlKCkpXG5cdH1cblxuXHR1cGRhdGVEYXkoZGF0ZWluZm8pe1xuXHRcdHRoaXMudXBkYXRlRGF0ZShkYXRlaW5mbylcblx0fVxuXG5cdHVwZGF0ZURhdGUoZGF0ZWluZm8sIGlzTW9udGgpe1xuXHRcdGxldCB7b25DaGFuZ2UsIGF1dG9IaWRlLCBzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcblx0XHRsZXQge3N0YXR1cz0nc2VsZWN0ZWQnLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGdldFNlbGVjdGVkID0gZGF0ZU9iamVjdCghaXNNb250aCA/IGRhdGVpbmZvLmRhdGUgOiB0aGlzLnN0YXRlW3N0YXR1c10pXG5cblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlLCBkYXRlOiBkYXRlaW5mby5kYXRlLCBzZWxlY3RlZDogZ2V0U2VsZWN0ZWQsIFtzdGF0dXNdOiBnZXRTZWxlY3RlZH0pXG5cblx0XHRpZighaXNNb250aCl7XG5cdFx0XHR0aGlzLnN0YXRlLmZvY3VzID0gZmFsc2Vcblx0XHRcdGRhdGVpbmZvLnN0YXR1cyA9IHN0YXR1c1xuXHRcdFx0b25DaGFuZ2UgJiYgb25DaGFuZ2UoZGF0ZWluZm8sIHRoaXMpXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnN0YXRlLmZvY3VzID0gJ2JsYW5rJ1xuXHRcdH1cblx0fVxuXG5cdHJlbW92ZVBpY2tlcigpe1xuXHRcdHRoaXMuc2hvdyhmYWxzZSlcblx0XHR0aGlzLnJlZnMuaW5zRGF0ZUluQm9keSAmJiB0aGlzLnJlZnMuaW5zRGF0ZUluQm9keS5yZW1vdmVQaWNrZXIoKVxuXHR9XG5cbiAgICBwaWNrZXJzKHN0YXR1cykge1xuXHRcdGxldCAkcGlja2VycyA9IFtdLCBvZmZzZXRzID0gW10sIGRoLCBkYywgaWRhdGVcblx0XHRsZXQge2RhdGUsICBzdGFydCwgZW5kLCBtaW4sIG1heCwgb2Zmc2V0fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2lubGluZSwgbW9udGhzLCBsYW5nLCBoYXNsdW5hciwgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlW3N0YXR1cz9zdGF0dXM6J3NlbGVjdGVkJ11cblx0XHRsZXQgY2xhc3NlcyA9IGBkYXRlLXBpY2tlciBkYXRlLXBpY2tlci0ke2lubGluZT8naW5saW5lJzonYmxvY2snfSAke2NsYXNzTmFtZT9jbGFzc05hbWU6Jyd9ICR7aGFzbHVuYXI/J2RhdGUtcGlja2VyLWx1bmFyJzonJ31gXG5cdFx0bGV0IHBpY2tlcldpZHRoID0gdGhpcy5zdGF0ZS53aWR0aCB8fCAyMTU7XG5cdFx0Zm9yKHZhciBpPTA7IGk8bW9udGhzOyBpKyspe1xuXHRcdFx0b2Zmc2V0cy5wdXNoKHtsZWZ0OiBpKnBpY2tlcldpZHRoICsgb2Zmc2V0LmxlZnQsIHRvcDogb2Zmc2V0LnRvcH0pXG5cdFx0XHRpZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgaSlcblx0XHRcdGRoID0gPERhdGVIZWFkZXIgZGF0ZT17aWRhdGV9IGxhbmc9e2hhc2x1bmFyPydjbic6bGFuZ30gdXBkYXRlTW9udGg9e3RoaXMudXBkYXRlTW9udGguYmluZCh0aGlzKX0vPlxuXHRcdFx0ZGMgPSA8RGF0ZUNhbGVuZGFyIHsuLi50aGlzLnByb3BzfSBtaW49e21pbn0gbWF4PXttYXh9IGRhdGU9e2lkYXRlfSBzdGF0dXM9e3N0YXR1c30gc3RhcnQ9e3N0YXJ0fSBlbmQ9e2VuZH0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNoYW5nZT17dGhpcy51cGRhdGVEYXkuYmluZCh0aGlzKX0vPlxuXG5cdFx0XHQkcGlja2Vycy5wdXNoKGlubGluZSA/XG5cdFx0XHRcdFx0IDxkaXYgb25Nb3VzZURvd249e3RoaXMuY2xpY2tQYW5lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlc30ga2V5PXtpfT57ZGh9e2RjfTwvZGl2PiA6XG5cdFx0XHRcdFx0IDxkaXYgb25Nb3VzZURvd249e3RoaXMuY2xpY2tQYW5lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e29mZnNldHNbaV19IGtleT17aX0+e2RofXtkY308L2Rpdj4pXG5cdFx0fVxuXHRcdHJldHVybiAkcGlja2Vyc1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUgKHcpIHtcblx0XHQhdGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5zZXRTdGF0ZSh7d2lkdGg6IHd9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgb2xkcHJvcHMpIHtcblx0XHRpZihwcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogZGF0ZU9iamVjdChwcm9wcy5zZWxlY3RlZCl9KVxuXHRcdH1cblx0XHRpZihwcm9wcy5zdGFydCAhPT0gdGhpcy5wcm9wcy5zdGFydCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzdGFydDogZGF0ZU9iamVjdChwcm9wcy5zdGFydCl9KVxuXHRcdH1cblx0XHRpZihwcm9wcy5lbmQgIT09IHRoaXMucHJvcHMuZW5kKXtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe2VuZDogZGF0ZU9iamVjdChwcm9wcy5lbmQpfSlcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGxldCB7c2hvdywgc2VsZWN0ZWQsIHN0YXJ0LCBlbmQsIHN0YXR1c30gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IHtmb3JtYXQsIGlubGluZSwgbW9udGhzLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIsIHBsYWNlaG9sZGVyRW5kLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHBpY2tlciwgcGlja2VycywgcGlja2VySW5Cb2R5O1xuXHRcdGxldCBjbHNOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycsIGNsc1dyYXBwZXJOYW1lID0gY2xzTmFtZT8nICcrY2xzTmFtZSsnLXBhbmVzJzogJydcblx0XHRsZXQgZGkgPSAodmFsLCBzdGF0KSA9PiA8RGF0ZUlucHV0IHNlbGVjdGVkPXt2YWw9PT12b2lkIDAgPyBzZWxlY3RlZCA6IHZhbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9ybWF0PXtmb3JtYXR9IGRpc2FibGVkPXtkaXNhYmxlZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgcGxhY2Vob2xkZXI9e3N0YXQ9PSdlbmQnP3BsYWNlaG9sZGVyRW5kOnBsYWNlaG9sZGVyfSAgY2hpbGRyZW49e2NoaWxkcmVufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfSBzdGF0dXM9e3N0YXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHJlZj17c3RhdH0vPlxuXHRcdGlmKHNob3cpe1xuXHRcdFx0cGlja2VycyA9IHRoaXMucGlja2VycyhzdGF0dXMpXG5cdFx0XHRwaWNrZXIgPSA8ZGl2IGNsYXNzTmFtZT17KG1vbnRocz4xPydkYXRlLW11bHRpIGNsZWFyZml4JzonZGF0ZS1zaW5nbGUnKSArIGNsc1dyYXBwZXJOYW1lfT57cGlja2Vyc308L2Rpdj5cblx0XHRcdHBpY2tlckluQm9keSA9IDxEYXRlSW5Cb2R5ICBvblVwZGF0ZT17dGhpcy51cGRhdGVTaXplLmJpbmQodGhpcyl9IGNsYXNzTmFtZT0nZGF0ZS1waWNrZXItd3JhcHBlcicgcmVmPVwiaW5zRGF0ZUluQm9keVwiPntwaWNrZXJ9PC9EYXRlSW5Cb2R5PlxuXHRcdH1cblx0XHRsZXQgZGlkb20gPSBzdGFydCB8fCBlbmQgPyA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtaW5wdXRzXCI+e3N0YXJ0IT09dm9pZCAwICYmIGRpKHN0YXJ0LCAnc3RhcnQnKX17ZW5kIT09dm9pZCAwICYmIGRpKGVuZCwgJ2VuZCcpfTwvZGl2PiA6IGRpKClcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiZGF0ZS1jb21wb25lbnRzIFwiKyBjbHNOYW1lfT5cblx0XHRcdFx0XHR7ZGlkb219XG5cdFx0XHRcdFx0e2lubGluZSA/IHBpY2tlciA6IHBpY2tlckluQm9keX1cblx0XHRcdFx0PC9kaXY+XG5cdH1cbn07XG5cblJlYWN0RGF0ZXBpY2tlclBsdXMuZGVmYXVsdFByb3BzID0ge1xuXHRpc2ZpbGw6IGZhbHNlLFxuXHRmb3JtYXQ6ICd5eXl5LU1NLWRkJyxcblx0c2VsZWN0ZWQ6IHRvZGF5LFxuXHRtb250aHM6IDEsXG5cdGxhbmc6ICdlbidcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3REYXRlcGlja2VyUGx1cztcbiJdfQ==
