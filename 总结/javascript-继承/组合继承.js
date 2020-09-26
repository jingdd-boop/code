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

function SubType(name){
  Person.call(this,name);//借用构造函数
}
SubType.prototype = new Person();//原型链
var sub = new SubType("jing");
console.log(sub.name);
console.log(sub.age);

// 　重点：结合了两种模式的优点，传参和复用
// 　　　　特点：1、可以继承父类原型上的属性，可以传参，可复用。
// 　　　　　　　2、每个新实例引入的构造函数属性是私有的。
// 　　　　缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。