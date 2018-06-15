import React, {Component} from 'react'
import DateDay from './date-day.js'
class DateTime extends Component {
	render() {
		return <div className="date-time">{new Date().getHours() + ':' + new Date().getMinutes()}</div>
	}
}

export default DateTime
