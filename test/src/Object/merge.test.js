const merge = require('../../../src/Object/merge')

test('merge({}, { aa:123 }) return { aa:123 }', () => {
  expect(merge({}, { aa: 123 })).toEqual({ aa: 123 })
})

test('merge({ aa: 222 }, { aa:123 }) return { aa:222 }', () => {
  expect(merge({ aa: 222 }, { aa: 123 })).toEqual({ aa: 123 })
})

test('merge({}, { aa:123 }, { bb: 321 }) return { aa:123, bb: 321 }', () => {
  expect(merge({}, { aa:123 }, { bb: 321 })).toEqual({ aa:123, bb: 321 })
})

test('merge({ aa: 2}, { aa:[{ bb: 321, cc }] }) return { aa:[{ bb: 321 }] }', () => {
  var cc;
  expect(merge({ aa: 2}, { aa:[{ bb: 321, cc: cc }] })).toEqual({ aa:[{ bb: 321 }] })
})

test('merge({ aa: 2}, cc) return { aa: 2}', () => {
  var cc = {};
  cc.__proto__.test = true
  expect(merge({ aa: 2}, cc)).toEqual({ aa: 2})
})

test('var cc = { aa: undefined } merge({ aa: 2}, cc) return { aa: 2}', () => {
  var cc = { aa: undefined };
  expect(merge({ aa: 2}, cc)).toEqual({ aa: 2})
})

test('merge() return undefined', () => {
  expect(merge()).toEqual(undefined)
})

test('merge({ aa: 222 }, 123213, "213123", false, true, undefined , null) return { aa:222 }', () => {
  expect(merge({ aa: 222 }, 123213, '213123', false, true, undefined , null)).toEqual({ aa: 222 })
})
