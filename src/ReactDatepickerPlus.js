import React from 'react'
import ReactDOM from "react-dom"
var DateHeader = require('./date-header.jsx')
var DateCalendar = require('./date-calendar.jsx')
var DateInput = require('./date-input.jsx')
var DateInBody = require('./date-in-body.jsx')

var now = new Date()
var ReactDatepickerPlus = React.createClass({
	propTypes: {
		selected: React.PropTypes.object,	//default date
		format: React.PropTypes.string, //format date
		isfill: React.PropTypes.bool,	//show prefix-prev prefix-next month 
		months: React.PropTypes.number,
		time: React.PropTypes.bool,     //show time select?
		min: React.PropTypes.object,    //select date range min
		max: React.PropTypes.object,    //select date range max
		disabled: React.PropTypes.bool,  //input can't change

		start: React.PropTypes.object,	 //selected time is a range, start date
		end: React.PropTypes.object,	 //selected time is a range, start date

		autoHide: React.PropTypes.bool,  //selected auto hide
		inline: React.PropTypes.bool,    //inline

		festival: React.PropTypes.bool, //show festival
		haslunar: React.PropTypes.bool, //show lunar

		onChange: React.PropTypes.func,
		onFocus: React.PropTypes.func,
		onBlur: React.PropTypes.func,

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
	       	status: '', 	//React.PropTypes.oneOf(['start', 'end', '']) 
	       					//'start' and 'end' use by bi-datepicker range value, and '' use by single datepicker single date
	    };
	},

	getDefaultProps() {
	    return {
	        isfill: false,
	        format: 'yyyy-MM-dd',
	        selected: now,
	        months: 1
	    };
	},
	onFocus(event, input){
		let {show, focus, selected} = this.state
		if(show && !focus){
			this.state.focus = true//just change state not trigger render
			return
		} 
		let status = input.props.status; selected = status?this.state[status]:selected;
		let size = input.handlePosition()
		let {left, top, height} = size; top += (height+document.body.scrollTop)
		let {onFocus} = this.props
		
		this.show(true, {left, top}, true, status)
		if(onFocus) onFocus(event)
		if(status) this.setState({date: selected})
	},
	onBlur(event, input){
		const {show, focus} = this.state
		const {inline, onBlur} = this.props
		if(!show) return;
		if (!focus) {
	      	input.focus()	//when show && !focus, trigger focus   
	    } else if(!inline) {
	      focus && this.removePicker()
	      onBlur && onBlur(event)
	    } 
	},
	onMouseDown(event){
/*		event.stopPropagation()
		event.preventDefault()*/
	},
	onInputChange(event){

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
		let {status, selected} = this.state
		let getSelected = !isMonth ? dateinfo.date : this.state[status?status:'selected']
		let temp = {}; temp[status] = getSelected
		this.setState(Object.assign({show: true, date: dateinfo.date, selected: getSelected, focus: false}, temp))
		onChange && onChange(dateinfo)
		!isMonth && autoHide && this.removePicker()
	},
	removePicker(){
		this.show(false)
		this.refs.insDateInBody && this.refs.insDateInBody.removePicker(true)
	},

 /*
	componentWillMount(){
		// ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.refs.insDateInBody))
	},
	componentDidMount() {
	  this.setState({
	    styles: offset
	  }) 
	}*/
	/* componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'componentWillReceiveProps')
    },
    shouldComponentUpdate(nextProps){
    	console.log(nextProps, this.state.show, 'nextProps')
    	// if(nextProps.date === this.props.date) return false
    	return true 
    },
     */
    pickers(status) {
		let $pickers = [], offsets = [], dh, dc, idate
		let {date,  start, end, offset} = this.state
		let {inline, months} = this.props
		let selected = this.state[status?status:'selected']
		for(var i=0; i<months; i++){
			offsets.push({left: i*215+offset.left, top: offset.top})
			idate = this.numMonth(date, i)
			dh = <DateHeader date={idate} updateMonth={this.updateMonth}/>
			dc = <DateCalendar {...this.props} date={idate} status={status} start={start} end={end} selected={selected} onChange={this.updateDay}/>
			$pickers.push(inline ?
					 <div className="date-picker date-picker-inline" key={i}>{dh}{dc}</div> :
					 <div className="date-picker date-picker-block" style={offsets[i]} key={i}>{dh}{dc}</div>)
		}
		return $pickers
    },
	render () {
		let {show, selected, start, end, status} = this.state
		let {format, inline, months, disabled} = this.props
		let picker, pickers, pickerInBody
		let di = (val, stat) => <DateInput selected={!val ? selected : val} format={format} disabled={disabled}
							   onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onInputChange}　status={stat}
							   ref="insDateInput" />
		if(show){
			pickers = this.pickers(status)
			picker = <div className={months>1?'date-multi':''}>{pickers}</div>
			pickerInBody = <DateInBody classList="date-picker-wrapper" ref="insDateInBody">{picker}</DateInBody>
		}
		let didom = start && end ? <div className="date-inputs">{di(start, 'start')}{di(end, 'end')}</div> : di()
		return <div className="date-components">
					{didom}
					{inline ? picker : pickerInBody}
				</div>
	}
});

export default ReactDatepickerPlus;
