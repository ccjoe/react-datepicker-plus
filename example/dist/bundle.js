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
	weeksEnS: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
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
			this.props.onChange(event);
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
		key: 'render',
		value: function render() {
			var _props2 = this.props;
			var customInput = _props2.customInput;
			var disabled = _props2.disabled;

			return _react2['default'].createElement('input', { ref: 'input', type: 'text', disabled: disabled, value: this.dateString(), onFocus: this.handleFocus.bind(this), onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this) });
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
	// }

	function ReactDatepickerPlus(props) {
		_classCallCheck(this, ReactDatepickerPlus);

		_get(Object.getPrototypeOf(ReactDatepickerPlus.prototype), 'constructor', this).call(this, props);
		this.state = {
			date: props.selected, //render month by date
			show: props.inline ? true : false,
			focus: false, //focus state
			offset: {}, //datepicker position
			selected: props.selected,
			start: props.start,
			end: props.end
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
			var _state3 = this.state;
			var _state3$status = _state3.status;
			var status = _state3$status === undefined ? 'selected' : _state3$status;
			var selected = _state3.selected;

			var getSelected = !isMonth ? dateinfo.date : this.state[status];
			// let temp = {}; temp[status] = getSelected
			this.setState(_defineProperty({ show: true, date: dateinfo.date, selected: getSelected, focus: false }, status, getSelected));
			onChange && onChange(dateinfo, this);
			!isMonth && autoHide && this.removePicker();
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
				dc = _react2['default'].createElement(_dateCalendarJs2['default'], _extends({}, this.props, { date: idate, status: status, start: start, end: end, selected: selected, onChange: this.updateDay.bind(this) }));

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

			var picker = undefined,
			    pickers = undefined,
			    pickerInBody = undefined;
			var di = function di(val, stat) {
				return _react2['default'].createElement(_dateInputJs2['default'], { selected: !val ? selected : val, format: format, disabled: disabled,
					onFocus: _this.onFocus.bind(_this), onBlur: _this.onBlur.bind(_this), status: stat });
			};
			if (show) {
				pickers = this.pickers(status);
				picker = _react2['default'].createElement(
					'div',
					{ className: months > 1 ? 'date-multi clearfix' : '' },
					pickers
				);
				pickerInBody = _react2['default'].createElement(
					_dateInBodyJs2['default'],
					{ onUpdate: this.updateSize.bind(this), className: 'date-picker-wrapper', ref: 'insDateInBody' },
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1jYWxlbmRhci5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWRheS5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWZvcm1hdC5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWhlYWRlci5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWhvbGlkYXlzLmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtaW4tYm9keS5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLWlucHV0LmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtbHVuYXIuanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1tb250aC5qcyIsIkU6L2dpdC9yZWFjdC1kYXRlcGlja2VyL3NyYy9kYXRlLXRlcm0uanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS10aW1lLmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL1JlYWN0RGF0ZXBpY2tlclBsdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FpQyxPQUFPOzs7OzJCQUVsQixpQkFBaUI7Ozs7MEJBQ2xCLGdCQUFnQjs7OztJQUMvQixZQUFZO1dBQVosWUFBWTs7QUFDTixVQUROLFlBQVksQ0FDTCxLQUFLLEVBQUU7d0JBRGQsWUFBWTs7QUFFViw2QkFGRixZQUFZLDZDQUVKLEtBQUssRUFBRTtFQUNoQjs7Y0FIQyxZQUFZOztTQUlWLGtCQUFHO0FBQ1QsT0FBTSxPQUFPLEdBQUksMkRBQWUsSUFBSSxDQUFDLEtBQUssQ0FBSSxDQUFBO0FBQzlDLE9BQU0sUUFBUSxHQUFHLDBE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LE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUMvRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQy9FLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFDL0UsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUNsRixDQUFDOzs7QUFHRixTQUFTLGFBQWEsQ0FBQyxDQUFDLEVBQUU7QUFDdEIsUUFBSSxDQUFDO1FBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQTtBQUNoQixTQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxBQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDM0UsV0FBUSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzdCOzs7QUFHRCxTQUFTLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzFCLFdBQVEsQUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFJLE9BQU8sSUFBSSxDQUFDLEFBQUMsR0FBSSxFQUFFLEdBQUcsRUFBRSxD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eEIsQ0FBQzs7QUFFRixtQkFBbUIsQ0FBQyxZQUFZLEdBQUc7QUFDbEMsT0FBTSxFQUFFLEtBQUs7QUFDYixPQUFNLEVBQUUsWUFBWTtBQUNwQixTQUFRLEVBQUUsR0FBRztBQUNiLE9BQU0sRUFBRSxDQUFDO0FBQ1QsS0FBSSxFQUFFLElBQUk7Q0FDVixDQUFBOztxQkFFYyxtQkFBbUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IERhdGVNb250aCBmcm9tICcuL2RhdGUtbW9udGguanMnXHJcbmltcG9ydCBEYXRlVGltZSBmcm9tICcuL2RhdGUtdGltZS5qcyc7XHJcbmNsYXNzIERhdGVDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblx0cmVuZGVyICgpIHtcclxuXHRcdGNvbnN0IGRhdGVjbGQgID0gPERhdGVNb250aCB7Li4udGhpcy5wcm9wc30gLz5cclxuXHRcdGNvbnN0IGRhdGV0aW1lID0gPERhdGVUaW1lIHsuLi50aGlzLnByb3BzfSAvPlxyXG5cdFx0bGV0IHBpY2tlciA9IHRoaXMucHJvcHMudGltZSA/IGRhdGVjbGQrZGF0ZXRpbWU6IGRhdGVjbGQ7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJkYXRlLWNhbGVuZGFyIGFuaW1hdGVkIGluZmluaXRlIGZhZGVJblJpZ2h0XCI+XHJcblx0XHRcdHtwaWNrZXJ9XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlQ2FsZW5kYXIiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9IGZyb20gJy4vZGF0ZS1sdW5hcidcclxuaW1wb3J0IHtnZXRTb2xhclRlcm1JbmRleCwgZ2V0TW9udGhTb2xhclRlcm1zfSBmcm9tICcuL2RhdGUtdGVybSdcclxuaW1wb3J0IHtzYWxhckhvbGlkYXlzLCBsdW5hckhvbGlkYXlzfSBmcm9tJy4vZGF0ZS1ob2xpZGF5cydcclxuLy9yZW5kZXIgbW9udGhcclxuLy9jdXJyZW50IG1vbnRoXHJcbmNsYXNzIERhdGVEYXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLypwcm9wVHlwZXM6IHtcclxuICAgICAgICBkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICAgIGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0qL1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcy5zZWxlY3RlZCwgcHJvcHMuc2VsZWN0ZWQsICdzZWxlY3RlZCcpXHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluafkOWkqeeahOaJgOacieS/oeaBryBtKzHmiY3mmK/mmL7npLrnlKjnmoTmnIjliIZcclxuICAgIGdldERheUluZm8oKXtcclxuICAgICAgICBjb25zdCB7ZGF0ZSwgZWRhdGUsIG1pbiwgbWF4LCBzdGFydCwgZW5kLCBzZWxlY3RlZCwgc2VsZWN0aW5nLCBzdGF0dXMsIGRheUFkZG9uIH0gPSB0aGlzLnByb3BzIC8vc2VsZWN0ZWQgZGF0ZSwgcmVuZGVyIGRhdGUsIGVhY2ggZGF0ZVxyXG4gICAgICAgIGNvbnN0IFtzeSwgc20sIHNkXSA9IFtzZWxlY3RlZC5nZXRGdWxsWWVhcigpLCBzZWxlY3RlZC5nZXRNb250aCgpLCBzZWxlY3RlZC5nZXREYXRlKCldXHJcbiAgICAgICAgY29uc3QgW2N5LCBjbSwgY2RdID0gW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKV1cclxuICAgICAgICBjb25zdCBbeSwgbSwgZF0gPSBbZWRhdGUuZ2V0RnVsbFllYXIoKSwgZWRhdGUuZ2V0TW9udGgoKSwgZWRhdGUuZ2V0RGF0ZSgpXVxyXG4gICAgICAgIGxldCBlZGF0YU5vID0gK2VkYXRlXHJcbiAgICAgICAgbGV0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IGVkYXRhTm8gPj0gK3N0YXJ0ICYmIGVkYXRhTm8gPD0gK2VuZFxyXG4gICAgICAgIHZhciBkYXlpbmZvID0ge1xyXG4gICAgICAgICAgICBkYXRlOiBlZGF0ZSxcclxuICAgICAgICAgICAgbHVuYXI6IHRvTHVuYXJEYXRlKGVkYXRlKSxcclxuICAgICAgICAgICAgdGVybTogZ2V0TW9udGhTb2xhclRlcm1zKHksIG0pW2RdLFxyXG4gICAgICAgICAgICBzYWxhcmZlc3Q6IHNhbGFySG9saWRheXNbdGhpcy56ZXJvKG0rMSkrdGhpcy56ZXJvKGQpXSwgIC8v6L+Z6YeM55qE5pyI5Lu955So55qE5piv6KeG5Zu+55qEXHJcbiAgICAgICAgICAgIGN1cnJlbnRNb250aDogbSA9PT0gY20sXHJcbiAgICAgICAgICAgIGN1cnJlbnREYXk6IHkgPT09IHN5ICYmIG0gPT09IHNtICYmIGQgPT09IHNkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZihtaW4gfHwgbWF4KSBkYXlpbmZvLmRpc2FibGVkID0gIXJhbmdlKG1pbiwgbWF4KSAgICAvL+aYr+WQpuWcqOmZkOWItueahOiMg+WbtOWGhVxyXG4gICAgICAgIGlmKHN0YXJ0ICYmIGVuZCkgZGF5aW5mby5pbnJhbmdlID0gcmFuZ2Uoc3RhcnQsIGVuZCkgLy/mmK/lkKblnKjpgInmi6nnu5PmnpznmoTojIPlm7TlhoVcclxuICAgICAgICBpZihzZWxlY3RpbmcgJiYgc3RhdHVzKSBkYXlpbmZvLmluc2VsZWN0ID0gc3RhdHVzPT09J3N0YXJ0JyA/IHJhbmdlKHNlbGVjdGluZywgZW5kKSA6IHJhbmdlKHN0YXJ0LCBzZWxlY3RpbmcpXHJcblxyXG4gICAgICAgIGlmKGRheUFkZG9uKXtcclxuICAgICAgICAgICAgZGF5aW5mby5hZGRvbiA9IGRheUFkZG9uKGRheWluZm8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRheWluZm8ubHVuYXJmZXN0ID0gbHVuYXJIb2xpZGF5c1t0aGlzLnplcm8oZGF5aW5mby5sdW5hci5tb250aCkgKyB0aGlzLnplcm8oZGF5aW5mby5sdW5hci5kYXkpXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXlpbmZvLCBlZGF0YU5vLCBzdGFydCwgZW5kLCAnc3RhcnRlbmQnKVxyXG4gICAgICAgIHJldHVybiBkYXlpbmZvO1xyXG4gICAgfVxyXG4gICAgemVybyAobikge1xyXG4gICAgICAgIHJldHVybiBuPDEwID8gJzAnK24gOiBuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZShkYXRlaW5mbykge1xyXG4gICAgICAgIGlmKGRhdGVpbmZvLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShkYXRlaW5mbyk7XHJcbiAgICB9XHJcbiAgICBzZXRNb3VzZUVudGVyKGRhdGVpbmZvKXtcclxuICAgICAgICBpZihkYXRlaW5mby5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VzZUVudGVyLmJpbmQodGhpcywgZGF0ZWluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5nZXREYXlJbmZvKClcclxuICAgICAgICBsZXQgeyBkYXRlLCBzYWxhcmZlc3QsIGx1bmFyZmVzdCwgdGVybSwgbHVuYXIsIGN1cnJlbnREYXksIGN1cnJlbnRNb250aCwgZGlzYWJsZWQsIGlucmFuZ2UsIGluc2VsZWN0LCBhZGRvbn0gPSBpbmZvXHJcbiAgICAgICAgbGV0IGZlc3REb20sIHtmZXN0aXZhbCwgaGFzbHVuYXJ9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZihmZXN0aXZhbCAmJiAoc2FsYXJmZXN0fHxsdW5hcmZlc3QpKXtcclxuICAgICAgICAgIGZlc3REb20gPSA8c3BhbiBjbGFzc05hbWU9XCJkYXRlLWZlc3RcIj57KHNhbGFyZmVzdD9zYWxhcmZlc3Q6JycpICsgKGx1bmFyZmVzdD9sdW5hcmZlc3Q6JycpfTwvc3Bhbj5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIGZlc3REb20gPSA8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImRhdGUtZFwiPntkYXRlLmdldERhdGUoKX08L3NwYW4+e2FkZG9ufTwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihoYXNsdW5hcil7ICAgLy9oYXMgbHVuYXIgYW5kIG11c3QgaGFzIHRlcm1cclxuICAgICAgICAgICAgZmVzdERvbSA9IDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1kYXktc2V0c1wiPntmZXN0RG9tfTxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbHVuYXJcIj57dGVybSA/IHRlcm0gOiB0b0x1bmFyRGF5KGx1bmFyLmRheSl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiZGF0ZS1kYXlcIiArICghY3VycmVudE1vbnRoID8gXCIgZGF0ZS1ub2N1cnJlbnQgXCIgOiBcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoY3VycmVudERheSA/ICdkYXRlLXNlbGVjdGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGRpc2FibGVkID8gJyBkYXRlLWRpc2FibGVkJyA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKGlucmFuZ2UgPyAnIGRhdGUtcmFuZ2UnIDogXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAoaW5zZWxlY3QgPyAnIGRhdGUtaG92ZXInIDogXCJcIikgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsgdGhpcy5zZXREYXRlLmJpbmQodGhpcywgaW5mbykgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5zZXRNb3VzZUVudGVyLmJpbmQodGhpcywgaW5mbyl9PlxyXG4gICAgICAgICAgICB7ZmVzdERvbX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGVEYXlcclxuIiwiLyoqXHJcbiAqIGRhdGUgYXBp5bCB6KOFXHJcbiAqIEBhdXRob3IgSm9lIExpdVxyXG4gKiBAZW1haWwgaWNhcmV1LmpvZUBnbWFpbC5jb21cclxuICovXHJcbmZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSwgZm9ybWF0KXtcclxuICBpZighZGF0ZSkgcmV0dXJuOyAgXHJcbiAgdmFyIHdlZWtzID0gWyfml6UnLCfkuIAnLCfkuownLCfkuIknLCflm5snLCfkupQnLCflha0nXTtcclxuICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgZm9ybWF0ID0gZGF0ZTtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIGRhdGUgPSB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGU7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiTVwiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vSBcclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelIFxyXG4gICAgICAgIFwiaFwiOiBkYXRlLmdldEhvdXJzKCksIC8v5bCP5pe2IFxyXG4gICAgICAgIFwibVwiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIYgXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enkiBcclxuICAgICAgICBcInFcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqYgXHJcbiAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIC8v5q+r56eSIFxyXG4gICAgICAgIFwiV1wiOiB3ZWVrc1tkYXRlLmdldERheSgpXSAvL+WRqFxyXG4gICAgfTtcclxuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8oW3lNZGhtc3FTV10pKy9nLCBmdW5jdGlvbihhbGwsIHQpe1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmKHYgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGFsbC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgIHYgPSAnMCcgKyB2O1xyXG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoLTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHQgPT09ICd5Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gYWxsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXQ7IFxyXG59XHJcblxyXG5sZXQgdG9kYXlTdGFydCA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwwLDAsMClcclxubGV0IGRhdGVEaWZmID0gKHRpbWVzdGFwZSwgdGltZSkgPT4gTWF0aC5jZWlsKCh0aW1lc3RhcGUgLSAodGltZT90aW1lOit0b2RheVN0YXJ0KSkvKDM2MDAqMTAwMCoyNCkpXHJcblxyXG5leHBvcnQge1xyXG4gICAgZGF0ZUZvcm1hdCxcclxuICAgIGRhdGVEaWZmLFxyXG4gICAgdG9kYXlTdGFydFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBjaGFycyA9IHtcclxuXHR3ZWVrc0NuOlsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXHJcbiAgICB3ZWVrc0VuRjogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxyXG4gICAgd2Vla3NFblM6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcclxuICAgIG1vbnRoc0NuOlsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcclxuICAgIG1vbnRoc0VuOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG59XHJcbmNsYXNzIGRhdGVIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdC8vIHByb3BUeXBlczoge1xyXG5cdC8vICAgICB1cGRhdGVNb250aDogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxuXHQvLyB9LFxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cdGdldERhdGUoKXtcclxuXHRcdHJldHVybiB0aGlzLnByb3BzLmRhdGVcclxuXHR9XHJcblx0Y2hhbmdlTW9udGgobnVtKXtcclxuXHRcdHRoaXMucHJvcHMudXBkYXRlTW9udGgobnVtKVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Y29uc3Qge2xhbmd9ID0gdGhpcy5wcm9wc1xyXG5cdFx0Y29uc3QgY24gPSBsYW5nID09PSAnY24nXHJcblx0XHRsZXQgeWVhcj10aGlzLmdldERhdGUoKS5nZXRGdWxsWWVhcigpLCBtb250aD10aGlzLmdldERhdGUoKS5nZXRNb250aCgpKzE7XHJcblxyXG5cdFx0bGV0IG1vbnRoc3RyID0gY24/KHllYXIrJyAnK21vbnRoKyfmnIgnKSA6IGNoYXJzLm1vbnRoc0VuW21vbnRoLTFdKycgJyt5ZWFyO1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS1oZWFkZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlLXRpdGxlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1wcmV2XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgLTEpIH0+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbVwiPnttb250aHN0cn08L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGF0ZS1uZXh0XCIgb25Nb3VzZURvd249eyB0aGlzLmNoYW5nZU1vbnRoLmJpbmQodGhpcywgMSkgfT48L3NwYW4+XHJcblx0XHRcdDwvZGl2Plx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS13dGl0bGVcIj5cclxuXHRcdFx0XHR7Y2hhcnNbY24/J3dlZWtzQ24nOid3ZWVrc0VuUyddLm1hcCgod2Vlaywga2V5KSA9PiA8c3BhbiBrZXk9e2tleX0+e3dlZWt9PC9zcGFuPil9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGF0ZUhlYWRlciIsInZhciBzYWxhckhvbGlkYXlzID0ge1xyXG4gICAgJzAxMDEnOiAn5YWD5pemJyxcclxuICAgICcwMjE0JzogJ+aDheS6uicsXHJcbiAgICAnMDMwOCc6ICflpoflpbMnLFxyXG4gICAgJzAzMTInOiAn5qSN5qCRJyxcclxuICAgICcwNDAxJzogJ+aEmuS6uicsXHJcbiAgICAnMDUwMSc6ICflirPliqgnLFxyXG4gICAgJzA1MDQnOiAn6Z2S5bm0JyxcclxuICAgICcwNjAxJzogJ+WEv+erpScsXHJcbiAgICAnMDcwMSc6ICflu7rlhZonLFxyXG4gICAgJzA4MDEnOiAn5bu65YabJyxcclxuICAgICcwOTEwJzogJ+aVmeW4iCcsXHJcbiAgICAnMTAwMSc6ICflm73luoYnLFxyXG4gICAgJzEyMjQnOiAn5bmz5a6J5aScJyxcclxuICAgICcxMjI1JzogJ+Wco+ivnidcclxufVxyXG5cclxudmFyIGx1bmFySG9saWRheXMgPSB7XHJcbiAgICAnMDEwMSc6ICfmmKXoioInLFxyXG4gICAgJzAxMTUnOiAn5YWD5a61JyxcclxuICAgICcwNTA1JzogJ+err+WNiCcsXHJcbiAgICAnMDcwNyc6ICfkuIPlpJUnLFxyXG4gICAgJzA3MTUnOiAn5Lit5YWDJyxcclxuICAgICcwODE1JzogJ+S4reeniycsXHJcbiAgICAnMDkwOSc6ICfph43pmLMnLFxyXG4gICAgJzEyMDgnOiAn6IWK5YWrJyxcclxuICAgICcxMjI0JzogJ+Wwj+W5tCdcclxufVxyXG5cclxuZXhwb3J0IHtzYWxhckhvbGlkYXlzLCBsdW5hckhvbGlkYXlzfVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcclxuY2xhc3MgRGF0ZUluQm9keSBleHRlbmRzIENvbXBvbmVudCB7ICBcclxuICAvLyBwcm9wVHlwZXM6IHtcclxuICAvLyAgIGNsYXNzZXM6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vY2xhc3Mgc3BsaXQgYnkgc3BhY2luZ1xyXG4gIC8vICAgb2Zmc2V0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gIC8vICAgdXBkYXRlU2l6ZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmN0aW9uXHJcbiAgLy8gfVxyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICAgIHN1cGVyKHByb3BzKTtcclxuICAvLyB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIC8vIHRoaXMucG9wdXAuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc2VzXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApXHJcbiAgICB0aGlzLnJlbmRlckxheWVyKClcclxuICAgIGlmKCF0aGlzLnByb3BzLmlubGluZSl7XHJcbiAgICAgIGxldCBhZGp1c3RTaXplID0gdGhpcy5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlLXBpY2tlcicpWzBdLmNsaWVudFdpZHRoXHJcbiAgICAgIHRoaXMucHJvcHMub25VcGRhdGUgJiYgdGhpcy5wcm9wcy5vblVwZGF0ZShhZGp1c3RTaXplKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMucmVuZGVyTGF5ZXIoKVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgLy8gdGhpcy5yZW1vdmVQaWNrZXIoKVxyXG4gIH1cclxuICByZW1vdmVQaWNrZXIoY3VycmVudCl7XHJcbiAgICB0aGlzLnBvcHVwID0gY3VycmVudCA/IHRoaXMucG9wdXAgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXRlLXBpY2tlci13cmFwcGVyJylbMF1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9wdXAsICdwb3B1cCcpXHJcbiAgICBpZih0aGlzLnBvcHVwKXtcclxuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLnBvcHVwKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMucG9wdXApXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlckxheWVyKCkge1xyXG4gICAgaWYodGhpcy5wcm9wcy5jaGlsZHJlbilcclxuICAgICAgUmVhY3RET00ucmVuZGVyKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMucG9wdXApXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBjaGlsZHJlbj17dGhpcy5wcm9wcy5jaGlsZHJlbn0gY2hpbGRyZW49e251bGx9IHN0eWxlPXt0aGlzLnByb3BzLm9mZnNldH0vPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUluQm9keTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcclxuaW1wb3J0IHtkYXRlRm9ybWF0fSBmcm9tICcuL2RhdGUtZm9ybWF0J1xyXG5jbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQgeyBcclxuXHQvLyAgcHJvcFR5cGVzOiB7XHJcblx0Ly8gICAgIC8vIGVsZW1lbnQ6IFJlYWN0LlByb3BUeXBlcy5lbGVtZW50LFxyXG5cdC8vICAgICBzZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLmFueSxcclxuXHQvLyAgICAgZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG5cdC8vICAgICBvbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG5cdC8vICAgICBvbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuXHQvLyAgICAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jXHJcblx0Ly8gfVxyXG5cdCBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHQgfVxyXG4vKlx0Z2V0SW5pdGlhbFN0YXRlICgpIHtcclxuXHQgICAgcmV0dXJuIHtcclxuXHQgICAgICAvLyB2YWx1ZTogIHRoaXMuZGF0ZVN0cmluZygpXHJcblx0ICAgICAgICBzdHlsZXM6IHtcclxuXHRcdCAgICAgIHRvcDogMCxcclxuXHRcdCAgICAgIGxlZnQ6IDBcclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHR9XHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHtcclxuXHQgICAgLy8gc3R5bGVzOiBcclxuXHQgIH0pXHJcblx0fSovXHJcblx0ZGF0ZVN0cmluZygpe1xyXG5cdFx0Y29uc3Qge2Zvcm1hdCwgc2VsZWN0ZWR9ID0gdGhpcy5wcm9wc1xyXG5cdFx0cmV0dXJuIGZvcm1hdCA/IGRhdGVGb3JtYXQoc2VsZWN0ZWQsIGZvcm1hdCkgOiBzZWxlY3RlZFxyXG5cdH1cclxuXHRoYW5kbGVCbHVyKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25CbHVyKGV2ZW50LCB0aGlzKVxyXG5cdH1cdFxyXG5cdGhhbmRsZUZvY3VzKGV2ZW50KXtcclxuXHRcdHRoaXMucHJvcHMub25Gb2N1cyhldmVudCwgdGhpcylcclxuXHR9XHJcblx0Zm9jdXMgKCkge1xyXG5cdCAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKVxyXG5cdH1cclxuXHRoYW5kbGVDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShldmVudClcclxuXHR9XHJcblx0Z2V0SW5wdXQoKXtcclxuICAgICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcylcclxuXHR9XHRcclxuXHRoYW5kbGVQb3NpdGlvbigpe1xyXG5cdFx0Ly8gRml4IGZvciBJRTgtJ3MgRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdCAgaWYgKCdUZXh0UmVjdGFuZ2xlJyBpbiB3aW5kb3cgJiYgISgnd2lkdGgnIGluIFRleHRSZWN0YW5nbGUucHJvdG90eXBlKSkge1xyXG5cdCAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhUZXh0UmVjdGFuZ2xlLnByb3RvdHlwZSwge1xyXG5cdCAgICAgICd3aWR0aCc6IHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7IH0gfSxcclxuXHQgICAgICAnaGVpZ2h0JzogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDsgfSB9XHJcblx0ICAgIH0pO1xyXG5cdCAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXRJbnB1dCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0fVxyXG5cdFxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRjb25zdCB7IGN1c3RvbUlucHV0LCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0cmV0dXJuIDxpbnB1dCByZWY9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQ9e2Rpc2FibGVkfSB2YWx1ZT17dGhpcy5kYXRlU3RyaW5nKCl9IG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0IiwiLy8g5Yac5Y6G5pyI5Lu95L+h5oGv6KGoXHJcbnZhciBsdW5hckluZm8gPSBbXHJcbiAgICAweDA0YmQ4LDB4MDRhZTAsMHgwYTU3MCwweDA1NGQ1LDB4MGQyNjAsMHgwZDk1MCwweDE2NTU0LDB4MDU2YTAsMHgwOWFkMCwweDA1NWQyLFxyXG4gICAgMHgwNGFlMCwweDBhNWI2LDB4MGE0ZDAsMHgwZDI1MCwweDFkMjU1LDB4MGI1NDAsMHgwZDZhMCwweDBhZGEyLDB4MDk1YjAsMHgxNDk3NyxcclxuICAgIDB4MDQ5NzAsMHgwYTRiMCwweDBiNGI1LDB4MDZhNTAsMHgwNmQ0MCwweDFhYjU0LDB4MDJiNjAsMHgwOTU3MCwweDA1MmYyLDB4MDQ5NzAsXHJcbiAgICAweDA2NTY2LDB4MGQ0YTAsMHgwZWE1MCwweDA2ZTk1LDB4MDVhZDAsMHgwMmI2MCwweDE4NmUzLDB4MDkyZTAsMHgxYzhkNywweDBjOTUwLFxyXG4gICAgMHgwZDRhMCwweDFkOGE2LDB4MGI1NTAsMHgwNTZhMCwweDFhNWI0LDB4MDI1ZDAsMHgwOTJkMCwweDBkMmIyLDB4MGE5NTAsMHgwYjU1NyxcclxuICAgIDB4MDZjYTAsMHgwYjU1MCwweDE1MzU1LDB4MDRkYTAsMHgwYTVkMCwweDE0NTczLDB4MDUyZDAsMHgwYTlhOCwweDBlOTUwLDB4MDZhYTAsXHJcbiAgICAweDBhZWE2LDB4MGFiNTAsMHgwNGI2MCwweDBhYWU0LDB4MGE1NzAsMHgwNTI2MCwweDBmMjYzLDB4MGQ5NTAsMHgwNWI1NywweDA1NmEwLFxyXG4gICAgMHgwOTZkMCwweDA0ZGQ1LDB4MDRhZDAsMHgwYTRkMCwweDBkNGQ0LDB4MGQyNTAsMHgwZDU1OCwweDBiNTQwLDB4MGI1YTAsMHgxOTVhNixcclxuICAgIDB4MDk1YjAsMHgwNDliMCwweDBhOTc0LDB4MGE0YjAsMHgwYjI3YSwweDA2YTUwLDB4MDZkNDAsMHgwYWY0NiwweDBhYjYwLDB4MDk1NzAsXHJcbiAgICAweDA0YWY1LDB4MDQ5NzAsMHgwNjRiMCwweDA3NGEzLDB4MGVhNTAsMHgwNmI1OCwweDA1NWMwLDB4MGFiNjAsMHgwOTZkNSwweDA5MmUwLFxyXG4gICAgMHgwYzk2MCwweDBkOTU0LDB4MGQ0YTAsMHgwZGE1MCwweDA3NTUyLDB4MDU2YTAsMHgwYWJiNywweDAyNWQwLDB4MDkyZDAsMHgwY2FiNSxcclxuICAgIDB4MGE5NTAsMHgwYjRhMCwweDBiYWE0LDB4MGFkNTAsMHgwNTVkOSwweDA0YmEwLDB4MGE1YjAsMHgxNTE3NiwweDA1MmIwLDB4MGE5MzAsXHJcbiAgICAweDA3OTU0LDB4MDZhYTAsMHgwYWQ1MCwweDA1YjUyLDB4MDRiNjAsMHgwYTZlNiwweDBhNGUwLDB4MGQyNjAsMHgwZWE2NSwweDBkNTMwLFxyXG4gICAgMHgwNWFhMCwweDA3NmEzLDB4MDk2ZDAsMHgwNGJkNywweDA0YWQwLDB4MGE0ZDAsMHgxZDBiNiwweDBkMjUwLDB4MGQ1MjAsMHgwZGQ0NSxcclxuICAgIDB4MGI1YTAsMHgwNTZkMCwweDA1NWIyLDB4MDQ5YjAsMHgwYTU3NywweDBhNGIwLDB4MGFhNTAsMHgxYjI1NSwweDA2ZDIwLDB4MGFkYTBcclxuXTtcclxuIFxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOeahOaAu+WkqeaVsFxyXG5mdW5jdGlvbiBsdW5hclllYXJEYXlzKHkpIHtcclxuICAgIHZhciBpLCBzdW0gPSAzNDhcclxuICAgIGZvciAoaSA9IDB4ODAwMDsgaSA+IDB4ODsgaSA+Pj0gMSkgc3VtICs9IChsdW5hckluZm9beSAtIDE5MDBdICYgaSkgPyAxIDogMFxyXG4gICAgcmV0dXJuIChzdW0gKyBsZWFwRGF5cyh5KSlcclxufVxyXG5cclxuLy/kvKDlm57lhpzljoYgeSDlubRt5pyI55qE5oC75aSp5pWwXHJcbmZ1bmN0aW9uIGx1bmFyTW9udGhEYXlzKHksIG0pIHtcclxuICAgIHJldHVybiAoKGx1bmFySW5mb1t5IC0gMTkwMF0gJiAoMHgxMDAwMCA+PiBtKSkgPyAzMCA6IDI5KVxyXG59XHJcblxyXG4vL+S8oOWbnuWGnOWOhiB5IOW5tOmXsOaciOeahOWkqeaVuFxyXG5mdW5jdGlvbiBsZWFwRGF5cyh5KSB7XHJcbiAgICBpZiAobGVhcE1vbnRoKHkpKSByZXR1cm4gKChsdW5hckluZm9beSAtIDE5MDBdICYgMHgxMDAwMCkgPyAzMCA6IDI5KVxyXG4gICAgZWxzZSByZXR1cm4gKDApXHJcbn1cclxuXHJcbi8v5Lyg5Zue5Yac5Y6GIHkg5bm06Zew5ZOq5Liq5pyIIDEtMTIgLCDmspLpl7DkvKDlm54gMFxyXG5mdW5jdGlvbiBsZWFwTW9udGgoeSkge1xyXG4gICAgcmV0dXJuIChsdW5hckluZm9beSAtIDE5MDBdICYgMHhmKVxyXG59XHJcblxyXG5cclxuLy/lhazljobovazlhpzljoZcclxuZnVuY3Rpb24gdG9MdW5hckRhdGUob2JqRGF0ZSkge1xyXG4gICAgdmFyIGksIGxlYXAgPSAwLFxyXG4gICAgICAgIHRlbXAgPSAwO1xyXG4gICAgdmFyIGJhc2VEYXRlID0gbmV3IERhdGUoMTkwMCwgMCwgMzEpO1xyXG4gICAgdmFyIG9mZnNldCA9IChvYmpEYXRlIC0gYmFzZURhdGUpIC8gODY0MDAwMDA7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgcmVzdWx0LmRheUN5bCA9IG9mZnNldCArIDQwO1xyXG4gICAgcmVzdWx0Lm1vbkN5bCA9IDE0O1xyXG5cclxuICAgIGZvciAoaSA9IDE5MDA7IGkgPCAyMDUwICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIHRlbXAgPSBsdW5hclllYXJEYXlzKGkpO1xyXG4gICAgICAgIG9mZnNldCAtPSB0ZW1wO1xyXG4gICAgICAgIHJlc3VsdC5tb25DeWwgKz0gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgKz0gdGVtcDtcclxuICAgICAgICBpLS07XHJcbiAgICAgICAgcmVzdWx0Lm1vbkN5bCAtPSAxMjtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQueWVhciA9IGk7XHJcbiAgICByZXN1bHQueWVhckN5bCA9IGkgLSAxODY0O1xyXG5cclxuICAgIGxlYXAgPSBsZWFwTW9udGgoaSk7IC8v6Zew5ZOq5Liq5pyIXHJcbiAgICByZXN1bHQuaXNMZWFwID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChpID0gMTsgaSA8IDEzICYmIG9mZnNldCA+IDA7IGkrKykge1xyXG4gICAgICAgIC8v6Zew5pyIXHJcbiAgICAgICAgaWYgKGxlYXAgPiAwICYmIGkgPT0gKGxlYXAgKyAxKSAmJiByZXN1bHQuaXNMZWFwID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC0taTtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRlbXAgPSBsZWFwRGF5cyhyZXN1bHQueWVhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcCA9IGx1bmFyTW9udGhEYXlzKHJlc3VsdC55ZWFyLCBpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v6Kej6Zmk6Zew5pyIXHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0xlYXAgPT0gdHJ1ZSAmJiBpID09IChsZWFwICsgMSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmlzTGVhcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2Zmc2V0IC09IHRlbXBcclxuICAgICAgICBpZiAocmVzdWx0LmlzTGVhcCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXN1bHQubW9uQ3lsKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPT0gMCAmJiBsZWFwID4gMCAmJiBpID09IGxlYXAgKyAxKVxyXG4gICAgICAgIGlmIChyZXN1bHQuaXNMZWFwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5pc0xlYXAgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXN1bHQuaXNMZWFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgLS1pO1xyXG4gICAgICAgICAgICAtLXJlc3VsdC5tb25DeWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgICAgb2Zmc2V0ICs9IHRlbXA7XHJcbiAgICAgICAgLS1pO1xyXG4gICAgICAgIC0tcmVzdWx0Lm1vbkN5bDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQubW9udGggPSBpO1xyXG4gICAgcmVzdWx0LmRheSA9IG9mZnNldCArIDE7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vL+WGnOWOhuaVsOWtl+i9rOWtl+esplxyXG5mdW5jdGlvbiB0b0x1bmFyRGF5IChkKXtcclxuICAgIHZhciBsdW5hckRheSA9IFsn5LiAJywgJ+S6jCcsICfkuIknLCAn5ZubJywgJ+S6lCcsICflha0nLCAn5LiDJywgJ+WFqycsICfkuZ0nLCAn5Y2BJywgJ+WNgeS4gCcsICfljYHkuownXTtcclxuICAgIHZhciBsdW5hclRlZW4gPSBbJ+WInScsICfljYEnLCAn5bu/JywgJ+S4iSddO1xyXG4gICAgdmFyIGRzdHIgPSBkKycnLFxyXG4gICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMF0sIFxyXG4gICAgICAgIHJpZ2h0TnVtID0gZHN0ci5sZW5ndGggPCAyID8gJycgOiBkc3RyLnN1YnN0cmluZygxKSxcclxuICAgICAgICByaWdodERlY28gPSByaWdodE51bT09PScwJyA/ICfljYEnIDogbHVuYXJEYXlbTnVtYmVyKHJpZ2h0TnVtKS0xXTtcclxuICAgIGlmKGQgPiAxMCl7XHJcbiAgICAgICAgdGVlbiA9IGx1bmFyVGVlblsxXTtcclxuICAgICAgICBpZihkPj0yMCl7XHJcbiAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bMl07XHJcbiAgICAgICAgICAgIGlmKGQ+PTMwKXtcclxuICAgICAgICAgICAgICAgIHRlZW4gPSBsdW5hclRlZW5bM107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIHRlZW4gKyAoZHN0ci5sZW5ndGggPCAyID8gbHVuYXJEYXlbZC0xXSA6IHJpZ2h0RGVjbyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtsdW5hclllYXJEYXlzLCBsdW5hck1vbnRoRGF5cywgbGVhcERheXMsIGxlYXBNb250aCwgdG9MdW5hckRhdGUsIHRvTHVuYXJEYXl9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRlRGF5IGZyb20gJy4vZGF0ZS1kYXkuanMnXHJcbmNsYXNzIERhdGVNb250aCBleHRlbmRzIENvbXBvbmVudCB7IFxyXG5cdC8qcHJvcFR5cGVzOiB7XHJcblx0XHRkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcblx0XHRmb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcclxuXHR9Ki9cclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7c2VsZWN0aW5nOiBwcm9wcy5zZWxlY3Rpbmd9O1xyXG5cdCB9XHJcblx0Z2V0TW9udGhJbmZvICgpIHtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0ZSwgJ2RhdGVtb250aCcpXHJcblx0XHRsZXQgeSA9IHRoaXMucHJvcHMuZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdCAgICBsZXQgbSA9IHRoaXMucHJvcHMuZGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0dmFyIGRhdGVkYXksIGxpbmU9MCwgdGVtcD1bXSwgaXNmaWxsID0gdGhpcy5wcm9wcy5pc2ZpbGw7XHJcblx0XHQvLyBjb25zb2xlLnRpbWUoJ+iuoeeul+S4gOaciOaJgOeUqOaXtumXtCcpXHJcbiAgICAgICAgdmFyIHByZXZNRGF5ID0gbmV3IERhdGUoeSwgbSwgMCksIHByZXZNRGF5TGFzdCA9IHByZXZNRGF5LmdldERhdGUoKTsgICAgLy9wcmV2IE1vbnRoIExhc3QgRGF5XHJcbiAgICAgICAgdmFyIG5leHRNRGF5ID0gbmV3IERhdGUoeSwgbSsxLCAwKSwgY3Vyck1EYXlMYXN0ID0gbmV4dE1EYXkuZ2V0RGF0ZSgpOyAgLy9jdXJyZW50IE1vbnRoIExhc3QgRGF5XHJcbiAgICAgICAgdmFyIGN1cnJNRGF5ID0gbmV3IERhdGUoeSwgbSswLCAxKSwgY3Vyck1EYXlGaXJzdD0gY3Vyck1EYXkuZ2V0RGF5KCk7ICAgLy9jdXJyZW50IE1vbnRoIEZpcnN0IERheSBXZWVrXHJcblxyXG4gICAgICAgdGVtcFtsaW5lXT1bXTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsY0xpbmUoZGF0ZSl7XHJcblx0ICAgIFx0dmFyIHdlZWtubyA9IGRhdGUuZ2V0RGF5KCk7ICAgLy93ZWVrXHJcblx0ICAgICAgICBpZih3ZWVrbm8gPT0gMCkgdGVtcFtsaW5lXT1bXVxyXG5cdCAgICAgICAgdGVtcFtsaW5lXS5wdXNoKGRhdGUpO1xyXG5cdCAgICAgICAgd2Vla25vID09IDYgJiYgbGluZSsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhwcmV2TURheSwgY3Vyck1EYXksIHByZXZNRGF5TGFzdCwgY3Vyck1EYXlMYXN0LCBjdXJyTURheUZpcnN0KVxyXG4gICAgICAgaWYoY3Vyck1EYXlGaXJzdCAmJiBpc2ZpbGwpeyAvL3ByZXYgTW9udGggY2FsZW5kYXIgcm93IGZpcnN0XHJcbiAgICAgICAgICAgIHZhciBrID0gcHJldk1EYXlMYXN0IC0gY3Vyck1EYXlGaXJzdCArIDE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY3Vyck1EYXlGaXJzdDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlZGF5ID0gbmV3IERhdGUoeSwgbS0xLCBrKVxyXG4gICAgICAgICAgICAgICAgXHR0ZW1wW2xpbmVdLnB1c2goZGF0ZWRheSlcclxuICAgICAgICAgICAgICAgIGsrK1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIGk9MTsgaSA8PSBjdXJyTURheUxhc3Q7IGkrKykgeyAvL2N1cnJlbnQgbW9udGhcclxuICAgICAgICBcdGRhdGVkYXkgPSBuZXcgRGF0ZSh5LCBtLCBpKVxyXG4gICAgICAgIFx0Y2FsY0xpbmUoZGF0ZWRheSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoaXNmaWxsKXtcclxuXHQgICAgICAgIGZvciAoaj0xOyBqIDwgMTI7IGorKykge1xyXG5cdCAgICAgICAgXHRpZihsaW5lPDYpe1xyXG5cdCAgICAgICAgXHRcdC8vIGNvbnNvbGUubG9nKGxpbmUsICdsaW5lJylcclxuXHRcdCAgICAgICAgICAgIGRhdGVkYXkgPSAgbmV3IERhdGUoeSwgbSsxLCBqKTtcclxuXHRcdCAgICAgICAgICAgIGNhbGNMaW5lKGRhdGVkYXkpXHJcblx0ICAgICAgIFx0XHR9XHJcblx0ICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS50aW1lRW5kKCforqHnrpfkuIDmnIjmiYDnlKjml7bpl7QnKVxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG5cdH1cclxuXHJcblx0d2Vla3MobW9udGhzKXtcclxuXHRcdHZhciB3ZWVrcyA9IFtdLCB0aGF0ID0gdGhpcztcclxuXHRcdG1vbnRocy5tYXAoZnVuY3Rpb24od2Vlaywgd2tleSkge1xyXG5cdFx0XHR3ZWVrcy5wdXNoKDxkaXYgY2xhc3NOYW1lPXtcImRhdGUtd2VlayBkYXRlLXdlZWstXCIrd2tleX0ga2V5PXt3a2V5fT5cclxuXHRcdFx0XHR7dGhhdC5kYXlzKHdlZWspfVxyXG5cdFx0XHQ8L2Rpdj4pXHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHdlZWtzXHJcblx0fVxyXG5cdGRheXMod2Vlayl7XHJcblx0XHR2YXIgZGF5cyA9IFtdLCB0aGF0ID0gdGhpcztcclxuXHRcdHdlZWsubWFwKGZ1bmN0aW9uKGRheSwgZGtleSl7XHJcblx0XHRcdGRheXMucHVzaCggPERhdGVEYXkgey4uLnRoYXQucHJvcHN9IG9uTW91c2VFbnRlcj17dGhhdC5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKX0gc2VsZWN0aW5nPXt0aGF0LnN0YXRlLnNlbGVjdGluZ30gZWRhdGU9e2RheX0ga2V5PXtka2V5fS8+IClcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gZGF5c1xyXG5cdH1cclxuXHRvbk1vdXNlRW50ZXIoZGF0ZWluZm8pe1xyXG5cdFx0bGV0IHtzdGFydCwgZW5kfSA9IHRoaXMucHJvcHNcclxuXHRcdGlmKHN0YXJ0ICYmIGVuZCkgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0aW5nOiBkYXRlaW5mby5kYXRlfSlcclxuXHR9XHJcblx0b25Nb3VzZUxlYXZlKCl7XHJcblx0XHRsZXQge3N0YXJ0LCBlbmR9ID0gdGhpcy5wcm9wc1xyXG5cdFx0aWYoc3RhcnQgJiYgZW5kKSB0aGlzLnNldFN0YXRlKHtzZWxlY3Rpbmc6IG51bGx9KVxyXG5cdH1cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ3JlbmRlciB0aW1lcycpXHJcblx0XHRjb25zdCBtb250aHMgPSB0aGlzLmdldE1vbnRoSW5mbygpLCB0aGF0PXRoaXM7XHJcblx0XHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1wiZGF0ZS1tb250aFwiICsgKHRoYXQuc3RhdGUuc2VsZWN0aW5nID8gXCIgZGF0ZS1zZWxlY3RpbmcgXCIgOiBcIiBcIil9IG9uTW91c2VMZWF2ZT17dGhpcy5vbk1vdXNlTGVhdmUuYmluZCh0aGlzKX0+XHJcblx0XHRcdFx0e3RoaXMud2Vla3MobW9udGhzKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0fVxyXG59XHJcblxyXG5EYXRlTW9udGguZGVmYXVsdFByb3BzID0ge1xyXG5cdHNlbGVjdGluZzogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlTW9udGhcclxuIiwiLy8g5Yac5Y6G5LqM5Y2B5Zub6IqC5rCUXHJcbnZhciBjYWNoZSA9IHt9O1xyXG52YXIgY2FjaGVrZXlzID0gW107XHJcbnZhciBzb2xhclRlcm0gPSBbJ+Wwj+WvkicsICflpKflr5InLCAn56uL5pilJywgJ+mbqOawtCcsICfmg4rom7AnLCAn5pil5YiGJywgJ+a4heaYjicsICfosLfpm6gnLCAn56uL5aSPJywgJ+Wwj+a7oScsICfoipLnp40nLCAn5aSP6IezJywgJ+Wwj+aakScsICflpKfmmpEnLCAn56uL56eLJywgJ+WkhOaakScsICfnmb3pnLInLCAn56eL5YiGJywgJ+WvkumcsicsICfpnJzpmY0nLCAn56uL5YasJywgJ+Wwj+mbqicsICflpKfpm6onLCAn5Yas6IezJ107XHJcbnZhciBzVGVybUluZm8gPSBbMCwgMjEyMDgsIDQyNDY3LCA2MzgzNiwgODUzMzcsIDEwNzAxNCwgMTI4ODY3LCAxNTA5MjEsIDE3MzE0OSwgMTk1NTUxLCAyMTgwNzIsIDI0MDY5MywgMjYzMzQzLCAyODU5ODksIDMwODU2MywgMzMxMDMzLCAzNTMzNTAsIDM3NTQ5NCwgMzk3NDQ3LCA0MTkyMTAsIDQ0MDc5NSwgNDYyMjI0LCA0ODM1MzIsIDUwNDc1OF07XHJcbi8vIOi/lOWbnuafkOW5tOeahOesrG7kuKroioLmsJTkuLrlh6Dml6Uo5LuOMOWwj+Wvkui1t+eulylcclxudmFyIGdldFNvbGFyVGVybUluZGV4ID0gZnVuY3Rpb24oeWVhciwgaW5kZXgpIHtcclxuICAgIHZhciBvZmZEYXRlID0gbmV3IERhdGUoKDMxNTU2OTI1OTc0LjcgKiAoeWVhciAtIDE5MDApICsgc1Rlcm1JbmZvW2luZGV4XSAqIDYwMDAwKSArIERhdGUuVVRDKDE5MDAsIDAsIDYsIDIsIDUpKTtcclxuICAgIHJldHVybiBvZmZEYXRlLmdldFVUQ0RhdGUoKTtcclxufTtcclxuXHJcbi8vIOi/lOWbnuivpeaciOeahOiKguawlOS/oeaBr1xyXG52YXIgZ2V0TW9udGhTb2xhclRlcm1zID0gZnVuY3Rpb24oeWVhciwgbW9udGgpIHtcclxuICAgIGlmICh5ZWFyIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIG1vbnRoID0geWVhci5nZXRNb250aCgpO1xyXG4gICAgICAgIHllYXIgPSB5ZWFyLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9XHJcbiAgICB2YXIga2V5ID0gJycgKyB5ZWFyICsgbW9udGg7XHJcbiAgICBpZiAoa2V5IGluIGNhY2hlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlW2tleV07XHJcbiAgICB9XHJcbiAgICB2YXIgcmV0ID0gY2FjaGVba2V5XSA9IHt9O1xyXG4gICAgdmFyIGluZGV4O1xyXG4gICAgaW5kZXggPSBnZXRTb2xhclRlcm1JbmRleCh5ZWFyIC0gMTkwMCwgbW9udGggKiAyKTtcclxuICAgIHJldFtpbmRleCAtIDFdID0gc29sYXJUZXJtW21vbnRoICogMl07XHJcbiAgICBpbmRleCA9IGdldFNvbGFyVGVybUluZGV4KHllYXIgLSAxOTAwLCBtb250aCAqIDIgKyAxKTtcclxuICAgIHJldFtpbmRleCAtIDFdID0gc29sYXJUZXJtW21vbnRoICogMiArIDFdO1xyXG4gICAgY2FjaGVrZXlzLnB1c2goa2V5KTtcclxuICAgIGlmIChjYWNoZWtleXMubGVuZ3RoID4gMTIpIHtcclxuICAgICAgICBkZWxldGUgY2FjaGVbY2FjaGVrZXlzLnNoaWZ0KCldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRTb2xhclRlcm1JbmRleCwgZ2V0TW9udGhTb2xhclRlcm1zfSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IERhdGVEYXkgZnJvbSAnLi9kYXRlLWRheS5qcydcclxuY2xhc3MgRGF0ZVRpbWUgZXh0ZW5kcyBDb21wb25lbnQgeyBcclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZS10aW1lXCI+XHJcblx0XHRcdHtuZXcgRGF0ZSgpLmdldEhvdXJzKCkrICc6JyArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpfVxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZSIsIi8vIGltcG9ydCAnLi9kYXRlcGlja2VyLmxlc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQgRGF0ZUhlYWRlciBmcm9tICcuL2RhdGUtaGVhZGVyLmpzJ1xuaW1wb3J0IERhdGVDYWxlbmRhciBmcm9tICcuL2RhdGUtY2FsZW5kYXIuanMnXG5pbXBvcnQgRGF0ZUlucHV0IGZyb20gJy4vZGF0ZS1pbnB1dC5qcydcbmltcG9ydCBEYXRlSW5Cb2R5IGZyb20gJy4vZGF0ZS1pbi1ib2R5LmpzJ1xuXG52YXIgbm93ID0gbmV3IERhdGUoKVxuXG5jbGFzcyBSZWFjdERhdGVwaWNrZXJQbHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Ly8gcHJvcFR5cGVzOiB7XG5cdC8vIFx0c2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQvL2RlZmF1bHQgZGF0ZVxuXHQvLyBcdGZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgICAgIC8vZm9ybWF0IGRhdGVcblx0Ly8gXHRpc2ZpbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFx0ICAgIC8vc2hvdyBwcmVmaXgtcHJldiBwcmVmaXgtbmV4dCBtb250aCBcblx0Ly8gXHRtb250aHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHRcdC8vc2hvdyBtdWx0aS1wYW5lcyBieSBtb250aHNcblxuXHQvLyBcdHRpbWU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAgIC8vc2hvdyB0aW1lIHNlbGVjdCBAdG9kb1xuXG5cdC8vIFx0bWluOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtaW5cblx0Ly8gXHRtYXg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1heFxuXG5cdC8vIFx0c3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblx0Ly8gXHRlbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblxuXHQvLyBcdGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgIC8vIGN1c3RvbSBjbGFzc1xuXHQvLyBcdGRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vaW5wdXQgY2FuJ3QgY2hhbmdlXG5cdC8vIFx0YXV0b0hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9zZWxlY3RlZCBhdXRvIGhpZGVcblx0Ly8gXHRpbmxpbmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAvL2lubGluZVxuXHQvLyBcdGxhbmc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NuJywgJ2VuJ10pLFxuXG5cdC8vIFx0ZmVzdGl2YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBmZXN0aXZhbFxuXHQvLyBcdGhhc2x1bmFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgbHVuYXJcblxuXHQvLyBcdG9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5cdC8vIFx0b25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxuXHQvLyBcdG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChkYXlpbmZvLCBwaWNrZXIpXG5cdC8vIFx0ZGF5QWRkb246IFJlYWN0LlByb3BUeXBlcy5mdW5jIFx0XHQvL2FyZ3MgKGRheWluZm8pXG5cdC8vIFx0Ly9kYXlBZGRvbiwgYWRkIGRhdGEgZm9yIGRheSwgYW5kIG5lZWQgdG8gcmV0dXJuIGRvbSwgXG5cdC8vIFx0Ly90aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgaW5zZXJ0IHRvIGRheSBlYWNoIGVsZW1lbnQuIHBscyBzZWUgbGFzdCBkZW1vXG5cdC8vIH1cblx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblx0XHRcdFx0ZGF0ZTogcHJvcHMuc2VsZWN0ZWQsXHRcdC8vcmVuZGVyIG1vbnRoIGJ5IGRhdGVcblx0XHRcdFx0c2hvdzogcHJvcHMuaW5saW5lID8gdHJ1ZSA6IGZhbHNlLFxuXHRcdFx0XHRmb2N1czogZmFsc2UsXHQvL2ZvY3VzIHN0YXRlXG5cdFx0XHRcdG9mZnNldDoge30sXHRcdC8vZGF0ZXBpY2tlciBwb3NpdGlvblxuXHRcdFx0XHRzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWQsXG5cdFx0XHRcdHN0YXJ0OiBwcm9wcy5zdGFydCxcblx0XHRcdFx0ZW5kOiBwcm9wcy5lbmQsXG5cdFx0XHRcdC8vIHN0YXR1czogJycgICBcdC8vUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnZW5kJ10pIFxuXHRcdFx0XHQvLydzdGFydCcgYW5kICdlbmQnIHVzZSBieSBiaS1kYXRlcGlja2VyIHJhbmdlIHZhbHVlLCBhbmQgdW5kZWZpbmVkIHVzZSBieSBzaW5nbGUgZGF0ZXBpY2tlciBzaW5nbGUgZGF0ZVxuXHRcdH1cbiAgICB9XG5cdFx0XG5cdG9uRm9jdXMoZXZlbnQsIGlucHV0KXtcblx0XHRsZXQge3Nob3csIGZvY3VzLCBzZWxlY3RlZH0gPSB0aGlzLnN0YXRlXG5cdFx0aWYoc2hvdyAmJiAhZm9jdXMpe1xuXHRcdFx0dGhpcy5zdGF0ZS5mb2N1cyA9IHRydWUvL2p1c3QgY2hhbmdlIHN0YXRlIG5vdCB0cmlnZ2VyIHJlbmRlclxuXHRcdFx0cmV0dXJuXG5cdFx0fSBcblx0XHRsZXQgc3RhdHVzID0gaW5wdXQucHJvcHMuc3RhdHVzOyBzZWxlY3RlZCA9IHN0YXR1cz90aGlzLnN0YXRlW3N0YXR1c106c2VsZWN0ZWQ7XG5cdFx0bGV0IHtsZWZ0LCB0b3AsIGhlaWdodH0gPSBpbnB1dC5oYW5kbGVQb3NpdGlvbigpOyAgXG5cdFx0XHR0b3AgKz0gKGhlaWdodCsgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKVxuXHRcdGxldCB7b25Gb2N1c30gPSB0aGlzLnByb3BzXG5cdFx0XG5cdFx0dGhpcy5zaG93KHRydWUsIHtsZWZ0LCB0b3B9LCB0cnVlLCBzdGF0dXMpXG5cdFx0b25Gb2N1cyAmJiBvbkZvY3VzKGV2ZW50LCB0aGlzKVxuXHRcdGlmKHN0YXR1cykgdGhpcy5zZXRTdGF0ZSh7ZGF0ZTogc2VsZWN0ZWR9KVxuXHR9XG5cblx0b25CbHVyKGV2ZW50LCBpbnB1dCl7XG5cdFx0Y29uc3Qge3Nob3csIGZvY3VzfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCB7aW5saW5lLCBvbkJsdXJ9ID0gdGhpcy5wcm9wc1xuXHRcdGlmKCFzaG93KSByZXR1cm47XG5cdFx0aWYgKCFmb2N1cykge1xuXHQgICAgICBcdGlucHV0LmZvY3VzKClcdC8vd2hlbiBzaG93ICYmICFmb2N1cywgdHJpZ2dlciBmb2N1cyAgIFxuXHQgICAgfSBlbHNlIGlmKCFpbmxpbmUpIHtcblx0ICAgICAgb25CbHVyICYmIG9uQmx1cihldmVudCwgdGhpcylcblx0ICAgICAgZm9jdXMgJiYgdGhpcy5yZW1vdmVQaWNrZXIoKVxuXHQgICAgfSBcblx0fVxuXG5cdHNob3cgKHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1cykge1xuXHQgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3csIG9mZnNldCwgZm9jdXMsIHN0YXR1c30pXG5cdH1cblxuXHR1cGRhdGVNb250aChudW0pe1xuXHRcdGNvbnN0IHtkYXRlfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBjZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgbnVtKVxuXHRcdHRoaXMudXBkYXRlRGF0ZSh7ZGF0ZTogY2RhdGV9LCB0cnVlKVxuXHR9XG5cblx0bnVtTW9udGgoZGF0ZSwgbnVtKXtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyBudW0sIGRhdGUuZ2V0RGF0ZSgpKVxuXHR9XG5cblx0dXBkYXRlRGF5KGRhdGVpbmZvKXtcblx0XHR0aGlzLnVwZGF0ZURhdGUoZGF0ZWluZm8pXG5cdH1cblx0dXBkYXRlRGF0ZShkYXRlaW5mbywgaXNNb250aCl7XG5cdFx0bGV0IHtvbkNoYW5nZSwgYXV0b0hpZGV9ID0gdGhpcy5wcm9wc1xuXHRcdGxldCB7c3RhdHVzPSdzZWxlY3RlZCcsIHNlbGVjdGVkfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQgZ2V0U2VsZWN0ZWQgPSAhaXNNb250aCA/IGRhdGVpbmZvLmRhdGUgOiB0aGlzLnN0YXRlW3N0YXR1c11cblx0XHQvLyBsZXQgdGVtcCA9IHt9OyB0ZW1wW3N0YXR1c10gPSBnZXRTZWxlY3RlZFxuXHRcdHRoaXMuc2V0U3RhdGUoe3Nob3c6IHRydWUsIGRhdGU6IGRhdGVpbmZvLmRhdGUsIHNlbGVjdGVkOiBnZXRTZWxlY3RlZCwgZm9jdXM6IGZhbHNlLCBbc3RhdHVzXTogZ2V0U2VsZWN0ZWR9KVxuXHRcdG9uQ2hhbmdlICYmIG9uQ2hhbmdlKGRhdGVpbmZvLCB0aGlzKVxuXHRcdCFpc01vbnRoICYmIGF1dG9IaWRlICYmIHRoaXMucmVtb3ZlUGlja2VyKClcblx0fVxuXG5cdHJlbW92ZVBpY2tlcigpe1xuXHRcdHRoaXMuc2hvdyhmYWxzZSlcblx0XHR0aGlzLnJlZnMuaW5zRGF0ZUluQm9keSAmJiB0aGlzLnJlZnMuaW5zRGF0ZUluQm9keS5yZW1vdmVQaWNrZXIodHJ1ZSlcblx0fVxuXG4gICAgcGlja2VycyhzdGF0dXMpIHtcblx0XHRsZXQgJHBpY2tlcnMgPSBbXSwgb2Zmc2V0cyA9IFtdLCBkaCwgZGMsIGlkYXRlXG5cdFx0bGV0IHtkYXRlLCAgc3RhcnQsIGVuZCwgb2Zmc2V0fSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2lubGluZSwgbW9udGhzLCBsYW5nLCBoYXNsdW5hciwgY2xhc3NOYW1lfSA9IHRoaXMucHJvcHNcblx0XHRsZXQgc2VsZWN0ZWQgPSB0aGlzLnN0YXRlW3N0YXR1cz9zdGF0dXM6J3NlbGVjdGVkJ11cblx0XHRsZXQgY2xhc3NlcyA9IGBkYXRlLXBpY2tlciBkYXRlLXBpY2tlci0ke2lubGluZT8naW5saW5lJzonYmxvY2snfSAke2NsYXNzTmFtZT9jbGFzc05hbWU6Jyd9ICR7aGFzbHVuYXI/J2RhdGUtcGlja2VyLWx1bmFyJzonJ31gXG5cdFx0bGV0IHBpY2tlcldpZHRoID0gdGhpcy5zdGF0ZS53aWR0aCB8fCAyMTU7XG5cdFx0Zm9yKHZhciBpPTA7IGk8bW9udGhzOyBpKyspe1xuXHRcdFx0b2Zmc2V0cy5wdXNoKHtsZWZ0OiBpKnBpY2tlcldpZHRoICsgb2Zmc2V0LmxlZnQsIHRvcDogb2Zmc2V0LnRvcH0pXG5cdFx0XHRpZGF0ZSA9IHRoaXMubnVtTW9udGgoZGF0ZSwgaSlcblx0XHRcdGRoID0gPERhdGVIZWFkZXIgZGF0ZT17aWRhdGV9IGxhbmc9e2hhc2x1bmFyPydjbic6bGFuZ30gdXBkYXRlTW9udGg9e3RoaXMudXBkYXRlTW9udGguYmluZCh0aGlzKX0vPlxuXHRcdFx0ZGMgPSA8RGF0ZUNhbGVuZGFyIHsuLi50aGlzLnByb3BzfSBkYXRlPXtpZGF0ZX0gc3RhdHVzPXtzdGF0dXN9IHN0YXJ0PXtzdGFydH0gZW5kPXtlbmR9IHNlbGVjdGVkPXtzZWxlY3RlZH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlRGF5LmJpbmQodGhpcyl9Lz5cblx0XHRcdCBcblx0XHRcdCRwaWNrZXJzLnB1c2goaW5saW5lID9cblx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9IGtleT17aX0+e2RofXtkY308L2Rpdj4gOlxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30gc3R5bGU9e29mZnNldHNbaV19IGtleT17aX0+e2RofXtkY308L2Rpdj4pXG5cdFx0fVxuXHRcdHJldHVybiAkcGlja2Vyc1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUgKHcpIHtcblx0XHQhdGhpcy5wcm9wcy5pbmxpbmUgJiYgdGhpcy5zZXRTdGF0ZSh7d2lkdGg6IHd9KVxuXHR9XG5cdFxuXHRyZW5kZXIgKCkge1xuXHRcdGxldCB7c2hvdywgc2VsZWN0ZWQsIHN0YXJ0LCBlbmQsIHN0YXR1c30gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IHtmb3JtYXQsIGlubGluZSwgbW9udGhzLCBkaXNhYmxlZH0gPSB0aGlzLnByb3BzXG5cdFx0bGV0IHBpY2tlciwgcGlja2VycywgcGlja2VySW5Cb2R5XG5cdFx0bGV0IGRpID0gKHZhbCwgc3RhdCkgPT4gPERhdGVJbnB1dCBzZWxlY3RlZD17IXZhbCA/IHNlbGVjdGVkIDogdmFsfSBmb3JtYXQ9e2Zvcm1hdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0XHQgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfSBzdGF0dXM9e3N0YXR9Lz5cblx0XHRpZihzaG93KXtcblx0XHRcdHBpY2tlcnMgPSB0aGlzLnBpY2tlcnMoc3RhdHVzKVxuXHRcdFx0cGlja2VyID0gPGRpdiBjbGFzc05hbWU9e21vbnRocz4xPydkYXRlLW11bHRpIGNsZWFyZml4JzonJ30+e3BpY2tlcnN9PC9kaXY+XG5cdFx0XHRwaWNrZXJJbkJvZHkgPSA8RGF0ZUluQm9keSAgb25VcGRhdGU9e3RoaXMudXBkYXRlU2l6ZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci13cmFwcGVyXCIgcmVmPVwiaW5zRGF0ZUluQm9keVwiPntwaWNrZXJ9PC9EYXRlSW5Cb2R5PlxuXHRcdH1cblx0XHRsZXQgZGlkb20gPSBzdGFydCAmJiBlbmQgPyA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtaW5wdXRzXCI+e2RpKHN0YXJ0LCAnc3RhcnQnKX17ZGkoZW5kLCAnZW5kJyl9PC9kaXY+IDogZGkoKVxuXHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtY29tcG9uZW50c1wiPlxuXHRcdFx0XHRcdHtkaWRvbX1cblx0XHRcdFx0XHR7aW5saW5lID8gcGlja2VyIDogcGlja2VySW5Cb2R5fVxuXHRcdFx0XHQ8L2Rpdj5cblx0fVxufTtcblxuUmVhY3REYXRlcGlja2VyUGx1cy5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzZmlsbDogZmFsc2UsXG5cdGZvcm1hdDogJ3l5eXktTU0tZGQnLFxuXHRzZWxlY3RlZDogbm93LFxuXHRtb250aHM6IDEsXG5cdGxhbmc6ICdlbidcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3REYXRlcGlja2VyUGx1cztcbiJdfQ==
