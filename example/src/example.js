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
selected: React.PropTypes.object,	//default date, not defined, it will be now(), defined '' will be empty value
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
//  placeholder
//  children
 \n
================================
var now = new Date('2016/10/15')\nvar min = new Date('2016/10/10')\nvar max = new Date('2016/10/20')
					`}
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
					<h5>datepicker with empty value and placeholder</h5>
					<pre className="demo-code">
						{`<Datepicker selected="" placeholder="pls input sth..."/>`}
      				</pre>
					<Datepicker selected="" placeholder="pls input sth..."/>
				</div>

				<div className="demo-item">
					<h5>datepicker with self defined className</h5>
					<p>input Component root element will add your  self defined className, 'my-datepicker'<br/>
						and not inline datepicker pane Component root element will add  your  self defined className + 'my-datepicker-panes'</p>
					<pre className="demo-code">

						{`<Datepicker className="my-datepicker"/>`}
      				</pre>
					<Datepicker className="my-datepicker"/>
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
					<h5>datepicker disabled</h5>
					<pre className="demo-code">
						{`<Datepicker disabled={true}/>`}
      				</pre>
					<Datepicker disabled={true}/>
				</div>

				<div className="demo-item">
					<h5>datepicker isfill true</h5>
					<pre className="demo-code">
						{`<Datepicker isfill={this.props.isfill}/>`}
      				</pre>
					<Datepicker isfill={this.props.isfill}/>
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
					<h5>defined your input dom, {`<input/>`} element just placehold for real react input</h5>
					<pre className="demo-code">
						{`<Datepicker start={min} end={max}>
	<div className="type_item"> <span className="ico_date"></span><input/> </div>
</Datepicker>`}

{`

RENDER DOM IS:
<div class="date-inputs">
    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-10"></div>
    <div class="type_item"><span class="ico_date">icon</span><input type="text" value="2016-10-20"></div>
</div>`}
      				</pre>

					<Datepicker start={min} end={max} placeholder="departDate" placeholderEnd="arrivalDate">
						<div className="type_item">
							<span className="ico_date">icon</span>
							<input/>
						</div>
					</Datepicker>
					<style>{
						`
						.type_item {
							display: inline-block;
							position: relative;
						}
						.type_item input{
							padding-left: 36px;
						}
						.ico_date {
							position:absolute;
							background-color: #dcc;
							width: 30px; height:27px;line-height:27px;
							border:1px solid #98e
							text-aligh:center;
						}
						`}
					</style>
				</div>


				<div className="demo-item demo-full">
					<h5>bi-datepicker with start and end range, and show 2 months </h5>
					<pre className="demo-code">
						{`<Datepicker start={min} end={max} months={2}  isfill={true}/>`}
      				</pre>
					<Datepicker start={min} end={max} months={2}  isfill={true}/>
				</div>

				<div className="demo-item demo-full">
					<h5>datepicker callbacks alert, pls check at console</h5>
					<pre className="demo-code">
						{`<Datepicker onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.onChange} />`}
      				</pre>
					<Datepicker onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)} onChange={this.onChange.bind(this)} />
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
