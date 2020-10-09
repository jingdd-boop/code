function Person(name){

}
Person.prototype = {
  name:'jing',
  getName:function(){
    console.log(this.name);
  }
};
var person1 = new Person();

//优点：封装性好了一点

//缺点：重写了原型，丢失了constructor属性