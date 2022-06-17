const assert = require('assert')
const calendar = require('../index')

const solar2lunar = calendar.solar2lunar(1987,11,01)
assert.ok(solar2lunar.cYear === 1987, 'year equals')
assert.ok(solar2lunar.cMonth === 11, 'month equals')
assert.ok(solar2lunar.cDay === 1, 'day equals')

const lunar2solar = calendar.lunar2solar(1987,09,10)
assert.ok(lunar2solar.lYear === 1987, 'year equals')
assert.ok(lunar2solar.lMonth === 9, 'month equals')
assert.ok(lunar2solar.lDay === 10, 'day equals')
