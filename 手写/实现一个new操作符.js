//1、创建一个新的对象
//2、执行__proto__链接
//3、让this指向这个新的对象
//4、通过new创建的对象的__proto__会链接到该对象函数的prototype执行的原型对象上
//5、如果函数没有返回object类型，那么new表达式中的函数调用将返回该对象引用

function myNew(){
  var constr = Array.prototype.shift.call(arguments);//创建一个构造函数
  //arguments是一个类数组，我们需要取它的第一项，因为第一项是构造函数，使用call方法调用Array下面的shift方法来获取constr
  var obj = Object.create(constr.prototype);//创建一个新的对象使用Object.create()方法，传的参数是这个对象的原型对象
  var result = constr.apply(obj,arguments);//将构造函数this指向这个新的对象
  return result instanceof Object ? result : obj;//如果返回的是undefined，null以及基本类型的时候，都会返回新的对象；
  //而只有返回对象的时候，才会返回构造函数的返回值。
}