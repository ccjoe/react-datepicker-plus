//@todo 解决切换月份时， 选择的值有变；2.外部值变化后，input值与ui没有变化 3 key input
// import './datepicker.less'
import React, { Component } from 'react'
import ReactDOM from "react-dom"
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
	// }
	 constructor(props) {
		super(props);
		var selected =  dateObject(props.selected)
        this.state = {
				date: selected,		//render month by date
				show: props.inline ? true : false,
				focus: false,	//focus state true/false/'blank'
				offset: {},		//datepicker position
				selected: selected,
				start: dateObject(props.start),
				end: dateObject(props.end),
				min: dateObject(props.min),
				max: dateObject(props.max),
				// status: ''   	//React.PropTypes.oneOf(['start', 'end'])
				//'start' and 'end' use by bi-datepicker range value, and undefined use by single datepicker single date
		}
    }

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
	}

	onBlur(event, input){
		const {show, focus, status} = this.state
		const {inline, onBlur, autoHide} = this.props
		if(autoHide){
			if(!focus){
				this.removePicker()
				return
			}
		}
		if(!show) return;
		if (!focus || focus==='blank') {
			//use setTimeout for firefox will lost focus because onMouseDown then trigger onClick, fuck
	      	setTimeout(function(){ input.focus() }, 0)	//when show && !focus, trigger focus,
	    } else if(!inline) {
	      onBlur && onBlur(event, this)
	      focus && this.removePicker()
		}

	}

	clickPane(event, abc){
		if(this.state.focus)
			this.state.focus = 'blank'
	}

	show (show, offset, focus, status) {
	    this.setState({ show, offset, focus, status})
	}

	updateMonth(num){
		const {date} = this.state
		const cdate = this.numMonth(date, num)
		this.updateDate({date: cdate}, true)
	}

	numMonth(date, num){
		date = dateObject(date) || today
		return new Date(date.getFullYear(), date.getMonth() + num, date.getDate())
	}

	updateDay(dateinfo){
		this.updateDate(dateinfo)
	}

	updateDate(dateinfo, isMonth){
		let {onChange, autoHide, start, end} = this.props
		let {status='selected', selected} = this.state
		let getSelected = !isMonth ? dateinfo.date : this.state[status]

		this.setState({show: true, date: dateinfo.date, selected: getSelected, [status]: getSelected})

		if(!isMonth){
			this.state.focus = false
			dateinfo.status = status
			onChange && onChange(dateinfo, this)
		}else{
			this.state.focus = 'blank'
		}
	}

	removePicker(){
		this.show(false)
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker()
	}

    pickers(status) {
		let $pickers = [], offsets = [], dh, dc, idate
		let {date,  start, end, min, max, offset} = this.state
		let {inline, months, lang, haslunar, className} = this.props
		let selected = this.state[status?status:'selected']
		let classes = `date-picker date-picker-${inline?'inline':'block'} ${className?className:''} ${haslunar?'date-picker-lunar':''}`
		let pickerWidth = this.state.width || 215;
		for(var i=0; i<months; i++){
			offsets.push({left: i*pickerWidth + offset.left, top: offset.top})
			idate = this.numMonth(date, i)
			dh = <DateHeader date={idate} lang={haslunar?'cn':lang} updateMonth={this.updateMonth.bind(this)}/>
			dc = <DateCalendar {...this.props} min={min} max={max} date={idate} status={status} start={start} end={end} selected={selected} onChange={this.updateDay.bind(this)}/>

			$pickers.push(inline ?
					 <div onMouseDown={this.clickPane.bind(this)} className={classes} key={i}>{dh}{dc}</div> :
					 <div onMouseDown={this.clickPane.bind(this)} className={classes} style={offsets[i]} key={i}>{dh}{dc}</div>)
		}
		return $pickers
    }

    updateSize (w) {
		!this.props.inline && this.setState({width: w})
	}

	componentWillReceiveProps(props, oldprops) {
		if(props.selected !== this.props.selected){
			this.setState({selected: props.selected})
		}
		if(props.start !== this.props.start){
			this.setState({start: props.start})
		}
		if(props.end !== this.props.end){
			this.setState({end: props.end})
		}
	}

	render () {
		let {show, selected, start, end, status} = this.state
		let {format, inline, months, disabled, placeholder, placeholderEnd, children} = this.props
		let picker, pickers, pickerInBody
		let clsName = this.props.className || '', clsWrapperName = clsName?' '+clsName+'-panes': ''
		let di = (val, stat) => <DateInput selected={val===void 0 ? selected : val}
										   format={format} disabled={disabled}
										   placeholder={stat=='end'?placeholderEnd:placeholder}  children={children}
										   onFocus={this.onFocus.bind(this)}
										   onBlur={this.onBlur.bind(this)} status={stat}
										   ref={stat}/>
		if(show){
			pickers = this.pickers(status)
			picker = <div className={(months>1?'date-multi clearfix':'date-single') + clsWrapperName}>{pickers}</div>
			pickerInBody = <DateInBody  onUpdate={this.updateSize.bind(this)} className='date-picker-wrapper' ref="insDateInBody">{picker}</DateInBody>
		}
		let didom = start || end ? <div className="date-inputs">{start!==void 0 && di(start, 'start')}{end!==void 0 && di(end, 'end')}</div> : di()
		return <div className={"date-components "+ clsName}>
					{didom}
					{inline ? picker : pickerInBody}
				</div>
	}
};

ReactDatepickerPlus.defaultProps = {
	isfill: false,
	format: 'yyyy-MM-dd',
	selected: today,
	months: 1,
	lang: 'en'
}

export default ReactDatepickerPlus;
