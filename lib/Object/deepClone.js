;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.DeepClone = factory();
  }
}(this, function() {
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
}

module.exports = deepClone

return DeepClone;
}));
