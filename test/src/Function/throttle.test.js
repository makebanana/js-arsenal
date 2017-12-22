const throttle = require('../../../src/Function/throttle')


test('In 200 seconds, addCount()*3, just run one time', () => {
  expect.assertions(1);

  const tick = new Promise((resolve, reject) => {
    let count = 0

    const addCount = throttle(() => {
      count = count + 1
    }, 100)

    addCount()
    addCount()
    addCount()

    setTimeout(() => {
      resolve(count)
    }, 200)
  });
  return tick.then( count => {
    return expect(count).toEqual(1)
  })
})

test('In 500 seconds, addCount()*3, run 3 times', () => {
  expect.assertions(1);

  const tick = new Promise((resolve, reject) => {
    let count = 0

    const addCount = throttle(() => {
      count = count + 1
    }, 100)

    setTimeout(() => {
      addCount()
    }, 110)

    setTimeout(() => {
      addCount()
    }, 220)

    setTimeout(() => {
      addCount()
    }, 330)

    setTimeout(() => {
      resolve(count)
    }, 500)
  });
  return tick.then( count => {
    return expect(count).toEqual(3)
  })
})
