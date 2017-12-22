const parseQuery = require('../../../src/String/parseQuery')
const url = window.location.href

// 设置urlr
function setSearch (str) {
  history.pushState({}, '', url + str);
}

// 清理url
beforeEach(() => {
  setSearch('')
})

test('url=xxx.com?name=bbb parseQuery("name") is "bbb"', () => {
  setSearch('?name=bbb')
  expect(parseQuery('name')).toBe('bbb')
})

test('url=xxx.com?name=bbb&key=%40%3D23 parseQuery("key") is "@=23"', () => {
  setSearch('?name=bbb&key=%40%3D23')
  expect(parseQuery('key')).toBe('@=23')
})

test('url=xxx.com?name=bbb&val=&key=%40%3D23 parseQuery("key") is "@=23"', () => {
  setSearch('?name=bbb&key=%40%3D23')
  expect(parseQuery('key')).toBe('@=23')
})

test('url=xxx.com?name=bbb&key=%40%3D23 parseQuery() is { name: "bbb", key: "@=23"}', () => {
  setSearch('?name=bbb&key=%40%3D23')
  expect(parseQuery()).toEqual({name: 'bbb', key: '@=23'})
})

test('parseQuery() is {}', () => {
  expect(parseQuery()).toEqual({})
})

test('parseQuery("") is null', () => {
  expect(parseQuery('name')).toBeNull()
})

test('parseQuery("name", "xxx.com") is null', () => {
  expect(parseQuery('name','xxx.com')).toBeNull()
})

test('parseQuery("   ", "   ") is null', () => {
  expect(parseQuery('  ', '   ')).toBeNull()
})
