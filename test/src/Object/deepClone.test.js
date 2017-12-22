const deepClone = require('../../../src/Object/deepClone')

test('deepClone() return undefined', () => {
  expect(deepClone()).toBe(undefined)
})

test('deepClone({ aa: 123 }) return { aa: 123 }', () => {
  expect(deepClone({ aa: 123 })).toEqual({ aa: 123 })
})

test('a = { aa: 123 }, deepClone(a) equal { aa: 123 } ,not toContainEqual a', () => {
  let a = { aa: 123 }
  expect(deepClone(a)).not.toContainEqual(a)
})

test('deepClone({aa: { bb: 123 } }) return {aa: { bb: 123 } }', () => {
  expect(deepClone({aa: { bb: 123 } })).toEqual({aa: { bb: 123 } })
})

test('a = { aa: { bb: 123 } }, deepClone(a) equal {aa: { bb: 123 } } ,not toContainEqual a', () => {
  let a = { aa: { bb: 123 } }
  expect(deepClone(a)).not.toContainEqual(a)
})
