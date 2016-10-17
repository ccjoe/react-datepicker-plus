import React from 'react'
import ReactDOM from "react-dom"
import {dateFormat} from './date-format'

var DateInput = React.createClass({
	 propTypes: {
	    // element: React.PropTypes.element,
	    selected: React.PropTypes.any,
	    disabled: React.PropTypes.bool,
	    onBlur: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onChange: React.PropTypes.func
	},
	getDefaultProps() {
	    return {
	        status: ''  
	    };
	},
/*	getInitialState () {
	    return {
	      // value:  this.dateString()
	        styles: {
		      top: 0,
		      left: 0
		    }
	    }
	},
	componentDidMount() {
	  this.setState({
	    // styles: 
	  })
	},*/
	dateString(){
		const {format, selected} = this.props
		return format ? dateFormat(selected, format) : selected
	},
	handleBlur(event){
		this.props.onBlur(event, this)
	},	
	handleFocus(event){
		this.props.onFocus(event, this)
	},
	focus () {
	    this.refs.input.focus()
	},
	handleChange(event){
		this.props.onChange(event)
	},
	getInput(){
        return ReactDOM.findDOMNode(this)
	},	
	handlePosition(){
        return this.getInput().getBoundingClientRect()
	},
	
	render () {
		const { customInput, disabled } = this.props
		return <input ref="input" type="text" disabled={disabled} value={this.dateString()} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
	}
});

export default DateInput