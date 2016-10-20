require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _srcDateFormat = require('../../src/date-format');

var React = require('react');
var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker-plus');
var now = new Date('2016/10/15');
var min = new Date('2016/10/10');
var max = new Date('2016/10/20');

var App = React.createClass({
	displayName: 'App',

	propTypes: {
		date: React.PropTypes.object,
		isfill: React.PropTypes.bool
	},
	// addonData: React.PropTypes.object
	getDefaultProps: function getDefaultProps() {
		return {
			date: now,
			isfill: true
		};
	},
	getInitialState: function getInitialState() {
		return {
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
	},
	onFocus: function onFocus(event) {
		console.log(event, 'onFocus');
	},
	onBlur: function onBlur(event) {
		console.log(event, 'onBlur');
	},
	onChange: function onChange(dateinfo) {
		console.log(dateinfo, 'onChange');
	},
	dayAddon: function dayAddon(dayinfo) {
		var addonData = this.state.addonData;
		var date = dayinfo.date;

		var dateStr = (0, _srcDateFormat.dateFormat)(date, 'yyyy/MM/dd');
		var resstr = undefined,
		    val = undefined,
		    doms = [];
		for (var key in addonData) {
			resstr = addonData[key][dateStr];
			if (resstr) {
				doms.push(React.createElement(
					'span',
					{ className: 'date-day-' + key, key: key },
					resstr
				));
			}
		}
		return doms;
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'demo-list clearfix' },
			React.createElement(
				'pre',
				{ className: 'demo-code' },
				'\n--------------------------\t\t\t\t\t\nProps And CALLBACK OR APIs\n--------------------------\t\t\t\t\t\nselected: React.PropTypes.object,\t//default date\nformat: React.PropTypes.string,     //format date\nisfill: React.PropTypes.bool,\t    //show prefix-prev prefix-next month \nmonths: React.PropTypes.number,\t\t//show multi-panes by months\n\ntime: React.PropTypes.bool,         //show time select @todo\n\nmin: React.PropTypes.object,        //select date range min\nmax: React.PropTypes.object,        //select date range max\n\n\n\nstart: React.PropTypes.object,\t    //selected time is a range, start date\nend: React.PropTypes.object,\t    //selected time is a range, start date\n\nclassName: React.PropTypes.string,  // custom class\ndisabled: React.PropTypes.bool,     //input can\'t change\nautoHide: React.PropTypes.bool,     //selected auto hide\ninline: React.PropTypes.bool,       //inline\nlang: React.PropTypes.oneOf([\'cn\', \'en\'])\n\nfestival: React.PropTypes.bool, \t//show festival\nhaslunar: React.PropTypes.bool, \t//show lunar\n\nonFocus: React.PropTypes.func,\t\t//args (event, picker)\nonBlur: React.PropTypes.func,\t\t//args (event, picker)\nonChange: React.PropTypes.func,\t\t//args (dayinfo, picker)\ndayAddon: React.PropTypes.func \t\t//args (dayinfo)\n\t\t\n//dayAddon, add data for day, and need to return dom, \n//the return value will be insert to day each element. pls see last demo\n \n \n\n================================\nvar now = new Date(\'2016/10/15\')\nvar min = new Date(\'2016/10/10\')\nvar max = new Date(\'2016/10/20\')\n\t\t\t\t\t'
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker with 12 month popup'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker months={12} isfill={true} inline/>'
				),
				React.createElement(Datepicker, { months: 12, isfill: true, inline: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'dead simple datepicker'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker/>'
				),
				React.createElement(Datepicker, null)
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker with lang chinese'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker lang=\'cn\'/>'
				),
				React.createElement(Datepicker, { lang: 'cn' })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker with default date'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker selected={now}/>'
				),
				React.createElement(Datepicker, { selected: now })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker autoHide when selected'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker autoHide={true}/>'
				),
				React.createElement(Datepicker, { autoHide: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker disabled'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker disabled={true}/>'
				),
				React.createElement(Datepicker, { disabled: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker isfill true'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker isfill={this.props.isfill}/>'
				),
				React.createElement(Datepicker, { isfill: this.props.isfill })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'inline datepicker'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker inline />'
				),
				React.createElement(Datepicker, { inline: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker with min and max range'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker inline min={min} max={max} />'
				),
				React.createElement(Datepicker, { inline: true, min: min, max: max })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'bi-datepicker with start and end range'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker start={min} end={max} />'
				),
				React.createElement(Datepicker, { start: min, end: max })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'bi-datepicker with start and end range, and show 2 months '
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker start={min} end={max} months={2}  isfill={true}/>'
				),
				React.createElement(Datepicker, { start: min, end: max, months: 2, isfill: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker callbacks alert, pls check at console'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />'
				),
				React.createElement(Datepicker, { onFocus: this.onFocus, onBlur: this.onBlur, onChange: this.onChange })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker with 2 month inline'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker months={2} inline isfill={true}/>'
				),
				React.createElement(Datepicker, { months: 2, inline: true, isfill: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker with 2 month popup'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker months={2} isfill={true}/>'
				),
				React.createElement(Datepicker, { months: 2, isfill: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker with 3 month popup'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker months={3} isfill={true}/>'
				),
				React.createElement(Datepicker, { months: 3, isfill: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker with festival'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker inline festival={true}/>'
				),
				React.createElement(Datepicker, { inline: true, festival: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item' },
				React.createElement(
					'h5',
					null,
					'datepicker with lunar(lunar auto include term and lang is \'cn\')'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker inline haslunar={true}  isfill={true} festival={true}/>'
				),
				React.createElement(Datepicker, { inline: true, haslunar: true, isfill: true, festival: true })
			),
			React.createElement(
				'div',
				{ className: 'demo-item demo-full' },
				React.createElement(
					'h5',
					null,
					'datepicker with cn holiday label(\'休\')'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'\t\ngetInitialState() {\n    return {\n    \taddonData: {\n        \trest: {\n        \t\t\'2016/01/01\': \'休\',\n        \t\t\'2016/10/01\': \'休\',\n        \t\t\'2016/10/02\': \'休\',\n        \t\t\'2016/10/03\': \'休\',\n        \t\t\'2016/10/04\': \'休\',\n        \t\t\'2016/10/05\': \'休\',\n        \t\t\'2016/10/06\': \'休\',\n        \t\t\'2016/10/07\': \'休\'\n        \t},\n        \tprice: {\n        \t\t\'2016/10/01\': \'566\',\n        \t\t\'2016/10/02\': \'576\',\n        \t\t\'2016/10/03\': \'555\',\n        \t\t\'2016/10/04\': \'550\',\n        \t\t\'2016/10/05\': \'450\',\n        \t\t\'2016/10/06\': \'650\',\n        \t\t\'2016/10/07\': \'655\',\n        \t\t\'2016/10/08\': \'500\',\n        \t\t\'2016/10/09\': \'300\'\n        \t}\n    \t}\n    }\n},\ndayAddon(dayinfo){\n\tlet {addonData} = this.state\n\tlet {date} = dayinfo\n\tlet dateStr = dateFormat(date, \'yyyy/MM/dd\')\n\tlet resstr, val, doms = []\n\tfor(var key in addonData){\n\t\tresstr = addonData[key][dateStr]\n\t\tif(resstr){ \n\t\t\tdoms.push(<span className={\'date-day-\'+key} key={key}>{resstr}</span>)\n\t\t}\n\t}\n\treturn doms\n},\n<Datepicker  className="date-picker-demo" inline  selected={now} haslunar={true}  isfill={true} festival={true}/> dayAddon={this.dayAddon}'
				),
				React.createElement(Datepicker, { className: 'date-picker-demo', inline: true, selected: now, haslunar: true, isfill: true, festival: true, dayAddon: this.dayAddon })
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

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

},{}]},{},[1]);
