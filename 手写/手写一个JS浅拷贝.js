
//浅拷贝就是只进行一层拷贝，深拷贝就是无限层级拷贝
function shallowClone(source) {
  var target = {}
  for(var i in source){
    if(source.hasOwnProperty(i)){
      target[i] = source[i];
    }
  }
  return target;
}

//所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；
//和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。