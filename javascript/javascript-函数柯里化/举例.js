//柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function add(a,b){
  return a+b;
}
//执行add函数，一次传入两个参数即可
add(1,2);

//假设有一个curry函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2)


//用途
//示意
//我们有这样一段数据
var person = [{name: 'jing'},{name: 'long'}]
//如果我们要获取所有的 name 值，我们可以这样做
var name = person.map(function (item){
  return item.name
})

//不过如果我们有 curry 函数：

var prop = curry(function(key,obj){
  return obj[key]
});

var name = person.map(prop('name'))

//person.map(prop('name')) 就好像直白的告诉你： 
//person对象遍历(map)获取(prop) name 属性。
