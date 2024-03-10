// console.log(1)
// console.log(2)
// setTimeout(() => {
//   console.log(3)
//   setTimeout(() => {
//     console.log(5)
//   }, 0)
// }, 0)
//
// console.log(4)
// 1, 2, 4, 3, 5

setTimeout(() => console.log('Step 1: In setTimeout'))
setTimeout(() => {
  new Promise(resolve => {
    console.log('Step 2: In promise constructor (inside setTimeout)')
    resolve()
  }).then(() => console.log('Step 3: In then (inside setTimeout)'))
})

new Promise(resolve => {
  console.log('Step 4: In promise constructor')
  resolve()
}).then(() => {
  console.log('Step 5: In then')
})

setTimeout(() => console.log('Step 6: In another setTimeout'))
