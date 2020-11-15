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

function Per(){
  this.name = "jing";
}

Per.prototype = new Person();//原型链
var per1 = new Per();
console.log(per1.age);
console.log(per1 instanceof Person);

//重点：让新实例的原型等于父类的实例。
//　　　特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
//　　　　缺点：1、新实例无法向父类构造函数传参。
//　　　　　　2、继承单一。
//　　　　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）