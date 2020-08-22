function instanceOf(left,right) {

  let proto = left.__proto__;
  let prototype = right.prototype
  while(true) {
      if(proto === null) return false
      if(proto === prototype) return true
      proto = proto.__proto__;
  }
}


// 判断letf，right是不是在一条原型链上
//首先需要知道的是原型链，每个构造函数都有一个prototype属性，指向它的原型对象，同
//时这个构造函数具备，一个constructor属性，它指向的是它的构造函数
//通过构造函数new一个实例，这个实例会具有__proto__属性，指向的是这个构造函数的原型对象
//instanceof就是实现，判断两个实例是否在一条原型链上
//首先我们需要找到这条原型链上的原型对象
//left表示的是一个实例，而right表示的是构造这个实例的构造函数
//let proto = left.__proto__，这样就可以找到这个实例的原型对象
//然后我们要找到的是构造函数的原型对象
//let prototype = right.prototype,这样就可以找到这个构造函数的原型对象
//如果实例和构造函数的原型对象相同的话，那么，他们就是在一条原型链上
//让proto = proto.__proto__如果找不到原型对象，就一直往下找，知道
//如果实例的原型对象为空的话，那么返回false，
//如果实例和构造函数的原型对象相等，那么返回true



// function instanceof(left,right){
//   let proto = left.__proto__
//   let prototype = right.prototype
//   while(true){
//     proto = proto.prototype
//     if(proto === null) return false
//     if(proto === prototype) return true
//   }

// }