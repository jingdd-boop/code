// import './style.css'
// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)

// btn.onclick = function () {
//     var div = document.createElement('div')
//     div.innerHTML = 'item'
//     document.body.appendChild(div)
// }


// import counter from './counter.js'
// import number from './number.js'
// number()
// counter()

// if (module.hot) {
//     console.log(1)
//     module.hot.accept('./number', () => {
//         document.body.removeChild(document.getElementById('number'))
//         number()
//     })
// }
// import '@babel/polyfill'
// const arr = [
//     new Promise(() => { }),
//     new Promise(() => { })
// ]

// arr.map(item => {
//     console.log(item)
// })

import { add } from './math.js'
add(1,2)