import React from 'react'

var DateTime = React.createClass({ 
	render () {
		return <div className="date-time">
			{new Date().getHours()+ ':' + new Date().getMinutes()}
		</div>
	}
})

export default DateTime