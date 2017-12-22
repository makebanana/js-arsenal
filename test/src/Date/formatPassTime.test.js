const formatPassTime = require('../../../src/Date/formatPassTime')
const isZh = Number(navigator.language.indexOf('zh') > -1)

test('formatPassTime(Date.now()) return “just now" or "刚刚”', () => {
  expect(formatPassTime(Date.now())).toBe(['just now', '刚刚'][isZh])
})

test('formatPassTime(Date.now() - 1000) return “1 sec ago" or “1 秒前”', () => {
  expect(formatPassTime(Date.now() - 1000)).toBe(['1 sec ago', '1秒前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 2) return “2 secs ago" or “2 秒前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 2)).toBe(['2 secs ago', '2 秒前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60) return “1 min ago" or “1 分钟前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60)).toBe(['1 min ago', '1 分钟前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 2) return “2 mins ago" or “2 分钟前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 2)).toBe(['2 mins ago', '2 分钟前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60) return “1 hour ago" or “1 小时前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60)).toBe(['1 hour ago', '1 小时前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 2) return “2 hours ago" or “2 小时前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 2)).toBe(['2 hours ago', '2 小时前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24) return “1 day ago" or “1 天前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24)).toBe(['1 day ago', '1 天前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 2) return “2 days ago" or “2 天前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 2)).toBe(['2 days ago', '2 天前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30) return “1 month ago" or “1 个月前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30)).toBe(['1 month ago', '1 个月前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2) return “2 months ago" or “2 个月前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2)).toBe(['2 months ago', '2 个月前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12) return “1 year ago" or “1 年前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12)).toBe(['1 year ago', '1 年前'][isZh])
})

test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12 * 2) return “2 years ago" or “2 年前”', () => {
  expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12 * 2)).toBe(['2 years ago', '2 年前'][isZh])
})

test('formatPassTime() return undefined', () => {
  expect(formatPassTime()).toBe(undefined)
})

test('formatPassTime("2017 06/12aadd") return "2017 06/12aadd"', () => {
  expect(formatPassTime('2017 06/12aadd')).toBe('2017 06/12aadd')
})
