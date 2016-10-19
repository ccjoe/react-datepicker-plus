require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
	getDefaultProps: function getDefaultProps() {
		return {
			date: now,
			isfill: true
		};
	},
	doChange: function doChange(dateinfo) {
		// this.setState({date: dateinfo.date})
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'demo-list clearfix' },
			React.createElement(
				'pre',
				{ className: 'demo-code' },
				'var now = new Date(\'2016/10/15\')\nvar min = new Date(\'2016/10/10\')\nvar max = new Date(\'2016/10/20\')'
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
					'datepicker isfill true'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker isfill={this.props.isfill}/>'
				),
				React.createElement(Datepicker, { isfill: this.props.isfill, onChange: this.doChange })
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
					'bi-datepicker with start and end range'
				),
				React.createElement(
					'pre',
					{ className: 'demo-code' },
					'<Datepicker start={min} end={max} inline/>'
				),
				React.createElement(Datepicker, { start: min, end: max, inline: true })
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
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-datepicker-plus":undefined,"react-dom":undefined}]},{},[1]);
