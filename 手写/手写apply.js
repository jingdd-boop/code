Function.prototype.myApply = function(thisArg) {
  if(typeof this !== 'function') {
      throw new TypeError('function error')
  }
  if(!Array.isArray(arguments[1])){
      throw new TypeError('Array error')
  }
  const fn = Symbol('fn')        // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg = thisArg || window    // 若没有传入this, 默认绑定window对象
  thisArg[fn] = this 
  const args = arguments[1]             // this指向调用call的对象,即我们要改变this指向的函数
  const result = thisArg[fn](args)  // 执行当前函数
  delete thisArg[fn]              // 删除我们声明的fn属性
  return result                  // 返回函数执行结果
}
//测试
foo.myApply(obj, [])     // 输出'写代码像蔡徐抻'


//1、myApply应该挂载到Function.prototype上
//2、fn的this指向为thisArg
//3、myApply的args传给fn


//9/18
Function.prototype.myApply = function (thisArg) {
  if(typeof this != 'function'){
    throw new TypeError('error')
  }
  if(!Array.isArray(arguments[1])){
    throw new TypeError('error')
  }
  const fn = Symbol('fn')
  thisArg = thisArg || window
  thisArg[fn] = this
  const args = arguments[1]
  const result = thisArg[fn](args)
  delete thisArg[fn]
  return result
}
//先判断，this指向的是不是函数，第二第二项需要为数组，
//第三指定方法唯一，第四指向，第五指行，第六删除，第七返回





Function.prototype.myApply = function (context,args){
  //Function是构造函数，Function.prototype指向该构造函数的原型对象，
  //Function.prototype.myApply在该对象实例上写一个函数方法
  //该函数传递两个参数：context(如果不传就是给window，也可以用es6给参数设置默认参数)
  //args也要做出来
  context = context || window
  args = args ? args : []

  const key = Symbol()
  context[key] = this
  //通过隐式绑定的方式调用函数
  const result = context[key](...args)
  //删除添加的属性
  delete context[key]
  //返回函数调用的返回值
  return result
}