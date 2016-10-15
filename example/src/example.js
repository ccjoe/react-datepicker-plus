var React = require('react');
var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker-plus');
var now = new Date('2016/10/01')
var App = React.createClass({
	propTypes:{
		date: React.PropTypes.object,
		isfill: React.PropTypes.bool,
	},
	getDefaultProps() {
	    return {
	        date: now,
	        isfill: true
	    };
	},  
	doChange(dateinfo){
		// this.setState({date: dateinfo.date})
	},
			
	render () {
		return (
			<div className="clearfix">
				<div className="demo-item">
					<h5>dead simple datepicker</h5>
					<Datepicker/>
				</div>	
							
				<div className="demo-item">
					<h5>datepicker with default date</h5>
					<Datepicker selected={now}/>
				</div>

				<div className="demo-item">
					<h5>datepicker autoHide when selected</h5>
					<Datepicker autoHide={true}/>
				</div>
				
				<div className="demo-item">
					<h5>datepicker isfill true</h5>
					<Datepicker isfill={this.props.isfill} onChange={this.doChange}/>
				</div>


				<div className="demo-item">
					<h5>inline datepicker</h5>
					<Datepicker inline />
				</div>						

				<div className="demo-item demo-full">
					<h5>datepicker with 2 month inline</h5>
					<Datepicker months={2} inline isfill={true}/>
				</div>				

				<div className="demo-item demo-full">
					<h5>datepicker with 2 month popup</h5>
					<Datepicker months={2} isfill={true}/>
				</div>				


				<div className="demo-item">
					<h5>datepicker with festival</h5>
					<Datepicker inline festival={true}/>
				</div>				


				<div className="demo-item">
					<h5>datepicker with lunar(lunar include term)</h5>
					<Datepicker inline haslunar={true}  isfill={true} festival={true}/>
				</div>
			</div>
		);
	}
});
 
ReactDOM.render(<App />, document.getElementById('app'));
