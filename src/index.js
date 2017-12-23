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
