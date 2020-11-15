function copy(arr) {
  //var new_arr = arr.concat();第一种方法
var new_arr = arr.slice();//第二种方法
//slice是截取的意思，如果没有带参数，说明是全部选取
new_arr[0] = 'new';
//console.log(arr) // ["old", 1, true, null, undefined]
//console.log(new_arr) // ["new", 1, true, null, undefined]
//利用concat实现数组的第一项拷贝
return new_arr;//输出["new", 1, true, null, undefined]
//return arr;//["old", 1, true, null, undefined]
//说明拷贝没有改变数组原来的元素，
}
var arr = ['old', 1, true, null, undefined];
console.log(copy(arr))





//第三种方法---最简单的：适用于数组和对象！！

function deepCopy(arr){
  var new_arr = JSON.parse(JSON.stringify(arr));
  return new_arr;
}
// var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]
//console.log(deepCopy(arr));

//但是它不能拷贝函数：举个栗子：

var arr = [function () {
  console.log(a)
},{
  b: function () {
    console.log(b)
  }
}]

console.log(deepCopy(arr));//[ null, {} ]

//三种方式都是用来实现浅拷贝的技巧
//接下来我们思考下如何实现一个对象或者数组的浅拷贝

var shallowCopy = function (obj) {
  //只拷贝一个对象(typeof数组也是对象呀)，如果不是对象就返回，
  //(typeof 数组对象 === 'object')
  if(typeof obj !== 'object') return;
  //判断是数组还是对象，用instanceof
  var newobj = obj instanceof Array ? [] : {};

  for(var key in obj){
    if(obj.hasOwnPrototype(key)){
      //hasOwnPrototype()方法可以检测一个属性是否存在于实例中,还是存在于原型中。
      //只在给定属性存在于对象实例中时，才返回true。
      newobj[key] = obj[key];
    }
  }
  return newobj;
}