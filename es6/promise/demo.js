// // function doSth(t, cb) {
// //     return function () {
// //         if (--t === 0) {
// //             cb();
// //         }
// //     }
// // }

// function logSth(cb) {
//     console.log('jingjing')
//     cb();
// }

// function logSth2(cb) {
//     console.log('zhihao')
//     cb()
// }

// function logSth3() {
//     console.log('and')
// }

// function doSth(t) {
//     return function () {
//         if (--t === 0) {
//              logSth(function () {
//                  logSth2(function () {
//                      logSth3()
//                  })
//              })
//         }
//     }
// }
// let fn = doSth(4);
// fn();
// fn();
// fn();
// fn();
// promise 解决异步流程的一种手段
// promsie 
// Promise 构造函数 new
// Promise -> excutor 执行器   有两个参数 resolve reject
// excutor new Promsie 
// excutor 是同步执行的

let promise = new Promise((resolve, reject) => {
    // resolve('jing')
    // reject('jjj')
    throw new Error('hh')
    // console.log(1)
})

promise.then((res) => {
    console.log(1)
}).then(() => {

}, (err) => {
    console.log(err,'2')
}).catch((err) => {
    console.log(err,'1')
})
// reject的错误会穿透



// console.log(2)

// then 是异步调用
// promise.then((res) => {
//      console.log(res,'1')
//     // return new Promise((resolve,reject) => resolve('jing1'))
// }, (err) => {
//     console.log(err, '2')
//     return 'then'
// }).then((res) => {
//     console.log(res,'3')
// }, (err) => {
//     console.log(err)
// }).catch((err) => {
//     console.log(err,'4')
// })

console.log('zhi')

// resolve reject pending
// peding-resolve pending-reject
// 反过来是不行的
