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

            selected = selected instanceof Date ? selected : new Date(selected);
            date = date instanceof Date ? date : new Date(date);
            edate = edate instanceof Date ? edate : new Date(edate);

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
            //需要区分 start(不能大于end)与end(水能小于start), 没有则直接看min max @todo
            if (min || max) {
                //是否在限制的范围内
                var isStart = status === 'start',
                    isEnd = status === 'end';
                if (isStart || isEnd) {
                    if (isStart) {
                        dayinfo.disabled = edataNo > +end;
                    } else if (isEnd) {
                        dayinfo.disabled = edataNo < +start;
                    }
                } else {
                    dayinfo.disabled = !range(min, max);
                }
            }

            if (start && end) dayinfo.inrange = range(start, end); //是否在选择结果的范围内
            if (selecting && status) dayinfo.inselect = status === 'start' ? range(selecting, end) : range(start, selecting);

            if (dayAddon) {
                dayinfo.addon = dayAddon(dayinfo);
            }
            dayinfo.lunarfest = _dateHolidays.lunarHolidays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
            // console.log(dayinfo, edataNo, start, end, 'startend')
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
                { className: "date-day" + (!currentMonth ? " date-nocurrent " : " ") + (currentDay ? 'date-selected' : "") + (disabled ? ' date-disabled' : "") + (inrange ? ' date-range' : "") + (inselect ? ' date-hover' : ""),
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
function dateFormat(date, format) {
    if (!date) return '';
    var weeks = ['日', '一', '二', '三', '四', '五', '六'];
    if (format === undefined) {
        format = date;
        date = new Date();
    }
    date = typeof date === 'number' || typeof date === 'string' ? new Date(date) : date;
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
    value: function removePicker(current) {
      this.popup = current ? this.popup : document.getElementsByClassName('date-picker-wrapper')[0];
      // console.log(this.popup, 'popup')
      if (this.popup) {
        _reactDom2["default"].unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
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
      return _react2["default"].createElement("div", { className: this.props.className, children: this.props.children, children: null, style: this.props.offset });
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

var now = new Date();

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
		var selected = props.selected;
		this.state = {
			date: selected, //render month by date
			show: props.inline ? true : false,
			focus: false, //focus state
			offset: {}, //datepicker position
			selected: selected,
			start: props.start,
			end: props.end,
			min: props.min || props.start,
			max: props.max || props.end
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
		}
	}, {
		key: 'clickPane',
		value: function clickPane(event, abc) {
			this.state.focus = false; //just change state not trigger render
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
			date = date || now;
			date = date instanceof Date ? date : new Date(date);
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

			var getSelected = !isMonth ? dateinfo.date : this.state[status];
			// let temp = {}; temp[status] = getSelected
			this.setState(_defineProperty({ show: true, date: dateinfo.date, selected: getSelected, focus: false }, status, getSelected));
			if (!isMonth) {
				if (start) {
					this.setState({ min: start });
				}
				if (end) {
					this.setState({ max: end });
				}

				onChange && onChange(dateinfo, this);
				autoHide && this.removePicker();
			}
		}
	}, {
		key: 'removePicker',
		value: function removePicker() {
			this.show(false);
			this.refs.insDateInBody && this.refs.insDateInBody.removePicker(true);
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
				this.setState({ selected: props.selected });
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
					{ className: (months > 1 ? 'date-multi clearfix' : '') + clsWrapperName },
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
	selected: now,
	months: 1,
	lang: 'en'
};

exports['default'] = ReactDatepickerPlus;
module.exports = exports['default'];

},{"./date-calendar.js":1,"./date-header.js":4,"./date-in-body.js":6,"./date-input.js":7,"react":undefined,"react-dom":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtY2FsZW5kYXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZGF5LmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWZvcm1hdC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1oZWFkZXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaG9saWRheXMuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1pbnB1dC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1sdW5hci5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1tb250aC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10ZXJtLmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRpbWUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL1JlYWN0RGF0ZXBpY2tlclBsdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzJCQUVsQixpQkFBaUI7Ozs7MEJBQ2xCLGdCQUFnQjs7OztJQUMvQixZQUFZO1dBQVosWUFBWTs7QUFDTixVQUROLFlBQVksQ0FDTCxLQUFLLEVBQUU7d0JBRGQsWUFBWTs7QUFFViw2QkFGRixZQUFZ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LE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUNsRixDQUFDOzs7QUFHRixTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsUUFBSSxDQUFDO1FBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUNoQixTQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxBQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0UsV0FBUSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdCOzs7QUFHRCxTQUFTLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFCLFdBQVEsQUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFJLE9BQU8sSUFBSSxDQUFDLEFBQUMsR0FBSSxFQUFFLEdBQUcsRUFBRSxD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QUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsR0FBRyxFQUFDLGVBQWU7S0FBRSxNQUFNO0tBQWMsQ0FBQTtJQUMzSTtBQUNELE9BQUksS0FBSyxHQUFHLEtBQUssSUFBSSxHQUFHLEdBQUc7O01BQUssU0FBUyxFQUFDLGFBQWE7SUFBRSxLQUFLLEtBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7SUFBRSxHQUFHLEtBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7SUFBTyxHQUFHLEVBQUUsRUFBRSxDQUFBO0FBQzNJLFVBQU87O01BQUssU0FBUyxFQUFFLGtCQUFrQixHQUFFLE9BQU8sQUFBQztJQUMvQyxLQUFLO0lBQ0wsTUFBTSxHQUFHLE1BQU0sR0FBRyxZQUFZO0lBQzFCLENBQUE7R0FDUjs7O1FBbkxJLG1CQUFtQjs7O0FBb0x4QixDQUFDOztBQUVGLG1CQUFtQixDQUFDLFlBQVksR0FBRztBQUNsQyxPQUFNLEVBQUUsS0FBSztBQUNiLE9BQU0sRUFBRSxZQUFZO0FBQ3BCLFNBQVEsRUFBRSxHQUFHO0FBQ2IsT0FBTSxFQUFFLENBQUM7QUFDVCxLQUFJLEVBQUUsSUFBSTtDQUNWLENBQUE7O3FCQUVjLG1CQUFtQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgRGF0ZU1vbnRoIGZyb20gJy4vZGF0ZS1tb250aC5qcydcclxuaW1wb3J0IERhdGVUaW1lIGZyb20gJy4vZGF0ZS10aW1lLmpzJztcclxuY2xhc3MgRGF0ZUNhbGVuZGFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgZGF0ZWNsZCAgPSA8RGF0ZU1vbnRoIHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0Y29uc3QgZGF0ZXRpbWUgPSA8RGF0ZVRpbWUgey4uLnRoaXMucHJvcHN9IC8+XHJcblx0XHRsZXQgcGlja2VyID0gdGhpcy5wcm9wcy50aW1lID8gZGF0ZWNsZCtkYXRldGltZTogZGF0ZWNsZDtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY2FsZW5kYXIgYW5pbWF0ZWQgaW5maW5pdGUgZmFkZUluUmlnaHRcIj5cclxuXHRcdFx0e3BpY2tlcn1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVDYWxlbmRhciIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt0b0x1bmFyRGF0ZSwgdG9MdW5hckRheX0gZnJvbSAnLi9kYXRlLWx1bmFyJ1xyXG5pbXBvcnQge2dldFNvbGFyVGVybUluZGV4LCBnZXRNb250aFNvbGFyVGVybXN9IGZyb20gJy4vZGF0ZS10ZXJtJ1xyXG5pbXBvcnQge3NhbGFySG9saWRheXMsIGx1bmFySG9saWRheXN9IGZyb20nLi9kYXRlLWhvbGlkYXlzJ1xyXG4vL3JlbmRlciBtb250aFxyXG4vL2N1cnJlbnQgbW9udGhcclxuY2xhc3MgRGF0ZURheSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKnByb3BUeXBlczoge1xyXG4gICAgICAgIGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgZm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNlbGVjdGVkLCBwcm9wcy5zZWxlY3RlZCwgJ3NlbGVjdGVkJylcclxuICAgIH1cclxuICAgIC8v6I635Y+W5p+Q5aSp55qE5omA5pyJ5L+h5oGvIG0rMeaJjeaYr+aYvuekuueUqOeahOaciOWIhlxyXG4gICAgZ2V0RGF5SW5mbygpe1xyXG4gICAgICAgIHZhciB7ZGF0ZSwgZWRhdGUsIG1pbiwgbWF4LCBzdGFydCwgZW5kLCBzZWxlY3RlZCwgc2VsZWN0aW5nLCBzdGF0dXMsIGRheUFkZG9uIH0gPSB0aGlzLnByb3BzIC8vc2VsZWN0ZWQgZGF0ZSwgcmVuZGVyIGRhdGUsIGVhY2ggZGF0ZVxyXG4gICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQgfHwgbmV3IERhdGUoKVxyXG5cclxuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkIGluc3RhbmNlb2YgRGF0ZSA/IHNlbGVjdGVkIDogbmV3IERhdGUoc2VsZWN0ZWQpXHJcbiAgICAgICAgZGF0ZSA9IGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpXHJcbiAgICAgICAgZWRhdGUgPSBlZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBlZGF0ZSA6IG5ldyBEYXRlKGVkYXRlKVxyXG5cclxuICAgICAgICBjb25zdCBbc3ksIHNtLCBzZF0gPSBbc2VsZWN0ZWQuZ2V0RnVsbFllYXIoKSwgc2VsZWN0ZWQuZ2V0TW9udGgoKSwgc2VsZWN0ZWQuZ2V0RGF0ZSgpXVxyXG4gICAgICAgIGNvbnN0IFtjeSwgY20sIGNkXSA9IFtkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW3ksIG0sIGRdID0gW2VkYXRlLmdldEZ1bGxZZWFyKCksIGVkYXRlLmdldE1vbnRoKCksIGVkYXRlLmdldERhdGUoKV1cclxuICAgICAgICBsZXQgZWRhdGFObyA9ICtlZGF0ZVxyXG4gICAgICAgIGxldCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBlZGF0YU5vID49ICtzdGFydCAmJiBlZGF0YU5vIDw9ICtlbmRcclxuICAgICAgICB2YXIgZGF5aW5mbyA9IHtcclxuICAgICAgICAgICAgZGF0ZTogZWRhdGUsXHJcbiAgICAgICAgICAgIGx1bmFyOiB0b0x1bmFyRGF0ZShlZGF0ZSksXHJcbiAgICAgICAgICAgIHRlcm06IGdldE1vbnRoU29sYXJUZXJtcyh5LCBtKVtkXSxcclxuICAgICAgICAgICAgc2FsYXJmZXN0OiBzYWxhckhvbGlkYXlzW3RoaXMuemVybyhtKzEpK3RoaXMuemVybyhkKV0sICAvL+i/memHjOeahOaciOS7veeUqOeahOaYr+inhuWbvueahFxyXG4gICAgICAgICAgICBjdXJyZW50TW9udGg6IG0gPT09IGNtLFxyXG4gICAgICAgICAgICBjdXJyZW50RGF5OiB5ID09PSBzeSAmJiBtID09PSBzbSAmJiBkID09PSBzZFxyXG4gICAgICAgIH07XHJcblx0XHQvL+mcgOimgeWMuuWIhiBzdGFydCjkuI3og73lpKfkuo5lbmQp5LiOZW5kKOawtOiDveWwj+S6jnN0YXJ0KSwg5rKh5pyJ5YiZ55u05o6l55yLbWluIG1heCBAdG9kb1xyXG5cdFx0aWYobWluIHx8IG1heCl7XHJcblx0XHRcdC8v5piv5ZCm5Zyo6ZmQ5Yi255qE6IyD5Zu05YaFXHJcblx0XHRcdGxldCBpc1N0YXJ0ID0gc3RhdHVzPT09J3N0YXJ0JywgaXNFbmQgPSBzdGF0dXM9PT0nZW5kJ1xyXG5cdFx0XHRpZihpc1N0YXJ0IHx8IGlzRW5kKXtcclxuXHRcdFx0XHRpZihpc1N0YXJ0KXtcclxuXHRcdFx0XHRcdGRheWluZm8uZGlzYWJsZWQgPSBlZGF0YU5vID4gK2VuZFxyXG5cdFx0XHRcdH1lbHNlIGlmKGlzRW5kKXtcclxuXHRcdFx0XHRcdGRheWluZm8uZGlzYWJsZWQgPSBlZGF0YU5vIDwgK3N0YXJ0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRkYXlpbmZvLmRpc2FibGVkID0gIXJhbmdlKG1pbiwgbWF4KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG4gICAgICAgIGlmKHN0YXJ0ICYmIGVuZCkgZGF5aW5mby5pbnJhbmdlID0gcmFuZ2Uoc3RhcnQsIGVuZCkgLy/mmK/lkKblnKjpgInmi6nnu5PmnpznmoTojIPlm7TlhoVcclxuICAgICAgICBpZihzZWxlY3RpbmcgJiYgc3RhdHVzKSBkYXlpbmZvLmluc2VsZWN0ID0gc3RhdHVzPT09J3N0YXJ0JyA/IHJhbmdlKHNlbGVjdGluZywgZW5kKSA6IHJhbmdlKHN0YXJ0LCBzZWxlY3RpbmcpXHJcblxyXG4gICAgICAgIGlmKGRheUFkZG9uKXtcclxuICAgICAgICAgICAgZGF5aW5mby5hZGRvbiA9IGRheUFkZG9uKGRheWluZm8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRheWluZm8ubHVuYXJmZXN0ID0gbHVuYXJIb2xpZGF5c1t0aGlzLnplcm8oZGF5aW5mby5sdW5hci5tb250aCkgKyB0aGlzLnplcm8oZGF5aW5mby5sdW5hci5kYXkpXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlpbmZvLCBlZGF0YU5vLCBzdGFydCwgZW5kLCAnc3RhcnRlbmQnKVxyXG4gICAgICAgIHJldHVybiBkYXlpbmZvO1xyXG4gICAgfVxyXG4gICAgemVybyAobikge1xyXG4gICAgICAgIHJldHVybiBuPDEwID8gJzAnK24gOiBuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZShkYXRlaW5mbykge1xyXG4gICAgICAgIGlmKGRhdGVpbmZvLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlaW5mbyk7XHJcbiAgICB9XHJcbiAgICBzZXRNb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyLmJpbmQodGhpcywgZGF0ZWluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5nZXREYXlJbmZvKClcclxuICAgICAgICBsZXQgeyBkYXRlLCBzYWxhcmZlc3QsIGx1bmFyZmVzdCwgdGVybSwgbHVuYXIsIGN1cnJlbnREYXksIGN1cnJlbnRNb250aCwgZGlzYWJsZWQsIGlucmFuZ2UsIGluc2VsZWN0LCBhZGRvbn0gPSBpbmZvXHJcbiAgICAgICAgbGV0IGZlc3REb20sIHtmZXN0aXZhbCwgaGFzbHVuYXJ9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZihmZXN0aXZhbCAmJiAoc2FsYXJmZXN0fHxsdW5hcmZlc3QpKXtcclxuICAgICAgICAgIGZlc3REb20gPSA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImRhdGUtZmVzdFwiPnsoc2FsYXJmZXN0P3NhbGFyZmVzdDonJykgKyAobHVuYXJmZXN0P2x1bmFyZmVzdDonJyl9PC9zcGFuPnthZGRvbn08L2Rpdj5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGZlc3REb20gPSA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImRhdGUtZFwiPntkYXRlLmdldERhdGUoKX08L3NwYW4+e2FkZG9ufTwvZGl2PlxyXG5cdFx0fVxyXG4gICAgICAgIGlmKGhhc2x1bmFyKXsgICAvL2hhcyBsdW5hciBhbmQgbXVzdCBoYXMgdGVybVxyXG4gICAgICAgICAgICBmZXN0RG9tID0gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWRheS1zZXRzXCI+e2Zlc3REb219PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1sdW5hclwiPnt0ZXJtID8gdGVybSA6IHRvTHVuYXJEYXkobHVuYXIuZGF5KX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLWRheVwiICsgKCFjdXJyZW50TW9udGggPyBcIiBkYXRlLW5vY3VycmVudCBcIiA6IFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChjdXJyZW50RGF5ID8gJ2RhdGUtc2VsZWN0ZWQnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoZGlzYWJsZWQgPyAnIGRhdGUtZGlzYWJsZWQnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoaW5yYW5nZSA/ICcgZGF0ZS1yYW5nZScgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChpbnNlbGVjdCA/ICcgZGF0ZS1ob3ZlcicgOiBcIlwiKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyB0aGlzLnNldERhdGUuYmluZCh0aGlzLCBpbmZvKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnNldE1vdXNlRW50ZXIuYmluZCh0aGlzLCBpbmZvKX0+XHJcbiAgICAgICAgICAgIHtmZXN0RG9tfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZURheVxyXG4iLCIvKipcclxuICogZGF0ZSBhcGnlsIHoo4VcclxuICogQGF1dGhvciBKb2UgTGl1XHJcbiAqIEBlbWFpbCBpY2FyZXUuam9lQGdtYWlsLmNvbVxyXG4gKi9cclxuZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlLCBmb3JtYXQpe1xyXG4gIGlmKCFkYXRlKSByZXR1cm4gJyc7XHJcbiAgdmFyIHdlZWtzID0gWyfml6UnLCfkuIAnLCfkuownLCfkuIknLCflm5snLCfkupQnLCflha0nXTtcclxuICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgZm9ybWF0ID0gZGF0ZTtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIGRhdGUgPSAodHlwZW9mIGRhdGUgPT09ICdudW1iZXInIHx8IHR5cGVvZiBkYXRlPT09J3N0cmluZycpID8gbmV3IERhdGUoZGF0ZSkgOiBkYXRlO1xyXG4gICAgdmFyIG1hcCA9IHtcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelXHJcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enklxyXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAvL+avq+enklxyXG4gICAgICAgIFwiV1wiOiB3ZWVrc1tkYXRlLmdldERheSgpXSAvL+WRqFxyXG4gICAgfTtcclxuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8oW3lNZGhtc3FTV10pKy9nLCBmdW5jdGlvbihhbGwsIHQpe1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmKHYgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGFsbC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgIHYgPSAnMCcgKyB2O1xyXG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoLTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHQgPT09ICd5Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gYWxsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbn1cclxuXHJcbmxldCB0b2RheVN0YXJ0ID0gbmV3IERhdGUoKS5zZXRIb3VycygwLDAsMCwwKVxyXG5sZXQgZGF0ZURpZmYgPSAodGltZXN0YXBlLCB0aW1lKSA9PiBNYXRoLmNlaWwoKHRpbWVzdGFwZSAtICh0aW1lP3RpbWU6K3RvZGF5U3RhcnQpKS8oMzYwMCoxMDAwKjI0KSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkYXRlRm9ybWF0LFxyXG4gICAgZGF0ZURpZmYsXHJcbiAgICB0b2RheVN0YXJ0XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmNvbnN0IGNoYXJzID0ge1xyXG5cdHdlZWtzQ246Wyfml6UnLCAn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nXSxcclxuICAgIHdlZWtzRW5GOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXHJcbiAgICB3ZWVrc0VuUzogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuICAgIG1vbnRoc0NuOlsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcclxuICAgIG1vbnRoc0VuOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG59XHJcbmNsYXNzIGRhdGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdC8vIHByb3BUeXBlczoge1xyXG5cdC8vICAgICB1cGRhdGVNb250aDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuXHQvLyB9LFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cdGdldERhdGUoKXtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGVcclxuXHR9XHJcblx0Y2hhbmdlTW9udGgobnVtKXtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlTW9udGgobnVtKVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3Qge2xhbmd9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgY24gPSBsYW5nID09PSAnY24nXHJcblx0XHRsZXQgeWVhcj10aGlzLmdldERhdGUoKS5nZXRGdWxsWWVhcigpLCBtb250aD10aGlzLmdldERhdGUoKS5nZXRNb250aCgpKzE7XHJcblxyXG5cdFx0bGV0IG1vbnRoc3RyID0gY24/KHllYXIrJyAnK21vbnRoKyfmnIgnKSA6IGNoYXJzLm1vbnRoc0VuW21vbnRoLTFdKycgJyt5ZWFyO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpdGxlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1wcmV2XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgLTEpIH0+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbVwiPnttb250aHN0cn08L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1uZXh0XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgMSkgfT48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGUtd3RpdGxlXCI+XHJcblx0XHRcdFx0e2NoYXJzW2NuPyd3ZWVrc0NuJzond2Vla3NFblMnXS5tYXAoKHdlZWssIGtleSkgPT4gPHNwYW4ga2V5PXtrZXl9Pnt3ZWVrfTwvc3Bhbj4pfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGVIZWFkZXIiLCJ2YXIgc2FsYXJIb2xpZGF5cyA9IHtcclxuICAgICcwMTAxJzogJ+WFg+aXpicsXHJcbiAgICAnMDIxNCc6ICfmg4XkuronLFxyXG4gICAgJzAzMDgnOiAn5aaH5aWzJyxcclxuICAgICcwMzEyJzogJ+akjeagkScsXHJcbiAgICAnMDQwMSc6ICfmhJrkuronLFxyXG4gICAgJzA1MDEnOiAn5Yqz5YqoJyxcclxuICAgICcwNTA0JzogJ+mdkuW5tCcsXHJcbiAgICAnMDYwMSc6ICflhL/nq6UnLFxyXG4gICAgJzA3MDEnOiAn5bu65YWaJyxcclxuICAgICcwODAxJzogJ+W7uuWGmycsXHJcbiAgICAnMDkxMCc6ICfmlZnluIgnLFxyXG4gICAgJzEwMDEnOiAn5Zu95bqGJyxcclxuICAgICcxMjI0JzogJ+W5s+WuieWknCcsXHJcbiAgICAnMTIyNSc6ICflnKPor54nXHJcbn1cclxuXHJcbnZhciBsdW5hckhvbGlkYXlzID0ge1xyXG4gICAgJzAxMDEnOiAn5pil6IqCJyxcclxuICAgICcwMTE1JzogJ+WFg+WutScsXHJcbiAgICAnMDUwNSc6ICfnq6/ljYgnLFxyXG4gICAgJzA3MDcnOiAn5LiD5aSVJyxcclxuICAgICcwNzE1JzogJ+S4reWFgycsXHJcbiAgICAnMDgxNSc6ICfkuK3np4snLFxyXG4gICAgJzA5MDknOiAn6YeN6ZizJyxcclxuICAgICcxMjA4JzogJ+iFiuWFqycsXHJcbiAgICAnMTIyNCc6ICflsI/lubQnXHJcbn1cclxuXHJcbmV4cG9ydCB7c2FsYXJIb2xpZGF5cywgbHVuYXJIb2xpZGF5c31cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmNsYXNzIERhdGVJbkJvZHkgZXh0ZW5kcyBDb21wb25lbnQgeyAgXHJcbiAgLy8gcHJvcFR5cGVzOiB7XHJcbiAgLy8gICBjbGFzc2VzOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAvL2NsYXNzIHNwbGl0IGJ5IHNwYWNpbmdcclxuICAvLyAgIG9mZnNldDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAvLyAgIHVwZGF0ZVNpemU6IFJlYWN0LlByb3BUeXBlcy5mdW5jdGlvblxyXG4gIC8vIH1cclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgICBzdXBlcihwcm9wcyk7XHJcbiAgLy8gfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAvLyB0aGlzLnBvcHVwLmNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3Nlc1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKVxyXG4gICAgdGhpcy5yZW5kZXJMYXllcigpXHJcbiAgICBpZighdGhpcy5wcm9wcy5pbmxpbmUpe1xyXG4gICAgICBsZXQgYWRqdXN0U2l6ZSA9IHRoaXMucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZS1waWNrZXInKVswXS5jbGllbnRXaWR0aFxyXG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlICYmIHRoaXMucHJvcHMub25VcGRhdGUoYWRqdXN0U2l6ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLnJlbmRlckxheWVyKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIC8vIHRoaXMucmVtb3ZlUGlja2VyKClcclxuICB9XHJcbiAgcmVtb3ZlUGlja2VyKGN1cnJlbnQpe1xyXG4gICAgdGhpcy5wb3B1cCA9IGN1cnJlbnQgPyB0aGlzLnBvcHVwIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGF0ZS1waWNrZXItd3JhcHBlcicpWzBdXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBvcHVwLCAncG9wdXAnKVxyXG4gICAgaWYodGhpcy5wb3B1cCl7XHJcbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5wb3B1cClcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBvcHVwKVxyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXJMYXllcigpIHtcclxuICAgIGlmKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcbiAgICAgIFJlYWN0RE9NLnJlbmRlcih0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnBvcHVwKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gY2hpbGRyZW49e3RoaXMucHJvcHMuY2hpbGRyZW59IGNoaWxkcmVuPXtudWxsfSBzdHlsZT17dGhpcy5wcm9wcy5vZmZzZXR9Lz5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVJbkJvZHk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCB7ZGF0ZUZvcm1hdH0gZnJvbSAnLi9kYXRlLWZvcm1hdCdcclxuY2xhc3MgRGF0ZUlucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHQvLyAgcHJvcFR5cGVzOiB7XHJcblx0Ly8gICAgIC8vIGVsZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxyXG5cdC8vICAgICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmFueSxcclxuXHQvLyAgICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG5cdC8vICAgICBvbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdC8vICAgICBvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuXHQvLyAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcblx0Ly8gfVxyXG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHQgfVxyXG4vKlx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAvLyB2YWx1ZTogIHRoaXMuZGF0ZVN0cmluZygpXHJcblx0ICAgICAgICBzdHlsZXM6IHtcclxuXHRcdCAgICAgIHRvcDogMCxcclxuXHRcdCAgICAgIGxlZnQ6IDBcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHtcclxuXHQgICAgLy8gc3R5bGVzOlxyXG5cdCAgfSlcclxuXHR9Ki9cclxuXHRkYXRlU3RyaW5nKCl7XHJcblx0XHRjb25zdCB7Zm9ybWF0LCBzZWxlY3RlZH0gPSB0aGlzLnByb3BzXHJcblx0XHRyZXR1cm4gZm9ybWF0ID8gZGF0ZUZvcm1hdChzZWxlY3RlZCwgZm9ybWF0KSA6IHNlbGVjdGVkXHJcblx0fVxyXG5cdGhhbmRsZUJsdXIoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQsIHRoaXMpXHJcblx0fVxyXG5cdGhhbmRsZUZvY3VzKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcylcclxuXHR9XHJcblx0Zm9jdXMgKCkge1xyXG5cdCAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKVxyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0Ly8gdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdGhpcylcclxuXHR9XHJcblx0Z2V0SW5wdXQoKXtcclxuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcylcclxuXHR9XHJcblx0aGFuZGxlUG9zaXRpb24oKXtcclxuXHRcdC8vIEZpeCBmb3IgSUU4LSdzIEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHQgIGlmICgnVGV4dFJlY3RhbmdsZScgaW4gd2luZG93ICYmICEoJ3dpZHRoJyBpbiBUZXh0UmVjdGFuZ2xlLnByb3RvdHlwZSkpIHtcclxuXHQgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoVGV4dFJlY3RhbmdsZS5wcm90b3R5cGUsIHtcclxuXHQgICAgICAnd2lkdGgnOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0OyB9IH0sXHJcblx0ICAgICAgJ2hlaWdodCc6IHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuYm90dG9tIC0gdGhpcy50b3A7IH0gfVxyXG5cdCAgICB9KTtcclxuXHQgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5wdXQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdH1cclxuXHJcblx0cmVjdXJzaXZlTWFwKGNoaWxkcywgaW5wdXRFbGVtKSB7XHJcblx0XHR2YXIgY29weUhhc0NoaWxkRWxlbSA9IChjaGlsZCkgPT4gIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG5cdFx0XHRcdGNoaWxkcmVuOiB0aGlzLnJlY3Vyc2l2ZU1hcChjaGlsZC5wcm9wcy5jaGlsZHJlbiwgaW5wdXRFbGVtKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0aWYgKGNoaWxkcy5wcm9wcyAmJiBjaGlsZHMucHJvcHMuY2hpbGRyZW4pIHtcclxuXHRcdFx0cmV0dXJuIGNvcHlIYXNDaGlsZEVsZW0oY2hpbGRzKVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRzLCBjaGlsZCA9PiB7XHJcblx0XHRcdGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2hpbGQudHlwZSAhPT0gJ2lucHV0JyA/IGNoaWxkIDogaW5wdXRFbGVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChjaGlsZC5wcm9wcy5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGNoaWxkID0gY29weUhhc0NoaWxkRWxlbShjaGlsZClcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0c2V0Q2hpbGRJbnB1dChjaGlsZHJlbiwgaW5wdXRFbGVtKXtcclxuXHRcdGlmKGNoaWxkcmVuICYmIGNoaWxkcmVuLnByb3BzKXtcclxuXHRcdFx0cmV0dXJuIDxjaGlsZHJlbj57dGhpcy5zZXRDaGlsZElucHV0KGNoaWxkcmVuLnByb3BzLmNoaWxkcmVuLCBpbnB1dEVsZW0pfTwvY2hpbGRyZW4+XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBjaGlsZC50eXBlID09PSAnaW5wdXQnID8gaW5wdXRFbGVtIDogY2hpbGRcclxuXHRcdFx0fSlcclxuLyogXHRcdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdFx0e1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGNoaWxkLnR5cGUgPT09ICdpbnB1dCcgPyBpbnB1dEVsZW0gOiBjaGlsZFxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L2Rpdj4gKi9cclxuXHRcdH1cclxuXHJcblx0XHQvLyBlbHNlIGlmKGNoaWxkcmVuKXtcclxuXHRcdC8vIFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xyXG5cdFx0Ly8gXHRcdHJldHVybiBjaGlsZC50eXBlID09PSAnaW5wdXQnID8gaW5wdXRFbGVtIDogY2hpbGRcclxuXHRcdC8vIFx0fSlcclxuXHRcdC8vIH1cclxuXHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3QgeyBjdXN0b21JbnB1dCwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgaW5wdXRFbGVtID0gPGlucHV0IHJlZj1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IGRpc2FibGVkPXtkaXNhYmxlZH0gdmFsdWU9e3RoaXMuZGF0ZVN0cmluZygpfSBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxyXG5cdFx0cmV0dXJuIGNoaWxkcmVuID8gdGhpcy5yZWN1cnNpdmVNYXAoY2hpbGRyZW4sIGlucHV0RWxlbSkgOiBpbnB1dEVsZW1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlSW5wdXQiLCIvLyDlhpzljobmnIjku73kv6Hmga/ooahcclxudmFyIGx1bmFySW5mbyA9IFtcclxuICAgIDB4MDRiZDgsMHgwNGFlMCwweDBhNTcwLDB4MDU0ZDUsMHgwZDI2MCwweDBkOTUwLDB4MTY1NTQsMHgwNTZhMCwweDA5YWQwLDB4MDU1ZDIsXHJcbiAgICAweDA0YWUwLDB4MGE1YjYsMHgwYTRkMCwweDBkMjUwLDB4MWQyNTUsMHgwYjU0MCwweDBkNmEwLDB4MGFkYTIsMHgwOTViMCwweDE0OTc3LFxyXG4gICAgMHgwNDk3MCwweDBhNGIwLDB4MGI0YjUsMHgwNmE1MCwweDA2ZDQwLDB4MWFiNTQsMHgwMmI2MCwweDA5NTcwLDB4MDUyZjIsMHgwNDk3MCxcclxuICAgIDB4MDY1NjYsMHgwZDRhMCwweDBlYTUwLDB4MDZlOTUsMHgwNWFkMCwweDAyYjYwLDB4MTg2ZTMsMHgwOTJlMCwweDFjOGQ3LDB4MGM5NTAsXHJcbiAgICAweDBkNGEwLDB4MWQ4YTYsMHgwYjU1MCwweDA1NmEwLDB4MWE1YjQsMHgwMjVkMCwweDA5MmQwLDB4MGQyYjIsMHgwYTk1MCwweDBiNTU3LFxyXG4gICAgMHgwNmNhMCwweDBiNTUwLDB4MTUzNTUsMHgwNGRhMCwweDBhNWQwLDB4MTQ1NzMsMHgwNTJkMCwweDBhOWE4LDB4MGU5NTAsMHgwNmFhMCxcclxuICAgIDB4MGFlYTYsMHgwYWI1MCwweDA0YjYwLDB4MGFhZTQsMHgwYTU3MCwweDA1MjYwLDB4MGYyNjMsMHgwZDk1MCwweDA1YjU3LDB4MDU2YTAsXHJcbiAgICAweDA5NmQwLDB4MDRkZDUsMHgwNGFkMCwweDBhNGQwLDB4MGQ0ZDQsMHgwZDI1MCwweDBkNTU4LDB4MGI1NDAsMHgwYjVhMCwweDE5NWE2LFxyXG4gICAgMHgwOTViMCwweDA0OWIwLDB4MGE5NzQsMHgwYTRiMCwweDBiMjdhLDB4MDZhNTAsMHgwNmQ0MCwweDBhZjQ2LDB4MGFiNjAsMHgwOTU3MCxcclxuICAgIDB4MDRhZjUsMHgwNDk3MCwweDA2NGIwLDB4MDc0YTMsMHgwZWE1MCwweDA2YjU4LDB4MDU1YzAsMHgwYWI2MCwweDA5NmQ1LDB4MDkyZTAsXHJcbiAgICAweDBjOTYwLDB4MGQ5NTQsMHgwZDRhMCwweDBkYTUwLDB4MDc1NTIsMHgwNTZhMCwweDBhYmI3LDB4MDI1ZDAsMHgwOTJkMCwweDBjYWI1LFxyXG4gICAgMHgwYTk1MCwweDBiNGEwLDB4MGJhYTQsMHgwYWQ1MCwweDA1NWQ5LDB4MDRiYTAsMHgwYTViMCwweDE1MTc2LDB4MDUyYjAsMHgwYTkzMCxcclxuICAgIDB4MDc5NTQsMHgwNmFhMCwweDBhZDUwLDB4MDViNTIsMHgwNGI2MCwweDBhNmU2LDB4MGE0ZTAsMHgwZDI2MCwweDBlYTY1LDB4MGQ1MzAsXHJcbiAgICAweDA1YWEwLDB4MDc2YTMsMHgwOTZkMCwweDA0YmQ3LDB4MDRhZDAsMHgwYTRkMCwweDFkMGI2LDB4MGQyNTAsMHgwZDUyMCwweDBkZDQ1LFxyXG4gICAgMHgwYjVhMCwweDA1NmQwLDB4MDU1YjIsMHgwNDliMCwweDBhNTc3LDB4MGE0YjAsMHgwYWE1MCwweDFiMjU1LDB4MDZkMjAsMHgwYWRhMFxyXG5dO1xyXG4gXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm055qE5oC75aSp5pWwXHJcbmZ1bmN0aW9uIGx1bmFyWWVhckRheXMoeSkge1xyXG4gICAgdmFyIGksIHN1bSA9IDM0OFxyXG4gICAgZm9yIChpID0gMHg4MDAwOyBpID4gMHg4OyBpID4+PSAxKSBzdW0gKz0gKGx1bmFySW5mb1t5IC0gMTkwMF0gJiBpKSA/IDEgOiAwXHJcbiAgICByZXR1cm4gKHN1bSArIGxlYXBEYXlzKHkpKVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tG3mnIjnmoTmgLvlpKnmlbBcclxuZnVuY3Rpb24gbHVuYXJNb250aERheXMoeSwgbSkge1xyXG4gICAgcmV0dXJuICgobHVuYXJJbmZvW3kgLSAxOTAwXSAmICgweDEwMDAwID4+IG0pKSA/IDMwIDogMjkpXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm06Zew5pyI55qE5aSp5pW4XHJcbmZ1bmN0aW9uIGxlYXBEYXlzKHkpIHtcclxuICAgIGlmIChsZWFwTW9udGgoeSkpIHJldHVybiAoKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAweDEwMDAwKSA/IDMwIDogMjkpXHJcbiAgICBlbHNlIHJldHVybiAoMClcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubTpl7Dlk6rkuKrmnIggMS0xMiAsIOaykumXsOS8oOWbniAwXHJcbmZ1bmN0aW9uIGxlYXBNb250aCh5KSB7XHJcbiAgICByZXR1cm4gKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAweGYpXHJcbn1cclxuXHJcblxyXG4vL+WFrOWOhui9rOWGnOWOhlxyXG5mdW5jdGlvbiB0b0x1bmFyRGF0ZShvYmpEYXRlKSB7XHJcbiAgICB2YXIgaSwgbGVhcCA9IDAsXHJcbiAgICAgICAgdGVtcCA9IDA7XHJcbiAgICB2YXIgYmFzZURhdGUgPSBuZXcgRGF0ZSgxOTAwLCAwLCAzMSk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gKG9iakRhdGUgLSBiYXNlRGF0ZSkgLyA4NjQwMDAwMDtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICByZXN1bHQuZGF5Q3lsID0gb2Zmc2V0ICsgNDA7XHJcbiAgICByZXN1bHQubW9uQ3lsID0gMTQ7XHJcblxyXG4gICAgZm9yIChpID0gMTkwMDsgaSA8IDIwNTAgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcCA9IGx1bmFyWWVhckRheXMoaSk7XHJcbiAgICAgICAgb2Zmc2V0IC09IHRlbXA7XHJcbiAgICAgICAgcmVzdWx0Lm1vbkN5bCArPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICAgIG9mZnNldCArPSB0ZW1wO1xyXG4gICAgICAgIGktLTtcclxuICAgICAgICByZXN1bHQubW9uQ3lsIC09IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC55ZWFyID0gaTtcclxuICAgIHJlc3VsdC55ZWFyQ3lsID0gaSAtIDE4NjQ7XHJcblxyXG4gICAgbGVhcCA9IGxlYXBNb250aChpKTsgLy/pl7Dlk6rkuKrmnIhcclxuICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGkgPSAxOyBpIDwgMTMgJiYgb2Zmc2V0ID4gMDsgaSsrKSB7XHJcbiAgICAgICAgLy/pl7DmnIhcclxuICAgICAgICBpZiAobGVhcCA+IDAgJiYgaSA9PSAobGVhcCArIDEpICYmIHJlc3VsdC5pc0xlYXAgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGVtcCA9IGxlYXBEYXlzKHJlc3VsdC55ZWFyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wID0gbHVuYXJNb250aERheXMocmVzdWx0LnllYXIsIGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/op6PpmaTpl7DmnIhcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCA9PSB0cnVlICYmIGkgPT0gKGxlYXAgKyAxKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvZmZzZXQgLT0gdGVtcFxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5tb25DeWwrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA9PSAwICYmIGxlYXAgPiAwICYmIGkgPT0gbGVhcCArIDEpXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXApIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgIC0tcmVzdWx0Lm1vbkN5bDtcclxuICAgICAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgKz0gdGVtcDtcclxuICAgICAgICAtLWk7XHJcbiAgICAgICAgLS1yZXN1bHQubW9uQ3lsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdC5tb250aCA9IGk7XHJcbiAgICByZXN1bHQuZGF5ID0gb2Zmc2V0ICsgMTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8v5Yac5Y6G5pWw5a2X6L2s5a2X56ymXHJcbmZ1bmN0aW9uIHRvTHVuYXJEYXkgKGQpe1xyXG4gICAgdmFyIGx1bmFyRGF5ID0gWyfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfkuIMnLCAn5YWrJywgJ+S5nScsICfljYEnLCAn5Y2B5LiAJywgJ+WNgeS6jCddO1xyXG4gICAgdmFyIGx1bmFyVGVlbiA9IFsn5YidJywgJ+WNgScsICflu78nLCAn5LiJJ107XHJcbiAgICB2YXIgZHN0ciA9IGQrJycsXHJcbiAgICAgICAgdGVlbiA9IGx1bmFyVGVlblswXSwgXHJcbiAgICAgICAgcmlnaHROdW0gPSBkc3RyLmxlbmd0aCA8IDIgPyAnJyA6IGRzdHIuc3Vic3RyaW5nKDEpLFxyXG4gICAgICAgIHJpZ2h0RGVjbyA9IHJpZ2h0TnVtPT09JzAnID8gJ+WNgScgOiBsdW5hckRheVtOdW1iZXIocmlnaHROdW0pLTFdO1xyXG4gICAgaWYoZCA+IDEwKXtcclxuICAgICAgICB0ZWVuID0gbHVuYXJUZWVuWzFdO1xyXG4gICAgICAgIGlmKGQ+PTIwKXtcclxuICAgICAgICAgICAgdGVlbiA9IGx1bmFyVGVlblsyXTtcclxuICAgICAgICAgICAgaWYoZD49MzApe1xyXG4gICAgICAgICAgICAgICAgdGVlbiA9IGx1bmFyVGVlblszXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAgdGVlbiArIChkc3RyLmxlbmd0aCA8IDIgPyBsdW5hckRheVtkLTFdIDogcmlnaHREZWNvKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge2x1bmFyWWVhckRheXMsIGx1bmFyTW9udGhEYXlzLCBsZWFwRGF5cywgbGVhcE1vbnRoLCB0b0x1bmFyRGF0ZSwgdG9MdW5hckRheX07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERhdGVEYXkgZnJvbSAnLi9kYXRlLWRheS5qcydcclxuY2xhc3MgRGF0ZU1vbnRoIGV4dGVuZHMgQ29tcG9uZW50IHsgXHJcblx0Lypwcm9wVHlwZXM6IHtcclxuXHRcdGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuXHRcdGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZ1xyXG5cdH0qL1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtzZWxlY3Rpbmc6IHByb3BzLnNlbGVjdGluZ307XHJcblx0IH1cclxuXHRnZXRNb250aEluZm8gKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRlLCAnZGF0ZW1vbnRoJylcclxuXHRcdGxldCB5ID0gdGhpcy5wcm9wcy5kYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0ICAgIGxldCBtID0gdGhpcy5wcm9wcy5kYXRlLmdldE1vbnRoKCk7XHJcblx0XHR2YXIgZGF0ZWRheSwgbGluZT0wLCB0ZW1wPVtdLCBpc2ZpbGwgPSB0aGlzLnByb3BzLmlzZmlsbDtcclxuXHRcdC8vIGNvbnNvbGUudGltZSgn6K6h566X5LiA5pyI5omA55So5pe26Ze0JylcclxuICAgICAgICB2YXIgcHJldk1EYXkgPSBuZXcgRGF0ZSh5LCBtLCAwKSwgcHJldk1EYXlMYXN0ID0gcHJldk1EYXkuZ2V0RGF0ZSgpOyAgICAvL3ByZXYgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgbmV4dE1EYXkgPSBuZXcgRGF0ZSh5LCBtKzEsIDApLCBjdXJyTURheUxhc3QgPSBuZXh0TURheS5nZXREYXRlKCk7ICAvL2N1cnJlbnQgTW9udGggTGFzdCBEYXlcclxuICAgICAgICB2YXIgY3Vyck1EYXkgPSBuZXcgRGF0ZSh5LCBtKzAsIDEpLCBjdXJyTURheUZpcnN0PSBjdXJyTURheS5nZXREYXkoKTsgICAvL2N1cnJlbnQgTW9udGggRmlyc3QgRGF5IFdlZWtcclxuXHJcbiAgICAgICB0ZW1wW2xpbmVdPVtdO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYWxjTGluZShkYXRlKXtcclxuXHQgICAgXHR2YXIgd2Vla25vID0gZGF0ZS5nZXREYXkoKTsgICAvL3dlZWtcclxuXHQgICAgICAgIGlmKHdlZWtubyA9PSAwKSB0ZW1wW2xpbmVdPVtdXHJcblx0ICAgICAgICB0ZW1wW2xpbmVdLnB1c2goZGF0ZSk7XHJcblx0ICAgICAgICB3ZWVrbm8gPT0gNiAmJiBsaW5lKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHByZXZNRGF5LCBjdXJyTURheSwgcHJldk1EYXlMYXN0LCBjdXJyTURheUxhc3QsIGN1cnJNRGF5Rmlyc3QpXHJcbiAgICAgICBpZihjdXJyTURheUZpcnN0ICYmIGlzZmlsbCl7IC8vcHJldiBNb250aCBjYWxlbmRhciByb3cgZmlyc3RcclxuICAgICAgICAgICAgdmFyIGsgPSBwcmV2TURheUxhc3QgLSBjdXJyTURheUZpcnN0ICsgMTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjdXJyTURheUZpcnN0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGRhdGVkYXkgPSBuZXcgRGF0ZSh5LCBtLTEsIGspXHJcbiAgICAgICAgICAgICAgICBcdHRlbXBbbGluZV0ucHVzaChkYXRlZGF5KVxyXG4gICAgICAgICAgICAgICAgaysrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0xOyBpIDw9IGN1cnJNRGF5TGFzdDsgaSsrKSB7IC8vY3VycmVudCBtb250aFxyXG4gICAgICAgIFx0ZGF0ZWRheSA9IG5ldyBEYXRlKHksIG0sIGkpXHJcbiAgICAgICAgXHRjYWxjTGluZShkYXRlZGF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpc2ZpbGwpe1xyXG5cdCAgICAgICAgZm9yIChqPTE7IGogPCAxMjsgaisrKSB7XHJcblx0ICAgICAgICBcdGlmKGxpbmU8Nil7XHJcblx0ICAgICAgICBcdFx0Ly8gY29uc29sZS5sb2cobGluZSwgJ2xpbmUnKVxyXG5cdFx0ICAgICAgICAgICAgZGF0ZWRheSA9ICBuZXcgRGF0ZSh5LCBtKzEsIGopO1xyXG5cdFx0ICAgICAgICAgICAgY2FsY0xpbmUoZGF0ZWRheSlcclxuXHQgICAgICAgXHRcdH1cclxuXHQgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLnRpbWVFbmQoJ+iuoeeul+S4gOaciOaJgOeUqOaXtumXtCcpXHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcblx0fVxyXG5cclxuXHR3ZWVrcyhtb250aHMpe1xyXG5cdFx0dmFyIHdlZWtzID0gW10sIHRoYXQgPSB0aGlzO1xyXG5cdFx0bW9udGhzLm1hcChmdW5jdGlvbih3ZWVrLCB3a2V5KSB7XHJcblx0XHRcdHdlZWtzLnB1c2goPGRpdiBjbGFzc05hbWU9e1wiZGF0ZS13ZWVrIGRhdGUtd2Vlay1cIit3a2V5fSBrZXk9e3drZXl9PlxyXG5cdFx0XHRcdHt0aGF0LmRheXMod2Vlayl9XHJcblx0XHRcdDwvZGl2PilcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gd2Vla3NcclxuXHR9XHJcblx0ZGF5cyh3ZWVrKXtcclxuXHRcdHZhciBkYXlzID0gW10sIHRoYXQgPSB0aGlzO1xyXG5cdFx0d2Vlay5tYXAoZnVuY3Rpb24oZGF5LCBka2V5KXtcclxuXHRcdFx0ZGF5cy5wdXNoKCA8RGF0ZURheSB7Li4udGhhdC5wcm9wc30gb25Nb3VzZUVudGVyPXt0aGF0Lm9uTW91c2VFbnRlci5iaW5kKHRoaXMpfSBzZWxlY3Rpbmc9e3RoYXQuc3RhdGUuc2VsZWN0aW5nfSBlZGF0ZT17ZGF5fSBrZXk9e2RrZXl9Lz4gKVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiBkYXlzXHJcblx0fVxyXG5cdG9uTW91c2VFbnRlcihkYXRlaW5mbyl7XHJcblx0XHRsZXQge3N0YXJ0LCBlbmR9ID0gdGhpcy5wcm9wc1xyXG5cdFx0aWYoc3RhcnQgJiYgZW5kKSB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpbmc6IGRhdGVpbmZvLmRhdGV9KVxyXG5cdH1cclxuXHRvbk1vdXNlTGVhdmUoKXtcclxuXHRcdGxldCB7c3RhcnQsIGVuZH0gPSB0aGlzLnByb3BzXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGluZzogbnVsbH0pXHJcblx0fVxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygncmVuZGVyIHRpbWVzJylcclxuXHRcdGNvbnN0IG1vbnRocyA9IHRoaXMuZ2V0TW9udGhJbmZvKCksIHRoYXQ9dGhpcztcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLW1vbnRoXCIgKyAodGhhdC5zdGF0ZS5zZWxlY3RpbmcgPyBcIiBkYXRlLXNlbGVjdGluZyBcIiA6IFwiIFwiKX0gb25Nb3VzZUxlYXZlPXt0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpfT5cclxuXHRcdFx0XHR7dGhpcy53ZWVrcyhtb250aHMpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHR9XHJcbn1cclxuXHJcbkRhdGVNb250aC5kZWZhdWx0UHJvcHMgPSB7XHJcblx0c2VsZWN0aW5nOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVNb250aFxyXG4iLCIvLyDlhpzljobkuozljYHlm5voioLmsJRcclxudmFyIGNhY2hlID0ge307XHJcbnZhciBjYWNoZWtleXMgPSBbXTtcclxudmFyIHNvbGFyVGVybSA9IFsn5bCP5a+SJywgJ+Wkp+WvkicsICfnq4vmmKUnLCAn6Zuo5rC0JywgJ+aDiuibsCcsICfmmKXliIYnLCAn5riF5piOJywgJ+iwt+mbqCcsICfnq4vlpI8nLCAn5bCP5ruhJywgJ+iKkuenjScsICflpI/oh7MnLCAn5bCP5pqRJywgJ+Wkp+aakScsICfnq4vnp4snLCAn5aSE5pqRJywgJ+eZvemcsicsICfnp4vliIYnLCAn5a+S6ZyyJywgJ+mcnOmZjScsICfnq4vlhqwnLCAn5bCP6ZuqJywgJ+Wkp+mbqicsICflhqzoh7MnXTtcclxudmFyIHNUZXJtSW5mbyA9IFswLCAyMTIwOCwgNDI0NjcsIDYzODM2LCA4NTMzNywgMTA3MDE0LCAxMjg4NjcsIDE1MDkyMSwgMTczMTQ5LCAxOTU1NTEsIDIxODA3MiwgMjQwNjkzLCAyNjMzNDMsIDI4NTk4OSwgMzA4NTYzLCAzMzEwMzMsIDM1MzM1MCwgMzc1NDk0LCAzOTc0NDcsIDQxOTIxMCwgNDQwNzk1LCA0NjIyMjQsIDQ4MzUzMiwgNTA0NzU4XTtcclxuLy8g6L+U5Zue5p+Q5bm055qE56ysbuS4quiKguawlOS4uuWHoOaXpSjku44w5bCP5a+S6LW3566XKVxyXG52YXIgZ2V0U29sYXJUZXJtSW5kZXggPSBmdW5jdGlvbih5ZWFyLCBpbmRleCkge1xyXG4gICAgdmFyIG9mZkRhdGUgPSBuZXcgRGF0ZSgoMzE1NTY5MjU5NzQuNyAqICh5ZWFyIC0gMTkwMCkgKyBzVGVybUluZm9baW5kZXhdICogNjAwMDApICsgRGF0ZS5VVEMoMTkwMCwgMCwgNiwgMiwgNSkpO1xyXG4gICAgcmV0dXJuIG9mZkRhdGUuZ2V0VVRDRGF0ZSgpO1xyXG59O1xyXG5cclxuLy8g6L+U5Zue6K+l5pyI55qE6IqC5rCU5L+h5oGvXHJcbnZhciBnZXRNb250aFNvbGFyVGVybXMgPSBmdW5jdGlvbih5ZWFyLCBtb250aCkge1xyXG4gICAgaWYgKHllYXIgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgbW9udGggPSB5ZWFyLmdldE1vbnRoKCk7XHJcbiAgICAgICAgeWVhciA9IHllYXIuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuICAgIHZhciBrZXkgPSAnJyArIHllYXIgKyBtb250aDtcclxuICAgIGlmIChrZXkgaW4gY2FjaGUpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVba2V5XTtcclxuICAgIH1cclxuICAgIHZhciByZXQgPSBjYWNoZVtrZXldID0ge307XHJcbiAgICB2YXIgaW5kZXg7XHJcbiAgICBpbmRleCA9IGdldFNvbGFyVGVybUluZGV4KHllYXIgLSAxOTAwLCBtb250aCAqIDIpO1xyXG4gICAgcmV0W2luZGV4IC0gMV0gPSBzb2xhclRlcm1bbW9udGggKiAyXTtcclxuICAgIGluZGV4ID0gZ2V0U29sYXJUZXJtSW5kZXgoeWVhciAtIDE5MDAsIG1vbnRoICogMiArIDEpO1xyXG4gICAgcmV0W2luZGV4IC0gMV0gPSBzb2xhclRlcm1bbW9udGggKiAyICsgMV07XHJcbiAgICBjYWNoZWtleXMucHVzaChrZXkpO1xyXG4gICAgaWYgKGNhY2hla2V5cy5sZW5ndGggPiAxMikge1xyXG4gICAgICAgIGRlbGV0ZSBjYWNoZVtjYWNoZWtleXMuc2hpZnQoKV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5leHBvcnQge2dldFNvbGFyVGVybUluZGV4LCBnZXRNb250aFNvbGFyVGVybXN9IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGF0ZURheSBmcm9tICcuL2RhdGUtZGF5LmpzJ1xyXG5jbGFzcyBEYXRlVGltZSBleHRlbmRzIENvbXBvbmVudCB7IFxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpbWVcIj5cclxuXHRcdFx0e25ldyBEYXRlKCkuZ2V0SG91cnMoKSsgJzonICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCl9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lIiwiLy9AdG9kbyDop6PlhrPliIfmjaLmnIjku73ml7bvvIwg6YCJ5oup55qE5YC85pyJ5Y+Y77ybMi7lpJbpg6jlgLzlj5jljJblkI7vvIxpbnB1dOWAvOS4jnVp5rKh5pyJ5Y+Y5YyWIDMga2V5IGlucHV0XG4vLyBpbXBvcnQgJy4vZGF0ZXBpY2tlci5sZXNzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IERhdGVIZWFkZXIgZnJvbSAnLi9kYXRlLWhlYWRlci5qcydcbmltcG9ydCBEYXRlQ2FsZW5kYXIgZnJvbSAnLi9kYXRlLWNhbGVuZGFyLmpzJ1xuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuL2RhdGUtaW5wdXQuanMnXG5pbXBvcnQgRGF0ZUluQm9keSBmcm9tICcuL2RhdGUtaW4tYm9keS5qcydcblxudmFyIG5vdyA9IG5ldyBEYXRlKClcblxuY2xhc3MgUmVhY3REYXRlcGlja2VyUGx1cyBleHRlbmRzIENvbXBvbmVudCB7XG5cdC8vIHByb3BUeXBlczoge1xuXHQvLyBcdHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0Ly9kZWZhdWx0IGRhdGVcblx0Ly8gXHRmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAgICAvL2Zvcm1hdCBkYXRlXG5cdC8vIFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcdCAgICAvL3Nob3cgcHJlZml4LXByZXYgcHJlZml4LW5leHQgbW9udGhcblx0Ly8gXHRtb250aHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHRcdC8vc2hvdyBtdWx0aS1wYW5lcyBieSBtb250aHNcblxuXHQvLyBcdHRpbWU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAgIC8vc2hvdyB0aW1lIHNlbGVjdCBAdG9kb1xuXG5cdC8vIFx0bWluOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtaW5cblx0Ly8gXHRtYXg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1heFxuXG5cdC8vIFx0c3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblx0Ly8gXHRlbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblxuXHQvLyBcdGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgIC8vIGN1c3RvbSBjbGFzc1xuXHQvLyBcdGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vaW5wdXQgY2FuJ3QgY2hhbmdlXG5cdC8vIFx0YXV0b0hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9zZWxlY3RlZCBhdXRvIGhpZGVcblx0Ly8gXHRpbmxpbmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAvL2lubGluZVxuXHQvLyBcdGxhbmc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NuJywgJ2VuJ10pLFxuXG5cdC8vIFx0ZmVzdGl2YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBmZXN0aXZhbFxuXHQvLyBcdGhhc2x1bmFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgbHVuYXJcblxuXHQvLyBcdG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5cdC8vIFx0b25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxuXHQvLyBcdG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChkYXlpbmZvLCBwaWNrZXIpXG5cdC8vIFx0ZGF5QWRkb246IFJlYWN0LlByb3BUeXBlcy5mdW5jIFx0XHQvL2FyZ3MgKGRheWluZm8pXG5cdC8vIFx0Ly9kYXlBZGRvbiwgYWRkIGRhdGEgZm9yIGRheSwgYW5kIG5lZWQgdG8gcmV0dXJuIGRvbSxcblx0Ly8gXHQvL3RoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSBpbnNlcnQgdG8gZGF5IGVhY2ggZWxlbWVudC4gcGxzIHNlZSBsYXN0IGRlbW9cblx0Ly8gIHBsYWNlaG9sZGVyXG5cdC8vICBwbGFjZWhvbGRlckVuZFxuXHQvLyAgc3VwcG9ydCBjaGlsZHJlbiB0byBkZWZpbmVkIHlvdXIgaW5wdXQgZG9tIHN0cnVjdCwgcGxzIHNlYXJjaCBgZGVmaW5lZCB5b3VyIGlucHV0IGRvbWAgYXQgdGhpcyBwYWdlXG5cdC8vIH1cblx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0IHN1cGVyKHByb3BzKTtcblx0XHR2YXIgc2VsZWN0ZWQgPSAgcHJvcHMuc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblx0XHRcdFx0ZGF0ZTogc2VsZWN0ZWQsXHRcdC8vcmVuZGVyIG1vbnRoIGJ5IGRhdGVcblx0XHRcdFx0c2hvdzogcHJvcHMuaW5saW5lID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRmb2N1czogZmFsc2UsXHQvL2ZvY3VzIHN0YXRlXG5cdFx0XHRcdG9mZnNldDoge30sXHRcdC8vZGF0ZXBpY2tlciBwb3NpdGlvblxuXHRcdFx0XHRzZWxlY3RlZDogc2VsZWN0ZWQsXG5cdFx0XHRcdHN0YXJ0OiBwcm9wcy5zdGFydCxcblx0XHRcdFx0ZW5kOiBwcm9wcy5lbmQsXG5cdFx0XHRcdG1pbjogcHJvcHMubWluIHx8IHByb3BzLnN0YXJ0LFxuXHRcdFx0XHRtYXg6IHByb3BzLm1heCB8fCBwcm9wcy5lbmQsXG5cdFx0XHRcdC8vIHN0YXR1czogJycgICBcdC8vUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pXG5cdFx0XHRcdC8vJ3N0YXJ0JyBhbmQgJ2VuZCcgdXNlIGJ5IGJpLWRhdGVwaWNrZXIgcmFuZ2UgdmFsdWUsIGFuZCB1bmRlZmluZWQgdXNlIGJ5IHNpbmdsZSBkYXRlcGlja2VyIHNpbmdsZSBkYXRlXG5cdFx0fVxuICAgIH1cblxuXHRvbkZvY3VzKGV2ZW50LCBpbnB1dCl7XG5cdFx0bGV0IHtzaG93LCBmb2N1cywgc2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZVxuXHRcdGlmKHNob3cgJiYgIWZvY3VzKXtcblx0XHRcdHRoaXMuc3RhdGUuZm9jdXMgPSB0cnVlLy9qdXN0IGNoYW5nZSBzdGF0ZSBub3QgdHJpZ2dlciByZW5kZXJcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHRsZXQgc3RhdHVzID0gaW5wdXQucHJvcHMuc3RhdHVzOyBzZWxlY3RlZCA9IHN0YXR1cz90aGlzLnN0YXRlW3N0YXR1c106c2VsZWN0ZWQ7XG5cdFx0bGV0IHtsZWZ0LCB0b3AsIGhlaWdodH0gPSBpbnB1dC5oYW5kbGVQb3NpdGlvbigpO1xuXHRcdFx0dG9wICs9IChoZWlnaHQrIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSlcblx0XHRsZXQge29uRm9jdXN9ID0gdGhpcy5wcm9wc1xuXG5cdFx0dGhpcy5zaG93KHRydWUsIHtsZWZ0LCB0b3B9LCB0cnVlLCBzdGF0dXMpXG5cdFx0b25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50LCB0aGlzKVxuXHRcdGlmKHN0YXR1cykgdGhpcy5zZXRTdGF0ZSh7ZGF0ZTogc2VsZWN0ZWR9KVxuXHR9XG5cblx0b25CbHVyKGV2ZW50LCBpbnB1dCl7XG5cdFx0Y29uc3Qge3Nob3csIGZvY3VzfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCB7aW5saW5lLCBvbkJsdXJ9ID0gdGhpcy5wcm9wc1xuXHRcdGlmKCFzaG93KSByZXR1cm47XG5cdFx0aWYgKCFmb2N1cykge1xuXHQgICAgICBcdGlucHV0LmZvY3VzKClcdC8vd2hlbiBzaG93ICYmICFmb2N1cywgdHJpZ2dlciBmb2N1c1xuXHQgICAgfSBlbHNlIGlmKCFpbmxpbmUpIHtcblx0ICAgICAgb25CbHVyICYmIG9uQmx1cihldmVudCwgdGhpcylcblx0ICAgICAgZm9jdXMgJiYgdGhpcy5yZW1vdmVQaWNrZXIoKVxuXHQgICAgfVxuXHR9XG5cblx0Y2xpY2tQYW5lKGV2ZW50LCBhYmMpe1xuXHRcdHRoaXMuc3RhdGUuZm9jdXMgPSBmYWxzZSAvL2p1c3QgY2hhbmdlIHN0YXRlIG5vdCB0cmlnZ2VyIHJlbmRlclxuXHR9XG5cblx0c2hvdyAoc2hvdywgb2Zmc2V0LCBmb2N1cywgc3RhdHVzKSB7XG5cdCAgICB0aGlzLnNldFN0YXRlKHsgc2hvdywgb2Zmc2V0LCBmb2N1cywgc3RhdHVzfSlcblx0fVxuXG5cdHVwZGF0ZU1vbnRoKG51bSl7XG5cdFx0Y29uc3Qge2RhdGV9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IGNkYXRlID0gdGhpcy5udW1Nb250aChkYXRlLCBudW0pXG5cdFx0dGhpcy51cGRhdGVEYXRlKHtkYXRlOiBjZGF0ZX0sIHRydWUpXG5cdH1cblxuXHRudW1Nb250aChkYXRlLCBudW0pe1xuXHRcdGRhdGUgPSBkYXRlIHx8IG5vdztcblx0XHRkYXRlID0gZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBkYXRlIDogbmV3IERhdGUoZGF0ZSlcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyBudW0sIGRhdGUuZ2V0RGF0ZSgpKVxuXHR9XG5cblx0dXBkYXRlRGF5KGRhdGVpbmZvKXtcblx0XHR0aGlzLnVwZGF0ZURhdGUoZGF0ZWluZm8pXG5cdH1cblxuXHR1cGRhdGVEYXRlKGRhdGVpbmZvLCBpc01vbnRoKXtcblx0XHRsZXQge29uQ2hhbmdlLCBhdXRvSGlkZSwgc3RhcnQsIGVuZH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHtzdGF0dXM9J3NlbGVjdGVkJywgc2VsZWN0ZWR9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCBnZXRTZWxlY3RlZCA9ICFpc01vbnRoID8gZGF0ZWluZm8uZGF0ZSA6IHRoaXMuc3RhdGVbc3RhdHVzXVxuXHRcdC8vIGxldCB0ZW1wID0ge307IHRlbXBbc3RhdHVzXSA9IGdldFNlbGVjdGVkXG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2hvdzogdHJ1ZSwgZGF0ZTogZGF0ZWluZm8uZGF0ZSwgc2VsZWN0ZWQ6IGdldFNlbGVjdGVkLCBmb2N1czogZmFsc2UsIFtzdGF0dXNdOiBnZXRTZWxlY3RlZH0pXG5cdFx0aWYoIWlzTW9udGgpe1xuXHRcdFx0aWYoc3RhcnQpe1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHttaW46IHN0YXJ0fSlcblx0XHRcdH1cblx0XHRcdGlmKGVuZCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe21heDogZW5kfSlcblx0XHRcdH1cblxuXHRcdFx0b25DaGFuZ2UgJiYgb25DaGFuZ2UoZGF0ZWluZm8sIHRoaXMpXG5cdFx0XHRhdXRvSGlkZSAmJiB0aGlzLnJlbW92ZVBpY2tlcigpXG5cdFx0fVxuXHR9XG5cblx0cmVtb3ZlUGlja2VyKCl7XG5cdFx0dGhpcy5zaG93KGZhbHNlKVxuXHRcdHRoaXMucmVmcy5pbnNEYXRlSW5Cb2R5ICYmIHRoaXMucmVmcy5pbnNEYXRlSW5Cb2R5LnJlbW92ZVBpY2tlcih0cnVlKVxuXHR9XG5cbiAgICBwaWNrZXJzKHN0YXR1cykge1xuXHRcdGxldCAkcGlja2VycyA9IFtdLCBvZmZzZXRzID0gW10sIGRoLCBkYywgaWRhdGVcblx0XHRsZXQge2RhdGUsICBzdGFydCwgZW5kLCBtaW4sIG1heCwgb2Zmc2V0fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2lubGluZSwgbW9udGhzLCBsYW5nLCBoYXNsdW5hciwgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlW3N0YXR1cz9zdGF0dXM6J3NlbGVjdGVkJ11cblx0XHRsZXQgY2xhc3NlcyA9IGBkYXRlLXBpY2tlciBkYXRlLXBpY2tlci0ke2lubGluZT8naW5saW5lJzonYmxvY2snfSAke2NsYXNzTmFtZT9jbGFzc05hbWU6Jyd9ICR7aGFzbHVuYXI/J2RhdGUtcGlja2VyLWx1bmFyJzonJ31gXG5cdFx0bGV0IHBpY2tlcldpZHRoID0gdGhpcy5zdGF0ZS53aWR0aCB8fCAyMTU7XG5cdFx0Zm9yKHZhciBpPTA7IGk8bW9udGhzOyBpKyspe1xuXHRcdFx0b2Zmc2V0cy5wdXNoKHtsZWZ0OiBpKnBpY2tlcldpZHRoICsgb2Zmc2V0LmxlZnQsIHRvcDogb2Zmc2V0LnRvcH0pXG5cdFx0XHRpZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgaSlcblx0XHRcdGRoID0gPERhdGVIZWFkZXIgZGF0ZT17aWRhdGV9IGxhbmc9e2hhc2x1bmFyPydjbic6bGFuZ30gdXBkYXRlTW9udGg9e3RoaXMudXBkYXRlTW9udGguYmluZCh0aGlzKX0vPlxuXHRcdFx0ZGMgPSA8RGF0ZUNhbGVuZGFyIHsuLi50aGlzLnByb3BzfSBtaW49e21pbn0gbWF4PXttYXh9IGRhdGU9e2lkYXRlfSBzdGF0dXM9e3N0YXR1c30gc3RhcnQ9e3N0YXJ0fSBlbmQ9e2VuZH0gc2VsZWN0ZWQ9e3NlbGVjdGVkfSBvbkNoYW5nZT17dGhpcy51cGRhdGVEYXkuYmluZCh0aGlzKX0vPlxuXG5cdFx0XHQkcGlja2Vycy5wdXNoKGlubGluZSA/XG5cdFx0XHRcdFx0IDxkaXYgb25Nb3VzZURvd249e3RoaXMuY2xpY2tQYW5lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlc30ga2V5PXtpfT57ZGh9e2RjfTwvZGl2PiA6XG5cdFx0XHRcdFx0IDxkaXYgb25Nb3VzZURvd249e3RoaXMuY2xpY2tQYW5lLmJpbmQodGhpcyl9IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e29mZnNldHNbaV19IGtleT17aX0+e2RofXtkY308L2Rpdj4pXG5cdFx0fVxuXHRcdHJldHVybiAkcGlja2Vyc1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUgKHcpIHtcblx0XHQhdGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5zZXRTdGF0ZSh7d2lkdGg6IHd9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgb2xkcHJvcHMpIHtcblx0XHRpZihwcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0bGV0IHtzaG93LCBzZWxlY3RlZCwgc3RhcnQsIGVuZCwgc3RhdHVzfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2Zvcm1hdCwgaW5saW5lLCBtb250aHMsIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgcGxhY2Vob2xkZXJFbmQsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblx0XHRsZXQgcGlja2VyLCBwaWNrZXJzLCBwaWNrZXJJbkJvZHlcblx0XHRsZXQgY2xzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBjbHNXcmFwcGVyTmFtZSA9IGNsc05hbWU/JyAnK2Nsc05hbWUrJy1wYW5lcyc6ICcnXG5cdFx0bGV0IGRpID0gKHZhbCwgc3RhdCkgPT4gPERhdGVJbnB1dCBzZWxlY3RlZD17dmFsPT09dm9pZCAwID8gc2VsZWN0ZWQgOiB2YWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvcm1hdD17Zm9ybWF0fSBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtzdGF0PT0nZW5kJz9wbGFjZWhvbGRlckVuZDpwbGFjZWhvbGRlcn0gIGNoaWxkcmVuPXtjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gc3RhdHVzPXtzdGF0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZWY9e3N0YXR9Lz5cblx0XHRpZihzaG93KXtcblx0XHRcdHBpY2tlcnMgPSB0aGlzLnBpY2tlcnMoc3RhdHVzKVxuXHRcdFx0cGlja2VyID0gPGRpdiBjbGFzc05hbWU9eyhtb250aHM+MT8nZGF0ZS1tdWx0aSBjbGVhcmZpeCc6JycpICsgY2xzV3JhcHBlck5hbWV9PntwaWNrZXJzfTwvZGl2PlxuXHRcdFx0cGlja2VySW5Cb2R5ID0gPERhdGVJbkJvZHkgIG9uVXBkYXRlPXt0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdkYXRlLXBpY2tlci13cmFwcGVyJyByZWY9XCJpbnNEYXRlSW5Cb2R5XCI+e3BpY2tlcn08L0RhdGVJbkJvZHk+XG5cdFx0fVxuXHRcdGxldCBkaWRvbSA9IHN0YXJ0IHx8IGVuZCA/IDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1pbnB1dHNcIj57c3RhcnQhPT12b2lkIDAgJiYgZGkoc3RhcnQsICdzdGFydCcpfXtlbmQhPT12b2lkIDAgJiYgZGkoZW5kLCAnZW5kJyl9PC9kaXY+IDogZGkoKVxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLWNvbXBvbmVudHMgXCIrIGNsc05hbWV9PlxuXHRcdFx0XHRcdHtkaWRvbX1cblx0XHRcdFx0XHR7aW5saW5lID8gcGlja2VyIDogcGlja2VySW5Cb2R5fVxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufTtcblxuUmVhY3REYXRlcGlja2VyUGx1cy5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzZmlsbDogZmFsc2UsXG5cdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRzZWxlY3RlZDogbm93LFxuXHRtb250aHM6IDEsXG5cdGxhbmc6ICdlbidcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3REYXRlcGlja2VyUGx1cztcbiJdfQ==
