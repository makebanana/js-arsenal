;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Merge = factory();
  }
}(this, function() {
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
};
module.exports = marge

return Merge;
}));
