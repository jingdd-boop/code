//我们在拷贝的时候判断一下属性值的类型，如果是对象，我们递归调用深拷贝函数不就好了~

function deepCopy(obj) {
  if(typeof obj !== 'object') return;
  var newobj = obj instanceof Array ? [] : {};
  for(var key in obj){
    if(obj.hasOwnPrototype(key)){
      newobj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
      //如果属性的值是对象的话，在递归调用深拷贝函数
    }
  }
  return newobj;
}