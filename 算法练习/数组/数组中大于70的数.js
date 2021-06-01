const numbers =[3,63,234,7,23,74,23,76,92]
//const arr = [];
// const largeNumbers =  numbers.forEach((e,i) => {
//   if(e > 70) {
//     arr.push(e);
//   }
// })
//filter内置函数，在foreach的基础上，多了一个回调函数,设置这个函数
//这个函数传递一个参数，返回的是这个参数的设定条件。number > 70


const cb = number => number > 70;
// const cd = numbers => {
//   return largeNumbers > 70;
// }s
const largeNumbers = numbers.filter(cb);
console.log(largeNumbers);