;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.FormatPassTime = factory();
  }
}(this, function() {
/**
* [formatPassTime 距startTime已过时间]
* @param  {[Number]} startTime      [开始时间时间错]
* @return {[String]}                [返回处理好的字符串]
*/
function formatPassTime(startTime) {
  if (!startTime) return startTime

  // ios 2017-06-12 => 2017/06/12
  var startTime = typeof startTime === 'string' ? startTime.replace(/-/g, '/') : startTime
  if (isNaN(Date.parse(new Date(startTime)))) return startTime;

  var isZh = navigator.language.indexOf('zh') > -1;
  var returnText = isZh ?
  [' 年前', ' 个月前', ' 天前', ' 小时前', ' 分钟前', ' 秒前', '刚刚'] :
  [' year', ' month', ' day', ' hour', ' min', ' sec', 'just now'];
  var timeStamp = Date.parse(new Date()) - Date.parse(new Date(startTime));

  if (timeStamp < 0) return returnText[6];

  var day = ToInteger(timeStamp / (1000 * 60 * 60 * 24));
  var hour = ToInteger(timeStamp / (1000 * 60 * 60));
  var min = ToInteger(timeStamp / (1000 * 60));
  var sec = ToInteger(timeStamp / (1000));
  var month = ToInteger(day / 30);
  var year = ToInteger(month / 12);
  if (year) return year + returnText[0] + (isZh ? '' : year - 1 ? 's ago' : ' ago');
  if (month) return month + returnText[1] + (isZh ? '' : month - 1 ? 's ago' : ' ago');
  if (day) return day + returnText[2] + (isZh ? '' : day - 1 ? 's ago' : ' ago');
  if (hour) return hour + returnText[3] + (isZh ? '' : hour - 1 ? 's ago' : ' ago');
  if (min) return min + returnText[4] + (isZh ? '' : min - 1 ? 's ago' : ' ago');
  if (sec) return sec + returnText[5] + (isZh ? '' : sec - 1 ? 's ago' : ' ago');
  else return returnText[6];
}

/**
* 正确处理数据取整
*/
function ToInteger(v) {
  if (v > 0) {
    return Math.floor(v);
  }
  return Math.ceil(v);
}

module.exports = formatPassTime

return FormatPassTime;
}));
