var React = require('react');
var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker-plus');
var now = new Date('2016/10/15')
var min = new Date('2016/10/10')
var max = new Date('2016/10/20')

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
			<div className="demo-list clearfix">
				<pre className="demo-code">
					{`var now = new Date('2016/10/15')\nvar min = new Date('2016/10/10')\nvar max = new Date('2016/10/20')`}
				</pre>

				<div className="demo-item demo-full">
					<h5>datepicker with 12 month popup</h5>
					<pre className="demo-code">
						{`<Datepicker months={12} isfill={true} inline/>`}
      				</pre>
					<Datepicker months={12} isfill={true} inline/>
				</div>	

				<div className="demo-item">
					<h5>dead simple datepicker</h5>
					<pre className="demo-code">
						{`<Datepicker/>`}
      				</pre>
					<Datepicker/>
				</div>					

				<div className="demo-item">
					<h5>datepicker with lang chinese</h5>
					<pre className="demo-code">
						{`<Datepicker lang='cn'/>`}
      				</pre>
					<Datepicker lang='cn'/>
				</div>	

				<div className="demo-item">
					<h5>datepicker with default date</h5>
					<pre className="demo-code">
						{`<Datepicker selected={now}/>`}
      				</pre>
					<Datepicker selected={now}/>
				</div>

				<div className="demo-item">
					<h5>datepicker autoHide when selected</h5>
					<pre className="demo-code">
						{`<Datepicker autoHide={true}/>`}
      				</pre>
					<Datepicker autoHide={true}/>
				</div>
				
				<div className="demo-item">
					<h5>datepicker isfill true</h5>
					<pre className="demo-code">
						{`<Datepicker isfill={this.props.isfill}/>`}
      				</pre>
					<Datepicker isfill={this.props.isfill} onChange={this.doChange}/>
				</div>

				<div className="demo-item">
					<h5>inline datepicker</h5>
					<pre className="demo-code">
						{`<Datepicker inline />`}
      				</pre>
					<Datepicker inline />
				</div>					

				<div className="demo-item">
					<h5>datepicker with min and max range</h5>
					<pre className="demo-code">
						{`<Datepicker inline min={min} max={max} />`}
      				</pre>
					<Datepicker inline min={min} max={max} />
				</div>	

				<div className="demo-item demo-full">
					<h5>bi-datepicker with start and end range</h5>
					<pre className="demo-code">
						{`<Datepicker start={min} end={max} />`}
      				</pre>
					<Datepicker start={min} end={max} />
				</div>						

				<div className="demo-item demo-full">
					<h5>bi-datepicker with start and end range, and show 2 months </h5>
					<pre className="demo-code">
						{`<Datepicker start={min} end={max} months={2}  isfill={true}/>`}
      				</pre>
					<Datepicker start={min} end={max} months={2}  isfill={true}/>
				</div>							

				<div className="demo-item demo-full">
					<h5>bi-datepicker with start and end range</h5>
					<pre className="demo-code">
						{`<Datepicker start={min} end={max} inline/>`}
      				</pre>
					<Datepicker start={min} end={max} inline/>
				</div>						

				<div className="demo-item demo-full">
					<h5>datepicker with 2 month inline</h5>
					<pre className="demo-code">
						{`<Datepicker months={2} inline isfill={true}/>`}
      				</pre>
					<Datepicker months={2} inline isfill={true}/>
				</div>				

				<div className="demo-item demo-full">
					<h5>datepicker with 2 month popup</h5>
					<pre className="demo-code">
						{`<Datepicker months={2} isfill={true}/>`}
      				</pre>
					<Datepicker months={2} isfill={true}/>
				</div>						

				<div className="demo-item demo-full">
					<h5>datepicker with 3 month popup</h5>
					<pre className="demo-code">
						{`<Datepicker months={3} isfill={true}/>`}
      				</pre>
					<Datepicker months={3} isfill={true}/>
				</div>					

				<div className="demo-item">
					<h5>datepicker with festival</h5>
					<pre className="demo-code">
						{`<Datepicker inline festival={true}/>`}
      				</pre>
					<Datepicker inline festival={true}/>
				</div>				


				<div className="demo-item">
					<h5>datepicker with lunar(lunar auto include term and lang is 'cn')</h5>
					<pre className="demo-code">
						{`<Datepicker inline haslunar={true}  isfill={true} festival={true}/>`}
      				</pre>
					<Datepicker inline haslunar={true}  isfill={true} festival={true}/>
				</div>

				<div className="demo-item">
					<h5>datepicker disabled</h5>
					<pre className="demo-code">
						{`<Datepicker disabled={true}/>`}
      				</pre>
					<Datepicker disabled={true}/>
				</div>
			</div>
		);
	}
});
 
ReactDOM.render(<App />, document.getElementById('app'));
