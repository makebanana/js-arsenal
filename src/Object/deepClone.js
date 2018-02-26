var deepClone = function fnDeepClone(obj){
  var result;
  var key;
  if (obj && typeof obj === 'object'){
    result = typeof obj.splice === 'function' ? [] : {};
    for (key in obj ){
      if (obj[key] && typeof obj[key] === 'object'){
        result[key] = fnDeepClone(obj[key]);
      }else{
        result[key] = obj[key];
      }

    }
    return result;
  }
  return obj;
}

module.exports = deepClone
