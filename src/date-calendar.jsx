import React from 'react'

import DateMonth from './date-month.jsx'
import DateTime from './date-time.jsx';

var DateCalendar = React.createClass({ 
	render () {
		const datecld  = <DateMonth {...this.props} />
		const datetime = <DateTime {...this.props} />
		let picker = this.props.time ? datecld+datetime: datecld;
		return <div className="date-calendar animated infinite fadeInRight">
			{picker}
		</div>
	}
});

export default DateCalendar