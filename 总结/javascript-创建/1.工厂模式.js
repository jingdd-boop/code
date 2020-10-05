function CP(name){
  var o = new Object();
  o.name = name;//属性
  o.getNme = function(){//方法
    console.log(this.name);
  };
  return o;
}

var person1 = CP('jing')
//缺点：对象无法识别，因为所有的实例都指向一个原型
