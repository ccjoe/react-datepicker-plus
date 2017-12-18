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
				_react2['default'].createElement('br', null),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(
					'h3',
					null,
					'Have a try'
				),
				_react2['default'].createElement('hr', null),
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
					_react2['default'].createElement(Datepicker, { months: 2, className: 'date-picker-demo', selected: now, haslunar: true, isfill: true, festival: true, dayAddon: this.dayAddon.bind(this) })
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
/*  */

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvVGVjaENsb3VkL3JlYWN0LWRhdGVwaWNrZXIvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyIsIkU6L2dpdC9UZWNoQ2xvdWQvcmVhY3QtZGF0ZXBpY2tlci9zcmMvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUJDQWlDLE9BQU87Ozs7NkJBT2YsdUJBQXVCOztBQU5oRCxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7QUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7O0lBRzFCLEdBQUc7V0FBSCxHQUFHOzs7Ozs7OztBQU1HLFVBTk4sR0FBRyxDQU1JLEtBQUssRUFBRTt3QkFOZCxHQUFHOztBQU9ELDZCQVBGLEdBQUcsNkNBT0ssS0FBSyxFQUFFO0FBQ25CLE1BQUksQ0FBQyxLQUFLLEdBQUc7QUFDWixNQUFHLEVBQUUsR0FBRztBQUNSLE1BQUcsRUFBRSxHQUFHO0FBQ1IsZUFBWSxFQUFFLFlBQVk7QUFDMUIsWUFBUyxFQUFFO0FBQ1YsUUFBSSxFQUFFO0FBQ0wsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztLQUNqQjtBQUNE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Q0FBQTtDQUMxQyxDQUFBOztBQUVELElBQUksUUFBUSxHQUFHLFNBQVgsUUFBUSxDQUFZLElBQUksRUFBRSxHQUFHLEVBQUM7QUFDOUIsV0FBTyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtDQUN2QixDQUFBOztRQUdHLFVBQVUsR0FBVixVQUFVO1FBQ2IsUUFBUSxHQUFSLFFBQVE7UUFDUixLQUFLLEdBQUwsS0FBSztRQUNMLFVBQVUsR0FBVixVQUFVO1FBQ1YsVUFBVSxHQUFWLFVBQVU7UUFDVixPQUFPLEdBQVAsT0FBTztRQUNQLFFBQVEsR0FBUixRQUFRIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIERhdGVwaWNrZXIgPSByZXF1aXJlKCdyZWFjdC1kYXRlcGlja2VyLXBsdXMnKTtcbnZhciBub3cgPSBuZXcgRGF0ZSgnMjAxNi8xMC8xNScpXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxudmFyIG1heCA9IG5ldyBEYXRlKCcyMDE2LzEwLzIwJylcblxuaW1wb3J0IHtkYXRlRm9ybWF0fSBmcm9tICcuLi8uLi9zcmMvZGF0ZS1mb3JtYXQnXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHQvLyBwcm9wVHlwZXM6e1xuXHQvLyBcdGRhdGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG5cdC8vIFx0aXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcblx0Ly8gXHQvLyBhZGRvbkRhdGE6IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcblx0Ly8gfSxcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtaW46IG1pbixcblx0XHRcdG1heDogbWF4LFxuXHRcdFx0bGlua2FnZVZhbHVlOiAnMjAxNy0wOS0xNScsXG5cdFx0XHRhZGRvbkRhdGE6IHtcblx0XHRcdFx0cmVzdDoge1xuXHRcdFx0XHRcdCcyMDE2LzAxLzAxJzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDEnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMic6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzAzJzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDQnOiAn5LyRJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNSc6ICfkvJEnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA2JzogJ+S8kScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDcnOiAn5LyRJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmljZToge1xuXHRcdFx0XHRcdCcyMDE2LzEwLzAxJzogJ++/pTU2NicsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDInOiAn77+lNTc2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wMyc6ICfvv6U1NTUnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA0JzogJ++/pTU1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDUnOiAn77+lNDUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wNic6ICfvv6U2NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzA3JzogJ++/pTY1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMDgnOiAn77+lNTAwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8wOSc6ICfvv6UzMDAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzEwJzogJ++/pTU2NicsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTEnOiAn77+lNTc2Jyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xMic6ICfvv6U1NTUnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzEzJzogJ++/pTU1MCcsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTQnOiAn77+lNDUwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xNSc6ICfvv6U2NTAnLFxuXHRcdFx0XHRcdCcyMDE2LzEwLzE2JzogJ++/pTY1NScsXG5cdFx0XHRcdFx0JzIwMTYvMTAvMTcnOiAn77+lNTAwJyxcblx0XHRcdFx0XHQnMjAxNi8xMC8xOCc6ICfvv6UzMDAnLFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdG9uRm9jdXMoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LCAnb25Gb2N1cycpXG5cdH1cblx0b25CbHVyKGV2ZW50KXtcblx0XHRjb25zb2xlLmxvZyhldmVudCwgJ29uQmx1cicpXG5cdH1cblx0b25DaGFuZ2UoZGF0ZWluZm8pe1xuXHRcdGNvbnNvbGUubG9nKGRhdGVpbmZvLCAnb25DaGFuZ2UnKVxuXHR9XG5cdGxpbmthZ2VDaGFuZ2UoZGF0ZUluZm8pe1xuXHRcdHRoaXMuc2V0U3RhdGUoeydsaW5rYWdlVmFsdWUnOiBkYXRlSW5mby5kYXRlfSlcblx0fVxuXHRkYXlBZGRvbihkYXlpbmZvKXtcblx0XHRsZXQge2FkZG9uRGF0YSwgbGlua2FnZVZhbHVlfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2RhdGV9ID0gZGF5aW5mb1xuXHRcdGxldCBkYXRlU3RyID0gZGF0ZUZvcm1hdChkYXRlLCAneXl5eS9NTS9kZCcpXG5cdFx0bGV0IHJlc3N0ciwgdmFsLCBkb21zID0gW11cblx0XHRmb3IodmFyIGtleSBpbiBhZGRvbkRhdGEpe1xuXHRcdFx0cmVzc3RyID0gYWRkb25EYXRhW2tleV1bZGF0ZVN0cl1cblx0XHRcdGlmKHJlc3N0cil7XG5cdFx0XHRcdGRvbXMucHVzaCg8c3BhbiBjbGFzc05hbWU9eydkYXRlLWRheS0nK2tleX0ga2V5PXtrZXl9PntyZXNzdHJ9PC9zcGFuPilcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRvbXNcblx0fVxuXG5cblx0cmVuZGVyICgpIHtcblx0XHRsZXQge2FkZG9uRGF0YSwgbGlua2FnZVZhbHVlfSA9IHRoaXMuc3RhdGVcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWxpc3QgY2xlYXJmaXhcIj5cblx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHR7YFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblByb3BzIEFuZCBDQUxMQkFDSyBPUiBBUElzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQvL2RlZmF1bHQgZGF0ZSwgbm90IGRlZmluZWQsIGl0IHdpbGwgYmUgbm93KCksIGRlZmluZWQgJycgd2lsbCBiZSBlbXB0eSB2YWx1ZVxuZm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgICAgLy9mb3JtYXQgZGF0ZVxuaXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcdCAgICAvL3Nob3cgcHJlZml4LXByZXYgcHJlZml4LW5leHQgbW9udGhcbm1vbnRoczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcdFx0Ly9zaG93IG11bHRpLXBhbmVzIGJ5IG1vbnRoc1xuXG50aW1lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgICAvL3Nob3cgdGltZSBzZWxlY3QgQHRvZG9cblxubWluOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LCAgICAgICAgLy9zZWxlY3QgZGF0ZSByYW5nZSBtaW5cbm1heDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWF4XG5cblxuXG5zdGFydDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdCAgICAvL3NlbGVjdGVkIHRpbWUgaXMgYSByYW5nZSwgc3RhcnQgZGF0ZVxuZW5kOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFx0ICAgIC8vc2VsZWN0ZWQgdGltZSBpcyBhIHJhbmdlLCBzdGFydCBkYXRlXG5cbmNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgIC8vIGN1c3RvbSBjbGFzc1xuZGlzYWJsZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgLy9pbnB1dCBjYW4ndCBjaGFuZ2VcbmF1dG9IaWRlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vc2VsZWN0ZWQgYXV0byBoaWRlXG5pbmxpbmU6IFJlYWN0LlByb3BUeXBlcy5ib29sLCAgICAgICAvL2lubGluZVxubGFuZzogUmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnY24nLCAnZW4nXSlcblxuZmVzdGl2YWw6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBmZXN0aXZhbFxuaGFzbHVuYXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLCBcdC8vc2hvdyBsdW5hclxuXG5vbkZvY3VzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxub25CbHVyOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChldmVudCwgcGlja2VyKVxub25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFx0XHQvL2FyZ3MgKGRheWluZm8sIHBpY2tlcilcbmRheUFkZG9uOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyBcdFx0Ly9hcmdzIChkYXlpbmZvKVxuXG4vL2RheUFkZG9uLCBhZGQgZGF0YSBmb3IgZGF5LCBhbmQgbmVlZCB0byByZXR1cm4gZG9tLFxuLy90aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgaW5zZXJ0IHRvIGRheSBlYWNoIGVsZW1lbnQuIHBscyBzZWUgbGFzdCBkZW1vXG4vLyAgcGxhY2Vob2xkZXJcbi8vICBjaGlsZHJlblxuIFxcblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBub3cgPSBuZXcgRGF0ZSgnMjAxNi8xMC8xNScpXFxudmFyIG1pbiA9IG5ldyBEYXRlKCcyMDE2LzEwLzEwJylcXG52YXIgbWF4ID0gbmV3IERhdGUoJzIwMTYvMTAvMjAnKVxuXG5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5DTEFTUyBJTuOAgERBWVxuZGF0ZS1ub2N1cnJlbnQ6XHRcdOS4jeWcqOW9k+WJjeaciOiMg+WbtOWGhVxuZGF0ZS1wb2ludDpcdFx0XHTlvZPliY3pgInmi6nojIPlm7TmnIDlpKcv5bCP5YC8XG5kYXRlLXNlbGVjdGVkOlx0XHTlvZPliY3pgInmi6nlgLxcbmRhdGUtZGlzYWJsZWQ6XHRcdOWcqOW9k+WJjeaciOiMg+WbtOWGheS9huS4jeWPr+eUqFxuZGF0ZS1yYW5nZTpcdFx0XHTlvZPliY3pgInmi6nojIPlm7TmiYDmnInlgLxcbmRhdGUtaG92ZXI6XHRcdFx05b2T5YmNaG92ZXLnmoRkYXlcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9wcmU+XG5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICAgICAgPGgzPkhhdmUgYSB0cnk8L2gzPlxuICAgICAgICAgICAgICAgIDxoci8+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDEyIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezEyfSBpc2ZpbGw9e3RydWV9IGlubGluZS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsxMn0gaXNmaWxsPXt0cnVlfSBpbmxpbmUvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kZWFkIHNpbXBsZSBkYXRlcGlja2VyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlci8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZW1wdHkgdmFsdWUgYW5kIHBsYWNlaG9sZGVyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGRhdGUgc3RyaW5nIHZhbHVlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIlwiIHBsYWNlaG9sZGVyPVwicGxzIGlucHV0IHN0aC4uLlwiLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD1cIjIwMTgtMDEtMDFcIiBwbGFjZWhvbGRlcj1cInBscyBpbnB1dCBzdGguLi5cIi8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBzZWxmIGRlZmluZWQgY2xhc3NOYW1lPC9oNT5cblx0XHRcdFx0XHQ8cD5pbnB1dCBDb21wb25lbnQgcm9vdCBlbGVtZW50IHdpbGwgYWRkIHlvdXIgIHNlbGYgZGVmaW5lZCBjbGFzc05hbWUsICdteS1kYXRlcGlja2VyJzxici8+XG5cdFx0XHRcdFx0XHRhbmQgbm90IGlubGluZSBkYXRlcGlja2VyIHBhbmUgQ29tcG9uZW50IHJvb3QgZWxlbWVudCB3aWxsIGFkZCAgeW91ciAgc2VsZiBkZWZpbmVkIGNsYXNzTmFtZSArICdteS1kYXRlcGlja2VyLXBhbmVzJzwvcD5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGNsYXNzTmFtZT1cIm15LWRhdGVwaWNrZXJcIi8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgY2xhc3NOYW1lPVwibXktZGF0ZXBpY2tlclwiLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGxhbmcgY2hpbmVzZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbGFuZz0nY24nLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBsYW5nPSdjbicvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggZGVmYXVsdCBkYXRlPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzZWxlY3RlZD17bm93fS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e25vd30vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHZhbHVlIGlzIGxpbmthZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YFxuPHNwYW4+e2xpbmthZ2VWYWx1ZS50b1N0cmluZygpfTwvc3Bhbj5cbjxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9XG5cdG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbjxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9XG5cdG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbjxEYXRlcGlja2VyIHN0YXJ0PXtsaW5rYWdlVmFsdWV9IGVuZD17bmV3IERhdGUoJzIwMTctMDktMjgnKX1cblx0b25DaGFuZ2U9e3RoaXMubGlua2FnZUNoYW5nZS5iaW5kKHRoaXMpfSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxzcGFuPntsaW5rYWdlVmFsdWUudG9TdHJpbmcoKX08L3NwYW4+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc2VsZWN0ZWQ9e2xpbmthZ2VWYWx1ZX0gb25DaGFuZ2U9e3RoaXMubGlua2FnZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIHNlbGVjdGVkPXtsaW5rYWdlVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzdGFydD17bGlua2FnZVZhbHVlfSBlbmQ9e25ldyBEYXRlKCcyMDE3LTA5LTI4Jyl9IG9uQ2hhbmdlPXt0aGlzLmxpbmthZ2VDaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBhdXRvSGlkZSB3aGVuIHNlbGVjdGVkPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBhdXRvSGlkZT17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGF1dG9IaWRlPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgZGlzYWJsZWQ8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGRpc2FibGVkPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgZGlzYWJsZWQ9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciBpc2ZpbGwgdHJ1ZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaXNmaWxsPXt0aGlzLnByb3BzLmlzZmlsbH0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlzZmlsbD17dGhpcy5wcm9wcy5pc2ZpbGx9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+aW5saW5lIGRhdGVwaWNrZXI8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggbWluIGFuZCBtYXggcmFuZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSBtaW49e3RoaXMuc3RhdGUubWlufSBtYXg9e3RoaXMuc3RhdGUubWF4fSBzZWxlY3RlZD17bm93fSAvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17ZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe21pbjogbmV3IERhdGUoJzIwMTYvMTAvMTInKSwgbWF4OiBuZXcgRGF0ZSgnMjAxNi8xMC8xOCcpfSk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCAnc3RhdGUnKVxuXHRcdFx0XHRcdH0uYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0IOiuvue9ruiMg+WbtCB7YHttaW46IG5ldyBEYXRlKCcyMDE2LzEwLzEyJyksIG1heDogbmV3IERhdGUoJzIwMTYvMTAvMTgnKX1gfVxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSBtaW49e3RoaXMuc3RhdGUubWlufSBtYXg9e3RoaXMuc3RhdGUubWF4fSBzZWxlY3RlZD17bm93fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+YmktZGF0ZXBpY2tlciB3aXRoIHN0YXJ0IGFuZCBlbmQgcmFuZ2U8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXt0aGlzLnN0YXRlLm1pbn0gZW5kPXt0aGlzLnN0YXRlLm1heH0gIC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc3RhcnQ9e3RoaXMuc3RhdGUubWlufSBlbmQ9e3RoaXMuc3RhdGUubWF4fSAgLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRlZmluZWQgeW91ciBpbnB1dCBkb20sIHtgPGlucHV0Lz5gfSBlbGVtZW50IGp1c3QgcGxhY2Vob2xkIGZvciByZWFsIHJlYWN0IGlucHV0PC9oNT5cblx0XHRcdFx0XHQ8aDU+Y29tcGxleCBkZW1vOiB0aGUgZGVtbyBvZiBzdGFydCBlbmQgbWluIG1heCBhbmQgZW5kIGlzIG51bGwgPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0+XG5cdDxkaXYgY2xhc3NOYW1lPVwidHlwZV9pdGVtXCI+IDxzcGFuIGNsYXNzTmFtZT1cImljb19kYXRlXCI+PC9zcGFuPjxpbnB1dC8+IDwvZGl2PlxuPC9EYXRlcGlja2VyPmB9XG5cbntgXG5cblJFTkRFUiBET00gSVM6XG48ZGl2IGNsYXNzPVwiZGF0ZS1pbnB1dHNcIj5cbiAgICA8ZGl2IGNsYXNzPVwidHlwZV9pdGVtXCI+PHNwYW4gY2xhc3M9XCJpY29fZGF0ZVwiPmljb248L3NwYW4+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIyMDE2LTEwLTEwXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInR5cGVfaXRlbVwiPjxzcGFuIGNsYXNzPVwiaWNvX2RhdGVcIj5pY29uPC9zcGFuPjxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiMjAxNi0xMC0yMFwiPjwvZGl2PlxuPC9kaXY+XG5cblBMUyBDSEVDSyBDT05TT0xFIGFib3V0IG9uQ2hhbmdlIGNhbGxiYWNrIHRvIGdldCBkYXRlSW5mby5zdGF0dXMgb2JqZWN0IGFib3V0ICdzdGFydCBlbmQnXG5gfVxuXG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbWluPXtuZXcgRGF0ZSgnMjAxNi0xMC0wOCAwMDowMDowMCcpfSBtYXg9e25ldyBEYXRlKCcyMDE2LTEwLTI4IDAwOjAwOjAwJyl9IHN0YXJ0PXttaW59IGVuZD17bWF4fSBwbGFjZWhvbGRlcj1cImRlcGFydERhdGVcIiBwbGFjZWhvbGRlckVuZD1cImFycml2YWxEYXRlXCIgIG9uQ2hhbmdlPXtmdW5jdGlvbihkYXRlSW5mbyl7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhkYXRlSW5mbyAsJ2RhdGVJbmZvJylcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHlwZV9pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImljb19kYXRlXCI+aWNvbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PGlucHV0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRGF0ZXBpY2tlcj5cblx0XHRcdFx0XHQ8YnIvPjxici8+PGJyLz48YnIvPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyICAgbWluPXtuZXcgRGF0ZSgnMjAxNi0xMC0wOCAwMDowMDowMCcpfSBtb250aHM9ezJ9IGlzZmlsbCBzdGFydD17bWlufSBlbmQ9e1wiXCJ9IHBsYWNlaG9sZGVyPVwi5Ye65Y+R5pel5pyfXCIgcGxhY2Vob2xkZXJFbmQ9XCLov5Tlm57ml6XmnJ9cIiBvbkNoYW5nZT17ZnVuY3Rpb24oZGF0ZUluZm8pe1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0ZUluZm8gLCdkYXRlSW5mbycpXG5cdFx0XHRcdFx0fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvX3NlYXJjaF90eXBlIGljb19zZWFyY2hfZGRhdGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRGF0ZXBpY2tlcj5cblx0XHRcdFx0XHQ8c3R5bGU+e1xuXHRcdFx0XHRcdFx0YFxuXHRcdFx0XHRcdFx0LnR5cGVfaXRlbSB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LnR5cGVfaXRlbSBpbnB1dHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAzNnB4O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmljb19kYXRlIHtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246YWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2M7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAzMHB4OyBoZWlnaHQ6MjdweDtsaW5lLWhlaWdodDoyN3B4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICM5OGVcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnaDpjZW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRgfVxuXHRcdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmJpLWRhdGVwaWNrZXIgd2l0aCBzdGFydCBhbmQgZW5kIHJhbmdlLCBhbmQgc2hvdyAyIG1vbnRocyA8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHN0YXJ0PXttaW59IGVuZD17bWF4fSBtb250aHM9ezJ9ICBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gbW9udGhzPXsyfSAgaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGNhbGxiYWNrcyBhbGVydCwgcGxzIGNoZWNrIGF0IGNvbnNvbGU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzKX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAyIG1vbnRoIGlubGluZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggMiBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsyfSBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIDMgbW9udGggcG9wdXA8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG1vbnRocz17M30gaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXszfSBpc2ZpbGw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGZlc3RpdmFsPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggbHVuYXIobHVuYXIgYXV0byBpbmNsdWRlIHRlcm0gYW5kIGxhbmcgaXMgJ2NuJyk8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlubGluZSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7LyogICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGNuIGhvbGlkYXkgbGFiZWwoJ+S8kScpPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2BcbnN0YXRpYyBpbml0aWFsU3RhdGUoKSB7XG5cdGFkZG9uRGF0YToge1xuXHRcdHJlc3Q6IHtcblx0XHRcdCcyMDE2LzAxLzAxJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wMSc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDInOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzAzJzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNCc6ICfkvJEnLFxuXHRcdFx0JzIwMTYvMTAvMDUnOiAn5LyRJyxcblx0XHRcdCcyMDE2LzEwLzA2JzogJ+S8kScsXG5cdFx0XHQnMjAxNi8xMC8wNyc6ICfkvJEnXG5cdFx0fSxcblx0XHRwcmljZToge1xuXHRcdFx0JzIwMTYvMTAvMDEnOiAnNTY2Jyxcblx0XHRcdCcyMDE2LzEwLzAyJzogJzU3NicsXG5cdFx0XHQnMjAxNi8xMC8wMyc6ICc1NTUnLFxuXHRcdFx0JzIwMTYvMTAvMDQnOiAnNTUwJyxcblx0XHRcdCcyMDE2LzEwLzA1JzogJzQ1MCcsXG5cdFx0XHQnMjAxNi8xMC8wNic6ICc2NTAnLFxuXHRcdFx0JzIwMTYvMTAvMDcnOiAnNjU1Jyxcblx0XHRcdCcyMDE2LzEwLzA4JzogJzUwMCcsXG5cdFx0XHQnMjAxNi8xMC8wOSc6ICczMDAnXG5cdFx0fVxuXHR9XG59LFxuZGF5QWRkb24oZGF5aW5mbyl7XG5cdGxldCB7YWRkb25EYXRhfSA9IHRoaXMuc3RhdGVcblx0bGV0IHtkYXRlfSA9IGRheWluZm9cblx0bGV0IGRhdGVTdHIgPSBkYXRlRm9ybWF0KGRhdGUsICd5eXl5L01NL2RkJylcblx0bGV0IHJlc3N0ciwgdmFsLCBkb21zID0gW11cblx0Zm9yKHZhciBrZXkgaW4gYWRkb25EYXRhKXtcblx0XHRyZXNzdHIgPSBhZGRvbkRhdGFba2V5XVtkYXRlU3RyXVxuXHRcdGlmKHJlc3N0cil7XG5cdFx0XHRkb21zLnB1c2goPHNwYW4gY2xhc3NOYW1lPXsnZGF0ZS1kYXktJytrZXl9IGtleT17a2V5fT57cmVzc3RyfTwvc3Bhbj4pXG5cdFx0fVxuXHR9XG5cdHJldHVybiBkb21zXG59LFxuPERhdGVwaWNrZXIgIGNsYXNzTmFtZT1cImRhdGUtcGlja2VyLWRlbW9cIiBpbmxpbmUgIHNlbGVjdGVkPXtub3d9IGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0vPiBkYXlBZGRvbj17dGhpcy5kYXlBZGRvbn1gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciAgbW9udGhzPXsyfSBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1kZW1vXCIgc2VsZWN0ZWQ9e25vd30gaGFzbHVuYXI9e3RydWV9ICBpc2ZpbGw9e3RydWV9IGZlc3RpdmFsPXt0cnVlfSBkYXlBZGRvbj17dGhpcy5kYXlBZGRvbi5iaW5kKHRoaXMpfS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5BcHAuZGVmYXVsdFByb3BzID0ge1xuXHRkYXRlOiBub3csXG5cdGlzZmlsbDogdHJ1ZVxufVxuXG5cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCIvKipcclxuICogZGF0ZSBhcGnlsIHoo4VcclxuICogQGF1dGhvciBKb2UgTGl1XHJcbiAqIEBlbWFpbCBpY2FyZXUuam9lQGdtYWlsLmNvbVxyXG4gKi9cclxuZnVuY3Rpb24gZGF0ZU9iamVjdChkYXRlKXtcclxuXHRpZighZGF0ZSkgcmV0dXJuIGRhdGVcclxuXHRpZih0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpe1xyXG5cdFx0Ly9cIjIwMTctMTEtMjhUMTE6MDE6MTQuMDI1WlwiIGxlbj0yNFxyXG5cdFx0Ly8nMjAxNy0xMC0xMCAwMDowMDowMCcgbGVuPTE5XHJcblx0XHQvLycyMDE3LTEwLTEwJyBsZW49MTBcclxuXHRcdGlmKGRhdGUuaW5kZXhPZignLycpICYmIGRhdGUubGVuZ3RoPDI0KXtcclxuXHRcdFx0ZGF0ZSA9IGRhdGUucmVwbGFjZSgvLS9nLCAnLycpXHJcblx0XHR9XHJcblx0XHRkYXRlLmxlbmd0aDw9MTAgPyBuZXcgRGF0ZShkYXRlICsgJyAwMDowMDowMCcpOiBuZXcgRGF0ZShkYXRlKVxyXG5cdH1cclxuXHRyZXR1cm4gZGF0ZSBpbnN0YW5jZW9mIERhdGUgPyBkYXRlIDogbmV3IERhdGUoZGF0ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlLCBmb3JtYXQpe1xyXG4gIGlmKCFkYXRlKSByZXR1cm4gJyc7XHJcbiAgdmFyIHdlZWtzID0gWyfml6UnLCfkuIAnLCfkuownLCfkuIknLCflm5snLCfkupQnLCflha0nXTtcclxuICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgZm9ybWF0ID0gZGF0ZTtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICAgIGRhdGUgPSBkYXRlT2JqZWN0KGRhdGUpO1xyXG4gICAgdmFyIG1hcCA9IHtcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku71cclxuICAgICAgICBcImRcIjogZGF0ZS5nZXREYXRlKCksIC8v5pelXHJcbiAgICAgICAgXCJoXCI6IGRhdGUuZ2V0SG91cnMoKSwgLy/lsI/ml7ZcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGXHJcbiAgICAgICAgXCJzXCI6IGRhdGUuZ2V0U2Vjb25kcygpLCAvL+enklxyXG4gICAgICAgIFwicVwiOiBNYXRoLmZsb29yKChkYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAvL+avq+enklxyXG4gICAgICAgIFwiV1wiOiB3ZWVrc1tkYXRlLmdldERheSgpXSAvL+WRqFxyXG4gICAgfTtcclxuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC8oW3lNZGhtc3FTV10pKy9nLCBmdW5jdGlvbihhbGwsIHQpe1xyXG4gICAgICAgIHZhciB2ID0gbWFwW3RdO1xyXG4gICAgICAgIGlmKHYgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKGFsbC5sZW5ndGggPiAxKXtcclxuICAgICAgICAgICAgICAgIHYgPSAnMCcgKyB2O1xyXG4gICAgICAgICAgICAgICAgdiA9IHYuc3Vic3RyKHYubGVuZ3RoLTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHQgPT09ICd5Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiAoZGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gYWxsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGw7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXQ7XHJcbn1cclxudmFyIHRvZGF5ID0gbmV3IERhdGUoKVxyXG52YXIgdG9kYXlTdGFydCA9IHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxudmFyIHBsdXNEYXkgPSBmdW5jdGlvbihkYXRlLCBudW0pe1xyXG4gICAgbnVtID0gbnVtICE9PSB2b2lkIDAgPyBudW0gOiAxXHJcbiAgICByZXR1cm4gbmV3IERhdGUoK2RhdGUgKyAzNjAwMDAwKjI0Km51bSlcclxufVxyXG5cclxudmFyIG1pbnVzRGF5ID0gZnVuY3Rpb24oZGF0ZSwgbnVtKXtcclxuICAgIHJldHVybiBwbHVzRGF5KC1udW0pXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBkYXRlRm9ybWF0LFxyXG5cdGRhdGVEaWZmLFxyXG5cdHRvZGF5LFxyXG5cdHRvZGF5U3RhcnQsXHJcblx0ZGF0ZU9iamVjdCxcclxuXHRwbHVzRGF5LFxyXG5cdG1pbnVzRGF5XHJcbn0iXX0=
