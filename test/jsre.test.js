const assert = require('assert')
const calendar = require('../index')
function deepEqual(x, y) {
  if (x === y) {
      return true;
  }
  if (!(typeof x == "object" && x != null) || !(typeof y == "object" && y != null)){
      return false;
  }
  //比较对象内部
  if (Object.keys(x).length != Object.keys(y).length){
      return false;
  }
  for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {  
          if (!deepEqual(x[prop], y[prop])){
              return false;
          }
      }
      else{
          return false;
      }
  }
  return true;
}

function test (desc, testcase) {
  console.info(desc)
  assert.deepEqual = deepEqual
  testcase(assert)
}

test('test solar2lunar', t => {
  const solar2lunar = calendar.solar2lunar(1987,11,1)
  t.ok(solar2lunar.cYear === 1987, 'year equals')
  t.ok(solar2lunar.cMonth === 11, 'month equals')
  t.ok(solar2lunar.cDay === 1, 'day equals')
  t.ok(solar2lunar.Animal === '兔', 'Animal equals')
  t.ok(solar2lunar.gzYear === '丁卯', 'gzYear equals')
  t.ok(solar2lunar.gzMonth === '庚戌', 'gzMonth equals')
  t.ok(solar2lunar.gzDay === '甲寅', 'gzDay equals')
})

test('test lunar2solar', t => {
  const lunar2solar = calendar.lunar2solar(1987,9,10)
  t.ok(lunar2solar.lYear === 1987, 'year equals')
  t.ok(lunar2solar.lMonth === 9, 'month equals')
  t.ok(lunar2solar.lDay === 10, 'day equals')
  t.ok(lunar2solar.Animal === '兔', 'Animal equals')
  t.ok(lunar2solar.gzYear === '丁卯', 'gzYear equals')
  t.ok(lunar2solar.gzMonth === '庚戌', 'gzMonth equals')
  t.ok(lunar2solar.gzDay === '甲寅', 'gzDay equals')
})
