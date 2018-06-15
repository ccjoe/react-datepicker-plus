//refs: https://www.cnblogs.com/bluedream2009/archive/2010/06/02/1750359.html
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var sTermMap = '0|gd4|wrn|1d98|1tuh|2akm|2rfn|38g9|3plp|46vz|4o9k|55px|5n73|64o5|6m37|73fd|7kna|81qe|8io7|8zgq|9g4b|9wnk|ad3g|ath2|'.split('|');
var sTermNames = '小寒|大寒|立春|雨水|惊蛰|春分|清明|谷雨|立夏|小满|芒种|夏至|小暑|大暑|立秋|处暑|白露|秋分|寒露|霜降|立冬|小雪|大雪|冬至'.split('|');

for (var i = 24; i--;) sTermMap[i] = parseInt(sTermMap[i], 36);

function term(y, n) {
	var d = new Date(31556925974.7 * (y - 1900) + sTermMap[n] * 60000 + Date.UTC(1900, 0, 6, 2, 5));
	return { m: d.getUTCMonth(), d: d.getUTCDate() };
}

function getTerm(y, m, d) {
	for (var i = sTermNames.length, x; i--;) {
		x = term(y, i);
		if (x.m == m && x.d == d) return sTermNames[i];
	}
	return '';
}

// 返回该月的节气信息
var getMonthSolarTerms = function getMonthSolarTerms(year, month) {
	if (year instanceof Date) {
		month = year.getMonth();
		year = year.getFullYear();
	}
	var ret = {},
	    index;
	index = term(year, month * 2).d;
	ret[index] = getTerm(year, month, index);
	index = term(year, month * 2 + 1).d;
	ret[index] = getTerm(year, month, index);
	return ret;
};

exports.getMonthSolarTerms = getMonthSolarTerms;