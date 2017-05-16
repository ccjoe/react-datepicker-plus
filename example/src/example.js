import React, { Component } from 'react'
var ReactDOM = require('react-dom');
var Datepicker = require('react-datepicker-plus');
var now = new Date('2016/10/15')
var min = new Date('2016/10/10')
var max = new Date('2016/10/20')

import {dateFormat} from '../../src/date-format'
class App extends Component {
	// propTypes:{
	// 	date: React.PropTypes.object,
	// 	isfill: React.PropTypes.bool,
	// 	// addonData: React.PropTypes.object
	// },
	constructor(props) {
        super(props);
		this.state = {
			addonData: {
				rest: {
					'2016/01/01': '休',
					'2016/10/01': '休',
					'2016/10/02': '休',
					'2016/10/03': '休',
					'2016/10/04': '休',
					'2016/10/05': '休',
					'2016/10/06': '休',
					'2016/10/07': '休'
				},
				price: {
					'2016/10/01': '￥566',
					'2016/10/02': '￥576',
					'2016/10/03': '￥555',
					'2016/10/04': '￥550',
					'2016/10/05': '￥450',
					'2016/10/06': '￥650',
					'2016/10/07': '￥655',
					'2016/10/08': '￥500',
					'2016/10/09': '￥300',	        		
					'2016/10/10': '￥566',
					'2016/10/11': '￥576',
					'2016/10/12': '￥555',
					'2016/10/13': '￥550',
					'2016/10/14': '￥450',
					'2016/10/15': '￥650',
					'2016/10/16': '￥655',
					'2016/10/17': '￥500',
					'2016/10/18': '￥300',
				}
			}
		}
	}
	onFocus(event){
		console.log(event, 'onFocus')
	}
	onBlur(event){
		console.log(event, 'onBlur')
	}
	onChange(dateinfo){
		console.log(dateinfo, 'onChange')
	}
	dayAddon(dayinfo){
		let {addonData} = this.state
		let {date} = dayinfo
		let dateStr = dateFormat(date, 'yyyy/MM/dd')
		let resstr, val, doms = []
		for(var key in addonData){
			resstr = addonData[key][dateStr]
			if(resstr){ 
				doms.push(<span className={'date-day-'+key} key={key}>{resstr}</span>)
			}
		}
		return doms
	}
	

	render () {
		return (
			<div className="demo-list clearfix">
				<pre className="demo-code">
					{`
--------------------------					
Props And CALLBACK OR APIs
--------------------------					
selected: React.PropTypes.object,	//default date
format: React.PropTypes.string,     //format date
isfill: React.PropTypes.bool,	    //show prefix-prev prefix-next month 
months: React.PropTypes.number,		//show multi-panes by months

time: React.PropTypes.bool,         //show time select @todo

min: React.PropTypes.object,        //select date range min
max: React.PropTypes.object,        //select date range max



start: React.PropTypes.object,	    //selected time is a range, start date
end: React.PropTypes.object,	    //selected time is a range, start date

className: React.PropTypes.string,  // custom class
disabled: React.PropTypes.bool,     //input can't change
autoHide: React.PropTypes.bool,     //selected auto hide
inline: React.PropTypes.bool,       //inline
lang: React.PropTypes.oneOf(['cn', 'en'])

festival: React.PropTypes.bool, 	//show festival
haslunar: React.PropTypes.bool, 	//show lunar

onFocus: React.PropTypes.func,		//args (event, picker)
onBlur: React.PropTypes.func,		//args (event, picker)
onChange: React.PropTypes.func,		//args (dayinfo, picker)
dayAddon: React.PropTypes.func 		//args (dayinfo)
		
//dayAddon, add data for day, and need to return dom, 
//the return value will be insert to day each element. pls see last demo
 
 \n
================================
var now = new Date('2016/10/15')\nvar min = new Date('2016/10/10')\nvar max = new Date('2016/10/20')
					`}
				</pre>

						

				<div className="demo-item demo-full">
					<h5>datepicker with 2 month inline</h5>
					<pre className="demo-code">
						{`<Datepicker months={2} inline isfill={true}/>`}
      				</pre>
					<Datepicker months={2}  isfill={true}/>
				</div>				

							

				<div className="demo-item demo-full">
					<h5>datepicker with cn holiday label('休')</h5>
					<pre className="demo-code">
						{`	
static initialState() {
	addonData: {
		rest: {
			'2016/01/01': '休',
			'2016/10/01': '休',
			'2016/10/02': '休',
			'2016/10/03': '休',
			'2016/10/04': '休',
			'2016/10/05': '休',
			'2016/10/06': '休',
			'2016/10/07': '休'
		},
		price: {
			'2016/10/01': '566',
			'2016/10/02': '576',
			'2016/10/03': '555',
			'2016/10/04': '550',
			'2016/10/05': '450',
			'2016/10/06': '650',
			'2016/10/07': '655',
			'2016/10/08': '500',
			'2016/10/09': '300'
		}
	}
},
dayAddon(dayinfo){
	let {addonData} = this.state
	let {date} = dayinfo
	let dateStr = dateFormat(date, 'yyyy/MM/dd')
	let resstr, val, doms = []
	for(var key in addonData){
		resstr = addonData[key][dateStr]
		if(resstr){ 
			doms.push(<span className={'date-day-'+key} key={key}>{resstr}</span>)
		}
	}
	return doms
},
<Datepicker  className="date-picker-demo" inline  selected={now} haslunar={true}  isfill={true} festival={true}/> dayAddon={this.dayAddon}`}
      				</pre>
					<Datepicker className="date-picker-demo" inline selected={now} haslunar={true}  isfill={true} festival={true} dayAddon={this.dayAddon.bind(this)}/>
				</div>
			</div>
		);
	}
}

App.defaultProps = {
	date: now,
	isfill: true
}



ReactDOM.render(<App />, document.getElementById('app'));
