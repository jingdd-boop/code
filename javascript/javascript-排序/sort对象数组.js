var arr = [
  {name:'sy',age:0},
  {name:'ly',age:12},
  {name:'dfy',age:3},
  {name:'cy',age:8},
];
//判断对象的哪个属性
function compare(pro){
  return function(a,b){
    var value1 = a[pro];
    var value2 = b[pro];
    return value1 - value2;
  }
}

arr.sort(compare('age'))
console.log(arr)