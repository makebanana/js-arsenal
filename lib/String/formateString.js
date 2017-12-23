;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.FormateString = factory();
  }
}(this, function() {
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
  var turnData = typeof data === 'object' ? data : {}
  return str.replace(/\{#(\w+)#\}/g, function (match, key) {
    return typeof turnData[key] === 'undefined' ? '' : turnData[key];
  });
}
module.exports = formateString

return FormateString;
}));
