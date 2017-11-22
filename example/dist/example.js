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
					'\n--------------------------\nProps And CALLBACK OR APIs\n--------------------------\nselected: React.PropTypes.object,\t//default date, not defined, it will be now(), defined \'\' will be empty value\nformat: React.PropTypes.string,     //format date\nisfill: React.PropTypes.bool,\t    //show prefix-prev prefix-next month\nmonths: React.PropTypes.number,\t\t//show multi-panes by months\n\ntime: React.PropTypes.bool,         //show time select @todo\n\nmin: React.PropTypes.object,        //select date range min\nmax: React.PropTypes.object,        //select date range max\n\n\n\nstart: React.PropTypes.object,\t    //selected time is a range, start date\nend: React.PropTypes.object,\t    //selected time is a range, start date\n\nclassName: React.PropTypes.string,  // custom class\ndisabled: React.PropTypes.bool,     //input can\'t change\nautoHide: React.PropTypes.bool,     //selected auto hide\ninline: React.PropTypes.bool,       //inline\nlang: React.PropTypes.oneOf([\'cn\', \'en\'])\n\nfestival: React.PropTypes.bool, \t//show festival\nhaslunar: React.PropTypes.bool, \t//show lunar\n\nonFocus: React.PropTypes.func,\t\t//args (event, picker)\nonBlur: React.PropTypes.func,\t\t//args (event, picker)\nonChange: React.PropTypes.func,\t\t//args (dayinfo, picker)\ndayAddon: React.PropTypes.func \t\t//args (dayinfo)\n\n//dayAddon, add data for day, and need to return dom,\n//the return value will be insert to day each element. pls see last demo\n//  placeholder\n//  children\n \n\n================================\nvar now = new Date(\'2016/10/15\')\nvar min = new Date(\'2016/10/10\')\nvar max = new Date(\'2016/10/20\')\n\n\n=============================\nCLASS IN　DAY\ndate-nocurrent:\t\t不在当前月范围内\ndate-point:\t\t\t当前选择范围最大/小值\ndate-selected:\t\t当前选择值\ndate-disabled:\t\t在当前月范围内但不可用\ndate-range:\t\t\t当前选择范围所有值\ndate-hover:\t\t\t当前hover的day\n=============================\n\t\t\t\t\t'
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
						'\n<span>{linkageValue.toString()}</span>\n<Datepicker selected={linkageValue}\n\tonChange={this.linkageChange.bind(this)} />\n<Datepicker selected={linkageValue}\n\tonChange={this.linkageChange.bind(this)} />\n<Datepicker start={linkageValue} end={new Date(\'2017-09-28\')}\n\tonChange={this.linkageChange.bind(this)} />'
					),
					_react2['default'].createElement(
						'span',
						null,
						linkageValue.toString()
					),
					_react2['default'].createElement(Datepicker, { selected: linkageValue, onChange: this.linkageChange.bind(this) }),
					_react2['default'].createElement(Datepicker, { selected: linkageValue, onChange: this.linkageChange.bind(this) }),
					_react2['default'].createElement(Datepicker, { start: linkageValue, end: new Date('2017-09-28'), onChange: this.linkageChange.bind(this) })
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
					_react2['default'].createElement(Datepicker, { inline: true, min: min, max: max, selected: now })
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
						'h5',
						null,
						'complex demo: the demo of start end min max and end is null '
					),
					_react2['default'].createElement(
						'pre',
						{ className: 'demo-code' },
						'<Datepicker start={min} end={max}>\n\t<div className="type_item"> <span className="ico_date"></span><input/> </div>\n</Datepicker>',
						'\n\nRENDER DOM IS:\n<div class="date-inputs">\n    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-10"></div>\n    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-20"></div>\n</div>\n\nPLS CHECK CONSOLE about onChange callback to get dateInfo.status object about \'start end\'\n'
					),
					_react2['default'].createElement(
						Datepicker,
						{ min: new Date('2016-10-08 00:00:00'), max: new Date('2016-10-28 00:00:00'), start: min, end: max, placeholder: 'departDate', placeholderEnd: 'arrivalDate', onChange: function (dateInfo) {
								console.log(dateInfo, 'dateInfo');
							} },
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
					_react2['default'].createElement('br', null),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement('br', null),
					_react2['default'].createElement(
						Datepicker,
						{ min: new Date('2016-10-08 00:00:00'), months: 2, isfill: true, start: min, end: "", placeholder: '出发日期', placeholderEnd: '返回日期', onChange: function (dateInfo) {
								console.log(dateInfo, 'dateInfo');
							} },
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUJDQWlDLE9BQU87Ozs7NkJBT2YsdUJBQXVCOztBQU5oRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7O0lBRzFCLEdBQUc7V0FBSCxHQUFHOzs7Ozs7OztBQU1HLFVBTk4sR0FBRyxDQU1JLEtBQUssRUFBRTt3QkFOZCxHQUFHOztBQU9ELDZCQVBGLEdBQUcsNkNBT0ssS0FBSyxFQUFFO0FBQ25CLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixlQUFZLEVBQUUsWUFBWTtBQUMxQixZQUFTLEVBQUU7QUFDVixRQUFJLEVBQUU7QUFDTCxpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0tBQ2pCO0FBQ0QsU0FBSyxFQUFFO0FBQ04saUJBQVksRUFBRSxNQUFNO0FBQ3BCLGlC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LEdBQUMsQ0FBQyxVQUFVLENBQUEsQ0FBQyxJQUFHLElBQUksR0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFBLEFBQUMsQ0FBQztDQUFBLENBQUE7O0FBRW5HLElBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFZLElBQUksRUFBRSxHQUFHLEVBQUM7QUFDN0IsT0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBQzlCLFdBQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQTtDQUMxQyxDQUFBOztBQUVELElBQUksUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFZLElBQUksRUFBRSxHQUFHLEVBQUM7QUFDOUIsV0FBTyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtDQUN2QixDQUFBOztRQUdHLFVBQVUsR0FBVixVQUFVO1FBQ2IsUUFBUSxHQUFSLFFBQVE7UUFDUixLQUFLLEdBQUwsS0FBSztRQUNMLFVBQVUsR0FBVixVQUFVO1FBQ1YsVUFBVSxHQUFWLFVBQVU7UUFDVixPQUFPLEdBQVAsT0FBTztRQUNQLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIERhdGVwaWNrZXIgPSByZXF1aXJlKCdyZWFjdC1kYXRlcGlja2VyLXBsdXMnKTtcbnZhciBub3cgPSBuZXcgRGF0ZSgnMjAxNi8xMC8xNScpXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxudmFyIG1heCA9IG5ldyBEYXRlKCcyMDE2LzEwLzIwJylcblxuaW1wb3J0IHtkYXRlRm9ybWF0fSBmcm9tICcuLi8uLi9zcmMvZGF0ZS1mb3JtYXQnXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBwcm9wVHlwZXM6e1xuXHQvLyBcdGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdC8vIFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblx0Ly8gXHQvLyBhZGRvbkRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcblx0Ly8gfSxcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaW5rYWdlVmFsdWU6ICcyMDE3LTA5LTE1Jyxcblx0XHRcdGFkZG9uRGF0YToge1xuXHRcdFx0XHRyZXN0OiB7XG5cdFx0XHRcdFx0JzIwMTYvMDEvMDEnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMSc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAyJzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDMnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNCc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA1JzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDYnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNyc6ICfkvJEnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaWNlOiB7XG5cdFx0XHRcdFx0JzIwMTYvMTAvMDEnOiAn77+lNTY2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMic6ICfvv6U1NzYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAzJzogJ++/pTU1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDQnOiAn77+lNTUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNSc6ICfvv6U0NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA2JzogJ++/pTY1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDcnOiAn77+lNjU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wOCc6ICfvv6U1MDAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA5JzogJ++/pTMwMCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTAnOiAn77+lNTY2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xMSc6ICfvv6U1NzYnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzEyJzogJ++/pTU1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTMnOiAn77+lNTUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNCc6ICfvv6U0NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE1JzogJ++/pTY1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTYnOiAn77+lNjU1Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNyc6ICfvv6U1MDAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE4JzogJ++/pTMwMCcsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0b25Gb2N1cyhldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQsICdvbkZvY3VzJylcblx0fVxuXHRvbkJsdXIoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LCAnb25CbHVyJylcblx0fVxuXHRvbkNoYW5nZShkYXRlaW5mbyl7XG5cdFx0Y29uc29sZS5sb2coZGF0ZWluZm8sICdvbkNoYW5nZScpXG5cdH1cblx0bGlua2FnZUNoYW5nZShkYXRlSW5mbyl7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7J2xpbmthZ2VWYWx1ZSc6IGRhdGVJbmZvLmRhdGV9KVxuXHR9XG5cdGRheUFkZG9uKGRheWluZm8pe1xuXHRcdGxldCB7YWRkb25EYXRhLCBsaW5rYWdlVmFsdWV9ID0gdGhpcy5zdGF0ZVxuXHRcdGxldCB7ZGF0ZX0gPSBkYXlpbmZvXG5cdFx0bGV0IGRhdGVTdHIgPSBkYXRlRm9ybWF0KGRhdGUsICd5eXl5L01NL2RkJylcblx0XHRsZXQgcmVzc3RyLCB2YWwsIGRvbXMgPSBbXVxuXHRcdGZvcih2YXIga2V5IGluIGFkZG9uRGF0YSl7XG5cdFx0XHRyZXNzdHIgPSBhZGRvbkRhdGFba2V5XVtkYXRlU3RyXVxuXHRcdFx0aWYocmVzc3RyKXtcblx0XHRcdFx0ZG9tcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17J2RhdGUtZGF5LScra2V5fSBrZXk9e2tleX0+e3Jlc3N0cn08L3NwYW4+KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZG9tc1xuXHR9XG5cblxuXHRyZW5kZXIgKCkge1xuXHRcdGxldCB7YWRkb25EYXRhLCBsaW5rYWdlVmFsdWV9ID0gdGhpcy5zdGF0ZVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8tbGlzdCBjbGVhcmZpeFwiPlxuXHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdHtgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuUHJvcHMgQW5kIENBTExCQUNLIE9SIEFQSXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5zZWxlY3RlZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdC8vZGVmYXVsdCBkYXRlLCBub3QgZGVmaW5lZCwgaXQgd2lsbCBiZSBub3coKSwgZGVmaW5lZCAnJyB3aWxsIGJlIGVtcHR5IHZhbHVlXG5mb3JtYXQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAgICAvL2Zvcm1hdCBkYXRlXG5pc2ZpbGw6IFJlYWN0LlByb3BUeXBlcy5ib29sLFx0ICAgIC8vc2hvdyBwcmVmaXgtcHJldiBwcmVmaXgtbmV4dCBtb250aFxubW9udGhzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFx0XHQvL3Nob3cgbXVsdGktcGFuZXMgYnkgbW9udGhzXG5cbnRpbWU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAgIC8vc2hvdyB0aW1lIHNlbGVjdCBAdG9kb1xuXG5taW46IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1pblxubWF4OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtYXhcblxuXG5cbnN0YXJ0OiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5lbmQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcblxuY2xhc3NOYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgLy8gY3VzdG9tIGNsYXNzXG5kaXNhYmxlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL2lucHV0IGNhbid0IGNoYW5nZVxuYXV0b0hpZGU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9zZWxlY3RlZCBhdXRvIGhpZGVcbmlubGluZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgIC8vaW5saW5lXG5sYW5nOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydjbicsICdlbiddKVxuXG5mZXN0aXZhbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGZlc3RpdmFsXG5oYXNsdW5hcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsIFx0Ly9zaG93IGx1bmFyXG5cbm9uRm9jdXM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5vbkJsdXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGV2ZW50LCBwaWNrZXIpXG5vbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZGF5aW5mbywgcGlja2VyKVxuZGF5QWRkb246IFJlYWN0LlByb3BUeXBlcy5mdW5jIFx0XHQvL2FyZ3MgKGRheWluZm8pXG5cbi8vZGF5QWRkb24sIGFkZCBkYXRhIGZvciBkYXksIGFuZCBuZWVkIHRvIHJldHVybiBkb20sXG4vL3RoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSBpbnNlcnQgdG8gZGF5IGVhY2ggZWxlbWVudC4gcGxzIHNlZSBsYXN0IGRlbW9cbi8vICBwbGFjZWhvbGRlclxuLy8gIGNoaWxkcmVuXG4gXFxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vdyA9IG5ldyBEYXRlKCcyMDE2LzEwLzE1JylcXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxcbnZhciBtYXggPSBuZXcgRGF0ZSgnMjAxNi8xMC8yMCcpXG5cblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkNMQVNTIElO44CAREFZXG5kYXRlLW5vY3VycmVudDpcdFx05LiN5Zyo5b2T5YmN5pyI6IyD5Zu05YaFXG5kYXRlLXBvaW50Olx0XHRcdOW9k+WJjemAieaLqeiMg+WbtOacgOWkpy/lsI/lgLxcbmRhdGUtc2VsZWN0ZWQ6XHRcdOW9k+WJjemAieaLqeWAvFxuZGF0ZS1kaXNhYmxlZDpcdFx05Zyo5b2T5YmN5pyI6IyD5Zu05YaF5L2G5LiN5Y+v55SoXG5kYXRlLXJhbmdlOlx0XHRcdOW9k+WJjemAieaLqeiMg+WbtOaJgOacieWAvFxuZGF0ZS1ob3ZlcjpcdFx0XHTlvZPliY1ob3ZlcueahGRheVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3ByZT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDEyIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezEyfSBpc2ZpbGw9e3RydWV9IGlubGluZS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsxMn0gaXNmaWxsPXt0cnVlfSBpbmxpbmUvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kZWFkIHNpbXBsZSBkYXRlcGlja2VyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlci8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZW1wdHkgdmFsdWUgYW5kIHBsYWNlaG9sZGVyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGRhdGUgc3RyaW5nIHZhbHVlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIjIwMTgtMDEtMDFcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBzZWxmIGRlZmluZWQgY2xhc3NOYW1lPC9oNT5cblx0XHRcdFx0XHQ8cD5pbnB1dCBDb21wb25lbnQgcm9vdCBlbGVtZW50IHdpbGwgYWRkIHlvdXIgIHNlbGYgZGVmaW5lZCBjbGFzc05hbWUsICdteS1kYXRlcGlja2VyJzxici8+XG5cdFx0XHRcdFx0XHRhbmQgbm90IGlubGluZSBkYXRlcGlja2VyIHBhbmUgQ29tcG9uZW50IHJvb3QgZWxlbWVudCB3aWxsIGFkZCAgeW91ciAgc2VsZiBkZWZpbmVkIGNsYXNzTmFtZSArICdteS1kYXRlcGlja2VyLXBhbmVzJzwvcD5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGNsYXNzTmFtZT1cIm15LWRhdGVwaWNrZXJcIi8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgY2xhc3NOYW1lPVwibXktZGF0ZXBpY2tlclwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGxhbmcgY2hpbmVzZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbGFuZz0nY24nLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBsYW5nPSdjbicvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZGVmYXVsdCBkYXRlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD17bm93fS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e25vd30vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHZhbHVlIGlzIGxpbmthZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YFxuPHNwYW4+e2xpbmthZ2VWYWx1ZS50b1N0cmluZygpfTwvc3Bhbj5cbjxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9XG5cdG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbjxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9XG5cdG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbjxEYXRlcGlja2VyIHN0YXJ0PXtsaW5rYWdlVmFsdWV9IGVuZD17bmV3IERhdGUoJzIwMTctMDktMjgnKX1cblx0b25DaGFuZ2U9e3RoaXMubGlua2FnZUNoYW5nZS5iaW5kKHRoaXMpfSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxzcGFuPntsaW5rYWdlVmFsdWUudG9TdHJpbmcoKX08L3NwYW4+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e2xpbmthZ2VWYWx1ZX0gb25DaGFuZ2U9e3RoaXMubGlua2FnZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzdGFydD17bGlua2FnZVZhbHVlfSBlbmQ9e25ldyBEYXRlKCcyMDE3LTA5LTI4Jyl9IG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBhdXRvSGlkZSB3aGVuIHNlbGVjdGVkPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBhdXRvSGlkZT17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGF1dG9IaWRlPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgZGlzYWJsZWQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGRpc2FibGVkPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgZGlzYWJsZWQ9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBpc2ZpbGwgdHJ1ZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaXNmaWxsPXt0aGlzLnByb3BzLmlzZmlsbH0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlzZmlsbD17dGhpcy5wcm9wcy5pc2ZpbGx9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+aW5saW5lIGRhdGVwaWNrZXI8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggbWluIGFuZCBtYXggcmFuZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSBtaW49e21pbn0gbWF4PXttYXh9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgaW5saW5lIG1pbj17bWlufSBtYXg9e21heH0gc2VsZWN0ZWQ9e25vd30gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmJpLWRhdGVwaWNrZXIgd2l0aCBzdGFydCBhbmQgZW5kIHJhbmdlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRlZmluZWQgeW91ciBpbnB1dCBkb20sIHtgPGlucHV0Lz5gfSBlbGVtZW50IGp1c3QgcGxhY2Vob2xkIGZvciByZWFsIHJlYWN0IGlucHV0PC9oNT5cblx0XHRcdFx0XHQ8aDU+Y29tcGxleCBkZW1vOiB0aGUgZGVtbyBvZiBzdGFydCBlbmQgbWluIG1heCBhbmQgZW5kIGlzIG51bGwgPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0+XG5cdDxkaXYgY2xhc3NOYW1lPVwidHlwZV9pdGVtXCI+IDxzcGFuIGNsYXNzTmFtZT1cImljb19kYXRlXCI+PC9zcGFuPjxpbnB1dC8+IDwvZGl2PlxuPC9EYXRlcGlja2VyPmB9XG5cbntgXG5cblJFTkRFUiBET00gSVM6XG48ZGl2IGNsYXNzPVwiZGF0ZS1pbnB1dHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidHlwZV9pdGVtXCI+PHNwYW4gY2xhc3M9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIyMDE2LTEwLTEwXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR5cGVfaXRlbVwiPjxzcGFuIGNsYXNzPVwiaWNvX2RhdGVcIj5pY29uPC9zcGFuPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMjAxNi0xMC0yMFwiPjwvZGl2PlxuPC9kaXY+XG5cblBMUyBDSEVDSyBDT05TT0xFIGFib3V0IG9uQ2hhbmdlIGNhbGxiYWNrIHRvIGdldCBkYXRlSW5mby5zdGF0dXMgb2JqZWN0IGFib3V0ICdzdGFydCBlbmQnXG5gfVxuXG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbWluPXtuZXcgRGF0ZSgnMjAxNi0xMC0wOCAwMDowMDowMCcpfSBtYXg9e25ldyBEYXRlKCcyMDE2LTEwLTI4IDAwOjAwOjAwJyl9IHN0YXJ0PXttaW59IGVuZD17bWF4fSBwbGFjZWhvbGRlcj1cImRlcGFydERhdGVcIiBwbGFjZWhvbGRlckVuZD1cImFycml2YWxEYXRlXCIgIG9uQ2hhbmdlPXtmdW5jdGlvbihkYXRlSW5mbyl7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRlSW5mbyAsJ2RhdGVJbmZvJylcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHlwZV9pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb19kYXRlXCI+aWNvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRGF0ZXBpY2tlcj5cblx0XHRcdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyICAgbWluPXtuZXcgRGF0ZSgnMjAxNi0xMC0wOCAwMDowMDowMCcpfSBtb250aHM9ezJ9IGlzZmlsbCBzdGFydD17bWlufSBlbmQ9e1wiXCJ9IHBsYWNlaG9sZGVyPVwi5Ye65Y+R5pel5pyfXCIgcGxhY2Vob2xkZXJFbmQ9XCLov5Tlm57ml6XmnJ9cIiBvbkNoYW5nZT17ZnVuY3Rpb24oZGF0ZUluZm8pe1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0ZUluZm8gLCdkYXRlSW5mbycpXG5cdFx0XHRcdFx0fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvX3NlYXJjaF90eXBlIGljb19zZWFyY2hfZGRhdGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRGF0ZXBpY2tlcj5cblx0XHRcdFx0XHQ8c3R5bGU+e1xuXHRcdFx0XHRcdFx0YFxuXHRcdFx0XHRcdFx0LnR5cGVfaXRlbSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnR5cGVfaXRlbSBpbnB1dHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAzNnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmljb19kYXRlIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2M7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4OyBoZWlnaHQ6MjdweDtsaW5lLWhlaWdodDoyN3B4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICM5OGVcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnaDpjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmJpLWRhdGVwaWNrZXIgd2l0aCBzdGFydCBhbmQgZW5kIHJhbmdlLCBhbmQgc2hvdyAyIG1vbnRocyA8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSBtb250aHM9ezJ9ICBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gbW9udGhzPXsyfSAgaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGNhbGxiYWNrcyBhbGVydCwgcGxzIGNoZWNrIGF0IGNvbnNvbGU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAyIG1vbnRoIGlubGluZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggMiBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsyfSBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDMgbW9udGggcG9wdXA8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG1vbnRocz17M30gaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXszfSBpc2ZpbGw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGZlc3RpdmFsPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggbHVuYXIobHVuYXIgYXV0byBpbmNsdWRlIHRlcm0gYW5kIGxhbmcgaXMgJ2NuJyk8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggY24gaG9saWRheSBsYWJlbCgn5LyRJyk8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YFxuc3RhdGljIGluaXRpYWxTdGF0ZSgpIHtcblx0YWRkb25EYXRhOiB7XG5cdFx0cmVzdDoge1xuXHRcdFx0JzIwMTYvMDEvMDEnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzAxJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wMic6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDMnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzA0JzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNSc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDYnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzA3JzogJ+S8kSdcblx0XHR9LFxuXHRcdHByaWNlOiB7XG5cdFx0XHQnMjAxNi8xMC8wMSc6ICc1NjYnLFxuXHRcdFx0JzIwMTYvMTAvMDInOiAnNTc2Jyxcblx0XHRcdCcyMDE2LzEwLzAzJzogJzU1NScsXG5cdFx0XHQnMjAxNi8xMC8wNCc6ICc1NTAnLFxuXHRcdFx0JzIwMTYvMTAvMDUnOiAnNDUwJyxcblx0XHRcdCcyMDE2LzEwLzA2JzogJzY1MCcsXG5cdFx0XHQnMjAxNi8xMC8wNyc6ICc2NTUnLFxuXHRcdFx0JzIwMTYvMTAvMDgnOiAnNTAwJyxcblx0XHRcdCcyMDE2LzEwLzA5JzogJzMwMCdcblx0XHR9XG5cdH1cbn0sXG5kYXlBZGRvbihkYXlpbmZvKXtcblx0bGV0IHthZGRvbkRhdGF9ID0gdGhpcy5zdGF0ZVxuXHRsZXQge2RhdGV9ID0gZGF5aW5mb1xuXHRsZXQgZGF0ZVN0ciA9IGRhdGVGb3JtYXQoZGF0ZSwgJ3l5eXkvTU0vZGQnKVxuXHRsZXQgcmVzc3RyLCB2YWwsIGRvbXMgPSBbXVxuXHRmb3IodmFyIGtleSBpbiBhZGRvbkRhdGEpe1xuXHRcdHJlc3N0ciA9IGFkZG9uRGF0YVtrZXldW2RhdGVTdHJdXG5cdFx0aWYocmVzc3RyKXtcblx0XHRcdGRvbXMucHVzaCg8c3BhbiBjbGFzc05hbWU9eydkYXRlLWRheS0nK2tleX0ga2V5PXtrZXl9PntyZXNzdHJ9PC9zcGFuPilcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRvbXNcbn0sXG48RGF0ZXBpY2tlciAgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItZGVtb1wiIGlubGluZSAgc2VsZWN0ZWQ9e25vd30gaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfS8+IGRheUFkZG9uPXt0aGlzLmRheUFkZG9ufWB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLWRlbW9cIiBpbmxpbmUgc2VsZWN0ZWQ9e25vd30gaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfSBkYXlBZGRvbj17dGhpcy5kYXlBZGRvbi5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuXHRkYXRlOiBub3csXG5cdGlzZmlsbDogdHJ1ZVxufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCIvKipcclxuICogZGF0ZSBhcGnlsIHoo4VcclxuICogQGF1dGhvciBKb2UgTGl1XHJcbiAqIEBlbWFpbCBpY2FyZXUuam9lQGdtYWlsLmNvbVxyXG4gKi9cclxuZnVuY3Rpb24gZGF0ZU9iamVjdChkYXRlKXtcclxuXHRpZighZGF0ZSkgcmV0dXJuIGRhdGVcclxuXHJcblx0cmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBEYXRlID8gZGF0ZSA6IChcclxuXHRcdC8vd2l0aCBob3VycyBvciBub3RcclxuXHRcdHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiBkYXRlLmxlbmd0aDw9MTAgP1xyXG5cdFx0bmV3IERhdGUoZGF0ZSArICcgMDA6MDA6MDAnKTpcclxuXHRcdG5ldyBEYXRlKGRhdGUpXHJcblx0KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsIGZvcm1hdCl7XHJcbiAgaWYoIWRhdGUpIHJldHVybiAnJztcclxuICB2YXIgd2Vla3MgPSBbJ+aXpScsJ+S4gCcsJ+S6jCcsJ+S4iScsJ+WbmycsJ+S6lCcsJ+WFrSddO1xyXG4gIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBmb3JtYXQgPSBkYXRlO1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZGF0ZSA9IGRhdGVPYmplY3QoZGF0ZSk7XHJcbiAgICB2YXIgbWFwID0ge1xyXG4gICAgICAgIFwiTVwiOiBkYXRlLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vVxyXG4gICAgICAgIFwiZFwiOiBkYXRlLmdldERhdGUoKSwgLy/ml6VcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtlxyXG4gICAgICAgIFwibVwiOiBkYXRlLmdldE1pbnV0ZXMoKSwgLy/liIZcclxuICAgICAgICBcInNcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXHJcbiAgICAgICAgXCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIC8v5q+r56eSXHJcbiAgICAgICAgXCJXXCI6IHdlZWtzW2RhdGUuZ2V0RGF5KCldIC8v5ZGoXHJcbiAgICB9O1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoLyhbeU1kaG1zcVNXXSkrL2csIGZ1bmN0aW9uKGFsbCwgdCl7XHJcbiAgICAgICAgdmFyIHYgPSBtYXBbdF07XHJcbiAgICAgICAgaWYodiAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoYWxsLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICAgICAgdiA9ICcwJyArIHY7XHJcbiAgICAgICAgICAgICAgICB2ID0gdi5zdWJzdHIodi5sZW5ndGgtMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodCA9PT0gJ3knKXtcclxuICAgICAgICAgICAgcmV0dXJuIChkYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBhbGwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1hdDtcclxufVxyXG52YXIgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcbnZhciB0b2RheVN0YXJ0ID0gdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMClcclxubGV0IGRhdGVEaWZmID0gKHRpbWVzdGFwZSwgdGltZSkgPT4gTWF0aC5jZWlsKCh0aW1lc3RhcGUgLSAodGltZT90aW1lOit0b2RheVN0YXJ0KSkvKDM2MDAqMTAwMCoyNCkpXHJcblxyXG52YXIgcGx1c0RheSA9IGZ1bmN0aW9uKGRhdGUsIG51bSl7XHJcbiAgICBudW0gPSBudW0gIT09IHZvaWQgMCA/IG51bSA6IDFcclxuICAgIHJldHVybiBuZXcgRGF0ZSgrZGF0ZSArIDM2MDAwMDAqMjQqbnVtKVxyXG59XHJcblxyXG52YXIgbWludXNEYXkgPSBmdW5jdGlvbihkYXRlLCBudW0pe1xyXG4gICAgcmV0dXJuIHBsdXNEYXkoLW51bSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcblx0ZGF0ZURpZmYsXHJcblx0dG9kYXksXHJcblx0dG9kYXlTdGFydCxcclxuXHRkYXRlT2JqZWN0LFxyXG5cdHBsdXNEYXksXHJcblx0bWludXNEYXlcclxufSJdfQ==
