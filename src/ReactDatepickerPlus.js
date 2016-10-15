import React from 'react'
import ReactDOM from "react-dom"
var DateHeader = require('./date-header.jsx')
var DateCalendar = require('./date-calendar.jsx')
var DateInput = require('./date-input.jsx')
var DateInBody = require('./date-in-body.jsx')

var now = new Date()
var ReactDatepickerPlus = React.createClass({
	propTypes: {
		selected: React.PropTypes.any,	//default date
		format: React.PropTypes.string, //format date
		isfill: React.PropTypes.bool,	//show prefix-prev prefix-next month 
		months: React.PropTypes.number,
		time: React.PropTypes.bool,     //show time select?
		festival: React.PropTypes.bool, //show festival
		haslunar: React.PropTypes.bool, //show lunar
		onChange: React.PropTypes.func,
		onFocus: React.PropTypes.func,
		onBlur: React.PropTypes.func,
		autoHide: React.PropTypes.bool,  //selected auto hide
		inline: React.PropTypes.bool    //inline
	},
	getInitialState() {
	    return {
	    	date: now,
	    	selected: this.props.selected,
	        show: this.props.inline ? true : false,
	        focus: false,	//focus state
	        offset: {}		//datepicker position
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
	onFocus(event){
		let {show, focus} = this.state
		if(show && !focus){
			this.state.focus = true//just change state not trigger render
			return
		} 
		let size = this.refs.insDateInput.handlePosition()
		let {left, top, height} = size
		top += (height+document.body.scrollTop)
		this.show(true, {left, top}, true)

		let {onFocus} = this.props
		if(onFocus) onFocus(event)
	},
	onBlur(event){
		const {show, focus} = this.state
		const {inline, onBlur} = this.props
		if(!show) return;
		if (!focus) {
	      	this.refs.insDateInput.focus()	//when show && !focus, trigger focus   
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
	show (show, offset, focus) {
	    this.setState({ show, offset, focus })
	},
	updateMonth(num){
		const {date} = this.state
		const cdate = this.numMonth(date, num)
		this.updateDate({date: cdate}, true)
	},
	numMonth(date, num){
		return new Date(date.getFullYear(), date.getMonth() + num, 1)
	},
	updateDay(dateinfo){
		this.updateDate(dateinfo)
	},
	updateDate(dateinfo, isMonth){
		let {onChange, autoHide} = this.props
		this.setState({show: true, date: dateinfo.date, selected: !isMonth ? dateinfo.date :this.state.selected, focus: false})
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
    pickers() {
		let $pickers = [], offsets = [], dh, dc, idate
		let {date, selected, offset} = this.state
		let {inline, months} = this.props
		
		for(var i=0; i<months; i++){
			offsets.push({left: i*215+offset.left, top: offset.top})
			idate = this.numMonth(date, i)
			dh = <DateHeader date={idate} updateMonth={this.updateMonth}/>
			dc = <DateCalendar {...this.props} date={idate} selected={selected} onChange={this.updateDay}/>
			$pickers.push(inline ?
					 <div className="date-picker date-picker-inline" key={i}>{dh}{dc}</div> :
					 <div className="date-picker date-picker-block" style={offsets[i]} onMouseDown={this.onMouseDown} key={i}>{dh}{dc}</div>)
		}
		return $pickers
    },
	render () {
		let {date, show, selected} = this.state
		let {format, inline, months} = this.props
		let picker, pickers, pickerInBody
		let dh = <DateHeader date={date} updateMonth={this.updateMonth}/>
		let dc = <DateCalendar {...this.props} date={date} selected={selected} onChange={this.updateDay} />

		if(show){
			pickers = this.pickers()
			picker = <div className={months>1?'date-multi':''}>{pickers}</div>
			pickerInBody = <DateInBody classList="date-picker-wrapper" ref="insDateInBody">{picker}</DateInBody>
		}
		// console.log(inline, show, datepicker, 'datepicker')
		return <div className="date-components">
					<DateInput selected={selected} format={format} 
							   onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onInputChange}
							   ref="insDateInput" />	
					{inline ? picker : pickerInBody}
				</div>
	}
});

export default ReactDatepickerPlus;
