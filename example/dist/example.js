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
			linkageValue: '2017-09-15',
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
		key: 'linkageChange',
		value: function linkageChange(dateInfo) {
			this.setState({ 'linkageValue': dateInfo.date });
		}
	}, {
		key: 'dayAddon',
		value: function dayAddon(dayinfo) {
			var _state = this.state;
			var addonData = _state.addonData;
			var linkageValue = _state.linkageValue;
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
			var _state2 = this.state;
			var addonData = _state2.addonData;
			var linkageValue = _state2.linkageValue;

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
						'datepicker value is linkage'
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'\n<span>{linkageValue.toString()}</span>\n<Datepicker selected={linkageValue}\n\tonChange={this.linkageChange.bind(this)} />\n<Datepicker selected={linkageValue}\n\tonChange={this.linkageChange.bind(this)} />'
					),
					_react2['default'].createElement(
						'span',
						null,
						linkageValue.toString()
					),
					_react2['default'].createElement(Datepicker, { selected: linkageValue, onChange: this.linkageChange.bind(this) }),
					_react2['default'].createElement(Datepicker, { selected: linkageValue, onChange: this.linkageChange.bind(this) })
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
						Datepicker,
						{ months: 2, isfill: true, start: min, end: "", placeholder: '出发日期', placeholderEnd: '返回日期' },
						_react2['default'].createElement(
							'div',
							{ className: 'type_item' },
							_react2['default'].createElement('span', { className: 'ico_search_type ico_search_ddate' }),
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUJDQWlDLE9BQU87Ozs7NkJBT2YsdUJBQXVCOztBQU5oRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7O0lBRzFCLEdBQUc7V0FBSCxHQUFHOzs7Ozs7OztBQU1HLFVBTk4sR0FBRyxDQU1JLEtBQUssRUFBRTt3QkFOZCxHQUFHOztBQU9ELDZCQVBGLEdBQUcsNkNBT0ssS0FBSyxFQUFFO0FBQ25CLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixlQUFZLEVBQUUsWUFBWTtBQUMxQixZQUFTLEVBQUU7QUFDVixRQUFJLEVBQUU7QUFDTCxpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0tBQ2pCO0FBQ0QsU0FBSyxFQUFFO0FBQ04saUJBQVksRUFBRSxNQUFNO0FBQ3BCLGlC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RUFBQyxDQUFDLENBQUMsQ0FBQTtBQUM3QyxJQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxTQUFTLEVBQUUsSUFBSTtXQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxHQUFDLElBQUksR0FBQyxDQUFDLFVBQVUsQ0FBQSxDQUFDLElBQUcsSUFBSSxHQUFDLElBQUksR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO0NBQUEsQ0FBQTs7UUFHL0YsVUFBVSxHQUFWLFVBQVU7UUFDVixRQUFRLEdBQVIsUUFBUTtRQUNSLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIERhdGVwaWNrZXIgPSByZXF1aXJlKCdyZWFjdC1kYXRlcGlja2VyLXBsdXMnKTtcbnZhciBub3cgPSBuZXcgRGF0ZSgnMjAxNi8xMC8xNScpXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxudmFyIG1heCA9IG5ldyBEYXRlKCcyMDE2LzEwLzIwJylcblxuaW1wb3J0IHtkYXRlRm9ybWF0fSBmcm9tICcuLi8uLi9zcmMvZGF0ZS1mb3JtYXQnXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBwcm9wVHlwZXM6e1xuXHQvLyBcdGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdC8vIFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblx0Ly8gXHQvLyBhZGRvbkRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcblx0Ly8gfSxcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaW5rYWdlVmFsdWU6ICcyMDE3LTA5LTE1Jyxcblx0XHRcdGFkZG9uRGF0YToge1xuXHRcdFx0XHRyZXN0OiB7XG5cdFx0XHRcdFx0JzIwMTYvMDEvMDEnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMSc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAyJzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDMnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNCc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA1JzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDYnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNyc6ICfkvJEnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaWNlOiB7XG5cdFx0XHRcdFx0JzIwMTYvMTAvMDEnOiAn77+lNTY2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMic6ICfvv6U1NzYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAzJzogJ++/pTU1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDQnOiAn77+lNTUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNSc6ICfvv6U0NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA2JzogJ++/pTY1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDcnOiAn77+lNjU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wOCc6ICfvv6U1MDAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA5JzogJ++/pTMwMCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTAnOiAn77+lNTY2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xMSc6ICfvv6U1NzYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzEyJzogJ++/pTU1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTMnOiAn77+lNTUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNCc6ICfvv6U0NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE1JzogJ++/pTY1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTYnOiAn77+lNjU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNyc6ICfvv6U1MDAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE4JzogJ++/pTMwMCcsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0b25Gb2N1cyhldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQsICdvbkZvY3VzJylcblx0fVxuXHRvbkJsdXIoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LCAnb25CbHVyJylcblx0fVxuXHRvbkNoYW5nZShkYXRlaW5mbyl7XG5cdFx0Y29uc29sZS5sb2coZGF0ZWluZm8sICdvbkNoYW5nZScpXG5cdH1cblx0bGlua2FnZUNoYW5nZShkYXRlSW5mbyl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7J2xpbmthZ2VWYWx1ZSc6IGRhdGVJbmZvLmRhdGV9KVxuXHR9XG5cdGRheUFkZG9uKGRheWluZm8pe1xuXHRcdGxldCB7YWRkb25EYXRhLCBsaW5rYWdlVmFsdWV9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCB7ZGF0ZX0gPSBkYXlpbmZvXG5cdFx0bGV0IGRhdGVTdHIgPSBkYXRlRm9ybWF0KGRhdGUsICd5eXl5L01NL2RkJylcblx0XHRsZXQgcmVzc3RyLCB2YWwsIGRvbXMgPSBbXVxuXHRcdGZvcih2YXIga2V5IGluIGFkZG9uRGF0YSl7XG5cdFx0XHRyZXNzdHIgPSBhZGRvbkRhdGFba2V5XVtkYXRlU3RyXVxuXHRcdFx0aWYocmVzc3RyKXtcblx0XHRcdFx0ZG9tcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17J2RhdGUtZGF5LScra2V5fSBrZXk9e2tleX0+e3Jlc3N0cn08L3NwYW4+KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZG9tc1xuXHR9XG5cblxuXHRyZW5kZXIgKCkge1xuXHRcdGxldCB7YWRkb25EYXRhLCBsaW5rYWdlVmFsdWV9ID0gdGhpcy5zdGF0ZVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbGlzdCBjbGVhcmZpeFwiPlxuXHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdHtgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuUHJvcHMgQW5kIENBTExCQUNLIE9SIEFQSXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdC8vZGVmYXVsdCBkYXRlLCBub3QgZGVmaW5lZCwgaXQgd2lsbCBiZSBub3coKSwgZGVmaW5lZCAnJyB3aWxsIGJlIGVtcHR5IHZhbHVlXG5mb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAgICAvL2Zvcm1hdCBkYXRlXG5pc2ZpbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFx0ICAgIC8vc2hvdyBwcmVmaXgtcHJldiBwcmVmaXgtbmV4dCBtb250aFxubW9udGhzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFx0XHQvL3Nob3cgbXVsdGktcGFuZXMgYnkgbW9udGhzXG5cbnRpbWU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAgIC8vc2hvdyB0aW1lIHNlbGVjdCBAdG9kb1xuXG5taW46IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1pblxubWF4OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtYXhcblxuXG5cbnN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5lbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblxuY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgLy8gY3VzdG9tIGNsYXNzXG5kaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL2lucHV0IGNhbid0IGNoYW5nZVxuYXV0b0hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9zZWxlY3RlZCBhdXRvIGhpZGVcbmlubGluZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgIC8vaW5saW5lXG5sYW5nOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydjbicsICdlbiddKVxuXG5mZXN0aXZhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGZlc3RpdmFsXG5oYXNsdW5hcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGx1bmFyXG5cbm9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5vbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5vbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZGF5aW5mbywgcGlja2VyKVxuZGF5QWRkb246IFJlYWN0LlByb3BUeXBlcy5mdW5jIFx0XHQvL2FyZ3MgKGRheWluZm8pXG5cbi8vZGF5QWRkb24sIGFkZCBkYXRhIGZvciBkYXksIGFuZCBuZWVkIHRvIHJldHVybiBkb20sXG4vL3RoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSBpbnNlcnQgdG8gZGF5IGVhY2ggZWxlbWVudC4gcGxzIHNlZSBsYXN0IGRlbW9cbi8vICBwbGFjZWhvbGRlclxuLy8gIGNoaWxkcmVuXG4gXFxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vdyA9IG5ldyBEYXRlKCcyMDE2LzEwLzE1JylcXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxcbnZhciBtYXggPSBuZXcgRGF0ZSgnMjAxNi8xMC8yMCcpXG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9wcmU+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAxMiBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsxMn0gaXNmaWxsPXt0cnVlfSBpbmxpbmUvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17MTJ9IGlzZmlsbD17dHJ1ZX0gaW5saW5lLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGVhZCBzaW1wbGUgZGF0ZXBpY2tlcjwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGVtcHR5IHZhbHVlIGFuZCBwbGFjZWhvbGRlcjwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgc2VsZWN0ZWQ9XCJcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9XCJcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBkYXRlIHN0cmluZyB2YWx1ZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgc2VsZWN0ZWQ9XCJcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9XCIyMDE4LTAxLTAxXCIgcGxhY2Vob2xkZXI9XCJwbHMgaW5wdXQgc3RoLi4uXCIvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggc2VsZiBkZWZpbmVkIGNsYXNzTmFtZTwvaDU+XG5cdFx0XHRcdFx0PHA+aW5wdXQgQ29tcG9uZW50IHJvb3QgZWxlbWVudCB3aWxsIGFkZCB5b3VyICBzZWxmIGRlZmluZWQgY2xhc3NOYW1lLCAnbXktZGF0ZXBpY2tlcic8YnIvPlxuXHRcdFx0XHRcdFx0YW5kIG5vdCBpbmxpbmUgZGF0ZXBpY2tlciBwYW5lIENvbXBvbmVudCByb290IGVsZW1lbnQgd2lsbCBhZGQgIHlvdXIgIHNlbGYgZGVmaW5lZCBjbGFzc05hbWUgKyAnbXktZGF0ZXBpY2tlci1wYW5lcyc8L3A+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBjbGFzc05hbWU9XCJteS1kYXRlcGlja2VyXCIvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGNsYXNzTmFtZT1cIm15LWRhdGVwaWNrZXJcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBsYW5nIGNoaW5lc2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGxhbmc9J2NuJy8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbGFuZz0nY24nLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGRlZmF1bHQgZGF0ZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgc2VsZWN0ZWQ9e25vd30vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHNlbGVjdGVkPXtub3d9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB2YWx1ZSBpcyBsaW5rYWdlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2BcbjxzcGFuPntsaW5rYWdlVmFsdWUudG9TdHJpbmcoKX08L3NwYW4+XG48RGF0ZXBpY2tlciBzZWxlY3RlZD17bGlua2FnZVZhbHVlfVxuXHRvbkNoYW5nZT17dGhpcy5saW5rYWdlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG48RGF0ZXBpY2tlciBzZWxlY3RlZD17bGlua2FnZVZhbHVlfVxuXHRvbkNoYW5nZT17dGhpcy5saW5rYWdlQ2hhbmdlLmJpbmQodGhpcyl9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PHNwYW4+e2xpbmthZ2VWYWx1ZS50b1N0cmluZygpfTwvc3Bhbj5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD17bGlua2FnZVZhbHVlfSBvbkNoYW5nZT17dGhpcy5saW5rYWdlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e2xpbmthZ2VWYWx1ZX0gb25DaGFuZ2U9e3RoaXMubGlua2FnZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGF1dG9IaWRlIHdoZW4gc2VsZWN0ZWQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGF1dG9IaWRlPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgYXV0b0hpZGU9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBkaXNhYmxlZDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgZGlzYWJsZWQ9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBkaXNhYmxlZD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGlzZmlsbCB0cnVlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpc2ZpbGw9e3RoaXMucHJvcHMuaXNmaWxsfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaXNmaWxsPXt0aGlzLnByb3BzLmlzZmlsbH0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5pbmxpbmUgZGF0ZXBpY2tlcjwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaW5saW5lIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBtaW4gYW5kIG1heCByYW5nZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIG1pbj17bWlufSBtYXg9e21heH0gLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgbWluPXttaW59IG1heD17bWF4fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+YmktZGF0ZXBpY2tlciB3aXRoIHN0YXJ0IGFuZCBlbmQgcmFuZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGVmaW5lZCB5b3VyIGlucHV0IGRvbSwge2A8aW5wdXQvPmB9IGVsZW1lbnQganVzdCBwbGFjZWhvbGQgZm9yIHJlYWwgcmVhY3QgaW5wdXQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fT5cblx0PGRpdiBjbGFzc05hbWU9XCJ0eXBlX2l0ZW1cIj4gPHNwYW4gY2xhc3NOYW1lPVwiaWNvX2RhdGVcIj48L3NwYW4+PGlucHV0Lz4gPC9kaXY+XG48L0RhdGVwaWNrZXI+YH1cblxue2BcblxuUkVOREVSIERPTSBJUzpcbjxkaXYgY2xhc3M9XCJkYXRlLWlucHV0c1wiPlxuICAgIDxkaXYgY2xhc3M9XCJ0eXBlX2l0ZW1cIj48c3BhbiBjbGFzcz1cImljb19kYXRlXCI+aWNvbjwvc3Bhbj48aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIjIwMTYtMTAtMTBcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidHlwZV9pdGVtXCI+PHNwYW4gY2xhc3M9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIyMDE2LTEwLTIwXCI+PC9kaXY+XG48L2Rpdj5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSBwbGFjZWhvbGRlcj1cImRlcGFydERhdGVcIiBwbGFjZWhvbGRlckVuZD1cImFycml2YWxEYXRlXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInR5cGVfaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0RhdGVwaWNrZXI+XG5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciAgbW9udGhzPXsyfSBpc2ZpbGwgICBzdGFydD17bWlufSBlbmQ9e1wiXCJ9IHBsYWNlaG9sZGVyPVwi5Ye65Y+R5pel5pyfXCIgcGxhY2Vob2xkZXJFbmQ9XCLov5Tlm57ml6XmnJ9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVfaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29fc2VhcmNoX3R5cGUgaWNvX3NlYXJjaF9kZGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9EYXRlcGlja2VyPlxuXHRcdFx0XHRcdDxzdHlsZT57XG5cdFx0XHRcdFx0XHRgXG5cdFx0XHRcdFx0XHQudHlwZV9pdGVtIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQudHlwZV9pdGVtIGlucHV0e1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDM2cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuaWNvX2RhdGUge1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjphYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2RjYztcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMwcHg7IGhlaWdodDoyN3B4O2xpbmUtaGVpZ2h0OjI3cHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgIzk4ZVxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWdoOmNlbnRlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGB9XG5cdFx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+YmktZGF0ZXBpY2tlciB3aXRoIHN0YXJ0IGFuZCBlbmQgcmFuZ2UsIGFuZCBzaG93IDIgbW9udGhzIDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgc3RhcnQ9e21pbn0gZW5kPXttYXh9IG1vbnRocz17Mn0gIGlzZmlsbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSBtb250aHM9ezJ9ICBpc2ZpbGw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgY2FsbGJhY2tzIGFsZXJ0LCBwbHMgY2hlY2sgYXQgY29uc29sZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDIgbW9udGggaW5saW5lPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlubGluZSBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlubGluZSBpc2ZpbGw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAyIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlzZmlsbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17Mn0gaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggMyBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXszfSBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBtb250aHM9ezN9IGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZmVzdGl2YWw8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSBmZXN0aXZhbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSBmZXN0aXZhbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBsdW5hcihsdW5hciBhdXRvIGluY2x1ZGUgdGVybSBhbmQgbGFuZyBpcyAnY24nKTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBjbiBob2xpZGF5IGxhYmVsKCfkvJEnKTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgXG5zdGF0aWMgaW5pdGlhbFN0YXRlKCkge1xuXHRhZGRvbkRhdGE6IHtcblx0XHRyZXN0OiB7XG5cdFx0XHQnMjAxNi8wMS8wMSc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDEnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzAyJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wMyc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDQnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzA1JzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNic6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDcnOiAn5LyRJ1xuXHRcdH0sXG5cdFx0cHJpY2U6IHtcblx0XHRcdCcyMDE2LzEwLzAxJzogJzU2NicsXG5cdFx0XHQnMjAxNi8xMC8wMic6ICc1NzYnLFxuXHRcdFx0JzIwMTYvMTAvMDMnOiAnNTU1Jyxcblx0XHRcdCcyMDE2LzEwLzA0JzogJzU1MCcsXG5cdFx0XHQnMjAxNi8xMC8wNSc6ICc0NTAnLFxuXHRcdFx0JzIwMTYvMTAvMDYnOiAnNjUwJyxcblx0XHRcdCcyMDE2LzEwLzA3JzogJzY1NScsXG5cdFx0XHQnMjAxNi8xMC8wOCc6ICc1MDAnLFxuXHRcdFx0JzIwMTYvMTAvMDknOiAnMzAwJ1xuXHRcdH1cblx0fVxufSxcbmRheUFkZG9uKGRheWluZm8pe1xuXHRsZXQge2FkZG9uRGF0YX0gPSB0aGlzLnN0YXRlXG5cdGxldCB7ZGF0ZX0gPSBkYXlpbmZvXG5cdGxldCBkYXRlU3RyID0gZGF0ZUZvcm1hdChkYXRlLCAneXl5eS9NTS9kZCcpXG5cdGxldCByZXNzdHIsIHZhbCwgZG9tcyA9IFtdXG5cdGZvcih2YXIga2V5IGluIGFkZG9uRGF0YSl7XG5cdFx0cmVzc3RyID0gYWRkb25EYXRhW2tleV1bZGF0ZVN0cl1cblx0XHRpZihyZXNzdHIpe1xuXHRcdFx0ZG9tcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17J2RhdGUtZGF5LScra2V5fSBrZXk9e2tleX0+e3Jlc3N0cn08L3NwYW4+KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZG9tc1xufSxcbjxEYXRlcGlja2VyICBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1kZW1vXCIgaW5saW5lICBzZWxlY3RlZD17bm93fSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz4gZGF5QWRkb249e3RoaXMuZGF5QWRkb259YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItZGVtb1wiIGlubGluZSBzZWxlY3RlZD17bm93fSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9IGRheUFkZG9uPXt0aGlzLmRheUFkZG9uLmJpbmQodGhpcyl9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkFwcC5kZWZhdWx0UHJvcHMgPSB7XG5cdGRhdGU6IG5vdyxcblx0aXNmaWxsOiB0cnVlXG59XG5cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIi8qKlxyXG4gKiBkYXRlIGFwaeWwgeijhVxyXG4gKiBAYXV0aG9yIEpvZSBMaXVcclxuICogQGVtYWlsIGljYXJldS5qb2VAZ21haWwuY29tXHJcbiAqL1xyXG5mdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsIGZvcm1hdCl7XHJcbiAgaWYoIWRhdGUpIHJldHVybiAnJztcclxuICB2YXIgd2Vla3MgPSBbJ+aXpScsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrSddO1xyXG4gIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBmb3JtYXQgPSBkYXRlO1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9ICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGRhdGU9PT0nc3RyaW5nJykgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGU7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiTVwiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vVxyXG4gICAgICAgIFwiZFwiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtlxyXG4gICAgICAgIFwibVwiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIZcclxuICAgICAgICBcInNcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXHJcbiAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIC8v5q+r56eSXHJcbiAgICAgICAgXCJXXCI6IHdlZWtzW2RhdGUuZ2V0RGF5KCldIC8v5ZGoXHJcbiAgICB9O1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNXXSkrL2csIGZ1bmN0aW9uKGFsbCwgdCl7XHJcbiAgICAgICAgdmFyIHYgPSBtYXBbdF07XHJcbiAgICAgICAgaWYodiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoYWxsLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdiA9ICcwJyArIHY7XHJcbiAgICAgICAgICAgICAgICB2ID0gdi5zdWJzdHIodi5sZW5ndGgtMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodCA9PT0gJ3knKXtcclxuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxufVxyXG5cclxubGV0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsMCwwLDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcbiAgICBkYXRlRGlmZixcclxuICAgIHRvZGF5U3RhcnRcclxufSJdfQ==
