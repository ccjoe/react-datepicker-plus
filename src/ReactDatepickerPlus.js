//@todo 解决切换月份时， 选择的值有变；2.外部值变化后，input值与ui没有变化 3 key input
// import './datepicker.less'
import React, {Component} from 'react'
import DateHeader from './date-header.js'
import DateCalendar from './date-calendar.js'
import DateInput from './date-input.js'
import DateInBody from './date-in-body.js'
import {dateObject, today} from './date-format.js'

class ReactDatepickerPlus extends Component {
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
	//  placeholder
	//  placeholderEnd
	//  support children to defined your input dom struct, pls search `defined your input dom` at this page
	//  monthLimit:boolean =>  Disable month render or not true:not render, false： render。
	//	maxLimitDisable: boolean => 是否限制双联最大值的选择范围

	// salarHolidays: null,  holiday by solar date mmdd
	// lunarHolidays: null,  holiday by lunar date mmdd
	// dayHolidays: null,  lunar holiday by solar date yyyymmdd
	// }
	constructor(props) {
		super(props)
		var selected = dateObject(props.selected)
		this.state = {
			date: selected, //render month by date
			show: props.inline ? true : false,
			focus: false, //focus state true/false/'blank'
			offset: {}, //datepicker position
			selected: selected,
			start: dateObject(props.start),
			end: dateObject(props.end),
			min: dateObject(props.min),
			max: dateObject(props.max)
			// status: ''   	//React.PropTypes.oneOf(['start', 'end'])
			//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
		}
	}

	onFocus(event, input) {
		let {show, focus, selected} = this.state
		if ((show && !focus) || focus === 'blank') {
			this.state.focus = true //just change state not trigger render
			return
		}
		let status = input.props.status
		selected = status ? this.state[status] : selected
		let {left, top, height, width} = input.handlePosition()
		top += height + (document.body.scrollTop || document.documentElement.scrollTop)
		let {onFocus} = this.props
		this.inputWidth = width
		this.show(true, {left, top}, true, status)

		onFocus && onFocus(event, this)

		this.setState({date: selected})
	}

	onBlur(event, input) {
		const {show, focus} = this.state
		const {inline, onBlur, autoHide} = this.props
		if (autoHide) {
			if (!focus) {
				this.removePicker()
				return
			}
		}
		if (!show) return
		if (!focus || focus === 'blank') {
			//use setTimeout for firefox will lost focus because onMouseDown then trigger onClick, fuck
			setTimeout(function() {
				input.focus()
			}, 0) //when show && !focus, trigger focus,
		} else if (!inline && focus !== 'blank') {
			onBlur && onBlur(event, this)
			focus && this.removePicker()
		}
	}

	clickPane() {
		if (this.state.focus) this.state.focus = 'blank'
	}

	show(show, offset, focus, status) {
		this.setState({show, offset, focus, status})
	}

	updateMonth(num) {
		const {date, min, max} = this.state
		const cdate = this.getMonthDate(date, num)
		const cmax = this.getMonthDate(date, num, 'max')
		const cmin = this.getMonthDate(date, num, 'min')
		if (this.props.monthLimit && (+cmax < +min || +cmin > +max)) {
			return false
		}
		this.updateDate({date: cdate}, true)
	}

	getMonthDate(date, num, minmax) {
		date = dateObject(date) || today
		var y = date.getFullYear(),
			m = date.getMonth() + num,
			d = date.getDate()
		var maxd = new Date(y, m + 1, 0).getDate() //判断某月为共多少天
		const mmMap = {
			min: 1,
			max: maxd
		}
		return new Date(y, m, minmax ? mmMap[minmax] : d > maxd ? maxd : d)
	}

	updateDay(dateinfo) {
		this.updateDate(dateinfo)
	}

	updateDate(dateinfo, isMonth) {
		let {onChange} = this.props
		let {status = 'selected'} = this.state
		let getSelected = dateObject(!isMonth ? dateinfo.date : this.state[status])

		this.setState({show: true, date: dateinfo.date, selected: getSelected, [status]: getSelected})

		if (!isMonth) {
			this.state.focus = false
			dateinfo.status = status
			onChange && onChange(dateinfo, this)
		} else {
			this.state.focus = 'blank'
		}
	}

