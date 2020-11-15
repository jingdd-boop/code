//如果数组元素都是数字，可以采用哦

function flatten(arr){
  return arr.toString().split(',').map(function(item){
    //一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 
    //一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。
    return +item
  })
}

function flatten(arr){
  return arr.toString().split9(',').map(function(item){
    return +item
  })
}


var arr = [1,[2,3],[3,4,[5,6]]]
console.log(flatten(arr))