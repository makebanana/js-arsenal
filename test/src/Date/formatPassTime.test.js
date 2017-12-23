const formatPassTime = require('../../../src/Date/formatPassTime')

for (let i = 0; i < 2; i++) {
  const isZh = !!i
  test('formatPassTime(Date.now()) return ' + ['just now', '刚刚'][i], () => {
    expect(formatPassTime(Date.now(), isZh)).toBe(['just now', '刚刚'][i])
  })

  test('formatPassTime(Date.now() + 1000) return ' + ['just now', '刚刚'][i], () => {
    expect(formatPassTime(Date.now() + 1000, isZh)).toBe(['just now', '刚刚'][i])
  })

  test('formatPassTime(Date.now() - 1000) return ' + ['1 sec ago', '1 秒前'][i], () => {
    expect(formatPassTime(Date.now() - 1000, isZh)).toBe(['1 sec ago', '1 秒前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 2) return ' + ['2 secs ago', '2 秒前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 2, isZh)).toBe(['2 secs ago', '2 秒前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60) return ' + ['1 min ago', '1 分钟前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60, isZh)).toBe(['1 min ago', '1 分钟前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 2) return ' + ['2 mins ago', '2 分钟前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 2, isZh)).toBe(['2 mins ago', '2 分钟前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60) return ' + ['1 hour ago', '1 小时前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60, isZh)).toBe(['1 hour ago', '1 小时前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 2) return ' + ['2 hours ago', '2 小时前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 2, isZh)).toBe(['2 hours ago', '2 小时前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24) return ' + ['1 day ago', '1 天前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24, isZh)).toBe(['1 day ago', '1 天前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 2) return ' + ['2 days ago', '2 天前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 2, isZh)).toBe(['2 days ago', '2 天前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30) return ' + ['1 month ago', '1 个月前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30, isZh)).toBe(['1 month ago', '1 个月前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2) return ' + ['2 months ago', '2 个月前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 2, isZh)).toBe(['2 months ago', '2 个月前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12) return ' + ['1 year ago', '1 年前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12, isZh)).toBe(['1 year ago', '1 年前'][i])
  })

  test('formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12 * 2) return ' + ['2 years ago', '2 年前'][i], () => {
    expect(formatPassTime(Date.now() - 1000 * 60 * 60 * 24 * 30 * 12 * 2, isZh)).toBe(['2 years ago', '2 年前'][i])
  })
}


test('formatPassTime() return undefined', () => {
  expect(formatPassTime()).toBeUndefined()
})

test('formatPassTime("2017 06/12aadd") return "2017 06/12aadd"', () => {
  expect(formatPassTime('2017 06/12aadd')).toBe('2017 06/12aadd')
})
