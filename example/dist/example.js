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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9naXQvcmVhY3QtZGF0ZXBpY2tlci9leGFtcGxlL3NyYy9leGFtcGxlLmpzIiwiRTovZ2l0L3JlYWN0LWRhdGVwaWNrZXIvc3JjL2RhdGUtZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7NkJDT3lCLHVCQUF1Qjs7QUFQaEQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs7QUFHaEMsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQzNCLFVBQVMsRUFBQztBQUNULE1BQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU07QUFDNUIsUUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSTtFQUU1Qjs7QUFDRCxnQkFBZSxFQUFBLDJCQUFHO0FBQ2QsU0FBTztBQUNILE9BQUksRUFBRSxHQUFHO0FBQ1QsU0FBTSxFQUFFLElBQUk7R0FDZixDQUFDO0VBQ0w7QUFDRCxnQkFBZSxFQUFBLDJCQUFHO0FBQ2QsU0FBTztBQUNOLFlBQVMsRUFBRTtBQUNQLFFBQUksRUFBRTtBQUNMLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdBQUc7QUFDakIsaUJBQVksRUFBRSxHQUFHO0FBQ2pCLGlCQUFZLEVBQUUsR0FBRztBQUNqQixpQkFBWSxFQUFFLEdB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QyxLQUFLLEdBQUcsRUFBQztBQUNkLG1CQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQSxDQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNEO0FBQ0QsZUFBTyxHQUFHLENBQUM7S0FDZCxDQUFDLENBQUM7QUFDSCxXQUFPLE1BQU0sQ0FBQztDQUNqQjs7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUM3QyxJQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxTQUFTLEVBQUUsSUFBSTtXQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxHQUFDLElBQUksR0FBQyxDQUFDLFVBQVUsQ0FBQSxDQUFDLElBQUcsSUFBSSxHQUFDLElBQUksR0FBQyxFQUFFLENBQUEsQUFBQyxDQUFDO0NBQUEsQ0FBQTs7UUFHL0YsVUFBVSxHQUFWLFVBQVU7UUFDVixRQUFRLEdBQVIsUUFBUTtRQUNSLFVBQVUsR0FBVixVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBEYXRlcGlja2VyID0gcmVxdWlyZSgncmVhY3QtZGF0ZXBpY2tlci1wbHVzJyk7XG52YXIgbm93ID0gbmV3IERhdGUoJzIwMTYvMTAvMTUnKVxudmFyIG1pbiA9IG5ldyBEYXRlKCcyMDE2LzEwLzEwJylcbnZhciBtYXggPSBuZXcgRGF0ZSgnMjAxNi8xMC8yMCcpXG5cbmltcG9ydCB7ZGF0ZUZvcm1hdH0gZnJvbSAnLi4vLi4vc3JjL2RhdGUtZm9ybWF0J1xudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0cHJvcFR5cGVzOntcblx0XHRkYXRlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuXHRcdGlzZmlsbDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG5cdFx0Ly8gYWRkb25EYXRhOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG5cdH0sXG5cdGdldERlZmF1bHRQcm9wcygpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgZGF0ZTogbm93LFxuXHQgICAgICAgIGlzZmlsbDogdHJ1ZSxcblx0ICAgIH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZSgpIHtcblx0ICAgIHJldHVybiB7XG5cdCAgICBcdGFkZG9uRGF0YToge1xuXHQgICAgICAgIFx0cmVzdDoge1xuXHQgICAgICAgIFx0XHQnMjAxNi8wMS8wMSc6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wMSc6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wMic6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wMyc6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wNCc6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wNSc6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wNic6ICfkvJEnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8wNyc6ICfkvJEnXG5cdCAgICAgICAgXHR9LFxuXHQgICAgICAgIFx0cHJpY2U6IHtcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDEnOiAn77+lNTY2Jyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDInOiAn77+lNTc2Jyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDMnOiAn77+lNTU1Jyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDQnOiAn77+lNTUwJyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDUnOiAn77+lNDUwJyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDYnOiAn77+lNjUwJyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDcnOiAn77+lNjU1Jyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDgnOiAn77+lNTAwJyxcblx0ICAgICAgICBcdFx0JzIwMTYvMTAvMDknOiAn77+lMzAwJyxcdCAgICAgICAgXHRcdFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xMCc6ICfvv6U1NjYnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xMSc6ICfvv6U1NzYnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xMic6ICfvv6U1NTUnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xMyc6ICfvv6U1NTAnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xNCc6ICfvv6U0NTAnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xNSc6ICfvv6U2NTAnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xNic6ICfvv6U2NTUnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xNyc6ICfvv6U1MDAnLFxuXHQgICAgICAgIFx0XHQnMjAxNi8xMC8xOCc6ICfvv6UzMDAnLFxuXHQgICAgICAgIFx0fVxuXHQgICAgXHR9XG5cdCAgICB9XG5cdH0sXG5cdG9uRm9jdXMoZXZlbnQpe1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LCAnb25Gb2N1cycpXG5cdH0sXG5cdG9uQmx1cihldmVudCl7XG5cdFx0Y29uc29sZS5sb2coZXZlbnQsICdvbkJsdXInKVxuXHR9LFxuXHRvbkNoYW5nZShkYXRlaW5mbyl7XG5cdFx0Y29uc29sZS5sb2coZGF0ZWluZm8sICdvbkNoYW5nZScpXG5cdH0sXG5cdGRheUFkZG9uKGRheWluZm8pe1xuXHRcdGxldCB7YWRkb25EYXRhfSA9IHRoaXMuc3RhdGVcblx0XHRsZXQge2RhdGV9ID0gZGF5aW5mb1xuXHRcdGxldCBkYXRlU3RyID0gZGF0ZUZvcm1hdChkYXRlLCAneXl5eS9NTS9kZCcpXG5cdFx0bGV0IHJlc3N0ciwgdmFsLCBkb21zID0gW11cblx0XHRmb3IodmFyIGtleSBpbiBhZGRvbkRhdGEpe1xuXHRcdFx0cmVzc3RyID0gYWRkb25EYXRhW2tleV1bZGF0ZVN0cl1cblx0XHRcdGlmKHJlc3N0cil7IFxuXHRcdFx0XHRkb21zLnB1c2goPHNwYW4gY2xhc3NOYW1lPXsnZGF0ZS1kYXktJytrZXl9IGtleT17a2V5fT57cmVzc3RyfTwvc3Bhbj4pXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkb21zXG5cdH0sXG5cdFxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1saXN0IGNsZWFyZml4XCI+XG5cdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0e2Bcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcdFx0XHRcdFxuUHJvcHMgQW5kIENBTExCQUNLIE9SIEFQSXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHRcdFx0XHRcdFxuc2VsZWN0ZWQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQvL2RlZmF1bHQgZGF0ZVxuZm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAgICAgLy9mb3JtYXQgZGF0ZVxuaXNmaWxsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcdCAgICAvL3Nob3cgcHJlZml4LXByZXYgcHJlZml4LW5leHQgbW9udGggXG5tb250aHM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHRcdC8vc2hvdyBtdWx0aS1wYW5lcyBieSBtb250aHNcblxudGltZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAgICAgLy9zaG93IHRpbWUgc2VsZWN0IEB0b2RvXG5cbm1pbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCwgICAgICAgIC8vc2VsZWN0IGRhdGUgcmFuZ2UgbWluXG5tYXg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsICAgICAgICAvL3NlbGVjdCBkYXRlIHJhbmdlIG1heFxuXG5cblxuc3RhcnQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHQgICAgLy9zZWxlY3RlZCB0aW1lIGlzIGEgcmFuZ2UsIHN0YXJ0IGRhdGVcbmVuZDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcdCAgICAvL3NlbGVjdGVkIHRpbWUgaXMgYSByYW5nZSwgc3RhcnQgZGF0ZVxuXG5jbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsICAvLyBjdXN0b20gY2xhc3NcbmRpc2FibGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgIC8vaW5wdXQgY2FuJ3QgY2hhbmdlXG5hdXRvSGlkZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsICAgICAvL3NlbGVjdGVkIGF1dG8gaGlkZVxuaW5saW5lOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgICAgICAgLy9pbmxpbmVcbmxhbmc6IFJlYWN0LlByb3BUeXBlcy5vbmVPZihbJ2NuJywgJ2VuJ10pXG5cbmZlc3RpdmFsOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgZmVzdGl2YWxcbmhhc2x1bmFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCwgXHQvL3Nob3cgbHVuYXJcblxub25Gb2N1czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcbm9uQmx1cjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHRcdC8vYXJncyAoZXZlbnQsIHBpY2tlcilcbm9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcdFx0Ly9hcmdzIChkYXlpbmZvLCBwaWNrZXIpXG5kYXlBZGRvbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMgXHRcdC8vYXJncyAoZGF5aW5mbylcblx0XHRcbi8vZGF5QWRkb24sIGFkZCBkYXRhIGZvciBkYXksIGFuZCBuZWVkIHRvIHJldHVybiBkb20sIFxuLy90aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgaW5zZXJ0IHRvIGRheSBlYWNoIGVsZW1lbnQuIHBscyBzZWUgbGFzdCBkZW1vXG4gXG4gXFxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIG5vdyA9IG5ldyBEYXRlKCcyMDE2LzEwLzE1JylcXG52YXIgbWluID0gbmV3IERhdGUoJzIwMTYvMTAvMTAnKVxcbnZhciBtYXggPSBuZXcgRGF0ZSgnMjAxNi8xMC8yMCcpXG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9wcmU+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAxMiBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsxMn0gaXNmaWxsPXt0cnVlfSBpbmxpbmUvPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17MTJ9IGlzZmlsbD17dHJ1ZX0gaW5saW5lLz5cblx0XHRcdFx0PC9kaXY+XHRcblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kZWFkIHNpbXBsZSBkYXRlcGlja2VyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlci8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIvPlxuXHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGxhbmcgY2hpbmVzZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbGFuZz0nY24nLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBsYW5nPSdjbicvPlxuXHRcdFx0XHQ8L2Rpdj5cdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBkZWZhdWx0IGRhdGU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIHNlbGVjdGVkPXtub3d9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBzZWxlY3RlZD17bm93fS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgYXV0b0hpZGUgd2hlbiBzZWxlY3RlZDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgYXV0b0hpZGU9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBhdXRvSGlkZT17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbVwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGRpc2FibGVkPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBkaXNhYmxlZD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGRpc2FibGVkPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgaXNmaWxsIHRydWU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIGlzZmlsbD17dGhpcy5wcm9wcy5pc2ZpbGx9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpc2ZpbGw9e3RoaXMucHJvcHMuaXNmaWxsfS8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmlubGluZSBkYXRlcGlja2VyPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpbmxpbmUgLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgLz5cblx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBtaW4gYW5kIG1heCByYW5nZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIG1pbj17bWlufSBtYXg9e21heH0gLz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgbWluPXttaW59IG1heD17bWF4fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5iaS1kYXRlcGlja2VyIHdpdGggc3RhcnQgYW5kIGVuZCByYW5nZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgc3RhcnQ9e21pbn0gZW5kPXttYXh9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc3RhcnQ9e21pbn0gZW5kPXttYXh9IC8+XG5cdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5iaS1kYXRlcGlja2VyIHdpdGggc3RhcnQgYW5kIGVuZCByYW5nZSwgYW5kIHNob3cgMiBtb250aHMgPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBzdGFydD17bWlufSBlbmQ9e21heH0gbW9udGhzPXsyfSAgaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgc3RhcnQ9e21pbn0gZW5kPXttYXh9IG1vbnRocz17Mn0gIGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIGNhbGxiYWNrcyBhbGVydCwgcGxzIGNoZWNrIGF0IGNvbnNvbGU8L2g1PlxuXHRcdFx0XHRcdDxwcmUgY2xhc3NOYW1lPVwiZGVtby1jb2RlXCI+XG5cdFx0XHRcdFx0XHR7YDxEYXRlcGlja2VyIG9uRm9jdXM9e3RoaXMub25Gb2N1c30gb25CbHVyPXt0aGlzLm9uQmx1cn0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IC8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgb25Gb2N1cz17dGhpcy5vbkZvY3VzfSBvbkJsdXI9e3RoaXMub25CbHVyfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gLz5cblx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFx0XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAyIG1vbnRoIGlubGluZTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgbW9udGhzPXsyfSBpbmxpbmUgaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2Plx0XHRcdFx0XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW0gZGVtby1mdWxsXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCAyIG1vbnRoIHBvcHVwPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBtb250aHM9ezJ9IGlzZmlsbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIG1vbnRocz17Mn0gaXNmaWxsPXt0cnVlfS8+XG5cdFx0XHRcdDwvZGl2Plx0XHRcdFx0XHRcdFxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtIGRlbW8tZnVsbFwiPlxuXHRcdFx0XHRcdDxoNT5kYXRlcGlja2VyIHdpdGggMyBtb250aCBwb3B1cDwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgbW9udGhzPXszfSBpc2ZpbGw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBtb250aHM9ezN9IGlzZmlsbD17dHJ1ZX0vPlxuXHRcdFx0XHQ8L2Rpdj5cdFx0XHRcdFx0XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkZW1vLWl0ZW1cIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGZlc3RpdmFsPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2A8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5gfVxuICAgICAgXHRcdFx0XHQ8L3ByZT5cblx0XHRcdFx0XHQ8RGF0ZXBpY2tlciBpbmxpbmUgZmVzdGl2YWw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcblxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGVtby1pdGVtXCI+XG5cdFx0XHRcdFx0PGg1PmRhdGVwaWNrZXIgd2l0aCBsdW5hcihsdW5hciBhdXRvIGluY2x1ZGUgdGVybSBhbmQgbGFuZyBpcyAnY24nKTwvaDU+XG5cdFx0XHRcdFx0PHByZSBjbGFzc05hbWU9XCJkZW1vLWNvZGVcIj5cblx0XHRcdFx0XHRcdHtgPERhdGVwaWNrZXIgaW5saW5lIGhhc2x1bmFyPXt0cnVlfSAgaXNmaWxsPXt0cnVlfSBmZXN0aXZhbD17dHJ1ZX0vPmB9XG4gICAgICBcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdDxEYXRlcGlja2VyIGlubGluZSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz5cblx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRlbW8taXRlbSBkZW1vLWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDU+ZGF0ZXBpY2tlciB3aXRoIGNuIGhvbGlkYXkgbGFiZWwoJ+S8kScpPC9oNT5cblx0XHRcdFx0XHQ8cHJlIGNsYXNzTmFtZT1cImRlbW8tY29kZVwiPlxuXHRcdFx0XHRcdFx0e2BcdFxuZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgXHRhZGRvbkRhdGE6IHtcbiAgICAgICAgXHRyZXN0OiB7XG4gICAgICAgIFx0XHQnMjAxNi8wMS8wMSc6ICfkvJEnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDEnOiAn5LyRJyxcbiAgICAgICAgXHRcdCcyMDE2LzEwLzAyJzogJ+S8kScsXG4gICAgICAgIFx0XHQnMjAxNi8xMC8wMyc6ICfkvJEnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDQnOiAn5LyRJyxcbiAgICAgICAgXHRcdCcyMDE2LzEwLzA1JzogJ+S8kScsXG4gICAgICAgIFx0XHQnMjAxNi8xMC8wNic6ICfkvJEnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDcnOiAn5LyRJ1xuICAgICAgICBcdH0sXG4gICAgICAgIFx0cHJpY2U6IHtcbiAgICAgICAgXHRcdCcyMDE2LzEwLzAxJzogJzU2NicsXG4gICAgICAgIFx0XHQnMjAxNi8xMC8wMic6ICc1NzYnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDMnOiAnNTU1JyxcbiAgICAgICAgXHRcdCcyMDE2LzEwLzA0JzogJzU1MCcsXG4gICAgICAgIFx0XHQnMjAxNi8xMC8wNSc6ICc0NTAnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDYnOiAnNjUwJyxcbiAgICAgICAgXHRcdCcyMDE2LzEwLzA3JzogJzY1NScsXG4gICAgICAgIFx0XHQnMjAxNi8xMC8wOCc6ICc1MDAnLFxuICAgICAgICBcdFx0JzIwMTYvMTAvMDknOiAnMzAwJ1xuICAgICAgICBcdH1cbiAgICBcdH1cbiAgICB9XG59LFxuZGF5QWRkb24oZGF5aW5mbyl7XG5cdGxldCB7YWRkb25EYXRhfSA9IHRoaXMuc3RhdGVcblx0bGV0IHtkYXRlfSA9IGRheWluZm9cblx0bGV0IGRhdGVTdHIgPSBkYXRlRm9ybWF0KGRhdGUsICd5eXl5L01NL2RkJylcblx0bGV0IHJlc3N0ciwgdmFsLCBkb21zID0gW11cblx0Zm9yKHZhciBrZXkgaW4gYWRkb25EYXRhKXtcblx0XHRyZXNzdHIgPSBhZGRvbkRhdGFba2V5XVtkYXRlU3RyXVxuXHRcdGlmKHJlc3N0cil7IFxuXHRcdFx0ZG9tcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17J2RhdGUtZGF5LScra2V5fSBrZXk9e2tleX0+e3Jlc3N0cn08L3NwYW4+KVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gZG9tc1xufSxcbjxEYXRlcGlja2VyICBjbGFzc05hbWU9XCJkYXRlLXBpY2tlci1kZW1vXCIgaW5saW5lICBzZWxlY3RlZD17bm93fSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9Lz4gZGF5QWRkb249e3RoaXMuZGF5QWRkb259YH1cbiAgICAgIFx0XHRcdFx0PC9wcmU+XG5cdFx0XHRcdFx0PERhdGVwaWNrZXIgY2xhc3NOYW1lPVwiZGF0ZS1waWNrZXItZGVtb1wiIGlubGluZSBzZWxlY3RlZD17bm93fSBoYXNsdW5hcj17dHJ1ZX0gIGlzZmlsbD17dHJ1ZX0gZmVzdGl2YWw9e3RydWV9IGRheUFkZG9uPXt0aGlzLmRheUFkZG9ufS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSk7XG4gXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsIi8qKlxyXG4gKiBkYXRlIGFwaeWwgeijhVxyXG4gKiBAYXV0aG9yIEpvZSBMaXVcclxuICogQGVtYWlsIGljYXJldS5qb2VAZ21haWwuY29tXHJcbiAqL1xyXG5mdW5jdGlvbiBkYXRlRm9ybWF0KGRhdGUsIGZvcm1hdCl7XHJcbiAgaWYoIWRhdGUpIHJldHVybjsgIFxyXG4gIHZhciB3ZWVrcyA9IFsn5pelJywn5LiAJywn5LqMJywn5LiJJywn5ZubJywn5LqUJywn5YWtJ107XHJcbiAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGZvcm1hdCA9IGRhdGU7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBkYXRlID0gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gbmV3IERhdGUoZGF0ZSkgOiBkYXRlO1xyXG4gICAgdmFyIG1hcCA9IHtcclxuICAgICAgICBcIk1cIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku70gXHJcbiAgICAgICAgXCJkXCI6IGRhdGUuZ2V0RGF0ZSgpLCAvL+aXpSBcclxuICAgICAgICBcImhcIjogZGF0ZS5nZXRIb3VycygpLCAvL+Wwj+aXtiBcclxuICAgICAgICBcIm1cIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGIFxyXG4gICAgICAgIFwic1wiOiBkYXRlLmdldFNlY29uZHMoKSwgLy/np5IgXHJcbiAgICAgICAgXCJxXCI6IE1hdGguZmxvb3IoKGRhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmIFxyXG4gICAgICAgIFwiU1wiOiBkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAvL+avq+enkiBcclxuICAgICAgICBcIldcIjogd2Vla3NbZGF0ZS5nZXREYXkoKV0gLy/lkahcclxuICAgIH07XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvKFt5TWRobXNxU1ddKSsvZywgZnVuY3Rpb24oYWxsLCB0KXtcclxuICAgICAgICB2YXIgdiA9IG1hcFt0XTtcclxuICAgICAgICBpZih2ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBpZihhbGwubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICB2ID0gJzAnICsgdjtcclxuICAgICAgICAgICAgICAgIHYgPSB2LnN1YnN0cih2Lmxlbmd0aC0yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0ID09PSAneScpe1xyXG4gICAgICAgICAgICByZXR1cm4gKGRhdGUuZ2V0RnVsbFllYXIoKSArICcnKS5zdWJzdHIoNCAtIGFsbC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZm9ybWF0OyBcclxufVxyXG5cclxubGV0IHRvZGF5U3RhcnQgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsMCwwLDApXHJcbmxldCBkYXRlRGlmZiA9ICh0aW1lc3RhcGUsIHRpbWUpID0+IE1hdGguY2VpbCgodGltZXN0YXBlIC0gKHRpbWU/dGltZTordG9kYXlTdGFydCkpLygzNjAwKjEwMDAqMjQpKVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcbiAgICBkYXRlRGlmZixcclxuICAgIHRvZGF5U3RhcnRcclxufSJdfQ==
