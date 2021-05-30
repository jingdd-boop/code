// // const s = new Set();

// // [2,3,4,5,3,4].forEach(x => s.add(x));

// // for (let i of s) {
// //   console.log(i);
// // }

// // const set = new Set([1,2,3,4,4]);
// // console.log(set)
// // console.log(Array.from(set))
// // console.log(Array.prototype.slice.call(set))//不能实现

// // const items = new Set([1,2,3,4,5,6,5,5]);
// // items.size//6

// // 数组去重
// // [...new Set(array)];

// // console.log([...new Set('abbbdds')].join(''));

// //set 和对象的区别
// //对象的写法
// const properties = {
//   'width':1,
//   'heigth':1
// };

// if(properties[someName]) {
//   //
// }

// //set写法
// const properties = new Set();
// properties.add('width');
// properties.add('height');

// if(properties.has(someName)) {
//   //do somingthing
// }

// Array.from()方法可以将Set结构转为数组

// const items = new Set([1,2,3,4,5]);
// const array = Array.from(items);

// function dedupe(array) {
//   return Array.from(new Set(array));
// }

// dedupe([1, 1, 2, 3]) // [1, 2, 3]

// 遍历操作

// let set = new Set(["red", "green", "blue"]);

// for (let item of set.keys()) {
//   console.log(item);
// }
// //red
// //green
// //blue

// for (let item of set.values()) {
//   console.log(item);
// }
// //red
// //green
// //blue

// for (let item of set.entries()) {
//   console.log(item);
// }

// var obj = Object.create({ a: "123", b: "345" });
// for (let key in obj) {
//   console.log(key);
// }
// console.log(obj)
// console.log(Object.keys(obj));

// //weakSet
// //只能放对象
// const ws = new WeakMap();
// ws.add(1);
// ws.add(Symbol());
// //报错


// javascript对象，本质是键值对的集合，但是传统只能用字符串当做键

// es6提供了Map 数据结构。"键"的范围不限于字符串
//，各种类型的值都可以当作键。

// Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

