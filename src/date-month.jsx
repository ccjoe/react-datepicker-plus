import React from 'react'
import DateDay from './date-day.jsx'

var DateMonth = React.createClass({
	/*propTypes: {
		date: React.PropTypes.object.isRequired,
		format: React.PropTypes.string
	},*/
	getInitialState() {
	    return {
	    	selecting: null
	    }
	},
	getMonthInfo () {	
		// console.log(this.props.date, 'datemonth')
		let y = this.props.date.getFullYear();
	    let m = this.props.date.getMonth();
		var dateday, line=0, temp=[], isfill = this.props.isfill;
		// console.time('计算一月所用时间')
        var prevMDay = new Date(y, m, 0), prevMDayLast = prevMDay.getDate();    //prev Month Last Day
        var nextMDay = new Date(y, m+1, 0), currMDayLast = nextMDay.getDate();  //current Month Last Day
        var currMDay = new Date(y, m+0, 1), currMDayFirst= currMDay.getDay();   //current Month First Day Week
       
       temp[line]=[]; 

        function calcLine(date){
	    	var weekno = date.getDay();   //week
	        if(weekno == 0) temp[line]=[]
	        temp[line].push(date);
	        weekno == 6 && line++;
        }

       // console.log(prevMDay, currMDay, prevMDayLast, currMDayLast, currMDayFirst)
       if(currMDayFirst && isfill){ //prev Month calendar row first
            var k = prevMDayLast - currMDayFirst + 1;
            for (var j = 0; j < currMDayFirst; j++) {
                dateday = new Date(y, m-1, k)
                	temp[line].push(dateday)
                k++
            }
        }
        
        for(var i=1; i <= currMDayLast; i++) { //current month
        	dateday = new Date(y, m, i)
        	calcLine(dateday)
        }
        if(isfill){
	        for (j=1; j < 12; j++) {
	        	if(line<6){
	        		// console.log(line, 'line')
		            dateday =  new Date(y, m+1, j);
		            calcLine(dateday)
	       		}
	        }
        }
        //console.timeEnd('计算一月所用时间')
        return temp;
	},

	weeks(months){
		var weeks = [], that = this;
		months.map(function(week, wkey) {
			weeks.push(<div className={"date-week date-week-"+wkey} key={wkey}>
				{that.days(week)}
			</div>)
		}) 
		return weeks
	},
	days(week){
		var days = [], that = this;
		week.map(function(day, dkey){
			days.push( <DateDay {...that.props} onMouseEnter={that.onMouseEnter} selecting={that.state.selecting} edate={day} key={dkey}/> ) 
		})
		return days
	},
	onMouseEnter(dateinfo){
		let {start, end} = this.props
		if(start && end) this.setState({selecting: dateinfo.date})
	},
	onMouseLeave(){
		let {start, end} = this.props
		if(start && end) this.setState({selecting: null})
	},
	render () {
		// console.log('render times')
		const months = this.getMonthInfo(), that=this;
		return <div className={"date-month" + (that.state.selecting ? " date-selecting " : " ")} onMouseLeave={this.onMouseLeave}> 
				{this.weeks(months)}
			</div>
	}
})

export default DateMonth