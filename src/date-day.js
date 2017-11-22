import React, { Component } from 'react'
import {toLunarDate, toLunarDay} from './date-lunar'
import {getSolarTermIndex, getMonthSolarTerms} from './date-term'
import {salarHolidays, lunarHolidays} from'./date-holidays'
//render month
//current month
class DateDay extends Component {
    /*propTypes: {
        date: React.PropTypes.object,
        format: React.PropTypes.string,
    }*/
    constructor(props) {
        super(props);
        // console.log(this.props.selected, props.selected, 'selected')
    }
    //获取某天的所有信息 m+1才是显示用的月分
    getDayInfo(){
        var {date, edate, min, max, start, end, selected, selecting, status, dayAddon } = this.props //selected date, render date, each date
        selected = selected || new Date()
        // selected = selected instanceof Date ? selected : new Date(selected)
        // date = date instanceof Date ? date : new Date(date)
        // edate = edate instanceof Date ? edate : new Date(edate)
        const [sy, sm, sd] = [selected.getFullYear(), selected.getMonth(), selected.getDate()]
        const [cy, cm, cd] = [date.getFullYear(), date.getMonth(), date.getDate()]
		const [y, m, d] = [edate.getFullYear(), edate.getMonth(), edate.getDate()]
		let toNo = x => x ? +x : 0
        let edateNo = toNo(edate), minNo = toNo(min), maxNo = toNo(max), startNo=toNo(start), endNo=toNo(end);
		let range = (startNo, endNo) => edateNo >= startNo && edateNo <= endNo
		let minmax = (minNo, maxNo) => (minNo && edateNo < minNo) || (maxNo && edateNo > maxNo)

		let realMin = min&&minNo>startNo?minNo:startNo
		let realMax = !max||maxNo>endNo?endNo:maxNo

        var dayinfo = {
            date: edate,
            lunar: toLunarDate(edate),
            term: getMonthSolarTerms(y, m)[d],
            salarfest: salarHolidays[this.zero(m+1)+this.zero(d)],  //这里的月份用的是视图的
            currentMonth: m === cm,
			currentDay: y === sy && m === sm && d === sd,
			currentPoint: edateNo === realMin || edateNo === realMax
        };
		//需要区分 start(不能大于end)与end(水能小于start), 没有则直接看min max @todo
		//是否在限制的范围内
		let isStart = status==='start', isEnd = status==='end'

		if(isStart){
			dayinfo.disabled = minmax(minNo, realMax)
		}else if(isEnd){
			dayinfo.disabled = minmax(realMin, maxNo)
		}else if(min || max){
			dayinfo.disabled = minmax(minNo, maxNo)
		}

		if(start && end) dayinfo.inrange = range(start, end) //是否在选择结果的范围内
        if(selecting && status) dayinfo.inselect = isStart ? range(selecting, end) : range(start, selecting)

        if(dayAddon){
            dayinfo.addon = dayAddon(dayinfo)
        }
        dayinfo.lunarfest = lunarHolidays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
        // console.log(dayinfo, edateNo, start, end, 'startend')
        return dayinfo;
    }
    zero (n) {
        return n<10 ? '0'+n : n
    }

    setDate(dateinfo) {
        if(dateinfo.disabled) return;
		this.props.onChange(dateinfo);
    }
    setMouseEnter(dateinfo){
        if(dateinfo.disabled) return;
        this.props.onMouseEnter.bind(this, dateinfo);
    }

    render(){
        let info = this.getDayInfo()
        let { date, salarfest, lunarfest, term, lunar, currentDay, currentPoint, currentMonth, disabled, inrange, inselect, addon} = info
        let festDom, {festival, haslunar} = this.props

        if(festival && (salarfest||lunarfest)){
          festDom = <div><span className="date-fest">{(salarfest?salarfest:'') + (lunarfest?lunarfest:'')}</span>{addon}</div>
        }else{
          festDom = <div><span className="date-d">{date.getDate()}</span>{addon}</div>
		}
        if(haslunar){   //has lunar and must has term
            festDom = <div className="date-day-sets">{festDom}<span className="date-lunar">{term ? term : toLunarDay(lunar.day)}</span></div>
        }
        return <div className={"date-day" + (!currentMonth ? " date-nocurrent " : " ")
                                          + (currentPoint ? ' date-point' : "")
                                          + (currentDay ? ' date-selected' : "")
                                          + (disabled ? ' date-disabled' : "")
                                          + (inrange ? ' date-range' : "")
                                          + (inselect ? ' date-hover' : "") }
                    onMouseDown={ this.setDate.bind(this, info) }
                    onMouseEnter={this.setMouseEnter.bind(this, info)}>
            {festDom}
        </div>
    }
};

export default DateDay
