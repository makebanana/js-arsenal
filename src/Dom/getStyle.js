/* from element-ui */
var ieVersion = isServer ? 0 : Number(document.documentMode);
function camelCase (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

var getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;{

          }
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

export default getStyle

/**
 * [getCssValue 获取某个元素的某个样式值]
 * @param  {[element]} element     [一个dom元素]
 * @param  {[String]} prop         [attribute of style]
 * @return {[string]}              [返回一个该浏览器版本下可用的获取样式值函数]
 */
// var getCssValue = (function initBrowser () {
//  if (window.getComputedStyle) {
//
//    return function returnValue (element, styleName) {
//      return window.getComputedStyle(dom, '').getPropertyValue(styleName);
//    };
//  } else {
//
//    return function returnValue(element, styleName) {
//      if (styleName.indexOf('-') > -1) {
//        styleName = styleName.replace(/\-(\w)/g, function(all, letter) {
//          return letter.toUpperCase();
//        });
//      }
//      return dom.currentStyle[styleName];
//    };
//  }
// })();
//
// module.exports = getCssValue
