# 原型到原型链

## 构造函数创建对象
```javascript
function Person() {

}
var person = new Person();
person.name = 'jing';
console.log(person.name)
```
首先创建一个构造函数，再通过new方法new一个实例（person）

## prototype
```javascript
function Person() {

}
Person.prototype.name = 'jing';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name);
console.log(person2.name);
```
每一个构造函数都有一个prototype属性，指向该构造函数的原型对象，
在上述例子中，给Person构造函数的原型对象加了一个name方法，
因此，当Person构造函数new了一个实例之后，这个实例也可以拥有这个name方法

## __proto__

```javascript
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype);

```
上面的例子输出的是true
每一个对象都有一个__proto__属性，指向它的原型

## constructor

每一个原型都有一个constructor属性指向关联的构造函数
```javascript
function Person() {

}
console.log(Person === Person.prototype.constructor);
//true
```
> 构造函数，实例对象，实例几个元素之间的关系

```javascript
function Person() {

}
var person = new Person();

console.log(preson.__proto__ == Person.prototype) //true
console.log(Person.prototype.constructor == Person) //true

console.log(Object.getPrototypeOf(person) === Person.prototype)//true

```
> 实例和原型之间的关系
> 原型的原型
> 原型链： 
实例-> 原型对象->原型对象的原型->一直到null（或者找到）