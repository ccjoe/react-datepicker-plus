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
			min: min,
			max: max,
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
						'<Datepicker inline min={this.state.min} max={this.state.max} selected={now} />'
					),
					_react2['default'].createElement(
						'button',
						{ onClick: (function () {
								this.setState({ min: new Date('2016/10/12'), max: new Date('2016/10/18') });
								console.log(this.state, 'state');
							}).bind(this) },
						'设置范围 ',
						'{min: new Date(\'2016/10/12\'), max: new Date(\'2016/10/18\')}'
					),
					_react2['default'].createElement(Datepicker, { inline: true, min: this.state.min, max: this.state.max, selected: now })
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
						'<Datepicker start={this.state.min} end={this.state.max}  />'
					),
					_react2['default'].createElement(Datepicker, { start: this.state.min, end: this.state.max })
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

},{}]},{},[1]);
