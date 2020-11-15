function Person(name){

}
Person.prototype.name = 'jing';
Person.prototype.getName = function(){
  consolelog(this.name);
};

var person1 = new Person;
//优点：方法不会重新创建

//缺点：1. 所有的属性和方法都共享 
//2. 不能初始化参数