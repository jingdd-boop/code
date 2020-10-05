//构造函数模式与原型模式双剑合璧。

function Person(name){
  this.name = name;
}
Person.prototype = {
  constructor:Person,
  getName: function(){
    console.log(this.name);
  }
};

var person1 = new Person();
//优点：该共享的共享，该私有的私有，使用最广泛的方式