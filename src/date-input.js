import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {dateFormat} from './date-format'
class DateInput extends Component {
	constructor(props) {
		super(props)
	}

	dateString() {
		const {format, selected} = this.props
		return format ? dateFormat(selected, format) : selected
	}
	handleBlur(event) {
		this.props.onBlur(event, this)
	}
	handleFocus(event) {
		this.props.onFocus(event, this)
	}
	focus() {
		this.refs.input.focus()
	}
	handleChange() {
		// this.props.onChange(event, this)
	}
	getInput() {
		return ReactDOM.findDOMNode(this)
	}
	handlePosition() {
		// Fix for IE8-'s Element.getBoundingClientRect()
		if ('TextRectangle' in window && !('width' in TextRectangle.prototype)) {
			Object.defineProperties(TextRectangle.prototype, {
				width: {
					get: function() {
						return this.right - this.left
					}
				},
				height: {
					get: function() {
						return this.bottom - this.top
					}
				}
			})
		}
		return this.getInput().getBoundingClientRect()
	}

	recursiveMap(childs, inputElem) {
		var copyHasChildElem = child =>
			React.cloneElement(child, {
				children: this.recursiveMap(child.props.children, inputElem)
			})

		if (childs.props && childs.props.children) {
			return copyHasChildElem(childs)
		}

		return React.Children.map(childs, child => {
			if (React.isValidElement(child)) {
				return child.type !== 'input' ? child : inputElem
			}
			if (child.props.children) {
				child = copyHasChildElem(child)
			}
			return child
		})
	}

	setChildInput(children, inputElem) {
		if (children && children.props) {
			return <children>{this.setChildInput(children.props.children, inputElem)}</children>
		} else {
			return React.Children.map(children, child => {
				return child.type === 'input' ? inputElem : child
			})
		}
	}

	render() {
		const {disabled, placeholder, children} = this.props
		const inputElem = (
			<input
				ref="input"
				type="text"
				placeholder={placeholder}
				disabled={disabled}
				value={this.dateString()}
				onFocus={this.handleFocus.bind(this)}
				onBlur={this.handleBlur.bind(this)}
				onChange={this.handleChange.bind(this)}
			/>
		)
		return children ? this.recursiveMap(children, inputElem) : inputElem
	}
}

export default DateInput
