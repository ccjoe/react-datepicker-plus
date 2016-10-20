import React from 'react'
const chars = {
	weeksCn:['日', '一', '二', '三', '四', '五', '六'],
    weeksEnF: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weeksEnS: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthsCn:['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    monthsEn: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}
var dateHeader = React.createClass({
	propTypes: {
	    updateMonth: React.PropTypes.func
	},
	getDate(){
		return this.props.date
	},
	changeMonth(num){
		this.props.updateMonth(num)
	},
	render () {
		const {lang} = this.props
		const cn = lang === 'cn'
		let year=this.getDate().getFullYear(), month=this.getDate().getMonth()+1;

		let monthstr = cn?(year+' '+month+'月') : chars.monthsEn[month-1]+' '+year;
		return <div className="date-header">
			<div className="date-title">
				<span className="date-prev" onMouseDown={ this.changeMonth.bind(this, -1) }></span>
				<span className="date-m">{monthstr}</span>
				<span className="date-next" onMouseDown={ this.changeMonth.bind(this, 1) }></span>
			</div>	
			<div className="date-wtitle">
				{chars[cn?'weeksCn':'weeksEnS'].map((week, key) => <span key={key}>{week}</span>)}
			</div>
		</div>
	}
});

export default dateHeader