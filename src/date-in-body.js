import React, { Component } from 'react'
import ReactDOM from "react-dom"
class DateInBody extends Component {  
  // propTypes: {
  //   classes: React.PropTypes.string, //class split by spacing
  //   offset: React.PropTypes.object,
  // }
  componentDidMount() {
    this.popup = document.createElement("div")
    // this.popup.className = this.props.classes
    document.body.appendChild(this.popup)
    this.renderLayer()
  }

  componentDidUpdate() {
    this.renderLayer()
  }

  componentWillMount() {
    // this.removePicker()
  }
  removePicker(current){
    this.popup = current ? this.popup : document.getElementsByClassName('date-picker-wrapper')[0]
    // console.log(this.popup, 'popup')
    if(this.popup){
      ReactDOM.unmountComponentAtNode(this.popup)
      document.body.removeChild(this.popup)
    }
  }
  renderLayer() {
    if(this.props.children)
      ReactDOM.render(this.props.children, this.popup)
  }

  render() {
    return <div {...this.props} children={null} style={this.props.offset}/>
  }
}

export default DateInBody;