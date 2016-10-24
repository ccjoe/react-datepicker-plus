import React from 'react'
import ReactDOM from "react-dom"
import DateHeader from './date-header.jsx'
import DateCalendar from './date-calendar.jsx'
import DateInput from './date-input.jsx'
import DateInBody from './date-in-body.jsx'

var now = new Date()
var ReactDatepickerPlus = React.createClass({
	propTypes: {
		selected: React.PropTypes.object,	//default date
		format: React.PropTypes.string,     //format date
		isfill: React.PropTypes.bool,	    //show prefix-prev prefix-next month 
		months: React.PropTypes.number,		//show multi-panes by months

		time: React.PropTypes.bool,         //show time select @todo

		min: React.PropTypes.object,        //select date range min
		max: React.PropTypes.object,        //select date range max

		start: React.PropTypes.object,	    //selected time is a range, start date
		end: React.PropTypes.object,	    //selected time is a range, start date

		className: React.PropTypes.string,  // custom class
		disabled: React.PropTypes.bool,     //input can't change
		autoHide: React.PropTypes.bool,     //selected auto hide
		inline: React.PropTypes.bool,       //inline
		lang: React.PropTypes.oneOf(['cn', 'en']),

		festival: React.PropTypes.bool, 	//show festival
		haslunar: React.PropTypes.bool, 	//show lunar

		onFocus: React.PropTypes.func,		//args (event, picker)
		onBlur: React.PropTypes.func,		//args (event, picker)
		onChange: React.PropTypes.func,		//args (dayinfo, picker)
		dayAddon: React.PropTypes.func 		//args (dayinfo)
		//dayAddon, add data for day, and need to return dom, 
		//the return value will be insert to day each element. pls see last demo
	},
	getInitialState() {
	    return {
	    	date: now,		//render month by date
	        show: this.props.inline ? true : false,
	        focus: false,	//focus state
	        offset: {},		//datepicker position
	    	selected: this.props.selected,
	        start: this.props.start,
			end: this.props.end,
	       	//status: undefined, 	//React.PropTypes.oneOf(['start', 'end']) 
	       					//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
	    };
	},

	getDefaultProps() {
	    return {
	        isfill: false,
	        format: 'yyyy-MM-dd',
	        selected: now,
	        months: 1,
	        lang: 'en'
	    };
	},
	onFocus(event, input){
		let {show, focus, selected} = this.state
		if(show && !focus){
			this.state.focus = true//just change state not trigger render
			return
		} 
		let status = input.props.status; selected = status?this.state[status]:selected;
		let {left, top, height} = input.handlePosition();  
			top += (height+ (document.body.scrollTop || document.documentElement.scrollTop))
		let {onFocus} = this.props
		
		this.show(true, {left, top}, true, status)
		onFocus && onFocus(event, this)
		if(status) this.setState({date: selected})
	},
	onBlur(event, input){
		const {show, focus} = this.state
		const {inline, onBlur} = this.props
		if(!show) return;
		if (!focus) {
	      	input.focus()	//when show && !focus, trigger focus   
	    } else if(!inline) {
	      onBlur && onBlur(event, this)
	      focus && this.removePicker()
	    } 
	},
	show (show, offset, focus, status) {
	    this.setState({ show, offset, focus, status})
	},
	updateMonth(num){
		const {date} = this.state
		const cdate = this.numMonth(date, num)
		this.updateDate({date: cdate}, true)
	},
	numMonth(date, num){
		return new Date(date.getFullYear(), date.getMonth() + num, date.getDate())
	},
	updateDay(dateinfo){
		this.updateDate(dateinfo)
	},
	updateDate(dateinfo, isMonth){
		let {onChange, autoHide} = this.props
		let {status='selected', selected} = this.state
		let getSelected = !isMonth ? dateinfo.date : this.state[status]
		// let temp = {}; temp[status] = getSelected
		this.setState({show: true, date: dateinfo.date, selected: getSelected, focus: false, [status]: getSelected})
		onChange && onChange(dateinfo, this)
		!isMonth && autoHide && this.removePicker()
	},
	removePicker(){
		this.show(false)
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker(true)
	},

    pickers(status) {
		let $pickers = [], offsets = [], dh, dc, idate
		let {date,  start, end, offset} = this.state
		let {inline, months, lang, haslunar, className} = this.props
		let selected = this.state[status?status:'selected']
		let classes = `date-picker date-picker-${inline?'inline':'block'} ${className?className:''} ${haslunar?'date-picker-lunar':''}`
		for(var i=0; i<months; i++){
			offsets.push({left: i*215+offset.left, top: offset.top})
			idate = this.numMonth(date, i)
			dh = <DateHeader date={idate} lang={haslunar?'cn':lang} updateMonth={this.updateMonth}/>
			dc = <DateCalendar {...this.props} date={idate} status={status} start={start} end={end} selected={selected} onChange={this.updateDay}/>
			 
			$pickers.push(inline ?
					 <div className={classes} key={i}>{dh}{dc}</div> :
					 <div className={classes} style={offsets[i]} key={i}>{dh}{dc}</div>)
		}
		return $pickers
    },
	render () {
		let {show, selected, start, end, status} = this.state
		let {format, inline, months, disabled} = this.props
		let picker, pickers, pickerInBody
		let di = (val, stat) => <DateInput selected={!val ? selected : val} format={format} disabled={disabled}
							   onFocus={this.onFocus} onBlur={this.onBlur} status={stat}/>
		if(show){
			pickers = this.pickers(status)
			picker = <div className={months>1?'date-multi clearfix':''}>{pickers}</div>
			pickerInBody = <DateInBody classes="date-picker-wrapper" ref="insDateInBody">{picker}</DateInBody>
		}
		let didom = start && end ? <div className="date-inputs">{di(start, 'start')}{di(end, 'end')}</div> : di()
		return <div className="date-components">
					{didom}
					{inline ? picker : pickerInBody}
				</div>
	}
});

export default ReactDatepickerPlus;
