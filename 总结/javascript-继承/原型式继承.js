//父类 
function Person(name){
  //给构造函数添加参数
  this.name = name;
  this.sum = function(){
    alert(this.name)
  }
}
Person.prototype.age = 10;
//给构造函数添加原型属性

//先封装一个函数容器，用来输出对象和承载继承的原型
function content(obj){
  function F(){}
  F.prototype = obj;//继承了传入的参数
  return new F();//返回函数对象
}

var sup = new Person();//拿到父类的实例
var sup1 = content(sup);
console.log(sup1.age)

// 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
// 　　　　特点：类似于复制一个对象，用函数来包装。
// 　　　　缺点：1、所有实例都会继承原型上的属性。
// 　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）