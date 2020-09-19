var arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[14]]],10]
//扁平化
//var flatArr = arr.flat(4);
//去重
//var disArr = Array.from(new Set(flatArr))
//排序
//let result = disArr.sort(function(a,b){
//  return a-b
//})



var flatArr = arr.flat(4);
var disArr = Array.from(new Set(flatArr));
let result = disArr.sort(function(a,b) {
  return a-b
})

console.log(result);

