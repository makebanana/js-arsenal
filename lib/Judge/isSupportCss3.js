;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.IsSupportCss3 = factory();
  }
}(this, function() {
 /**
  * [isSupportCss3 判断某个CSS3属性是否被支持]
  * @param  {[String]} prop           [attribute of style]
  * @return {[Boolean]}              [true or false]
  */
var isSupportCss3 = (function initBrowser () {
   var div = document.createElement('div'),
      vendors = 'Ms O Moz Webkit'.split(' '),
      len = vendors.length;

   return function isSupport(prop) {
      if ( prop in div.style ){ return prop;}

      prop = prop.replace(/^[a-z]/, function(val) {
         return val.toUpperCase();
      });

      while(len--) {
         if ( vendors[len] + prop in div.style ) {
            return vendors[len] + prop;
         }
      }
      return false;
   };
})();

module.exports = isSupportCss3

return IsSupportCss3;
}));
