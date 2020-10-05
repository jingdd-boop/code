function Person(name) {
  var o = new Object();
  o.name = name;
  o.getName = function(){
    console.log(this.name);
  };
  return o;
}
var person1 = new Person('jing');
console.log(person1 instanceof Person);
console.log(Person1 instanceof Object);