;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.ParseQuery = factory();
  }
}(this, function() {
/**
 * [parseQuery 获取URL?search对应的值]
 * @param  {[String]} key            [需要查询的query]
 * @param  {[String]} url            [需要查询的url]
 * @return {[String | Object]}       [返回对应的query]
 */
function parseQuery(key, url) {
  var url = url ? url : window.location.href
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



module.exports = parseQuery

return ParseQuery;
}));
