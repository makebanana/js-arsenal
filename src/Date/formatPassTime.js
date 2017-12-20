/**
* [formatPassTime 距startTime已过时间]
* @param  {[Number]} startTime      [开始时间时间错]
* @return {[String]}                [返回处理好的字符串]
*/
export default function formatPassTime(startTime) {
  if (Date.parse(new Date(startTime)) === NaN) return startTime;

  let returnText = navigator.language.indexOf('zn') > -1 ?
  ['年前', '个月前', '天前', '小时前', '分钟前', '秒前', '刚刚'] :
  ['years ago', 'months ago', 'days ago', 'hours ago', 'mins ago', 'secs ago', 'just now']
  var timeStamp = Date.parse(new Date()) - Date.parse(new Date(startTime));

  if (timeStamp < 0) return returnText[6];

  var day = ToInteger(time / (1000 * 60 * 60 * 24));
  var hour = ToInteger(time / (1000 * 60 * 60));
  var min = ToInteger(time / (1000 * 60));
  var sec = ToInteger(time / (1000));
  var month = ToInteger(day / 30);
  var year = ToInteger(month / 12);
  if (year) return year + returnText[0];
  if (month) return month + returnText[1];
  if (day) return day + returnText[2];
  if (hour) return hour + returnText[3];
  if (min) return min + returnText[4];
  if (sec) return min + returnText[5];
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
