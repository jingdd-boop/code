function Person() {

}
var person = new Person();
person.name = 'jing';
console.log(person.name)

function Person() {

}
Person.prototype.name = 'jing';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);

function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype);


function Person() {

}
console.log(Person === Person.prototype.constructor);
//true

function Person() {

}
var person = new Person();

console.log(preson.__proto__ == Person.prototype) //true
console.log(Person.prototype.constructor == Person) //true

console.log(Object.getPrototypeOf(person) === Person.prototype)//true
