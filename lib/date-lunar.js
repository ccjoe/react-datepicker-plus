// 农历月份信息表
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0];

//传回农历 y 年的总天数
function lunarYearDays(y) {
	var i,
	    sum = 348;
	for (i = 0x8000; i > 0x8; i >>= 1) sum += lunarInfo[y - 1900] & i ? 1 : 0;
	return sum + leapDays(y);
}

//传回农历 y 年m月的总天数
function lunarMonthDays(y, m) {
	return lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
}

//传回农历 y 年闰月的天數
function leapDays(y) {
	if (leapMonth(y)) return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;else return 0;
}

//传回农历 y 年闰哪个月 1-12 , 沒闰传回 0
function leapMonth(y) {
	return lunarInfo[y - 1900] & 0xf;
}

//公历转农历
function toLunarDate(objDate) {
	var i,
	    leap = 0,
	    temp = 0;
	var baseDate = new Date(1900, 0, 31);
	var offset = (objDate - baseDate) / 86400000;

	var result = {};
	result.dayCyl = offset + 40;
	result.monCyl = 14;

	for (i = 1900; i < 2050 && offset > 0; i++) {
		temp = lunarYearDays(i);
		offset -= temp;
		result.monCyl += 12;
	}

	if (offset < 0) {
		offset += temp;
		i--;
		result.monCyl -= 12;
	}

	result.year = i;
	result.yearCyl = i - 1864;

	leap = leapMonth(i); //闰哪个月
	result.isLeap = false;

	for (i = 1; i < 13 && offset > 0; i++) {
		//闰月
		if (leap > 0 && i == leap + 1 && result.isLeap == false) {
			--i;
			result.isLeap = true;
			temp = leapDays(result.year);
		} else {
			temp = lunarMonthDays(result.year, i);
		}

		//解除闰月
		if (result.isLeap == true && i == leap + 1) {
			result.isLeap = false;
		}

		offset -= temp;
		if (result.isLeap == false) {
			result.monCyl++;
		}
	}

	if (offset == 0 && leap > 0 && i == leap + 1) if (result.isLeap) {
		result.isLeap = false;
	} else {
		result.isLeap = true;
		--i;
		--result.monCyl;
	}

	if (offset < 0) {
		offset += temp;
		--i;
		--result.monCyl;
	}

	result.month = i;
	result.day = offset + 1;
	return result;
}

//农历数字转字符
function toLunarDay(d) {
	var lunarDay = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
	var lunarTeen = ['初', '十', '廿', '三'];
	var dstr = d + '',
	    teen = lunarTeen[0],
	    rightNum = dstr.length < 2 ? '' : dstr.substring(1),
	    rightDeco = rightNum === '0' ? '十' : lunarDay[Number(rightNum) - 1];
	if (d > 10) {
		teen = lunarTeen[1];
		if (d >= 20) {
			teen = lunarTeen[2];
			if (d >= 30) {
				teen = lunarTeen[3];
			}
		}
	}
	return teen + (dstr.length < 2 ? lunarDay[d - 1] : rightDeco);
}

exports['default'] = { lunarYearDays: lunarYearDays, lunarMonthDays: lunarMonthDays, leapDays: leapDays, leapMonth: leapMonth, toLunarDate: toLunarDate, toLunarDay: toLunarDay };
module.exports = exports['default'];