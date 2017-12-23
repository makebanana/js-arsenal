/**
  dao ci yi you
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.arsenal = factory());
}(this, (function () { 'use strict';

/**
* [formatPassTime 距startTime已过时间]
* @param  {[Number]} startTime      [开始时间时间错]
* @return {[String]}                [返回处理好的字符串]
*/
function formatPassTime(startTime) {
  if (!startTime) return startTime

  // ios 2017-06-12 => 2017/06/12
  var startTime = typeof startTime === 'string' ? startTime.replace(/-/g, '/') : startTime;
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

var formatPassTime_1 = formatPassTime;

/**
 * [throttle 一个简单的节流器，一定时间内只执行最后一次]
 * @param  {[Function]} func        [需要被节流的函数]
 * @param  {[Function]} times       [节流的时间段]
 * @return {[Boolean]}              [被节流的函数]
 */
function throttle(func, times) {
    var timeout,
        args,
        context;
    if (typeof times === 'undefined') {
        times = 300;
    }
    return function() {
        context = this;
        args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
            timeout = null;
        }, times);

    }
}

var throttle_1 = throttle;

var deepClone = function fnDeepClone(obj){
  var result;
  var key;
  if (obj && typeof obj === 'object'){
    result = typeof obj.splice === 'function' ? [] : {};
    for (key in obj ){
      if (obj[key] && typeof obj[key] === 'object'){
        result[key] = fnDeepClone(obj[key]);//如果对象的属性值为object的时候，递归调用deepClone，即再把某个值对象复制一份到新的对象的对应值中
      }else{
        result[key] = obj[key];//如果对象的属性值不为object的时候，直接复制参数对象的每一个键/值到新对象对应的键/值中
      }

    }
    return result;
  }
  return obj;
};

var deepClone_1 = deepClone;

function marge (target) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    if (typeof source !== 'object') { break; }
    for (var prop in source) {
      if (hasOwnProperty.call(source, prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}
var merge = marge;

/**
 * [formateString 简单的字符串模板]
 * @param  {[String]} str            [需要处理的字符串]
 * @param  {[Object]} data           [替换的数据]
 * @return {[String]}                [返回处理好的字符串]
 */
 /** demo
 *   let tempStr =  '<div>{#editBtn#}</div>'
 *   if (iCanEdit) {
 *      tempStr = formateString(tempStr, { editBtn:'<button>编辑</button>' })
 *   }
 **/
function formateString(str, data) {
  if (typeof str !== 'string' || !str) { return '' }
  var turnData = typeof data === 'object' ? data : {};
  return str.replace(/\{#(\w+)#\}/g, function (match, key) {
    return typeof turnData[key] === 'undefined' ? '' : turnData[key];
  });
}
var formateString_1 = formateString;

/**
 * [parseQuery 获取URL?search对应的值]
 * @param  {[String]} key            [需要查询的query]
 * @param  {[String]} url            [需要查询的url]
 * @return {[String | Object]}       [返回对应的query]
 */
function parseQuery(key, url) {
  var url = url ? url : window.location.href;
  var search = url.split('?')[1] || '';
  if (typeof key !== 'undefined') {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = search.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
    return null;
  } else {
    var obj = {};
    var len;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (typeof search === 'string' && search.length) {
      search = search.split('&');
      len = search.length;
      for (var i = 0; i < len; ++i) {
        var x = search[i].replace(/\+/g, '%20'),
            idx = x.indexOf('='),
            kstr, vstr, k, v;

        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = '';
        }

        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);

        if (!hasOwnProperty.call(obj, k)) {
          obj[k] = v;
        } else if (Array.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }
    }
    return obj;
  }
}



var parseQuery_1 = parseQuery;

var arsenal = {
  formatPassTime: formatPassTime_1,
  throttle: throttle_1,
  deepClone: deepClone_1,
  merge,
  formateString: formateString_1,
  parseQuery: parseQuery_1
};

var src = arsenal;

return src;

})));
