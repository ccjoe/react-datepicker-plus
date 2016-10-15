var React = require('react')
var chars = {
	weeksHan:['日', '一', '二', '三', '四', '五', '六'],
    weeksEng: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthsHan:['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    monthsEng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
		return <div className="date-header">
			<div className="date-title">
				<span className="date-prev" onMouseDown={ this.changeMonth.bind(this, -1) }></span>
				<span className="date-m">{this.getDate().getFullYear()} {this.getDate().getMonth()+1}月</span>
				<span className="date-next" onMouseDown={ this.changeMonth.bind(this, 1) }></span>
			</div>	
			<div className="date-wtitle">
				{chars.weeksHan.map((week, key) => <span key={key}>{week}</span>)}
			</div>
		</div>
	}
});

export default dateHeader