require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _srcDateFormat = require('../../src/date-format');

var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker-plus');
var now = new Date('2016/10/15');
var min = new Date('2016/10/10');
var max = new Date('2016/10/20');

var App = (function (_Component) {
	_inherits(App, _Component);

	// propTypes:{
	// 	date: React.PropTypes.object,
	// 	isfill: React.PropTypes.bool,
	// 	// addonData: React.PropTypes.object
	// },

	function App(props) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
		this.state = {
			addonData: {
				rest: {
					'2016/01/01': '休',
					'2016/10/01': '休',
					'2016/10/02': '休',
					'2016/10/03': '休',
					'2016/10/04': '休',
					'2016/10/05': '休',
					'2016/10/06': '休',
					'2016/10/07': '休'
				},
				price: {
					'2016/10/01': '￥566',
					'2016/10/02': '￥576',
					'2016/10/03': '￥555',
					'2016/10/04': '￥550',
					'2016/10/05': '￥450',
					'2016/10/06': '￥650',
					'2016/10/07': '￥655',
					'2016/10/08': '￥500',
					'2016/10/09': '￥300',
					'2016/10/10': '￥566',
					'2016/10/11': '￥576',
					'2016/10/12': '￥555',
					'2016/10/13': '￥550',
					'2016/10/14': '￥450',
					'2016/10/15': '￥650',
					'2016/10/16': '￥655',
					'2016/10/17': '￥500',
					'2016/10/18': '￥300'
				}
			}
		};
	}

	_createClass(App, [{
		key: 'onFocus',
		value: function onFocus(event) {
			console.log(event, 'onFocus');
		}
	}, {
		key: 'onBlur',
		value: function onBlur(event) {
			console.log(event, 'onBlur');
		}
	}, {
		key: 'onChange',
		value: function onChange(dateinfo) {
			console.log(dateinfo, 'onChange');
		}
	}, {
		key: 'dayAddon',
		value: function dayAddon(dayinfo) {
			var addonData = this.state.addonData;
			var date = dayinfo.date;

			var dateStr = (0, _srcDateFormat.dateFormat)(date, 'yyyy/MM/dd');
			var resstr = undefined,
			    val = undefined,
			    doms = [];
			for (var key in addonData) {
				resstr = addonData[key][dateStr];
				if (resstr) {
					doms.push(_react2['default'].createElement(
						'span',
						{ className: 'date-day-' + key, key: key },
						resstr
					));
				}
			}
			return doms;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'demo-list clearfix' },
				_react2['default'].createElement(
					'pre',
					{ className: 'demo-code' },
					'\n--------------------------\nProps And CALLBACK OR APIs\n--------------------------\nselected: React.PropTypes.object,\t//default date, not defined, it will be now(), defined \'\' will be empty value\nformat: React.PropTypes.string,     //format date\nisfill: React.PropTypes.bool,\t    //show prefix-prev prefix-next month\nmonths: React.PropTypes.number,\t\t//show multi-panes by months\n\ntime: React.PropTypes.bool,         //show time select @todo\n\nmin: React.PropTypes.object,        //select date range min\nmax: React.PropTypes.object,        //select date range max\n\n\n\nstart: React.PropTypes.object,\t    //selected time is a range, start date\nend: React.PropTypes.object,\t    //selected time is a range, start date\n\nclassName: React.PropTypes.string,  // custom class\ndisabled: React.PropTypes.bool,     //input can\'t change\nautoHide: React.PropTypes.bool,     //selected auto hide\ninline: React.PropTypes.bool,       //inline\nlang: React.PropTypes.oneOf([\'cn\', \'en\'])\n\nfestival: React.PropTypes.bool, \t//show festival\nhaslunar: React.PropTypes.bool, \t//show lunar\n\nonFocus: React.PropTypes.func,\t\t//args (event, picker)\nonBlur: React.PropTypes.func,\t\t//args (event, picker)\nonChange: React.PropTypes.func,\t\t//args (dayinfo, picker)\ndayAddon: React.PropTypes.func \t\t//args (dayinfo)\n\n//dayAddon, add data for day, and need to return dom,\n//the return value will be insert to day each element. pls see last demo\n//  placeholder\n//  children\n \n\n================================\nvar now = new Date(\'2016/10/15\')\nvar min = new Date(\'2016/10/10\')\nvar max = new Date(\'2016/10/20\')\n\t\t\t\t\t'
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with 12 month popup'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker months={12} isfill={true} inline/>'
					),
					_react2['default'].createElement(Datepicker, { months: 12, isfill: true, inline: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'dead simple datepicker'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker/>'
					),
					_react2['default'].createElement(Datepicker, null)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with empty value and placeholder'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker selected="" placeholder="pls input sth..."/>'
					),
					_react2['default'].createElement(Datepicker, { selected: '', placeholder: 'pls input sth...' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with date string value'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker selected="" placeholder="pls input sth..."/>'
					),
					_react2['default'].createElement(Datepicker, { selected: '2018-01-01', placeholder: 'pls input sth...' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with self defined className'
					),
					_react2['default'].createElement(
						'p',
						null,
						'input Component root element will add your  self defined className, \'my-datepicker\'',
						_react2['default'].createElement('br', null),
						'and not inline datepicker pane Component root element will add  your  self defined className + \'my-datepicker-panes\''
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker className="my-datepicker"/>'
					),
					_react2['default'].createElement(Datepicker, { className: 'my-datepicker' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with lang chinese'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker lang=\'cn\'/>'
					),
					_react2['default'].createElement(Datepicker, { lang: 'cn' })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with default date'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker selected={now}/>'
					),
					_react2['default'].createElement(Datepicker, { selected: now })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker autoHide when selected'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker autoHide={true}/>'
					),
					_react2['default'].createElement(Datepicker, { autoHide: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker disabled'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker disabled={true}/>'
					),
					_react2['default'].createElement(Datepicker, { disabled: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker isfill true'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker isfill={this.props.isfill}/>'
					),
					_react2['default'].createElement(Datepicker, { isfill: this.props.isfill })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'inline datepicker'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker inline />'
					),
					_react2['default'].createElement(Datepicker, { inline: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with min and max range'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker inline min={min} max={max} />'
					),
					_react2['default'].createElement(Datepicker, { inline: true, min: min, max: max })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'bi-datepicker with start and end range'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker start={min} end={max} />'
					),
					_react2['default'].createElement(Datepicker, { start: min, end: max })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'defined your input dom, ',
						'<input/>',
						' element just placehold for real react input'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker start={min} end={max}>\n\t<div className="type_item"> <span className="ico_date"></span><input/> </div>\n</Datepicker>',
						'\n\nRENDER DOM IS:\n<div class="date-inputs">\n    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-10"></div>\n    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-20"></div>\n</div>'
					),
					_react2['default'].createElement(
						Datepicker,
						{ start: min, end: max, placeholder: 'departDate', placeholderEnd: 'arrivalDate' },
						_react2['default'].createElement(
							'div',
							{ className: 'type_item' },
							_react2['default'].createElement(
								'span',
								{ className: 'ico_date' },
								'icon'
							),
							_react2['default'].createElement('input', null)
						)
					),
					_react2['default'].createElement(
						'style',
						null,
						'\n\t\t\t\t\t\t.type_item {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.type_item input{\n\t\t\t\t\t\t\tpadding-left: 36px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.ico_date {\n\t\t\t\t\t\t\tposition:absolute;\n\t\t\t\t\t\t\tbackground-color: #dcc;\n\t\t\t\t\t\t\twidth: 30px; height:27px;line-height:27px;\n\t\t\t\t\t\t\tborder:1px solid #98e\n\t\t\t\t\t\t\ttext-aligh:center;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'bi-datepicker with start and end range, and show 2 months '
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker start={min} end={max} months={2}  isfill={true}/>'
					),
					_react2['default'].createElement(Datepicker, { start: min, end: max, months: 2, isfill: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker callbacks alert, pls check at console'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />'
					),
					_react2['default'].createElement(Datepicker, { onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onChange: this.onChange.bind(this) })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with 2 month inline'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker months={2} inline isfill={true}/>'
					),
					_react2['default'].createElement(Datepicker, { months: 2, inline: true, isfill: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with 2 month popup'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker months={2} isfill={true}/>'
					),
					_react2['default'].createElement(Datepicker, { months: 2, isfill: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with 3 month popup'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker months={3} isfill={true}/>'
					),
					_react2['default'].createElement(Datepicker, { months: 3, isfill: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with festival'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker inline festival={true}/>'
					),
					_react2['default'].createElement(Datepicker, { inline: true, festival: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with lunar(lunar auto include term and lang is \'cn\')'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker inline haslunar={true}  isfill={true} festival={true}/>'
					),
					_react2['default'].createElement(Datepicker, { inline: true, haslunar: true, isfill: true, festival: true })
				),
				_react2['default'].createElement(
					'div',
					{ className: 'demo-item demo-full' },
					_react2['default'].createElement(
						'h5',
						null,
						'datepicker with cn holiday label(\'休\')'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'\nstatic initialState() {\n\taddonData: {\n\t\trest: {\n\t\t\t\'2016/01/01\': \'休\',\n\t\t\t\'2016/10/01\': \'休\',\n\t\t\t\'2016/10/02\': \'休\',\n\t\t\t\'2016/10/03\': \'休\',\n\t\t\t\'2016/10/04\': \'休\',\n\t\t\t\'2016/10/05\': \'休\',\n\t\t\t\'2016/10/06\': \'休\',\n\t\t\t\'2016/10/07\': \'休\'\n\t\t},\n\t\tprice: {\n\t\t\t\'2016/10/01\': \'566\',\n\t\t\t\'2016/10/02\': \'576\',\n\t\t\t\'2016/10/03\': \'555\',\n\t\t\t\'2016/10/04\': \'550\',\n\t\t\t\'2016/10/05\': \'450\',\n\t\t\t\'2016/10/06\': \'650\',\n\t\t\t\'2016/10/07\': \'655\',\n\t\t\t\'2016/10/08\': \'500\',\n\t\t\t\'2016/10/09\': \'300\'\n\t\t}\n\t}\n},\ndayAddon(dayinfo){\n\tlet {addonData} = this.state\n\tlet {date} = dayinfo\n\tlet dateStr = dateFormat(date, \'yyyy/MM/dd\')\n\tlet resstr, val, doms = []\n\tfor(var key in addonData){\n\t\tresstr = addonData[key][dateStr]\n\t\tif(resstr){\n\t\t\tdoms.push(<span className={\'date-day-\'+key} key={key}>{resstr}</span>)\n\t\t}\n\t}\n\treturn doms\n},\n<Datepicker  className="date-picker-demo" inline  selected={now} haslunar={true}  isfill={true} festival={true}/> dayAddon={this.dayAddon}'
					),
					_react2['default'].createElement(Datepicker, { className: 'date-picker-demo', inline: true, selected: now, haslunar: true, isfill: true, festival: true, dayAddon: this.dayAddon.bind(this) })
				)
			);
		}
	}]);

	return App;
})(_react.Component);

App.defaultProps = {
	date: now,
	isfill: true
};

ReactDOM.render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"../../src/date-format":2,"react":undefined,"react-datepicker-plus":undefined,"react-dom":undefined}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUJDQWlDLE9BQU87Ozs7NkJBT2YsdUJBQXVCOztBQU5oRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7O0lBRzFCLEdBQUc7V0FBSCxHQUFHOzs7Ozs7OztBQU1HLFVBTk4sR0FBRyxDQU1JLEtBQUssRUFBRTt3QkFOZCxHQUFHOztBQU9ELDZCQVBGLEdBQUcsNkNBT0ssS0FBSyxFQUFFO0FBQ25CLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixZQUFTLEVBQUU7QUFDVixRQUFJLEVBQUU7QUFDTCxpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0tBQ2pCO0FBQ0QsU0FBSyxFQUFFO0FBQ04saUJBQVksRUFBRSxNQUFNO0FBQ3BCLGlCQUFZLEVBQUUsTUFBTTtBQUNwQixp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QU8sR0FBRyxDQUFDO0tBQ2QsQ0FBQyxDQUFDO0FBQ0gsV0FBTyxNQUFNLENBQUM7Q0FDakI7O0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDN0MsSUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFRLENBQUksU0FBUyxFQUFFLElBQUk7V0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLElBQUksR0FBQyxJQUFJLEdBQUMsQ0FBQyxVQUFVLENBQUEsQ0FBQyxJQUFHLElBQUksR0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQztDQUFBLENBQUE7O1FBRy9GLFVBQVUsR0FBVixVQUFVO1FBQ1YsUUFBUSxHQUFSLFFBQVE7UUFDUixVQUFVLEdBQVYsVUFBVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBEYXRlcGlja2VyID0gcmVxdWlyZSgncmVhY3QtZGF0ZXBpY2tlci1wbHVzJyk7XG52YXIgbm93ID0gbmV3IERhdGUoJzIwMTYvMTAvMTUnKVxudmFyIG1pbiA9IG5ldyBEYXRlKCcyMDE2LzEwLzEwJylcbnZhciBtYXggPSBuZXcgRGF0ZSgnMjAxNi8xMC8yMCcpXG5cbmltcG9ydCB7ZGF0ZUZvcm1hdH0gZnJvbSAnLi4vLi4vc3JjL2RhdGUtZm9ybWF0J1xuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Ly8gcHJvcFR5cGVzOntcblx0Ly8gXHRkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXHQvLyBcdGlzZmlsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdC8vIFx0Ly8gYWRkb25EYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG5cdC8vIH0sXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWRkb25EYXRhOiB7XG5cdFx0XHRcdHJlc3Q6IHtcblx0XHRcdFx0XHQnMjAxNi8wMS8wMSc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAxJzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDInOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMyc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA0JzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDUnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNic6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA3JzogJ+S8kSdcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2U6IHtcblx0XHRcdFx0XHQnMjAxNi8xMC8wMSc6ICfvv6U1NjYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAyJzogJ++/pTU3NicsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDMnOiAn77+lNTU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNCc6ICfvv6U1NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA1JzogJ++/pTQ1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDYnOiAn77+lNjUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNyc6ICfvv6U2NTUnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA4JzogJ++/pTUwMCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDknOiAn77+lMzAwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xMCc6ICfvv6U1NjYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzExJzogJ++/pTU3NicsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTInOiAn77+lNTU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xMyc6ICfvv6U1NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE0JzogJ++/pTQ1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTUnOiAn77+lNjUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNic6ICfvv6U2NTUnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE3JzogJ++/pTUwMCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTgnOiAn77+lMzAwJyxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRvbkZvY3VzKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudCwgJ29uRm9jdXMnKVxuXHR9XG5cdG9uQmx1cihldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQsICdvbkJsdXInKVxuXHR9XG5cdG9uQ2hhbmdlKGRhdGVpbmZvKXtcblx0XHRjb25zb2xlLmxvZyhkYXRlaW5mbywgJ29uQ2hhbmdlJylcblx0fVxuXHRkYXlBZGRvbihkYXlpbmZvKXtcblx0XHRsZXQge2FkZG9uRGF0YX0gPSB0aGlzLnN0YXRlXG5cdFx0bGV0IHtkYXRlfSA9IGRheWluZm9cblx0XHRsZXQgZGF0ZVN0ciA9IGRhdGVGb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKVxuXHRcdGxldCByZXNzdHIsIHZhbCwgZG9tcyA9IFtdXG5cdFx0Zm9yKHZhciBrZXkgaW4gYWRkb25EYXRhKXtcblx0XHRcdHJlc3N0ciA9IGFkZG9uRGF0YVtrZXldW2RhdGVTdHJdXG5cdFx0XHRpZihyZXNzdHIpe1xuXHRcdFx0XHRkb21zLnB1c2goPHNwYW4gY2xhc3NOYW1lPXsnZGF0ZS1kYXktJytrZXl9IGtleT17a2V5fT57cmVzc3RyfTwvc3Bhbj4pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkb21zXG5cdH1cblxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1saXN0IGNsZWFyZml4XCI+XG5cdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0e2Bcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5Qcm9wcyBBbmQgQ0FMTEJBQ0sgT1IgQVBJc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnNlbGVjdGVkOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0Ly9kZWZhdWx0IGRhdGUsIG5vdCBkZWZpbmVkLCBpdCB3aWxsIGJlIG5vdygpLCBkZWZpbmVkICcnIHdpbGwgYmUgZW1wdHkgdmFsdWVcbmZvcm1hdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgICAgIC8vZm9ybWF0IGRhdGVcbmlzZmlsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXHQgICAgLy9zaG93IHByZWZpeC1wcmV2IHByZWZpeC1uZXh0IG1vbnRoXG5tb250aHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHRcdC8vc2hvdyBtdWx0aS1wYW5lcyBieSBtb250aHNcblxudGltZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgICAgLy9zaG93IHRpbWUgc2VsZWN0IEB0b2RvXG5cbm1pbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWluXG5tYXg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1heFxuXG5cblxuc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcbmVuZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdCAgICAvL3NlbGVjdGVkIHRpbWUgaXMgYSByYW5nZSwgc3RhcnQgZGF0ZVxuXG5jbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAvLyBjdXN0b20gY2xhc3NcbmRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vaW5wdXQgY2FuJ3QgY2hhbmdlXG5hdXRvSGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL3NlbGVjdGVkIGF1dG8gaGlkZVxuaW5saW5lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgLy9pbmxpbmVcbmxhbmc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NuJywgJ2VuJ10pXG5cbmZlc3RpdmFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgZmVzdGl2YWxcbmhhc2x1bmFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgbHVuYXJcblxub25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcbm9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcbm9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChkYXlpbmZvLCBwaWNrZXIpXG5kYXlBZGRvbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMgXHRcdC8vYXJncyAoZGF5aW5mbylcblxuLy9kYXlBZGRvbiwgYWRkIGRhdGEgZm9yIGRheSwgYW5kIG5lZWQgdG8gcmV0dXJuIGRvbSxcbi8vdGhlIHJldHVybiB2YWx1ZSB3aWxsIGJlIGluc2VydCB0byBkYXkgZWFjaCBlbGVtZW50LiBwbHMgc2VlIGxhc3QgZGVtb1xuLy8gIHBsYWNlaG9sZGVyXG4vLyAgY2hpbGRyZW5cbiBcXG5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgbm93ID0gbmV3IERhdGUoJzIwMTYvMTAvMTUnKVxcbnZhciBtaW4gPSBuZXcgRGF0ZSgnMjAxNi8xMC8xMCcpXFxudmFyIG1heCA9IG5ldyBEYXRlKCcyMDE2LzEwLzIwJylcblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3ByZT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDEyIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezEyfSBpc2ZpbGw9e3RydWV9IGlubGluZS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsxMn0gaXNmaWxsPXt0cnVlfSBpbmxpbmUvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kZWFkIHNpbXBsZSBkYXRlcGlja2VyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlci8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZW1wdHkgdmFsdWUgYW5kIHBsYWNlaG9sZGVyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGRhdGUgc3RyaW5nIHZhbHVlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIjIwMTgtMDEtMDFcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBzZWxmIGRlZmluZWQgY2xhc3NOYW1lPC9oNT5cblx0XHRcdFx0XHQ8cD5pbnB1dCBDb21wb25lbnQgcm9vdCBlbGVtZW50IHdpbGwgYWRkIHlvdXIgIHNlbGYgZGVmaW5lZCBjbGFzc05hbWUsICdteS1kYXRlcGlja2VyJzxici8+XG5cdFx0XHRcdFx0XHRhbmQgbm90IGlubGluZSBkYXRlcGlja2VyIHBhbmUgQ29tcG9uZW50IHJvb3QgZWxlbWVudCB3aWxsIGFkZCAgeW91ciAgc2VsZiBkZWZpbmVkIGNsYXNzTmFtZSArICdteS1kYXRlcGlja2VyLXBhbmVzJzwvcD5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGNsYXNzTmFtZT1cIm15LWRhdGVwaWNrZXJcIi8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgY2xhc3NOYW1lPVwibXktZGF0ZXBpY2tlclwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGxhbmcgY2hpbmVzZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbGFuZz0nY24nLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBsYW5nPSdjbicvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZGVmYXVsdCBkYXRlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD17bm93fS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e25vd30vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGF1dG9IaWRlIHdoZW4gc2VsZWN0ZWQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGF1dG9IaWRlPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgYXV0b0hpZGU9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBkaXNhYmxlZDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgZGlzYWJsZWQ9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBkaXNhYmxlZD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGlzZmlsbCB0cnVlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpc2ZpbGw9e3RoaXMucHJvcHMuaXNmaWxsfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaXNmaWxsPXt0aGlzLnByb3BzLmlzZmlsbH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5pbmxpbmUgZGF0ZXBpY2tlcjwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaW5saW5lIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBtaW4gYW5kIG1heCByYW5nZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIG1pbj17bWlufSBtYXg9e21heH0gLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgbWluPXttaW59IG1heD17bWF4fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+YmktZGF0ZXBpY2tlciB3aXRoIHN0YXJ0IGFuZCBlbmQgcmFuZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGVmaW5lZCB5b3VyIGlucHV0IGRvbSwge2A8aW5wdXQvPmB9IGVsZW1lbnQganVzdCBwbGFjZWhvbGQgZm9yIHJlYWwgcmVhY3QgaW5wdXQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fT5cblx0PGRpdiBjbGFzc05hbWU9XCJ0eXBlX2l0ZW1cIj4gPHNwYW4gY2xhc3NOYW1lPVwiaWNvX2RhdGVcIj48L3NwYW4+PGlucHV0Lz4gPC9kaXY+XG48L0RhdGVwaWNrZXI+YH1cblxue2BcblxuUkVOREVSIERPTSBJUzpcbjxkaXYgY2xhc3M9XCJkYXRlLWlucHV0c1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0eXBlX2l0ZW1cIj48c3BhbiBjbGFzcz1cImljb19kYXRlXCI+aWNvbjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjIwMTYtMTAtMTBcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHlwZV9pdGVtXCI+PHNwYW4gY2xhc3M9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIyMDE2LTEwLTIwXCI+PC9kaXY+XG48L2Rpdj5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSBwbGFjZWhvbGRlcj1cImRlcGFydERhdGVcIiBwbGFjZWhvbGRlckVuZD1cImFycml2YWxEYXRlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR5cGVfaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0RhdGVwaWNrZXI+XG5cdFx0XHRcdFx0PHN0eWxlPntcblx0XHRcdFx0XHRcdGBcblx0XHRcdFx0XHRcdC50eXBlX2l0ZW0ge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC50eXBlX2l0ZW0gaW5wdXR7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctbGVmdDogMzZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pY29fZGF0ZSB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjO1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzBweDsgaGVpZ2h0OjI3cHg7bGluZS1oZWlnaHQ6MjdweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjOThlXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ2g6Y2VudGVyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH1cblx0XHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5iaS1kYXRlcGlja2VyIHdpdGggc3RhcnQgYW5kIGVuZCByYW5nZSwgYW5kIHNob3cgMiBtb250aHMgPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gbW9udGhzPXsyfSAgaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc3RhcnQ9e21pbn0gZW5kPXttYXh9IG1vbnRocz17Mn0gIGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBjYWxsYmFja3MgYWxlcnQsIHBscyBjaGVjayBhdCBjb25zb2xlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9IG9uQmx1cj17dGhpcy5vbkJsdXJ9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggMiBtb250aCBpbmxpbmU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG1vbnRocz17Mn0gaW5saW5lIGlzZmlsbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17Mn0gaW5saW5lIGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDIgbW9udGggcG9wdXA8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG1vbnRocz17Mn0gaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsyfSBpc2ZpbGw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAzIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezN9IGlzZmlsbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17M30gaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBmZXN0aXZhbDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIGZlc3RpdmFsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaW5saW5lIGZlc3RpdmFsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGx1bmFyKGx1bmFyIGF1dG8gaW5jbHVkZSB0ZXJtIGFuZCBsYW5nIGlzICdjbicpPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpbmxpbmUgaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaW5saW5lIGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGNuIGhvbGlkYXkgbGFiZWwoJ+S8kScpPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2BcbnN0YXRpYyBpbml0aWFsU3RhdGUoKSB7XG5cdGFkZG9uRGF0YToge1xuXHRcdHJlc3Q6IHtcblx0XHRcdCcyMDE2LzAxLzAxJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wMSc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDInOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzAzJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNCc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDUnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzA2JzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNyc6ICfkvJEnXG5cdFx0fSxcblx0XHRwcmljZToge1xuXHRcdFx0JzIwMTYvMTAvMDEnOiAnNTY2Jyxcblx0XHRcdCcyMDE2LzEwLzAyJzogJzU3NicsXG5cdFx0XHQnMjAxNi8xMC8wMyc6ICc1NTUnLFxuXHRcdFx0JzIwMTYvMTAvMDQnOiAnNTUwJyxcblx0XHRcdCcyMDE2LzEwLzA1JzogJzQ1MCcsXG5cdFx0XHQnMjAxNi8xMC8wNic6ICc2NTAnLFxuXHRcdFx0JzIwMTYvMTAvMDcnOiAnNjU1Jyxcblx0XHRcdCcyMDE2LzEwLzA4JzogJzUwMCcsXG5cdFx0XHQnMjAxNi8xMC8wOSc6ICczMDAnXG5cdFx0fVxuXHR9XG59LFxuZGF5QWRkb24oZGF5aW5mbyl7XG5cdGxldCB7YWRkb25EYXRhfSA9IHRoaXMuc3RhdGVcblx0bGV0IHtkYXRlfSA9IGRheWluZm9cblx0bGV0IGRhdGVTdHIgPSBkYXRlRm9ybWF0KGRhdGUsICd5eXl5L01NL2RkJylcblx0bGV0IHJlc3N0ciwgdmFsLCBkb21zID0gW11cblx0Zm9yKHZhciBrZXkgaW4gYWRkb25EYXRhKXtcblx0XHRyZXNzdHIgPSBhZGRvbkRhdGFba2V5XVtkYXRlU3RyXVxuXHRcdGlmKHJlc3N0cil7XG5cdFx0XHRkb21zLnB1c2goPHNwYW4gY2xhc3NOYW1lPXsnZGF0ZS1kYXktJytrZXl9IGtleT17a2V5fT57cmVzc3RyfTwvc3Bhbj4pXG5cdFx0fVxuXHR9XG5cdHJldHVybiBkb21zXG59LFxuPERhdGVwaWNrZXIgIGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLWRlbW9cIiBpbmxpbmUgIHNlbGVjdGVkPXtub3d9IGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0vPiBkYXlBZGRvbj17dGhpcy5kYXlBZGRvbn1gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1kZW1vXCIgaW5saW5lIHNlbGVjdGVkPXtub3d9IGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0gZGF5QWRkb249e3RoaXMuZGF5QWRkb24uYmluZCh0aGlzKX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuQXBwLmRlZmF1bHRQcm9wcyA9IHtcblx0ZGF0ZTogbm93LFxuXHRpc2ZpbGw6IHRydWVcbn1cblxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiLyoqXHJcbiAqIGRhdGUgYXBp5bCB6KOFXHJcbiAqIEBhdXRob3IgSm9lIExpdVxyXG4gKiBAZW1haWwgaWNhcmV1LmpvZUBnbWFpbC5jb21cclxuICovXHJcbmZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSwgZm9ybWF0KXtcclxuICBpZighZGF0ZSkgcmV0dXJuICcnO1xyXG4gIHZhciB3ZWVrcyA9IFsn5pelJywn5LiAJywn5LqMJywn5LiJJywn5ZubJywn5LqUJywn5YWtJ107XHJcbiAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGZvcm1hdCA9IGRhdGU7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gKHR5cGVvZiBkYXRlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGF0ZT09PSdzdHJpbmcnKSA/IG5ldyBEYXRlKGRhdGUpIDogZGF0ZTtcclxuICAgIHZhciBtYXAgPSB7XHJcbiAgICAgICAgXCJNXCI6IGRhdGUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9XHJcbiAgICAgICAgXCJkXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpVxyXG4gICAgICAgIFwiaFwiOiBkYXRlLmdldEhvdXJzKCksIC8v5bCP5pe2XHJcbiAgICAgICAgXCJtXCI6IGRhdGUuZ2V0TWludXRlcygpLCAvL+WIhlxyXG4gICAgICAgIFwic1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5JcclxuICAgICAgICBcInFcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuICAgICAgICBcIlNcIjogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgLy/mr6vnp5JcclxuICAgICAgICBcIldcIjogd2Vla3NbZGF0ZS5nZXREYXkoKV0gLy/lkahcclxuICAgIH07XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU1ddKSsvZywgZnVuY3Rpb24oYWxsLCB0KXtcclxuICAgICAgICB2YXIgdiA9IG1hcFt0XTtcclxuICAgICAgICBpZih2ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihhbGwubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aC0yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0ID09PSAneScpe1xyXG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIGFsbC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0O1xyXG59XHJcblxyXG5sZXQgdG9kYXlTdGFydCA9IG5ldyBEYXRlKCkuc2V0SG91cnMoMCwwLDAsMClcclxubGV0IGRhdGVEaWZmID0gKHRpbWVzdGFwZSwgdGltZSkgPT4gTWF0aC5jZWlsKCh0aW1lc3RhcGUgLSAodGltZT90aW1lOit0b2RheVN0YXJ0KSkvKDM2MDAqMTAwMCoyNCkpXHJcblxyXG5leHBvcnQge1xyXG4gICAgZGF0ZUZvcm1hdCxcclxuICAgIGRhdGVEaWZmLFxyXG4gICAgdG9kYXlTdGFydFxyXG59Il19
