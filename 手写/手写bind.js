// 定义这个方法为myBind
// Function.prototype.myBind = function(thisArg) {
//   if (typeof this !== 'function') {
//     return;
//   }
//   var _self = this;
//   var args = Array.prototype.slice.call(arguments, 1)
//   var fnBound = function () {
//     // 检测 New
//     // 如果当前函数的this指向的是构造函数中的this 则判定为new 操作
//     var _this = this instanceof _self ? this : thisArg;
//     return _self.apply(_this, args.concat(Array.prototype.slice.call(arguments)));
//   }
//   // 为了完成 new操作
//   // 还需要做一件事情 执行原型 链接 （思考题，为什么？
//   fnBound.prototype = this.prototype;
//   return fnBound;
// }




//9/19
// Function.prototype.myBind = function (thisAry) {
//   if(typeof this !== 'function'){
//     return ;
//   }
//   var _self = this;
//   var args = Array.prototype.slice.call(arguments,1)
//   var fnBound = function () {
//     var _this = this instanceof _self ? this : thisAry;
//     return _self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
//   }
//   fnBound.prototype = this.prototype
//   return fnBound;
// }

// //9/20
// Function.prototype.myBind = function (thisAry) {
//   if(typeof this !== 'function'){
//     return ;
//   }
//   var args = Array.prototype.slice.call(arguments,1)
//   var fnBound = function () {
//     var _this = this instanceof _self ? this : thisAry;
//     return _self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
//   }
//   fnBound.prototype = this.prototype
//   return fnBound;
// }
//9/22
Function.prototype.myBind = function (thisArg) {
  if(typeof this !== 'function'){
    return ;
  }
  var _self = this;
  var args = Array.prototype.slice.call(arguments,1)
  //类数组方法提取数组除了第一项的后部分元素
  var fnBound = function () {
    var _this = this instanceof _self ? this : thisArg;
    return _self.apply(_this,args.concat(Array.prototype.slice.call(arguments)));
  }
  fnBound.prototype = this.prototype
  return fnBound;
}

//返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
//测试
const obj = { name: '写代码像蔡徐抻' }
function foo() {
  console.log(this.name)
  console.log(arguments)
}

foo.myBind(obj, 'a', 'b', 'c')()    //输出写代码像蔡徐抻 ['a', 'b', 'c']