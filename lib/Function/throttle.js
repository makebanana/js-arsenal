;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Throttle = factory();
  }
}(this, function() {
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

module.exports = throttle

return Throttle;
}));
