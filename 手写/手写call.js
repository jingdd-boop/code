function foo(){
  console.log(this.name)
}

const obj = {
  name: 'jing'
}

obj.foo = foo
obj.foo()


Function.prototype.myCall = function(thisAry,...args){
  thisAry.fn = this // this指向调用call的对象,即我们要改变this指向的函数
  return thisAry.fn(...arys)  // 执行函数并return其执行结果
}


//完善
Function.prototype.myCall = function(thisArg,...args){
  if(typeof this != 'function'){
    throw new TypeError('error')
  }

  const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this              // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](...args)  // 执行当前函数
  delete thisArg[fn]              // 删除我们声明的fn属性
  return result                  // 返回函数执行结果

}

//测试
foo.myCall(obj)     // 输出'写代码像蔡徐抻'


//9/18
Function.prototype.myCall = function(thisArg,...args){
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  const fn = Symbol('fn')
  //如果thisArg本身就有一个方法叫做fn怎么办？那不是调用call之后，
  //就会把它本身这个方法删掉了么？有的朋友会说，那起一个复杂点的函数名，
  //保证其他人不会起这么少见的名称不就完了么？不行，这也不能保证万无一失。
  thisArg = thisArg || window
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}

//9/20
Function.prototype.myCall = function (thisArg,...args) {
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  const fn = Symbol('fn')
  thisArg = thisArg || window
  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}


//call方法的作用
//1。使用call调用函数并且指定this
var obj = {
  a:1
}

function foo(b,c) {
  this.b = b;
  this.c = c;
  console.log(this.a + this.b +this.c);
}
foo.call(obj,2,3);
//2、call实现继承
//在需要实现继承的子类构造函数中，可以通过call调用父类构造函数实现继承。
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name + ":" + this.age);
  }
}
//创建一个构造函数，传递两个参数和一个内部函数
function Student(name,age,job) {
  Person.call(this,name,age);
  //使用call，将Student的this指向成Person函数的this
  this.job = job;
  this.say = function () {
    console.log(this.name + ":" +this.age + this.job)
  }
}

var me = new Student("jing",25,"fe");
console.log(me.say());

