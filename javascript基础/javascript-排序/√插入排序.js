// var arr = [34,54,1,3,24,8,92,32];
// for(var i = 0;i<arr.length;i++){
//   var n = i;
//   while(arr[n]>arr[n+1] && n>=0){
//     var tem =arr[n];
//     arr[n]=arr[n+1];
//     arrr[n+1]=temp;
//     n--
//   }
// }

function sort(arr){
  for(var i = 0;i<arr.length;i++){
    var n =i;
    while(arr[n] > arr[n+1] && n>=0){
      var t = arr[n];
      arr[n] = arr[n+1];
      arr[n+1] = t;
      n--
    }
  }
  return arr;
}


function sort(arr){
  for(var i = 0;i<arr.length;i++){
    var n = i;
    while(arr[n] > arr[n+1] && n>=0){
      var t = arr[n];
      arr[n] = arr[n+1];
      arr[n+1] = t;
    }
  }
}
var arr = [1,2,6,4,8,7];
console.log(sort(arr));
//插入排序
//时间复杂度：O(n*n)
//空间复杂度:O(1)