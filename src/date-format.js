/**
 * date api封装
 * @author Joe Liu
 * @email icareu.joe@gmail.com
 */
function dateObject(date){
	if(!date) return date
	return date instanceof Date ? date : new Date(date)
}

function dateFormat(date, format){
  if(!date) return '';
  var weeks = ['日','一','二','三','四','五','六'];
  if(format === undefined){
        format = date;
        date = new Date();
    }
    date = dateObject(date);
    var map = {
        "M": date.getMonth() + 1, //月份
        "d": date.getDate(), //日
        "h": date.getHours(), //小时
        "m": date.getMinutes(), //分
        "s": date.getSeconds(), //秒
        "q": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds(), //毫秒
        "W": weeks[date.getDay()] //周
    };
    format = format.replace(/([yMdhmsqSW])+/g, function(all, t){
        var v = map[t];
        if(v !== undefined){
            if(all.length > 1){
                v = '0' + v;
                v = v.substr(v.length-2);
            }
            return v;
        }
        else if(t === 'y'){
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
}
var today = new Date()
var todayStart = today.setHours(0, 0, 0, 0)
let dateDiff = (timestape, time) => Math.ceil((timestape - (time?time:+todayStart))/(3600*1000*24))

var plusDay = function(date, num){
    num = num !== void 0 ? num : 1
    return new Date(+date + 3600000*24*num)
}

var minusDay = function(date, num){
    return plusDay(-num)
}

export {
    dateFormat,
	dateDiff,
	today,
	todayStart,
	dateObject,
	plusDay,
	minusDay
}