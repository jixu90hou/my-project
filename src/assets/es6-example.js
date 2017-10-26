//Promise1
function timeout (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done!!!!!')
  })
}

timeout(2000).then(v => console.log(v))

//Promise2
let promise = new Promise(function (resolve, reject) {
  console.log('Promise2')
  resolve()
})
promise.then(function () {
  console.log('resolve!')
})
console.log('Hi!!!!')
//Promise3
var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})
var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})
p2.then(result => console.log(result)).catch(error => console.log(error))

//Promise4
new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)
}).then(r => console.log(r)).then(m => console.log(3))
//Promise5
var f3 = () => console.log('now')
Promise.resolve().then(f3)
console.log('1')
console.log('2')
console.log('3')
//Promise6-async
var fa = () => console.log('fa');
(async () => fa())()
console.log('next--->')

//Generator
function* helloWorldGenerator () {
  yield 'hello'
  yield 'world'
  return 'ending'
}

var hw = helloWorldGenerator()

//async await
function timeout (ms) {
  return new Promise((resolve) => {
    console.log('timeout----->')
    setTimeout(resolve, ms)
  })
}

async function asyncPrint (value, ms) {
  await timeout(ms)
  console.log(value)
}

asyncPrint('hello world', 5000)
