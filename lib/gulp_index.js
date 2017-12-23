;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Index = factory();
  }
}(this, function() {
var formatPassTime = require('./Date/formatPassTime')
var throttle = require('./Function/throttle')
var deepClone = require('./Object/deepClone')
var merge = require('./Object/merge')
var formateString = require('./String/formateString')
var parseQuery = require('./String/parseQuery')

var arsenal = {
  formatPassTime,
  throttle,
  deepClone,
  merge,
  formateString,
  parseQuery
}

module.exports = arsenal

return Index;
}));
