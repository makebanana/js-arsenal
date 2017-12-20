/**
 * [parseQuery 获取URL?search对应的值]
 * @param  {[String]} key            [需要查询的query]
 * @param  {[String]} url            [需要查询的url]
 * @return {[String | Object]}       [返回对应的query]
 */
function parseQuery(key, url) {
  var url = url ? url : window.location.href
  var search = url.substring(url.lastIndexOf('?') + 1) || ''
  if (key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = search.substr(1).match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
    return null;
  } else {
    var query = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var key in query) {
      if (hasOwnProperty.bind(query, key)) {
        query[key] =  decodeURIComponent(query[key]);
      }
    }
    return query;
  }
}
module.exports = parseQuery
