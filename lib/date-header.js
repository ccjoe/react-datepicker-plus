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

	function dateHeader() {
		_classCallCheck(this, dateHeader);

		_get(Object.getPrototypeOf(dateHeader.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(dateHeader, [{
		key: 'getDate',

		// propTypes: {
		//     updateMonth: React.PropTypes.func
		// },
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