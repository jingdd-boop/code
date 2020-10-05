function Person(name){

}

Person.prototype = {
  constructor:Person,
  name:'jing',
  getName: function(){
    console.log(this.name);
  }
}
var person1 = new Person();

//优点：实例可以通过constructor属性找到所属构造函数

//缺点：原型模式该有的缺点还是有