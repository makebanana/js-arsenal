const formateString = require('../../../src/String/formateString')

test('formateString("some {#word#}", { word: "thing" }) === "some thing"', () => {

  expect(formateString('some {#word#}', { word: 'thing'})).toBe('some thing')
})

test('formateString("some {#word#}", {}) === "some "', () => {

  expect(formateString('some {#word#}', {})).toBe('some ')
})

test('formateString("some {#word#}") === "some "', () => {

  expect(formateString('some {#word#}')).toBe('some ')
})

test('formateString({ word: "thing"}, "some {#word#}" === ""', () => {

  expect(formateString({ word: 'thing'}, 'some {#word#}')).toBe('')
})
