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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtY2FsZW5kYXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZGF5LmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWZvcm1hdC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1oZWFkZXIuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaG9saWRheXMuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1pbnB1dC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1sdW5hci5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1tb250aC5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10ZXJtLmpzIiwiRTovZ2l0L1RlY2hDbG91ZC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRpbWUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvc3JjL1JlYWN0RGF0ZXBpY2tlclBsdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzJCQUVsQixpQkFBaUI7Ozs7MEJBQ2xCLGdCQUFnQjs7OztJQUMvQixZQUFZO1dBQVosWUFBWTs7QUFDTixVQUROLFlBQVksQ0FDTCxLQUFLLEVBQUU7d0JBRGQsWUFBWTs7QUFFViw2QkFGRixZQUFZ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LE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUNsRixDQUFDOzs7QUFHRixTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsUUFBSSxDQUFDO1FBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUNoQixTQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxBQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0UsV0FBUSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdCOzs7QUFHRCxTQUFTLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFCLFdBQVEsQUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFJLE9BQU8sSUFBSSxDQUFDLEFBQUMsR0FBSSxFQUFFLEdBQUcsRUFBRSxD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QU8sQ0FBQztJQUFFLEdBQUcsS0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztJQUFPLEdBQUcsRUFBRSxFQUFFLENBQUE7QUFDM0ksVUFBTzs7TUFBSyxTQUFTLEVBQUUsa0JBQWtCLEdBQUUsT0FBTyxBQUFDO0lBQy9DLEtBQUs7SUFDTCxNQUFNLEdBQUcsTUFBTSxHQUFHLFlBQVk7SUFDMUIsQ0FBQTtHQUNSOzs7UUEvS0ksbUJBQW1COzs7QUFnTHhCLENBQUM7O0FBRUYsbUJBQW1CLENBQUMsWUFBWSxHQUFHO0FBQ2xDLE9BQU0sRUFBRSxLQUFLO0FBQ2IsT0FBTSxFQUFFLFlBQVk7QUFDcEIsU0FBUSxFQUFFLEdBQUc7QUFDYixPQUFNLEVBQUUsQ0FBQztBQUNULEtBQUksRUFBRSxJQUFJO0NBQ1YsQ0FBQTs7cUJBRWMsbUJBQW1CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBEYXRlTW9udGggZnJvbSAnLi9kYXRlLW1vbnRoLmpzJ1xyXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSAnLi9kYXRlLXRpbWUuanMnO1xyXG5jbGFzcyBEYXRlQ2FsZW5kYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRjb25zdCBkYXRlY2xkICA9IDxEYXRlTW9udGggey4uLnRoaXMucHJvcHN9IC8+XHJcblx0XHRjb25zdCBkYXRldGltZSA9IDxEYXRlVGltZSB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdGxldCBwaWNrZXIgPSB0aGlzLnByb3BzLnRpbWUgPyBkYXRlY2xkK2RhdGV0aW1lOiBkYXRlY2xkO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1jYWxlbmRhciBhbmltYXRlZCBpbmZpbml0ZSBmYWRlSW5SaWdodFwiPlxyXG5cdFx0XHR7cGlja2VyfVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUNhbGVuZGFyIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3RvTHVuYXJEYXRlLCB0b0x1bmFyRGF5fSBmcm9tICcuL2RhdGUtbHVuYXInXHJcbmltcG9ydCB7Z2V0U29sYXJUZXJtSW5kZXgsIGdldE1vbnRoU29sYXJUZXJtc30gZnJvbSAnLi9kYXRlLXRlcm0nXHJcbmltcG9ydCB7c2FsYXJIb2xpZGF5cywgbHVuYXJIb2xpZGF5c30gZnJvbScuL2RhdGUtaG9saWRheXMnXHJcbi8vcmVuZGVyIG1vbnRoXHJcbi8vY3VycmVudCBtb250aFxyXG5jbGFzcyBEYXRlRGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qcHJvcFR5cGVzOiB7XHJcbiAgICAgICAgZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgICAgICBmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9Ki9cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2VsZWN0ZWQsIHByb3BzLnNlbGVjdGVkLCAnc2VsZWN0ZWQnKVxyXG4gICAgfVxyXG4gICAgLy/ojrflj5bmn5DlpKnnmoTmiYDmnInkv6Hmga8gbSsx5omN5piv5pi+56S655So55qE5pyI5YiGXHJcbiAgICBnZXREYXlJbmZvKCl7XHJcbiAgICAgICAgdmFyIHtkYXRlLCBlZGF0ZSwgbWluLCBtYXgsIHN0YXJ0LCBlbmQsIHNlbGVjdGVkLCBzZWxlY3RpbmcsIHN0YXR1cywgZGF5QWRkb24gfSA9IHRoaXMucHJvcHMgLy9zZWxlY3RlZCBkYXRlLCByZW5kZXIgZGF0ZSwgZWFjaCBkYXRlXHJcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZCB8fCBuZXcgRGF0ZSgpXHJcblxyXG4gICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQgaW5zdGFuY2VvZiBEYXRlID8gc2VsZWN0ZWQgOiBuZXcgRGF0ZShzZWxlY3RlZClcclxuICAgICAgICBkYXRlID0gZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBkYXRlIDogbmV3IERhdGUoZGF0ZSlcclxuICAgICAgICBlZGF0ZSA9IGVkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGVkYXRlIDogbmV3IERhdGUoZWRhdGUpXHJcblxyXG4gICAgICAgIGNvbnN0IFtzeSwgc20sIHNkXSA9IFtzZWxlY3RlZC5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZC5nZXRNb250aCgpLCBzZWxlY3RlZC5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW2N5LCBjbSwgY2RdID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKV1cclxuICAgICAgICBjb25zdCBbeSwgbSwgZF0gPSBbZWRhdGUuZ2V0RnVsbFllYXIoKSwgZWRhdGUuZ2V0TW9udGgoKSwgZWRhdGUuZ2V0RGF0ZSgpXVxyXG4gICAgICAgIGxldCBlZGF0YU5vID0gK2VkYXRlXHJcbiAgICAgICAgbGV0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IGVkYXRhTm8gPj0gK3N0YXJ0ICYmIGVkYXRhTm8gPD0gK2VuZFxyXG4gICAgICAgIHZhciBkYXlpbmZvID0ge1xyXG4gICAgICAgICAgICBkYXRlOiBlZGF0ZSxcclxuICAgICAgICAgICAgbHVuYXI6IHRvTHVuYXJEYXRlKGVkYXRlKSxcclxuICAgICAgICAgICAgdGVybTogZ2V0TW9udGhTb2xhclRlcm1zKHksIG0pW2RdLFxyXG4gICAgICAgICAgICBzYWxhcmZlc3Q6IHNhbGFySG9saWRheXNbdGhpcy56ZXJvKG0rMSkrdGhpcy56ZXJvKGQpXSwgIC8v6L+Z6YeM55qE5pyI5Lu955So55qE5piv6KeG5Zu+55qEXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aDogbSA9PT0gY20sXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IHkgPT09IHN5ICYmIG0gPT09IHNtICYmIGQgPT09IHNkXHJcbiAgICAgICAgfTtcclxuXHRcdC8v6ZyA6KaB5Yy65YiGIHN0YXJ0KOS4jeiDveWkp+S6jmVuZCnkuI5lbmQo5rC06IO95bCP5LqOc3RhcnQpLCDmsqHmnInliJnnm7TmjqXnnIttaW4gbWF4IEB0b2RvXHJcblx0XHRpZihtaW4gfHwgbWF4KXtcclxuXHRcdFx0Ly/mmK/lkKblnKjpmZDliLbnmoTojIPlm7TlhoVcclxuXHRcdFx0bGV0IGlzU3RhcnQgPSBzdGF0dXM9PT0nc3RhcnQnLCBpc0VuZCA9IHN0YXR1cz09PSdlbmQnXHJcblx0XHRcdGlmKGlzU3RhcnQgfHwgaXNFbmQpe1xyXG5cdFx0XHRcdGlmKGlzU3RhcnQpe1xyXG5cdFx0XHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IGVkYXRhTm8gPiArZW5kXHJcblx0XHRcdFx0fWVsc2UgaWYoaXNFbmQpe1xyXG5cdFx0XHRcdFx0ZGF5aW5mby5kaXNhYmxlZCA9IGVkYXRhTm8gPCArc3RhcnRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGRheWluZm8uZGlzYWJsZWQgPSAhcmFuZ2UobWluLCBtYXgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcbiAgICAgICAgaWYoc3RhcnQgJiYgZW5kKSBkYXlpbmZvLmlucmFuZ2UgPSByYW5nZShzdGFydCwgZW5kKSAvL+aYr+WQpuWcqOmAieaLqee7k+aenOeahOiMg+WbtOWGhVxyXG4gICAgICAgIGlmKHNlbGVjdGluZyAmJiBzdGF0dXMpIGRheWluZm8uaW5zZWxlY3QgPSBzdGF0dXM9PT0nc3RhcnQnID8gcmFuZ2Uoc2VsZWN0aW5nLCBlbmQpIDogcmFuZ2Uoc3RhcnQsIHNlbGVjdGluZylcclxuXHJcbiAgICAgICAgaWYoZGF5QWRkb24pe1xyXG4gICAgICAgICAgICBkYXlpbmZvLmFkZG9uID0gZGF5QWRkb24oZGF5aW5mbylcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF5aW5mby5sdW5hcmZlc3QgPSBsdW5hckhvbGlkYXlzW3RoaXMuemVybyhkYXlpbmZvLmx1bmFyLm1vbnRoKSArIHRoaXMuemVybyhkYXlpbmZvLmx1bmFyLmRheSldO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRheWluZm8sIGVkYXRhTm8sIHN0YXJ0LCBlbmQsICdzdGFydGVuZCcpXHJcbiAgICAgICAgcmV0dXJuIGRheWluZm87XHJcbiAgICB9XHJcbiAgICB6ZXJvIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIG48MTAgPyAnMCcrbiA6IG5cclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRhdGVpbmZvKSB7XHJcbiAgICAgICAgaWYoZGF0ZWluZm8uZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGRhdGVpbmZvKTtcclxuICAgIH1cclxuICAgIHNldE1vdXNlRW50ZXIoZGF0ZWluZm8pe1xyXG4gICAgICAgIGlmKGRhdGVpbmZvLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzLCBkYXRlaW5mbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmdldERheUluZm8oKVxyXG4gICAgICAgIGxldCB7IGRhdGUsIHNhbGFyZmVzdCwgbHVuYXJmZXN0LCB0ZXJtLCBsdW5hciwgY3VycmVudERheSwgY3VycmVudE1vbnRoLCBkaXNhYmxlZCwgaW5yYW5nZSwgaW5zZWxlY3QsIGFkZG9ufSA9IGluZm9cclxuICAgICAgICBsZXQgZmVzdERvbSwge2Zlc3RpdmFsLCBoYXNsdW5hcn0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKGZlc3RpdmFsICYmIChzYWxhcmZlc3R8fGx1bmFyZmVzdCkpe1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1mZXN0XCI+eyhzYWxhcmZlc3Q/c2FsYXJmZXN0OicnKSArIChsdW5hcmZlc3Q/bHVuYXJmZXN0OicnKX08L3NwYW4+e2FkZG9ufTwvZGl2PlxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgZmVzdERvbSA9IDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1kXCI+e2RhdGUuZ2V0RGF0ZSgpfTwvc3Bhbj57YWRkb259PC9kaXY+XHJcblx0XHR9XHJcbiAgICAgICAgaWYoaGFzbHVuYXIpeyAgIC8vaGFzIGx1bmFyIGFuZCBtdXN0IGhhcyB0ZXJtXHJcbiAgICAgICAgICAgIGZlc3REb20gPSA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtZGF5LXNldHNcIj57ZmVzdERvbX08c3BhbiBjbGFzc05hbWU9XCJkYXRlLWx1bmFyXCI+e3Rlcm0gPyB0ZXJtIDogdG9MdW5hckRheShsdW5hci5kYXkpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtZGF5XCIgKyAoIWN1cnJlbnRNb250aCA/IFwiIGRhdGUtbm9jdXJyZW50IFwiIDogXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGN1cnJlbnREYXkgPyAnZGF0ZS1zZWxlY3RlZCcgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChkaXNhYmxlZCA/ICcgZGF0ZS1kaXNhYmxlZCcgOiBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChpbnJhbmdlID8gJyBkYXRlLXJhbmdlJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGluc2VsZWN0ID8gJyBkYXRlLWhvdmVyJyA6IFwiXCIpIH1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17IHRoaXMuc2V0RGF0ZS5iaW5kKHRoaXMsIGluZm8pIH1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuc2V0TW91c2VFbnRlci5iaW5kKHRoaXMsIGluZm8pfT5cclxuICAgICAgICAgICAge2Zlc3REb219XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlRGF5XHJcbiIsIi8qKlxyXG4gKiBkYXRlIGFwaeWwgeijhVxyXG4gKiBAYXV0aG9yIEpvZSBMaXVcclxuICogQGVtYWlsIGljYXJldS5qb2VAZ21haWwuY29tXHJcbiAqL1xyXG5mdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsIGZvcm1hdCl7XHJcbiAgaWYoIWRhdGUpIHJldHVybiAnJztcclxuICB2YXIgd2Vla3MgPSBbJ+aXpScsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrSddO1xyXG4gIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBmb3JtYXQgPSBkYXRlO1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9ICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGU9PT0nc3RyaW5nJykgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGU7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiTVwiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vVxyXG4gICAgICAgIFwiZFwiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtlxyXG4gICAgICAgIFwibVwiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIZcclxuICAgICAgICBcInNcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXHJcbiAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIC8v5q+r56eSXHJcbiAgICAgICAgXCJXXCI6IHdlZWtzW2RhdGUuZ2V0RGF5KCldIC8v5ZGoXHJcbiAgICB9O1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNXXSkrL2csIGZ1bmN0aW9uKGFsbCwgdCl7XHJcbiAgICAgICAgdmFyIHYgPSBtYXBbdF07XHJcbiAgICAgICAgaWYodiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoYWxsLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdiA9ICcwJyArIHY7XHJcbiAgICAgICAgICAgICAgICB2ID0gdi5zdWJzdHIodi5sZW5ndGgtMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodCA9PT0gJ3knKXtcclxuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxufVxyXG5cclxubGV0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsMCwwLDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcbiAgICBkYXRlRGlmZixcclxuICAgIHRvZGF5U3RhcnRcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgY2hhcnMgPSB7XHJcblx0d2Vla3NDbjpbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxyXG4gICAgd2Vla3NFbkY6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcclxuICAgIHdlZWtzRW5TOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxyXG4gICAgbW9udGhzQ246WycwMScsICcwMicsICcwMycsICcwNCcsICcwNScsICcwNicsICcwNycsICcwOCcsICcwOScsICcxMCcsICcxMScsICcxMiddLFxyXG4gICAgbW9udGhzRW46IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXHJcbn1cclxuY2xhc3MgZGF0ZUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Ly8gcHJvcFR5cGVzOiB7XHJcblx0Ly8gICAgIHVwZGF0ZU1vbnRoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xyXG5cdC8vIH0sXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblx0Z2V0RGF0ZSgpe1xyXG5cdFx0cmV0dXJuIHRoaXMucHJvcHMuZGF0ZVxyXG5cdH1cclxuXHRjaGFuZ2VNb250aChudW0pe1xyXG5cdFx0dGhpcy5wcm9wcy51cGRhdGVNb250aChudW0pXHJcblx0fVxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRjb25zdCB7bGFuZ30gPSB0aGlzLnByb3BzXHJcblx0XHRjb25zdCBjbiA9IGxhbmcgPT09ICdjbidcclxuXHRcdGxldCB5ZWFyPXRoaXMuZ2V0RGF0ZSgpLmdldEZ1bGxZZWFyKCksIG1vbnRoPXRoaXMuZ2V0RGF0ZSgpLmdldE1vbnRoKCkrMTtcclxuXHJcblx0XHRsZXQgbW9udGhzdHIgPSBjbj8oeWVhcisnICcrbW9udGgrJ+aciCcpIDogY2hhcnMubW9udGhzRW5bbW9udGgtMV0rJyAnK3llYXI7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWhlYWRlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGl0bGVcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlLXByZXZcIiBvbk1vdXNlRG93bj17IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzLCAtMSkgfT48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1tXCI+e21vbnRoc3RyfTwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXRlLW5leHRcIiBvbk1vdXNlRG93bj17IHRoaXMuY2hhbmdlTW9udGguYmluZCh0aGlzLCAxKSB9Pjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS13dGl0bGVcIj5cclxuXHRcdFx0XHR7Y2hhcnNbY24/J3dlZWtzQ24nOid3ZWVrc0VuUyddLm1hcCgod2Vlaywga2V5KSA9PiA8c3BhbiBrZXk9e2tleX0+e3dlZWt9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0ZUhlYWRlciIsInZhciBzYWxhckhvbGlkYXlzID0ge1xyXG4gICAgJzAxMDEnOiAn5YWD5pemJyxcclxuICAgICcwMjE0JzogJ+aDheS6uicsXHJcbiAgICAnMDMwOCc6ICflpoflpbMnLFxyXG4gICAgJzAzMTInOiAn5qSN5qCRJyxcclxuICAgICcwNDAxJzogJ+aEmuS6uicsXHJcbiAgICAnMDUwMSc6ICflirPliqgnLFxyXG4gICAgJzA1MDQnOiAn6Z2S5bm0JyxcclxuICAgICcwNjAxJzogJ+WEv+erpScsXHJcbiAgICAnMDcwMSc6ICflu7rlhZonLFxyXG4gICAgJzA4MDEnOiAn5bu65YabJyxcclxuICAgICcwOTEwJzogJ+aVmeW4iCcsXHJcbiAgICAnMTAwMSc6ICflm73luoYnLFxyXG4gICAgJzEyMjQnOiAn5bmz5a6J5aScJyxcclxuICAgICcxMjI1JzogJ+Wco+ivnidcclxufVxyXG5cclxudmFyIGx1bmFySG9saWRheXMgPSB7XHJcbiAgICAnMDEwMSc6ICfmmKXoioInLFxyXG4gICAgJzAxMTUnOiAn5YWD5a61JyxcclxuICAgICcwNTA1JzogJ+err+WNiCcsXHJcbiAgICAnMDcwNyc6ICfkuIPlpJUnLFxyXG4gICAgJzA3MTUnOiAn5Lit5YWDJyxcclxuICAgICcwODE1JzogJ+S4reeniycsXHJcbiAgICAnMDkwOSc6ICfph43pmLMnLFxyXG4gICAgJzEyMDgnOiAn6IWK5YWrJyxcclxuICAgICcxMjI0JzogJ+Wwj+W5tCdcclxufVxyXG5cclxuZXhwb3J0IHtzYWxhckhvbGlkYXlzLCBsdW5hckhvbGlkYXlzfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcclxuY2xhc3MgRGF0ZUluQm9keSBleHRlbmRzIENvbXBvbmVudCB7ICBcclxuICAvLyBwcm9wVHlwZXM6IHtcclxuICAvLyAgIGNsYXNzZXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vY2xhc3Mgc3BsaXQgYnkgc3BhY2luZ1xyXG4gIC8vICAgb2Zmc2V0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8vICAgdXBkYXRlU2l6ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmN0aW9uXHJcbiAgLy8gfVxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICAgIHN1cGVyKHByb3BzKTtcclxuICAvLyB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIC8vIHRoaXMucG9wdXAuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc2VzXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApXHJcbiAgICB0aGlzLnJlbmRlckxheWVyKClcclxuICAgIGlmKCF0aGlzLnByb3BzLmlubGluZSl7XHJcbiAgICAgIGxldCBhZGp1c3RTaXplID0gdGhpcy5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlLXBpY2tlcicpWzBdLmNsaWVudFdpZHRoXHJcbiAgICAgIHRoaXMucHJvcHMub25VcGRhdGUgJiYgdGhpcy5wcm9wcy5vblVwZGF0ZShhZGp1c3RTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyTGF5ZXIoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgLy8gdGhpcy5yZW1vdmVQaWNrZXIoKVxyXG4gIH1cclxuICByZW1vdmVQaWNrZXIoY3VycmVudCl7XHJcbiAgICB0aGlzLnBvcHVwID0gY3VycmVudCA/IHRoaXMucG9wdXAgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlLXBpY2tlci13cmFwcGVyJylbMF1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9wdXAsICdwb3B1cCcpXHJcbiAgICBpZih0aGlzLnBvcHVwKXtcclxuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLnBvcHVwKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucG9wdXApXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlckxheWVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgUmVhY3RET00ucmVuZGVyKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucG9wdXApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn0gY2hpbGRyZW49e251bGx9IHN0eWxlPXt0aGlzLnByb3BzLm9mZnNldH0vPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUluQm9keTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcclxuaW1wb3J0IHtkYXRlRm9ybWF0fSBmcm9tICcuL2RhdGUtZm9ybWF0J1xyXG5jbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdC8vICBwcm9wVHlwZXM6IHtcclxuXHQvLyAgICAgLy8gZWxlbWVudDogUmVhY3QuUHJvcFR5cGVzLmVsZW1lbnQsXHJcblx0Ly8gICAgIHNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYW55LFxyXG5cdC8vICAgICBkaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcblx0Ly8gICAgIG9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcblx0Ly8gICAgIG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdC8vICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuXHQvLyB9XHJcblx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cdCB9XHJcbi8qXHRnZXRJbml0aWFsU3RhdGUgKCkge1xyXG5cdCAgICByZXR1cm4ge1xyXG5cdCAgICAgIC8vIHZhbHVlOiAgdGhpcy5kYXRlU3RyaW5nKClcclxuXHQgICAgICAgIHN0eWxlczoge1xyXG5cdFx0ICAgICAgdG9wOiAwLFxyXG5cdFx0ICAgICAgbGVmdDogMFxyXG5cdFx0ICAgIH1cclxuXHQgICAgfVxyXG5cdH1cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHQgIHRoaXMuc2V0U3RhdGUoe1xyXG5cdCAgICAvLyBzdHlsZXM6XHJcblx0ICB9KVxyXG5cdH0qL1xyXG5cdGRhdGVTdHJpbmcoKXtcclxuXHRcdGNvbnN0IHtmb3JtYXQsIHNlbGVjdGVkfSA9IHRoaXMucHJvcHNcclxuXHRcdHJldHVybiBmb3JtYXQgPyBkYXRlRm9ybWF0KHNlbGVjdGVkLCBmb3JtYXQpIDogc2VsZWN0ZWRcclxuXHR9XHJcblx0aGFuZGxlQmx1cihldmVudCl7XHJcblx0XHR0aGlzLnByb3BzLm9uQmx1cihldmVudCwgdGhpcylcclxuXHR9XHJcblx0aGFuZGxlRm9jdXMoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50LCB0aGlzKVxyXG5cdH1cclxuXHRmb2N1cyAoKSB7XHJcblx0ICAgIHRoaXMucmVmcy5pbnB1dC5mb2N1cygpXHJcblx0fVxyXG5cdGhhbmRsZUNoYW5nZShldmVudCl7XHJcblx0XHQvLyB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCB0aGlzKVxyXG5cdH1cclxuXHRnZXRJbnB1dCgpe1xyXG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKVxyXG5cdH1cclxuXHRoYW5kbGVQb3NpdGlvbigpe1xyXG5cdFx0Ly8gRml4IGZvciBJRTgtJ3MgRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdCAgaWYgKCdUZXh0UmVjdGFuZ2xlJyBpbiB3aW5kb3cgJiYgISgnd2lkdGgnIGluIFRleHRSZWN0YW5nbGUucHJvdG90eXBlKSkge1xyXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhUZXh0UmVjdGFuZ2xlLnByb3RvdHlwZSwge1xyXG5cdCAgICAgICd3aWR0aCc6IHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7IH0gfSxcclxuXHQgICAgICAnaGVpZ2h0JzogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDsgfSB9XHJcblx0ICAgIH0pO1xyXG5cdCAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0fVxyXG5cclxuXHRyZWN1cnNpdmVNYXAoY2hpbGRzLCBpbnB1dEVsZW0pIHtcclxuXHRcdHZhciBjb3B5SGFzQ2hpbGRFbGVtID0gKGNoaWxkKSA9PiAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcblx0XHRcdFx0Y2hpbGRyZW46IHRoaXMucmVjdXJzaXZlTWFwKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBpbnB1dEVsZW0pXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoY2hpbGRzLnByb3BzICYmIGNoaWxkcy5wcm9wcy5jaGlsZHJlbikge1xyXG5cdFx0XHRyZXR1cm4gY29weUhhc0NoaWxkRWxlbShjaGlsZHMpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHMsIGNoaWxkID0+IHtcclxuXHRcdFx0aWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xyXG5cdFx0XHRcdHJldHVybiBjaGlsZC50eXBlICE9PSAnaW5wdXQnID8gY2hpbGQgOiBpbnB1dEVsZW07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGNoaWxkLnByb3BzLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0Y2hpbGQgPSBjb3B5SGFzQ2hpbGRFbGVtKGNoaWxkKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjaGlsZDtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRzZXRDaGlsZElucHV0KGNoaWxkcmVuLCBpbnB1dEVsZW0pe1xyXG5cdFx0aWYoY2hpbGRyZW4gJiYgY2hpbGRyZW4ucHJvcHMpe1xyXG5cdFx0XHRyZXR1cm4gPGNoaWxkcmVuPnt0aGlzLnNldENoaWxkSW5wdXQoY2hpbGRyZW4ucHJvcHMuY2hpbGRyZW4sIGlucHV0RWxlbSl9PC9jaGlsZHJlbj5cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGNoaWxkLnR5cGUgPT09ICdpbnB1dCcgPyBpbnB1dEVsZW0gOiBjaGlsZFxyXG5cdFx0XHR9KVxyXG4vKiBcdFx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0XHR7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY2hpbGQudHlwZSA9PT0gJ2lucHV0JyA/IGlucHV0RWxlbSA6IGNoaWxkXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PiAqL1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVsc2UgaWYoY2hpbGRyZW4pe1xyXG5cdFx0Ly8gXHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XHJcblx0XHQvLyBcdFx0cmV0dXJuIGNoaWxkLnR5cGUgPT09ICdpbnB1dCcgPyBpbnB1dEVsZW0gOiBjaGlsZFxyXG5cdFx0Ly8gXHR9KVxyXG5cdFx0Ly8gfVxyXG5cclxuXHR9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRjb25zdCB7IGN1c3RvbUlucHV0LCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcblx0XHRjb25zdCBpbnB1dEVsZW0gPSA8aW5wdXQgcmVmPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YWx1ZT17dGhpcy5kYXRlU3RyaW5nKCl9IG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XHJcblx0XHRyZXR1cm4gY2hpbGRyZW4gPyB0aGlzLnJlY3Vyc2l2ZU1hcChjaGlsZHJlbiwgaW5wdXRFbGVtKSA6IGlucHV0RWxlbVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVJbnB1dCIsIi8vIOWGnOWOhuaciOS7veS/oeaBr+ihqFxyXG52YXIgbHVuYXJJbmZvID0gW1xyXG4gICAgMHgwNGJkOCwweDA0YWUwLDB4MGE1NzAsMHgwNTRkNSwweDBkMjYwLDB4MGQ5NTAsMHgxNjU1NCwweDA1NmEwLDB4MDlhZDAsMHgwNTVkMixcclxuICAgIDB4MDRhZTAsMHgwYTViNiwweDBhNGQwLDB4MGQyNTAsMHgxZDI1NSwweDBiNTQwLDB4MGQ2YTAsMHgwYWRhMiwweDA5NWIwLDB4MTQ5NzcsXHJcbiAgICAweDA0OTcwLDB4MGE0YjAsMHgwYjRiNSwweDA2YTUwLDB4MDZkNDAsMHgxYWI1NCwweDAyYjYwLDB4MDk1NzAsMHgwNTJmMiwweDA0OTcwLFxyXG4gICAgMHgwNjU2NiwweDBkNGEwLDB4MGVhNTAsMHgwNmU5NSwweDA1YWQwLDB4MDJiNjAsMHgxODZlMywweDA5MmUwLDB4MWM4ZDcsMHgwYzk1MCxcclxuICAgIDB4MGQ0YTAsMHgxZDhhNiwweDBiNTUwLDB4MDU2YTAsMHgxYTViNCwweDAyNWQwLDB4MDkyZDAsMHgwZDJiMiwweDBhOTUwLDB4MGI1NTcsXHJcbiAgICAweDA2Y2EwLDB4MGI1NTAsMHgxNTM1NSwweDA0ZGEwLDB4MGE1ZDAsMHgxNDU3MywweDA1MmQwLDB4MGE5YTgsMHgwZTk1MCwweDA2YWEwLFxyXG4gICAgMHgwYWVhNiwweDBhYjUwLDB4MDRiNjAsMHgwYWFlNCwweDBhNTcwLDB4MDUyNjAsMHgwZjI2MywweDBkOTUwLDB4MDViNTcsMHgwNTZhMCxcclxuICAgIDB4MDk2ZDAsMHgwNGRkNSwweDA0YWQwLDB4MGE0ZDAsMHgwZDRkNCwweDBkMjUwLDB4MGQ1NTgsMHgwYjU0MCwweDBiNWEwLDB4MTk1YTYsXHJcbiAgICAweDA5NWIwLDB4MDQ5YjAsMHgwYTk3NCwweDBhNGIwLDB4MGIyN2EsMHgwNmE1MCwweDA2ZDQwLDB4MGFmNDYsMHgwYWI2MCwweDA5NTcwLFxyXG4gICAgMHgwNGFmNSwweDA0OTcwLDB4MDY0YjAsMHgwNzRhMywweDBlYTUwLDB4MDZiNTgsMHgwNTVjMCwweDBhYjYwLDB4MDk2ZDUsMHgwOTJlMCxcclxuICAgIDB4MGM5NjAsMHgwZDk1NCwweDBkNGEwLDB4MGRhNTAsMHgwNzU1MiwweDA1NmEwLDB4MGFiYjcsMHgwMjVkMCwweDA5MmQwLDB4MGNhYjUsXHJcbiAgICAweDBhOTUwLDB4MGI0YTAsMHgwYmFhNCwweDBhZDUwLDB4MDU1ZDksMHgwNGJhMCwweDBhNWIwLDB4MTUxNzYsMHgwNTJiMCwweDBhOTMwLFxyXG4gICAgMHgwNzk1NCwweDA2YWEwLDB4MGFkNTAsMHgwNWI1MiwweDA0YjYwLDB4MGE2ZTYsMHgwYTRlMCwweDBkMjYwLDB4MGVhNjUsMHgwZDUzMCxcclxuICAgIDB4MDVhYTAsMHgwNzZhMywweDA5NmQwLDB4MDRiZDcsMHgwNGFkMCwweDBhNGQwLDB4MWQwYjYsMHgwZDI1MCwweDBkNTIwLDB4MGRkNDUsXHJcbiAgICAweDBiNWEwLDB4MDU2ZDAsMHgwNTViMiwweDA0OWIwLDB4MGE1NzcsMHgwYTRiMCwweDBhYTUwLDB4MWIyNTUsMHgwNmQyMCwweDBhZGEwXHJcbl07XHJcbiBcclxuLy/kvKDlm57lhpzljoYgeSDlubTnmoTmgLvlpKnmlbBcclxuZnVuY3Rpb24gbHVuYXJZZWFyRGF5cyh5KSB7XHJcbiAgICB2YXIgaSwgc3VtID0gMzQ4XHJcbiAgICBmb3IgKGkgPSAweDgwMDA7IGkgPiAweDg7IGkgPj49IDEpIHN1bSArPSAobHVuYXJJbmZvW3kgLSAxOTAwXSAmIGkpID8gMSA6IDBcclxuICAgIHJldHVybiAoc3VtICsgbGVhcERheXMoeSkpXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm0beaciOeahOaAu+WkqeaVsFxyXG5mdW5jdGlvbiBsdW5hck1vbnRoRGF5cyh5LCBtKSB7XHJcbiAgICByZXR1cm4gKChsdW5hckluZm9beSAtIDE5MDBdICYgKDB4MTAwMDAgPj4gbSkpID8gMzAgOiAyOSlcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubTpl7DmnIjnmoTlpKnmlbhcclxuZnVuY3Rpb24gbGVhcERheXMoeSkge1xyXG4gICAgaWYgKGxlYXBNb250aCh5KSkgcmV0dXJuICgobHVuYXJJbmZvW3kgLSAxOTAwXSAmIDB4MTAwMDApID8gMzAgOiAyOSlcclxuICAgIGVsc2UgcmV0dXJuICgwKVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOmXsOWTquS4quaciCAxLTEyICwg5rKS6Zew5Lyg5ZueIDBcclxuZnVuY3Rpb24gbGVhcE1vbnRoKHkpIHtcclxuICAgIHJldHVybiAobHVuYXJJbmZvW3kgLSAxOTAwXSAmIDB4ZilcclxufVxyXG5cclxuXHJcbi8v5YWs5Y6G6L2s5Yac5Y6GXHJcbmZ1bmN0aW9uIHRvTHVuYXJEYXRlKG9iakRhdGUpIHtcclxuICAgIHZhciBpLCBsZWFwID0gMCxcclxuICAgICAgICB0ZW1wID0gMDtcclxuICAgIHZhciBiYXNlRGF0ZSA9IG5ldyBEYXRlKDE5MDAsIDAsIDMxKTtcclxuICAgIHZhciBvZmZzZXQgPSAob2JqRGF0ZSAtIGJhc2VEYXRlKSAvIDg2NDAwMDAwO1xyXG5cclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIHJlc3VsdC5kYXlDeWwgPSBvZmZzZXQgKyA0MDtcclxuICAgIHJlc3VsdC5tb25DeWwgPSAxNDtcclxuXHJcbiAgICBmb3IgKGkgPSAxOTAwOyBpIDwgMjA1MCAmJiBvZmZzZXQgPiAwOyBpKyspIHtcclxuICAgICAgICB0ZW1wID0gbHVuYXJZZWFyRGF5cyhpKTtcclxuICAgICAgICBvZmZzZXQgLT0gdGVtcDtcclxuICAgICAgICByZXN1bHQubW9uQ3lsICs9IDEyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ICs9IHRlbXA7XHJcbiAgICAgICAgaS0tO1xyXG4gICAgICAgIHJlc3VsdC5tb25DeWwgLT0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0LnllYXIgPSBpO1xyXG4gICAgcmVzdWx0LnllYXJDeWwgPSBpIC0gMTg2NDtcclxuXHJcbiAgICBsZWFwID0gbGVhcE1vbnRoKGkpOyAvL+mXsOWTquS4quaciFxyXG4gICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAoaSA9IDE7IGkgPCAxMyAmJiBvZmZzZXQgPiAwOyBpKyspIHtcclxuICAgICAgICAvL+mXsOaciFxyXG4gICAgICAgIGlmIChsZWFwID4gMCAmJiBpID09IChsZWFwICsgMSkgJiYgcmVzdWx0LmlzTGVhcCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAtLWk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZW1wID0gbGVhcERheXMocmVzdWx0LnllYXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRlbXAgPSBsdW5hck1vbnRoRGF5cyhyZXN1bHQueWVhciwgaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+ino+mZpOmXsOaciFxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwID09IHRydWUgJiYgaSA9PSAobGVhcCArIDEpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9mZnNldCAtPSB0ZW1wXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXAgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm1vbkN5bCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob2Zmc2V0ID09IDAgJiYgbGVhcCA+IDAgJiYgaSA9PSBsZWFwICsgMSlcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCkge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgLS1yZXN1bHQubW9uQ3lsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICAgIG9mZnNldCArPSB0ZW1wO1xyXG4gICAgICAgIC0taTtcclxuICAgICAgICAtLXJlc3VsdC5tb25DeWw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0Lm1vbnRoID0gaTtcclxuICAgIHJlc3VsdC5kYXkgPSBvZmZzZXQgKyAxO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy/lhpzljobmlbDlrZfovazlrZfnrKZcclxuZnVuY3Rpb24gdG9MdW5hckRheSAoZCl7XHJcbiAgICB2YXIgbHVuYXJEYXkgPSBbJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+S4gycsICflhasnLCAn5LmdJywgJ+WNgScsICfljYHkuIAnLCAn5Y2B5LqMJ107XHJcbiAgICB2YXIgbHVuYXJUZWVuID0gWyfliJ0nLCAn5Y2BJywgJ+W7vycsICfkuIknXTtcclxuICAgIHZhciBkc3RyID0gZCsnJyxcclxuICAgICAgICB0ZWVuID0gbHVuYXJUZWVuWzBdLCBcclxuICAgICAgICByaWdodE51bSA9IGRzdHIubGVuZ3RoIDwgMiA/ICcnIDogZHN0ci5zdWJzdHJpbmcoMSksXHJcbiAgICAgICAgcmlnaHREZWNvID0gcmlnaHROdW09PT0nMCcgPyAn5Y2BJyA6IGx1bmFyRGF5W051bWJlcihyaWdodE51bSktMV07XHJcbiAgICBpZihkID4gMTApe1xyXG4gICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMV07XHJcbiAgICAgICAgaWYoZD49MjApe1xyXG4gICAgICAgICAgICB0ZWVuID0gbHVuYXJUZWVuWzJdO1xyXG4gICAgICAgICAgICBpZihkPj0zMCl7XHJcbiAgICAgICAgICAgICAgICB0ZWVuID0gbHVuYXJUZWVuWzNdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICB0ZWVuICsgKGRzdHIubGVuZ3RoIDwgMiA/IGx1bmFyRGF5W2QtMV0gOiByaWdodERlY28pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7bHVuYXJZZWFyRGF5cywgbHVuYXJNb250aERheXMsIGxlYXBEYXlzLCBsZWFwTW9udGgsIHRvTHVuYXJEYXRlLCB0b0x1bmFyRGF5fTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGF0ZURheSBmcm9tICcuL2RhdGUtZGF5LmpzJ1xyXG5jbGFzcyBEYXRlTW9udGggZXh0ZW5kcyBDb21wb25lbnQgeyBcclxuXHQvKnByb3BUeXBlczoge1xyXG5cdFx0ZGF0ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG5cdFx0Zm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXHJcblx0fSovXHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge3NlbGVjdGluZzogcHJvcHMuc2VsZWN0aW5nfTtcclxuXHQgfVxyXG5cdGdldE1vbnRoSW5mbyAoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGUsICdkYXRlbW9udGgnKVxyXG5cdFx0bGV0IHkgPSB0aGlzLnByb3BzLmRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHQgICAgbGV0IG0gPSB0aGlzLnByb3BzLmRhdGUuZ2V0TW9udGgoKTtcclxuXHRcdHZhciBkYXRlZGF5LCBsaW5lPTAsIHRlbXA9W10sIGlzZmlsbCA9IHRoaXMucHJvcHMuaXNmaWxsO1xyXG5cdFx0Ly8gY29uc29sZS50aW1lKCforqHnrpfkuIDmnIjmiYDnlKjml7bpl7QnKVxyXG4gICAgICAgIHZhciBwcmV2TURheSA9IG5ldyBEYXRlKHksIG0sIDApLCBwcmV2TURheUxhc3QgPSBwcmV2TURheS5nZXREYXRlKCk7ICAgIC8vcHJldiBNb250aCBMYXN0IERheVxyXG4gICAgICAgIHZhciBuZXh0TURheSA9IG5ldyBEYXRlKHksIG0rMSwgMCksIGN1cnJNRGF5TGFzdCA9IG5leHRNRGF5LmdldERhdGUoKTsgIC8vY3VycmVudCBNb250aCBMYXN0IERheVxyXG4gICAgICAgIHZhciBjdXJyTURheSA9IG5ldyBEYXRlKHksIG0rMCwgMSksIGN1cnJNRGF5Rmlyc3Q9IGN1cnJNRGF5LmdldERheSgpOyAgIC8vY3VycmVudCBNb250aCBGaXJzdCBEYXkgV2Vla1xyXG5cclxuICAgICAgIHRlbXBbbGluZV09W107XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNMaW5lKGRhdGUpe1xyXG5cdCAgICBcdHZhciB3ZWVrbm8gPSBkYXRlLmdldERheSgpOyAgIC8vd2Vla1xyXG5cdCAgICAgICAgaWYod2Vla25vID09IDApIHRlbXBbbGluZV09W11cclxuXHQgICAgICAgIHRlbXBbbGluZV0ucHVzaChkYXRlKTtcclxuXHQgICAgICAgIHdlZWtubyA9PSA2ICYmIGxpbmUrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2cocHJldk1EYXksIGN1cnJNRGF5LCBwcmV2TURheUxhc3QsIGN1cnJNRGF5TGFzdCwgY3Vyck1EYXlGaXJzdClcclxuICAgICAgIGlmKGN1cnJNRGF5Rmlyc3QgJiYgaXNmaWxsKXsgLy9wcmV2IE1vbnRoIGNhbGVuZGFyIHJvdyBmaXJzdFxyXG4gICAgICAgICAgICB2YXIgayA9IHByZXZNRGF5TGFzdCAtIGN1cnJNRGF5Rmlyc3QgKyAxO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGN1cnJNRGF5Rmlyc3Q7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZGF0ZWRheSA9IG5ldyBEYXRlKHksIG0tMSwgaylcclxuICAgICAgICAgICAgICAgIFx0dGVtcFtsaW5lXS5wdXNoKGRhdGVkYXkpXHJcbiAgICAgICAgICAgICAgICBrKytcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciBpPTE7IGkgPD0gY3Vyck1EYXlMYXN0OyBpKyspIHsgLy9jdXJyZW50IG1vbnRoXHJcbiAgICAgICAgXHRkYXRlZGF5ID0gbmV3IERhdGUoeSwgbSwgaSlcclxuICAgICAgICBcdGNhbGNMaW5lKGRhdGVkYXkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGlzZmlsbCl7XHJcblx0ICAgICAgICBmb3IgKGo9MTsgaiA8IDEyOyBqKyspIHtcclxuXHQgICAgICAgIFx0aWYobGluZTw2KXtcclxuXHQgICAgICAgIFx0XHQvLyBjb25zb2xlLmxvZyhsaW5lLCAnbGluZScpXHJcblx0XHQgICAgICAgICAgICBkYXRlZGF5ID0gIG5ldyBEYXRlKHksIG0rMSwgaik7XHJcblx0XHQgICAgICAgICAgICBjYWxjTGluZShkYXRlZGF5KVxyXG5cdCAgICAgICBcdFx0fVxyXG5cdCAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUudGltZUVuZCgn6K6h566X5LiA5pyI5omA55So5pe26Ze0JylcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuXHR9XHJcblxyXG5cdHdlZWtzKG1vbnRocyl7XHJcblx0XHR2YXIgd2Vla3MgPSBbXSwgdGhhdCA9IHRoaXM7XHJcblx0XHRtb250aHMubWFwKGZ1bmN0aW9uKHdlZWssIHdrZXkpIHtcclxuXHRcdFx0d2Vla3MucHVzaCg8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLXdlZWsgZGF0ZS13ZWVrLVwiK3drZXl9IGtleT17d2tleX0+XHJcblx0XHRcdFx0e3RoYXQuZGF5cyh3ZWVrKX1cclxuXHRcdFx0PC9kaXY+KVxyXG5cdFx0fSlcclxuXHRcdHJldHVybiB3ZWVrc1xyXG5cdH1cclxuXHRkYXlzKHdlZWspe1xyXG5cdFx0dmFyIGRheXMgPSBbXSwgdGhhdCA9IHRoaXM7XHJcblx0XHR3ZWVrLm1hcChmdW5jdGlvbihkYXksIGRrZXkpe1xyXG5cdFx0XHRkYXlzLnB1c2goIDxEYXRlRGF5IHsuLi50aGF0LnByb3BzfSBvbk1vdXNlRW50ZXI9e3RoYXQub25Nb3VzZUVudGVyLmJpbmQodGhpcyl9IHNlbGVjdGluZz17dGhhdC5zdGF0ZS5zZWxlY3Rpbmd9IGVkYXRlPXtkYXl9IGtleT17ZGtleX0vPiApXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIGRheXNcclxuXHR9XHJcblx0b25Nb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuXHRcdGxldCB7c3RhcnQsIGVuZH0gPSB0aGlzLnByb3BzXHJcblx0XHRpZihzdGFydCAmJiBlbmQpIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGluZzogZGF0ZWluZm8uZGF0ZX0pXHJcblx0fVxyXG5cdG9uTW91c2VMZWF2ZSgpe1xyXG5cdFx0bGV0IHtzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmKHN0YXJ0ICYmIGVuZCkgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW5nOiBudWxsfSlcclxuXHR9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZW5kZXIgdGltZXMnKVxyXG5cdFx0Y29uc3QgbW9udGhzID0gdGhpcy5nZXRNb250aEluZm8oKSwgdGhhdD10aGlzO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtbW9udGhcIiArICh0aGF0LnN0YXRlLnNlbGVjdGluZyA/IFwiIGRhdGUtc2VsZWN0aW5nIFwiIDogXCIgXCIpfSBvbk1vdXNlTGVhdmU9e3RoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyl9PlxyXG5cdFx0XHRcdHt0aGlzLndlZWtzKG1vbnRocyl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdH1cclxufVxyXG5cclxuRGF0ZU1vbnRoLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRzZWxlY3Rpbmc6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZU1vbnRoXHJcbiIsIi8vIOWGnOWOhuS6jOWNgeWbm+iKguawlFxyXG52YXIgY2FjaGUgPSB7fTtcclxudmFyIGNhY2hla2V5cyA9IFtdO1xyXG52YXIgc29sYXJUZXJtID0gWyflsI/lr5InLCAn5aSn5a+SJywgJ+eri+aYpScsICfpm6jmsLQnLCAn5oOK6JuwJywgJ+aYpeWIhicsICfmuIXmmI4nLCAn6LC36ZuoJywgJ+eri+WkjycsICflsI/mu6EnLCAn6IqS56eNJywgJ+Wkj+iHsycsICflsI/mmpEnLCAn5aSn5pqRJywgJ+eri+eniycsICflpITmmpEnLCAn55m96ZyyJywgJ+eni+WIhicsICflr5LpnLInLCAn6Zyc6ZmNJywgJ+eri+WGrCcsICflsI/pm6onLCAn5aSn6ZuqJywgJ+WGrOiHsyddO1xyXG52YXIgc1Rlcm1JbmZvID0gWzAsIDIxMjA4LCA0MjQ2NywgNjM4MzYsIDg1MzM3LCAxMDcwMTQsIDEyODg2NywgMTUwOTIxLCAxNzMxNDksIDE5NTU1MSwgMjE4MDcyLCAyNDA2OTMsIDI2MzM0MywgMjg1OTg5LCAzMDg1NjMsIDMzMTAzMywgMzUzMzUwLCAzNzU0OTQsIDM5NzQ0NywgNDE5MjEwLCA0NDA3OTUsIDQ2MjIyNCwgNDgzNTMyLCA1MDQ3NThdO1xyXG4vLyDov5Tlm57mn5DlubTnmoTnrKxu5Liq6IqC5rCU5Li65Yeg5pelKOS7jjDlsI/lr5LotbfnrpcpXHJcbnZhciBnZXRTb2xhclRlcm1JbmRleCA9IGZ1bmN0aW9uKHllYXIsIGluZGV4KSB7XHJcbiAgICB2YXIgb2ZmRGF0ZSA9IG5ldyBEYXRlKCgzMTU1NjkyNTk3NC43ICogKHllYXIgLSAxOTAwKSArIHNUZXJtSW5mb1tpbmRleF0gKiA2MDAwMCkgKyBEYXRlLlVUQygxOTAwLCAwLCA2LCAyLCA1KSk7XHJcbiAgICByZXR1cm4gb2ZmRGF0ZS5nZXRVVENEYXRlKCk7XHJcbn07XHJcblxyXG4vLyDov5Tlm57or6XmnIjnmoToioLmsJTkv6Hmga9cclxudmFyIGdldE1vbnRoU29sYXJUZXJtcyA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoKSB7XHJcbiAgICBpZiAoeWVhciBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBtb250aCA9IHllYXIuZ2V0TW9udGgoKTtcclxuICAgICAgICB5ZWFyID0geWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG4gICAgdmFyIGtleSA9ICcnICsgeWVhciArIG1vbnRoO1xyXG4gICAgaWYgKGtleSBpbiBjYWNoZSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZVtrZXldO1xyXG4gICAgfVxyXG4gICAgdmFyIHJldCA9IGNhY2hlW2tleV0gPSB7fTtcclxuICAgIHZhciBpbmRleDtcclxuICAgIGluZGV4ID0gZ2V0U29sYXJUZXJtSW5kZXgoeWVhciAtIDE5MDAsIG1vbnRoICogMik7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDJdO1xyXG4gICAgaW5kZXggPSBnZXRTb2xhclRlcm1JbmRleCh5ZWFyIC0gMTkwMCwgbW9udGggKiAyICsgMSk7XHJcbiAgICByZXRbaW5kZXggLSAxXSA9IHNvbGFyVGVybVttb250aCAqIDIgKyAxXTtcclxuICAgIGNhY2hla2V5cy5wdXNoKGtleSk7XHJcbiAgICBpZiAoY2FjaGVrZXlzLmxlbmd0aCA+IDEyKSB7XHJcbiAgICAgICAgZGVsZXRlIGNhY2hlW2NhY2hla2V5cy5zaGlmdCgpXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0U29sYXJUZXJtSW5kZXgsIGdldE1vbnRoU29sYXJUZXJtc30iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlRGF5IGZyb20gJy4vZGF0ZS1kYXkuanMnXHJcbmNsYXNzIERhdGVUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHsgXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtdGltZVwiPlxyXG5cdFx0XHR7bmV3IERhdGUoKS5nZXRIb3VycygpKyAnOicgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKX1cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWUiLCIvL0B0b2RvIOino+WGs+WIh+aNouaciOS7veaXtu+8jCDpgInmi6nnmoTlgLzmnInlj5jvvJsyLuWklumDqOWAvOWPmOWMluWQju+8jGlucHV05YC85LiOdWnmsqHmnInlj5jljJYgMyBrZXkgaW5wdXRcbi8vIGltcG9ydCAnLi9kYXRlcGlja2VyLmxlc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgRGF0ZUhlYWRlciBmcm9tICcuL2RhdGUtaGVhZGVyLmpzJ1xuaW1wb3J0IERhdGVDYWxlbmRhciBmcm9tICcuL2RhdGUtY2FsZW5kYXIuanMnXG5pbXBvcnQgRGF0ZUlucHV0IGZyb20gJy4vZGF0ZS1pbnB1dC5qcydcbmltcG9ydCBEYXRlSW5Cb2R5IGZyb20gJy4vZGF0ZS1pbi1ib2R5LmpzJ1xuXG52YXIgbm93ID0gbmV3IERhdGUoKVxuXG5jbGFzcyBSZWFjdERhdGVwaWNrZXJQbHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Ly8gcHJvcFR5cGVzOiB7XG5cdC8vIFx0c2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQvL2RlZmF1bHQgZGF0ZVxuXHQvLyBcdGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgICAgIC8vZm9ybWF0IGRhdGVcblx0Ly8gXHRpc2ZpbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFx0ICAgIC8vc2hvdyBwcmVmaXgtcHJldiBwcmVmaXgtbmV4dCBtb250aFxuXHQvLyBcdG1vbnRoczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcdFx0Ly9zaG93IG11bHRpLXBhbmVzIGJ5IG1vbnRoc1xuXG5cdC8vIFx0dGltZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgICAgLy9zaG93IHRpbWUgc2VsZWN0IEB0b2RvXG5cblx0Ly8gXHRtaW46IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1pblxuXHQvLyBcdG1heDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWF4XG5cblx0Ly8gXHRzdGFydDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdCAgICAvL3NlbGVjdGVkIHRpbWUgaXMgYSByYW5nZSwgc3RhcnQgZGF0ZVxuXHQvLyBcdGVuZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdCAgICAvL3NlbGVjdGVkIHRpbWUgaXMgYSByYW5nZSwgc3RhcnQgZGF0ZVxuXG5cdC8vIFx0Y2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgLy8gY3VzdG9tIGNsYXNzXG5cdC8vIFx0ZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9pbnB1dCBjYW4ndCBjaGFuZ2Vcblx0Ly8gXHRhdXRvSGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL3NlbGVjdGVkIGF1dG8gaGlkZVxuXHQvLyBcdGlubGluZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgIC8vaW5saW5lXG5cdC8vIFx0bGFuZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnY24nLCAnZW4nXSksXG5cblx0Ly8gXHRmZXN0aXZhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGZlc3RpdmFsXG5cdC8vIFx0aGFzbHVuYXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBsdW5hclxuXG5cdC8vIFx0b25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcblx0Ly8gXHRvbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5cdC8vIFx0b25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGRheWluZm8sIHBpY2tlcilcblx0Ly8gXHRkYXlBZGRvbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMgXHRcdC8vYXJncyAoZGF5aW5mbylcblx0Ly8gXHQvL2RheUFkZG9uLCBhZGQgZGF0YSBmb3IgZGF5LCBhbmQgbmVlZCB0byByZXR1cm4gZG9tLFxuXHQvLyBcdC8vdGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIGluc2VydCB0byBkYXkgZWFjaCBlbGVtZW50LiBwbHMgc2VlIGxhc3QgZGVtb1xuXHQvLyAgcGxhY2Vob2xkZXJcblx0Ly8gIHBsYWNlaG9sZGVyRW5kXG5cdC8vICBzdXBwb3J0IGNoaWxkcmVuIHRvIGRlZmluZWQgeW91ciBpbnB1dCBkb20gc3RydWN0LCBwbHMgc2VhcmNoIGBkZWZpbmVkIHlvdXIgaW5wdXQgZG9tYCBhdCB0aGlzIHBhZ2Vcblx0Ly8gfVxuXHQgY29uc3RydWN0b3IocHJvcHMpIHtcblx0XHQgc3VwZXIocHJvcHMpO1xuXHRcdHZhciBzZWxlY3RlZCA9ICBwcm9wcy5zZWxlY3RlZFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXHRcdFx0XHRkYXRlOiBzZWxlY3RlZCxcdFx0Ly9yZW5kZXIgbW9udGggYnkgZGF0ZVxuXHRcdFx0XHRzaG93OiBwcm9wcy5pbmxpbmUgPyB0cnVlIDogZmFsc2UsXG5cdFx0XHRcdGZvY3VzOiBmYWxzZSxcdC8vZm9jdXMgc3RhdGVcblx0XHRcdFx0b2Zmc2V0OiB7fSxcdFx0Ly9kYXRlcGlja2VyIHBvc2l0aW9uXG5cdFx0XHRcdHNlbGVjdGVkOiBzZWxlY3RlZCxcblx0XHRcdFx0c3RhcnQ6IHByb3BzLnN0YXJ0LFxuXHRcdFx0XHRlbmQ6IHByb3BzLmVuZCxcblx0XHRcdFx0bWluOiBwcm9wcy5taW4gfHwgcHJvcHMuc3RhcnQsXG5cdFx0XHRcdG1heDogcHJvcHMubWF4IHx8IHByb3BzLmVuZCxcblx0XHRcdFx0Ly8gc3RhdHVzOiAnJyAgIFx0Ly9SZWFjdC5Qcm9wVHlwZXMub25lT2YoWydzdGFydCcsICdlbmQnXSlcblx0XHRcdFx0Ly8nc3RhcnQnIGFuZCAnZW5kJyB1c2UgYnkgYmktZGF0ZXBpY2tlciByYW5nZSB2YWx1ZSwgYW5kIHVuZGVmaW5lZCB1c2UgYnkgc2luZ2xlIGRhdGVwaWNrZXIgc2luZ2xlIGRhdGVcblx0XHR9XG4gICAgfVxuXG5cdG9uRm9jdXMoZXZlbnQsIGlucHV0KXtcblx0XHRsZXQge3Nob3csIGZvY3VzLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0aWYoc2hvdyAmJiAhZm9jdXMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9IHRydWUvL2p1c3QgY2hhbmdlIHN0YXRlIG5vdCB0cmlnZ2VyIHJlbmRlclxuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGxldCBzdGF0dXMgPSBpbnB1dC5wcm9wcy5zdGF0dXM7IHNlbGVjdGVkID0gc3RhdHVzP3RoaXMuc3RhdGVbc3RhdHVzXTpzZWxlY3RlZDtcblx0XHRsZXQge2xlZnQsIHRvcCwgaGVpZ2h0fSA9IGlucHV0LmhhbmRsZVBvc2l0aW9uKCk7XG5cdFx0XHR0b3AgKz0gKGhlaWdodCsgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKVxuXHRcdGxldCB7b25Gb2N1c30gPSB0aGlzLnByb3BzXG5cblx0XHR0aGlzLnNob3codHJ1ZSwge2xlZnQsIHRvcH0sIHRydWUsIHN0YXR1cylcblx0XHRvbkZvY3VzICYmIG9uRm9jdXMoZXZlbnQsIHRoaXMpXG5cdFx0aWYoc3RhdHVzKSB0aGlzLnNldFN0YXRlKHtkYXRlOiBzZWxlY3RlZH0pXG5cdH1cblxuXHRvbkJsdXIoZXZlbnQsIGlucHV0KXtcblx0XHRjb25zdCB7c2hvdywgZm9jdXN9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IHtpbmxpbmUsIG9uQmx1cn0gPSB0aGlzLnByb3BzXG5cdFx0aWYoIXNob3cpIHJldHVybjtcblx0XHRpZiAoIWZvY3VzKSB7XG5cdCAgICAgIFx0aW5wdXQuZm9jdXMoKVx0Ly93aGVuIHNob3cgJiYgIWZvY3VzLCB0cmlnZ2VyIGZvY3VzXG5cdCAgICB9IGVsc2UgaWYoIWlubGluZSkge1xuXHQgICAgICBvbkJsdXIgJiYgb25CbHVyKGV2ZW50LCB0aGlzKVxuXHQgICAgICBmb2N1cyAmJiB0aGlzLnJlbW92ZVBpY2tlcigpXG5cdCAgICB9XG5cdH1cblxuXHRzaG93IChzaG93LCBvZmZzZXQsIGZvY3VzLCBzdGF0dXMpIHtcblx0ICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93LCBvZmZzZXQsIGZvY3VzLCBzdGF0dXN9KVxuXHR9XG5cblx0dXBkYXRlTW9udGgobnVtKXtcblx0XHRjb25zdCB7ZGF0ZX0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgY2RhdGUgPSB0aGlzLm51bU1vbnRoKGRhdGUsIG51bSlcblx0XHR0aGlzLnVwZGF0ZURhdGUoe2RhdGU6IGNkYXRlfSwgdHJ1ZSlcblx0fVxuXG5cdG51bU1vbnRoKGRhdGUsIG51bSl7XG5cdFx0ZGF0ZSA9IGRhdGUgfHwgbm93O1xuXHRcdGRhdGUgPSBkYXRlIGluc3RhbmNlb2YgRGF0ZSA/IGRhdGUgOiBuZXcgRGF0ZShkYXRlKVxuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIG51bSwgZGF0ZS5nZXREYXRlKCkpXG5cdH1cblxuXHR1cGRhdGVEYXkoZGF0ZWluZm8pe1xuXHRcdHRoaXMudXBkYXRlRGF0ZShkYXRlaW5mbylcblx0fVxuXG5cdHVwZGF0ZURhdGUoZGF0ZWluZm8sIGlzTW9udGgpe1xuXHRcdGxldCB7b25DaGFuZ2UsIGF1dG9IaWRlLCBzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcblx0XHRsZXQge3N0YXR1cz0nc2VsZWN0ZWQnLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IGdldFNlbGVjdGVkID0gIWlzTW9udGggPyBkYXRlaW5mby5kYXRlIDogdGhpcy5zdGF0ZVtzdGF0dXNdXG5cdFx0Ly8gbGV0IHRlbXAgPSB7fTsgdGVtcFtzdGF0dXNdID0gZ2V0U2VsZWN0ZWRcblx0XHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlLCBkYXRlOiBkYXRlaW5mby5kYXRlLCBzZWxlY3RlZDogZ2V0U2VsZWN0ZWQsIGZvY3VzOiBmYWxzZSwgW3N0YXR1c106IGdldFNlbGVjdGVkfSlcblx0XHRpZighaXNNb250aCl7XG5cdFx0XHRpZihzdGFydCl7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe21pbjogc3RhcnR9KVxuXHRcdFx0fVxuXHRcdFx0aWYoZW5kKXtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWF4OiBlbmR9KVxuXHRcdFx0fVxuXG5cdFx0XHRvbkNoYW5nZSAmJiBvbkNoYW5nZShkYXRlaW5mbywgdGhpcylcblx0XHRcdGF1dG9IaWRlICYmIHRoaXMucmVtb3ZlUGlja2VyKClcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVQaWNrZXIoKXtcblx0XHR0aGlzLnNob3coZmFsc2UpXG5cdFx0dGhpcy5yZWZzLmluc0RhdGVJbkJvZHkgJiYgdGhpcy5yZWZzLmluc0RhdGVJbkJvZHkucmVtb3ZlUGlja2VyKHRydWUpXG5cdH1cblxuICAgIHBpY2tlcnMoc3RhdHVzKSB7XG5cdFx0bGV0ICRwaWNrZXJzID0gW10sIG9mZnNldHMgPSBbXSwgZGgsIGRjLCBpZGF0ZVxuXHRcdGxldCB7ZGF0ZSwgIHN0YXJ0LCBlbmQsIG1pbiwgbWF4LCBvZmZzZXR9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCB7aW5saW5lLCBtb250aHMsIGxhbmcsIGhhc2x1bmFyLCBjbGFzc05hbWV9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCBzZWxlY3RlZCA9IHRoaXMuc3RhdGVbc3RhdHVzP3N0YXR1czonc2VsZWN0ZWQnXVxuXHRcdGxldCBjbGFzc2VzID0gYGRhdGUtcGlja2VyIGRhdGUtcGlja2VyLSR7aW5saW5lPydpbmxpbmUnOidibG9jayd9ICR7Y2xhc3NOYW1lP2NsYXNzTmFtZTonJ30gJHtoYXNsdW5hcj8nZGF0ZS1waWNrZXItbHVuYXInOicnfWBcblx0XHRsZXQgcGlja2VyV2lkdGggPSB0aGlzLnN0YXRlLndpZHRoIHx8IDIxNTtcblx0XHRmb3IodmFyIGk9MDsgaTxtb250aHM7IGkrKyl7XG5cdFx0XHRvZmZzZXRzLnB1c2goe2xlZnQ6IGkqcGlja2VyV2lkdGggKyBvZmZzZXQubGVmdCwgdG9wOiBvZmZzZXQudG9wfSlcblx0XHRcdGlkYXRlID0gdGhpcy5udW1Nb250aChkYXRlLCBpKVxuXHRcdFx0ZGggPSA8RGF0ZUhlYWRlciBkYXRlPXtpZGF0ZX0gbGFuZz17aGFzbHVuYXI/J2NuJzpsYW5nfSB1cGRhdGVNb250aD17dGhpcy51cGRhdGVNb250aC5iaW5kKHRoaXMpfS8+XG5cdFx0XHRkYyA9IDxEYXRlQ2FsZW5kYXIgey4uLnRoaXMucHJvcHN9IG1pbj17bWlufSBtYXg9e21heH0gZGF0ZT17aWRhdGV9IHN0YXR1cz17c3RhdHVzfSBzdGFydD17c3RhcnR9IGVuZD17ZW5kfSBzZWxlY3RlZD17c2VsZWN0ZWR9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZURheS5iaW5kKHRoaXMpfS8+XG5cblx0XHRcdCRwaWNrZXJzLnB1c2goaW5saW5lID9cblx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IGtleT17aX0+e2RofXtkY308L2Rpdj4gOlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e29mZnNldHNbaV19IGtleT17aX0+e2RofXtkY308L2Rpdj4pXG5cdFx0fVxuXHRcdHJldHVybiAkcGlja2Vyc1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUgKHcpIHtcblx0XHQhdGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5zZXRTdGF0ZSh7d2lkdGg6IHd9KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcywgb2xkcHJvcHMpIHtcblx0XHRpZihwcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCl7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0bGV0IHtzaG93LCBzZWxlY3RlZCwgc3RhcnQsIGVuZCwgc3RhdHVzfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2Zvcm1hdCwgaW5saW5lLCBtb250aHMsIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgcGxhY2Vob2xkZXJFbmQsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblx0XHRsZXQgcGlja2VyLCBwaWNrZXJzLCBwaWNrZXJJbkJvZHlcblx0XHRsZXQgY2xzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnLCBjbHNXcmFwcGVyTmFtZSA9IGNsc05hbWU/JyAnK2Nsc05hbWUrJy1wYW5lcyc6ICcnXG5cdFx0bGV0IGRpID0gKHZhbCwgc3RhdCkgPT4gPERhdGVJbnB1dCBzZWxlY3RlZD17dmFsPT09dm9pZCAwID8gc2VsZWN0ZWQgOiB2YWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvcm1hdD17Zm9ybWF0fSBkaXNhYmxlZD17ZGlzYWJsZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBsYWNlaG9sZGVyPXtzdGF0PT0nZW5kJz9wbGFjZWhvbGRlckVuZDpwbGFjZWhvbGRlcn0gIGNoaWxkcmVuPXtjaGlsZHJlbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gc3RhdHVzPXtzdGF0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICByZWY9e3N0YXR9Lz5cblx0XHRpZihzaG93KXtcblx0XHRcdHBpY2tlcnMgPSB0aGlzLnBpY2tlcnMoc3RhdHVzKVxuXHRcdFx0cGlja2VyID0gPGRpdiBjbGFzc05hbWU9eyhtb250aHM+MT8nZGF0ZS1tdWx0aSBjbGVhcmZpeCc6JycpICsgY2xzV3JhcHBlck5hbWV9PntwaWNrZXJzfTwvZGl2PlxuXHRcdFx0cGlja2VySW5Cb2R5ID0gPERhdGVJbkJvZHkgIG9uVXBkYXRlPXt0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPSdkYXRlLXBpY2tlci13cmFwcGVyJyByZWY9XCJpbnNEYXRlSW5Cb2R5XCI+e3BpY2tlcn08L0RhdGVJbkJvZHk+XG5cdFx0fVxuXHRcdGxldCBkaWRvbSA9IHN0YXJ0IHx8IGVuZCA/IDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1pbnB1dHNcIj57c3RhcnQhPT12b2lkIDAgJiYgZGkoc3RhcnQsICdzdGFydCcpfXtlbmQhPT12b2lkIDAgJiYgZGkoZW5kLCAnZW5kJyl9PC9kaXY+IDogZGkoKVxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17XCJkYXRlLWNvbXBvbmVudHMgXCIrIGNsc05hbWV9PlxuXHRcdFx0XHRcdHtkaWRvbX1cblx0XHRcdFx0XHR7aW5saW5lID8gcGlja2VyIDogcGlja2VySW5Cb2R5fVxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufTtcblxuUmVhY3REYXRlcGlja2VyUGx1cy5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzZmlsbDogZmFsc2UsXG5cdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRzZWxlY3RlZDogbm93LFxuXHRtb250aHM6IDEsXG5cdGxhbmc6ICdlbidcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3REYXRlcGlja2VyUGx1cztcbiJdfQ==
