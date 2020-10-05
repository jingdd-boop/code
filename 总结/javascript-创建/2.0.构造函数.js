function  Person(name){
  this.name = name;
  this.getName = function(){
    console.log(this.name);
  };
}
var person1 = new Person('jing')
//优点：实例可以识别为一个特定的类型

//缺点：每次创建实例时，每个方法都要被创建一次