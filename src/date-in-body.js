import React, { Component } from 'react'
import ReactDOM from "react-dom"
class DateInBody extends Component {
  // propTypes: {
  //   classes: React.PropTypes.string, //class split by spacing
  //   offset: React.PropTypes.object,
  //   updateSize: React.PropTypes.function
  // }
  // constructor(props) {
  //     super(props);
  // }

  componentDidMount() {
    this.popup = document.createElement("div")
    // this.popup.className = this.props.classes
    document.body.appendChild(this.popup)
    this.renderLayer()
    if(!this.props.inline){
      let adjustSize = this.popup.getElementsByClassName('date-picker')[0].clientWidth
      this.props.onUpdate && this.props.onUpdate(adjustSize);
    }
  }

  componentDidUpdate() {
    this.renderLayer()
  }

  componentWillMount() {
    // this.removePicker()
  }
  removePicker(){
    // this.popup = current ? this.popup : document.getElementsByClassName('date-picker-wrapper')[0]
    if(this.popup){
				ReactDOM.unmountComponentAtNode(this.popup)
				document.body.removeChild(this.popup)
				this.popup = null
    }
  }
  renderLayer() {
    if(this.props.children)
      ReactDOM.render(this.props.children, this.popup)
  }

  render() {
    return <div className={this.props.className} children={null} style={this.props.offset}/>
  }
}

export default DateInBody;