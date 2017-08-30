import React, { Component } from 'react'
import ReactDOM from "react-dom"
import {dateFormat} from './date-format'
class DateInput extends Component {
	//  propTypes: {
	//     // element: React.PropTypes.element,
	//     selected: React.PropTypes.any,
	//     disabled: React.PropTypes.bool,
	//     onBlur: React.PropTypes.func,
	//     onFocus: React.PropTypes.func,
	//     onChange: React.PropTypes.func
	// }
	 constructor(props) {
        super(props);
	 }
/*	getInitialState () {
	    return {
	      // value:  this.dateString()
	        styles: {
		      top: 0,
		      left: 0
		    }
	    }
	}
	componentDidMount() {
	  this.setState({
	    // styles:
	  })
	}*/
	dateString(){
		const {format, selected} = this.props
		return format ? dateFormat(selected, format) : selected
	}
	handleBlur(event){
		this.props.onBlur(event, this)
	}
	handleFocus(event){
		this.props.onFocus(event, this)
	}
	focus () {
	    this.refs.input.focus()
	}
	handleChange(event){
		this.props.onChange(event)
	}
	getInput(){
        return ReactDOM.findDOMNode(this)
	}
	handlePosition(){
		// Fix for IE8-'s Element.getBoundingClientRect()
	  if ('TextRectangle' in window && !('width' in TextRectangle.prototype)) {
	    Object.defineProperties(TextRectangle.prototype, {
	      'width': { get: function() { return this.right - this.left; } },
	      'height': { get: function() { return this.bottom - this.top; } }
	    });
	  }
      return this.getInput().getBoundingClientRect()
	}

	render () {
		const { customInput, disabled } = this.props
		console.log(this.dateString(), 'this.dateString()')
		return <input ref="input" type="text" disabled={disabled} value={this.dateString()} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)} />
	}
};

export default DateInput