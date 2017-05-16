import React, { Component } from 'react'

import DateMonth from './date-month.js'
import DateTime from './date-time.js';
class DateCalendar extends Component {
	constructor(props) {
        super(props);
    }
	render () {
		const datecld  = <DateMonth {...this.props} />
		const datetime = <DateTime {...this.props} />
		let picker = this.props.time ? datecld+datetime: datecld;
		return <div className="date-calendar animated infinite fadeInRight">
			{picker}
		</div>
	}
};

export default DateCalendar