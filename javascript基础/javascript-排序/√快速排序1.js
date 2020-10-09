// function sort(arr){
//   if(arr.length <=1){
//     return arr;
//   }
//   var left = [];
//   var right = [];
//   var midIndex = parseInt(arr.length /2);
//   var mid = arr[midIndex];
//   for(var i = 0;i<arr.length;i++){
//     if(i == midIndex) continue;
//     if(arr[i] < mid){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i]);
//     }
//   }
//   return sort(left).concat([mid],sort(right));
// }

function sort(arr){
  if(arr.length < 1){
    return arr;
  }
  var left = [];
  var right = [];
  var midIndex = parseInt(arr.length /2);
  var mid = arr[midIndex];
  for(var i = 0;i<arr.length;i++){
    if(i == midIndex) continue;//在中间元素的两边找就可以了

    if(arr[i] < mid){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])
    }
  } 
   return sort(left).concat([mid],sort(right));
}

function sort(arr){
  if(arr.lenght < 1){
    return arr;
  }
  var left = [];
  var right = [];
  var midIndex = parseInt(arr.length/2);
  var mid = arr[midIndex];
  for(var i = 0;i<arr.length;i++){
    if(i == midIndex) continue;

    if(arr[i] < mid){
      left.push(arr[i])
    }
    else{
      right.push(arr[i])
    }
  }
  return sort(left).concat([mid],sort(right));
}

arr = [3,5,7,3,5,8,1,9,23,45,31]
console.log(sort(arr));