	removePicker() {
		this.show(false)
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker()
	}

	pickers(status) {
		let $pickers = [],
			offsets = [],
			dh,
			dc,
			idate
		let {date, start, end, min, max, offset} = this.state
		let {inline, months, lang, haslunar, className} = this.props
		let selected = this.state[status ? status : 'selected']
		let classes = `date-picker date-picker-${inline ? 'inline' : 'block'} ${
			className ? className : ''
		} ${haslunar ? 'date-picker-lunar' : ''}`
		let pickerWidth = this.state.width || 215
		for (var i = 0; i < months; i++) {
			offsets.push({left: i * pickerWidth + offset.left, top: offset.top})
			idate = this.getMonthDate(date, i)
			dh = (
				<DateHeader
					date={idate}
					lang={haslunar ? 'cn' : lang}
					updateMonth={this.updateMonth.bind(this)}
				/>
			)
			dc = (
				<DateCalendar
					{...this.props}
					min={min}
					max={max}
					date={idate}
					status={status}
					start={start}
					end={end}
					selected={selected}
					onChange={this.updateDay.bind(this)}
				/>
			)

			$pickers.push(
				inline ? (
					<div onMouseDown={this.clickPane.bind(this)} className={classes} key={i}>
						{dh}
						{dc}
					</div>
				) : (
					<div
						onMouseDown={this.clickPane.bind(this)}
						className={classes}
						style={offsets[i]}
						key={i}>
						{dh}
						{dc}
					</div>
				)
			)
		}
		return $pickers
	}

	updateSize(w) {
		!this.props.inline && this.setState({width: w})
		var offset = this.state.offset
		//右侧距离判断
		var fullWidth = document.documentElement.clientWidth
		if (2 * w + offset.left > fullWidth) {
			this.setState({
				offset: {left: offset.left + this.inputWidth - 2 * w, top: offset.top},
				width: w
			})
		}
	}

	componentWillReceiveProps(props) {
		if (props.selected !== this.props.selected) {
			this.setState({selected: dateObject(props.selected)})
		}
		if (props.start !== this.props.start) {
			this.setState({start: dateObject(props.start)})
		}
		if (props.end !== this.props.end) {
			this.setState({end: dateObject(props.end)})
		}
		if (props.min !== this.props.min) {
			this.setState({min: dateObject(props.min)})
		}
		if (props.max !== this.props.max) {
			this.setState({max: dateObject(props.max)})
		}
	}

	render() {
		let {show, selected, start, end, status} = this.state
		let {format, inline, months, disabled, placeholder, placeholderEnd, children} = this.props
		let picker, pickers, pickerInBody
		let clsName = this.props.className || '',
			clsWrapperName = clsName ? ' ' + clsName + '-panes' : ''
		let di = (val, stat) => (
			<DateInput
				selected={val === void 0 ? selected : val}
				format={format}
				disabled={disabled}
				placeholder={stat == 'end' ? placeholderEnd : placeholder}
				children={children}
				onFocus={this.onFocus.bind(this)}
				onBlur={this.onBlur.bind(this)}
				status={stat}
				ref={stat}
			/>
		)
		if (show) {
			pickers = this.pickers(status)
			picker = (
				<div className={(months > 1 ? 'date-multi clearfix' : 'date-single') + clsWrapperName}>
					{pickers}
				</div>
			)
			pickerInBody = (
				<DateInBody
					onUpdate={this.updateSize.bind(this)}
					className="date-picker-wrapper"
					ref="insDateInBody">
					{picker}
				</DateInBody>
			)
		}
		let didom =
			start || end ? (
				<div className="date-inputs">
					{start !== void 0 && di(start, 'start')}
					{end !== void 0 && di(end, 'end')}
				</div>
			) : (
				di()
			)
		return (
			<div className={'date-components ' + clsName}>
				{didom}
				{inline ? picker : pickerInBody}
			</div>
		)
	}
}

ReactDatepickerPlus.defaultProps = {
	isfill: false,
	format: 'yyyy-MM-dd',
	selected: today,
	months: 1,
	lang: 'en',
	salarHolidays: null,
	lunarHolidays: null,
	dayHolidays: null
}

export default ReactDatepickerPlus
