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


test('merge() return undefined', () => {
  expect(merge()).toEqual(undefined)
})

test('merge({ aa: 222 }, 123213, "213123", false, true) return { aa:222 }', () => {
  expect(merge({ aa: 222 }, 123213, '213123', false, true)).toEqual({ aa: 222 })
})
