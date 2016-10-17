import  React from 'react'
import {toLunarDate, toLunarDay} from './date-lunar'
import {getSolarTermIndex, getMonthSolarTerms} from './date-term'
import {salarHolidays, lunarHolidays} from'./date-holidays'
//render month 
//current month 
var DateDay = React.createClass({
    /*propTypes: {
        date: React.PropTypes.object,
        format: React.PropTypes.string,
    },*/
    //获取某天的所有信息 m+1才是显示用的月分
    getDayInfo: function(){
        const {date, edate, min, max, start, end, selected, selecting, status } = this.props //selected date, render date, each date
        const [sy, sm, sd] = [selected.getFullYear(), selected.getMonth(), selected.getDate()]
        const [cy, cm, cd] = [date.getFullYear(), date.getMonth(), date.getDate()]
        const [y, m, d] = [edate.getFullYear(), edate.getMonth(), edate.getDate()]
        let edataNo = +edate
        let range = (start, end) => edataNo >= +start && edataNo <= +end
        var dayinfo = {
            date: edate,
            lunar: toLunarDate(edate),
            term: getMonthSolarTerms(y, m)[d],
            salarfest: salarHolidays[this.zero(m+1)+this.zero(d)],  //这里的月份用的是视图的
            currentMonth: m === cm,
            currentDay: y === sy && m === sm && d === sd
        };
        if(min || max) dayinfo.disabled = !range(min, max)    //是否在限制的范围内
        if(start && end) dayinfo.inrange = range(start, end) //是否在选择结果的范围内
        if(selecting && status) dayinfo.inselect = status==='start' ? range(selecting, end) : range(start, selecting)

        dayinfo.lunarfest = lunarHolidays[this.zero(dayinfo.lunar.month) + this.zero(dayinfo.lunar.day)];
        // console.log(dayinfo, edataNo, start, end, 'startend')
        return dayinfo;
    },
    zero (n) {
        return n<10 ? '0'+n : n
    },

    setDate(dateinfo) {
        if(dateinfo.disabled) return;
        this.props.onChange(dateinfo);
    },
    setMouseEnter(dateinfo){
        if(dateinfo.disabled) return;
        this.props.onMouseEnter(dateinfo);
    },
    render(){
        let info = this.getDayInfo()
        let { date, salarfest, lunarfest, term, lunar, currentDay, currentMonth, disabled, inrange, inselect} = info
        let festDom, {festival, haslunar} = this.props

        if(festival && (salarfest||lunarfest)){
          festDom = <span className="date-fest">{(salarfest?salarfest:'') + (lunarfest?lunarfest:'')}</span>
        }else{
          festDom = <span className="date-d">{date.getDate()}</span>
        }
        if(haslunar){   //has lunar and must has term
            festDom = <div className="date-day-sets">{festDom}<span className="date-lunar">{term ? term : toLunarDay(lunar.day)}</span></div>
        }
        return <div className={"date-day" + (!currentMonth ? " date-nocurrent " : " ")
                                          + (currentDay ? 'date-selected' : "")
                                          + (disabled ? ' date-disabled' : "") 
                                          + (inrange ? ' date-range' : "")
                                          + (inselect ? ' date-hover' : "") }
                    onMouseDown={ this.setDate.bind(this, info) }
                    onMouseEnter={this.setMouseEnter.bind(this, info)}>
            {festDom}
        </div>
    }
});

export default DateDay

        