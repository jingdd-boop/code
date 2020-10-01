function flatten(arr){
  var result = [];
  for(var i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
      //如果数组中的元素还是数组，那就递归一下
      //使用result.concat，是因为要拼接前一个数组元素
    }
    else {
      result.push(arr[i])
    }
  }
  return result;
}


function flatten(arr){
  var result = [];
  for(var i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }
    else{
      result.push(arr[i])
    }
  }
  return result;
}



var arr = [1,[2,3],[3,4,[5,6]]]
console.log(flatten(arr))