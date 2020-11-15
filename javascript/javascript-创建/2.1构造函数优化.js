function Person(name){
  this.name = name;
  this.getName = getName;
}
function getName(){
  console.log(this.name);
}

var person1 = new Person('jing');

//优点：解决了每个方法都要被重新创建的问题

//缺点：这叫啥封装……